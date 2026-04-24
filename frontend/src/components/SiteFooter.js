import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import NewsletterForm from "./NewsletterForm";
import { NAV, NAV_EXTRA } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 bg-paper-50 border-t border-ink-line" data-testid="site-footer">
      {/* CTA BLOCK */}
      <section className="border-b border-ink-line relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 sunburst pointer-events-none" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 py-24 md:py-32 grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
              /// Ready when you are
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-black leading-[0.95] tracking-tightest text-ink">
              Let&apos;s build what<br />
              <span className="text-signal">culture</span> runs on.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 flex md:justify-end">
            <Link
              href="/contact"
              className="btn-pill btn-primary"
              data-testid="footer-cta-button"
            >
              Let&apos;s Talk
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-5">
          <Image src="/brand/logo.svg" alt="Origami" width={140} height={44} className="h-8 w-auto" />
          <p className="mt-6 text-ink-soft text-[15px] max-w-sm leading-relaxed">
            Origami builds the digital platforms behind hip-hop, real-money
            gaming and cultural icons. Design, engineering and staffing —
            senior, end-to-end.
          </p>
          <div className="mt-8 space-y-2 text-[14px] text-ink-soft">
            <div className="flex items-center gap-3" data-testid="footer-email">
              <Mail className="w-4 h-4 text-signal" />
              <a href="mailto:contact@myorigami.co" className="hover:text-ink">contact@myorigami.co</a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-signal" />
              <span>US +1 858 429 9159</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-signal" />
              <span>IN +91 761 878 0865</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-signal mt-0.5" />
              <span>312N Milton Ave, Campbell, California, 95008, US</span>
            </div>
          </div>
        </div>

        <div className="col-span-6 md:col-span-3 md:col-start-7">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-muted mb-5">
            Sitemap
          </div>
          <ul className="space-y-3">
            {[...NAV, ...NAV_EXTRA].map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-[15px] text-ink-soft hover:text-signal transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-6 md:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-muted mb-5">
            Stay in the loop
          </div>
          <p className="text-ink-soft text-[14px] mb-4 leading-relaxed">
            Quarterly notes on culture, gaming and the tech that connects them.
          </p>
          <NewsletterForm />
        </div>
      </div>

      <div className="border-t border-ink-line">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-ink-muted">
          <div>© {new Date().getFullYear()} Origami. All rights reserved.</div>
          <div className="font-mono tracking-[0.18em] uppercase">
            Built for culture — Campbell, CA &amp; IN.
          </div>
        </div>
      </div>
    </footer>
  );
}
