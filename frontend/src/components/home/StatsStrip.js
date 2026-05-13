import Link from "next/link";
import { Shield, FileCheck, Lock, Users, ArrowUpRight } from "lucide-react";

/**
 * TrustBand — honest trust signals (not fabricated stats).
 *
 * Mixes real numbers we can stand behind with posture/process signals
 * a procurement team can actually verify in a 15-min call.
 */
export default function TrustBand() {
  const numbers = [
    { k: "25+", l: "Years industry experience", note: "Leadership has shipped through three platform shifts — web, mobile, AI" },
    { k: "7+", l: "Years as Origami", note: "Studio launched 2019. Senior-led from day one." },
    { k: "40+", l: "Senior team", note: "Engineers, designers and PMs. No junior pyramids." },
    { k: "10", l: "Repeat-client products live", note: "From auction floors to AI co-pilots." },
  ];

  const posture = [
    {
      icon: Shield,
      label: "NDA on day one",
      text: "Mutual NDA standard before the first technical conversation.",
    },
    {
      icon: FileCheck,
      label: "Fixed-bid or T&M",
      text: "Pick your contract model. No retainer lock-in.",
    },
    {
      icon: Lock,
      label: "IP transferred to client",
      text: "You own the code, the prompts, the data. Always.",
    },
    {
      icon: Users,
      label: "Small on purpose",
      text: "Senior-only. We ship faster than agencies 10× our size.",
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
              25 years in the room.<br />
              7 years as Origami.<br />
              <span className="text-signal">A small team that ships.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 text-ink-soft text-base leading-relaxed">
            We&apos;re busy building our own products. That&apos;s the same
            discipline we bring to yours — senior engineers, clear contracts,
            and IP that belongs to you.
          </div>
        </div>

        {/* HONEST NUMBERS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink-line border border-ink-line">
          {numbers.map((n) => (
            <div
              key={n.l}
              className="bg-white p-6 md:p-8 min-h-[170px] flex flex-col"
              data-testid={`trust-stat-${n.l.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            >
              <div className="font-display text-3xl md:text-4xl font-black text-ink tracking-tight leading-none">
                {n.k}
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
                {n.l}
              </div>
              <p className="mt-auto pt-3 text-[12px] text-ink-muted leading-relaxed">
                {n.note}
              </p>
            </div>
          ))}
        </div>

        {/* POSTURE SIGNALS — what procurement actually evaluates */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink-line border border-ink-line">
          {posture.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.label}
                className="bg-white p-5 md:p-6 min-h-[140px] flex flex-col"
                data-testid={`trust-posture-${p.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                <Icon className="w-5 h-5 text-signal" />
                <div className="mt-3 font-display font-bold text-ink text-[15px] leading-tight">
                  {p.label}
                </div>
                <p className="mt-2 text-[12px] text-ink-muted leading-relaxed">{p.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link href="/work" className="link-slide text-[14px] font-medium text-ink hover:text-signal">
            See what we&apos;ve shipped <ArrowUpRight className="w-4 h-4" />
          </Link>
          <span className="text-ink-muted text-[13px] font-mono uppercase tracking-[0.18em]">
            ·
          </span>
          <Link href="/contact" className="link-slide text-[14px] font-medium text-ink hover:text-signal">
            Sign a mutual NDA <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
