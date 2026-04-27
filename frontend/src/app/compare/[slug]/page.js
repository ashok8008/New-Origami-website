import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { COMPARES, getCompare, getStack } from "@/lib/content";

export function generateStaticParams() {
  return COMPARES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const c = getCompare(params.slug);
  if (!c) return {};
  return {
    title: c.headline.replace(/\s—\s.*$/, ""),
    description: c.summary,
    alternates: { canonical: `/compare/${c.slug}` },
  };
}

export default function CompareDetailPage({ params }) {
  const c = getCompare(params.slug);
  if (!c) return notFound();

  const aStack = getStack(c.a.stack);
  const bStack = getStack(c.b.stack);

  return (
    <div data-testid={`compare-page-${c.slug}`}>
      <section className="relative pt-36 md:pt-44 pb-16 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-40" />
        <div className="relative max-w-[1080px] mx-auto px-6 md:px-10">
          <Link
            href="/compare"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted hover:text-signal mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> All comparisons
          </Link>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// Compare
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tightest">
            {c.headline}
          </h1>
          <p className="mt-8 text-ink-soft text-lg md:text-xl leading-relaxed">{c.summary}</p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-ink-line bg-white">
        <div className="max-w-[1080px] mx-auto px-6 md:px-10">
          <div className="overflow-x-auto border border-ink-line">
            <table className="w-full text-sm" data-testid="compare-table">
              <thead>
                <tr className="bg-paper-50 border-b border-ink-line">
                  <th className="px-4 md:px-6 py-4 text-left font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted w-1/3">
                    Dimension
                  </th>
                  <th className="px-4 md:px-6 py-4 text-left font-display text-base md:text-lg font-bold w-1/3">
                    {c.a.name}
                  </th>
                  <th className="px-4 md:px-6 py-4 text-left font-display text-base md:text-lg font-bold text-signal w-1/3">
                    {c.b.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {c.rows.map(([k, va, vb]) => (
                  <tr key={k} className="border-b border-ink-line last:border-0">
                    <td className="px-4 md:px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted align-top">
                      {k}
                    </td>
                    <td className="px-4 md:px-6 py-4 text-ink-soft align-top">{va}</td>
                    <td className="px-4 md:px-6 py-4 text-ink align-top">{vb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 p-6 md:p-8 border border-ink-line bg-paper-50">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-3">
              /// Origami&apos;s take
            </div>
            <p className="text-ink-soft text-lg leading-relaxed">{c.verdict}</p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {aStack ? (
              <Link href={`/build/${aStack.slug}`} className="btn-pill btn-ghost text-sm">
                {c.a.name} capabilities
              </Link>
            ) : null}
            {bStack && bStack.slug !== aStack?.slug ? (
              <Link href={`/build/${bStack.slug}`} className="btn-pill btn-ghost text-sm">
                {c.b.name} capabilities
              </Link>
            ) : null}
            <Link href="/contact" className="btn-pill btn-primary text-sm">
              Talk to an engineer <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
