import Image from "next/image";
import { MEDIA, PILLARS } from "@/lib/content";

export default function PillarsSection() {
  return (
    <section
      className="relative py-24 md:py-32 border-b border-white/10 overflow-hidden"
      data-testid="pillars-section"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.08]">
        <Image
          src={MEDIA.paperFolds}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-6">
              /// Why us
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
              Four pillars of <span className="text-signal">Origami</span>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-6 text-white/70 text-lg leading-relaxed">
            We work with founders and operators who value craft, pace and
            proof. These four principles shape every engagement — and the
            kind of team that shows up for yours.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 border border-white/10">
          {PILLARS.map((p, i) => (
            <div
              key={p.n}
              className={`relative p-8 md:p-10 bg-ink-950/60 ${i !== 0 ? "md:border-l border-white/10" : ""} group hover:bg-ink-850 transition-colors`}
              data-testid={`pillar-${p.n}`}
            >
              <div className="font-mono text-sm text-signal">{p.n}</div>
              <h3 className="mt-10 font-display text-3xl md:text-4xl font-bold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-5 text-white/65 text-sm md:text-base leading-relaxed">
                {p.desc}
              </p>
              <div className="absolute right-6 bottom-6 font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 group-hover:text-signal transition-colors">
                ● fold.{p.n}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
