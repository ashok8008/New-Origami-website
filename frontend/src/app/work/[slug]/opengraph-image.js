import { notFound } from "next/navigation";
import { renderOGCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";
import { getProject } from "@/lib/content";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Origami Case Study";

export default function Image({ params }) {
  const p = getProject(params.slug);
  if (!p) return notFound();
  return renderOGCard({
    eyebrow: `Case Study · ${p.tag}`,
    title: p.name,
    subtitle: p.oneLiner,
  });
}
