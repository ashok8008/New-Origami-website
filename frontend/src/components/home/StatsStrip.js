export default function StatsStrip() {
  const stats = [
    ["10+", "Years shipping"],
    ["180+", "Engineers & designers"],
    ["300+", "Products launched"],
    ["Class II/III", "Gaming platforms"],
  ];
  return (
    <section className="py-16 md:py-20 bg-paper border-b border-ink-line" data-testid="stats-strip">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(([n, l]) => (
          <div key={l} className="border-l border-ink-line pl-5">
            <div className="font-display text-3xl md:text-5xl font-black tracking-tight text-ink">
              {n}
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted mt-2">
              {l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
