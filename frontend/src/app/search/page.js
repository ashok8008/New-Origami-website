"use client";

import Link from "next/link";
import { useState, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, ArrowUpRight } from "lucide-react";
import { PROJECTS, INSIGHTS, SERVICES, INDUSTRIES } from "@/lib/content";

function tokenize(s) {
  return (s || "").toLowerCase().split(/\s+/).filter(Boolean);
}

function score(haystack, tokens) {
  const lc = haystack.toLowerCase();
  let s = 0;
  for (const t of tokens) {
    if (!t) continue;
    if (lc.includes(t)) s += 1;
  }
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

function SearchInner() {
  const params = useSearchParams();
  const q = params.get("q") || "";
  // Key-on-q remounts SearchUI when the URL query changes, so the
  // local input state resets cleanly without effects or ref mutation.
  return <SearchUI key={q} q={q} />;
}

function SearchUI({ q }) {
  const router = useRouter();
  const [draft, setDraft] = useState(q);

  const index = useMemo(() => buildIndex(), []);
  const results = useMemo(() => {
    const tokens = tokenize(q);
    if (tokens.length === 0) return [];
    return index
      .map((it) => ({ ...it, _s: score(it.keywords, tokens) }))
      .filter((it) => it._s > 0)
      .sort((a, b) => b._s - a._s)
      .slice(0, 30);
  }, [q, index]);

  function onSubmit(e) {
    e.preventDefault();
    const next = draft.trim();
    router.push(next ? `/search?q=${encodeURIComponent(next)}` : "/search");
  }

  return (
    <div data-testid="search-page">
      <section className="pt-36 md:pt-44 pb-12 md:pb-16 border-b border-ink-line bg-paper">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5">
            /// Search
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-black tracking-tightest leading-[0.95] max-w-3xl">
            Find a case study,<br />
            an insight,<br />
            <span className="text-signal">or a service.</span>
          </h1>

          <form onSubmit={onSubmit} className="mt-10 max-w-2xl flex items-center gap-3 border-2 border-ink-line bg-white rounded-full px-6 py-3 focus-within:border-signal transition-colors">
            <Search className="w-5 h-5 text-ink-muted shrink-0" />
            <input
              autoFocus
              type="search"
              name="q"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="React Native, auctions, fintech, RAG, .NET…"
              className="flex-1 bg-transparent outline-none text-lg placeholder:text-ink-muted"
              data-testid="search-input"
            />
            <button
              type="submit"
              className="btn-pill btn-primary px-5 py-2 text-sm"
              data-testid="search-submit"
              data-track="site_search"
              data-track-prop-q={q}
            >
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white border-b border-ink-line">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          {q.trim().length === 0 ? (
            <div className="text-ink-soft text-base md:text-lg max-w-2xl">
              Type anything — projects, technologies, industries, topics. We&apos;ll search across our case studies, insights, services and industries.
            </div>
          ) : results.length === 0 ? (
            <div data-testid="search-no-results">
              <p className="text-ink-soft text-lg">
                No results for <span className="font-bold text-ink">&ldquo;{q}&rdquo;</span>.
              </p>
              <p className="mt-2 text-ink-muted text-sm">
                Try a broader term — &ldquo;mobile&rdquo;, &ldquo;AI&rdquo;, &ldquo;auctions&rdquo;, &ldquo;gaming&rdquo;.
              </p>
            </div>
          ) : (
            <>
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-muted mb-6">
                {results.length} result{results.length === 1 ? "" : "s"} for &ldquo;{q}&rdquo;
              </div>
              <ul className="divide-y divide-ink-line" data-testid="search-results">
                {results.map((r, idx) => (
                  <li key={`${r.url}-${idx}`}>
                    <Link
                      href={r.url}
                      className="group flex items-start justify-between gap-6 py-6 hover:bg-paper-50 -mx-4 px-4 transition-colors"
                      data-testid={`search-result-${idx}`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal mb-2">
                          {r.type}
                        </div>
                        <h2 className="font-display text-xl md:text-2xl font-bold tracking-tight leading-snug text-ink group-hover:text-signal transition-colors">
                          {r.title}
                        </h2>
                        {r.desc ? (
                          <p className="mt-2 text-ink-soft text-[15px] leading-relaxed line-clamp-2">{r.desc}</p>
                        ) : null}
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-ink-muted group-hover:text-signal transition-colors shrink-0 mt-2" />
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="pt-44 px-10">Loading…</div>}>
      <SearchInner />
    </Suspense>
  );
}
