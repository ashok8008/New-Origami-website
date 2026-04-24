import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { MEDIA } from "@/lib/content";

export default function HeroSection() {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden" data-testid="hero-section">
      {/* Faint grid backdrop */}
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-60" />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10 items-center">
        {/* Left content */}
        <div className="col-span-12 lg:col-span-7 xl:col-span-8">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-8">
            <span className="inline-block w-10 h-px bg-signal" />
            Origami Softwares / Est. 2013
          </div>

          <h1 className="font-display font-black tracking-tightest leading-[0.92] text-[clamp(2.6rem,7.2vw,7rem)]">
            World-class
            <br />
            digital <span className="text-signal">products</span>.
            <br />
            <span className="inline-flex items-baseline gap-4 flex-wrap">
              <span>On-Time.</span>
              <span>On-Budget.</span>
              <span>On-Point.</span>
            </span>
          </h1>

          <p className="mt-10 max-w-xl text-white/70 text-lg leading-relaxed">
            An acclaimed studio for web and mobile product design & engineering.
            We partner with ambitious teams to ship work that compounds — every
            fold measured, every surface considered.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-white text-black font-semibold px-7 py-4 text-base hover:bg-signal hover:text-white transition-colors"
              data-testid="hero-cta-primary"
            >
              Let&apos;s build something
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
            </Link>
            <Link
              href="/services/web-design"
              className="inline-flex items-center gap-2 text-white/80 border border-white/20 px-7 py-4 text-base hover:border-white hover:text-white transition-colors link-slide"
              data-testid="hero-cta-secondary"
            >
              Explore services
              <ArrowDownRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Stats strip */}
          <div className="mt-16 grid grid-cols-3 md:grid-cols-4 gap-px bg-white/10 border border-white/10 w-fit">
            {[
              ["10+", "Years shipping"],
              ["180+", "Engineers & designers"],
              ["300+", "Products launched"],
              ["14", "Countries served"],
            ].map(([n, l]) => (
              <div key={l} className="bg-ink-950 px-5 md:px-7 py-5 min-w-[120px]">
                <div className="font-display text-2xl md:text-3xl font-bold">{n}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mt-1">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div className="col-span-12 lg:col-span-5 xl:col-span-4 relative">
          <div className="relative aspect-[4/5] w-full border border-white/10 bg-gradient-to-br from-ink-850 to-ink-950 overflow-hidden">
            <Image
              src={MEDIA.heroCrane}
              alt="Origami crane, cinematic"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent pointer-events-none" />
            {/* Technical annotations */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
              <span>Fig.01</span>
              <span>Precision / Fold.∞</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
              <span>EST.MMXIII</span>
              <span className="text-signal">● Live</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
