import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MEDIA } from "@/lib/content";

export const metadata = {
  title: "About — Origami Softwares",
  description:
    "A decade of shipping world-class digital products for ambitious teams.",
};

const VALUES = [
  {
    n: "01",
    title: "Craft over churn",
    text:
      "Fewer, better folds. We protect the work from urgency and opinion, then ship relentlessly.",
  },
  {
    n: "02",
    title: "Operators, not observers",
    text:
      "Every engagement is staffed by people who have shipped and scaled. Junior teams learn by doing, with seniors on the call.",
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
  ["2025", "Now 180+ engineers, designers and PMs across two continents."],
];

export default function AboutPage() {
  return (
    <div data-testid="about-page">
      {/* HERO */}
      <section className="pt-36 md:pt-44 pb-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-50" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal mb-6">
              /// About Origami
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tightest">
              A studio for teams who treat software as a <span className="text-signal italic">craft</span>.
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4 text-white/70 text-base md:text-lg leading-relaxed">
            Origami Softwares is a web and mobile product studio based in California and
            India. Over the last decade we&apos;ve built products across fintech,
            healthcare, ecommerce, gaming and analytics — and a staffing
            practice that helps teams scale without losing velocity.
          </div>
        </div>
      </section>

      {/* STORY + IMAGE */}
      <section className="py-24 md:py-32 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-6">
            <div className="relative aspect-[4/3] border border-white/10 overflow-hidden">
              <Image
                src={MEDIA.officeTeam2}
                alt="Working session"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-6">
              /// Our approach
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">
              Small, senior teams. Short loops. Measurable outcomes.
            </h2>
            <p className="mt-8 text-white/70 text-lg leading-relaxed">
              We believe ambitious products get built by small teams of senior
              operators, moving in short loops, with instrumentation that
              proves the work. Our role is to slot into your team — not replace it.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 md:py-32 border-b border-white/10 bg-ink-850">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-6">
                /// Values
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                What we won&apos;t compromise on
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {VALUES.map((v) => (
              <div key={v.n} className="bg-ink-850 p-8 md:p-10">
                <div className="font-mono text-sm text-signal">{v.n}</div>
                <h3 className="mt-10 font-display text-2xl md:text-3xl font-bold tracking-tight">
                  {v.title}
                </h3>
                <p className="mt-4 text-white/65 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 md:py-32 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-6">
                /// Timeline
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                How we got here
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/10 border border-white/10">
            {TIMELINE.map(([year, text]) => (
              <div key={year} className="bg-ink-950 p-6 md:p-8">
                <div className="font-display text-3xl md:text-4xl font-black text-signal">
                  {year}
                </div>
                <div className="mt-6 text-white/70 text-sm leading-relaxed">{text}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-black font-semibold px-7 py-4 text-base hover:bg-signal hover:text-white transition-colors"
            >
              Work with us <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link
              href="/staffing"
              className="inline-flex items-center gap-2 text-white/80 border border-white/20 px-7 py-4 text-base hover:border-white hover:text-white transition-colors"
            >
              Hire our team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
