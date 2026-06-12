# Progress Tracker

Update this file after every completed feature. Any AI agent reading this should immediately know what is done, what is in progress, and what is next.

---

## Current Status

**Phase:** Phase 1 — Foundation
**Last completed:** 02 Auth
**Next:** 03 PostHog Initialization

---

## Progress

### Phase 1 — Foundation

- [x] 01 Homepage
- [x] 02 Auth
- [ ] 03 PostHog Initialization
- [ ] 04 Database Schema

### Phase 2 — Profile Page

- [ ] 05 Profile Page — Full UI
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

- [ ] 14 Dashboard Page — Full UI
- [ ] 15 Stats Bar — Real Data
- [ ] 16 Recent Activity — Real Data
- [ ] 17 Analytics Charts — PostHog Data

---

## Decisions Made During Build

### 02 Auth

- **Server-side OAuth callback** — Uses API route (`app/api/auth/oauth/exchange/route.ts`) instead of client-side callback page. Eliminates timing gap where proxy.ts redirects before cookies are set.
- **PKCE verifier via cookie** — Server Action stores PKCE code verifier in short-lived httpOnly cookie, callback API route reads it to exchange OAuth code server-side.
- **`proxy.ts` (Next.js 16)** — Uses `updateSession()` from `@insforge/sdk/ssr`. Named `proxy.ts` not `middleware.ts` (Next.js 16 convention). Explicit matcher for protected routes only.
- **Login page as Client Component** — Calls Server Actions for OAuth initiation. Server Actions create server client, get OAuth URL + code verifier, store verifier in cookie, redirect to provider.
- **Token refresh** — Uses `createRefreshAuthRouter()` from `@insforge/sdk/ssr` at `/api/auth/refresh`.
- **InsForge SDK** — Uses `@insforge/sdk` (not `@insforge/ssr`). SSR utilities imported from `@insforge/sdk/ssr`.

---

## Notes

### 02 Auth

- `@insforge/ssr` package does not exist on npm — SSR utilities are part of `@insforge/sdk/ssr`.
- `updateSession()` expects `CookieStore` interface which differs from Next.js `RequestCookies`/`ResponseCookies`. Adapter wrappers needed in `proxy.ts`.
- OAuth auto-detection (`detectAuthCallback`) only works in browser mode (`isServerMode: false`). Server-side exchange requires explicit `exchangeOAuthCode()` call.
- `createServerClient()` reads `NEXT_PUBLIC_INSFORGE_URL` and `NEXT_PUBLIC_INSFORGE_ANON_KEY` from env automatically.
