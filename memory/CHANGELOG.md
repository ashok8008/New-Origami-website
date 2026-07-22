# CHANGELOG — Origami

## Feb 22, 2026 — Nav cleanup + Seorce tracking + Bing verify confirmation

### Navigation consolidation
- **Top nav reduced 9 → 7 items** to eliminate redundancy: `About · Services · AI · Products · Work · Insights · Careers`.
- Removed from top nav (still live + linked from footer for SEO): `AI Development` (dup of AI), `Custom Software` (moved under Services), `Auctions` (moved under Services).
- Services page expanded to **10 practice cards** with a new **Custom Software Development** card (deep-links to `/custom-software-development` hub) and **Auctions & Fan Drops** now deep-links to `/auctions` vertical via new `externalHref` field on `SERVICES` items.
- Cleaned duplicate `code: "05"` collision in `SERVICES`; renumbered 01-10.
- `NAV_EXTRA` (footer sitemap) expanded to include: AI, AI Development, Custom Software, Auctions, Pricing — preserving link equity for all removed nav items.

### Third-party tracking
- Added **Seorce AI/Search visibility tracker** (`projectId=6a5f890ee81bef1813328162`) via `next/script strategy="afterInteractive"` in root `layout.js`. Loads globally across all 1000+ pages.

### Verifications
- Confirmed `BingSiteAuth.xml` (user code `13C3941F1B447AC0B3166A42BB249137`) live at `https://origami.dev/BingSiteAuth.xml` — HTTP 200, `application/xml`.
- Provided GSC + Bing Webmaster manual sitemap resubmission playbook to user.


## Feb 15, 2026 — PSEO explosion + AI-crawler visibility

**Goal**: Grow Semrush organic keyword count from 39 → 2,000+ and unlock AI answer-engine citations (ChatGPT, Perplexity, Google AI Overview, Gemini, Claude, Brave, Kagi).

### P0 — AI + Search verification foundations
- Added Bing site verification: meta tag `13C3941F1B447AC0B3166A42BB249137` in `layout.js` + `/public/BingSiteAuth.xml`.
- Added Yandex verification: meta tag `38ed732ac406aec5` in `layout.js` + `/public/yandex_38ed732ac406aec5.html`.
- Env-driven placeholders for Google, Pinterest, Naver, Facebook, Baidu verifications.
- Published `/llms.txt` (Anthropic-recommended AI-crawler manifest) with structured links to services, industries, clients, AI practice, guides, glossary.
- Published `/ai.txt` and updated `robots.txt` with explicit `Allow: /` for 25+ reputable AI crawlers (GPTBot, ChatGPT-User, OAI-SearchBot, PerplexityBot, ClaudeBot, Claude-Web, anthropic-ai, Google-Extended, CCBot, Applebot-Extended, Bytespider, Amazonbot, Meta-ExternalAgent, DuckAssistBot, cohere-ai, MistralAI-User, Kagibot, BravebotAI, etc.).
- IndexNow protocol: key file at `/public/3e8d2c8a947c7deb58f2387b467082bf.txt`, backend push endpoint `POST /api/indexnow` fanning out to Bing, Yandex, Naver, Seznam and the generic IndexNow relay.
- Added `<meta name="ai-content-declaration" content="human-authored" />` for transparent provenance.

### P1 — PSEO explosion (~800+ new URLs)
- New `/app/frontend/src/lib/pseo.js` module with cities, hire pages, guides, glossary and AI-solution generators.
- **20 cities**: 15 US (NYC, LA, SF, Chicago, Miami, Austin, Boston, Seattle, Atlanta, Nashville, Denver, Dallas, Houston, DC, Vegas) + 5 global (London, Toronto, Dubai, Singapore, Bengaluru).
- **`/hire`** landing + **`/hire/[slug]`** × 260 pages — every stack × every city (`react-native-developers-in-new-york`, `python-fastapi-developers-in-london`, etc.), each with FAQ + Service JSON-LD.
- **`/locations`** landing + **`/locations/[city]`** × 20 city landings, each with LocalBusiness + FAQ JSON-LD.
- **`/locations/[city]/[topic]`** × ~360 pages (city × service, city × industry), each with FAQ + Breadcrumb JSON-LD.
- **`/ai-solutions`** landing + **`/ai-solutions/[slug]`** × 60 pages — AI use-case × industry, each with Service + FAQ JSON-LD.
- **`/guides`** landing + **`/guides/[slug]`** × 40 long-form articles with HowTo + Article + FAQ JSON-LD.
- **`/glossary`** landing + **`/glossary/[slug]`** × 60 short-form definitions with DefinedTerm + FAQ JSON-LD.
- **Compare pages**: +30 new tech / AI comparisons on top of the existing 9 (Expo vs Bare RN, SwiftUI vs UIKit, GPT-5 vs Claude 4.5, pgvector vs Pinecone, LangChain vs LlamaIndex, Stripe vs Adyen, Snowflake vs BigQuery, PostHog vs Amplitude, Playwright vs Cypress, Twilio vs Vonage, and more).

### P2 — AI-citation optimisation
- FAQ + HowTo + Service + Breadcrumb + DefinedTerm JSON-LD helpers added to `src/lib/seo.js`.
- Every PSEO template renders FAQ JSON-LD (4 questions per page) so AI answer engines can quote directly.
- SpeakableSpecification helper added for voice-search extractability.

### P3 — Sitemap + submissions
- `/sitemap.xml` grew from ~110 URLs to **922 URLs** verified.
- Written submission playbook at `/app/SEO_SUBMIT_CHECKLIST.md` — step-by-step instructions to verify + submit on Google Search Console, Bing Webmaster, Yandex Webmaster, Naver, Baidu, DuckDuckGo, Brave, Kagi.
- Backend `POST /api/indexnow` tested → Bing 202, Yandex 202, generic IndexNow 202 accepted.

### Files touched
- Added: `pseo.js`, `hire/{page,[slug]/page}.js`, `locations/{page,[city]/{page,[topic]/page}}.js`, `guides/{page,[slug]/page}.js`, `glossary/{page,[slug]/page}.js`, `ai-solutions/{page,[slug]/page}.js`, `SEO_SUBMIT_CHECKLIST.md`, `/public/llms.txt`, `/public/ai.txt`, `/public/BingSiteAuth.xml`, `/public/yandex_38ed732ac406aec5.html`, `/public/3e8d2c8a947c7deb58f2387b467082bf.txt`.
- Modified: `layout.js` (verification meta), `robots.js` (AI-crawler allow-list), `sitemap.js` (922 URLs), `content.js` (+30 compares, NAV_EXTRA additions), `seo.js` (FAQ/HowTo/DefinedTerm helpers), `.env` (verification codes), `server.py` (IndexNow route).

### Expected outcomes
- **Bing / Yandex** verification complete after next crawl (~24h).
- **AI citations** — ChatGPT / Perplexity within 2–4 weeks as they re-crawl.
- **Google AI Overview** — visibility grows over 4–8 weeks.
- **Semrush organic keywords** — 39 → 2,000+ over 8–12 weeks as long-tail PSEO ranks.

---

## Feb 10, 2026 — Employee Onboarding Hub

(Preserved from prior CHANGELOG — see git log for details.)
