"use client";

import Link from "next/link";
import { useState, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowUpRight, CornerDownLeft } from "lucide-react";
import { PROJECTS, INSIGHTS, SERVICES, INDUSTRIES } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";

function tokenize(s) {
  return (s || "").toLowerCase().split(/\s+/).filter(Boolean);
}

function score(haystack, tokens) {
  const lc = haystack.toLowerCase();
  let s = 0;
  for (const t of tokens) if (lc.includes(t)) s += 1;
  return s;
}

function buildIndex() {
  const items = [];
  for (const p of PROJECTS) {
    items.push({
      type: "Case study",
      title: p.name,
      desc: p.oneLiner,
      url: `/work/${p.slug}`,
      keywords: `${p.name} ${p.oneLiner} ${p.summary || ""} ${p.tag || ""} ${(p.stack || []).join(" ")}`,
    });
  }
  for (const i of INSIGHTS) {
    items.push({
      type: "Insight",
      title: i.title,
      desc: i.excerpt,
      url: `/insights/${i.slug}`,
      keywords: `${i.title} ${i.excerpt} ${i.tag || ""}`,
    });
  }
  for (const s of SERVICES) {
    items.push({
      type: "Service",
      title: s.title,
      desc: s.desc,
      url: `/services/${s.slug}`,
      keywords: `${s.title} ${s.desc}`,
    });
  }
  for (const ind of INDUSTRIES) {
    items.push({
      type: "Industry",
      title: ind.name,
      desc: ind.blurb || ind.note || "",
      url: `/industries/${ind.slug}`,
      keywords: `${ind.name} ${ind.blurb || ""} ${ind.note || ""}`,
    });
  }
  return items;
}

const QUICK_LINKS = [
  { type: "Page", title: "Auctions practice", url: "/auctions" },
  { type: "Page", title: "AI practice", url: "/ai" },
  { type: "Page", title: "Media practice", url: "/media" },
  { type: "Page", title: "Class II & III Games", url: "/games" },
  { type: "Page", title: "All work", url: "/work" },
  { type: "Page", title: "All insights", url: "/insights" },
  { type: "Page", title: "Start a project", url: "/contact" },
];

export default function CommandPalette({ open, onClose }) {
  if (!open) return null;
  return <PaletteInner onClose={onClose} />;
}

function PaletteInner({ onClose }) {
  const router = useRouter();
  const inputRef = useRef(null);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);

  const index = useMemo(() => buildIndex(), []);

  const results = useMemo(() => {
    const tokens = tokenize(q);
    if (tokens.length === 0) return QUICK_LINKS.slice(0, 7);
    return index
      .map((it) => ({ ...it, _s: score(it.keywords, tokens) }))
      .filter((it) => it._s > 0)
      .sort((a, b) => b._s - a._s)
      .slice(0, 8);
  }, [q, index]);

  // Clamp active to results bounds during render (no effect needed).
  const safeActive = results.length === 0 ? 0 : Math.min(active, results.length - 1);

  // Focus the input on mount.
  useEffect(() => {
    const id = setTimeout(() => inputRef.current?.focus(), 30);
    return () => clearTimeout(id);
  }, []);

  // Keyboard handling
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => Math.min(a + 1, Math.max(results.length - 1, 0)));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const r = results[safeActive];
        if (r) {
          trackEvent("command_palette_select", { type: r.type, q, url: r.url });
          onClose();
          router.push(r.url);
        } else if (q.trim()) {
          trackEvent("command_palette_search", { q });
          onClose();
          router.push(`/search?q=${encodeURIComponent(q.trim())}`);
        }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, results, safeActive, q, router]);

  // Lock body scroll while mounted
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[12vh]"
      data-testid="command-palette"
      role="dialog"
      aria-modal="true"
      aria-label="Search Origami"
    >
      {/* Scrim */}
      <button
        type="button"
        aria-label="Close search"
        onClick={onClose}
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        data-testid="command-palette-scrim"
      />

      {/* Panel */}
      <div className="relative w-full max-w-2xl bg-white border-2 border-ink-line shadow-[0_24px_80px_-20px_rgba(0,0,0,0.4)] rounded-2xl overflow-hidden">
        {/* Input row */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-ink-line">
          <Search className="w-5 h-5 text-ink-muted shrink-0" />
          <input
            ref={inputRef}
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search projects, insights, services…"
            className="flex-1 bg-transparent outline-none text-base placeholder:text-ink-muted"
            data-testid="command-palette-input"
          />
          <kbd className="hidden sm:inline-flex items-center px-2 py-1 text-[10px] font-mono uppercase tracking-[0.15em] text-ink-muted border border-ink-line rounded">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <ul className="max-h-[60vh] overflow-y-auto py-2" data-testid="command-palette-results">
          {results.length === 0 ? (
            <li className="px-5 py-6 text-ink-muted text-sm">
              No results. Press <span className="font-mono text-ink">Enter</span> to search all of Origami.
            </li>
          ) : (
            results.map((r, idx) => {
              const isActive = idx === safeActive;
              return (
                <li key={`${r.url}-${idx}`}>
                  <Link
                    href={r.url}
                    onClick={() => {
                      trackEvent("command_palette_select", { type: r.type, q, url: r.url });
                      onClose();
                    }}
                    onMouseEnter={() => setActive(idx)}
                    className={`flex items-center justify-between gap-4 px-5 py-3 cursor-pointer transition-colors ${
                      isActive ? "bg-paper-50" : "hover:bg-paper-50"
                    }`}
                    data-testid={`command-palette-result-${idx}`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal mb-1">
                        {r.type}
                      </div>
                      <div className="font-display text-base font-bold truncate text-ink">{r.title}</div>
                      {r.desc ? (
                        <div className="text-ink-soft text-[13px] truncate mt-0.5">{r.desc}</div>
                      ) : null}
                    </div>
                    {isActive ? (
                      <CornerDownLeft className="w-4 h-4 text-signal shrink-0" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-ink-muted shrink-0" />
                    )}
                  </Link>
                </li>
              );
            })
          )}
        </ul>

        {/* Footer hint */}
        <div className="px-5 py-3 border-t border-ink-line bg-paper-50 flex items-center justify-between text-[11px] text-ink-muted">
          <div className="flex items-center gap-3">
            <span><kbd className="font-mono">↑↓</kbd> navigate</span>
            <span><kbd className="font-mono">↵</kbd> open</span>
            <span><kbd className="font-mono">esc</kbd> close</span>
          </div>
          <Link
            href={q ? `/search?q=${encodeURIComponent(q)}` : "/search"}
            onClick={() => onClose()}
            className="text-signal font-medium hover:underline"
          >
            See all results →
          </Link>
        </div>
      </div>
    </div>
  );
}
