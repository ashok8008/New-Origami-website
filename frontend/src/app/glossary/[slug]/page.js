import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GLOSSARY, getGlossaryTerm } from "@/lib/pseo";
import { breadcrumbJsonLd, definedTermJsonLd, faqJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return GLOSSARY.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }) {
  const g = getGlossaryTerm(params.slug);
  if (!g) return {};
  return {
    title: `${g.term} — Definition & Guide`,
    description: g.short,
    alternates: { canonical: `/glossary/${g.slug}` },
    openGraph: { title: `${g.term} — Definition`, description: g.short },
  };
}

export default function GlossaryDetail({ params }) {
  const g = getGlossaryTerm(params.slug);
  if (!g) return notFound();

  const related = GLOSSARY.filter((t) => t.slug !== g.slug).slice(0, 8);

  const faqs = [
    { q: `What does ${g.term} mean?`, a: g.short },
    { q: `How is ${g.term} used in production?`, a: g.body },
    { q: `Does Origami work with ${g.term}?`, a: `Yes. Origami is a senior-only mobile, AI and platform agency — we build with ${g.term} across engagements. Get in touch at hello@origami.dev to discuss your project.` },
  ];

  return (
    <div data-testid={`glossary-page-${g.slug}`} className="bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            definedTermJsonLd({
              term: g.term,
              description: g.body,
              slug: g.slug,
            })
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
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Glossary", url: "/glossary" },
              { name: g.term, url: `/glossary/${g.slug}` },
            ])
          ),
        }}
      />

      <section className="relative pt-36 md:pt-44 pb-16 border-b border-ink-line overflow-hidden">
        <div className="absolute inset-0 dotted opacity-40" />
        <div className="relative max-w-[820px] mx-auto px-6 md:px-10">
          <Link
            href="/glossary"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted hover:text-signal mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Glossary
          </Link>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// Definition
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
            {g.term}
          </h1>
          <p className="mt-8 text-ink-soft text-lg md:text-xl leading-relaxed">{g.short}</p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-ink-line bg-white">
        <div className="max-w-[720px] mx-auto px-6 md:px-10">
          <h2 className="font-display text-2xl md:text-3xl font-black tracking-tight mb-4">
            In depth
          </h2>
          <p className="text-ink-soft leading-relaxed text-lg">{g.body}</p>

          <h2 className="mt-16 font-display text-2xl md:text-3xl font-black tracking-tight mb-4">
            Related terms
          </h2>
          <div className="flex flex-wrap gap-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/glossary/${r.slug}`}
                className="text-sm px-3 py-1.5 border border-ink-line hover:border-signal hover:text-signal transition-colors"
              >
                {r.term}
              </Link>
            ))}
          </div>

          <div className="mt-16">
            <Link href="/contact" className="btn-pill btn-primary">
              Building with {g.term}? Talk to Origami <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
