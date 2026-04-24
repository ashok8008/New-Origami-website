# Origami Softwares — Next.js Redesign

## Problem statement (verbatim)
> can you pull and check the site and run here its in react JS and i need in Next JS its my company website which is called www.origami.dev secondly take that content and create a new company website .. i don't want existing UI .. look at the content have it as IS or enhance it

## Architecture
- **Frontend**: Next.js 14 (App Router) at `/app/frontend`, JavaScript (.js), Tailwind CSS, lucide-react icons.
- **Backend**: minimal FastAPI stub at `/app/backend` (`/api/health`) — served on 8001 by supervisor; no business endpoints required for this static marketing site.
- **Legacy CRA**: preserved at `/app/_legacy_cra/` for content reference.

## Design system (dark, Swiss / high-contrast "Digital Origami")
- Palette: `#050505` base, `#111` surfaces, `#FAFAFA` text, `#FF3333` signal red accent.
- Typography: Syne (display), Outfit (body), JetBrains Mono (mono/labels).
- Layout: sharp edges (`rounded-none`), visible grid borders, bento/asymmetric grids, generous spacing (`py-24/32`).
- Motion: CSS transitions, staggered fade, marquee strip, hover colour slides.
- Every interactive element has `data-testid`.

## Pages implemented
- `/` — Hero, marquee, motto, services bento (6), four pillars, industries, testimonials (client carousel), tech tabs.
- `/services/[slug]` — 8 service details (web-design, ecommerce-website, corporate-website, b2b-website, website-maintenance, website-consulting, hybrid-app, wearable-app). Each: pill-tagged hero, services grid, benefits, why-us, process.
- `/staffing` — IT staff aug hero, roles, benefits, engagement models (T&M / Dedicated / Build Your Team), process.
- `/about` — Story, approach (image), values, timeline (2013→2025).
- `/contact` — Contact form (mailto launcher), direct contact details, NDA note.
- `/not-found` — Custom 404.

## Content source
All copy ported from the legacy CRA (`/app/_legacy_cra/src/pages/**`) and lightly enhanced for tone and rhythm — preserving the company voice, service lineup, industries, engagement models, and contact details (contact@myorigami.co, US +1 858 429 9159, IN +91 761 878 0865, 312N Milton Ave, Campbell, CA 95008).

## Backlog / next items
- P1: Service detail router currently routes all home services cards to `/services/web-design` (we link to the closest dedicated page). Add cross-linking per service code once detail pages for Business Analysis / Cyber / Blockchain / Design / QA are authored.
- P1: Wire contact form to a real backend (Resend/SendGrid) once user provides API key — currently falls back to `mailto:`.
- P2: Case studies / portfolio page.
- P2: Blog/editorial surface.
- P2: Cookie banner + analytics.
- P3: Add Vercel deployment config if user moves off Emergent preview.

## Test status
- HTTP 200 on /, /services/web-design, /staffing, /about, /contact verified via curl.
- Visual screenshots captured (1920x800) — hero, bento services, pillars, industries, testimonials, tech tabs, service detail, staffing, contact, about all render cleanly.

## Dates
- 2026-01-24 — MVP Next.js redesign shipped.
