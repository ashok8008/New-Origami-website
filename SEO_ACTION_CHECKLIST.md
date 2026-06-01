# Origami — SEO action checklist

Things only **you** can do (off-platform). All technical/code SEO is shipped.

---

## 1. Submit sitemap to Google Search Console (5 min)
1. https://search.google.com/search-console → **Add property** → `https://origami.dev` (or your live domain).
2. Verify via DNS TXT record (Google will give you the exact value).
3. **Sitemaps → Add new sitemap** → `sitemap.xml` → Submit.
4. Repeat for Bing Webmaster Tools: https://www.bing.com/webmasters/

That alone gets all 112+ URLs indexed within 1-7 days.

---

## 2. Set up Google Business Profile (10 min)
https://www.google.com/business/ → Create profile for:
- **Business name**: Origami
- **Address**: 641 Lexington Avenue, 14th Floor, New York, NY 10022
- **Category**: Software Company (primary), Website Designer (secondary)
- **Phone**: +1 (970) 710 5120
- **Website**: https://origami.dev (or your live domain)
- **Hours**: Mon-Fri 9am-7pm ET

Google will mail a postcard with a verification code to the NYC address. Once verified you'll appear in Maps + the "Origami New York" local pack.

---

## 3. Backlink from clients — email template

Send this to **each of your 12 clients** asking for a footer credit + link:

> Subject: Quick favour — "Built by Origami" credit on [client-site].com?
>
> Hey [first name],
>
> Quick ask. We're tightening up Origami's SEO and one of the biggest levers we've got is something genuinely small on your side: a "Built by Origami" footer credit on [client-site].com, linking to https://origami.dev.
>
> Standard agency convention, takes literally one line of HTML, and it helps us a lot — better search visibility means more inbound, which means we can keep being picky about who we work with (which means more bandwidth for projects like yours when we ship the next phase).
>
> The HTML, if it's helpful:
>
> ```html
> <a href="https://origami.dev" rel="noopener" target="_blank">Built by Origami</a>
> ```
>
> Totally cool if you'd rather not, no awkwardness either way. But if you can, we'd really appreciate it.
>
> Thanks,
> [your name]

**Realistic outcome**: ~5-7 of 12 will say yes. Each one is a DA 20-60 backlink which Google weighs heavily for an agency site. That single email batch is worth more than 3 months of content SEO.

---

## 4. Submit to agency directories (30 min total, free)

Submit Origami to these — they're DA 70-90, free, and rank well for "best mobile app development agency NYC" type queries:

- https://clutch.co — *most important*, takes ~30 min, requires 2-3 client references to verify
- https://www.designrush.com
- https://www.goodfirms.co
- https://manifest.com
- https://upcity.com
- https://sortlist.com

Use the same `Origami` bio, the NYC HQ address, and 3-4 case studies (HipHopGrails, PlaySQOR, FanRush, beRides).

---

## 5. (Optional but high-ROI) one-shot HARO / Featured.com pitch

https://featured.com (formerly Terkel, formerly HARO) — sign up as an Expert, filter for "software development," "mobile apps," "AI." Pitch 2-3 short expert quotes per week. Most pitches lose, but the wins are typically Forbes, Inc, Fast Company DA 90+ backlinks naming you and Origami in the byline. ~20 min/week.

---

## 6. Monitor what's working — once Search Console has 2-4 weeks of data

In GSC → **Performance → Pages**: look at which URLs get impressions but low clicks. Those are pages with the right keyword fit but a weak title/meta — rewrite them.

In GSC → **Performance → Queries**: queries with high impressions and low CTR are SEO opportunities — write a content piece specifically around that query.

---

## What's already done on the code side (you don't need to do this)

- ✅ JSON-LD: Organization → upgraded to **ProfessionalService** schema with NYC + Bengaluru addresses, areaServed, knowsAbout
- ✅ **BreadcrumbList** schema on every `/work/[slug]`, `/services/[slug]`, `/insights/[slug]`, `/new-york`
- ✅ **Service** schema on every `/services/[slug]`
- ✅ **FAQPage** schema on `/services/[slug]` (top 5 services) + `/new-york`
- ✅ **Article** schema on every `/insights/[slug]`
- ✅ Titles rewritten to `[Keyword] Agency — New York` pattern
- ✅ `/new-york` location landing page with NYC-specific FAQ + case studies
- ✅ Sitemap auto-includes all 112+ URLs at `/sitemap.xml`
- ✅ GTM + Plausible firing pageviews + conversion events on every CTA click
