# Origami — Next.js Redesign

## Problem statement (verbatim, most recent)
> UI is not serious and you have missed menu URLS see class 2 gaming ... it should be like moder accenture classy not black and don't change our logo and we do did famous auction site ... hiphopgrails.com for hiphop celeb as well .. see i thiught of that .. as home page headline .. make it pages Pro i don't like my design as well

## Architecture
- **Frontend**: Next.js 14 (App Router) at `/app/frontend`, JavaScript (.js), Tailwind CSS, lucide-react icons. Static marketing site.
- **Backend**: minimal FastAPI stub at `/app/backend` (`/api/health`) for supervisor — no business endpoints required.
- **Legacy CRA**: preserved at `/app/_legacy_cra/` for content reference and original logo.

## Design system (v2 — light, Accenture-classy)
- Palette: white `#FFFFFF` / paper `#FAFAF7` base, ink `#0D0D0D` text, signal red `#E8382C` accent.
- Typography: Archivo Black (display), Inter (body), JetBrains Mono (overlines), Instrument Serif (accent italic).
- Motifs: dotted radial-gradient grid + red conic "sunburst" rays in corners (matching user screenshot).
- Buttons: pill-shaped primary red with soft shadow; ghost pills for secondary.
- Logo: user's original "Origami" SVG preserved and used in header + footer.

## Pages shipped
- `/` — Hero ("We build what culture runs on."), marquee, stats, case studies (HipHopGrails + Class II/III platform), services grid, approach strip, industries, testimonials.
- `/about` — Story, values, timeline 2013 → 2025 incl. HipHopGrails mention.
- `/games` — Class II & Class III Games detail (split column for Class II vs Class III, capabilities grid, compliance CTA).
- `/services` — Full services detail page (6 practices with pills + bullet detail).
- `/approach` — Listen / Architect / Ship / Scale method + principles.
- `/careers` — Perks + 4 open roles with apply-by-email CTAs.
- `/contact` — Form (mailto launcher), direct contact details.
- `/not-found` — custom 404.

## Content additions for v2
- Menu restructured to: **About us / Class II & Class III Games / Services / Approach / Careers / Let's Talk**.
- Home headline + sub copy rewritten to user's direction: "We build what culture runs on." + "Digital Platforms for Hip-Hop, Gaming & Cultural Icons." + "From auctions and fan drops to real-money Class II & Class III games, Origami builds the technology behind culture-forward brands."
- HipHopGrails surfaced as the signature case study (hiphopgrails.com).
- Dedicated Class II & III gaming page covering bingo-based mechanics, RNG, RGS, compliance.

## Backlog / next items
- P1: Wire contact form to server-side email (Resend/SendGrid) once user provides API key — currently launches mailto draft.
- P1: Add a HipHopGrails dedicated case-study detail page with screenshots / metrics once assets are provided.
- P2: Add remaining case studies (fintech, healthcare).
- P2: Cookie/analytics banner.
- P3: Vercel deploy config for production once user wants to move off Emergent preview.

## Test status
- HTTP 200 on /, /about, /services, /games, /approach, /careers, /contact verified via curl.
- Visual screenshots captured (1920x800) and match the reference screenshot the user provided.

## Dates
- 2026-01-24 — Initial Next.js MVP shipped (dark theme, misaligned with brand).
- 2026-01-24 — **v2**: pivoted to light/Accenture-classy theme, kept original logo, added Class II/III gaming + HipHopGrails.
