import { INDUSTRIES } from "@/lib/content";

export default function IndustriesSection() {
  return (
    <section
      className="py-24 md:py-32 border-b border-white/10"
      data-testid="industries-section"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-6">
              /// Expertise
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
              We love being <span className="text-signal italic">diversified</span>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-6 text-white/70 text-lg leading-relaxed">
            A decade of shipping across industries gives us strong opinions
            where it matters and humility where it doesn&apos;t. These are
            the verticals we know best.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={ind.name}
              className="group relative bg-ink-950 p-8 md:p-12 hover:bg-ink-850 transition-colors cursor-pointer"
              data-testid={`industry-card-${i}`}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-8 font-display text-2xl md:text-3xl font-bold tracking-tight">
                {ind.name}
              </h3>
              <p className="mt-3 text-white/55 text-sm">{ind.note}</p>
              <div className="mt-10 h-px bg-white/10 group-hover:bg-signal transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
