export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://origami.dev/sitemap.xml",
    host: "https://origami.dev",
  };
}
