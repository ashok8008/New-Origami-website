import "./globals.css";
import {
  Inter,
  JetBrains_Mono,
  Instrument_Serif,
  Archivo,
} from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PlausibleAnalytics from "@/components/PlausibleAnalytics";
import { GTMHead, GTMNoScript } from "@/components/GoogleTagManager";
import ClickTracker from "@/components/ClickTracker";

const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

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
    default:
      "Origami — Mobile Apps, AI & Platforms for Culture-Forward Brands",
    template: "%s | Origami",
  },
  description:
    "Origami builds mobile apps, AI products, fantasy & real-money gaming and fintech platforms for culture-forward brands — HipHopGrails, PlaySQOR, Acquire.bet, RealProfits, GetCashback and more.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://origami.dev"),
  openGraph: {
    title: "Origami",
    description:
      "Mobile apps, AI and platforms for culture-forward brands. Senior engineers who ship.",
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://origami.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Origami",
    description: "Mobile apps, AI and platforms for culture-forward brands.",
  },
  alternates: { canonical: "/" },
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://origami.dev";

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Origami",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo.svg`,
  description:
    "Origami builds mobile apps, AI products, fantasy & real-money gaming and fintech platforms for culture-forward brands.",
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
        <GTMNoScript />
        <PlausibleAnalytics />
        <GTMHead />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
        <SiteHeader />
        <main className="relative z-10">{children}</main>
        <SiteFooter />
        <ClickTracker />
      </body>
    </html>
  );
}
