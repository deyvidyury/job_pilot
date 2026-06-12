# Progress Tracker

Update this file after every completed feature. Any AI agent reading this should immediately know what is done, what is in progress, and what is next.

---

## Current Status

**Phase:** Phase 2 — Profile Page
**Last completed:** 05 Profile Page — Full UI
**Next:** 03 PostHog Initialization or 06 Profile Save Logic

---

## Progress

### Phase 1 — Foundation

- [x] 01 Homepage
- [x] 02 Auth
- [ ] 03 PostHog Initialization
- [x] 04 Database Schema

### Phase 2 — Profile Page

- [x] 05 Profile Page — Full UI
- [ ] 06 Profile Save Logic
- [ ] 07 AI Profile Extraction from Resume
- [ ] 08 Resume PDF Generation from Profile

### Phase 3 — Find Jobs Page

- [ ] 09 Find Jobs Page — Full UI
- [ ] 10 Adzuna Job Discovery
- [ ] 11 Filter + Sort + Pagination

### Phase 4 — Job Details Page

- [ ] 12 Job Details Page — Full UI
- [ ] 13 Company Research Agent

### Phase 5 — Dashboard

- [x] 14 Dashboard Page — Full UI (mock data, placeholder charts)
- [ ] 15 Stats Bar — Real Data
- [ ] 16 Recent Activity — Real Data
- [ ] 17 Analytics Charts — PostHog Data

---

## Decisions Made During Build

### 04 Database Schema

- **Trigger on signup** — `handle_new_user()` trigger on `auth.users` auto-creates `profiles` row with `is_complete = false`. Eliminates null-profile edge cases.
- **Schema as file** — `lib/schema.sql` is version-controlled source of truth.
- **RLS on all tables** — Defense-in-depth even though server client bypasses RLS.

### 02 Auth

- **Server-side OAuth callback** — Uses API route (`app/api/auth/oauth/exchange/route.ts`) instead of client-side callback page. Eliminates timing gap where proxy.ts redirects before cookies are set.
- **PKCE verifier via cookie** — Server Action stores PKCE code verifier in short-lived httpOnly cookie, callback API route reads it to exchange OAuth code server-side.
- **`proxy.ts` (Next.js 16)** — Uses `updateSession()` from `@insforge/sdk/ssr`. Named `proxy.ts` not `middleware.ts` (Next.js 16 convention). Explicit matcher for protected routes only.
- **Login page as Client Component** — Calls Server Actions for OAuth initiation. Server Actions create server client, get OAuth URL + code verifier, store verifier in cookie, redirect to provider.
- **Token refresh** — Uses `createRefreshAuthRouter()` from `@insforge/sdk/ssr` at `/api/auth/refresh`.
- **InsForge SDK** — Uses `@insforge/sdk` (not `@insforge/ssr`). SSR utilities imported from `@insforge/sdk/ssr`.

---

## Notes

### 05 Profile Page — Full UI

- Created `app/profile/page.tsx` — server component, checks auth via `getCurrentUser()`, renders Navbar/Footer, passes mock data to child components.
- Created `components/profile/CompletionIndicator.tsx` — profile attention banner with SVG completion ring (percentage), missing field tags with X dismiss buttons, "Complete Profile" CTA.
- Created `components/profile/ResumeUpload.tsx` — dashed-border upload drop zone with icon, "Select Resume" secondary button, "Generate Resume from Profile" secondary button below.
- Created `components/profile/ProfileForm.tsx` — client component (`'use client'`) with full form state management:
  - **Personal Info**: Full Name, Email (disabled), Phone Number, Location, LinkedIn URL, Portfolio/GitHub, Work Authorization dropdown. Two-column grid.
  - **Professional Info**: Current Job Title, Experience Level dropdown, Years of Experience, Skills tag input with +Add, Industries tag input with +Add.
  - **Work Experience**: Up to 3 roles, each with Company Name, Job Title, Start Date, End Date, "Currently working here" checkbox, Key Responsibilities textarea. Add/remove role buttons.
  - **Education**: Highest Degree dropdown, Field of Study, Institution Name, Graduation Year. Two-column grid.
  - **Job Preferences**: Job Titles Seeking tags with +Add, Remote Preference dropdown, Salary Expectation, Preferred Locations, Cover Letter Tone dropdown.
  - Save Profile button at bottom right.
- Created `components/profile/ResumePreview.tsx` — preview card shown when a resume URL exists, with PDF icon, file name, and "View PDF" link.
- All tags use project tokens: skills `bg-success-lightest text-success-foreground`, industries `bg-info-lightest text-info-foreground`, job titles `bg-accent-muted text-accent`.
- Form uses empty mock data — no save logic yet (06 Profile Save Logic).
- Updated `ui-registry.md` with all 4 new components and their exact classes.

### Dashboard Placeholder (post-02 Auth fix)

- Created `app/dashboard/page.tsx` — server component, checks auth via `getCurrentUser()`, redirects to `/login` if unauthenticated. Shows welcome message with user email.
- Created `components/dashboard/IncompleteProfileBanner.tsx` — accent-muted banner with CTA to `/profile`.
- Created `components/dashboard/StatsBar.tsx` — 4 stat cards (Total Jobs Found, Avg. Match Rate, Companies Researched, Jobs This Week) with mock zero values and trend badges.
- Created `components/dashboard/RecentActivity.tsx` — welcome message as first activity entry, empty state handled.
- Created `components/dashboard/AnalyticsCharts.tsx` — 3 chart placeholders (Jobs Found Over Time, Match Score Distribution, Company Research Activity) with empty state SVGs.
- Stats, activity, and charts will be wired to real data in features 15-17.
- Fixed `getUser()` → `getCurrentUser()` typo during build.

### 02 Auth

- `@insforge/ssr` package does not exist on npm — SSR utilities are part of `@insforge/sdk/ssr`.
- `updateSession()` expects `CookieStore` interface which differs from Next.js `RequestCookies`/`ResponseCookies`. Adapter wrappers needed in `proxy.ts`.
- OAuth auto-detection (`detectAuthCallback`) only works in browser mode (`isServerMode: false`). Server-side exchange requires explicit `exchangeOAuthCode()` call.
- `createServerClient()` reads `NEXT_PUBLIC_INSFORGE_URL` and `NEXT_PUBLIC_INSFORGE_ANON_KEY` from env automatically.
