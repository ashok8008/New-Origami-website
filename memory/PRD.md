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
- 2026-05-13 — **Per-page OG cards**: Extracted shared renderer to `src/lib/og-card.js` (eyebrow pill + headline + subtitle + footer). Added unique OG + Twitter cards for `/auctions` ("Built for the next Sotheby's"), `/media` ("We build like the magazines we read"), `/ai` ("LLMs, agents, RAG that ship"), and dynamic `/work/[slug]` (per-project name + tag + one-liner). Every shared link now gets a bespoke social preview. Insights backlog item confirmed already done — all 4 articles have full editorial bodies (200-900 words, h2 + p + ul).
- 2026-05-13 — **3 new insight articles** added to `INSIGHTS` (content.js): "Why .NET + Azure is still the right call for high-value auctions" (8 min, Auctions), "The case for senior-only delivery — what 7 years and 40 engineers taught us" (7 min, Operating), "How we evaluated React Native vs native after 9 mobile builds" (10 min, Mobile). All 700-1100 word editorial pieces with h2/p/ul structure. Sitemap auto-grew 92 → 95 URLs. All 7 insight slugs return 200; listing page renders all 7 in order.
- 2026-05-22 — **Big feature batch** in one ship:
  - **Interactive dot grid hero** (`InteractiveDotGrid.js`): canvas-based, ramp.com-style proximity-reactive dots in the home hero. Dots within ~170px of cursor brighten + scale + tint signal-red. Respects `prefers-reduced-motion` and falls back to static dotted bg on touch devices. Replaces the static `dotted` div in HeroSection.
  - **2 new clients** added: **beRides** (https://betademo.berides.com — marketplace + bR-Studio CMS + Hire + Community for aftermarket-car culture, in development) and **FanRush** (https://fanrush.ai — AI customer-acquisition engine, 5K creators, 850M audience, 35 countries, brands SHEIN/Adidas/Sephora). Added SVG wordmark logos, CLIENTS entries, and full PROJECTS case-study entries.
  - **Detailed case studies for all 12 projects** — added a new `story` field (h2/p/ul array) to every PROJECTS entry: The brief → Architecture & engineering choices → What we shipped → Where it stands now. Renders as a new "How we delivered" section on `/work/[slug]` with `data-testid="work-story-{slug}"`. Each story is ~400-600 words.
  - **Google Tag Manager** wired via `GoogleTagManager.js` (head script + noscript iframe), id `GTM-KFT8JB48` (overridable via `NEXT_PUBLIC_GTM_ID`).
  - **Click tracking**: `ClickTracker.js` delegates clicks on any `[data-track]` attribute and pushes events into BOTH Plausible (`window.plausible`) AND GTM dataLayer simultaneously. `lib/analytics.js` exposes `trackEvent(name, props)` for programmatic use. Wired on: Let's Talk header CTA, Start a project (hero), Start a project (work page CTA), contact form submit + error.
  - Sitemap grew 95 → 97 URLs. Build clean, lint clean. All `/work/*` URLs return 200.
- 2026-05-22 — **PSEO + polish update**:
  - Case-study "At a glance" → "Engagement" header rename (more authoritative voice).
  - Case-study "How we helped" → "How we delivered" rename.
  - **2 new INDUSTRIES**: `automotive-and-aftermarket` (beRides) + `martech-and-creator-economy` (FanRush). Auto-grows SOLUTIONS by 8 new service×industry combos.
  - **2 new TECH_STACKS**: `dotnet-and-azure` (auctions/regulated workloads) + `python-fastapi` (AI-native services). Links to relevant /work case studies.
  - **2 new COMPARES**: `dotnet-vs-nodejs` + `azure-vs-aws` — both editorial-grade, anchored in the team's actual experience.
  - **GTM GA4 setup guide** written to `/app/GTM_SETUP.md` — step-by-step for connecting GA4, creating triggers for `cta_lets_talk_header` / `cta_start_project` / `contact_form_submitted`, marking conversions.
  - Sitemap grew **97 → 111 URLs** (+14). 100% verified: industries +2, solutions +8, build +2, compare +2 — all return 200.
- 2026-06-01 — **SEO ranking overhaul**:
  - **`lib/seo.js`** — JSON-LD schema builders: `localBusinessJsonLd`, `breadcrumbJsonLd`, `serviceJsonLd`, `faqJsonLd`, `articleJsonLd`, `jsonLdScript`.
  - **Organization → ProfessionalService** schema upgrade in root layout. Now includes NYC + Bengaluru `location` blocks, `areaServed`, `knowsAbout` (14 expertise tags), `numberOfEmployees`, `foundingDate`, `priceRange`.
  - **BreadcrumbList** wired into `/services/[slug]`, `/work/[slug]`, `/insights/[slug]`, `/new-york`.
  - **Service** schema on every `/services/[slug]`.
  - **FAQPage** schema with rendered FAQ accordion on top-5 services (mobile, AI, auctions, gaming, web) + `/new-york`. Real, useful FAQs (cost, stack, timeline, location) — 4-6 per page.
  - **Article** schema on every `/insights/[slug]` with publish date + author + image.
  - **Title tags rewritten**: home + service pages now match `[Keyword] Agency | Origami — New York` pattern (high-intent, location-anchored, no template duplication).
  - **`/new-york` location landing page**: senior-only NYC pitch, HQ details strip, services grid, 6 NYC case studies, 6 NYC-specific FAQs. Added to sitemap.
  - **Backlink email template** + **SEO action checklist** written to `/app/SEO_ACTION_CHECKLIST.md` covering: Google Search Console submission, Google Business Profile setup, the client backlink email, agency directory submissions (Clutch, DesignRush, GoodFirms), HARO/Featured pitching strategy.
  - Sitemap **111 → 112 URLs** (+1, the NYC landing). Build + lint clean. All 6 critical pages return 200 with expected JSON-LD schemas firing.
- 2026-06-09 — **Canonical-host fix (GSC indexing bug)**: Google Search Console was excluding 110 pages across 3 reports ("Alternative page with proper canonical tag" = 48, "Duplicate without user-selected canonical" = 4, "Discovered – currently not indexed" = 58). Root cause: site served from `https://www.origami.dev/*` but every canonical/sitemap/JSON-LD/OG URL declared `https://origami.dev/*` (no www). Changed default `NEXT_PUBLIC_SITE_URL` fallback in `seo.js`, `layout.js`, `sitemap.js`, `robots.js` to `https://www.origami.dev`. Verified: every canonical tag, sitemap entry and JSON-LD `url` now matches the live host. Expected GSC recovery: 3-10 days post-redeploy as Google re-crawls.
