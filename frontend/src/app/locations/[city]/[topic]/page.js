import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft, Check } from "lucide-react";
import { SERVICES, INDUSTRIES, CONTACT } from "@/lib/content";
import { CITIES, getCity } from "@/lib/pseo";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const ALL = (() => {
  const rows = [];
  for (const c of CITIES) {
    for (const s of SERVICES) rows.push({ city: c.slug, topic: s.slug, type: "service" });
    for (const i of INDUSTRIES) rows.push({ city: c.slug, topic: i.slug, type: "industry" });
  }
  return rows;
})();

export function generateStaticParams() {
  return ALL.map((r) => ({ city: r.city, topic: r.topic }));
}

function resolve(params) {
  const city = getCity(params.city);
  if (!city) return null;
  const service = SERVICES.find((s) => s.slug === params.topic);
  if (service) return { city, kind: "service", service };
  const industry = INDUSTRIES.find((i) => i.slug === params.topic);
  if (industry) return { city, kind: "industry", industry };
  return null;
}

export function generateMetadata({ params }) {
  const r = resolve(params);
  if (!r) return {};
  const { city } = r;
  const isService = r.kind === "service";
  const name = isService ? r.service.title : r.industry.name;
  const short = isService ? r.service.short : r.industry.note;
  const title = isService
    ? `${name} in ${city.name} — Senior ${name} Agency`
    : `${name} Development in ${city.name}`;
  const description = isService
    ? `${name} for ${city.name} companies. ${r.service.desc} Senior-only Origami engineers, ${city.region} time-zone alignment.`
    : `${name} product engineering for ${city.name} operators. ${r.industry.blurb}`;
  return {
    title,
    description,
    alternates: { canonical: `/locations/${city.slug}/${params.topic}` },
    openGraph: { title, description },
    keywords: [name, city.name, `${name} ${city.name}`, `${name} agency ${city.name}`, `hire ${name.toLowerCase()} ${city.name}`, short],
  };
}

export default function CityTopicPage({ params }) {
  const r = resolve(params);
  if (!r) return notFound();
  const { city } = r;
  const isService = r.kind === "service";
  const item = isService ? r.service : r.industry;
  const name = isService ? item.title : item.name;

  const faqs = [
    {
      q: `Do you offer ${name} services in ${city.name}?`,
      a: `Yes. Origami has been shipping ${name} for repeat clients since 2018 — with senior engineers aligned to ${city.region} working hours from our New York head office and Bengaluru dev centre.`,
    },
    {
      q: `What differentiates your ${name} work?`,
      a: isService
        ? `We're senior-only. Every engineer on your ${name} engagement has shipped production apps. We ship weekly, review code daily and never staff juniors on client work.`
        : `Deep culture-forward category focus. Our ${name} work is grounded in real reference builds — HipHopGrails, PlaySQOR, FanRush, beRides, RealProfits — not generic templates.`,
    },
    {
      q: `How do we get started with a ${name} engagement in ${city.name}?`,
      a: `Book a 30-minute scoping call. We'll share a fixed-price proposal within a week, and most projects kick off within 2–3 weeks of contract signature.`,
    },
    {
      q: `Where is Origami based?`,
      a: `Head office: 641 Lexington Avenue, 14th Floor, New York, NY. Dev centre: HSR Layout, Bengaluru, India. We serve ${city.name} from both.`,
    },
  ];

  const bullets = isService
    ? [
        "Senior engineers with production shipping experience",
        `${name} for culture-forward brands`,
        "Weekly demos and Jira / Linear transparency",
        "Design-led product engineering",
        "CI/CD, evals and observability from day one",
        "Direct client access to your engineers",
      ]
    : [
        `Deep ${name.toLowerCase()} product DNA`,
        "Reference builds across the category",
        "Design-led + engineering-heavy",
        "Compliance-aware where regulated",
        "Multi-year client tenures",
        "Product + engineering + design in one pod",
      ];

  return (
    <div data-testid={`city-topic-${city.slug}-${item.slug || item.name}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: city.name, url: `/locations/${city.slug}` },
              { name, url: `/locations/${city.slug}/${params.topic}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />

      <section className="relative pt-36 md:pt-44 pb-16 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-40" />
        <div className="relative max-w-[1080px] mx-auto px-6 md:px-10">
          <Link
            href={`/locations/${city.slug}`}
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted hover:text-signal mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> {city.name}
          </Link>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// {name} — {city.region}
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tightest">
            {name} in {city.name}.
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            {isService ? item.desc : item.blurb}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-pill btn-primary" data-testid="city-topic-cta">
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
              /// Why Origami
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-black leading-tight tracking-tight">
              A senior-only agency, aligned to {city.region}.
            </h2>
            <p className="mt-5 text-ink-soft leading-relaxed">
              Origami builds mobile apps, AI products, auctions, gaming and fintech platforms for culture-forward brands. Our {name.toLowerCase()} work is grounded in real reference builds — from HipHopGrails (the &quot;Sotheby&apos;s of hip-hop&quot;) to PlaySQOR (Class III RMG), FanRush (AI-powered creator payouts) and RealProfits (AI trading co-pilot).
            </p>
            <div className="mt-6">
              <Link
                href={isService ? `/services/${item.slug}` : `/industries/${item.slug}`}
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-signal hover:underline"
              >
                {isService ? "Full service capabilities" : "Full industry POV"} <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted mb-3">
              /// What&apos;s included
            </div>
            <ul className="space-y-3">
              {bullets.map((b) => (
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
