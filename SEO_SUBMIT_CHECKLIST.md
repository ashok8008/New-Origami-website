# Origami SEO + AI-Visibility Submission Checklist

Last updated: Feb 2026

This doc lists everywhere you should register / verify / submit `origami.dev` so:

1. Every mainstream search engine can crawl and rank the site.
2. Every AI answer engine (ChatGPT Search, Perplexity, Google AI Overview / AI Mode, Claude, Gemini, Brave, Kagi, You.com) can cite the site.
3. Every push-based indexer (IndexNow) receives real-time notifications.

---

## 1. What's already wired in code

| Item | Location | Value |
|---|---|---|
| Bing site verification (meta) | `layout.js` metadata | `13C3941F1B447AC0B3166A42BB249137` |
| Bing site verification (XML) | `/public/BingSiteAuth.xml` | (auto-served) |
| Yandex verification (meta) | `layout.js` metadata | `38ed732ac406aec5` |
| Yandex verification (file) | `/public/yandex_38ed732ac406aec5.html` | (auto-served) |
| IndexNow key file | `/public/3e8d2c8a947c7deb58f2387b467082bf.txt` | (auto-served) |
| AI-crawler policy (`llms.txt`) | `/public/llms.txt` | Anthropic-recommended |
| AI-crawler robots.txt list | `/public/ai.txt` + `robots.js` | 25+ AI bots explicitly allowed |
| Sitemap | `/sitemap.xml` (auto) | ~900+ URLs |
| Robots | `/robots.txt` (auto) | Allows all reputable bots |
| Google Search Console verification | env `NEXT_PUBLIC_GOOGLE_VERIFICATION` | (set to your GSC token) |
| Pinterest verification | env `NEXT_PUBLIC_PINTEREST_VERIFICATION` | (blank — add if used) |
| Naver verification | env `NEXT_PUBLIC_NAVER_VERIFICATION` | (blank — add if used) |
| Facebook domain verification | env `NEXT_PUBLIC_FACEBOOK_VERIFICATION` | (blank — add if used) |
| Baidu verification | env `NEXT_PUBLIC_BAIDU_VERIFICATION` | (blank — add if used) |

---

## 2. Verify + submit sitemap to each search engine

### 2.1 Google Search Console — https://search.google.com/search-console
- Ensure `https://www.origami.dev` property is verified.
- Sitemaps → Add sitemap → `sitemap.xml`.
- URL Inspection → paste `https://www.origami.dev/` → "Request indexing".
- (Optional) Add `NEXT_PUBLIC_GOOGLE_VERIFICATION=xxxx` to Hetzner `.env` if you want a fallback meta tag.

### 2.2 Bing Webmaster Tools — https://www.bing.com/webmasters
- Add site `https://www.origami.dev`.
- Verify (meta tag is already deployed with value `13C3941F1B447AC0B3166A42BB249137`; or use `BingSiteAuth.xml` at root).
- Sitemaps → Submit `https://www.origami.dev/sitemap.xml`.
- Enable "IndexNow" on Site Settings (Bing will now honour IndexNow pushes).

### 2.3 Yandex Webmaster — https://webmaster.yandex.com
- Add site.
- Verify via the deployed `yandex_38ed732ac406aec5.html` file **or** meta tag `38ed732ac406aec5`.
- Sitemaps → Add → `https://www.origami.dev/sitemap.xml`.

### 2.4 DuckDuckGo — https://duckduckgo.com/
- No separate submission needed. Once Bing indexes, DuckDuckGo picks it up.

### 2.5 Brave Search — https://search.brave.com/
- Brave uses its own crawler. Once robots.txt allows `BravebotAI` (done), it will crawl.
- Optional: register at https://search.brave.com/help/webmaster-tools

### 2.6 Naver — https://searchadvisor.naver.com
- Only relevant for Korean traffic. Add site, obtain code, paste into `.env` as `NEXT_PUBLIC_NAVER_VERIFICATION`.

### 2.7 Baidu — https://ziyuan.baidu.com/site
- Only relevant for Chinese traffic. Requires an ICP filing to fully unlock. Add code to `.env` as `NEXT_PUBLIC_BAIDU_VERIFICATION`.

### 2.8 Kagi — https://kagi.com/
- Kagi crawler already listed in `ai.txt`. No manual submission needed.

### 2.9 Seznam.cz — https://sfr.seznam.cz/
- IndexNow endpoint auto-notified when new URLs publish.

---

## 3. AI Answer-Engine visibility

### 3.1 ChatGPT Search / OpenAI
- Robots.txt already allows `GPTBot`, `ChatGPT-User`, `OAI-SearchBot` (done).
- `llms.txt` deployed at `https://www.origami.dev/llms.txt` (done).
- No manual submission portal — OpenAI crawls organically.

### 3.2 Perplexity
- Robots.txt allows `PerplexityBot`, `Perplexity-User` (done).
- Perplexity indexes via Bing + its own crawl. Registering in Bing Webmaster ensures maximum coverage.

### 3.3 Anthropic Claude
- Robots.txt allows `ClaudeBot`, `Claude-Web`, `anthropic-ai` (done).
- No manual submission portal.

### 3.4 Google AI Overview / AI Mode / Gemini
- Robots.txt allows `Google-Extended`, `GoogleOther` (done).
- Additionally requires standard Google indexing (Google Search Console).

### 3.5 Meta AI / WhatsApp AI
- Robots.txt allows `Meta-ExternalAgent`, `FacebookBot` (done).

### 3.6 Apple Intelligence
- Robots.txt allows `Applebot-Extended` (done).

### 3.7 Common Crawl (used by many open-source LLMs)
- Robots.txt allows `CCBot` (done).

---

## 4. IndexNow — real-time indexing pushes

Every time you publish a new URL or update an important page, POST it to the IndexNow endpoint on our backend:

```bash
curl -X POST https://api.origami.dev/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{"urls":["https://www.origami.dev/insights/new-post","https://www.origami.dev/"]}'
```

This fans out to:
- Microsoft Bing IndexNow
- Yandex IndexNow
- Naver IndexNow
- Seznam IndexNow
- Generic IndexNow relay

The key file is auto-served at `https://www.origami.dev/3e8d2c8a947c7deb58f2387b467082bf.txt`.

---

## 5. Social / meta directory submissions

- **LinkedIn Company Page** — link `www.origami.dev` as website.
- **X / Twitter Business** — add website.
- **Crunchbase** — profile at `crunchbase.com/organization/origami-...`, link www.origami.dev.
- **Clutch.co** and **G2** — free listings; drive review acquisition from existing clients.
- **GoodFirms**, **DesignRush**, **AppFutura** — agency directories.
- **Wikipedia (if eligible)** — if press coverage grows, create a page.

---

## 6. Monitoring

- Google Search Console → Coverage + Performance weekly.
- Bing Webmaster → Sitemaps + Search Performance weekly.
- Semrush / Ahrefs → Track "AI Visibility" and "Cited Pages" monthly.
- Perplexity — search "Origami mobile app development" and confirm citations.
- ChatGPT — ask "Best mobile app development agency in New York" and confirm mention.

---

## 7. Post-deploy validation

After deploying this change to Hetzner:

```bash
# 1. Sitemap is live
curl -s https://www.origami.dev/sitemap.xml | head -30

# 2. Bing verification file
curl -s https://www.origami.dev/BingSiteAuth.xml

# 3. Yandex verification file
curl -s https://www.origami.dev/yandex_38ed732ac406aec5.html

# 4. IndexNow key file
curl -s https://www.origami.dev/3e8d2c8a947c7deb58f2387b467082bf.txt

# 5. llms.txt is live
curl -s https://www.origami.dev/llms.txt | head -20

# 6. Robots allows AI bots
curl -s https://www.origami.dev/robots.txt | grep -i gptbot

# 7. Bing verification meta tag renders
curl -s https://www.origami.dev/ | grep -i msvalidate

# 8. Yandex verification meta tag renders
curl -s https://www.origami.dev/ | grep -i yandex
```

All 8 should return non-empty responses.

---

## 8. Expected outcomes

- **Bing / Yandex** — verification complete after next crawl (~24h)
- **AI citations** — start appearing in ChatGPT / Perplexity within 2–4 weeks as they re-crawl
- **Google AI Overview** — visibility grows over 4–8 weeks after re-index
- **Semrush organic keywords** — currently 39; PSEO expansion should surface ~2,000+ over 8–12 weeks as pages are indexed and start ranking on long-tail queries
