import Link from "next/link";
import { ArrowUpRight, Newspaper } from "lucide-react";

export default function MediaFeature() {
  return (
    <section
      className="py-24 md:py-32 border-b border-ink-line bg-paper-50 relative overflow-hidden"
      data-testid="media-feature"
    >
      <div className="absolute -right-40 -top-40 w-[640px] h-[640px] sunburst pointer-events-none opacity-50" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-10 items-start">
        <div className="col-span-12 md:col-span-5">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5 flex items-center gap-2">
            <Newspaper className="w-3.5 h-3.5" /> /// Media &amp; Publishers practice
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
            We turn premium content<br />
            into <span className="text-signal">compounding revenue.</span>
          </h2>
          <p className="mt-6 text-ink-soft text-lg leading-relaxed max-w-md">
            Header bidding, RTB, contextual targeting and content commerce
            for the premium-publisher tier — luxury travel networks, regional
            lifestyle titles, trusted family-media groups and the category-defining
            publishers being built next.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/media" className="btn-pill btn-primary">
              Explore the practice <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/media#how-we-get-in" className="btn-pill btn-ghost">
              How we get in
            </Link>
          </div>
        </div>

        <div className="col-span-12 md:col-span-7">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-ink-line border border-ink-line">
            {[
              ["Sub-100ms", "Auction latency"],
              ["Zero PII", "Contextual-first"],
              ["12+", "SSP integrations"],
              ["+15–35%", "Typical RPM lift"],
              ["100%", "Brand-safety vetted"],
              ["GDPR · CCPA", "Compliance-ready"],
            ].map(([k, l]) => (
              <div
                key={l}
                className="bg-white p-5 md:p-6 min-h-[140px] flex flex-col"
                data-testid={`home-media-stat-${l.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                <div className="font-display text-xl md:text-2xl font-black text-ink tracking-tight leading-tight">
                  {k}
                </div>
                <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
                  {l}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 md:p-6 border border-ink-line bg-white">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-signal mb-3">
              /// The deal
            </div>
            <p className="text-ink-soft text-[15px] leading-relaxed">
              <span className="text-ink font-semibold">No data required.</span>{" "}
              Send us 50–100 representative URLs. We come back with a yield-opportunity
              report and a $-per-month estimate. Two weeks. No commitment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
