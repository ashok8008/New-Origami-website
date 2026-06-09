export default function robots() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://www.origami.dev";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/search", "/search/*"],
      },
    ],
    sitemap: `${site}/sitemap.xml`,
    host: site,
  };
}
