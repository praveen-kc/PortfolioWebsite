# Praveen K C Portfolio

Personal portfolio website for Praveen K C — Lead Unity Developer | XR Specialist | Creative Technologist | 12+ years experience

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom design system with shadcn/ui patterns
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber
- **Forms**: React Hook Form + Zod
- **Email**: Resend
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Type check
npm run typecheck
```

### Environment Variables

Copy `.env.local.example` to `.env.local` and add your Resend API key:

```bash
RESEND_API_KEY=re_your_api_key_here
```

## Project Structure

```
src/
├── app/
│   ├── globals.css              # Global styles, CSS variables, animations
│   ├── layout.tsx               # Root layout with fonts, Navbar, Footer
│   ├── page.tsx                 # Homepage
│   ├── not-found.tsx            # 404 page
│   ├── about/
│   │   ├── layout.tsx           # About page metadata
│   │   └── page.tsx             # About page with bio, timeline, skills graph
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # Contact form API endpoint (Resend)
│   ├── blog/page.tsx            # Blog page
│   ├── contact/page.tsx          # Contact page with form
│   ├── work/
│   │   ├── page.tsx             # Work/Portfolio grid page
│   │   └── [slug]/page.tsx      # Case study template
│   └── not-found.tsx            # 404 page
├── components/
│   ├── 3d/
│   │   └── HeroParticles.tsx     # R3F particle canvas (lazy loaded)
│   ├── layout/
│   │   ├── Footer.tsx           # Site footer (3-column responsive)
│   │   ├── Navbar.tsx           # Fixed header with mobile drawer
│   │   ├── ThemeProvider.tsx     # Dark/light theme provider
│   │   ├── PageTransition.tsx     # Route transition wrapper
│   │   └── CaseStudyWrapper.tsx   # Reading progress + content wrapper
│   ├── sections/                # Page section components
│   │   ├── Hero.tsx             # Full viewport hero with particles, role cycling
│   │   ├── FeaturedProjects.tsx  # 3 featured project cards
│   │   ├── SkillsSnapshot.tsx    # 3-column skill domain cards
│   │   ├── SkillGraph.tsx        # D3.js interactive skill graph
│   │   ├── PlatformsGrid.tsx     # Platform badges grid
│   │   ├── CareerTeaser.tsx     # Horizontal career timeline strip
│   │   ├── CTAStrip.tsx         # Call-to-action section
│   │   ├── Timeline.tsx         # Animated career timeline (SVG path draw)
│   │   └── ContactForm.tsx       # Validated contact form
│   ├── ui/
│   │   ├── AdjacentProject.tsx    # Prev/Next project navigation cards
│   │   ├── AvailabilityBadge.tsx  # "Open to Work" pulsing badge
│   │   ├── Badge.tsx              # Category badges (VR, WebGL, Game, etc.)
│   │   ├── Button.tsx             # Button with variants + asChild support
│   │   ├── Card.tsx               # Card components with hover effects
│   │   ├── CaseStudySection.tsx   # Scroll-animated section wrapper
│   │   ├── Counter.tsx             # Animated scroll counter with glow effect
│   │   ├── FilterTabs.tsx          # Category filter tabs with animation
│   │   ├── GithubIcon.tsx          # GitHub icon (inline SVG)
│   │   ├── MediaGallery.tsx        # Lightbox image gallery
│   │   ├── ProjectCard.tsx         # Project card with hover overlay
│   │   ├── ReadingProgress.tsx      # Reading progress bar
│   │   ├── Section.tsx             # Section wrapper with animations
│   │   ├── SectionLabel.tsx        # Section dividers
│   │   ├── Skeleton.tsx            # Loading placeholder
│   │   ├── TechPills.tsx           # Technology tags
│   │   ├── ThemeToggle.tsx         # Dark/light mode toggle
│   │   ├── Typography.tsx          # Heading, Body, Caption, GradientText
│   │   └── UnityEmbed.tsx          # Unity WebGL embed component
│   └── seo/
│       ├── JsonLd.tsx             # JSON-LD structured data components
│       └── ProjectViewTracker.tsx  # Analytics event for project views
├── hooks/
│   └── useScrollAnimation.ts     # Custom scroll animation hooks
├── lib/
│   ├── analytics.ts              # Vercel Analytics track functions
│   ├── projects.ts               # Project data helper functions
│   └── utils.ts                   # Utility functions (cn for className merging)
└── types/
    └── index.ts                   # TypeScript type definitions

scripts/
└── optimize-images.mjs           # Image optimization (WebP conversion)
```

## Design System

### Color Palette (Dark Mode - Default)

| Variable | Dark | Light |
|----------|------|-------|
| `--void` (background) | `#0b0d12` | `#f8f7f4` |
| `--surface` | `#14161f` | `#ffffff` |
| `--elevated` | `#1e2130` | `#f2f0eb` |
| `--border` | `#2a2d3e` | `#e2dfd6` |
| `--primary` | `#3353ff` | `#3353ff` |
| `--xr-green` | `#00e5a0` | `#00b87a` |
| `--xr-purple` | `#b87dff` | `#7c3fff` |
| `--alert` | `#ff6b3d` | `#e8521f` |
| `--text-1` | `#f0ede6` | `#0e0e12` |
| `--text-2` | `#9a97a8` | `#5a5870` |
| `--text-3` | `#5a5870` | `#9a97a8` |

### Typography

- **Display/Headings**: Syne (Google Fonts) — 700 weight
- **Body**: Inter (Google Fonts) — 400 weight
- **Mono**: JetBrains Mono (Google Fonts) — 500 weight

### Spacing

4px base unit: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128px

### Animations

- `fadeUp`: 0.6s ease forwards — element fades in and moves up
- `fadeIn`: 0.4s ease forwards — simple fade in
- `shimmer`: 1.5s infinite linear — loading skeleton effect
- `pan`: 8s linear infinite — particle grid background animation
- `roleCycle`: 0.5s ease — role title crossfade

All animations wrapped in `prefers-reduced-motion` guards.

### Lighthouse Targets

- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 95+

## Page Sections

### Homepage Sections

```tsx
import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { SkillsSnapshot } from "@/components/sections/SkillsSnapshot";
import { PlatformsGrid } from "@/components/sections/PlatformsGrid";
import { CareerTeaser } from "@/components/sections/CareerTeaser";
import { CTAStrip } from "@/components/sections/CTAStrip";
```

Features:
- **Hero**: CSS particle grid, role cycling animation, animated counters
- **FeaturedProjects**: 3 project cards with hover effects
- **SkillsSnapshot**: 3-column skill domain cards with xr-green hover glow
- **PlatformsGrid**: Animated platform badges
- **CareerTeaser**: Horizontal career timeline with link to full timeline
- **CTAStrip**: Call-to-action section

### About Page Components

```tsx
import { Timeline } from "@/components/sections/Timeline";
```

Timeline supports mobile and desktop layouts with staggered animations.

### Work Page Components

```tsx
import { ProjectGrid } from "@/components/sections/ProjectGrid";
```

Work page features:
- **Hero**: Project count badge, section label, descriptive text
- **FilterTabs**: Animated category filters (All, VR, WebGL, Game, Mobile, Research) with Framer Motion layout animation
- **ProjectGrid**: Client-side filtering with AnimatePresence transitions
- **ProjectCard**: Hover overlay with image zoom, company name, title, year, category badge, tech pills
- **Academic divider**: Visual separator for Research category projects

### Case Study Pages

Dynamic route `/work/[slug]` generates static pages for all 19 projects.

Features:
- **Hero**: 21:9 aspect thumbnail with gradient scrim, title overlay
- **Sticky meta bar**: Company, category badge, platforms, year, tags
- **Impact callout**: Highlighted block with xr-green border
- **MDX content**: Styled with custom heading borders, list markers, code blocks
- **MediaGallery**: Horizontal scroll thumbnail strip, lightbox modal with keyboard navigation
- **Adjacent navigation**: Prev/Next project cards

## Content Structure

Projects stored in `content/projects/` as MDX files with frontmatter:

```yaml
---
title: "Project Title"
slug: "project-slug"
company: "Company Name"
category: "VR" | "WebGL" | "Game" | "Mobile" | "Research"
platforms: ["Meta Quest", "PC VR"]
year: 2024
thumbnail: "/images/projects/cover.webp"
images: ["/images/projects/1.webp"]
featured: true
order: 1
tags: ["Unity 3D", "C#", "VR"]
summary: "One sentence summary"
impact: "Business impact statement"
---
```

MDX content structure:
- Overview
- The Challenge
- Technical Approach
- Key Implementations
- Outcome

### Contact Page Components

```tsx
import { ContactForm } from "@/components/sections/ContactForm";
```

Contact form with:
- React Hook Form + Zod validation
- Loading, success, and error states
- Posts to `/api/contact`

## Layout Components

### Navbar

Fixed header with scroll-activated backdrop blur, active route highlighting, and mobile drawer.

```tsx
import { Navbar } from "@/components/layout/Navbar";
```

Features:
- Logo with hover underline animation
- Navigation links (Home, Work, About, Contact)
- Active link indicator (primary color + dot)
- ThemeToggle integration
- "Hire Me" CTA button
- Mobile hamburger → full-screen drawer with staggered animations
- Focus trap and keyboard navigation in drawer

### Footer

3-column responsive footer with obfuscated email protection.

```tsx
import { Footer } from "@/components/layout/Footer";
```

Features:
- Brand column with tagline and availability badge
- Navigation links column
- Connect column (LinkedIn, GitHub, email, resume download)
- Bottom bar with copyright

### AvailabilityBadge

Pulsing "Open to Work" indicator.

```tsx
import { AvailabilityBadge } from "@/components/ui/AvailabilityBadge";

<AvailabilityBadge />
<AvailabilityBadge showText={false} /> {/* Icon only */}
```

## UI Components

### Typography

```tsx
import { Heading1, Heading2, Heading3, Body, Caption, GradientText } from "@/components/ui/Typography";

<Heading1>Main Heading</Heading1>
<Heading2>Section Heading</Heading2>
<Heading3>Subsection</Heading3>
<Body>Paragraph text</Body>
<Caption>Small label</Caption>
<GradientText>Colored gradient text</GradientText>
```

### Buttons

```tsx
import { Button } from "@/components/ui/Button";

// Variants: primary, ghost, accent, icon
// Sizes: sm (32px), md (40px), lg (48px)

<Button variant="primary" size="md">Click Me</Button>
<Button variant="ghost">Ghost Button</Button>
<Button variant="accent">XR Accent</Button>
<Button loading>Loading...</Button>
<Button asChild><Link href="/contact">Link Button</Link></Button>
```

### Cards

```tsx
import { Card, CardHover, CardBody, CardMeta } from "@/components/ui/Card";

<Card>
  <CardBody>Content</CardBody>
</Card>

<CardHover>
  <CardBody>Hover me for glow effect</CardBody>
  <CardMeta><Badge>Tag</Badge></CardMeta>
</CardHover>
```

### Badges

```tsx
import { Badge } from "@/components/ui/Badge";

// Variants: VR, WebGL, Game, Mobile, Research, default

<Badge variant="VR">VR</Badge>
<Badge variant="WebGL">WebGL</Badge>
<Badge variant="Game">Game</Badge>
```

### Section

```tsx
import { Section, SectionWithAnimation } from "@/components/ui/Section";

<Section id="about">
  <SectionLabel>About</SectionLabel>
  <Heading2>Content</Heading2>
</Section>

<SectionWithAnimation id="work">
  {/* Animates in when scrolled into view */}
</SectionWithAnimation>
```

### Counter

```tsx
import { Counter } from "@/components/ui/Counter";

<Counter from={0} to={12} suffix="+" />
<Counter to={120} suffix="%" duration={3} />
```

### Tech Pills

```tsx
import { TechPills } from "@/components/ui/TechPills";

<TechPills tags={["Unity", "C#", "WebGL", "Three.js"]} />
```

### Theme Toggle

```tsx
import { ThemeToggle } from "@/components/ui/ThemeToggle";

<ThemeToggle />
```

## API Routes

### POST /api/contact

Contact form submission endpoint.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Job Opportunity",
  "message": "Hello, I'd like to discuss..."
}
```

**Response:**
```json
{ "success": true }
```

**Error:**
```json
{ "error": "Invalid input" }
```

## Live Reference

- https://praveenkc.com/
- https://praveenkc.com/portfolio

## Development Status

### Module 7: Advanced Interactivity & 3D ✅

**Hero Particle Canvas (React Three Fiber):**
- [x] Lazy-loaded `HeroParticles` component (`src/components/3d/HeroParticles.tsx`)
- [x] 2000 particles with mouse-responsive movement
- [x] WebGL fallback detection
- [x] `prefers-reduced-motion` support
- [x] Performance: `dpr={[1, 1.5]}`, `frameloop="always"`, low-power mode

**Scroll-Based Animations:**
- [x] Custom `useScrollAnimation` hook (`src/hooks/useScrollAnimation.ts`)
- [x] `CaseStudySection` component for scroll-animated sections
- [x] FeaturedProjects stagger animation (0.15s delay)
- [x] Timeline node reveal on scroll

**Counter Glow Effect:**
- [x] Scale pulse animation (1.0 → 1.08 → 1.0)
- [x] Color transition: text-t1 → xr-green → text-t1

**Reading Progress Bar:**
- [x] `ReadingProgress` component (`src/components/ui/ReadingProgress.tsx`)
- [x] Gradient from primary to xr-green
- [x] Only on `/work/[slug]` pages via `CaseStudyWrapper`

**Interactive Skill Graph:**
- [x] D3.js force simulation (`src/components/sections/SkillGraph.tsx`)
- [x] 25 skills across 4 domains (Core, XR, Graphics, Leadership)
- [x] Hover highlighting with connected nodes
- [x] Drag interaction for nodes
- [x] Mobile fallback: static grouped grid

**Animated Career Timeline:**
- [x] SVG path drawing animation via `pathLength`
- [x] Timeline nodes animate in sequentially

**Unity WebGL Embed:**
- [x] `UnityEmbed` component (`src/components/ui/UnityEmbed.tsx`)
- [x] Idle/loading/playing states
- [x] Placeholder for projects without builds

**Page Transitions:**
- [x] `PageTransition` component (`src/components/layout/PageTransition.tsx`)
- [x] Fade-up animation on route changes
- [x] Applied to all main pages

**Reduced Motion Compliance:**
- [x] `prefers-reduced-motion` in globals.css
- [x] All animations check `useReducedMotion()`
- [x] 0.01ms duration when reduced motion preferred

---

### Module 6: SEO, Performance & Content Infrastructure ✅

**Image Optimization:**
- [x] `scripts/optimize-images.mjs` — Sharp-based WebP conversion
- [x] Full-size (quality 82) and thumbnail (400px, quality 75) variants
- [x] Run with `npm run optimize-images`

**OG Image Generation:**
- [x] Dynamic OG images at `/og?title=...&category=...` (1200×630)
- [x] Brand colors, project category badge, gradient scrim
- [x] Used in all page metadata

**JSON-LD Structured Data:**
- [x] `Person` schema on root layout
- [x] `CreativeWork` schema on each project page
- [x] Components in `src/components/seo/JsonLd.tsx`

**SEO Routes:**
- [x] `/sitemap.xml` — All static routes + 19 project pages
- [x] `/robots.txt` — Allow all, sitemap reference

**Performance:**
- [x] AVIF + WebP image formats
- [x] 1-year cache TTL for images
- [x] Compression enabled
- [x] Security headers on all routes
- [x] Immutable cache for docs

**Redirects:**
- [x] `/portfolio` → `/work` (301 permanent)

**Analytics Events:**
- [x] `resume_download` — Hero & Footer
- [x] `contact_form_submit` — ContactForm
- [x] `project_view` — Case study pages
- [x] `filter_change` — ProjectGrid

---

### Module 5: Work Page & Case Studies ✅

- [x] All 19 MDX project files with narrative content
- [x] `/work` page with filter tabs and project grid
- [x] `/work/[slug]` case study template
- [x] Static generation for all 19 project slugs
- [x] Filter animation with Framer Motion
- [x] ProjectCard hover states
- [x] MediaGallery lightbox modal
- [x] Adjacent project navigation
- [x] Impact callout component
- [x] Build passes with typecheck and lint

### Upcoming Modules

- Module 8: Blog System (posts, MDX rendering)
- Module 9: Performance Optimization

## License

Private — All rights reserved.
