import {
  SERVICES,
  PROJECTS,
  INDUSTRIES,
  AI_PRACTICE,
  INSIGHTS,
} from "@/lib/content";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://origami.dev";

export default function sitemap() {
  const now = new Date();
  const core = [
    "",
    "about",
    "services",
    "games",
    "ai",
    "work",
    "industries",
    "insights",
    "approach",
    "careers",
    "contact",
  ].map((p) => ({
    url: `${SITE}/${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "" ? 1.0 : 0.8,
  }));

  const services = SERVICES.map((s) => ({
    url: `${SITE}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const work = PROJECTS.map((p) => ({
    url: `${SITE}/work/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const industries = INDUSTRIES.map((i) => ({
    url: `${SITE}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const ai = AI_PRACTICE.useCases.map((u) => ({
    url: `${SITE}/ai/${u.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const insights = INSIGHTS.map((i) => ({
    url: `${SITE}/insights/${i.slug}`,
    lastModified: new Date(i.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...core, ...services, ...work, ...industries, ...ai, ...insights];
}
