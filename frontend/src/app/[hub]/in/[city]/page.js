import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { CONTACT, TECH_STACKS } from "@/lib/content";
import { HUBS, getHub, allHubKeywords } from "@/lib/hubs";
import { CITIES, getCity } from "@/lib/pseo";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, jsonLdScript } from "@/lib/seo";

export function generateStaticParams() {
  const out = [];
  for (const h of HUBS) {
    for (const c of CITIES) {
      out.push({ hub: h.slug, city: c.slug });
    }
  }
  return out;
}

export function generateMetadata({ params }) {
  const h = getHub(params.hub);
  const c = getCity(params.city);
  if (!h || !c) return {};
  const title = `${h.title} in ${c.name} — Senior ${h.title} Company`;
  const desc = `${h.title} for ${c.name} clients. ${h.lede} Senior engineers, ${c.region} time-zone alignment.`;
  return {
    title,
    description: desc,
    keywords: [
      ...allHubKeywords(h).map((k) => `${k} in ${c.name}`),
      `${h.title} ${c.name}`,
      `${h.title} agency ${c.name}`,
      `hire ${h.title.toLowerCase()} company ${c.name}`,
    ],
    alternates: { canonical: `/${h.slug}/in/${c.slug}` },
    openGraph: { title, description: desc },
  };
}

export default function HubCityPage({ params }) {
  const h = getHub(params.hub);
  const c = getCity(params.city);
  if (!h || !c) return notFound();

  const faqs = [
    {
      q: `Does Origami offer ${h.title.toLowerCase()} in ${c.name}?`,
      a: `Yes. Origami serves ${c.region} clients from our New York head office and Bengaluru dev centre. Senior-only engineers, aligned to your working hours.`,
    },
    {
      q: `How is Origami different from local ${h.title.toLowerCase()} companies in ${c.name}?`,
      a: `Senior engineers on every engagement, weekly releases, transparent Jira, evals + observability + cost ceilings from day one, and 2–4 year average client tenures.`,
    },
    {
      q: `How much does ${h.title.toLowerCase()} cost in ${c.name}?`,
      a: `Discovery + design engagements start at ~$40k. MVP builds from $120k. Dedicated senior engineers from $9,500/month. We share a fixed-price proposal within a week of a 30-minute scoping call.`,
    },
    {
      q: `Do you have reference clients in or near ${c.name}?`,
      a: `Yes. We work with clients globally including HipHopGrails, PlaySQOR, FanRush, beRides, RealProfits, Wholosophy, Nick Cooper and TrueWrld. Reference calls available on request.`,
    },
  ];

  return (
    <div data-testid={`hub-city-${h.slug}-${c.slug}`}>
      <script {...jsonLdScript(serviceJsonLd({ slug: `${h.slug}/in/${c.slug}`, title: `${h.title} in ${c.name}`, description: `${h.title} for ${c.name} clients. ${h.lede}` }))} />
      <script {...jsonLdScript(faqJsonLd(faqs))} />
      <script {...jsonLdScript(breadcrumbJsonLd([
        { name: "Home", url: "/" },
        { name: h.title, url: `/${h.slug}` },
        { name: c.name, url: `/${h.slug}/in/${c.slug}` },
      ]))} />

      <section className="relative pt-36 md:pt-44 pb-16 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-40" />
        <div className="relative max-w-[1080px] mx-auto px-6 md:px-10">
          <Link
            href={`/${h.slug}`}
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted hover:text-signal mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> {h.title}
          </Link>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// {h.tagline} — {c.region}
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tightest">
            {h.title} in {c.name}.
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            {h.lede} Senior engineers aligned to {c.region} working hours.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-pill btn-primary">
              Book a scoping call <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a href={`mailto:${CONTACT.email}`} className="btn-pill btn-ghost">
              {CONTACT.email}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-ink-line bg-white">
        <div className="max-w-[1080px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-3">
              /// What we build
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-black leading-tight tracking-tight">
              {h.title} for {c.name} businesses.
            </h2>
            <p className="mt-5 text-ink-soft leading-relaxed">{h.lede}</p>
            <div className="mt-6">
              <Link
                href={`/${h.slug}`}
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-signal hover:underline"
              >
                Full {h.title.toLowerCase()} capabilities <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted mb-3">
              /// What&apos;s included
            </div>
            <ul className="space-y-3">
              {[
                `Senior engineers aligned to ${c.region}`,
                "Weekly releases, transparent Jira / Linear",
                "Direct engineer access — no account layer",
                "Evals + observability + cost ceilings from day one",
                "30-day replacement guarantee",
                "Weekly demos and retros",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-signal mt-1 shrink-0" />
                  <span className="text-ink">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-ink-line bg-paper">
        <div className="max-w-[1080px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-3">
            /// FAQ
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black leading-[0.95] tracking-tightest mb-10">
            Frequently asked.
          </h2>
          <div className="divide-y divide-ink-line border-y border-ink-line">
            {faqs.map((f) => (
              <details key={f.q} className="py-6 group">
                <summary className="cursor-pointer flex justify-between items-start gap-6 font-display text-lg md:text-xl font-bold leading-snug">
                  {f.q}
                  <span className="text-signal font-mono text-sm mt-1 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-ink-soft leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
