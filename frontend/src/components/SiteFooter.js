import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

const FOOTER_COLS = [
  {
    title: "Services",
    links: [
      { label: "Web Design", href: "/services/web-design" },
      { label: "Ecommerce", href: "/services/ecommerce-website" },
      { label: "Corporate", href: "/services/corporate-website" },
      { label: "B2B Website", href: "/services/b2b-website" },
      { label: "Maintenance", href: "/services/website-maintenance" },
      { label: "Consulting", href: "/services/website-consulting" },
    ],
  },
  {
    title: "Apps",
    links: [
      { label: "Hybrid Apps", href: "/services/hybrid-app" },
      { label: "Wearable Apps", href: "/services/wearable-app" },
      { label: "Mobile Testing", href: "/services/hybrid-app" },
      { label: "Backend & API", href: "/services/hybrid-app" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Staffing", href: "/staffing" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="relative z-10 bg-ink-850 border-t border-white/10" data-testid="site-footer">
      {/* CTA BLOCK */}
      <section className="border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-24 md:py-32 grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-6">
              /// Ready when you are
            </div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tightest">
              Let&apos;s build your
              <br />
              next digital <span className="text-signal">product</span>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 flex md:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-black font-semibold px-8 py-5 text-base hover:bg-signal hover:text-white transition-colors"
              data-testid="footer-cta-button"
            >
              Get in touch
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-8 h-8 relative">
              <span className="absolute inset-0 bg-white" style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }} />
              <span className="absolute inset-0 bg-signal" style={{ clipPath: "polygon(0 100%, 100% 100%, 50% 0)", opacity: 0.85 }} />
            </span>
            <span className="font-display text-xl font-bold tracking-tight">
              Origami<span className="text-signal">.</span>
            </span>
          </div>
          <p className="text-white/60 text-sm max-w-xs leading-relaxed">
            Your go-to digital developers. Design, engineering and staffing — delivered on time and on point.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <div className="flex items-center gap-3 text-white/80" data-testid="footer-email">
              <Mail className="w-4 h-4 text-signal" />
              <a href="mailto:contact@myorigami.co">contact@myorigami.co</a>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Phone className="w-4 h-4 text-signal" />
              <span>US +1 858 429 9159</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Phone className="w-4 h-4 text-signal" />
              <span>IN +91 761 878 0865</span>
            </div>
            <div className="flex items-start gap-3 text-white/80">
              <MapPin className="w-4 h-4 text-signal mt-0.5" />
              <span>312N Milton Ave, Campbell, California, 95008, US</span>
            </div>
          </div>
        </div>

        {FOOTER_COLS.map((col) => (
          <div key={col.title} className="col-span-6 md:col-span-2 md:col-start-auto">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-5">
              {col.title}
            </div>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/80 text-sm hover:text-signal transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-12 md:col-span-2">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-5">
            Newsletter
          </div>
          <p className="text-white/60 text-sm mb-4">
            Short updates on product, engineering and hiring.
          </p>
          <NewsletterForm />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Origami Softwares. All rights reserved.</div>
          <div className="font-mono tracking-widest uppercase">
            Crafted with precision — in CA & IN.
          </div>
        </div>
      </div>
    </footer>
  );
}
