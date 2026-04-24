import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/content";

export const metadata = {
  title: "Services",
  description:
    "Mobile apps, AI products, auctions, Class II/III gaming, web, design, data, dedicated engineering teams.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div data-testid="services-page">
      <section className="relative pt-36 md:pt-44 pb-20 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-50" />
        <div className="absolute -right-48 -top-48 w-[640px] h-[640px] sunburst pointer-events-none" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// Services
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tightest max-w-4xl">
            Every surface,<br />engineered by<br /><span className="text-signal">people who ship.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            Eight practices that overlap on purpose. Small, senior teams that
            cover the full product lifecycle — from wireframe to store launch,
            scale and iterate.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-line border border-ink-line">
          {SERVICES.map((s) => (
            <Link
              key={s.code}
              href={`/services/${s.slug}`}
              className="group bg-white hover:bg-paper-50 p-8 md:p-12 min-h-[260px] flex flex-col transition-colors"
              data-testid={`services-card-${s.code}`}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal">
                  {s.code} / {s.short}
                </span>
                <ArrowUpRight className="w-5 h-5 text-ink-muted group-hover:text-signal group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h2 className="mt-10 font-display text-3xl md:text-5xl font-black tracking-tightest leading-[0.95]">
                {s.title}
              </h2>
              <p className="mt-4 text-ink-soft text-[15px] leading-relaxed max-w-md">
                {s.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 bg-paper-50 border-b border-ink-line">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-wrap items-center justify-between gap-10">
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tightest leading-[0.95] max-w-2xl">
            Have a roadmap?<br />
            <span className="text-signal">We&apos;ll help you ship it.</span>
          </h2>
          <Link href="/contact" className="btn-pill btn-primary text-base px-7 py-4">
            Start a project <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
