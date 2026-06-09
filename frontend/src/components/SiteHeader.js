"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Search } from "lucide-react";
import { NAV } from "@/lib/content";
import OrigamiLogo from "./OrigamiLogo";
import CommandPalette from "./CommandPalette";

// Routes whose hero is dark/black — header must invert to white text
// until the user scrolls past the hero (at which point the header gets
// a white blurred background and can switch back to dark text).
const DARK_HERO_ROUTES = ["/auctions", "/media", "/ai"];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const pathname = usePathname() || "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Global ⌘K / Ctrl+K to open the command palette
  useEffect(() => {
    function onKey(e) {
      const k = e.key?.toLowerCase();
      if ((e.metaKey || e.ctrlKey) && k === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      } else if (k === "/" && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
        e.preventDefault();
        setPaletteOpen(true);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const onDarkHero = DARK_HERO_ROUTES.includes(pathname);
  const useLightChrome = onDarkHero && !scrolled;

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
          <OrigamiLogo variant={useLightChrome ? "light" : "dark"} className="text-2xl md:text-3xl" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-[14px] xl:text-[15px] font-medium transition-colors whitespace-nowrap ${
                useLightChrome
                  ? "text-white/70 hover:text-white"
                  : "text-ink-soft hover:text-ink"
              }`}
              data-testid={`nav-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setPaletteOpen(true)}
            aria-label="Search (⌘K)"
            data-testid="header-search-trigger"
            data-track="cmdk_open"
            data-track-prop-source="header"
            className={`hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-full border transition-all ${
              useLightChrome
                ? "border-white/25 text-white/85 hover:bg-white/10"
                : "border-ink-line text-ink-soft hover:bg-paper-50"
            }`}
          >
            <Search className="w-4 h-4" />
            <kbd className="font-mono text-[10px] uppercase tracking-[0.15em] opacity-75">
              ⌘K
            </kbd>
          </button>
          <button
            type="button"
            onClick={() => setPaletteOpen(true)}
            aria-label="Search"
            data-testid="header-search-trigger-mobile"
            className={`md:hidden p-2 ${useLightChrome ? "text-white" : "text-ink"}`}
          >
            <Search className="w-5 h-5" />
          </button>
          <Link
            href="/contact"
            className="btn-pill btn-primary hidden md:inline-flex"
            data-testid="header-cta-button"
            data-track="cta_lets_talk_header"
          >
            Let&apos;s Talk
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <button
            onClick={() => setMobileOpen(true)}
            className={`lg:hidden p-2 ${useLightChrome ? "text-white" : "text-ink"}`}
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
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </header>
  );
}
