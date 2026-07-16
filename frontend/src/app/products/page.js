import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { PRODUCTS } from "@/lib/content";

export const metadata = {
  title: "Products — Origami-built platforms you can deploy",
  description:
    "Productised Origami platforms — starting with Document Intelligence, our sovereign, cited, cost-transparent RAG platform for enterprises in legal, banking, insurance and healthcare.",
  alternates: { canonical: "/products" },
  keywords: [
    "Origami products",
    "enterprise AI products",
    "document intelligence platform",
    "sovereign AI",
    "cited AI",
    "cost-transparent AI",
    "productised RAG",
  ],
};

export default function ProductsIndex() {
  return (
    <div data-testid="products-index">
      <section className="relative pt-36 md:pt-44 pb-20 border-b border-ink-line overflow-hidden bg-paper">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(232, 56, 44, 0.35) 1.1px, transparent 1.1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-5 flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5" /> /// Origami Products
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[7.5rem] font-black leading-[0.92] tracking-tightest max-w-5xl">
            Not just an agency —<br />
            <span className="text-signal">a product studio.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
            Origami builds its own products in the categories we know deeply. Each one is deployed in production inside real enterprises. Available as licensed, single-tenant deployments.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-ink-line bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 space-y-8">
          {PRODUCTS.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-start p-8 border border-ink-line hover:border-signal transition-colors"
              data-testid={`product-card-${p.slug}`}
            >
              <div className="md:col-span-3">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
                  Product · Live in production
                </div>
                <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
                  {p.tagline}
                </div>
              </div>
              <div className="md:col-span-8">
                <h2 className="font-display text-3xl md:text-5xl font-black tracking-tightest leading-[1.05] group-hover:text-signal transition-colors">
                  {p.name}
                </h2>
                <p className="mt-4 font-display text-lg md:text-xl font-bold tracking-tight text-ink">
                  {p.positioning}
                </p>
                <p className="mt-3 text-ink-soft max-w-2xl leading-relaxed">
                  {p.hero}
                </p>
              </div>
              <div className="md:col-span-1 md:flex md:justify-end md:items-start">
                <ArrowUpRight className="w-6 h-6 text-ink-muted group-hover:text-signal group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
