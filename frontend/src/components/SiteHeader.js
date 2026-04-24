"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV = [
  {
    label: "Services",
    href: "/services/web-design",
    columns: [
      {
        title: "Website Design & Development",
        links: [
          { label: "Web Design", href: "/services/web-design" },
          { label: "Ecommerce Web Design", href: "/services/ecommerce-website" },
          { label: "Corporate Website", href: "/services/corporate-website" },
          { label: "B2B Website Design", href: "/services/b2b-website" },
          { label: "Website Maintenance", href: "/services/website-maintenance" },
          { label: "Website Consulting", href: "/services/website-consulting" },
        ],
      },
      {
        title: "App Development",
        links: [
          { label: "Hybrid App Development", href: "/services/hybrid-app" },
          { label: "Wearable App Development", href: "/services/wearable-app" },
          { label: "Backend & API", href: "/services/hybrid-app" },
          { label: "Mobile App Testing", href: "/services/hybrid-app" },
        ],
      },
      {
        title: "Discovery & Design",
        links: [
          { label: "Research & Planning", href: "/services/web-design" },
          { label: "Interface Design", href: "/services/web-design" },
          { label: "User Experience Design", href: "/services/web-design" },
          { label: "Prototyping", href: "/services/web-design" },
          { label: "MVP", href: "/services/web-design" },
          { label: "Quality Assurance", href: "/services/web-design" },
        ],
      },
    ],
  },
  {
    label: "eCommerce",
    href: "/services/ecommerce-website",
    columns: [
      {
        title: "Commerce Platforms",
        links: [
          { label: "Ecommerce Web Design", href: "/services/ecommerce-website" },
          { label: "B2B Commerce", href: "/services/b2b-website" },
          { label: "Magento / Adobe Commerce", href: "/services/ecommerce-website" },
          { label: "Shopify", href: "/services/ecommerce-website" },
          { label: "WooCommerce", href: "/services/ecommerce-website" },
          { label: "PrestaShop", href: "/services/ecommerce-website" },
        ],
      },
    ],
  },
  { label: "Staffing", href: "/staffing" },
  { label: "About", href: "/about" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink-950/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
      data-testid="site-header"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" data-testid="logo-home">
          <span className="inline-block w-7 h-7 relative">
            <span className="absolute inset-0 bg-white" style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }} />
            <span className="absolute inset-0 bg-signal" style={{ clipPath: "polygon(0 100%, 100% 100%, 50% 0)", opacity: 0.85 }} />
          </span>
          <span className="font-display text-lg md:text-xl font-bold tracking-tight">
            Origami<span className="text-signal">.</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenPanel(item.label)}
              onMouseLeave={() => setOpenPanel(null)}
            >
              <Link
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
              {item.columns && openPanel === item.label && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[min(92vw,900px)]"
                  data-testid={`nav-panel-${item.label.toLowerCase()}`}
                >
                  <div className="bg-ink-850 border border-white/10 shadow-2xl p-8 grid grid-cols-3 gap-8">
                    {item.columns.map((col) => (
                      <div key={col.title}>
                        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-4">
                          {col.title}
                        </div>
                        <ul className="space-y-2">
                          {col.links.map((l) => (
                            <li key={l.label}>
                              <Link
                                href={l.href}
                                className="group flex items-center justify-between text-sm text-white/80 hover:text-white"
                              >
                                <span>{l.label}</span>
                                <ArrowUpRight className="w-4 h-4 text-signal opacity-0 group-hover:opacity-100 transition-opacity" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-white text-black font-semibold px-5 py-2.5 text-sm hover:bg-signal hover:text-white transition-colors"
            data-testid="header-cta-button"
          >
            Get in touch
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-white p-2"
            aria-label="Open menu"
            data-testid="mobile-menu-open"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-ink-950 overflow-y-auto" data-testid="mobile-menu">
          <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
            <span className="font-display text-lg font-bold">Origami<span className="text-signal">.</span></span>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              data-testid="mobile-menu-close"
              className="p-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="px-6 py-8 space-y-8">
            {NAV.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-3xl font-bold block mb-3"
                >
                  {item.label}
                </Link>
                {item.columns &&
                  item.columns.map((col) => (
                    <div key={col.title} className="mt-3">
                      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-2">
                        {col.title}
                      </div>
                      <ul className="space-y-1.5">
                        {col.links.map((l) => (
                          <li key={l.label}>
                            <Link
                              href={l.href}
                              onClick={() => setMobileOpen(false)}
                              className="text-white/80 text-base"
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 text-sm"
            >
              Get in touch <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
