# Design Specification — Hoffman.legal Mug Shot Removal Service

## Design Philosophy

> "Authority through restraint. Trust through precision. Urgency through elegance."

The design language merges the gravitas of high-end legal branding with the fluidity of a modern tech product. Every pixel serves conversion. Every animation reinforces confidence. The aesthetic is **dark, minimal, and cinematic** — positioning David Hoffman not as a typical attorney, but as a precision specialist solving a specific, urgent problem.

---

## 1. Visual Identity & Brand System

### 1.1 Color Palette

#### Dark Mode (Primary)
| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#0A0A0F` | Page background, deep space black |
| `--bg-secondary` | `#12121A` | Card surfaces, elevated panels |
| `--bg-tertiary` | `#1A1A25` | Hover states, subtle differentiation |
| `--text-primary` | `#F5F5F7` | Headings, primary content |
| `--text-secondary` | `#A1A1AA` | Body text, descriptions |
| `--text-muted` | `#6B6B76` | Captions, metadata |
| `--accent-primary` | `#C9A96E` | Gold — CTAs, highlights, trust signals |
| `--accent-hover` | `#D4B97E` | Gold hover state |
| `--accent-secondary` | `#3B82F6` | Blue — links, informational elements |
| `--border` | `#2A2A35` | Subtle borders, dividers |
| `--success` | `#10B981` | Success states, positive metrics |
| `--error` | `#EF4444` | Error states, form validation |

#### Light Mode (Secondary)
| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#FAFAFA` | Page background |
| `--bg-secondary` | `#FFFFFF` | Card surfaces |
| `--bg-tertiary` | `#F4F4F5` | Hover states |
| `--text-primary` | `#0A0A0F` | Headings |
| `--text-secondary` | `#52525B` | Body text |
| `--accent-primary` | `#92722E` | Darker gold for contrast compliance |
| `--border` | `#E4E4E7` | Borders |

### 1.2 Typography

| Element | Font | Weight | Size (Desktop) | Size (Mobile) | Line Height |
|---------|------|--------|----------------|---------------|-------------|
| Display (Hero) | Inter Variable | 700 | 72px / 4.5rem | 40px / 2.5rem | 1.05 |
| H1 | Inter Variable | 700 | 48px / 3rem | 32px / 2rem | 1.1 |
| H2 | Inter Variable | 600 | 36px / 2.25rem | 28px / 1.75rem | 1.2 |
| H3 | Inter Variable | 600 | 24px / 1.5rem | 20px / 1.25rem | 1.3 |
| Body Large | Inter Variable | 400 | 18px / 1.125rem | 16px / 1rem | 1.7 |
| Body | Inter Variable | 400 | 16px / 1rem | 15px / 0.9375rem | 1.7 |
| Caption | Inter Variable | 500 | 13px / 0.8125rem | 12px / 0.75rem | 1.5 |
| CTA Button | Inter Variable | 600 | 16px / 1rem | 15px / 0.9375rem | 1.0 |

**Font Strategy**: Self-hosted Inter Variable font (single file, ~100KB) for maximum performance and typographic flexibility. Variable axes allow weight transitions in animations.

### 1.3 Spacing System (8px Grid)
```
4px   → xs
8px   → sm  
12px  → md
16px  → base
24px  → lg
32px  → xl
48px  → 2xl
64px  → 3xl
96px  → 4xl
128px → 5xl
```

### 1.4 Border Radius
```
4px  → sm (inputs, small buttons)
8px  → md (cards, containers)
12px → lg (featured cards, modals)
16px → xl (hero elements)
9999px → full (pills, avatars)
```

---

## 2. Layout Architecture

### 2.1 Grid System
- **Max content width**: 1280px (80rem)
- **Side padding**: 24px mobile / 48px tablet / 64px desktop
- **Column grid**: 12-column with 24px gutters
- **Section vertical rhythm**: 96px–128px between major sections

### 2.2 Page Structure (Single-Page App Feel)

```
┌─────────────────────────────────────────────┐
│  NAVIGATION BAR (sticky, glassmorphism)     │
│  Logo | Nav Links | CTA Button              │
├─────────────────────────────────────────────┤
│                                             │
│  HERO SECTION                               │
│  ├─ Headline (display type)                 │
│  ├─ Subheadline (empathetic hook)           │
│  ├─ Primary CTA + Secondary CTA            │
│  └─ Trust badges (bar admissions, years)    │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  SOCIAL PROOF BAR                           │
│  ├─ "2,400+ Mugshots Removed"              │
│  ├─ "98% Success Rate"                     │
│  └─ "500+ Happy Clients"                   │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  HOW IT WORKS (Process Timeline)            │
│  ├─ Step 1: Free Consultation              │
│  ├─ Step 2: Legal Strategy                 │
│  ├─ Step 3: Removal Execution              │
│  └─ Step 4: Verification & Monitoring      │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  SERVICES GRID                              │
│  ├─ Mugshot Site Removal                   │
│  ├─ Google Deindexing                      │
│  ├─ Record Expungement                     │
│  └─ Ongoing Monitoring                     │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  ABOUT / ATTORNEY BIO                       │
│  ├─ Professional photo (high-end)          │
│  ├─ Credentials & bar admissions           │
│  └─ Personal statement                     │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  TESTIMONIALS / RESULTS                     │
│  ├─ Carousel of anonymized reviews         │
│  └─ Before/After visual concept            │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  FAQ ACCORDION                              │
│  └─ 8-10 questions with Schema markup      │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  CONTACT / CONSULTATION CTA                 │
│  ├─ Multi-step form                        │
│  ├─ Phone number (click-to-call)           │
│  └─ Office hours / response time           │
│                                             │
├─────────────────────────────────────────────┤
│  FOOTER                                     │
│  ├─ Logo + tagline                         │
│  ├─ Navigation links                       │
│  ├─ Legal disclaimers                      │
│  └─ Bar admission notices                  │
└─────────────────────────────────────────────┘
```

### 2.3 Navigation Design
- **Desktop**: Fixed top bar with glassmorphism backdrop (`backdrop-filter: blur(16px)`)
- **Mobile**: Hamburger → full-screen overlay menu with staggered animation
- **Scroll behavior**: Nav condenses on scroll (logo shrinks, padding reduces)
- **Active section**: Highlighted via Intersection Observer

---

## 3. Component Design System

### 3.1 Buttons

| Variant | Style | Usage |
|---------|-------|-------|
| Primary | Gold background, dark text, subtle glow shadow | Main CTAs |
| Secondary | Transparent with gold border, gold text | Secondary actions |
| Ghost | No background/border, text only with underline animation | Navigation, inline links |
| Icon | Circular, icon-only with tooltip | Social media, utility actions |

**Button States**: Default → Hover (scale 1.02 + shadow elevation) → Active (scale 0.98) → Focus (ring outline) → Disabled (opacity 0.5)

### 3.2 Cards
- **Elevation**: Subtle `box-shadow` + 1px border in `--border` color
- **Hover**: Translate Y -4px + increased shadow + border color shift to accent
- **Content padding**: 32px desktop / 24px mobile
- **Background**: `--bg-secondary` with optional subtle gradient overlay

### 3.3 Form Inputs
- **Height**: 48px (touch-friendly)
- **Border**: 1px `--border`, focused state → `--accent-primary`
- **Background**: `--bg-tertiary`
- **Label**: Floating label pattern (animates from placeholder to top-left on focus)
- **Validation**: Inline error messages below field, real-time validation

### 3.4 Section Headers
- **Pattern**: Eyebrow text (small caps, accent color) → Main heading → Subtext
- **Alignment**: Center-aligned for symmetric sections, left-aligned for content-heavy sections

---

## 4. Animation & Motion Design

### 4.1 Principles
- **Purpose-driven**: Every animation communicates meaning (entrance = new info, exit = dismissed)
- **Performance-first**: Use `transform` and `opacity` only (GPU-composited properties)
- **Respect preferences**: Honor `prefers-reduced-motion` media query
- **Subtle > Dramatic**: Micro-interactions over theatrical reveals

### 4.2 Animation Specifications

| Element | Trigger | Animation | Duration | Easing |
|---------|---------|-----------|----------|--------|
| Page sections | Scroll into view | Fade up + slight scale | 600ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Cards | Scroll into view | Staggered fade up (100ms delay each) | 500ms | `ease-out` |
| Navigation | Page load | Fade down from top | 400ms | `ease-out` |
| Hero headline | Page load | Clip-path reveal (line by line) | 800ms | `cubic-bezier(0.77, 0, 0.175, 1)` |
| Stats counter | Scroll into view | Count-up animation | 2000ms | `ease-in-out` |
| CTA buttons | Hover | Scale 1.02 + glow pulse | 200ms | `ease` |
| Form steps | Step transition | Slide left/right + fade | 400ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Process timeline | Scroll | Progressive line draw + node activation | Scroll-linked | Linear |
| Testimonials | Auto-play + swipe | Slide with parallax | 500ms | `ease-in-out` |
| FAQ accordion | Click | Height auto + rotate chevron | 300ms | `ease-out` |

### 4.3 Scroll-Triggered Effects
- **Parallax layers**: Hero background elements at different scroll speeds (0.3x, 0.5x, 0.7x)
- **Progress indicator**: Thin accent-colored line at page top showing scroll progress
- **Sticky CTA**: Appears after scrolling past hero section (slide up from bottom)

### 4.4 Page Transitions (SPA-style)
- Route changes: Content fades out (200ms) → fades in (300ms) with subtle Y-translate
- Shared layout elements (nav, footer) remain static during transitions

---

## 5. Responsive Design Strategy

### 5.1 Breakpoints
```css
/* Mobile First */
@default: 0px+        → Single column, stacked layout
@sm:      640px+      → Minor adjustments
@md:      768px+      → Two-column grids emerge
@lg:      1024px+     → Full desktop layout
@xl:      1280px+     → Max-width container active
@2xl:     1536px+     → Generous whitespace
```

### 5.2 Mobile-Specific Adaptations
- **Navigation**: Hamburger menu with full-screen overlay
- **Hero**: Single-line headline, reduced font sizes, stacked CTAs
- **Cards**: Full-width stacked (no grid)
- **Forms**: Full-width inputs, larger touch targets (min 48px)
- **Sticky CTA**: Bottom-fixed bar with phone + form buttons
- **Images**: Art-directed crops for mobile aspect ratios

### 5.3 Tablet Adaptations
- Two-column grids for cards and services
- Side-by-side layout for about section (photo + bio)
- Navigation remains horizontal (condensed)

---

## 6. Imagery & Media Strategy

### 6.1 Photography Direction
- **Attorney portrait**: Professional, confident, approachable (not generic stock). Shot in modern office setting with dramatic lighting.
- **Conceptual imagery**: Abstract representations of digital removal (data dissolving, search results fading). Avoid literal mugshots.
- **Background textures**: Subtle noise/grain overlays, geometric mesh patterns, gradient orbs

### 6.2 Icons & Illustrations
- **Style**: Lucide icon set (outlined, 1.5px stroke weight)
- **Custom illustrations**: Minimal line art for process steps (legal document, shield, magnifying glass, checkmark)
- **Color treatment**: Icons in `--text-secondary`, active/hover state transitions to `--accent-primary`

### 6.3 Performance Requirements
- All images served in WebP/AVIF with JPEG fallback
- Responsive `srcset` with appropriate breakpoints
- Lazy loading for below-fold images (`loading="lazy"`)
- Blur placeholder (LQIP) during load
- Maximum hero image: 200KB optimized
- Decorative SVGs inlined for zero network requests

---

## 7. Micro-Interactions & Delight Details

| Interaction | Effect |
|-------------|--------|
| Logo hover | Subtle gold shimmer sweep |
| Link hover | Underline draws from left to right |
| Card hover | Lift + border glow + icon color shift |
| Button click | Satisfying scale bounce (down then up) |
| Form success | Confetti-free: green checkmark expand + success message slide |
| Scroll to top | Smooth scroll with progress indication |
| Theme toggle | Sun/moon icon morphs with rotation |
| Phone number hover | Subtle vibrate animation icon |
| Stats in view | Numbers count up with subtle spring easing |

---

## 8. Dark Mode Implementation

### 8.1 Strategy
- **Default**: Dark mode (matches brand authority aesthetic)
- **Detection**: `prefers-color-scheme` media query for initial state
- **Toggle**: Manual override stored in `localStorage`
- **Transition**: 200ms color transition on theme switch (no flash)
- **Images**: Separate optimized versions for dark/light where needed

### 8.2 Considerations
- All text passes WCAG AA contrast in both modes
- Shadows are more pronounced in light mode, more subtle in dark mode
- Gold accent works in both modes (darker variant for light mode)
- Form inputs and interactive elements clearly distinguishable in both modes

---

## 9. SEO-Driven Design Decisions

### 9.1 Above-the-Fold Priorities
- H1 contains primary keyword naturally
- Phone number visible immediately (NAP consistency for local SEO)
- Trust signals visible without scrolling

### 9.2 Content Hierarchy
- Single H1 per page
- Logical H2 → H3 nesting (no skipped levels)
- FAQ section uses proper `<details>/<summary>` with `FAQPage` schema
- Blog posts use `<article>` with `BlogPosting` schema

### 9.3 Technical SEO Design
- No critical content hidden behind JavaScript interactions
- All animated content has static fallback (accessible to crawlers)
- Internal anchor links for single-page navigation have proper `id` attributes
- Image filenames are descriptive and keyword-relevant

---

## 10. Conversion Optimization Design

### 10.1 CTA Hierarchy
1. **Primary**: "Get Your Free Consultation" (gold button, hero + sticky bar)
2. **Secondary**: "Call Now" (phone icon button, always visible on mobile)
3. **Tertiary**: "See How It Works" (scroll-to-section link)

### 10.2 Trust Signals Placement
- Hero: Bar admission badges, years of experience
- Below fold: Success rate counter, total removals
- Mid-page: Testimonials carousel
- Near form: "100% Confidential" badge, response time guarantee
- Footer: Bar numbers, professional memberships

### 10.3 Urgency & Scarcity (Ethical)
- "Every day your mugshot stays online, it appears in more searches"
- "Limited consultation slots this week" (if truthful)
- Subtle pulsing dot on "Available Now" indicator during business hours
