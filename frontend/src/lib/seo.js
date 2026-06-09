/**
 * JSON-LD schema builders for SEO.
 * Returns plain objects that you JSON.stringify into a <script type="application/ld+json">.
 *
 * Used across the site to give Google rich-result eligibility and AI search engines
 * (Perplexity, ChatGPT Search, Brave AI) structured facts they can quote directly.
 */

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.origami.dev";

const NY_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "641 Lexington Avenue, 14th Floor",
  addressLocality: "New York",
  addressRegion: "NY",
  postalCode: "10022",
  addressCountry: "US",
};

const IN_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress:
    "Hustlehub Tech Park, Somasundara Palya Main Road, 27th Main Road, Sector 2, HSR Layout",
  addressLocality: "Bengaluru",
  addressRegion: "KA",
  postalCode: "560102",
  addressCountry: "IN",
};

/** Full LocalBusiness (NYC HQ) — for the homepage. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE}/#organization`,
    name: "Origami",
    legalName: "Origami",
    url: SITE,
    logo: `${SITE}/brand/logo.svg`,
    image: `${SITE}/opengraph-image`,
    description:
      "Origami builds mobile apps, AI products, fantasy & real-money gaming and fintech platforms for culture-forward brands.",
    foundingDate: "2018",
    numberOfEmployees: { "@type": "QuantitativeValue", value: 40 },
    address: NY_ADDRESS,
    location: [
      { "@type": "Place", name: "Origami HQ — New York", address: NY_ADDRESS },
      { "@type": "Place", name: "Origami Dev — Bengaluru", address: IN_ADDRESS },
    ],
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "India" },
      { "@type": "AdministrativeArea", name: "Global" },
    ],
    email: "hello@origami.dev",
    telephone: "+1-970-710-5120",
    priceRange: "$$$",
    sameAs: [],
    knowsAbout: [
      "Mobile app development",
      "React Native",
      "iOS Swift",
      "Android Kotlin",
      "AI and LLM products",
      "Retrieval-Augmented Generation",
      "Real-money gaming",
      "Class II gaming",
      "Class III gaming",
      "Auction platforms",
      ".NET",
      "Microsoft Azure",
      "Next.js",
      "PostgreSQL",
    ],
  };
}

/** BreadcrumbList helper. Pass an ordered array of {name, url}. */
export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url.startsWith("http") ? it.url : `${SITE}${it.url}`,
    })),
  };
}

/** Service schema for /services/[slug]. */
export function serviceJsonLd({ slug, title, description, areaServedCity = "New York" }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE}/services/${slug}#service`,
    name: title,
    description,
    serviceType: title,
    provider: { "@id": `${SITE}/#organization` },
    areaServed: [
      { "@type": "City", name: areaServedCity },
      { "@type": "Country", name: "United States" },
      "Global",
    ],
    url: `${SITE}/services/${slug}`,
  };
}

/** FAQPage — pass an array of {q, a} objects. */
export function faqJsonLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Article schema for /insights/[slug]. */
export function articleJsonLd({ slug, title, excerpt, date, author = "Origami" }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE}/insights/${slug}#article`,
    headline: title,
    description: excerpt,
    datePublished: date,
    dateModified: date,
    author: { "@type": "Organization", name: author, url: SITE },
    publisher: {
      "@type": "Organization",
      name: "Origami",
      logo: { "@type": "ImageObject", url: `${SITE}/brand/logo.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}/insights/${slug}` },
    image: `${SITE}/insights/${slug}/opengraph-image`,
  };
}

/** WebSite + SearchAction schema for the homepage.
 *  Enables Google's sitelinks search box on brand queries by giving Google
 *  a real, in-domain search endpoint to wire to.
 */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    url: SITE,
    name: "Origami",
    alternateName: [
      "Origami Studios",
      "Origami Dev",
      "Origami New York",
      "Origami Agency",
    ],
    publisher: { "@id": `${SITE}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-US",
  };
}

/** Tiny helper component pattern: just render the JSON. */
export function jsonLdScript(obj) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(obj) },
  };
}
