const AI_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "Google-Extended",
  "GoogleOther",
  "CCBot",
  "Applebot-Extended",
  "Bytespider",
  "Amazonbot",
  "Meta-ExternalAgent",
  "FacebookBot",
  "DuckAssistBot",
  "cohere-ai",
  "cohere-training-data-crawler",
  "Diffbot",
  "MistralAI-User",
  "PetalBot",
  "YouBot",
  "Kagibot",
  "BravebotAI",
];

export default function robots() {
  const site =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.origami.dev";

  const disallow = [
    "/search",
    "/search/*",
    "/newjoinee",
    "/newjoinee/*",
    "/employeeonboardinghub",
    "/employeeonboardinghub/*",
    "/api/",
  ];

  const rules = [
    { userAgent: "*", allow: "/", disallow },
    ...AI_BOTS.map((ua) => ({ userAgent: ua, allow: "/", disallow })),
  ];

  return {
    rules,
    sitemap: [`${site}/sitemap.xml`, `${site}/sitemap-index.xml`],
    host: site,
  };
}
