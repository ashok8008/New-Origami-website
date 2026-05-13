# Origami — Next.js Redesign

## Problem statement (verbatim, most recent)
> "yes lets add as many as possible and have a client as https://playsqor.com/ as this is into fantasy betting .. you can remove fanrush. add realprofits.com, you can add onlybeaches.com, getcashback.com as well as a clients"

## Positioning (post-v3.1)
- Mobile-apps + AI + platforms studio for culture-forward brands.
- 10 repeat-client logos: HipHopGrails, PlaySQOR, Acquire.bet, VideoShops, RealProfits, GetCashback, OnlyBeaches, Nick Cooper, TrueWrld, Wholosophy.
- Light "Accenture-classy" aesthetic with signal-red accents; one deliberate dark block on `/ai`.

## Architecture
- **Frontend**: Next.js 14 App Router at `/app/frontend`, JS, Tailwind, lucide-react. Static.
- **Backend**: FastAPI stub at `/app/backend` (`/api/health`).
- **Legacy CRA**: preserved at `/app/_legacy_cra/`.

## Contact (live across the site)
- Email: hello@origami.dev
- US: +1 (970) 710 5120
- India: +91 906 651 4212
- **Head office — New York**: 641 Lexington Avenue, 14th Floor, New York, NY 10022, US
- **Dev team — Bangalore**: Hustlehub Tech Park, Somasundara palya Main Rd, 27th Main Rd, Sector 2, HSR Layout, Bengaluru, KA — 560102, India

## Navigation
- **Primary**: About · Class II & III Games · AI · Services · Work · Careers
- **Footer extras**: Industries · Solutions · Build with · Compare · Insights · Approach · Contact

## Pages — total ~90 routes
### Static
- `/`, `/about`, `/games`, `/ai`, `/work`, `/services`, `/industries`, `/insights`, `/build`, `/solutions`, `/compare`, `/approach`, `/careers`, `/contact`

### Dynamic / PSEO
- `/services/[slug]` × 8
- `/work/[slug]` × 10 (added: playsqor, realprofits, getcashback, onlybeaches; removed: fanrush)
- `/industries/[slug]` × 7 (added: travel-and-lifestyle)
- `/ai/[slug]` × 6
- `/insights/[slug]` × 4
- **`/build/[slug]` × 12** (NEW — tech stacks: react-native, ios-swift, android-kotlin, flutter, nextjs, react, nodejs, python-fastapi, postgres, openai-llm, anthropic-claude, google-gemini)
- **`/solutions/[slug]` × 23** (NEW — auto-generated Service × Industry combos, e.g. mobile-app-development-for-real-money-gaming)
- **`/compare/[slug]` × 6** (NEW — react-native-vs-flutter, native-vs-react-native, nextjs-vs-remix, openai-vs-claude, postgres-vs-mongodb, ios-vs-android)

### SEO infrastructure
- `/sitemap.xml` — 90 URLs, env-driven base (`NEXT_PUBLIC_SITE_URL`)
- `/robots.txt` — env-driven sitemap + host
- JSON-LD Organization (NY HQ) in root layout
- Per-page canonical + title (clean, no duplication) + description + OG + Twitter

## Client logos (`/public/brand/clients/`)
hiphopgrails, playsqor, acquire, videoshops, realprofits, getcashback, onlybeaches, nickcooper, truewrld, wholosophy — 10 wordmark SVGs, on-brand.

## Test status
- Iteration 1 (v3): 44/44 routes 200, 100% frontend pass.
- Iteration 2 (v3.1): 75/75 sampled routes correct (74×200 + /work/fanrush 404), 90 URLs in sitemap. FanRush leaks in 3 strings fixed post-test (MobileFocusSection copy, layout.js description, work/page.js description). Final grep: 0 fanrush references anywhere.

## Backlog / next items
- P1: Replace placeholder `/insights/[slug]` body with real editorial.
- P1: Wire contact form to server-side email (Resend/SendGrid).
- P2: Add real client logos / screenshots when user provides them (current SVG wordmarks are on-brand fallbacks).
- P2: Derive home-page client copy lists from the CLIENTS array (single source of truth) — pending refactor.
- P2: Add `nextjs-vs-remix` Remix and `postgres-vs-mongodb` MongoDB stack pages, OR strip placeholder "Learn more" link on those compares.
- P2: Add per-solution highlights/CTAs (currently service.desc + industry.blurb).
- P3: Vercel deploy config.

## Dates
- 2026-01-24 — Initial Next.js MVP (dark, pivoted).
- 2026-01-24 — **v2**: light Accenture-classy theme, original logo, Class II/III + HipHopGrails.
- 2026-02-24 — **v3**: mobile-app + AI repositioning; /ai, /work × 7, /industries, /insights, PSEO services/industries/ai/insights/work, sitemap/robots/JSON-LD, compliance-call CTA.
- 2026-02-26 — Contact info: hello@origami.dev, NY HQ + Bangalore dev team.
- 2026-02-27 — **v3.1**: Client roster swap (FanRush → PlaySQOR + RealProfits + GetCashback + OnlyBeaches). NEW PSEO patterns: /build (12 tech stacks), /solutions (23 service×industry combos), /compare (6 comparisons). Sitemap now 90 URLs.
- 2026-05-13 — **Favicon**: Added `src/app/icon.svg` (bold black "O." with red dot on white) and `src/app/apple-icon.js` (180×180 dynamic PNG via next/og ImageResponse). Next.js auto-wires both `<link rel="icon">` and `<link rel="apple-touch-icon">` in `<head>`. Verified end-to-end: icon.svg returns 200 image/svg+xml, apple-icon returns 200 image/png 180×180.
- 2026-05-13 — **OG Social Card**: Added `src/app/opengraph-image.js` + `src/app/twitter-image.js` (re-exports OG). 1200×630 PNG via next/og ImageResponse, rendered with red accent bar, soft pink corner blob, "Origami." wordmark, "We build what culture runs." headline, tagline, and a practice-strip footer (Mobile • AI • Auctions • Gaming • Fintech). All `og:image` and `twitter:image` meta tags auto-wired by Next.js file convention; verified rendered output.
