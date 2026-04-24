# Origami — Next.js Redesign

## Problem statement (verbatim, most recent)
> can you pull and check the site and run here its in react JS and i need in Next JS its my company website which is called www.origami.dev secondly take that content and create a new company website .. i don't want existing UI .. look at the content have it as IS or enhance it

## Positioning (post-v3)
- Repositioned as a **mobile-apps + AI + platforms** studio for culture-forward brands.
- Repeat-client proof: HipHopGrails, FanRush, Acquire.bet, VideoShops, Nick Cooper, TrueWrld, Wholosophy.
- Light "Accenture-classy" aesthetic with signal-red accents, preserving original Origami logo.
- One deliberate dark block: `/ai` hero (ink background with red dot-grid) for visual contrast.

## Architecture
- **Frontend**: Next.js 14 App Router at `/app/frontend`, JavaScript, Tailwind CSS, lucide-react icons. Fully static, generated at build.
- **Backend**: FastAPI stub at `/app/backend` (`/api/health`) for supervisor only.
- **Legacy CRA**: preserved at `/app/_legacy_cra/` for content reference and original logo.

## Design system
- Palette: white `#FFFFFF` / paper `#FAFAF7` base, ink `#0D0D0D` text, signal red `#E8382C` accent.
- Typography: Archivo (display black), Inter (body), JetBrains Mono (overlines), Instrument Serif (accent italic).
- Motifs: dotted radial-gradient grid + red conic "sunburst" rays in corners.
- Buttons: pill-shaped primary red; ghost pills for secondary; dark variant on `/ai`.
- Logo: original Origami SVG preserved in header + footer.

## Navigation
- **Primary**: About · Class II & III Games · AI · Services · Work · Careers
- **Secondary (footer sitemap)**: + Industries · Insights · Approach · Contact

## Pages (v3)
### Static
- `/` — hero, marquee, clients row (7 wordmark logos), mobile-focus, stats, case studies (top 3), AI section (dark), services grid (8), approach, industries, testimonials.
- `/about` — story, values, timeline.
- `/games` — Class II/III split, capabilities, **Book a compliance call** CTA (#compliance-call anchor, mailto).
- `/ai` — AI practice hero (dark), 6 use cases, proof cases from clients.
- `/services` — 8 service cards linking to detail.
- `/work` — 7 case studies listing with logos.
- `/industries` — 6 industry cards.
- `/insights` — 4 article list.
- `/approach`, `/careers`, `/contact` — retained.

### Dynamic / PSEO
- `/services/[slug]` × 8 — mobile-app-development, ai-and-llm-products, auctions-and-fan-drops, class-ii-and-class-iii-games, web-development, design-and-brand, data-and-bi, dedicated-teams
- `/work/[slug]` × 7 — hiphopgrails, fanrush, acquire, videoshops, nickcooper, truewrld, wholosophy
- `/industries/[slug]` × 6 — hip-hop-and-music, real-money-gaming, celebrity-and-creator-economy, commerce-and-retail, health-and-wellness, fintech-and-payments
- `/ai/[slug]` × 6 — llm-apps, rag, agents, voice, vision, evals
- `/insights/[slug]` × 4 — editorial placeholders

### SEO infrastructure
- `/sitemap.xml` — 44 URLs, env-driven base (NEXT_PUBLIC_SITE_URL)
- `/robots.txt` — env-driven sitemap + host
- JSON-LD Organization schema in root layout
- Per-page canonical alternates + description + openGraph/twitter defaults

## Client logos
- Custom wordmark SVGs in `/app/frontend/public/brand/clients/` (legally safe, visually cohesive): hiphopgrails.svg, fanrush.svg, acquire.svg, videoshops.svg, nickcooper.svg, truewrld.svg, wholosophy.svg

## Test status
- 44/44 routes HTTP 200.
- Testing agent iteration 1: success_rate frontend 100%. 0 JS errors. 75+ data-testids on home. No retest needed. Minor SEO polish items fixed (title template duplication, env-driven sitemap base).

## Backlog / next items
- P1: Real editorial content for `/insights/[slug]` (currently placeholder body).
- P1: Set `NEXT_PUBLIC_SITE_URL` in frontend .env when deploying to production (defaults to https://origami.dev).
- P1: Replace custom wordmark SVGs with actual client logos if/when user provides them (keeping current as on-brand fallback).
- P2: Wire contact form to server-side email (Resend/SendGrid) — currently mailto.
- P2: Analytics/cookie banner.
- P2: Add client screenshots / metrics on each `/work/[slug]` page once assets are provided.
- P3: Vercel deploy config for production.

## Dates
- 2026-01-24 — Initial Next.js MVP (dark, later pivoted).
- 2026-01-24 — **v2**: light/Accenture-classy theme, original logo, Class II/III + HipHopGrails.
- 2026-02-24 — **v3**: mobile-app + AI repositioning; added /ai, /work (7 case studies), /industries, /insights; PSEO dynamic routes for services/industries/ai/insights/work; sitemap + robots + JSON-LD; repeat-client logo row on homepage; compliance-call CTA on /games.
