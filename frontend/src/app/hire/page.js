import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TECH_STACKS } from "@/lib/content";
import { buildHirePages, CITIES } from "@/lib/pseo";

const PAGES = buildHirePages(TECH_STACKS);

export const metadata = {
  title: "Hire Developers — Senior Engineers in NYC, London, Dubai & 17 More",
  description:
    "Hire senior mobile, web, AI and platform developers with Origami — a senior-only New York agency serving clients in 20 cities across the US, UK, Canada, UAE, Singapore and India.",
  alternates: { canonical: "/hire" },
};

const uniqueStacks = Array.from(
  new Map(TECH_STACKS.map((s) => [s.slug, s])).values()
);

export default function HireIndexPage() {
  return (
    <div data-testid="hire-index-page">
      <section className="relative pt-36 md:pt-44 pb-16 border-b border-ink-line overflow-hidden bg-paper">
        <div className="absolute inset-0 dotted opacity-40" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// Hire developers
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tightest max-w-4xl">
            Senior developers,<br />
            <span className="text-signal">on demand.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            Hire senior React Native, iOS, Android, Flutter, Next.js, Node, Python, .NET and AI engineers from Origami — a New York-based, senior-only product agency serving {CITIES.length}+ metros globally.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest mb-10">
            By stack &amp; city
          </h2>
          <div className="space-y-12">
            {uniqueStacks.map((stack) => (
              <div key={stack.slug}>
                <h3 className="font-display text-xl md:text-2xl font-black tracking-tight mb-4">
                  Hire {stack.name} developers
                </h3>
                <div className="flex flex-wrap gap-2">
                  {CITIES.map((city) => {
                    const slug = `${stack.slug}-developers-in-${city.slug}`;
                    return (
                      <Link
                        key={slug}
                        href={`/hire/${slug}`}
                        className="text-xs md:text-sm px-3 py-1.5 border border-ink-line hover:border-signal hover:text-signal transition-colors"
                        data-testid={`hire-link-${slug}`}
                      >
                        {city.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-16 text-ink-muted text-sm">
            {PAGES.length} hire landing pages across {uniqueStacks.length} stacks × {CITIES.length} cities.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn-pill btn-primary">
              Talk to an engineer <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
