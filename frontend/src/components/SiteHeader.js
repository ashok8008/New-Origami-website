"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV } from "@/lib/content";
import OrigamiLogo from "./OrigamiLogo";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
          ? "bg-white/85 backdrop-blur-xl border-b border-ink-line"
          : "bg-transparent border-b border-transparent"
      }`}
      data-testid="site-header"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center shrink-0" data-testid="logo-home" aria-label="Origami — Home">
          <OrigamiLogo variant="dark" className="text-2xl md:text-3xl" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[14px] xl:text-[15px] font-medium text-ink-soft hover:text-ink transition-colors whitespace-nowrap"
              data-testid={`nav-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="btn-pill btn-primary hidden md:inline-flex"
            data-testid="header-cta-button"
          >
            Let&apos;s Talk
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-ink p-2"
            aria-label="Open menu"
            data-testid="mobile-menu-open"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-white overflow-y-auto" data-testid="mobile-menu">
          <div className="flex items-center justify-between px-6 h-16 border-b border-ink-line">
            <Image src="/brand/logo.svg" alt="Origami" width={120} height={40} className="h-7 w-auto" />
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              data-testid="mobile-menu-close"
              className="p-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="px-6 py-10 space-y-2">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block font-display text-3xl md:text-4xl font-bold py-3 border-b border-ink-line"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-8 btn-pill btn-primary inline-flex"
            >
              Let&apos;s Talk <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
