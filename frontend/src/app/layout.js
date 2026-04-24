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
  title: "Origami — Digital Platforms for Hip-Hop, Gaming & Cultural Icons",
  description:
    "From auctions and fan drops to Class II & Class III real-money games, Origami builds the technology behind culture-forward brands.",
  metadataBase: new URL("https://origami.dev"),
  openGraph: {
    title: "Origami",
    description:
      "We build what culture runs on. Digital platforms for hip-hop, gaming and cultural icons.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable} ${mono.variable} ${serif.variable}`}
    >
      <body className="font-sans bg-paper text-ink antialiased">
        <SiteHeader />
        <main className="relative z-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
