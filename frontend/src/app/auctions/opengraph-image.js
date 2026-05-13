import { renderOGCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "Origami Auctions Practice — engineering the next generation of auction houses";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOGCard({
    eyebrow: "Auctions Practice",
    title: "Built for the\nnext Sotheby's",
    subtitle:
      "Bidding engines, anti-snipe, live-event run-of-show and high-value escrow — shipped end-to-end.",
  });
}
