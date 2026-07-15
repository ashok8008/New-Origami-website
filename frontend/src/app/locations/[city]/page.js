import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { SERVICES, INDUSTRIES, CONTACT } from "@/lib/content";
import { CITIES, getCity } from "@/lib/pseo";
import { breadcrumbJsonLd, faqJsonLd, localBusinessJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export function generateMetadata({ params }) {
  const c = getCity(params.city);
  if (!c) return {};
  const title = `Software Development Agency in ${c.name} — Mobile, AI, Web`;
  const desc = `Origami is a senior-only mobile, AI and platform development agency serving ${c.region}. Mobile apps, AI products, gaming, auctions and fintech — for culture-forward brands.`;
  return {
    title,
    description: desc,
    alternates: { canonical: `/locations/${c.slug}` },
    openGraph: { title, description: desc },
  };
}

export default function CityLandingPage({ params }) {
  const city = getCity(params.city);
  if (!city) return notFound();

  const faqs = [
    {
      q: `Does Origami work with ${city.name} clients?`,
      a: `Yes. We serve ${city.region} clients from our New York head office and Bengaluru dev centre. Senior engineers align to your business hours and we visit ${city.name} on-site for discovery, launches and quarterly reviews when useful.`,
    },
    {
      q: `What kind of projects do you take in ${city.name}?`,
      a: `Mobile apps (iOS, Android, React Native, Flutter), AI & LLM products (RAG, agents, voice, vision), auction platforms, real-money gaming (Class II / III), fintech and consumer web at Next.js scale.`,
    },
    {
      q: `Is Origami senior-only?`,
      a: `Yes. Every engineer on client work has shipped production apps. No juniors, no ramp-up time — you get shipping engineers on day one.`,
    },
    {
      q: `How much does a project cost?`,
      a: `Discovery + design engagements start around $40k. Mobile app builds from $120k. Dedicated senior engineers from $9,500/month. We share fixed-price proposals after a 30-minute scoping call.`,
    },
  ];

  return (
    <div data-testid={`city-page-${city.slug}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Locations", url: "/locations" },
              { name: city.name, url: `/locations/${city.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd()),
        }}
      />

      <section className="relative pt-36 md:pt-44 pb-16 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-40" />
        <div className="relative max-w-[1080px] mx-auto px-6 md:px-10">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted hover:text-signal mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> All locations
          </Link>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// {city.region}
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tightest">
            Product engineering for {city.name}.
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            Origami is a senior-only mobile, AI and platform development agency serving {city.region}
            {city.isHQ ? " — this is our HQ" : city.isDevCentre ? " — this is our dev centre" : ""}. We build the mobile apps, AI products, auctions, gaming and fintech platforms culture-forward brands run on.
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
        <div className="max-w-[1080px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-3">
            /// Services
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest mb-10">
            Services for {city.name} clients.
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/locations/${city.slug}/${s.slug}`}
                className="group p-6 border border-ink-line hover:border-signal transition-colors"
                data-testid={`city-service-${s.slug}`}
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted mb-2">
                  {s.code}
                </div>
                <h3 className="font-display text-xl font-black tracking-tight group-hover:text-signal transition-colors">
                  {s.title} in {city.name}
                </h3>
                <p className="mt-2 text-ink-soft text-sm leading-relaxed">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-ink-line bg-paper">
        <div className="max-w-[1080px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-3">
            /// Industries
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest mb-10">
            Industries we serve in {city.name}.
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.slug}
                href={`/locations/${city.slug}/${ind.slug}`}
                className="group p-6 border border-ink-line bg-white hover:border-signal transition-colors"
                data-testid={`city-industry-${ind.slug}`}
              >
                <h3 className="font-display text-xl font-black tracking-tight group-hover:text-signal transition-colors">
                  {ind.name} in {city.name}
                </h3>
                <p className="mt-2 text-ink-soft text-sm leading-relaxed">{ind.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-ink-line bg-white">
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
