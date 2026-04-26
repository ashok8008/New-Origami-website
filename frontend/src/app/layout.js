import "./globals.css";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

// Inter Tight-like: we use Inter as the body (broad, professional) and
// Instrument Serif for accent italic callouts to avoid the generic look.
const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

// For the display face we use a heavy geometric sans — Archivo Black via next/font.
import { Archivo } from "next/font/google";
const display = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["500", "600", "700", "800", "900"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata = {
  title: {
    default: "Origami — Mobile Apps, AI & Platforms for Culture-Forward Brands",
    template: "%s | Origami",
  },
  description:
    "Origami builds mobile apps, AI products, auction platforms and Class II / Class III real-money games for culture-forward brands — HipHopGrails, FanRush, Acquire.bet and more.",
  metadataBase: new URL("https://origami.dev"),
  openGraph: {
    title: "Origami",
    description:
      "Mobile apps, AI and platforms for culture-forward brands. Senior engineers who ship.",
    type: "website",
    url: "https://origami.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Origami",
    description:
      "Mobile apps, AI and platforms for culture-forward brands.",
  },
  alternates: { canonical: "/" },
};

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Origami",
  url: "https://origami.dev",
  logo: "https://origami.dev/brand/logo.svg",
  description:
    "Origami builds mobile apps, AI products, auctions and real-money gaming platforms for culture-forward brands.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "641 Lexington Avenue, 14th Floor",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10022",
    addressCountry: "US",
  },
  email: "hello@origami.dev",
  telephone: "+1-970-710-5120",
  sameAs: [],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable} ${mono.variable} ${serif.variable}`}
    >
      <body className="font-sans bg-paper text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
        <SiteHeader />
        <main className="relative z-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
