export default function MarqueeSection() {
  const items = [
    "Precision Engineering",
    "Design Systems",
    "Shipping Velocity",
    "Cloud Native",
    "Measurable Outcomes",
    "Senior Operators",
    "Async First",
    "NDA Standard",
  ];
  const stream = [...items, ...items];
  return (
    <section className="border-y border-white/10 overflow-hidden py-6" data-testid="marquee-section">
      <div className="marquee-track animate-marquee will-change-transform">
        {stream.map((t, i) => (
          <span key={i} className="flex items-center gap-6 font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-white/60 whitespace-nowrap">
            <span className="text-signal">◆</span> {t}
          </span>
        ))}
      </div>
    </section>
  );
}
