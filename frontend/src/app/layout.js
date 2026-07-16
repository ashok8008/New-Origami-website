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
import { localBusinessJsonLd } from "@/lib/seo";

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
      "Mobile App, AI & Platform Development Agency | Origami — New York",
    template: "%s | Origami — New York",
  },
  description:
    "Origami is a senior-only New York mobile app, AI and platform development agency. We ship iOS, Android, React Native, LLM, RAG, real-money gaming and auction platforms for culture-forward brands — HipHopGrails, PlaySQOR, FanRush, beRides, RealProfits and more.",
  keywords: [
    "mobile app development agency",
    "React Native development",
    "AI agency New York",
    "LLM development agency",
    "RAG development agency",
    "Class II gaming software",
    "real-money gaming development",
    "auction platform development",
    "Next.js development agency",
    "fintech app development",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.origami.dev"),
  openGraph: {
    title: "Origami — Mobile App, AI & Platform Development Agency, New York",
    description:
      "Senior engineers shipping mobile apps, AI products and platforms for culture-forward brands. New York + Bengaluru.",
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.origami.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Origami — Mobile App, AI & Platform Development Agency",
    description:
      "Senior-only NY agency. Mobile apps, AI, gaming, auctions, fintech.",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || undefined,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "38ed732ac406aec5",
    other: {
      "msvalidate.01":
        process.env.NEXT_PUBLIC_BING_VERIFICATION ||
        "13C3941F1B447AC0B3166A42BB249137",
      "p:domain_verify":
        process.env.NEXT_PUBLIC_PINTEREST_VERIFICATION || undefined,
      "naver-site-verification":
        process.env.NEXT_PUBLIC_NAVER_VERIFICATION || undefined,
      "facebook-domain-verification":
        process.env.NEXT_PUBLIC_FACEBOOK_VERIFICATION || undefined,
      "baidu-site-verification":
        process.env.NEXT_PUBLIC_BAIDU_VERIFICATION || undefined,
    },
  },
  other: {
    "ai-content-declaration": "human-authored",
  },
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.origami.dev";

const ORG_JSONLD = localBusinessJsonLd();

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
