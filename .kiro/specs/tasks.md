# Implementation Tasks — Hoffman.legal Mug Shot Removal Service

## Execution Plan Overview

**Total Phases**: 5  
**Estimated Tasks**: 32  
**Tech Stack**: Next.js 14 (Static Export) + Tailwind CSS + Framer Motion  
**Deployment Target**: Hostinger Business Plan (static files)

---

## Phase 1: Project Scaffolding & Infrastructure

### Task 1.1 — Initialize Next.js Project
- [ ] Create Next.js 14 project with App Router (`create-next-app`)
- [ ] Configure TypeScript strict mode (`tsconfig.json`)
- [ ] Set up `pnpm` as package manager
- [ ] Configure `next.config.js` for static export (`output: 'export'`)
- [ ] Set up path aliases (`@/components`, `@/lib`, `@/styles`, `@/assets`)

**Acceptance**: `pnpm build` produces a static `out/` directory with valid HTML files.

### Task 1.2 — Install & Configure Dependencies
- [ ] Install Tailwind CSS 3.4+ with PostCSS & Autoprefixer
- [ ] Install Framer Motion
- [ ] Install React Hook Form + Zod
- [ ] Install Lucide React icons
- [ ] Install `clsx` + `tailwind-merge` for className utilities
- [ ] Install `sharp` for build-time image optimization

**Acceptance**: All dependencies resolve; dev server starts without errors.

### Task 1.3 — Design System Foundation
- [ ] Create `tailwind.config.ts` with full design token system (colors, typography, spacing, animations)
- [ ] Set up CSS custom properties (CSS variables) for theme switching
- [ ] Create `globals.css` with base styles, font-face declarations, and CSS reset
- [ ] Self-host Inter Variable font (download, place in `/public/fonts/`)
- [ ] Create theme provider component (`ThemeProvider.tsx`) with dark/light mode logic

**Acceptance**: Theme toggle works; all design tokens accessible via Tailwind classes.

### Task 1.4 — Project Structure & Utilities
- [ ] Create folder structure:
  ```
  src/
  ├── app/           (Next.js App Router pages)
  ├── components/
  │   ├── ui/        (primitive components: Button, Input, Card)
  │   ├── layout/    (Header, Footer, Section)
  │   └── sections/  (Hero, HowItWorks, Services, etc.)
  ├── lib/           (utilities, constants, helpers)
  ├── hooks/         (custom React hooks)
  ├── styles/        (global CSS)
  └── assets/        (images, icons, fonts)
  ```
- [ ] Create utility functions: `cn()` class merger, `formatPhone()`, `scrollToSection()`
- [ ] Create constants file: site metadata, navigation links, social links

**Acceptance**: Clean file structure; no import errors; utilities work in isolation.

---

## Phase 2: Core UI Components

### Task 2.1 — Primitive UI Components
- [ ] `Button` — variants (primary/secondary/ghost/icon), sizes, loading state, as-link support
- [ ] `Input` — floating label, validation states, icons, textarea variant
- [ ] `Card` — hover effects, multiple sizes, optional header/footer slots
- [ ] `Badge` — accent/success/neutral variants for trust signals
- [ ] `Container` — max-width wrapper with responsive padding
- [ ] `SectionHeader` — eyebrow + heading + description pattern

**Acceptance**: Components render correctly in isolation; all variants work; accessible.

### Task 2.2 — Layout Components
- [ ] `Header` / Navigation — sticky, glassmorphism, mobile hamburger menu, active section highlight
- [ ] `Footer` — multi-column layout, legal disclaimers, social links, newsletter form
- [ ] `MobileMenu` — full-screen overlay with staggered animation
- [ ] `StickyCtaBar` — appears on scroll past hero, phone + consultation CTA
- [ ] `ScrollProgress` — thin progress bar at page top

**Acceptance**: Navigation is fully responsive; sticky behavior works; mobile menu animates.

### Task 2.3 — Animation Primitives
- [ ] `FadeInUp` wrapper component (scroll-triggered with Intersection Observer)
- [ ] `StaggerChildren` wrapper (delays children sequentially)
- [ ] `CountUp` component (animates number from 0 to target)
- [ ] `TextReveal` component (clip-path line-by-line headline reveal)
- [ ] `DrawLine` SVG component (for process timeline)
- [ ] Respect `prefers-reduced-motion` in all animation components

**Acceptance**: Animations trigger on scroll; reduced-motion users see static content; 60fps performance.

---

## Phase 3: Page Sections (Content & Layout)

### Task 3.1 — Hero Section
- [ ] Full-viewport hero with headline, subheadline, dual CTAs
- [ ] Animated background (subtle gradient orbs or mesh gradient)
- [ ] Text reveal animation on page load
- [ ] Trust badges row (bar admissions, years of experience)
- [ ] Responsive layout: centered text on mobile, left-aligned on desktop

**Acceptance**: Visually striking; LCP < 1.2s; headline contains target keyword.

### Task 3.2 — Social Proof Bar
- [ ] Animated counter section (mugshots removed, success rate, clients served)
- [ ] CountUp triggers on scroll into view
- [ ] Subtle dividers between metrics
- [ ] Responsive: horizontal on desktop, vertical stack on mobile

**Acceptance**: Numbers animate smoothly; section is visually balanced.

### Task 3.3 — How It Works Section
- [ ] Vertical timeline / process steps (4 steps)
- [ ] Animated connecting line that draws on scroll
- [ ] Each step: icon, title, description, subtle entry animation
- [ ] Step indicators light up as user scrolls through
- [ ] Mobile: simplified vertical layout without parallax

**Acceptance**: Process is immediately understandable; animations enhance comprehension.

### Task 3.4 — Services Section
- [ ] Card grid (2x2 on desktop, stacked on mobile)
- [ ] Services: Mugshot Site Removal, Google Deindexing, Record Expungement, Ongoing Monitoring
- [ ] Each card: icon, title, description, "Learn More" link
- [ ] Hover effects (lift + border glow)
- [ ] Staggered entrance animation

**Acceptance**: Services clearly differentiated; cards are accessible and interactive.

### Task 3.5 — About / Attorney Section
- [ ] Split layout: photo left, bio right (stacked on mobile)
- [ ] Professional credentials list (bar admissions, education, awards)
- [ ] Brief personal statement emphasizing mission
- [ ] Subtle parallax on photo element
- [ ] CTA: "Schedule a Confidential Consultation"

**Acceptance**: Establishes credibility; photo properly optimized; responsive layout.

### Task 3.6 — Testimonials Section
- [ ] Carousel/slider of anonymized client testimonials
- [ ] Each testimonial: quote, result summary, anonymous identifier (e.g., "Client, TX")
- [ ] Navigation dots + swipe gesture support
- [ ] Auto-play with pause on hover
- [ ] Star ratings with Schema markup

**Acceptance**: Testimonials rotate smoothly; touch/swipe works on mobile; schema validates.

### Task 3.7 — FAQ Section
- [ ] Accordion component with 8-10 questions
- [ ] Smooth height animation on expand/collapse
- [ ] Chevron icon rotation
- [ ] `FAQPage` Schema.org structured data
- [ ] SEO-optimized questions targeting long-tail keywords

**Acceptance**: Accordion is accessible (keyboard, screen reader); Schema validates in Google Rich Results Test.

### Task 3.8 — Contact / Consultation Section
- [ ] Multi-step form (3 steps): Contact Info → Case Details → Submit
- [ ] Progress indicator showing current step
- [ ] Real-time validation with helpful error messages
- [ ] Honeypot field for spam prevention
- [ ] Form submission handler (email or webhook endpoint)
- [ ] Success state with confirmation message
- [ ] Phone number click-to-call
- [ ] "100% Confidential" trust badge near form

**Acceptance**: Form validates correctly; step transitions animate; submission works end-to-end.

---

## Phase 4: SEO, Performance & Polish

### Task 4.1 — Metadata & SEO Infrastructure
- [ ] Configure Next.js Metadata API for all pages (title, description, OpenGraph, Twitter Card)
- [ ] Create `robots.txt` with proper directives
- [ ] Generate `sitemap.xml` (static generation in build step)
- [ ] Add canonical URLs
- [ ] Implement breadcrumb navigation (if multi-page)
- [ ] Add JSON-LD structured data: `Attorney`, `LegalService`, `LocalBusiness`, `FAQPage`

**Acceptance**: All metadata renders in HTML head; schema validates; sitemap accessible.

### Task 4.2 — Performance Optimization
- [ ] Image optimization: WebP/AVIF generation, responsive `srcset`, lazy loading
- [ ] Font optimization: `font-display: swap`, preload critical font weights
- [ ] Code splitting: dynamic imports for below-fold sections
- [ ] CSS optimization: purge unused Tailwind classes (built-in)
- [ ] Preconnect/prefetch for third-party origins (analytics, fonts)
- [ ] Minimize JavaScript payload (tree-shake unused Framer Motion features)

**Acceptance**: Lighthouse Performance > 95; Total page weight < 500KB; LCP < 1.2s.

### Task 4.3 — Accessibility Audit
- [ ] Verify all interactive elements have ARIA labels
- [ ] Test keyboard navigation flow (tab order logical)
- [ ] Verify color contrast in both themes (AA minimum)
- [ ] Test with screen reader (VoiceOver/NVDA)
- [ ] Ensure focus indicators visible on all interactive elements
- [ ] Form error messages linked to inputs via `aria-describedby`

**Acceptance**: Lighthouse Accessibility > 95; no critical axe-core violations.

### Task 4.4 — Cross-Browser & Device Testing
- [ ] Test on Chrome, Firefox, Safari, Edge (latest 2 versions)
- [ ] Test on iOS Safari (iPhone 13+ viewport)
- [ ] Test on Android Chrome (common breakpoints)
- [ ] Verify animations degrade gracefully on low-powered devices
- [ ] Test with JavaScript disabled (progressive enhancement)

**Acceptance**: No visual regressions; all features work across target environments.

---

## Phase 5: Deployment & Launch

### Task 5.1 — Hostinger Deployment Configuration
- [ ] Configure `next.config.js` for clean URLs (trailing slash handling)
- [ ] Create `.htaccess` file for:
  - URL rewrites (clean URLs without `.html`)
  - HTTPS redirect
  - Security headers (X-Frame-Options, X-Content-Type-Options, CSP)
  - Browser caching headers (immutable for hashed assets, 1h for HTML)
  - Gzip/Brotli compression directives
- [ ] Create deployment script (`deploy.sh`):
  1. `pnpm build` (generates `out/` directory)
  2. Upload `out/` contents to Hostinger `/public_html/` via FTP/SSH
- [ ] Configure custom domain (`hoffman.legal`) DNS settings
- [ ] Verify SSL certificate provisioning

**Acceptance**: Site accessible at `https://hoffman.legal`; all redirects work; security headers present.

### Task 5.2 — Analytics & Tracking Setup
- [ ] Integrate Google Analytics 4 (with consent banner if needed)
- [ ] Set up Google Search Console and submit sitemap
- [ ] Configure conversion tracking (form submission, phone click events)
- [ ] Set up Google Business Profile link
- [ ] Optional: Plausible Analytics as privacy-friendly alternative

**Acceptance**: Analytics tracking fires correctly; conversions measurable in GA4.

### Task 5.3 — Pre-Launch Checklist
- [ ] All placeholder content replaced with final copy
- [ ] Attorney photo uploaded and optimized
- [ ] Contact form delivers to correct email inbox
- [ ] Phone number correct and click-to-call works
- [ ] Legal disclaimers reviewed and approved by attorney
- [ ] 404 page created with helpful navigation
- [ ] Favicon and app icons configured (all sizes)
- [ ] Social sharing preview tested (Facebook, Twitter, LinkedIn)
- [ ] Final Lighthouse audit: all scores > 95
- [ ] Broken link check
- [ ] Form spam protection verified

**Acceptance**: Site is client-ready; all functionality verified; no broken elements.

---

## Dependency Graph

```
Phase 1 (Scaffolding)
  └─→ Phase 2 (Components)
        └─→ Phase 3 (Sections)
              └─→ Phase 4 (SEO/Performance/QA)
                    └─→ Phase 5 (Deployment)
```

Phases are sequential. Within each phase, tasks can be parallelized where no dependencies exist between them.

---

## Estimated Timeline

| Phase | Duration | Cumulative |
|-------|----------|------------|
| Phase 1: Scaffolding | 1 session | Day 1 |
| Phase 2: Components | 1-2 sessions | Day 2-3 |
| Phase 3: Sections | 2-3 sessions | Day 4-6 |
| Phase 4: SEO/Performance | 1 session | Day 7 |
| Phase 5: Deployment | 1 session | Day 8 |

**Note**: "Session" = one focused development block with Kiro. Actual calendar time depends on content availability (attorney bio, testimonials, photos) and client feedback cycles.

---

## Risk Register

| Risk | Mitigation |
|------|-----------|
| Attorney photo not available | Use professional placeholder; design accommodates swap |
| Testimonials not yet collected | Create component with sample data; easy to update |
| Hostinger performance limitations | Static export has zero server-side dependency; CDN handles scaling |
| Content not finalized | All text in constants file; single-source updates |
| Form backend needed | Use Formspree/Getform initially; migrate to custom endpoint later |
| Blog content not ready at launch | Blog section can be Phase 2 launch (hidden initially) |
