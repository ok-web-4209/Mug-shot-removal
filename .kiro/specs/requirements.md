# Requirements Specification — Hoffman.legal Mug Shot Removal Service

## Project Overview

A high-converting, ultra-modern single-service legal website for Attorney **David Hoffman** at **Hoffman.legal**, specializing exclusively in mug shot removal from the internet. The site must establish immediate legal authority, instill trust, and convert visitors into consultation leads.

---

## 1. Business Requirements

### 1.1 Primary Objectives
- Generate qualified consultation leads from individuals seeking mug shot removal
- Establish David Hoffman as the preeminent authority in mug shot/arrest record removal
- Rank organically for high-intent keywords (e.g., "mug shot removal attorney," "remove mugshot from internet," "arrest record removal lawyer")
- Differentiate from non-attorney reputation management services by emphasizing legal expertise

### 1.2 Target Audience
| Segment | Description | Pain Point |
|---------|-------------|------------|
| Primary | Individuals with dismissed/expunged cases whose mugshots remain online | Employment/relationship damage from outdated arrest records |
| Secondary | People currently charged seeking proactive reputation protection | Fear of long-term digital footprint |
| Tertiary | Family members seeking removal on behalf of loved ones | Concern for family member's future |

### 1.3 Key Performance Indicators (KPIs)
- Consultation form submissions (primary conversion)
- Phone calls initiated from site (call tracking)
- Time-on-page > 2 minutes (engagement signal)
- Organic search rankings for 15+ target keywords within 6 months
- Page load speed < 1.5s on 4G mobile

---

## 2. Functional Requirements

### 2.1 Core Pages & Sections

| Page/Section | Purpose | Priority |
|--------------|---------|----------|
| Hero / Landing | Immediate value proposition, primary CTA | P0 |
| How It Works | 3-4 step process visualization | P0 |
| Services | Detailed breakdown of removal methods (legal demands, expungement, deindexing, DMCA) | P0 |
| About / Attorney Bio | Establish credibility, bar admissions, experience | P0 |
| Results / Social Proof | Anonymized case results, testimonials, success metrics | P0 |
| FAQ | Address common concerns, boost SEO with structured data | P1 |
| Blog / Resources | SEO content hub for long-tail keyword targeting | P1 |
| Contact / Consultation | Multi-channel contact (form, phone, chat widget) | P0 |
| Privacy Policy & Terms | Legal compliance | P1 |

### 2.2 Interactive Features
- **Confidential Case Evaluation Form** — multi-step form with progress indicator, collecting: name, email, phone, case status (dismissed/expunged/pending), number of sites with mugshot, urgency level
- **Animated Process Timeline** — interactive scroll-triggered animation showing the removal workflow
- **Live Results Counter** — animated statistics (e.g., "2,400+ mugshots removed")
- **Sticky CTA Bar** — persistent call-to-action on scroll (mobile + desktop)
- **Dark/Light Mode Toggle** — user preference with system detection
- **Smooth Page Transitions** — fluid navigation between sections (SPA-style)

### 2.3 Lead Capture Mechanisms
- Primary consultation form (multi-step)
- Click-to-call button (mobile-optimized)
- Floating chat widget / scheduling integration
- Exit-intent popup with urgency messaging
- Footer newsletter for blog subscribers

---

## 3. Non-Functional Requirements

### 3.1 Performance
| Metric | Target |
|--------|--------|
| Largest Contentful Paint (LCP) | < 1.2s |
| First Input Delay (FID) | < 50ms |
| Cumulative Layout Shift (CLS) | < 0.05 |
| Total page weight (initial load) | < 500KB |
| Time to Interactive (TTI) | < 2.0s |

### 3.2 SEO & Discoverability
- Semantic HTML5 structure (proper heading hierarchy, `<article>`, `<section>`, `<nav>`)
- Schema.org structured data: `Attorney`, `LegalService`, `FAQPage`, `LocalBusiness`, `Review`
- Open Graph & Twitter Card meta tags on all pages
- XML Sitemap (auto-generated)
- Robots.txt with proper crawl directives
- Canonical URLs on all pages
- Breadcrumb navigation with structured data
- Image optimization (WebP/AVIF with fallbacks, lazy loading, proper alt text)
- Internal linking strategy with keyword-rich anchor text

### 3.3 Accessibility
- WCAG 2.1 AA compliance minimum
- Keyboard navigation support
- Screen reader friendly (ARIA labels, roles)
- Color contrast ratios meeting AA standards in both light/dark modes
- Focus indicators on all interactive elements

### 3.4 Security & Privacy
- HTTPS enforced (TLS 1.3)
- Content Security Policy headers
- Form submissions over encrypted channels
- No third-party trackers without consent (GDPR/CCPA awareness)
- Honeypot spam protection on forms (no CAPTCHA friction)

### 3.5 Browser & Device Support
- Modern evergreen browsers (Chrome, Firefox, Safari, Edge — last 2 versions)
- Mobile-first responsive design (breakpoints: 375px, 768px, 1024px, 1440px)
- iOS Safari and Android Chrome optimized
- Progressive enhancement (core content accessible without JS)

---

## 4. Technical Requirements

### 4.1 Recommended Tech Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Framework** | Next.js 14+ (App Router) | Static export for Hostinger, React ecosystem, built-in image optimization, metadata API |
| **Styling** | Tailwind CSS 3.4+ | Utility-first, minimal bundle size, design system consistency |
| **Animations** | Framer Motion | Declarative animations, scroll-triggered effects, page transitions |
| **Forms** | React Hook Form + Zod | Type-safe validation, excellent UX with minimal re-renders |
| **Icons** | Lucide React | Lightweight, tree-shakable, consistent design |
| **Fonts** | Variable fonts (self-hosted) | Performance + typographic control |
| **Deployment** | Static Export (`next export`) → Hostinger Business | No Node.js server required, pure HTML/CSS/JS |
| **Analytics** | Plausible or self-hosted (privacy-first) | GDPR-friendly, lightweight |
| **CMS (Blog)** | MDX files or Contentlayer | Static generation, no database dependency |

### 4.2 Hostinger Business Plan Constraints
- **Environment**: Apache/LiteSpeed web server, PHP 8.x available, Node.js NOT available as runtime
- **Deployment Strategy**: `next export` generates a fully static site (HTML + CSS + JS bundles) that runs on any static hosting
- **File Structure**: Output to `/public_html/` directory
- **SSL**: Free SSL via Let's Encrypt (auto-provisioned by Hostinger)
- **CDN**: Hostinger's built-in CDN for asset delivery
- **.htaccess**: Custom rules for redirects, caching headers, security headers

### 4.3 Build & Development
- Node.js 20+ (development only)
- pnpm package manager
- ESLint + Prettier for code quality
- TypeScript strict mode
- Husky + lint-staged for pre-commit hooks

---

## 5. Content Strategy Requirements

### 5.1 Brand Voice & Tone
- **Authoritative** — speaks with legal expertise, not marketing hype
- **Empathetic** — acknowledges the emotional weight of having a mugshot online
- **Urgent but composed** — creates appropriate urgency without fear-mongering
- **Clear** — avoids legal jargon; explains complex processes simply
- **Confidential** — repeatedly emphasizes privacy and discretion

### 5.2 Key Messaging Pillars
1. "Your past doesn't define your future" — empowerment messaging
2. "Legal authority, not just reputation management" — differentiation from non-attorney services
3. "Proven results, guaranteed confidentiality" — trust signals
4. "Every day it stays online, it costs you opportunities" — urgency driver

### 5.3 SEO Keyword Targets (Primary)
| Keyword | Search Intent | Monthly Volume (est.) |
|---------|--------------|----------------------|
| mug shot removal | Transactional | 2,400 |
| remove mugshot from internet | Transactional | 1,900 |
| mugshot removal attorney | Transactional | 880 |
| mugshot removal lawyer | Transactional | 720 |
| how to get mugshot removed | Informational | 1,600 |
| arrest record removal | Transactional | 1,200 |
| expungement lawyer | Transactional | 3,600 |
| mugshot removal service | Commercial | 1,300 |

---

## 6. Legal & Compliance Requirements

- Attorney advertising disclaimer (state bar compliance)
- "No guarantee of results" disclaimer where required
- Privacy policy covering data collection practices
- Terms of service for website use
- ADA compliance statement
- State-specific bar admission disclosures

---

## 7. Third-Party Integrations

| Integration | Purpose | Priority |
|-------------|---------|----------|
| Google Analytics 4 | Traffic & conversion tracking | P1 |
| Google Search Console | SEO monitoring | P0 |
| Calendly / Cal.com | Consultation scheduling | P1 |
| CallRail or similar | Phone call tracking | P2 |
| Mailchimp / ConvertKit | Email list for blog | P2 |
| Google Business Profile | Local SEO | P1 |

---

## 8. Success Criteria

The project is considered successful when:
1. All P0 pages/features are live and functional
2. Lighthouse scores: Performance > 95, Accessibility > 95, SEO > 95, Best Practices > 95
3. All Schema markup validates in Google's Rich Results Test
4. Site deploys successfully to Hostinger Business Plan
5. Core Web Vitals pass in real-world field data (Chrome UX Report)
6. Contact form successfully delivers leads to attorney's inbox
7. Site renders correctly across all target browsers/devices
