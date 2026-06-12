# Memory — Database Schema

Last updated: 2026-06-12

## What was built

- `lib/schema.sql` — Complete DDL: 4 tables (`profiles`, `agent_runs`, `jobs`, `agent_logs`), 7 indexes, signup trigger (`handle_new_user`), RLS policies on all tables. Single source of truth for database shape.
- InsForge backend — All 4 tables created and verified with full schema validation. `resumes` storage bucket created (private, authenticated access only).
- Trigger `on_auth_user_created` — Auto-creates a `profiles` row (id + email) on every `auth.users` insert. Guarantees profile exists before any downstream operation.

## Decisions made

- **Trigger on signup** — Profile row auto-created via `handle_new_user()` trigger on `auth.users` insert. `is_complete` defaults `false`, driving the dashboard incomplete profile banner. No null-profile edge cases.
- **Schema as file** — `lib/schema.sql` is the version-controlled source of truth. Executed via raw SQL against InsForge.
- **RLS defense-in-depth** — Full RLS on all 4 tables (`auth.uid() = user_id` / `auth.uid() = id`) even though server client bypasses. Extra safety layer for potential future client-side queries.

## Problems solved

- None encountered — schema created cleanly, all verifications passed on first try

## Current state

- ✅ 01 Homepage — complete
- ✅ 02 Auth — complete (Google + GitHub OAuth, proxy.ts, token refresh)
- ✅ 04 Database Schema — complete (4 tables, RLS, indexes, trigger, storage bucket)
- ✅ 14 Dashboard Page — complete UI with mock data
- ⬜ 03 PostHog Initialization — skipped for now
- ⬜ All remaining features (05–13, 15–17)
- Build: passes cleanly, zero errors

## Next session starts with

03 PostHog Initialization — `lib/posthog-client.ts`, `lib/posthog-server.ts`, wrap app in PostHog provider, identify on login, reset on logout
(Or if we skip 03 again: 05 Profile Page — Full UI)

## Open questions

- None
