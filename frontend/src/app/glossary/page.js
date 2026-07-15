import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GLOSSARY } from "@/lib/pseo";

export const metadata = {
  title: "Glossary — Engineering, AI, Gaming & Product Terms Defined",
  description:
    "A plain-language glossary of the technical terms Origami uses across mobile, AI, real-money gaming, auctions, fintech and platform engineering.",
  alternates: { canonical: "/glossary" },
};

const grouped = GLOSSARY.slice().sort((a, b) => a.term.localeCompare(b.term));

export default function GlossaryIndex() {
  return (
    <div data-testid="glossary-index">
      <section className="relative pt-36 md:pt-44 pb-16 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-40" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// Glossary
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-black leading-[0.92] tracking-tightest max-w-5xl">
            Terms,<br /><span className="text-signal">plainly defined.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            {GLOSSARY.length} definitions across mobile, AI, real-money gaming, auctions, fintech and platform engineering.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-ink-line bg-white">
        <div className="max-w-[1080px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-4">
          {grouped.map((g) => (
            <Link
              key={g.slug}
              href={`/glossary/${g.slug}`}
              className="group p-5 border border-ink-line hover:border-signal transition-colors"
              data-testid={`glossary-card-${g.slug}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-lg md:text-xl font-black tracking-tight group-hover:text-signal transition-colors">
                    {g.term}
                  </h2>
                  <p className="mt-2 text-ink-soft text-sm leading-relaxed">{g.short}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-signal shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
