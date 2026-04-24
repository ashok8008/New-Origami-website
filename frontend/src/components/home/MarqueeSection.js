import { MARQUEE_WORDS } from "@/lib/content";

export default function MarqueeSection() {
  const stream = [...MARQUEE_WORDS, ...MARQUEE_WORDS];
  return (
    <section className="border-y border-ink-line bg-white overflow-hidden py-6" data-testid="marquee-section">
      <div className="marquee-track animate-marquee will-change-transform">
        {stream.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-6 font-display text-xl md:text-2xl uppercase tracking-tight font-bold text-ink whitespace-nowrap"
          >
            <span className="text-signal text-3xl leading-none">*</span> {t}
          </span>
        ))}
      </div>
    </section>
  );
}
