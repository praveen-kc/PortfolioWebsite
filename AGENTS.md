<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Agent Instructions for Praveen K C Portfolio

## Dev Commands
```bash
npm run dev           # Start dev server at localhost:3000
npm run build         # Production build (uses --webpack for contentlayer2)
npm run lint          # ESLint check
npm run typecheck     # TypeScript check
npm run optimize-images # Convert images to WebP (requires images in public/images/source/)
```

## Tech Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 + shadcn/ui patterns
- Framer Motion (with prefers-reduced-motion guards)
- React Three Fiber
- Contentlayer2 (MDX content management)
- next-mdx-remote (MDX rendering in RSC)
- Resend (email)
- Vercel (deployment target)

## Important: Build Configuration
- `npm run build` uses `--webpack` flag because contentlayer2 requires webpack
- `next.config.ts` has both `webpack` and `turbopack: {}` configs
- Contentlayer generates types in `.contentlayer/generated/`
- TypeScript path alias: `@/content/generated` → `.contentlayer/generated`

## Design System
- Dark-first: `--void: #0b0d12`, `--surface: #14161f`, `--elevated: #1e2130`
- Primary: `--primary: #3353ff`, XR accent: `--xr-green: #00e5a0`
- Fonts: Syne (display), Inter (body), JetBrains Mono (mono)
- Spacing: 4px base unit (4/8/12/16/24/32/48/64/96/128px)
- Max container: 1200px, padding: clamp(24px, 5vw, 48px)

## CSS Variables
All defined in `globals.css` → Tailwind custom tokens. Never hardcode color values.

## Images
- Always use `next/image`
- Format: WebP, `placeholder="blur"`, lazy loading except above-fold

## Lighthouse Targets
All pages: Performance 95+, Accessibility 100, Best Practices 100, SEO 95+

## Light Mode
- void → #f8f7f4, surface → #ffffff, elevated → #f2f0eb
- border → #e2dfd6, text-1 → #0e0e12, text-2 → #5a5870

## Prohibited
jQuery, Bootstrap, Mobirise

## Content Source
Live reference: https://praveenkc.com/ and https://praveenkc.com/portfolio

## Current Development Status

### Completed Modules
✅ Module 1-4: Core setup, design system, layout components, homepage
✅ Module 5: Work Page & Case Studies (19 MDX projects, filtering, gallery)
✅ Module 6: SEO, Performance & Content Infrastructure
✅ Module 7: Advanced Interactivity & 3D
✅ Module 8: Launch Readiness, Polish & Deployment

### SEO & Performance Infrastructure
- OG image generation at `/og` (1200×630)
- JSON-LD structured data (Person on all pages, CreativeWork on projects)
- `/sitemap.xml` with all routes
- `/robots.txt` configured
- Security headers (DNS prefetch, X-Content-Type, Referrer-Policy)
- `/portfolio` → `/work` redirect
- Vercel Analytics events wired

### Advanced Interactivity (Module 7)
- Hero particles: R3F canvas with 2000 particles, mouse-responsive
- Reading progress bar on case study pages
- D3.js skill graph with force simulation (static fallback on mobile)
- Animated career timeline with SVG path drawing
- Counter glow effects on animation complete
- Page transitions (fade-up) on all routes
- Unity WebGL embed component (with placeholder state)
- Full `prefers-reduced-motion` compliance

### Project Structure
- MDX files: `content/projects/*.mdx` (19 projects)
- Generated types: `.contentlayer/generated/`
- SEO components: `src/components/seo/`
- OG route: `src/app/og/route.tsx`
- Sitemap: `src/app/sitemap.ts`
- Robots: `src/app/robots.ts`
- Analytics: `src/lib/analytics.ts`
- Image optimizer: `scripts/optimize-images.mjs`
- 3D components: `src/components/3d/`
- Custom hooks: `src/hooks/`
- Layout wrappers: `src/components/layout/`
- UI components: `src/components/ui/`

### Key Component Locations
- `src/components/3d/HeroParticles.tsx` - R3F particle canvas
- `src/components/sections/SkillGraph.tsx` - D3 force graph
- `src/components/ui/ReadingProgress.tsx` - Progress bar
- `src/components/ui/UnityEmbed.tsx` - Unity player
- `src/components/layout/PageTransition.tsx` - Route transitions
- `src/components/ui/CaseStudySection.tsx` - Scroll animation wrapper
- `src/hooks/useScrollAnimation.ts` - Scroll animation hooks

### Launch Readiness (Module 8)
- Skip-to-main link with focusable accessibility
- aria-label on all navigation elements
- Background removed duplicate Google Fonts import (now via next/font)
- Contrast ratio fixed (text-t2 adjusted to >4.5:1)
- Axe-core accessibility tests in `tests/a11y.spec.ts`
- Playwright config for cross-browser testing
- vercel.json deployment config (sin1 region)
- Blog placeholder with LinkedIn CTA (not "Coming Soon")

### Post-Launch Checklist
Run these commands before going live:
```bash
npm run build  # Production build
npx playwright test  # A11y tests pass
```

### Launch Steps (manual)
1. Push to GitHub main branch
2. Connect repo to Vercel
3. Add RESEND_API_KEY in Vercel env vars
4. Add custom domain praveenkc.com + www
5. DNS: CNAME www → cname.vercel-dns.com, A @ → Vercel IP
6. Verify SSL certificate
7. Submit sitemap to Google Search Console
8. Create Search Console property (DNS verification)

### Pre-Launch Profile Updates
- LinkedIn headline: "Lead Unity Developer & XR Specialist | 12+ years | praveenkc.com"
- LinkedIn about: Add portfolio link in first 3 lines

### Remaining Items (not in codebase)
- CV PDF: Create /public/docs/PraveenKC-CV.pdf
- Hero image: Create /public/images/ with required assets
- Test a11y in production: npx playwright test

### Upcoming
- Module 9: Blog System (posts, MDX rendering)
