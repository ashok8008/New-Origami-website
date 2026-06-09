import {
  SERVICES,
  PROJECTS,
  INDUSTRIES,
  AI_PRACTICE,
  INSIGHTS,
  TECH_STACKS,
  SOLUTIONS,
  COMPARES,
} from "@/lib/content";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.origami.dev";

export default function sitemap() {
  const now = new Date();
  const core = [
    "",
    "about",
    "auctions",
    "media",
    "services",
    "games",
    "ai",
    "work",
    "industries",
    "insights",
    "build",
    "solutions",
    "compare",
    "approach",
    "careers",
    "contact",
    "new-york",
  ].map((p) => ({
    url: `${SITE}/${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "" ? 1.0 : 0.8,
  }));

  const dyn = (base, items, slugKey = "slug", priority = 0.7) =>
    items.map((it) => ({
      url: `${SITE}/${base}/${it[slugKey]}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority,
    }));

  return [
    ...core,
    ...dyn("services", SERVICES),
    ...dyn("work", PROJECTS, "slug", 0.8),
    ...dyn("industries", INDUSTRIES),
    ...dyn("ai", AI_PRACTICE.useCases),
    ...dyn("build", TECH_STACKS),
    ...dyn("solutions", SOLUTIONS, "slug", 0.6),
    ...dyn("compare", COMPARES, "slug", 0.6),
    ...INSIGHTS.map((i) => ({
      url: `${SITE}/insights/${i.slug}`,
      lastModified: new Date(i.date),
      changeFrequency: "yearly",
      priority: 0.6,
    })),
  ];
}
