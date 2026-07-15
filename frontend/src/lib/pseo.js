// =====================================================================
// PSEO — Cities, Hire pages, Guides, Glossary, AI × Industry, Compares.
// This module is the source-of-truth for all programmatic-SEO pages.
// Aim: broaden organic keyword coverage from ~40 to 2,000+.
// =====================================================================

export const CITIES = [
  // US
  { slug: "new-york", name: "New York", region: "New York, NY", country: "United States", countryCode: "US", isHQ: true, blurb: "our HQ" },
  { slug: "los-angeles", name: "Los Angeles", region: "Los Angeles, CA", country: "United States", countryCode: "US" },
  { slug: "san-francisco", name: "San Francisco", region: "San Francisco Bay Area, CA", country: "United States", countryCode: "US" },
  { slug: "chicago", name: "Chicago", region: "Chicago, IL", country: "United States", countryCode: "US" },
  { slug: "miami", name: "Miami", region: "Miami, FL", country: "United States", countryCode: "US" },
  { slug: "austin", name: "Austin", region: "Austin, TX", country: "United States", countryCode: "US" },
  { slug: "boston", name: "Boston", region: "Boston, MA", country: "United States", countryCode: "US" },
  { slug: "seattle", name: "Seattle", region: "Seattle, WA", country: "United States", countryCode: "US" },
  { slug: "atlanta", name: "Atlanta", region: "Atlanta, GA", country: "United States", countryCode: "US" },
  { slug: "nashville", name: "Nashville", region: "Nashville, TN", country: "United States", countryCode: "US" },
  { slug: "denver", name: "Denver", region: "Denver, CO", country: "United States", countryCode: "US" },
  { slug: "dallas", name: "Dallas", region: "Dallas, TX", country: "United States", countryCode: "US" },
  { slug: "houston", name: "Houston", region: "Houston, TX", country: "United States", countryCode: "US" },
  { slug: "washington-dc", name: "Washington, DC", region: "Washington, DC", country: "United States", countryCode: "US" },
  { slug: "las-vegas", name: "Las Vegas", region: "Las Vegas, NV", country: "United States", countryCode: "US" },
  // Global
  { slug: "london", name: "London", region: "London, UK", country: "United Kingdom", countryCode: "GB" },
  { slug: "toronto", name: "Toronto", region: "Toronto, ON", country: "Canada", countryCode: "CA" },
  { slug: "dubai", name: "Dubai", region: "Dubai, UAE", country: "United Arab Emirates", countryCode: "AE" },
  { slug: "singapore", name: "Singapore", region: "Singapore", country: "Singapore", countryCode: "SG" },
  { slug: "bengaluru", name: "Bengaluru", region: "Bengaluru, KA", country: "India", countryCode: "IN", isDevCentre: true, blurb: "our dev centre" },
];

export function getCity(slug) {
  return CITIES.find((c) => c.slug === slug) || null;
}

// Tech-hiring PSEO. slug pattern: {stack-slug}-developers-in-{city-slug}
// Rendered by /app/hire/[slug]/page.js
export function buildHirePages(stacks) {
  const uniqueStacks = Array.from(new Map(stacks.map((s) => [s.slug, s])).values());
  const out = [];
  for (const stack of uniqueStacks) {
    for (const city of CITIES) {
      out.push({
        slug: `${stack.slug}-developers-in-${city.slug}`,
        stackSlug: stack.slug,
        stackName: stack.name,
        cityName: city.name,
        citySlug: city.slug,
        region: city.region,
        title: `Hire ${stack.name} Developers in ${city.name}`,
        description: `Hire senior ${stack.name} developers in ${city.name}. Origami is a New York-based product agency shipping ${stack.category?.toLowerCase() || "software"} for culture-forward brands, with senior engineers available for ${city.region} clients on dedicated, T&M or build-your-team models.`,
      });
    }
  }
  return out;
}

// City-topic PSEO. Renders both service and industry landing pages under a city.
// Route: /app/locations/[city]/[topic]/page.js
export function buildCityTopicPages(services, industries) {
  const rows = [];
  for (const city of CITIES) {
    for (const s of services) {
      rows.push({
        citySlug: city.slug,
        cityName: city.name,
        region: city.region,
        topicSlug: s.slug,
        topicType: "service",
        topicName: s.title,
        topicShort: s.short,
        topicDesc: s.desc,
        title: `${s.title} in ${city.name}`,
        description: `${s.title} for ${city.name} businesses. ${s.desc} Senior engineers, ${city.region} time-zone alignment, culture-forward product DNA.`,
      });
    }
    for (const ind of industries) {
      rows.push({
        citySlug: city.slug,
        cityName: city.name,
        region: city.region,
        topicSlug: ind.slug,
        topicType: "industry",
        topicName: ind.name,
        topicShort: ind.note,
        topicDesc: ind.blurb,
        title: `${ind.name} Development in ${city.name}`,
        description: `${ind.name} product engineering for ${city.name}-based operators. ${ind.blurb}`,
      });
    }
  }
  return rows;
}

// AI use-case × industry PSEO.
// Route: /app/ai-solutions/[slug]/page.js
export function buildAiSolutionPages(useCases, industries) {
  const rows = [];
  for (const uc of useCases) {
    for (const ind of industries) {
      rows.push({
        slug: `${uc.slug}-for-${ind.slug}`,
        useCaseSlug: uc.slug,
        useCaseTitle: uc.title,
        useCaseText: uc.text,
        industrySlug: ind.slug,
        industryName: ind.name,
        industryBlurb: ind.blurb,
        title: `${uc.title} for ${ind.name}`,
        description: `${uc.title} for ${ind.name.toLowerCase()}. ${uc.text} Applied to ${ind.blurb.toLowerCase()}`,
      });
    }
  }
  return rows;
}

// ---------------------------------------------------------------------
// GUIDES — long-form how-to & explainer content (40 slugs)
// Route: /app/guides/[slug]/page.js
// ---------------------------------------------------------------------
export const GUIDES = [
  { slug: "how-to-build-a-rag-application", title: "How to build a RAG application in 2026", tag: "AI", read: "12 min", excerpt: "The end-to-end guide to retrieval-augmented generation — chunking, embeddings, hybrid search, reranking, evals." },
  { slug: "choose-react-native-vs-flutter", title: "How to choose between React Native and Flutter", tag: "Mobile", read: "9 min", excerpt: "A practical framework for picking your cross-platform mobile stack in 2026." },
  { slug: "hire-mobile-app-developers", title: "How to hire mobile app developers (2026 guide)", tag: "Hiring", read: "10 min", excerpt: "What to screen for, red flags, and how to structure a senior-only engagement." },
  { slug: "class-ii-vs-class-iii-gaming", title: "Class II vs Class III gaming — a plain-language explainer", tag: "Gaming", read: "8 min", excerpt: "Server-drawn bingo, RNG, GLI standards and what tribal vs commercial operators need." },
  { slug: "build-an-auction-platform", title: "How to build an auction platform from scratch", tag: "Auctions", read: "14 min", excerpt: "Anti-snipe, soft-close, proxy bidding, escrow, KYC and live-stream — the full auction engine playbook." },
  { slug: "llm-observability-in-production", title: "LLM observability in production", tag: "AI", read: "11 min", excerpt: "Tracing, evals, token budgets, cost ceilings and graceful degradation for LLM apps behind real logins." },
  { slug: "next-js-14-app-router-in-production", title: "Next.js 14 App Router in production", tag: "Web", read: "13 min", excerpt: "Server components, edge runtimes, ISR, and the mistakes teams make on their first App Router site." },
  { slug: "designing-agentic-workflows", title: "Designing agentic LLM workflows", tag: "AI", read: "11 min", excerpt: "Tool-calling, retries, budgets, eval harnesses, and where agent designs commonly fail." },
  { slug: "programmatic-seo-for-b2b", title: "Programmatic SEO for B2B — a real playbook", tag: "Growth", read: "10 min", excerpt: "How to scale from 40 to 2,000+ keywords without publishing junk." },
  { slug: "kyc-aml-for-fintech-apps", title: "KYC / AML for consumer fintech apps", tag: "Fintech", read: "9 min", excerpt: "How to layer identity, sanctions and risk without wrecking activation." },
  { slug: "postgres-vs-mongodb-2026", title: "Postgres vs MongoDB in 2026 — an engineering POV", tag: "Data", read: "8 min", excerpt: "When to reach for Mongo, and why we still start almost every project on Postgres." },
  { slug: "server-authoritative-bidding", title: "Building a server-authoritative bidding engine", tag: "Auctions", read: "10 min", excerpt: "Latency, fairness, anti-snipe, tie-breaking and why the client is never the boss." },
  { slug: "mobile-app-performance-checklist", title: "Mobile app performance checklist for 2026", tag: "Mobile", read: "9 min", excerpt: "Cold-start budgets, 60fps lists, Hermes, JSC, and the metrics that actually predict retention." },
  { slug: "chatgpt-seo-and-ai-visibility", title: "ChatGPT SEO — how to become the answer AI cites", tag: "Growth", read: "12 min", excerpt: "llms.txt, ai.txt, JSON-LD, entity SEO, and how to earn citations from ChatGPT, Perplexity and Google AI Overviews." },
  { slug: "prompt-caching-and-cost-control", title: "Prompt caching and LLM cost control", tag: "AI", read: "9 min", excerpt: "Anthropic prompt caching, OpenAI cached prompts, and the cost-per-request tricks that keep AI features profitable." },
  { slug: "voice-agents-with-openai-realtime", title: "Voice agents with OpenAI Realtime", tag: "AI", read: "11 min", excerpt: "Low-latency turn-taking, barge-in, function-calling and telephony bridges for real voice AI." },
  { slug: "cross-border-payouts-for-creator-apps", title: "Cross-border payouts for creator + fan apps", tag: "Fintech", read: "10 min", excerpt: "Stripe Connect vs Wise vs Airwallex — routing payouts to global creators without wrecking margin." },
  { slug: "content-moderation-with-llms", title: "Content moderation with LLMs — what actually works", tag: "AI", read: "9 min", excerpt: "Where classical ML wins, where LLMs shine, and how to layer them without losing recall on edge cases." },
  { slug: "webrtc-live-streaming-for-auctions", title: "WebRTC live-streaming for auctions", tag: "Auctions", read: "11 min", excerpt: "Sub-second latency, phone bidders, auctioneer paddles and the actual protocol choices behind live sales." },
  { slug: "react-native-vs-native", title: "React Native vs native — the honest 2026 tradeoff", tag: "Mobile", read: "8 min", excerpt: "When to reach for Swift/Kotlin, when RN's ecosystem outperforms native, and how to hedge." },
  { slug: "pgvector-vs-pinecone", title: "pgvector vs Pinecone — vector search in 2026", tag: "AI", read: "9 min", excerpt: "Cost, latency, filtering and the reasons most teams should start on pgvector." },
  { slug: "header-bidding-explained", title: "Header bidding, explained plainly", tag: "AdTech", read: "8 min", excerpt: "Prebid, wrapper tags, SPO, and why publishers reach for header bidding over waterfall." },
  { slug: "class-ii-bingo-server-draw", title: "How server-drawn Class II bingo actually works", tag: "Gaming", read: "10 min", excerpt: "Pattern determination, draw servers, RGS, and the compliance layer around tribal Class II gaming." },
  { slug: "gli-19-compliance-checklist", title: "GLI-19 compliance checklist for RMG operators", tag: "Gaming", read: "9 min", excerpt: "What Gaming Laboratories International tests for, and how to build so audits are boring." },
  { slug: "expo-eas-in-production", title: "Expo + EAS in production", tag: "Mobile", read: "9 min", excerpt: "Managed workflow at scale — updates, credentials, submissions, and where you'll eventually eject." },
  { slug: "swiftui-in-production", title: "SwiftUI in production — 2026 edition", tag: "Mobile", read: "10 min", excerpt: "Widgets, Live Activities, StoreKit 2, and where UIKit still wins." },
  { slug: "jetpack-compose-in-production", title: "Jetpack Compose in production", tag: "Mobile", read: "10 min", excerpt: "Modern Android UI at scale, performance rules, and Compose-for-multiplatform in real projects." },
  { slug: "shipping-b2b-onboarding", title: "Shipping B2B SaaS onboarding that converts", tag: "Growth", read: "8 min", excerpt: "Time-to-value, empty states, and the onboarding flows we've measured across dozens of launches." },
  { slug: "data-warehouse-for-consumer-apps", title: "A pragmatic data warehouse for consumer apps", tag: "Data", read: "10 min", excerpt: "Segment or Rudderstack → Snowflake / BigQuery, dbt for modeling, and the dashboards you actually need on day one." },
  { slug: "shipping-mobile-releases-weekly", title: "Shipping mobile releases weekly without burning out", tag: "Mobile", read: "9 min", excerpt: "Trains, phased rollouts, TestFlight, Play internal — how modern mobile shops ship every 7 days." },
  { slug: "designing-for-tribal-casino-players", title: "Designing for tribal casino players", tag: "Gaming", read: "9 min", excerpt: "Accessibility, hand economics, session length — the design POV we bring to Class II floors." },
  { slug: "trust-and-safety-for-marketplaces", title: "Trust & safety for marketplaces", tag: "Product", read: "10 min", excerpt: "Fraud, identity, disputes, refunds — the guardrails every consumer marketplace eventually builds." },
  { slug: "product-analytics-for-mobile", title: "Product analytics stack for mobile apps in 2026", tag: "Data", read: "9 min", excerpt: "Amplitude, Mixpanel, PostHog, RudderStack — what to pick, and how to avoid analytics debt." },
  { slug: "shipping-multi-tenant-saas", title: "Shipping multi-tenant SaaS on Postgres", tag: "Web", read: "10 min", excerpt: "RLS, schema-per-tenant, role explosions, and cost management as you grow." },
  { slug: "hipaa-compliant-app-development", title: "HIPAA-compliant app development, without the theatre", tag: "Health", read: "10 min", excerpt: "BAAs, encryption at rest and in transit, audit trails, and where the compliance is actually earned." },
  { slug: "structured-outputs-for-llms", title: "Structured outputs for LLM apps", tag: "AI", read: "8 min", excerpt: "JSON mode, function calls, grammars — and how to get 100% valid outputs without brittle prompts." },
  { slug: "fraud-in-real-money-gaming", title: "Fraud patterns in real-money gaming", tag: "Gaming", read: "9 min", excerpt: "Bonus abuse, collusion, chip-dumping, mule accounts — and the risk engine that catches them." },
  { slug: "cursor-based-pagination-for-feeds", title: "Cursor-based pagination for social feeds", tag: "Web", read: "7 min", excerpt: "Why offsets break at scale, and the cursor patterns that don't." },
  { slug: "cost-per-inference-for-llm-features", title: "Cost per inference for LLM features", tag: "AI", read: "8 min", excerpt: "Modeling the actual unit economics of LLM features — cache hits, routing, and cheap-shot fallbacks." },
  { slug: "hire-ai-developers", title: "How to hire AI developers who ship", tag: "Hiring", read: "10 min", excerpt: "What to screen for beyond 'has used ChatGPT' — and the take-homes that actually predict output." },
];

export function getGuide(slug) {
  return GUIDES.find((g) => g.slug === slug) || null;
}

// ---------------------------------------------------------------------
// GLOSSARY — short definitional pages (60 terms) for AI answer engines
// Route: /app/glossary/[slug]/page.js
// ---------------------------------------------------------------------
export const GLOSSARY = [
  { slug: "rag", term: "RAG (Retrieval-Augmented Generation)", short: "RAG is an LLM architecture where the model retrieves relevant documents from an external index before generating an answer.", body: "Retrieval-augmented generation (RAG) is a pattern where an LLM is grounded in an external knowledge base at inference time. The system embeds a user query, retrieves the top-k most relevant chunks from a vector index, and injects them into the prompt so the LLM's answer is grounded in real content rather than parametric memory. RAG dramatically reduces hallucination and enables private-data question-answering without fine-tuning." },
  { slug: "llm", term: "LLM (Large Language Model)", short: "An LLM is a neural network trained on large text corpora to predict tokens and generate coherent language.", body: "Large language models like GPT-5, Claude Sonnet 4.5 and Gemini 3 are transformer-based models trained on massive text corpora. In production they are wrapped with retrieval, tool-calling, structured outputs, evals and cost controls to build reliable product features." },
  { slug: "gli-19", term: "GLI-19", short: "GLI-19 is a Gaming Laboratories International standard for interactive gaming systems used across regulated real-money gaming.", body: "GLI-19 is one of the most widely adopted technical standards for online real-money gaming systems, covering RNG certification, geolocation, KYC, responsible gaming controls, transaction integrity and audit trail requirements. Operators building on regulated markets typically design to GLI-19 from day one." },
  { slug: "class-ii-gaming", term: "Class II gaming", short: "Class II gaming refers to bingo and pull-tab games where outcomes are determined by a shared central bingo draw.", body: "Under the U.S. Indian Gaming Regulatory Act (IGRA), Class II gaming includes bingo and games similar to bingo. Modern Class II slot-style cabinets are electronic bingo terminals that display bingo outcomes as slot-like reels, with the actual game math resolved by a server-side bingo draw shared across a linked player pool." },
  { slug: "class-iii-gaming", term: "Class III gaming", short: "Class III gaming covers casino-style games such as slots, blackjack and roulette where outcomes are generated by a certified RNG.", body: "Class III gaming under IGRA covers traditional casino games — slots, blackjack, roulette, craps, sportsbook. Outcomes are produced by a certified random number generator (RNG) and require a state-tribal compact to operate on tribal land." },
  { slug: "rng", term: "RNG (Random Number Generator)", short: "An RNG is a certified algorithm producing statistically random outcomes used to determine casino-style gaming results.", body: "In regulated real-money gaming, the RNG is a certified pseudo-random number generator (CSPRNG plus test suites) used to determine outcomes. RNGs are certified by test houses like GLI or BMM against standards including GLI-19 and DIEHARD-style statistical tests." },
  { slug: "server-drawn-bingo", term: "Server-drawn bingo", short: "Server-drawn bingo is a Class II gaming model where the central bingo server determines the draw and cabinets display the result.", body: "In server-drawn bingo, cabinets on the floor connect to a central bingo server. Each spin corresponds to a live bingo game — the server draws numbers, evaluates patterns for each player card, and returns the result to the cabinet which renders it as a slot-style outcome. This is what makes 'slot machines' on tribal Class II floors legal." },
  { slug: "kyc", term: "KYC (Know Your Customer)", short: "KYC is the process of verifying a user's identity — required by regulators for financial and gaming products.", body: "Know Your Customer refers to the identity-verification process financial and gaming operators must run before enabling deposits, withdrawals or trading. Modern KYC stacks combine document capture, liveness, sanctions screening, PEP checks and ongoing monitoring." },
  { slug: "aml", term: "AML (Anti-Money Laundering)", short: "AML is the set of controls that detect and prevent money laundering across financial products.", body: "AML programs include transaction monitoring, suspicious activity reporting (SARs), currency transaction reports (CTRs), sanctions screening and periodic reviews. AML is a first-class engineering concern for real-money gaming, fintech and crypto operators." },
  { slug: "anti-snipe", term: "Anti-snipe (auctions)", short: "Anti-snipe extends an auction's close time whenever a bid arrives near the end, preventing last-second wins.", body: "Anti-snipe (also called soft close) is the auction rule that any bid placed within N seconds of the scheduled end triggers an extension by another N seconds. It's standard on serious auction platforms because it eliminates the sniping tactic and ensures highest genuine willingness-to-pay wins." },
  { slug: "proxy-bidding", term: "Proxy bidding", short: "Proxy bidding lets a user set a maximum bid; the auction system incrementally bids on their behalf up to that limit.", body: "Proxy bidding is the mechanic where a bidder submits a maximum price and the auction engine automatically raises their bid by the minimum increment whenever they're outbid, up to their max. This lets bidders participate without watching the clock and keeps auctions from resolving at the visible current bid." },
  { slug: "header-bidding", term: "Header bidding", short: "Header bidding is a programmatic ad-tech technique where publishers request bids from multiple SSPs in parallel before the ad server call.", body: "Header bidding runs a client- or server-side auction across multiple supply-side platforms in parallel and passes the highest bid into the ad server as a competing line item. It replaced the waterfall model and materially raised publisher yields." },
  { slug: "rtb", term: "RTB (Real-Time Bidding)", short: "RTB is the programmatic ad auction that runs in milliseconds for every ad impression.", body: "Real-time bidding is the OpenRTB-standard protocol where demand-side platforms bid on each ad impression in real time. Auctions clear in under 200ms and are the foundation of modern programmatic advertising." },
  { slug: "cwv", term: "Core Web Vitals", short: "Core Web Vitals are Google's user-experience metrics: LCP, INP and CLS.", body: "Core Web Vitals (CWV) measure loading (Largest Contentful Paint), interactivity (Interaction to Next Paint, which replaced First Input Delay) and visual stability (Cumulative Layout Shift). They are a Google ranking signal and correlate with real conversion." },
  { slug: "pseo", term: "Programmatic SEO (PSEO)", short: "Programmatic SEO is the technique of generating a large number of unique, keyword-targeted pages from structured data.", body: "PSEO uses templates + a data source (services, industries, cities, comparisons) to generate hundreds or thousands of unique landing pages, each targeting a long-tail keyword. Done well, it captures high-intent long-tail traffic; done badly, it's doorway spam." },
  { slug: "e-e-a-t", term: "E-E-A-T", short: "E-E-A-T stands for Experience, Expertise, Authoritativeness and Trustworthiness — Google's quality framework.", body: "E-E-A-T is Google's quality-rater framework used to assess content. Since 2022 it explicitly includes 'Experience' — first-hand engagement with the topic — alongside Expertise, Authoritativeness and Trustworthiness." },
  { slug: "json-ld", term: "JSON-LD", short: "JSON-LD is the JSON-based schema.org format used to embed structured data in web pages for search and AI.", body: "JSON-LD (JSON for Linking Data) is the recommended format for structured data on the web. Google, Bing and most AI answer engines parse JSON-LD to understand entities, articles, FAQs, HowTos, breadcrumbs, businesses and more." },
  { slug: "sitemap", term: "XML Sitemap", short: "A sitemap is an XML file that lists a site's URLs so search engines can discover and crawl them.", body: "XML sitemaps tell search engines which URLs on a site to crawl and when they were last updated. Sitemap index files aggregate multiple sitemaps for large sites." },
  { slug: "indexnow", term: "IndexNow", short: "IndexNow is a push-notification protocol that lets sites instantly notify Microsoft Bing, Yandex and other engines about URL changes.", body: "IndexNow is an open protocol supported by Microsoft Bing, Yandex, Seznam.cz, Naver and Yep. Sites publish a key file and POST a list of changed URLs; participating engines pull and index the changes in near real-time." },
  { slug: "llms-txt", term: "llms.txt", short: "llms.txt is a proposed convention where sites publish a plain-text summary optimised for LLM consumption.", body: "llms.txt is an emerging convention (Anthropic-backed) where sites publish a markdown file at /llms.txt describing their content in an LLM-friendly way, with structured links to key pages. It complements robots.txt and sitemap.xml for AI answer engines." },
  { slug: "vector-database", term: "Vector database", short: "A vector database is a storage engine that indexes embeddings for similarity search.", body: "Vector databases index high-dimensional embedding vectors and expose approximate-nearest-neighbour search. Common choices in 2026: pgvector (Postgres extension), Pinecone, Weaviate, Qdrant, Milvus." },
  { slug: "embedding", term: "Embedding", short: "An embedding is a dense numerical vector representation of text (or image / audio) that captures semantic meaning.", body: "Embeddings are outputs of embedding models like OpenAI text-embedding-3, Voyage AI or Cohere Embed. Documents and queries are embedded into the same vector space so semantic similarity becomes a dot-product or cosine distance." },
  { slug: "fine-tuning", term: "Fine-tuning", short: "Fine-tuning adapts a pretrained LLM to a specific task or style by continuing training on a smaller labelled dataset.", body: "Fine-tuning updates the weights of a pretrained model using a targeted dataset. In 2026 the frontier fine-tuning options are LoRA / QLoRA adapters for open-weight models and provider-hosted fine-tuning for OpenAI and Google. RAG is usually a better first move than fine-tuning." },
  { slug: "agent", term: "AI agent", short: "An AI agent is an LLM system that can autonomously plan and execute multi-step tasks using tools.", body: "An AI agent wraps an LLM with a tool-use loop, memory and planning. The model decides which tool to call, executes it, ingests the result and decides the next action. Modern agent frameworks include LangGraph, Claude's tool-use API and OpenAI's Assistants." },
  { slug: "tool-calling", term: "Tool calling", short: "Tool calling is the LLM capability to invoke external functions in a structured, machine-parseable way.", body: "Tool calling (also called function calling) lets an LLM return a structured request to invoke a named tool with typed arguments, instead of freeform text. It's the foundation of agentic workflows." },
  { slug: "prompt-caching", term: "Prompt caching", short: "Prompt caching stores the prefix of a prompt at the provider so repeat requests skip recomputing it.", body: "Anthropic and OpenAI both offer prompt caching. Long system prompts, RAG context and tool definitions can be cached on the provider side, cutting cost and latency dramatically for repeated queries." },
  { slug: "expo", term: "Expo", short: "Expo is a framework and platform for React Native that handles builds, updates and native tooling.", body: "Expo provides the managed workflow, EAS Build, EAS Submit, EAS Update (OTA) and Expo Modules — a productive default for most React Native teams." },
  { slug: "eas-update", term: "EAS Update", short: "EAS Update is Expo's over-the-air update service for React Native apps.", body: "EAS Update replaces CodePush for Expo and bare React Native apps, letting teams ship JavaScript bundle updates without an App Store review — subject to store policies on what constitutes a native change." },
  { slug: "server-components", term: "React Server Components", short: "Server Components render on the server and stream to the client, reducing bundle size and enabling data access at render time.", body: "React Server Components (RSC) are React components that execute exclusively on the server. They can access databases, secrets and file systems directly. Next.js 14 App Router is the leading production RSC framework." },
  { slug: "isr", term: "Incremental Static Regeneration (ISR)", short: "ISR statically generates pages at build time and revalidates them on demand or on a schedule.", body: "ISR (in Next.js) lets you statically pre-render pages and revalidate them either after a set number of seconds or on-demand via API. It combines the speed of static with the freshness of SSR." },
  { slug: "edge-runtime", term: "Edge runtime", short: "Edge runtimes run code on globally distributed CDN nodes close to the user.", body: "Edge runtimes like Vercel Edge Functions, Cloudflare Workers and Fastly Compute@Edge execute JavaScript/WASM at CDN nodes. They cut latency but restrict Node.js APIs — designed for streaming, middleware and personalisation." },
  { slug: "pgvector", term: "pgvector", short: "pgvector is a Postgres extension that adds vector similarity search directly inside Postgres.", body: "pgvector adds VECTOR column types, cosine / L2 / inner-product distance operators and IVFFlat / HNSW indexes to Postgres. It lets teams keep vector search inside their transactional database instead of running a separate vector DB." },
  { slug: "rls", term: "Row-Level Security (RLS)", short: "RLS is a Postgres feature that filters rows returned to a query based on the current user or tenant.", body: "Row-Level Security policies enforce data isolation at the database layer. Multi-tenant SaaS apps often use RLS to guarantee tenants cannot see each other's data even if the app has a bug." },
  { slug: "hipaa", term: "HIPAA", short: "HIPAA is the U.S. federal law protecting sensitive patient health information.", body: "HIPAA (Health Insurance Portability and Accountability Act) sets rules for the handling of Protected Health Information (PHI). Modern HIPAA-compliant apps sign Business Associate Agreements (BAAs) with cloud providers and encrypt PHI at rest and in transit." },
  { slug: "pci-dss", term: "PCI DSS", short: "PCI DSS is the payment-card industry security standard that governs handling of credit-card data.", body: "PCI DSS defines twelve requirements for organisations that store, process or transmit cardholder data. Most consumer apps stay out of PCI scope entirely by using Stripe, Adyen or Braintrust to tokenize payments." },
  { slug: "stripe-connect", term: "Stripe Connect", short: "Stripe Connect is Stripe's platform product for splitting payments and paying out to third parties.", body: "Stripe Connect handles KYC, onboarding, split payments, chargeback flows and payouts for marketplaces and platforms. It's the default rail for creator, marketplace and fintech products that need to pay out to third-party sellers or creators." },
  { slug: "webrtc", term: "WebRTC", short: "WebRTC is a browser standard for peer-to-peer real-time audio, video and data.", body: "WebRTC underpins video chat, live streaming and voice AI in the browser. Sub-second latency, encrypted transport, works across NAT with STUN / TURN. Production WebRTC stacks usually pair it with SFUs like LiveKit, Mediasoup or Daily." },
  { slug: "livekit", term: "LiveKit", short: "LiveKit is an open-source WebRTC SFU used to build scalable real-time audio and video apps.", body: "LiveKit provides a WebRTC SFU (Selective Forwarding Unit), client SDKs and infrastructure for scalable real-time audio, video and voice-agent apps." },
  { slug: "otel", term: "OpenTelemetry (OTel)", short: "OpenTelemetry is the open standard for distributed tracing, metrics and logs.", body: "OpenTelemetry is a vendor-neutral standard for instrumentation. Traces, metrics and logs flow through OTel SDKs to backends like Datadog, Honeycomb, New Relic or open-source ClickHouse-based stacks." },
  { slug: "feature-flags", term: "Feature flags", short: "Feature flags are runtime switches that turn code paths on or off without a redeploy.", body: "Feature flags (LaunchDarkly, Statsig, ConfigCat, GrowthBook) let teams ship code decoupled from release, run experiments, and roll out safely to cohorts." },
  { slug: "seo", term: "SEO", short: "SEO is the practice of optimising a site to earn traffic from search engines.", body: "Search engine optimisation covers technical infrastructure (crawlability, indexing, sitemaps), on-page content (titles, headings, entities), off-page signals (backlinks) and increasingly AI-answer-engine visibility." },
  { slug: "gpt-5", term: "GPT-5", short: "GPT-5 is OpenAI's frontier large language model as of 2026.", body: "GPT-5 is OpenAI's flagship LLM with strong reasoning, tool use, structured outputs and multimodal support. In production teams pair it with retrieval, evals, prompt caching and cost ceilings." },
  { slug: "claude-sonnet-4-5", term: "Claude Sonnet 4.5", short: "Claude Sonnet 4.5 is Anthropic's mid-tier frontier model with strong tool use and long-context reasoning.", body: "Anthropic Claude Sonnet 4.5 is often the default for agentic, tool-using and long-context workflows in 2026. It supports prompt caching, computer use and structured outputs." },
  { slug: "gemini-3", term: "Gemini 3", short: "Gemini 3 is Google's frontier multimodal LLM family.", body: "Google Gemini 3 (Flash / Pro) offers frontier multimodal reasoning — text, image, audio, video — with long context and native grounding options via Google Search." },
  { slug: "nano-banana", term: "Nano Banana", short: "Nano Banana is Google's image-generation model available via the Gemini API.", body: "Gemini's image generation model, colloquially known as Nano Banana, supports high-quality text-to-image and image-editing tasks through the Gemini API." },
  { slug: "gptbot", term: "GPTBot", short: "GPTBot is the crawler OpenAI uses to gather content for training and search.", body: "GPTBot is documented at platform.openai.com/docs/gptbot. Sites can allow, restrict or disallow it via robots.txt. Origami permits GPTBot and other reputable AI crawlers." },
  { slug: "perplexitybot", term: "PerplexityBot", short: "PerplexityBot is the crawler Perplexity uses to build its answer index.", body: "PerplexityBot indexes public web content to power Perplexity's answer engine. Sites appear as citations under Perplexity answers." },
  { slug: "claudebot", term: "ClaudeBot", short: "ClaudeBot is Anthropic's crawler for content used in Claude's answers and training.", body: "ClaudeBot (and Claude-Web) crawls public web content to power Anthropic's Claude assistant. Sites can control access via robots.txt." },
  { slug: "google-extended", term: "Google-Extended", short: "Google-Extended is the robots.txt token Google uses to control content used for Bard / Gemini training.", body: "Google-Extended is a separate user-agent token that lets sites control whether their content is used to improve Google's generative AI models, independently of standard Googlebot crawling." },
  { slug: "opengraph", term: "OpenGraph", short: "OpenGraph is the meta-tag protocol used to control how a URL previews on social platforms.", body: "The OpenGraph protocol (og:title, og:description, og:image) controls link-preview cards on Facebook, LinkedIn, Slack, iMessage and most social platforms." },
  { slug: "schema-org", term: "Schema.org", short: "Schema.org is the shared vocabulary for structured data on the web.", body: "Schema.org is a collaborative vocabulary (Google, Microsoft, Yahoo, Yandex) for marking up entities like Organizations, Services, Articles, FAQs and HowTos, typically serialised as JSON-LD." },
  { slug: "webvitals", term: "Web Vitals", short: "Web Vitals is Google's initiative for measuring real-user page-experience metrics.", body: "Web Vitals bundles the Core Web Vitals (LCP, INP, CLS) with supplementary metrics like TTFB and FCP. Measured in the field via the Chrome User Experience Report (CrUX)." },
  { slug: "fastify", term: "Fastify", short: "Fastify is a high-performance Node.js web framework focused on speed and schema validation.", body: "Fastify is a modern Node.js framework with JSON-schema-based validation, plugin architecture and best-in-class throughput. A common alternative to Express and Nest for Node backends." },
  { slug: "nextjs-app-router", term: "Next.js App Router", short: "The App Router is Next.js's file-system-based routing and rendering system built on React Server Components.", body: "Next.js App Router (stable in Next 14) uses the /app directory, React Server Components, streaming, nested layouts and Server Actions. It's the recommended architecture for new Next.js apps." },
  { slug: "swiftui", term: "SwiftUI", short: "SwiftUI is Apple's declarative UI framework for building apps across all Apple platforms.", body: "SwiftUI is Apple's modern declarative UI framework, used to build iOS, iPadOS, macOS, watchOS, tvOS and visionOS apps from a single codebase. In 2026 it's the default choice for greenfield Apple platform apps." },
  { slug: "jetpack-compose", term: "Jetpack Compose", short: "Jetpack Compose is Google's declarative UI toolkit for building native Android apps.", body: "Jetpack Compose is the modern declarative UI framework for Android, replacing the XML view system. Compose Multiplatform extends it to iOS and desktop." },
  { slug: "class-iii-slots", term: "Class III slots", short: "Class III slots are traditional casino slot machines that use a certified RNG to determine outcomes.", body: "Class III slots are the RNG-driven cabinets found in commercial casinos and Class III tribal properties. Outcomes are resolved by a certified random number generator, not a bingo draw." },
  { slug: "dfs", term: "DFS (Daily Fantasy Sports)", short: "Daily Fantasy Sports are short-duration fantasy contests, typically lasting a single day's or week's games.", body: "DFS platforms let users draft rosters for a single day or week of games, entering paid contests with cash prizes. Regulated as games of skill in most U.S. states with state-by-state variations." },
  { slug: "sportsbook", term: "Sportsbook", short: "A sportsbook is a platform that accepts bets on sporting events at fixed odds.", body: "Sportsbooks operate fixed-odds and parlay markets on sports. Modern operators run cloud-native trading platforms with in-play trading, cash-out, bet builder and same-game parlays." },
  { slug: "in-play-betting", term: "In-play (live) betting", short: "In-play betting is placing wagers on a sporting event after it has started, with continuously updating odds.", body: "In-play (or live) betting requires low-latency feed ingestion, sub-second odds re-pricing, bet-placement latency budgets and dynamic market suspension. It's the highest-margin, most-technical part of sportsbook engineering." },
  { slug: "responsible-gaming", term: "Responsible gaming", short: "Responsible gaming is the set of tools and policies that help players stay in control and identify problem behaviour.", body: "Responsible gaming programs include deposit / loss / session limits, self-exclusion, cool-off periods, reality checks, problem-gambling signposting and cross-operator exclusion registries (e.g., GAMSTOP)." },
];

export function getGlossaryTerm(slug) {
  return GLOSSARY.find((g) => g.slug === slug) || null;
}
