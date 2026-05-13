import { renderOGCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "Origami AI Practice — LLM, RAG, Agents, Voice & Vision";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOGCard({
    eyebrow: "AI Practice",
    title: "LLMs, agents, RAG\nthat ship",
    subtitle:
      "Production AI features wrapped in evals, tracing, cost ceilings and rollback — not demos.",
  });
}
