# Memory — Login Redesign + Profile Page + Navbar Logout

Last updated: 2026-06-12

## What was built

- **05 Profile Page — Full UI** (5 files):
  - `app/profile/page.tsx` — Server component, auth check, passes mock data
  - `components/profile/CompletionIndicator.tsx` — SVG completion ring (%), missing field tags, CTA
  - `components/profile/ResumeUpload.tsx` — Dashed-border drop zone, "Select Resume" + "Generate Resume from Profile" buttons
  - `components/profile/ProfileForm.tsx` — Client component, 5 form sections (Personal Info, Professional Info, Work Experience, Education, Job Preferences), tag inputs with add/remove, role add/remove, Save button
  - `components/profile/ResumePreview.tsx` — Resume PDF preview card

- **Login page redesign** — `app/(auth)/login/page.tsx`:
  - Two-pane card layout (`grid-cols-1 md:grid-cols-2`)
  - Left pane: light hero-style gradient (`surface → accent-muted → accent-light`), two soft accent radial glows, InsForge badge (hero-style accent badge), heading + body + new-user note
  - Right pane: "Welcome to JobPilot", auth provider buttons
  - Stacks vertically on mobile

- **Navbar logout** — 4 files changed:
  - `actions/auth.ts` — Added `signOut()` Server Action
  - `components/layout/Navbar.tsx` — Added `user` prop; renders "Logout" form button (secondary style) when logged in, "Start for free" link when not
  - `app/dashboard/page.tsx` + `app/profile/page.tsx` — Pass `user` to Navbar

## Decisions made

- **ProfileForm as client component** — `useState` for all form fields; required for tag add/remove, role add/remove, checkbox toggles
- **Tag color coding** — Skills: green (`success-lightest`/`success-foreground`), Industries: blue (`info-lightest`/`info-foreground`), Job Titles: purple (`accent-muted`/`accent`)
- **Login left pane light gradient** — Mirrors hero section feel: `surface → accent-muted → accent-light` with soft accent glows. All dark text. Badge uses hero-style `bg-accent-muted border-accent-light text-accent`
- **Logout as Server Action form** — `<form action={signOut}>` pattern; no client JS needed for logout
- **Navbar auth via prop** — Pages pass `user` down; Navbar stays a simple presentational server component

## Problems solved

- None — all builds passed cleanly on first try, zero TypeScript errors

## Current state

- ✅ 01 Homepage — complete
- ✅ 02 Auth — complete (Google + GitHub OAuth, proxy.ts, token refresh, login page redesigned, logout working)
- ✅ 04 Database Schema — complete (4 tables, RLS, indexes, trigger, storage bucket)
- ✅ 05 Profile Page — Full UI (mock data, no save logic)
- ✅ 14 Dashboard Page — complete UI with mock data
- ⬜ 03 PostHog Initialization — skipped
- ⬜ 06 Profile Save Logic — next
- ⬜ All remaining features (07–13, 15–17)
- Build: passes cleanly, zero errors
- ui-registry.md and progress-tracker.md updated

## Next session starts with

06 Profile Save Logic — Wire ProfileForm to `actions/profile.ts` Server Action, save to `profiles` table, upload resume to InsForge Storage, calculate `is_complete` flag, `revalidatePath('/profile')`.
(Or 03 PostHog Initialization if desired)

## Open questions

- None
