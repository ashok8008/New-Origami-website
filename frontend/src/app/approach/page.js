import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { APPROACH } from "@/lib/content";

export const metadata = {
  alternates: { canonical: "/approach" },
  title: "Approach — Origami",
  description:
    "Listen. Architect. Ship. Scale. How Origami delivers senior engineering for culture-forward brands.",
};

const PRINCIPLES = [
  {
    n: "01",
    title: "Small, senior teams",
    text:
      "We staff lean. Every engagement is led by operators with scars and scale behind them — not pyramid teams with juniors on the call.",
  },
  {
    n: "02",
    title: "Weekly demos in production-like environments",
    text:
      "We ship to staging every week and to production every sprint. Our definition of done includes observability and docs.",
  },
  {
    n: "03",
    title: "Compliance and security as first-class design",
    text:
      "For gaming and fintech we bake compliance (GLI, IGRA, KYC, AML, PCI) into architecture — not into a final security review.",
  },
  {
    n: "04",
    title: "Transparent pricing, signed NDAs",
    text:
      "T&M, dedicated or fixed-scope — the model matches the work. NDAs are standard, and you see velocity and spend every week.",
  },
];

export default function ApproachPage() {
  return (
    <div data-testid="approach-page">
      {/* HERO */}
      <section className="relative pt-36 md:pt-44 pb-20 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-50" />
        <div className="absolute -right-48 top-10 w-[560px] h-[560px] sunburst pointer-events-none" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// Our approach
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-black leading-[0.92] tracking-tightest max-w-5xl">
            Listen.<br /><span className="text-signal">Architect. Ship.</span><br />Scale.
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            A clear, repeatable method we use across culture, gaming and
            fintech engagements — proven over a decade of shipping.
          </p>
        </div>
      </section>

      {/* METHOD */}
      <section className="py-20 md:py-28 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 border-t border-b border-ink-line">
            {APPROACH.map((a, i) => (
              <div
                key={a.n}
                className={`py-12 md:py-16 px-6 md:px-10 ${
                  i !== 0 ? "md:border-l" : ""
                } border-ink-line`}
                data-testid={`approach-step-${a.n}`}
              >
                <div className="font-mono text-sm text-signal">{a.n}</div>
                <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold tracking-tight">
                  {a.title}
                </h2>
                <p className="mt-4 text-ink-muted leading-relaxed text-[15px]">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="py-24 md:py-32 bg-paper-50 border-b border-ink-line">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
                /// Principles
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
                How we really work.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-line border border-ink-line">
            {PRINCIPLES.map((p) => (
              <div
                key={p.n}
                className="bg-white p-8 md:p-12"
                data-testid={`principle-${p.n}`}
              >
                <div className="font-mono text-sm text-signal">{p.n}</div>
                <h3 className="mt-8 font-display text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                  {p.title}
                </h3>
                <p className="mt-4 text-ink-muted leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-white border-b border-ink-line">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-wrap items-center justify-between gap-10">
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tightest leading-[0.95] max-w-2xl">
            Want to <span className="text-signal">see this in practice</span>?
          </h2>
          <Link href="/contact" className="btn-pill btn-primary text-base px-7 py-4">
            Book a scoping call <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
