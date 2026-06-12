-- ============================================================================
-- JobPilot Database Schema
-- Executed against InsForge backend
-- ============================================================================

-- 1. PROFILES TABLE ----------------------------------------------------------
-- One row per user. Auto-created on signup via trigger below.
-- Primary key (id) matches InsForge auth.users(id).

CREATE TABLE IF NOT EXISTS public.profiles (
  id                  uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name           text,
  email               text,
  phone               text,
  location            text,
  current_title       text,
  experience_level    text,
  years_experience    integer,
  skills              text[],
  industries          text[],
  work_experience     jsonb       DEFAULT '[]'::jsonb,
  education           jsonb       DEFAULT '{}'::jsonb,
  job_titles_seeking  text[],
  remote_preference   text,
  preferred_locations text[],
  salary_expectation  text,
  cover_letter_tone   text,
  linkedin_url        text,
  portfolio_url       text,
  work_authorization  text,
  resume_pdf_url      text,
  is_complete         boolean     DEFAULT false,
  created_at          timestamptz DEFAULT now(),
  updated_at          timestamptz DEFAULT now()
);

-- 2. AGENT RUNS TABLE --------------------------------------------------------
-- One row per agent search or research operation.

CREATE TABLE IF NOT EXISTS public.agent_runs (
  id                  uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id             uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  status              text        DEFAULT 'running',
  job_title_searched  text,
  location_searched   text,
  jobs_found          integer     DEFAULT 0,
  started_at          timestamptz DEFAULT now(),
  completed_at        timestamptz
);

-- 3. JOBS TABLE --------------------------------------------------------------
-- One row per discovered or imported job.

CREATE TABLE IF NOT EXISTS public.jobs (
  id                  uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  run_id              uuid REFERENCES public.agent_runs(id) ON DELETE SET NULL,
  user_id             uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  source              text,
  source_url          text,
  external_apply_url  text,
  title               text,
  company             text,
  location            text,
  salary              text,
  job_type            text,
  about_role          text,
  responsibilities    text[],
  requirements        text[],
  nice_to_have        text[],
  benefits            text[],
  about_company       text,
  match_score         integer,
  match_reason        text,
  matched_skills      text[],
  missing_skills      text[],
  company_research    jsonb,
  found_at            timestamptz DEFAULT now()
);

-- 4. AGENT LOGS TABLE --------------------------------------------------------
-- Human-readable log entries for each agent run.

CREATE TABLE IF NOT EXISTS public.agent_logs (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  run_id      uuid REFERENCES public.agent_runs(id) ON DELETE CASCADE,
  user_id     uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  message     text,
  level       text        DEFAULT 'info',
  job_id      uuid REFERENCES public.jobs(id) ON DELETE SET NULL,
  created_at  timestamptz DEFAULT now()
);

-- ============================================================================
-- INDEXES — common query paths
-- ============================================================================

CREATE INDEX IF NOT EXISTS idx_agent_runs_user_id      ON public.agent_runs(user_id);
CREATE INDEX IF NOT EXISTS idx_jobs_user_id             ON public.jobs(user_id);
CREATE INDEX IF NOT EXISTS idx_jobs_run_id              ON public.jobs(run_id);
CREATE INDEX IF NOT EXISTS idx_jobs_match_score         ON public.jobs(user_id, match_score);
CREATE INDEX IF NOT EXISTS idx_jobs_found_at            ON public.jobs(user_id, found_at);
CREATE INDEX IF NOT EXISTS idx_agent_logs_run_id        ON public.agent_logs(run_id);
CREATE INDEX IF NOT EXISTS idx_agent_logs_user_id       ON public.agent_logs(user_id);

-- ============================================================================
-- AUTO-CREATE PROFILE ON SIGNUP
-- ============================================================================

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, email)
  VALUES (NEW.id, NEW.email);
  RETURN NEW;
END;
$$;

-- Drop and recreate trigger for idempotency
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- ============================================================================
-- ROW LEVEL SECURITY
-- ============================================================================

-- Profiles ---------------------------------------------------------------
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "profiles_select_own" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "profiles_insert_own" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "profiles_update_own" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Agent Runs -------------------------------------------------------------
ALTER TABLE public.agent_runs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "agent_runs_select_own" ON public.agent_runs
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "agent_runs_insert_own" ON public.agent_runs
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "agent_runs_update_own" ON public.agent_runs
  FOR UPDATE USING (auth.uid() = user_id);

-- Jobs -------------------------------------------------------------------
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "jobs_select_own" ON public.jobs
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "jobs_insert_own" ON public.jobs
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "jobs_update_own" ON public.jobs
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "jobs_delete_own" ON public.jobs
  FOR DELETE USING (auth.uid() = user_id);

-- Agent Logs -------------------------------------------------------------
ALTER TABLE public.agent_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "agent_logs_select_own" ON public.agent_logs
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "agent_logs_insert_own" ON public.agent_logs
  FOR INSERT WITH CHECK (auth.uid() = user_id);
