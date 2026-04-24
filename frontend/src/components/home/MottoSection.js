export default function MottoSection() {
  return (
    <section className="py-24 md:py-32 border-b border-white/10" data-testid="motto-section">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-8 items-start">
        <div className="col-span-12 md:col-span-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-6">
            /// Our Motto
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
            Deliver only<br /> the <span className="text-signal italic">best</span>.
          </h2>
        </div>
        <div className="col-span-12 md:col-span-7 md:pl-12 md:border-l border-white/10 md:pt-4">
          <p className="text-white/80 text-xl md:text-2xl leading-relaxed font-light">
            We&apos;re a global technology partner helping businesses ship
            efficient, scalable digital products with a lower cost of
            ownership — accelerating their transformation without the overhead
            of traditional agencies.
          </p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              ["Global", "Teams in 3 time zones"],
              ["Senior", "Avg 6+ yrs / role"],
              ["Secure", "NDA & SOC-aware"],
            ].map(([k, v]) => (
              <div key={k} className="bg-ink-950 p-5">
                <div className="font-display text-lg font-semibold">{k}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 mt-2">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
