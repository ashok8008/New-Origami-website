import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { SERVICE_PAGES } from "@/lib/content";

export function generateStaticParams() {
  return Object.keys(SERVICE_PAGES).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const s = SERVICE_PAGES[params.slug];
  if (!s) return { title: "Service not found" };
  return {
    title: `${s.title} — Origami Softwares`,
    description: s.tagline,
  };
}

export default function ServicePage({ params }) {
  const s = SERVICE_PAGES[params.slug];
  if (!s) notFound();

  return (
    <div data-testid="service-page">
      {/* HERO */}
      <section className="pt-36 md:pt-44 pb-20 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-50" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal mb-6">
              /// {s.overline}
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tightest">
              {s.title}
            </h1>
            <p className="mt-8 max-w-2xl text-white/70 text-lg md:text-xl leading-relaxed">
              {s.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {s.pills.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center gap-2 border border-white/15 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/70"
                >
                  <span className="inline-block w-1.5 h-1.5 bg-signal" />
                  {p}
                </span>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-black font-semibold px-7 py-4 text-base hover:bg-signal hover:text-white transition-colors"
                data-testid="service-cta"
              >
                Let&apos;s discuss your idea
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="py-24 md:py-32 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-6">
                /// Our services
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                What we deliver
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {s.services.map((sv, i) => (
              <div
                key={sv.title}
                className="bg-ink-950 p-8 md:p-10 group hover:bg-ink-850 transition-colors"
                data-testid={`service-item-${i}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal">
                    0{i + 1}
                  </span>
                  <span className="h-px w-16 bg-white/10 group-hover:bg-signal transition-colors" />
                </div>
                <h3 className="mt-8 font-display text-2xl md:text-3xl font-semibold tracking-tight">
                  {sv.title}
                </h3>
                <p className="mt-4 text-white/65 leading-relaxed">{sv.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 md:py-32 border-b border-white/10 bg-ink-850">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-6">
                /// Benefits
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                Why this works
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {s.benefits.map((b, i) => (
              <div key={b} className="bg-ink-850 p-8" data-testid={`benefit-${i}`}>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 border border-signal flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-signal" />
                  </div>
                  <div className="font-display text-lg md:text-xl font-medium leading-snug">
                    {b}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 md:py-32 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-6">
                /// Why choose us
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                How we show up
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {s.why.map((w, i) => (
              <div
                key={w.title}
                className="border border-white/10 bg-ink-950 p-8 md:p-10 hover:border-signal transition-colors"
                data-testid={`why-${i}`}
              >
                <div className="font-mono text-signal text-sm">0{i + 1}</div>
                <h3 className="mt-8 font-display text-2xl md:text-3xl font-bold tracking-tight">
                  {w.title}
                </h3>
                <p className="mt-4 text-white/65 leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32 border-b border-white/10 bg-ink-850">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-6">
                /// Process
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                Our seamless process
              </h2>
            </div>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/10 border border-white/10">
            {s.process.map((p, i) => (
              <li key={p} className="bg-ink-850 p-6 md:p-8" data-testid={`process-${i}`}>
                <div className="font-mono text-signal text-[10px] uppercase tracking-[0.3em]">
                  Step {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-6 font-display text-xl md:text-2xl font-semibold">{p}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
