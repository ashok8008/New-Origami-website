import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft, Check } from "lucide-react";
import { TECH_STACKS, CONTACT } from "@/lib/content";
import { buildHirePages, getCity } from "@/lib/pseo";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  servicePlaceOfferJsonLd,
} from "@/lib/seo";

const PAGES = buildHirePages(TECH_STACKS);

export function generateStaticParams() {
  return PAGES.map((p) => ({ slug: p.slug }));
}

function getPage(slug) {
  return PAGES.find((p) => p.slug === slug) || null;
}

export function generateMetadata({ params }) {
  const p = getPage(params.slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/hire/${p.slug}` },
    openGraph: { title: p.title, description: p.description },
  };
}

export default function HireDetailPage({ params }) {
  const p = getPage(params.slug);
  if (!p) return notFound();
  const stack = TECH_STACKS.find((s) => s.slug === p.stackSlug);
  const city = getCity(p.citySlug);
  const url = `https://www.origami.dev/hire/${p.slug}`;

  const faqs = [
    {
      q: `How quickly can Origami staff a ${p.stackName} team for a ${p.cityName} client?`,
      a: `Most engagements start within 2–3 weeks. Origami is senior-only — every ${p.stackName} developer has shipped production apps, and we align to ${p.region} working hours from our New York and Bengaluru offices.`,
    },
    {
      q: `What engagement models do you offer for hiring ${p.stackName} developers?`,
      a: `T&M, dedicated (monthly retainer), and build-your-team. All models come with a senior engineering manager, code reviews, sprint cadence and ownership of delivery.`,
    },
    {
      q: `Do you replace a bad-fit ${p.stackName} developer at no cost?`,
      a: `Yes. If a developer isn't right for the engagement in the first 30 days we swap them at no cost.`,
    },
    {
      q: `Where is Origami based?`,
      a: `Head office at 641 Lexington Avenue, 14th Floor, New York, NY. Development centre in Bengaluru, India. We serve ${p.cityName} clients from both.`,
    },
  ];

  const bullets = stack?.bullets?.slice(0, 6) || [
    "Senior-only engineers with production shipping experience",
    "Time-zone aligned working hours",
    "Weekly demos and transparent Jira / Linear",
    "Code reviews and CI/CD from day one",
    "Direct client access to engineers",
    "30-day replacement guarantee",
  ];

  return (
    <div data-testid={`hire-page-${p.slug}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Hire developers", url: "/hire" },
              { name: p.title, url: `/hire/${p.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            servicePlaceOfferJsonLd({
              title: p.title,
              description: p.description,
              serviceUrl: url,
              areaServed: p.cityName,
            })
          ),
        }}
      />

      <section className="relative pt-36 md:pt-44 pb-16 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-40" />
        <div className="relative max-w-[1080px] mx-auto px-6 md:px-10">
          <Link
            href="/hire"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted hover:text-signal mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> All hire pages
          </Link>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// Hire {p.stackName} — {p.cityName}
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tightest">
            {p.title}.
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            {p.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-pill btn-primary" data-testid="hire-cta-primary">
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
              /// What we do
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-black leading-tight tracking-tight">
              Senior {p.stackName} engineers, embedded with your team in {p.cityName}.
            </h2>
            <p className="mt-5 text-ink-soft leading-relaxed">
              {stack?.body || `Production ${p.stackName} shipped for repeat clients.`}{" "}
              We work with {p.cityName}-based product teams on{" "}
              {stack?.category?.toLowerCase() || "software"} engagements ranging from a single senior engineer to a dedicated cross-functional squad.
            </p>
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
                  <span className="text-signal font-mono text-sm mt-1 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-ink-soft leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-ink-line bg-white">
        <div className="max-w-[1080px] mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-3">
              /// Talk to an engineer
            </div>
            <p className="font-display text-2xl md:text-3xl font-black tracking-tightest">
              Ready to hire {p.stackName} developers in {p.cityName}?
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="btn-pill btn-primary">
              Book a call <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/work" className="btn-pill btn-ghost">
              See our work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
