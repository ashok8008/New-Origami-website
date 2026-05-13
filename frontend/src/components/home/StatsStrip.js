import Link from "next/link";
import {
  Users,
  Boxes,
  Lock,
  Compass,
  Shield,
  FileCheck,
  Hammer,
  Repeat,
  ArrowUpRight,
} from "lucide-react";

/**
 * TrustBand — principle-led trust section (no fabricated numbers).
 *
 * Same layout pattern as before: eyebrow + headline left, short copy right,
 * followed by two rows of four bordered cards.
 */
export default function TrustBand() {
  const row1 = [
    {
      icon: Users,
      label: "Senior from day one",
      text:
        "No junior pyramids. You work directly with people who have shipped real platforms.",
    },
    {
      icon: Boxes,
      label: "Products, not presentations",
      text:
        "Apps, platforms, AI systems, auctions, gaming, and commerce — built for production, not pitch decks.",
    },
    {
      icon: Lock,
      label: "IP belongs to you",
      text:
        "You own the code, prompts, data, architecture, and product decisions. Always.",
    },
    {
      icon: Compass,
      label: "Small by design",
      text:
        "Fewer handoffs, clearer ownership, faster shipping, and senior attention on the work.",
    },
  ];

  const row2 = [
    {
      icon: Shield,
      label: "NDA before details",
      text: "Mutual NDA before the first technical conversation.",
    },
    {
      icon: FileCheck,
      label: "Fixed-bid or T&M",
      text: "Choose the contract model that fits the roadmap, risk, and stage.",
    },
    {
      icon: Hammer,
      label: "Built for hard edges",
      text:
        "Gaming, payments, auctions, AI, compliance, wallets, data, and real-time systems.",
    },
    {
      icon: Repeat,
      label: "Repeat-client mindset",
      text: "We build like we expect to stay close after launch.",
    },
  ];

  return (
    <section
      className="py-20 md:py-24 bg-paper border-b border-ink-line"
      data-testid="trust-band"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 mb-12 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
              /// Why teams ship with us
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black leading-[0.95] tracking-tightest">
              Senior people.<br />
              Real platforms.<br />
              <span className="text-signal">A small team that ships.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 text-ink-soft text-base leading-relaxed">
            We build production software for culture-forward teams — auction
            platforms, AI products, mobile apps, media systems, fintech tools,
            and real-money gaming. Senior-led, contract-clear, and built so the
            IP belongs to you.
          </div>
        </div>

        {/* Row 1 — principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-line border border-ink-line">
          {row1.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.label}
                className="bg-white p-6 md:p-7 min-h-[180px] flex flex-col"
                data-testid={`trust-principle-${p.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                <Icon className="w-5 h-5 text-signal" />
                <div className="mt-4 font-display font-black text-ink text-base md:text-lg leading-tight tracking-tight">
                  {p.label}
                </div>
                <p className="mt-3 text-[13.5px] text-ink-muted leading-relaxed">
                  {p.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Row 2 — posture */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-line border border-ink-line">
          {row2.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.label}
                className="bg-white p-6 md:p-7 min-h-[180px] flex flex-col"
                data-testid={`trust-posture-${p.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                <Icon className="w-5 h-5 text-signal" />
                <div className="mt-4 font-display font-black text-ink text-base md:text-lg leading-tight tracking-tight">
                  {p.label}
                </div>
                <p className="mt-3 text-[13.5px] text-ink-muted leading-relaxed">
                  {p.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link href="/work" className="link-slide text-[14px] font-medium text-ink hover:text-signal">
            See what we&apos;ve shipped <ArrowUpRight className="w-4 h-4" />
          </Link>
          <span className="text-ink-muted text-[13px] font-mono uppercase tracking-[0.18em]">·</span>
          <Link href="/contact" className="link-slide text-[14px] font-medium text-ink hover:text-signal">
            Sign a mutual NDA <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
