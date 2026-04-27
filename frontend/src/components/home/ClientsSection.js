import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CLIENTS } from "@/lib/content";

export default function ClientsSection() {
  return (
    <section
      className="py-20 md:py-28 border-b border-ink-line bg-white"
      data-testid="clients-section"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 mb-14 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
              /// Repeat clients, real software
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black leading-[0.95] tracking-tightest">
              The brands we&apos;ve built&nbsp;<span className="text-signal">the apps</span>&nbsp;for.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 text-ink-soft text-lg leading-relaxed">
            Most of our work is repeat or referral. Below — a slice of the apps,
            platforms and AI products we&apos;ve shipped end-to-end.
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-ink-line border border-ink-line">
          {CLIENTS.map((c) => (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white aspect-[5/2] flex items-center justify-center px-6 py-8 text-ink/70 hover:text-ink hover:bg-paper-50 transition-colors"
              data-testid={`client-logo-${c.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              aria-label={`Visit ${c.name}`}
            >
              <Image
                src={`/brand/clients/${c.file}`}
                alt={c.name}
                width={c.width}
                height={40}
                className="h-8 md:h-9 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </a>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/work" className="link-slide text-[15px] font-medium text-ink hover:text-signal">
            See all case studies <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
