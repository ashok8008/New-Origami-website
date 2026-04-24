import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "About — Origami",
  description:
    "A studio that builds digital platforms for hip-hop, real-money gaming and cultural icons.",
};

const VALUES = [
  {
    n: "01",
    title: "Craft over churn",
    text:
      "We protect the work from urgency, opinion and theatre — then ship relentlessly.",
  },
  {
    n: "02",
    title: "Culture first",
    text:
      "We don't just serve culture-forward brands. We hire from their audiences, and we build like fans.",
  },
  {
    n: "03",
    title: "Measured by impact",
    text:
      "We track the metric that actually moves the business — not the number of tickets closed.",
  },
];

const TIMELINE = [
  ["2013", "Founded in Campbell, California."],
  ["2016", "Opened delivery centre in India."],
  ["2019", "Crossed 100 shipped products across fintech, health, commerce."],
  ["2022", "Launched IT staffing & dedicated team practice."],
  ["2024", "Built HipHopGrails — an auction destination for hip-hop memorabilia."],
  ["2025", "Expanded Class II & Class III gaming platform practice."],
];

export default function AboutPage() {
  return (
    <div data-testid="about-page">
      {/* HERO */}
      <section className="relative pt-36 md:pt-44 pb-24 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-50" />
        <div className="absolute -left-40 top-20 w-[560px] h-[560px] sunburst pointer-events-none" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// About Origami
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-black leading-[0.92] tracking-tightest max-w-5xl">
            A studio for
            <br />
            <span className="text-signal">culture-forward brands.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            Origami is a web, mobile and real-money gaming studio based in
            California and India. Over the last decade we&apos;ve built products
            across fintech, healthcare, gaming, ecommerce and hip-hop — and a
            staffing practice that helps teams scale without losing velocity.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 md:py-32 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
                /// Values
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
                What we won&apos;t compromise on.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-line border border-ink-line">
            {VALUES.map((v) => (
              <div key={v.n} className="bg-white p-8 md:p-10">
                <div className="font-mono text-sm text-signal">{v.n}</div>
                <h3 className="mt-10 font-display text-2xl md:text-3xl font-bold tracking-tight">
                  {v.title}
                </h3>
                <p className="mt-4 text-ink-muted leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 md:py-32 border-b border-ink-line bg-paper-50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
                /// Timeline
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
                How we got here.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-px bg-ink-line border border-ink-line">
            {TIMELINE.map(([year, text]) => (
              <div key={year} className="bg-white p-6 md:p-8">
                <div className="font-display text-3xl md:text-4xl font-black text-signal">
                  {year}
                </div>
                <div className="mt-5 text-ink-muted text-sm leading-relaxed">{text}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-pill btn-primary">
              Work with us <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link href="/careers" className="btn-pill btn-ghost">
              Join our team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
