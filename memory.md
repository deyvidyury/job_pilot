# Memory — 02 Auth

Last updated: 2026-06-11

## What was built

- `lib/insforge-client.ts` — Browser client via `createBrowserClient()` from `@insforge/sdk/ssr`
- `lib/insforge-server.ts` — Server client wrapper, `createInsforgeServer()` reads cookies from `next/headers`
- `proxy.ts` — Route protection at project root (Next.js 16 renamed from `middleware.ts`). Uses `updateSession()` with cookie adapters. Protects `/dashboard`, `/profile`, `/find-jobs`
- `actions/auth.ts` — Server Actions for Google and GitHub OAuth. Creates server client, gets OAuth URL + PKCE verifier, stores verifier in httpOnly cookie, redirects
- `app/api/auth/oauth/exchange/route.ts` — Server-side OAuth callback. Reads `insforge_code` + verifier cookie, calls `exchangeOAuthCode()`, sets auth cookies via `setAuthCookies()`, redirects to `/dashboard`
- `app/api/auth/refresh/route.ts` — Token refresh via `createRefreshAuthRouter()`
- `app/(auth)/login/page.tsx` — Client component with Google + GitHub OAuth buttons, calls Server Actions
- `app/page.tsx` — Updated to check auth server-side, redirect logged-in users to `/dashboard`
- `.env.local` — Added `NEXT_PUBLIC_SITE_URL=http://localhost:3000`

## Decisions made

- **Server-side OAuth callback** via API route — eliminates timing gap where proxy.ts redirects before session cookies are set
- **PKCE verifier via cookie** — Server Action stores verifier in short-lived httpOnly cookie; callback route reads it for server-side code exchange
- **Explicit proxy.ts matcher** — Only matches protected routes (`/dashboard/:path*`, `/profile/:path*`, `/find-jobs/:path*`). Login page and API routes are not matched
- **Server Actions for OAuth initiation** — Server client calls `signInWithOAuth({ skipBrowserRedirect: true })` to get URL + codeVerifier, stores verifier in cookie, redirects via `redirect()`

## Problems solved

- `@insforge/ssr` package does not exist — SSR utilities are at `@insforge/sdk/ssr`
- `updateSession()` CookieStore type mismatch with Next.js RequestCookies/ResponseCookies — created adapter wrappers for `get`, `set`, `delete`
- OAuth auto-detection only works in browser mode — server-side exchange requires explicit `exchangeOAuthCode(code, codeVerifier)` call
- PKCE verifier is browser-only (sessionStorage) — solved by storing verifier in httpOnly cookie from Server Action, reading in callback route

## Current state

- Build passes: `npm run build` succeeds with no errors
- All auth files created and compiling
- proxy.ts active with route protection
- Login page UI built and registered
- NOT yet tested with actual OAuth flow (needs browser testing)

## Next session starts with

03 PostHog Initialization — `lib/posthog-client.ts`, `lib/posthog-server.ts`, wrap app in PostHog provider, identify on login, reset on logout

## Open questions

- None — 02 Auth is complete and builds cleanly
