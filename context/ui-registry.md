# UI Registry

Living document. Updated after every component is built. Read this before building any new component — match existing patterns exactly before inventing new ones.

---

## How to Use

Before building any component:

1. Check if a similar component already exists here
2. If yes — match its exact classes
3. If no — build it following ui-rules.md and ui-tokens.md, then add it here

After building any component — update this file with the component name, file path, and exact classes used.

---

## Components

### Navbar

**File:** `components/layout/Navbar.tsx`

- Container: `h-16 bg-surface border-b border-border sticky top-0 z-50`
- Inner: `max-w-360 mx-auto h-full flex items-center justify-between px-6`
- Logo icon wrapper: `w-8 h-8 bg-accent rounded-lg flex items-center justify-center`
- Logo text: `text-text-primary font-semibold text-base`
- Nav links: `text-text-dark text-sm font-medium hover:text-accent transition-colors`
- Nav link active: `text-accent text-sm font-medium transition-colors`
- CTA button: `bg-accent text-accent-foreground rounded-md px-4 py-2 text-sm font-medium hover:bg-accent-dark transition-colors`

---

### Footer

**File:** `components/layout/Footer.tsx`

- Outer: `bg-surface border-t border-border`
- Inner: `max-w-360 mx-auto px-8 py-14`
- Grid: `grid grid-cols-1 md:grid-cols-4 gap-10`
- Link group heading: `text-text-primary text-sm font-semibold mb-4`
- Links: `text-text-secondary text-sm hover:text-text-primary transition-colors`
- Bottom bar: `border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4`
- Copyright text: `text-text-muted text-sm`

---

### Hero

**File:** `components/homepage/Hero.tsx`

- Section: `bg-surface pt-20 pb-0 px-8 overflow-hidden`
- Badge: `inline-flex items-center gap-2 bg-accent-muted border border-accent-light text-accent rounded-full px-4 py-1.5 text-sm font-medium`
- H1: `text-center text-5xl font-bold text-text-primary leading-tight mb-6 max-w-3xl mx-auto`
- H1 accent span: `text-accent`
- Subtitle: `text-center text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto mb-10`
- Primary CTA: `bg-accent text-accent-foreground px-6 py-3 rounded-md text-sm font-medium hover:bg-accent-dark transition-colors`
- Secondary CTA: `bg-surface border border-border text-text-primary px-6 py-3 rounded-md text-sm font-medium hover:bg-surface-secondary transition-colors`
- Screenshot wrapper: `relative mx-auto max-w-5xl rounded-t-xl overflow-hidden border border-border border-b-0 shadow-[0_8px_40px_rgba(124,92,252,0.12)]`
- Browser chrome: `bg-surface-tertiary border-b border-border px-4 py-3 flex items-center gap-2`
- Chrome dots: `w-3 h-3 rounded-full` + color token

---

### HowItWorks

**File:** `components/homepage/HowItWorks.tsx`

- Section: `bg-background py-24 px-8`
- Section label: `text-accent text-sm font-medium uppercase tracking-widest mb-3`
- H2: `text-3xl font-bold text-text-primary mb-4`
- Subtitle: `text-text-secondary text-base max-w-xl mx-auto`
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`
- Step card: `bg-surface rounded-xl border border-border p-6 shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] h-full`
- Step number box: `w-14 h-14 rounded-xl bg-accent-muted border border-accent-light flex items-center justify-center mb-5`
- Step number: `text-accent font-bold text-lg`
- Step title: `text-text-primary font-semibold text-base mb-2`
- Step body: `text-text-secondary text-sm leading-relaxed`

---

### Features

**File:** `components/homepage/Features.tsx`

- Section: `bg-surface py-24 px-8`
- Grid: `grid grid-cols-1 lg:grid-cols-3 gap-6`
- Default card: `rounded-xl border border-border bg-surface overflow-hidden shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] flex flex-col`
- Accent card: `rounded-xl border border-accent bg-accent-muted overflow-hidden ... flex flex-col`
- Icon box default: `w-9 h-9 rounded-lg bg-accent-muted text-accent flex items-center justify-center`
- Icon box accent: `w-9 h-9 rounded-lg bg-accent text-accent-foreground flex items-center justify-center`
- Card label: `text-xs font-medium uppercase tracking-wide text-text-secondary` (or `text-accent` on accent card)
- Card title: `text-text-primary font-semibold text-base leading-snug mb-3`
- Card body: `text-text-secondary text-sm leading-relaxed`

---

### Testimonials (inline in page.tsx)

**File:** `app/page.tsx`

- Section: `bg-background py-24 px-8`
- Card: `bg-surface rounded-xl border border-border p-6 shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] flex flex-col gap-5`
- Stars: `w-4 h-4` SVG filled with `#FF8904` (warning token)
- Quote: `text-text-dark text-sm leading-relaxed flex-1`
- Author row: `flex items-center gap-3 pt-2 border-t border-border`
- Author name: `text-text-primary text-sm font-medium`
- Author role: `text-text-muted text-xs`

---

### Bottom CTA (inline in page.tsx)

**File:** `app/page.tsx`

- Section: `bg-overlay py-24 px-8`
- H2: `text-3xl font-bold text-white mb-4`
- Subtitle: `text-info-muted text-base max-w-lg mx-auto mb-10`
- Primary CTA: `bg-accent text-accent-foreground px-8 py-3 rounded-md text-sm font-medium hover:bg-accent-dark transition-colors`
- Ghost CTA: `border border-white/20 text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-white/5 transition-colors`

---

### Login Page

**File:** `app/(auth)/login/page.tsx`

- Page wrapper: `min-h-screen bg-background flex items-center justify-center px-4 py-8`
- Two-pane card: `w-full max-w-2xl bg-surface rounded-xl border border-border shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] overflow-hidden grid grid-cols-1 md:grid-cols-2`
- Left pane: `p-8 flex flex-col justify-between relative overflow-hidden` with light gradient `linear-gradient(160deg, var(--color-surface) 0%, var(--color-accent-muted) 45%, color-mix(in srgb, var(--color-accent-light) 60%, var(--color-surface)) 100%)`
- Left pane glows: two `absolute rounded-full pointer-events-none` circles — top-right `w-56 h-56 -top-16 -right-16` at 12% accent, bottom-left `w-48 h-48 -bottom-12 -left-12` at 8% accent
- Left pane badge: uses hero-style accent badge — `bg-accent-muted border border-accent-light text-accent`
- Left pane heading: `text-text-primary` (dark, not white)
- Left pane body: `text-text-secondary`
- Left pane note: `text-text-muted`
- InsForge badge: `inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-3 py-1 mb-8`
- Badge icon: `w-[14px] h-[14px] text-success`
- Badge text: `text-white/70 text-xs font-medium`
- Left heading: `text-white text-2xl font-bold leading-tight mb-3`
- Left body: `text-info-muted text-sm leading-relaxed`
- Left note: `text-white/40 text-xs leading-relaxed mt-8`
- Right pane: `p-8 flex flex-col justify-center`
- Right heading: `text-text-primary text-lg font-semibold mb-1.5`
- Right subtitle: `text-text-secondary text-sm mb-8`
- Button container: `flex flex-col gap-3`
- Google button: `w-full flex items-center justify-center gap-3 bg-surface border border-border text-text-primary rounded-md px-4 py-2.5 text-sm font-medium hover:bg-surface-secondary transition-colors`
- GitHub button: `w-full flex items-center justify-center gap-3 bg-overlay-dark text-white rounded-md px-4 py-2.5 text-sm font-medium hover:bg-overlay transition-colors`
- Button icons: `w-[18px] h-[18px]`

---

### StatsBar

**File:** `components/dashboard/StatsBar.tsx`

- Grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`
- Stat card: `bg-surface rounded-xl border border-border p-6 shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]`
- Stat label: `text-text-muted text-xs font-normal leading-4 mb-2`
- Stat value: `text-[30px] font-semibold leading-9 text-text-primary mb-1`
- Trend badge up: `bg-success-lightest text-success-darker text-xs font-medium px-2 py-0.5 rounded`
- Trend badge down: `bg-accent-muted text-text-secondary text-xs font-medium px-2 py-0.5 rounded`

---

### IncompleteProfileBanner

**File:** `components/dashboard/IncompleteProfileBanner.tsx`

- Outer: `bg-accent-muted border border-accent-light rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`
- Icon box: `w-8 h-8 rounded-lg bg-accent text-accent-foreground flex items-center justify-center shrink-0`
- Title: `text-text-primary text-sm font-semibold leading-5`
- Body: `text-text-secondary text-sm leading-5 mt-0.5`
- CTA button: `bg-accent text-accent-foreground rounded-md px-4 py-2 text-sm font-medium hover:bg-accent-dark transition-colors shrink-0`

---

### RecentActivity

**File:** `components/dashboard/RecentActivity.tsx`

- Card: `bg-surface rounded-xl border border-border p-6 shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]`
- Heading: `text-text-primary text-base font-semibold leading-6 mb-5`
- Empty state: `text-text-muted text-sm`
- List: `flex flex-col gap-4`
- Dot success: `bg-success`, info: `bg-info`, warning: `bg-warning` — all `w-2 h-2 rounded-full shrink-0 mt-1.5`
- Activity text: `text-text-primary text-sm font-medium leading-5`
- Timestamp: `text-text-muted text-xs leading-4 mt-0.5`

---

### AnalyticsCharts

**File:** `components/dashboard/AnalyticsCharts.tsx`

- Grid: `grid grid-cols-1 lg:grid-cols-3 gap-6`
- Chart card: `bg-surface rounded-xl border border-border p-6 shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]`
- Chart title: `text-text-primary text-base font-semibold leading-6 mb-1`
- Chart subtitle: `text-text-muted text-xs leading-4 mb-6`
- Empty state: centered `text-text-muted text-sm` with SVG icon (`opacity-40`)

---

### CompletionIndicator (Profile)

**File:** `components/profile/CompletionIndicator.tsx`

- Outer: `bg-accent-muted border border-accent-light rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`
- Completion ring: SVG `w-16 h-16`, track `var(--color-accent-light)`, fill `var(--color-accent)`
- Percent label: `text-accent text-xs font-bold` centered over ring
- Title: `text-text-primary text-sm font-semibold leading-5`
- Body: `text-text-secondary text-sm leading-5 mt-0.5`
- Missing field tag: `inline-flex items-center gap-1 bg-surface border border-border-light text-text-secondary rounded-full px-2.5 py-0.5 text-xs font-medium`
- Tag X icon: `w-2.5 h-2.5 text-text-muted`
- CTA button: `bg-accent text-accent-foreground rounded-md px-4 py-2 text-sm font-medium hover:bg-accent-dark transition-colors shrink-0`

---

### ResumeUpload (Profile)

**File:** `components/profile/ResumeUpload.tsx`

- Card: `bg-surface rounded-xl border border-border p-6 shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]`
- Heading: `text-text-primary text-base font-semibold leading-6 mb-5`
- Upload zone: `border-2 border-dashed border-border rounded-xl p-10 flex flex-col items-center justify-center text-center`
- Upload icon wrapper: `w-12 h-12 rounded-full bg-surface-secondary flex items-center justify-center mb-4`
- Upload icon: `w-6 h-6 text-text-muted`
- Upload text: `text-text-primary text-sm font-medium mb-1`
- Upload hint: `text-text-muted text-xs`
- Select button: `bg-surface border border-border text-text-primary rounded-md px-4 py-2 text-sm font-medium hover:bg-surface-secondary transition-colors` (mt-5)
- Generate button: `bg-surface border border-border text-text-primary rounded-md px-4 py-2.5 text-sm font-medium hover:bg-surface-secondary transition-colors` (mt-4, w-full)

---

### ProfileForm (Profile)

**File:** `components/profile/ProfileForm.tsx`

- Card: `bg-surface rounded-xl border border-border p-6 shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]`
- Heading: `text-text-primary text-base font-semibold leading-6 mb-6`
- Section divider: `border-t border-border pt-6 mt-6 first:border-t-0 first:pt-0 first:mt-0`
- Section title: `text-text-primary text-sm font-semibold leading-5 mb-4`
- Form label: `block text-text-dark text-sm font-medium mb-1.5`
- Input: `w-full bg-surface border border-border rounded-md px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-colors`
- Input disabled: `bg-surface-secondary text-text-muted cursor-not-allowed`
- Select: same as input
- Textarea: same as input with `rows={3}`
- Two-column grid: `grid grid-cols-1 md:grid-cols-2 gap-4`
- Tag input row: `flex gap-2`
- Add button: `bg-surface border border-border text-text-primary rounded-md px-4 py-2 text-sm font-medium hover:bg-surface-secondary transition-colors shrink-0`
- Skill tag: `inline-flex items-center gap-1 bg-success-lightest text-success-foreground rounded-full px-2.5 py-0.5 text-xs font-medium`
- Industry tag: `inline-flex items-center gap-1 bg-info-lightest text-info-foreground rounded-full px-2.5 py-0.5 text-xs font-medium`
- Job title tag: `inline-flex items-center gap-1 bg-accent-muted text-accent rounded-full px-2.5 py-0.5 text-xs font-medium`
- Tag remove button: `hover:text-error transition-colors`
- Work role card: `border border-border rounded-lg p-4 mb-4 last:mb-0`
- Role header: `flex items-center justify-between mb-3` with `text-text-primary text-sm font-medium`
- Delete role button: `text-text-muted hover:text-error transition-colors`
- Checkbox: `w-4 h-4 rounded border-border text-accent focus:ring-accent`
- Checkbox label: `text-text-secondary text-sm`
- Add role link: `text-accent text-sm font-medium hover:text-accent-dark transition-colors`
- Save button container: `border-t border-border pt-6 mt-6 flex justify-end`
- Save button: `bg-accent text-accent-foreground rounded-md px-6 py-2.5 text-sm font-medium hover:bg-accent-dark transition-colors`

---

### ResumePreview (Profile)

**File:** `components/profile/ResumePreview.tsx`

- Outer: `mt-4 border border-border rounded-lg overflow-hidden`
- Header bar: `bg-surface-secondary border-b border-border px-4 py-2 flex items-center justify-between`
- Header title: `text-text-primary text-sm font-medium`
- View link: `text-accent text-xs font-medium hover:text-accent-dark transition-colors`
- Preview row: `p-4 flex items-center gap-3`
- PDF icon wrapper: `w-10 h-10 rounded-lg bg-error/10 text-error flex items-center justify-center shrink-0`
- File name: `text-text-primary text-sm font-medium`
- File meta: `text-text-muted text-xs`
