import { renderOGCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "Origami Media & Publishers Practice";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOGCard({
    eyebrow: "Media Practice",
    title: "We build like the\nmagazines we read",
    subtitle:
      "Programmatic, contextual & content-commerce platforms for culture-forward publishers.",
  });
}
