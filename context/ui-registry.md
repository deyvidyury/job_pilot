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

- Page wrapper: `min-h-screen bg-background flex flex-col items-center justify-center px-8`
- Card: `bg-surface rounded-xl border border-border p-8 w-full max-w-sm shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]`
- Title: `text-text-primary text-xl font-semibold text-center mb-2`
- Subtitle: `text-text-secondary text-sm text-center mb-8`
- Button container: `flex flex-col gap-3`
- Google button: `w-full flex items-center justify-center gap-3 bg-surface border border-border text-text-primary rounded-md px-4 py-2.5 text-sm font-medium hover:bg-surface-secondary transition-colors`
- GitHub button: `w-full flex items-center justify-center gap-3 bg-overlay-dark text-white rounded-md px-4 py-2.5 text-sm font-medium hover:bg-overlay transition-colors`
- Button icons: `w-[18px] h-[18px]`
