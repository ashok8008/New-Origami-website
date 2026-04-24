import "./globals.css";
import { Outfit, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

// We use Google-served "Syne" as Cabinet Grotesk fallback (both are geometric display faces).
// Keeping the variable name --font-cabinet for consistency with the design guidelines.
import { Syne } from "next/font/google";
const cabinet = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cabinet",
  weight: ["500", "600", "700", "800"],
});

export const metadata = {
  title: "Origami Softwares — World-Class Digital Products",
  description:
    "We design and engineer web and mobile products with precision. On-Time. On-Budget. On-Point.",
  metadataBase: new URL("https://origami.dev"),
  openGraph: {
    title: "Origami Softwares",
    description:
      "World-class web and mobile product studio. Services, engineering, and IT staffing.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${cabinet.variable} ${jbMono.variable}`}>
      <body className="font-sans bg-ink-950 text-white grain">
        <SiteHeader />
        <main className="relative z-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
