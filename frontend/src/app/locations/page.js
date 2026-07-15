import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CITIES } from "@/lib/pseo";

export const metadata = {
  title: "Locations — Origami Serves 20 Cities Globally",
  description:
    "Origami is a senior-only New York + Bengaluru product agency serving 20 metros — NYC, LA, SF, Chicago, Miami, London, Toronto, Dubai, Singapore and more.",
  alternates: { canonical: "/locations" },
};

export default function LocationsIndex() {
  return (
    <div data-testid="locations-index">
      <section className="relative pt-36 md:pt-44 pb-16 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-40" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// Locations
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tightest max-w-4xl">
            We ship<br />
            <span className="text-signal">wherever you are.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            Head office in New York. Dev centre in Bengaluru. Senior engineers aligned to {CITIES.length} cities across the US, UK, Canada, UAE, Singapore and India.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-4">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/locations/${c.slug}`}
                className="group p-6 border border-ink-line hover:border-signal transition-colors"
                data-testid={`location-card-${c.slug}`}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                  {c.country}
                </div>
                <h2 className="mt-2 font-display text-2xl font-black tracking-tight group-hover:text-signal transition-colors">
                  {c.name} {c.isHQ ? "· HQ" : c.isDevCentre ? "· Dev" : ""}
                </h2>
                <p className="mt-2 text-ink-soft text-sm">{c.region}</p>
                <div className="mt-4 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
                  Explore <ArrowUpRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
