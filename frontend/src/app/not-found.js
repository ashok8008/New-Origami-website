import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const POPULAR = [
  { label: "Services", href: "/services", text: "Web, mobile, custom software and auctions." },
  { label: "AI Practice", href: "/ai", text: "Agents, document intelligence and LLM apps." },
  { label: "Products", href: "/products", text: "Ready-to-launch platforms we've built." },
  { label: "Work", href: "/work", text: "Case studies across fintech, gaming and commerce." },
  { label: "Pricing", href: "/pricing", text: "What it costs to build with Origami." },
  { label: "Hire Developers", href: "/hire", text: "Dedicated engineers, ready in days." },
  { label: "Insights", href: "/insights", text: "Long-form thinking on building software." },
  { label: "Guides", href: "/guides", text: "Practical playbooks for product teams." },
  { label: "Careers", href: "/careers", text: "Join the team in Bengaluru — hybrid." },
];

export default function NotFound() {
  return (
    <div className="relative overflow-hidden bg-paper pt-36 md:pt-44 pb-24" data-testid="not-found">
      <div className="absolute inset-0 dotted opacity-50 pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">/// 404</div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tightest max-w-4xl">
          This page folded.
          <br />
          <span className="text-signal">Try one of these.</span>
        </h1>
        <p className="mt-8 max-w-xl text-ink-soft text-lg leading-relaxed">
          The link may be old or mistyped. Here are the most visited parts of Origami.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn-pill btn-primary inline-flex" data-testid="not-found-home-btn">Back home</Link>
          <Link href="/contact" className="btn-pill inline-flex border border-ink-line" data-testid="not-found-contact-btn">Talk to us</Link>
        </div>

        <nav aria-label="Popular pages" className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-line border border-ink-line">
          {POPULAR.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group bg-white p-8 flex flex-col transition-colors duration-300 hover:bg-paper-50"
              data-testid={`not-found-link-${p.href.slice(1)}`}
            >
              <span className="flex items-center justify-between font-display text-2xl font-bold tracking-tight">
                <span className="underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors duration-300 group-hover:decoration-signal">
                  {p.label}
                </span>
                <ArrowUpRight className="w-5 h-5 text-signal transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
              <span className="mt-3 text-ink-muted text-[15px] leading-relaxed">{p.text}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
