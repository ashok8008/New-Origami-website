"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail, Phone, MapPin, Linkedin } from "lucide-react";
import NewsletterForm from "./NewsletterForm";
import OrigamiLogo from "./OrigamiLogo";
import { NAV, NAV_EXTRA, CONTACT } from "@/lib/content";

export default function SiteFooter() {
  const pathname = usePathname() || "/";
  if (pathname.startsWith("/newjoinee") || pathname.startsWith("/employeeonboardinghub")) return null;
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
          <OrigamiLogo variant="dark" className="text-3xl" />
          <p className="mt-6 text-ink-soft text-[15px] max-w-sm leading-relaxed">
            Origami builds mobile apps, AI products and platforms for
            culture-forward brands — fantasy &amp; real-money gaming, fintech,
            commerce, hip-hop and travel. Senior, end-to-end.
          </p>
          <div className="mt-8 space-y-3 text-[14px] text-ink-soft">
            <div className="flex items-center gap-3" data-testid="footer-email">
              <Mail className="w-4 h-4 text-signal" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-ink">{CONTACT.email}</a>
            </div>
            {CONTACT.linkedin && (
              <div className="flex items-center gap-3" data-testid="footer-linkedin">
                <Linkedin className="w-4 h-4 text-signal" />
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink"
                >
                  LinkedIn — Origami Consulting LLC
                </a>
              </div>
            )}
            {CONTACT.phones.map((p) => (
              <div key={p.label} className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-signal" />
                <span>{p.label} {p.number}</span>
              </div>
            ))}
            {CONTACT.offices.map((o) => (
              <div key={o.label} className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-signal mt-0.5 shrink-0" />
                <div>
                  <div className="text-ink font-medium">{o.label}</div>
                  <div className="text-ink-muted leading-relaxed">
                    {o.lines.join(", ")}
                  </div>
                </div>
              </div>
            ))}
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
          <div>© {new Date().getFullYear()} Origami Consulting LLC. All rights reserved.</div>
          <div className="font-mono tracking-[0.18em] uppercase">
            Built for culture — NY &amp; India.
          </div>
        </div>
      </div>
    </footer>
  );
}
