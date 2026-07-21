import {
  SERVICES,
  PROJECTS,
  INDUSTRIES,
  AI_PRACTICE,
  INSIGHTS,
  TECH_STACKS,
  SOLUTIONS,
  COMPARES,
  PRODUCTS,
} from "@/lib/content";
import { HUBS } from "@/lib/hubs";
import {
  CITIES,
  GUIDES,
  GLOSSARY,
  buildHirePages,
  buildAiSolutionPages,
} from "@/lib/pseo";

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
    "ai-solutions",
    "work",
    "industries",
    "insights",
    "guides",
    "glossary",
    "build",
    "solutions",
    "compare",
    "approach",
    "careers",
    "contact",
    "pricing",
    "new-york",
    "locations",
    "hire",
    "products",
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

  const cityLandings = CITIES.map((c) => ({
    url: `${SITE}/locations/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const cityTopic = CITIES.flatMap((c) => [
    ...SERVICES.map((s) => ({
      url: `${SITE}/locations/${c.slug}/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    })),
    ...INDUSTRIES.map((i) => ({
      url: `${SITE}/locations/${c.slug}/${i.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    })),
  ]);

  const hire = buildHirePages(TECH_STACKS).map((h) => ({
    url: `${SITE}/hire/${h.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const aiSolutions = buildAiSolutionPages(
    AI_PRACTICE.useCases,
    INDUSTRIES
  ).map((a) => ({
    url: `${SITE}/ai-solutions/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const hubs = HUBS.map((h) => ({
    url: `${SITE}/${h.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const hubCities = HUBS.flatMap((h) =>
    CITIES.map((c) => ({
      url: `${SITE}/${h.slug}/in/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }))
  );

  return [
    ...core,
    ...hubs,
    ...hubCities,
    ...dyn("services", SERVICES),
    ...dyn("products", PRODUCTS, "slug", 0.9),
    ...dyn("work", PROJECTS, "slug", 0.8),
    ...dyn("industries", INDUSTRIES),
    ...dyn("ai", AI_PRACTICE.useCases),
    ...dyn("build", TECH_STACKS),
    ...dyn("solutions", SOLUTIONS, "slug", 0.6),
    ...dyn("compare", COMPARES, "slug", 0.6),
    ...dyn("guides", GUIDES, "slug", 0.6),
    ...dyn("glossary", GLOSSARY, "slug", 0.5),
    ...cityLandings,
    ...cityTopic,
    ...hire,
    ...aiSolutions,
    ...INSIGHTS.map((i) => ({
      url: `${SITE}/insights/${i.slug}`,
      lastModified: new Date(i.date),
      changeFrequency: "yearly",
      priority: 0.6,
    })),
  ];
}
