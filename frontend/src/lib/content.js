// Centralized content / source-of-truth for the Origami site.
// Edit here and every page picks up the changes.

export const NAV = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
];

export const NAV_EXTRA = [
  { label: "AI", href: "/ai" },
  { label: "AI Development", href: "/ai-development-services" },
  { label: "Custom Software", href: "/custom-software-development" },
  { label: "Auctions", href: "/auctions" },
  { label: "Industries", href: "/industries" },
  { label: "Solutions", href: "/solutions" },
  { label: "Build with", href: "/build" },
  { label: "Compare", href: "/compare" },
  { label: "AI Solutions", href: "/ai-solutions" },
  { label: "Locations", href: "/locations" },
  { label: "Hire", href: "/hire" },
  { label: "Guides", href: "/guides" },
  { label: "Glossary", href: "/glossary" },
  { label: "Pricing", href: "/pricing" },
  { label: "Approach", href: "/approach" },
  { label: "Contact", href: "/contact" },
];

export const PRODUCTS = [
  {
    slug: "document-intelligence",
    name: "Document Intelligence",
    tagline: "Sovereign · Cited · Cost-transparent",
    positioning: "Your documents, turned into an expert you can prove.",
    hero:
      "Ask anything across your contracts, policies and regulations in plain language. Get a clear verdict, the exact source and page, and the precise cost — grounded only in your own documents, never invented.",
    status: "Live in production",
    keywords: [
      "document intelligence platform",
      "enterprise document AI",
      "sovereign AI for legal documents",
      "citation-based AI",
      "grounded RAG platform",
      "on-premise LLM for contracts",
      "private document Q&A",
      "cost-transparent AI",
      "single-tenant AI platform",
      "contract intelligence software",
      "policy compliance AI",
      "regulatory AI assistant",
      "enterprise RAG platform",
      "legal document AI",
      "banking document AI",
      "insurance document AI",
      "healthcare document AI",
      "audit-ready AI answers",
      "explainable AI for enterprises",
      "self-hosted AI knowledge base",
    ],
  },
];

export const CONTACT = {
  email: "hello@origami.dev",
  linkedin: "https://www.linkedin.com/company/origami-consulting-llc/",
  phones: [
    { label: "US", number: "+1 (970) 710 5120", href: "tel:+19707105120" },
    { label: "India", number: "+91 906 651 4212", href: "tel:+919066514212" },
  ],
  offices: [
    {
      label: "Head office — New York",
      lines: [
        "641 Lexington Avenue",
        "14th Floor",
        "New York, NY 10022, US",
      ],
    },
    {
      label: "Dev team — Bangalore",
      lines: [
        "Hustlehub Tech Park",
        "Somasundara palya Main Road, 27th Main Road",
        "Sector 2, HSR Layout",
        "Bengaluru, KA — 560102, India",
      ],
    },
  ],
};

export const HERO = {
  overline: "Apps, AI & Platforms for Culture-Forward Brands",
  titleLines: ["We build", "what culture", "runs on."],
  body:
    "Senior engineers shipping mobile apps, AI products, fantasy & real-money gaming and fintech platforms for repeat clients — from HipHopGrails to PlaySQOR.",
};

export const MARQUEE_WORDS = [
  "Mobile Apps",
  "iOS · Android",
  "React Native",
  "Flutter",
  "AI · LLM · RAG",
  "Fantasy Sports",
  "Class II / III Games",
  "Auctions",
  "Sotheby's of hip-hop",
  "Header Bidding",
  "RTB · Programmatic",
  "Premium Publishers",
  "Fintech",
  "Cashback · Rewards",
  "Repeat Clients",
];

// Client logos (wordmark SVGs served from /public/brand/clients/)
export const CLIENTS = [
  { name: "HipHopGrails", file: "hiphopgrails.svg", url: "https://hiphopgrails.com", width: 180 },
  { name: "beRides", file: "berides.svg", url: "https://betademo.berides.com", width: 160 },
  { name: "FanRush", file: "fanrush.svg", url: "https://fanrush.ai", width: 160 },
  { name: "PlaySQOR", file: "playsqor.svg", url: "https://playsqor.com", width: 160 },
  { name: "Acquire.bet", file: "acquire.svg", url: "https://acquire.bet", width: 160 },
  { name: "VideoShops", file: "videoshops.svg", url: "https://videoshops.com", width: 160 },
  { name: "RealProfits", file: "realprofits.svg", url: "https://realprofits.com", width: 170 },
  { name: "GetCashback", file: "getcashback.svg", url: "https://getcashback.com", width: 175 },
  { name: "OnlyBeaches", file: "onlybeaches.svg", url: "https://onlybeaches.com", width: 175 },
  { name: "Nick Cooper", file: "nickcooper.svg", url: "https://nickcooper.com", width: 160 },
  { name: "TrueWrld", file: "truewrld.svg", url: "https://truewrld.com", width: 140 },
  { name: "Wholosophy", file: "wholosophy.svg", url: "https://wholosophy.com", width: 160 },
];

export const SERVICES = [
  {
    code: "01",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    short: "Native, hybrid & cross-platform",
    desc:
      "iOS, Android, React Native and Flutter apps engineered for scale — from first wireframe to App Store launch and iteration.",
  },
  {
    code: "02",
    slug: "ai-and-llm-products",
    title: "AI & LLM Products",
    short: "LLM apps, RAG, agents",
    desc:
      "Production AI features built on OpenAI, Anthropic and Gemini — retrieval, agents, voice and vision grounded in your data.",
  },
  {
    code: "03",
    slug: "document-intelligence",
    title: "Document Intelligence",
    short: "Sovereign · Cited · Cost-transparent RAG",
    desc:
      "Turn your contracts, policies and regulations into an expert you can prove. Enterprise-grade RAG with page-level citations, single-tenant sovereign deployment, and a four-tier cost-transparent engine — an Origami product.",
    isProduct: true,
    productSlug: "document-intelligence",
  },
  {
    code: "04",
    slug: "auctions-and-fan-drops",
    title: "Auctions & Fan Drops",
    short: "Commerce for culture",
    desc:
      "End-to-end auction platforms, drop mechanics and fan-to-artist commerce — the stack behind HipHopGrails and the next wave of celebrity commerce.",
  },
  {
    code: "05",
    slug: "class-ii-and-class-iii-games",
    title: "Class II & Class III Games",
    short: "Real-money gaming",
    desc:
      "Real-money gaming platforms for tribal and commercial operators. Server-drawn bingo, Class III RNG, compliance, RGS and integrations.",
  },
  {
    code: "05",
    slug: "web-development",
    title: "Web Development",
    short: "Next.js, React, headless",
    desc:
      "Marketing sites, product surfaces and back-office consoles built with Next.js, React and a POV on performance and accessibility.",
  },
  {
    code: "06",
    slug: "design-and-brand",
    title: "Design & Brand",
    short: "Product, motion, systems",
    desc:
      "Product, interface and motion design for the artists, operators and brands our engineering serves.",
  },
  {
    code: "07",
    slug: "data-and-bi",
    title: "Data & BI",
    short: "Pipelines & dashboards",
    desc:
      "Analytics pipelines, revenue dashboards and player/fan telemetry that turn activity into decisions.",
  },
  {
    code: "08",
    slug: "dedicated-teams",
    title: "Dedicated Teams",
    short: "Staff augmentation",
    desc:
      "Senior engineers, designers and PMs on T&M, dedicated or build-your-team engagement models — 50–70% less than onshore.",
  },
];

export const SERVICE_DETAIL = {
  "mobile-app-development": {
    headline: "Mobile apps that become the business.",
    body:
      "We've shipped the iOS, Android and React Native apps that fan platforms, celebrity commerce, and real-money gaming run on every day. Senior engineers, design-led, performance-obsessed.",
    pills: ["iOS (Swift)", "Android (Kotlin)", "React Native", "Flutter", "Expo", "Offline-first"],
    bullets: [
      "App Store and Google Play launch, from first tap to 5★ reviews",
      "Native performance engineering — 60fps scroll, cold start under 1.5s",
      "Push, deep-linking, in-app purchases, subscriptions and paywalls",
      "CI/CD with EAS / Fastlane, staged rollouts and crash analytics",
      "Offline-first architectures with local-first sync",
      "Hardened security — certificate pinning, jailbreak detection, SSO",
    ],
    relatedWork: ["playsqor", "hiphopgrails", "videoshops", "truewrld"],
  },
  "ai-and-llm-products": {
    headline: "AI that actually ships.",
    body:
      "We build production LLM products — RAG pipelines, agentic workflows, voice and vision features — grounded in your data and shipped behind your login. Not demos, not chatbots.",
    pills: ["GPT-5", "Claude Sonnet 4.5", "Gemini 3", "RAG", "Agents", "Voice & Vision"],
    bullets: [
      "Retrieval-augmented generation over your internal knowledge",
      "Agentic workflows with tool-calling and deterministic evals",
      "Voice agents with OpenAI Realtime, ElevenLabs and Whisper",
      "Vision pipelines for OCR, moderation and product tagging",
      "LLM observability, token budgets and offline evals",
      "Compliance-aware prompting and PII redaction",
    ],
    relatedWork: ["acquire", "wholosophy", "realprofits"],
  },
  "auctions-and-fan-drops": {
    headline: "Auction houses, engineered.",
    body:
      "Sotheby's and Christie's shaped how the world buys art for three centuries. We build the digital-native successors — bidding floors, consignment ops, escrow and live event run-of-show — on Azure, .NET, Next.js and PostgreSQL. The HipHopGrails platform is our reference build.",
    pills: ["Bidding engine", "Live-stream auctions", "Drops", "Consignment", "Escrow + KYC", "Mobile-first"],
    bullets: [
      "Server-authoritative bidding with anti-snipe, soft-close, proxy and absentee bids",
      "Live-streamed auctions with auctioneer paddle, online + room + phone bidders",
      "Consignment workflows for labels, artists, estates and curators",
      "Escrow, KYC, AML and payouts (Stripe Connect, ACH, specialist art-lending rails)",
      "Operator tooling — catalog, photography pipeline, run-of-show, telemetry",
      "Reference stack: Microsoft Azure, .NET 8 microservices, Next.js, PostgreSQL",
    ],
    relatedWork: ["hiphopgrails", "nickcooper", "truewrld"],
  },
  "class-ii-and-class-iii-games": {
    headline: "Real-money gaming, engineered for operators.",
    body:
      "Server-drawn Class II bingo mechanics and Class III RNG platforms for tribal and commercial operators — with the compliance, RGS integrations and operator tooling modern gaming needs.",
    pills: ["Bingo-based", "RNG", "RGS", "GLI-aligned", "PAM integrations"],
    bullets: [
      "Server-drawn Class II bingo-based mechanics for tribal operators",
      "Class III RNG titles with third-party math studio integrations",
      "RGS, wallet, PAM, geolocation and responsible-gaming integrations",
      "Operator tooling — campaigns, jackpots, loyalty, telemetry",
    ],
    relatedWork: ["acquire", "playsqor"],
  },
  "web-development": {
    headline: "Fast, accessible, engineered for conversion.",
    body:
      "Next.js, React and headless CMS front-ends tied to your APIs and back-office — with performance budgets and accessibility built in, not bolted on.",
    pills: ["Next.js 14", "React 18", "TypeScript", "Headless CMS", "Edge runtimes"],
    bullets: [
      "Marketing sites with Core Web Vitals targets (LCP < 1.5s)",
      "Product surfaces — dashboards, consoles, admin",
      "Design systems and component libraries across teams",
      "Edge runtimes (Vercel, Cloudflare) and ISR at scale",
    ],
    relatedWork: ["wholosophy", "truewrld", "acquire", "realprofits", "onlybeaches", "getcashback"],
  },
  "design-and-brand": {
    headline: "Design that earns the user's next tap.",
    body:
      "Product, interface and motion design for the artists, operators and brands our engineering serves — informed by our own code, not handed over a wall.",
    pills: ["Product UX", "Motion", "Design systems", "Brand"],
    bullets: [
      "Product design — information architecture, flows, interaction",
      "Interface design with a POV on typography and motion",
      "Brand systems for culture-forward brands and artists",
      "Prototyping for validation before engineering spend",
    ],
    relatedWork: ["hiphopgrails", "truewrld", "onlybeaches"],
  },
  "data-and-bi": {
    headline: "Numbers your team can run the business on.",
    body:
      "Data warehouse design, pipelines, dashboards and player/fan telemetry — so the ops, finance and compliance teams stop arguing and start shipping.",
    pills: ["Warehouse", "Pipelines", "Dashboards", "Telemetry"],
    bullets: [
      "Data warehouse design (Snowflake, BigQuery, Postgres)",
      "Revenue, product and player telemetry dashboards",
      "Event tracking and instrumentation standards",
      "Lightweight ML where it actually moves the number",
    ],
    relatedWork: ["acquire", "realprofits", "getcashback"],
  },
  "dedicated-teams": {
    headline: "Senior teams that feel like your own.",
    body:
      "Time & Material, dedicated full-time engineers, or full build-your-team pods — 50–70% less than onshore, NDA standard, senior-only roster.",
    pills: ["T&M", "Dedicated", "Build Your Team", "NDA standard"],
    bullets: [
      "Time & Material — smaller jobs, smaller liability",
      "Dedicated full-time developers exclusive to your project",
      "Build Your Team — stand up an offshore delivery team",
      "Senior-only roster: 3+ years average experience",
    ],
    relatedWork: ["videoshops", "wholosophy"],
  },
};

export const APPROACH = [
  {
    n: "01",
    title: "Listen",
    text:
      "We start with the operator, the artist, the player. Every roadmap begins with a discovery sprint that maps goals, risks and opportunities in plain language.",
  },
  {
    n: "02",
    title: "Architect",
    text:
      "Clean service boundaries, pragmatic tech choices, and compliance mapped in — especially for Class II / III gaming, payments and regulated AI.",
  },
  {
    n: "03",
    title: "Ship",
    text:
      "Weekly demos in production-like environments. We favour small, senior teams that ship continuously and measure what they ship.",
  },
  {
    n: "04",
    title: "Scale",
    text:
      "Post-launch we stay close — observability, release engineering, incident response and iterative improvements that compound.",
  },
];

export const INDUSTRIES = [
  {
    slug: "hip-hop-and-music",
    name: "Hip-Hop & Music",
    note: "Fan commerce, drops, auctions",
    blurb:
      "From HipHopGrails auctions to fan-drop apps, we've built the commerce and community platforms artists and labels rely on.",
    services: ["mobile-app-development", "auctions-and-fan-drops", "design-and-brand"],
    clients: ["hiphopgrails"],
  },
  {
    slug: "real-money-gaming",
    name: "Real-Money Gaming & Fantasy",
    note: "Class II / III, fantasy, sportsbook",
    blurb:
      "Server-drawn Class II bingo, Class III RNG, daily fantasy and real-money wagering platforms — GLI-aligned, KYC and risk-engine ready.",
    services: ["class-ii-and-class-iii-games", "mobile-app-development", "data-and-bi"],
    clients: ["playsqor", "acquire"],
  },
  {
    slug: "celebrity-and-creator-economy",
    name: "Celebrity & Creator Economy",
    note: "Apps for athletes, artists, personalities",
    blurb:
      "We build direct-to-fan apps, commerce and community for athletes, recording artists and cultural personalities.",
    services: ["mobile-app-development", "web-development", "design-and-brand"],
    clients: ["nickcooper", "truewrld", "playsqor"],
  },
  {
    slug: "commerce-and-retail",
    name: "Commerce & Retail",
    note: "Video commerce, marketplaces, cashback",
    blurb:
      "Video shoppable commerce, marketplaces, storefronts and cashback platforms — with the logistics, payments and identity plumbing attached.",
    services: ["web-development", "mobile-app-development", "ai-and-llm-products"],
    clients: ["videoshops", "getcashback"],
  },
  {
    slug: "health-and-wellness",
    name: "Health & Wellness",
    note: "Mind, body, culture",
    blurb:
      "Wellness products that live where culture meets care — apps, content platforms and AI-powered coaching.",
    services: ["mobile-app-development", "ai-and-llm-products", "web-development"],
    clients: ["wholosophy"],
  },
  {
    slug: "fintech-and-payments",
    name: "Fintech & Payments",
    note: "Trading, cashback, KYC, payouts",
    blurb:
      "Retail trading, cashback, payment rails, KYC, escrow and payouts — the engine room beneath modern consumer fintech.",
    services: ["web-development", "mobile-app-development", "ai-and-llm-products", "data-and-bi"],
    clients: ["realprofits", "getcashback"],
  },
  {
    slug: "travel-and-lifestyle",
    name: "Travel & Lifestyle",
    note: "Discovery, booking, content",
    blurb:
      "Travel and lifestyle products built around discovery, content and AI-personalised planning — designed for the way people actually plan trips.",
    services: ["web-development", "design-and-brand", "ai-and-llm-products", "mobile-app-development"],
    clients: ["onlybeaches"],
  },
  {
    slug: "automotive-and-aftermarket",
    name: "Automotive & Aftermarket",
    note: "Marketplaces, builds, parts, community",
    blurb:
      "Vehicle marketplaces, aftermarket parts catalogues, build journals, service-pro hire layers and enthusiast communities — engineered for high-media, high-engagement automotive culture brands.",
    services: ["web-development", "mobile-app-development", "design-and-brand", "dedicated-teams"],
    clients: ["berides"],
  },
  {
    slug: "martech-and-creator-economy",
    name: "MarTech & Creator Economy",
    note: "Acquisition, attribution, payouts",
    blurb:
      "AI-powered customer-acquisition engines, creator-network platforms, performance attribution and multi-currency payout rails — built for the brands and operators powering creator-led marketing at scale.",
    services: ["ai-and-llm-products", "web-development", "data-and-bi", "dedicated-teams"],
    clients: ["fanrush"],
  },
];

// Repeat-client case studies
export const PROJECTS = [
  {
    slug: "hiphopgrails",
    name: "HipHopGrails",
    tag: "Hip-Hop · Auctions",
    url: "https://hiphopgrails.com",
    logo: "hiphopgrails.svg",
    oneLiner: "The flagship auction destination for hip-hop memorabilia and celebrity drops — engineered on Azure, .NET, Next.js and PostgreSQL.",
    summary:
      "HipHopGrails is the breakout auction platform for hip-hop culture — the first destination of its kind, often described as the Sotheby's of the streets. We built it end-to-end on a Microsoft Azure cloud, with a .NET microservices core, a Next.js front end and a PostgreSQL data layer. From the bidding engine to consignment workflows, identity, escrow and live event run-of-show, every layer is ours.",
    role: ["Product strategy", "Auction platform", ".NET microservices", "Next.js front end", "Native iOS + Android", "Ops + run-of-show tooling"],
    stack: [".NET 8", "Next.js", "React Native", "PostgreSQL", "Azure App Service", "Azure SignalR", "Stripe"],
    metrics: [
      ["Cloud", "Microsoft Azure"],
      ["Backend", ".NET microservices"],
      ["Database", "PostgreSQL"],
      ["Front end", "Next.js + React Native"],
      ["Surface", "Web · iOS · Android"],
      ["Verticals", "Music · fashion · culture"],
    ],
    highlights: [
      "Bidding engine with anti-snipe, soft-close and live-event extensions — built on Azure SignalR for sub-100ms updates at scale",
      "Consignment and seller flows for labels, artists, curators and estates",
      "Escrow, KYC, AML and payouts — Stripe + specialist rails for high-value lots",
      "Operator tooling for event run-of-show, inventory, moderation and live drops",
      "Native iOS + Android apps with push, deep-linking and offline cart state",
      "Compliance, audit trails and dispute workflows fit for high-value collectibles",
    ],
    story: [
      { type: "h2", text: "The brief" },
      { type: "p", text: "HipHopGrails came to us with a category-defining ambition: build the auction destination for hip-hop culture — the Sotheby's of the streets — and build it as a defensible, regulated, high-trust platform from day one. The market was hungry but fragmented: artist memorabilia was sitting on Instagram comments and DMs, celebrity drops were leaking on resale sites at a fraction of their value, and consignors had no professional venue that understood the culture." },
      { type: "p", text: "The brief was end-to-end. We owned product strategy, brand, engineering, mobile, ops tooling and the compliance posture — and we own it still. This is a flagship engagement for us, the platform we point to when people ask what we can do." },
      { type: "h2", text: "Architecture & engineering choices" },
      { type: "p", text: "We chose .NET 8 microservices on Microsoft Azure, with PostgreSQL as the system of record, Next.js for the web surface and React Native for iOS + Android. The Azure choice was deliberate: Azure SignalR Service handles 100k+ concurrent WebSocket connections on live-auction nights without us operating a single bidding server ourselves, and Azure AD B2C gave us per-jurisdiction identity with KYC-bound profiles out of the box." },
      { type: "p", text: "The bidding engine is the heart of the platform. It is server-authoritative, sub-100ms broadcast, and writes every bid to an immutable audit log that survives subpoena. Anti-snipe extensions, soft-close logic, reserve handling and live-event run-of-show are all encoded as a typed state machine, not a CRUD model — when a $40k Travis Scott McLaren bid lands in the last 12 seconds of an auction, the platform does the right thing without a human in the loop." },
      { type: "h2", text: "What we shipped" },
      { type: "ul", items: [
        "Bidding engine on Azure SignalR with anti-snipe, soft-close and live-event extensions",
        "Consignment, condition reports and seller flows for labels, artists, curators and estates",
        "Escrow, KYC, AML and high-value-lot payout rails via Stripe + specialist partners",
        "Operator console for run-of-show, inventory, moderation, dispute and live drops",
        "Native iOS + Android apps with push, biometric auth, deep-linking and offline cart",
        "Audit trails, compliance posture and dispute workflows for high-value collectibles",
      ]},
      { type: "h2", text: "Where it stands now" },
      { type: "p", text: "HipHopGrails is live, has run dozens of marquee auctions, and is the engagement we've extended the most. We continue to operate the platform alongside the HipHopGrails team — every event, every drop, every regulatory check-in. The architecture has not had to be rewritten once in three years, which is the highest compliment a platform engineer can pay another platform engineer." },
    ],
    repeat: true,
  },
  {
    slug: "berides",
    name: "beRides",
    tag: "Commerce · Community · Automotive",
    url: "https://betademo.berides.com",
    logo: "berides.svg",
    oneLiner: "The marketplace for motor-enthusiast accessorizers — vehicles, parts, builds, content and community in one platform.",
    summary:
      "beRides is the breakout commerce + community platform for aftermarket-car culture — think Liberty Walk meets Carbonized Garage meets Reddit, in one premium product. We are building it end-to-end with the beRides team: vehicle marketplace, parts catalogue, build journals, an editorial studio (bR-Studio), a service-pro hire layer, and full community surfaces (groups, clubs, forums, events). A serious, multi-year platform engagement.",
    role: [
      "Product strategy",
      "Marketplace + listings engine",
      "bR-Studio content CMS",
      "Hire-a-pro service layer",
      "Community (clubs, groups, forums, events)",
      "Identity + multi-account switching",
      "Brand + design system",
    ],
    stack: ["Next.js 14 App Router", "Node", "PostgreSQL", "Azure Blob Storage", "Stripe", "Algolia"],
    metrics: [
      ["Surface", "Web · mobile (in roadmap)"],
      ["Scope", "Marketplace + content + community"],
      ["Status", "In development · beta live"],
      ["Cloud", "Azure"],
      ["Delivery", "End-to-end, multi-year"],
    ],
    highlights: [
      "Vehicle marketplace with rich condition + modification metadata for Liberty Walk-style builds",
      "bR-Studio — a creator studio for Articles, Stories and bR Flick (short video) inside the platform",
      "Hire layer for Performance, Customization, Service, Detailing and Restoration professionals",
      "Community surfaces: Clubs, Groups, Forums, Events — with role-based moderation",
      "My Garage — saved builds, saved listings, multi-collection organization",
      "Multi-account switching, role-based auth and creator-tier permissions",
    ],
    story: [
      { type: "h2", text: "The brief" },
      { type: "p", text: "beRides is one of those rare projects where the founders refused to compromise on scope. They didn't want a vehicle classifieds site. They didn't want a forum. They didn't want a YouTube clone. They wanted all of it — the marketplace, the content layer, the community surfaces, the service-pro hire layer, the build-journal tooling — as one coherent platform for the aftermarket-car culture they grew up in. Liberty Walk-style widebody builds, RWB Porsches, Hakosuka GT-R restorations, the people who service them, the clubs that gather around them." },
      { type: "p", text: "We've been the lead engineering partner from day one, and the project is still in active development — the beta is live at betademo.berides.com and the production launch is around the corner." },
      { type: "h2", text: "Architecture & engineering choices" },
      { type: "p", text: "Built on Next.js 14 App Router for the web surface, with a Node + PostgreSQL backend and Azure Blob Storage for the (very) heavy image and video pipeline — Liberty Walk-style builds generate gigabytes of media per listing. Algolia powers cross-domain search (vehicles, parts, builds, articles, professionals, clubs) because beRides search is genuinely multi-typed in a way most commerce search isn't." },
      { type: "p", text: "The hardest architectural call was unifying five different content models — vehicle listings, story articles, bR Flick short-form video, build journals and forum threads — under one identity, one moderation surface and one notification layer, without ending up with a mess. We solved it with a shared 'content node' primitive that every surface composes against, with type-specific renderers on top." },
      { type: "h2", text: "What we shipped (and are still shipping)" },
      { type: "ul", items: [
        "Vehicle marketplace with rich modification metadata, body-kit attribution and condition reports",
        "bR-Studio — a writer/creator console for Articles, Stories and bR Flick short video",
        "Hire layer covering Performance, Customization, Service+Maintenance, Detailing and Restoration",
        "Community surfaces: Clubs, Groups, Forums, Events with their own permission models",
        "My Garage — saved builds and listings, multi-collection organization, watchlists",
        "Identity, multi-account switching and creator-tier permissions",
        "Sponsored Rides placement layer and a newsletter / drop subscription engine",
      ]},
      { type: "h2", text: "Where it stands now" },
      { type: "p", text: "beRides is in private beta — invite-only, with the founder community of enthusiasts using it daily and a small group of pro consignors live-listing vehicles. Public launch is a near-term milestone. We're partnered for the long haul: this is the kind of platform that takes years to compound, and the kind we love building." },
    ],
    repeat: true,
  },
  {
    slug: "fanrush",
    name: "FanRush",
    tag: "MarTech · AI · Performance",
    url: "https://fanrush.ai",
    logo: "fanrush.svg",
    oneLiner: "Creator-led, performance-based marketing — an AI acquisition engine wired to a 5,000-creator network across 35+ countries.",
    summary:
      "FanRush is a performance-marketing platform that combines a curated network of 5,000+ creators with an AI-powered customer-acquisition engine. Brands set a CPA target and FanRush orchestrates organic creator content + paid amplification to hit it — with real-time routing, optimization and reporting. We deliver the engineering, AI surface and operator tooling behind the platform.",
    role: [
      "AI acquisition engine",
      "Creator onboarding + payouts",
      "Brand campaign console",
      "Performance attribution + analytics",
      "Real-time bidding + paid amplification",
    ],
    stack: ["Next.js", "Node", "Python (AI services)", "PostgreSQL", "Vector DB", "OpenAI", "Stripe Connect"],
    metrics: [
      ["Scale", "5,000+ creators · 850M+ audience"],
      ["Reach", "35+ countries"],
      ["Customers acquired", "1M+ per month"],
      ["Avg conversion", "4%"],
      ["Pricing model", "CPA-based"],
    ],
    highlights: [
      "AI engine that routes campaigns to the highest-converting creator + channel mix in real time",
      "5,000+ vetted creators across 35+ countries with combined 850M+ reach",
      "CPA-based pricing — brands set a target, FanRush hits or beats it",
      "Live attribution dashboards mapping conversions to creator, post and channel",
      "Brand console with offer scheduling, creative briefs and budget governance",
      "Creator payouts via Stripe Connect with multi-currency support",
    ],
    story: [
      { type: "h2", text: "The brief" },
      { type: "p", text: "FanRush's leadership came out of search, traffic distribution and the creator-economy operator world — three decades of combined experience, much of it at publicly traded companies. They had a sharp thesis: most affiliate networks give brands access to offers and stop there; the next-generation play is to combine a curated creator network with an AI-powered acquisition engine that optimises across organic and paid channels in real time. They asked us to build that engine." },
      { type: "p", text: "The clients we're acquiring for include some of the biggest names in commerce — SHEIN, Adidas, Zappos, Marks & Spencer, PrettyLittleThing, Macy's, Sephora — which means the platform has to behave like a serious mar-tech tool from day one. No demos. No 'we'll fix it in production'. CPA-grade attribution, live spend governance, payout-grade reporting." },
      { type: "h2", text: "Architecture & engineering choices" },
      { type: "p", text: "The acquisition engine is a hybrid Python + Node service. Python handles the AI: a bandit-style optimiser that learns which creator × creative × channel mix performs against a given CPA target, with a vector store of historical performance grounding the cold-start. Node handles the high-throughput attribution and webhook ingestion from brand checkout systems. PostgreSQL is the system of record for offers, conversions and payouts; a separate event store carries the live optimisation signal." },
      { type: "p", text: "Stripe Connect powers creator payouts across 35+ countries with multi-currency support — we settled on Connect specifically because the network spans markets where domestic-only rails would have left half the creators in the cold." },
      { type: "h2", text: "What we shipped" },
      { type: "ul", items: [
        "AI acquisition engine routing campaigns to the highest-converting creator + channel mix in real time",
        "Brand console with offer scheduling, creative briefs, budget governance and live CPA tracking",
        "Creator-side console with campaign discovery, content templates and earnings reporting",
        "Conversion attribution layer ingesting webhooks from brand checkout systems",
        "Stripe Connect payouts in 35+ countries with multi-currency settlement",
        "Performance dashboards mapping every dollar of conversion back to creator, post and channel",
      ]},
      { type: "h2", text: "Where it stands now" },
      { type: "p", text: "FanRush is in production with 5,000+ vetted creators, a combined audience of 850M+, and 1M+ customers acquired monthly at a 4% average conversion rate — numbers that put it squarely in the serious performance-marketing tier. We continue to operate the engineering and AI surface, and the engagement has expanded twice." },
    ],
    repeat: true,
  },
  {
    slug: "playsqor",
    name: "PlaySQOR",
    tag: "Fantasy · Real-money gaming",
    url: "https://playsqor.com",
    logo: "playsqor.svg",
    oneLiner: "Daily fantasy and real-money sports wagering, engineered for compliance and scale.",
    summary:
      "PlaySQOR is a fantasy and real-money sports gaming platform. We delivered the iOS, Android and web surfaces, the wagering engine, wallet, KYC and operator console — built for compliant flows in regulated markets.",
    role: ["iOS + Android", "Web platform", "Wagering engine", "KYC + payouts", "Admin console"],
    stack: ["React Native", "Next.js", "Node", "Postgres", "Redis", "Stripe"],
    metrics: [
      ["Platform", "Web + iOS + Android"],
      ["Vertical", "Daily fantasy + RMG"],
      ["Ops", "KYC, wallet, risk"],
    ],
    highlights: [
      "Daily fantasy contests with live scoring and settlement",
      "Real-money wagering with risk and limit engine",
      "KYC, AML, geo-fencing and responsible-gaming controls",
      "Native iOS and Android apps with push and deep-linking",
      "Operator dashboards — contests, payouts, telemetry",
    ],
    story: [
      { type: "h2", text: "The brief" },
      { type: "p", text: "PlaySQOR is a daily fantasy and real-money sports gaming platform operating in regulated US markets. The founders came to us with a hybrid product — fantasy contests on one side, real-money sports wagering on the other — and a hard requirement that the compliance posture had to be ready for state-level licensing review on day one. The shortcut path (ship the product, retrofit compliance) was off the table." },
      { type: "h2", text: "Architecture & engineering choices" },
      { type: "p", text: "We delivered iOS, Android and web from a single React Native + Next.js shared-design-system codebase, with a Node + PostgreSQL backend and Redis for the real-time scoring layer. The wagering engine is server-authoritative with per-event limit and risk checks; the fantasy engine runs live scoring and settlement against a sports-data feed with strict ordering guarantees." },
      { type: "p", text: "Identity, KYC, geo-fencing and responsible-gaming controls are wired in at the boundary, not bolted on later. Every action that touches money goes through a single ledgered surface, which makes the audit story straightforward when state regulators come knocking." },
      { type: "h2", text: "What we shipped" },
      { type: "ul", items: [
        "Daily fantasy contests with live scoring and instant settlement",
        "Real-money sports wagering with per-event risk and limit engine",
        "KYC, AML, geo-fencing and responsible-gaming controls",
        "Native iOS and Android apps with push, deep-linking and biometric login",
        "Operator console covering contests, wallet, payouts and live telemetry",
      ]},
      { type: "h2", text: "Where it stands now" },
      { type: "p", text: "PlaySQOR is live, regulated and growing — we continue to extend the platform as new markets and event types come online. It is one of our showpiece engagements for the gaming practice." },
    ],
    repeat: true,
  },
  {
    slug: "acquire",
    name: "Acquire.bet",
    tag: "Gaming · Real-money",
    url: "https://acquire.bet",
    logo: "acquire.svg",
    oneLiner: "Prediction and real-money wagering platform, engineered for compliance.",
    summary:
      "Acquire.bet is a prediction and wagering platform covering real-money flows, wallet, KYC and compliant payouts. We delivered the platform core, risk surface and operator dashboards.",
    role: ["Platform engineering", "Wallet + payouts", "Risk & compliance", "Admin"],
    stack: ["Next.js", "Node", "Postgres", "Stripe", "KYC partner"],
    metrics: [
      ["Platform", "Web + mobile"],
      ["Money", "Real-money wagering"],
      ["Ops", "Risk + compliance"],
    ],
    highlights: [
      "Wallet with deposit, withdrawal and hold lifecycles",
      "Risk engine with real-time limit checks",
      "KYC, AML, geo-fencing and responsible-gaming",
      "Operator dashboards with live telemetry",
    ],
    story: [
      { type: "h2", text: "The brief" },
      { type: "p", text: "Acquire.bet is a prediction-market and real-money wagering platform built for compliance from day one. The founders had a clear thesis on the prediction-market opportunity but needed a partner who could handle the harder parts — wallet, risk, payouts and the regulatory surface — without compromise." },
      { type: "h2", text: "Architecture & engineering choices" },
      { type: "p", text: "Built on Next.js + Node + PostgreSQL with Stripe and a specialist KYC partner. The wallet is double-entry ledgered: every deposit, hold, win and withdrawal is an immutable journal entry. The risk engine evaluates per-event limits, per-user limits and aggregate exposure in real time; a request that exceeds any of them is rejected at the API layer, not patched in the UI." },
      { type: "h2", text: "What we shipped" },
      { type: "ul", items: [
        "Wallet with deposit, withdrawal, hold and settlement lifecycles",
        "Risk engine with real-time per-event and per-user limit checks",
        "KYC, AML, geo-fencing and responsible-gaming controls",
        "Operator dashboards with live exposure, payouts and telemetry",
        "Web + mobile platform on a shared design system",
      ]},
      { type: "h2", text: "Where it stands now" },
      { type: "p", text: "Acquire.bet is live and the engagement has extended twice. The risk and wallet layer we built is the part the team points to first when investors ask about defensibility." },
    ],
    repeat: true,
  },
  {
    slug: "videoshops",
    name: "VideoShops",
    tag: "Commerce · Video",
    url: "https://videoshops.com",
    logo: "videoshops.svg",
    oneLiner: "Shoppable video commerce — turn every frame into a storefront.",
    summary:
      "VideoShops lets brands and creators turn video into shoppable storefronts with tap-to-buy frames, inventory sync and checkout.",
    role: ["Web platform", "iOS + Android app", "Video pipeline"],
    stack: ["Next.js", "React Native", "HLS", "Node", "Postgres"],
    metrics: [
      ["Format", "Shoppable video"],
      ["Platforms", "Web + iOS + Android"],
      ["Scale", "Creator + brand"],
    ],
    highlights: [
      "Shoppable video player with frame-accurate hotspots",
      "Creator studio for tagging, scheduling and analytics",
      "Checkout that keeps users in the video flow",
      "Native iOS and Android companion apps",
    ],
    story: [
      { type: "h2", text: "The brief" },
      { type: "p", text: "VideoShops turns video into shoppable storefronts — tap-to-buy frames, inventory sync and checkout that doesn't kick the user out of the video. The brief was to deliver this as a serious commerce-grade product, not a TikTok-style toy: real inventory sync, real fraud handling, real returns and a UX that creators and brands could both run from a phone." },
      { type: "h2", text: "Architecture & engineering choices" },
      { type: "p", text: "We built the video pipeline on HLS with frame-accurate hotspot metadata, served from a Node + PostgreSQL backend behind Next.js web and React Native mobile clients. The hard problem was synchronizing inventory and price across many merchant integrations in something close to real time, while keeping the player buttery-smooth on cellular networks — we solved it with a per-creator inventory cache + an aggressive invalidation channel." },
      { type: "h2", text: "What we shipped" },
      { type: "ul", items: [
        "Shoppable video player with frame-accurate hotspots and tap-to-buy",
        "Creator studio for tagging, scheduling and per-clip analytics",
        "Checkout that keeps users in the video flow with no full-page redirect",
        "Native iOS and Android companion apps for creators and shoppers",
        "Merchant inventory sync across multiple commerce integrations",
      ]},
      { type: "h2", text: "Where it stands now" },
      { type: "p", text: "VideoShops is live and the engagement is ongoing. We continue to extend the platform with new commerce integrations and creator tooling." },
    ],
    repeat: true,
  },
  {
    slug: "nickcooper",
    name: "Nick Cooper",
    tag: "Celebrity · Platform",
    url: "https://nickcooper.com",
    logo: "nickcooper.svg",
    oneLiner: "Direct-to-fan platform for a cultural personality.",
    summary:
      "A web + mobile direct-to-fan platform for Nick Cooper — content, drops and community in one surface, with a distinct visual identity.",
    role: ["Design", "Web platform", "Mobile app"],
    stack: ["Next.js", "React Native", "Headless CMS"],
    metrics: [
      ["Surface", "Web + mobile"],
      ["Scope", "Content + drops"],
      ["Delivery", "Design + build"],
    ],
    highlights: [
      "Brand-led web experience with cinematic motion",
      "Companion mobile app for content + drops",
      "Creator admin with role-based publishing",
    ],
    story: [
      { type: "h2", text: "The brief" },
      { type: "p", text: "Nick Cooper is a cultural personality with a serious audience and a vision for a direct-to-fan platform — content, drops and community in one surface, with a distinct visual identity that didn't feel like an off-the-shelf creator tool." },
      { type: "h2", text: "Architecture & engineering choices" },
      { type: "p", text: "Brand-led from the first sketch. We delivered the design system, the web platform on Next.js, the companion React Native app and a headless CMS that the team can operate independently. Motion was treated as a first-class design surface — every transition, every reveal, every drop animation was authored, not defaulted." },
      { type: "h2", text: "What we shipped" },
      { type: "ul", items: [
        "Brand-led web experience with cinematic motion and editorial typography",
        "Companion mobile app for content consumption and limited drops",
        "Headless CMS with role-based publishing for the production team",
      ]},
      { type: "h2", text: "Where it stands now" },
      { type: "p", text: "Live, with a thriving direct-to-fan audience. The platform is the model we point to when a personality-driven brand needs the full stack — design, motion, web, mobile and CMS — from one team." },
    ],
    repeat: false,
  },
  {
    slug: "truewrld",
    name: "TrueWrld",
    tag: "Culture · Platform",
    url: "https://truewrld.com",
    logo: "truewrld.svg",
    oneLiner: "A culture platform for the true believers.",
    summary:
      "TrueWrld is a culture platform combining content, community and commerce for a youth-culture audience. We own the end-to-end build.",
    role: ["Product", "Design", "Web + mobile"],
    stack: ["Next.js", "React Native", "Postgres", "Stripe"],
    metrics: [
      ["Surface", "Web + mobile"],
      ["Scope", "Content + commerce"],
      ["Delivery", "End-to-end"],
    ],
    highlights: [
      "Content CMS with community features",
      "Commerce + drop mechanics",
      "Native mobile app with push and deep-linking",
    ],
    story: [
      { type: "h2", text: "The brief" },
      { type: "p", text: "TrueWrld is a culture platform combining content, community and commerce for a youth-culture audience. The founders wanted a coherent product, not a stitched-together CMS + Shopify + Discord, and the brand had to look like it belonged to the culture, not built for it from outside." },
      { type: "h2", text: "Architecture & engineering choices" },
      { type: "p", text: "Next.js for web, React Native for mobile, Postgres + Stripe on the backend. The drop mechanics share a single inventory + queue layer with the regular commerce surface — we resisted the temptation to build 'a drop' as a separate product, because the moderation and CS implications of two parallel order systems were never going to be worth it." },
      { type: "h2", text: "What we shipped" },
      { type: "ul", items: [
        "Content CMS with community features built into the same product",
        "Commerce + drop mechanics on a single inventory and order surface",
        "Native mobile app with push and deep-linking for drop alerts",
      ]},
      { type: "h2", text: "Where it stands now" },
      { type: "p", text: "Live, growing and one of our recurring engagements — we've extended scope twice since the original launch." },
    ],
    repeat: true,
  },
  {
    slug: "realprofits",
    name: "RealProfits",
    tag: "Fintech · Trading",
    url: "https://realprofits.com",
    logo: "realprofits.svg",
    oneLiner: "A retail trading and profits-tracking platform with an AI co-pilot.",
    summary:
      "RealProfits gives retail traders a single surface for portfolio tracking, trade journaling and AI-assisted insights. We built the web platform, mobile companion app and the AI co-pilot grounded in user trade history.",
    role: ["Web platform", "iOS + Android", "AI co-pilot", "Data pipelines"],
    stack: ["Next.js", "React Native", "FastAPI", "Postgres", "OpenAI"],
    metrics: [
      ["Surface", "Web + iOS + Android"],
      ["AI", "Trade-grounded RAG"],
      ["Scope", "End-to-end"],
    ],
    highlights: [
      "Real-time portfolio + P&L tracking across brokerages",
      "AI co-pilot grounded in the user's own trade history",
      "Charting, journaling and tax-lot accounting",
      "Native mobile companion with biometric login",
    ],
    story: [
      { type: "h2", text: "The brief" },
      { type: "p", text: "RealProfits is a retail-trading and portfolio-tracking platform with a built-in AI co-pilot. The brief was deceptively simple: build the trading dashboard the founders themselves had wanted for ten years, with an AI layer that was grounded in the user's actual trade history — not a generic chatbot that hallucinated tickers." },
      { type: "h2", text: "Architecture & engineering choices" },
      { type: "p", text: "Web on Next.js, mobile on React Native, AI services in Python + FastAPI behind a vector store of per-user trade history. The AI co-pilot is RAG-grounded against the user's own positions, tax-lot history and journal notes — it cannot reference data the user does not have. Token budgets and per-feature spend ceilings keep the OpenAI bill predictable as the user base grows." },
      { type: "p", text: "Real-time portfolio sync across multiple brokerages is the part most teams underestimate. We built a unified normalization layer over four broker APIs that smooths their differences without losing fidelity for tax-lot accounting." },
      { type: "h2", text: "What we shipped" },
      { type: "ul", items: [
        "Real-time portfolio and P&L tracking across multiple brokerages",
        "AI co-pilot grounded in the user's own trade history and journal notes",
        "Charting, trade journaling and tax-lot accounting surfaces",
        "Native mobile companion with biometric login and push alerts",
        "Token budgets, evals and tracing on every AI call",
      ]},
      { type: "h2", text: "Where it stands now" },
      { type: "p", text: "Live, with a retail-trader audience that uses the AI co-pilot daily. The engagement is ongoing and the AI surface continues to expand." },
    ],
    repeat: true,
  },
  {
    slug: "getcashback",
    name: "GetCashback",
    tag: "Fintech · Rewards",
    url: "https://getcashback.com",
    logo: "getcashback.svg",
    oneLiner: "A cashback and rewards platform that pays users to shop where they already shop.",
    summary:
      "GetCashback is a multi-merchant cashback platform. We delivered the web + mobile experience, the merchant integration layer, AI-driven personalised offers and the wallet-and-payout backend.",
    role: ["Web platform", "iOS + Android", "AI personalisation", "Wallet + payouts"],
    stack: ["Next.js", "React Native", "Node", "Postgres", "Stripe"],
    metrics: [
      ["Surface", "Web + iOS + Android"],
      ["Stack", "Merchant + wallet + AI"],
      ["Scope", "End-to-end"],
    ],
    highlights: [
      "Browser extension + mobile app for cashback capture",
      "AI-personalised offer ranking per user",
      "Merchant integration via affiliate networks",
      "Wallet, payouts, gift cards and referral mechanics",
    ],
    story: [
      { type: "h2", text: "The brief" },
      { type: "p", text: "GetCashback is a multi-merchant cashback and rewards platform. The brief was to deliver the consumer surface (browser extension + mobile app + web), the merchant integration layer (affiliate networks + direct APIs), and an AI personalisation engine that ranks offers based on each user's actual spend behaviour." },
      { type: "h2", text: "Architecture & engineering choices" },
      { type: "p", text: "Browser extension + React Native mobile + Next.js web on the consumer side; Node + Postgres + Stripe on the backend. The affiliate integration layer abstracts a dozen networks behind a single offer model — we treat the consumer like they're shopping at GetCashback, not at twelve different reward programs stitched together." },
      { type: "p", text: "The AI ranker is a lightweight personalisation model that re-orders the offer list per session based on the user's spend categories and recency. It's not magic — it's careful product engineering with a tight feedback loop." },
      { type: "h2", text: "What we shipped" },
      { type: "ul", items: [
        "Browser extension + mobile app for cashback capture and offer surfacing",
        "AI-personalised offer ranking per user, per session",
        "Merchant integration layer over multiple affiliate networks",
        "Wallet, payouts, gift cards and referral mechanics with full ledger",
      ]},
      { type: "h2", text: "Where it stands now" },
      { type: "p", text: "Live, growing, and the engagement has been extended multiple times. The AI personalisation surface and merchant integration layer continue to expand." },
    ],
    repeat: true,
  },
  {
    slug: "onlybeaches",
    name: "OnlyBeaches",
    tag: "Travel · Lifestyle",
    url: "https://onlybeaches.com",
    logo: "onlybeaches.svg",
    oneLiner: "A curated discovery platform for the world's best beaches.",
    summary:
      "OnlyBeaches is a discovery, planning and booking platform for beaches and beach destinations. We delivered the design system, web platform, content CMS and the AI-powered recommendation engine.",
    role: ["Design", "Web platform", "Content CMS", "AI recommendations"],
    stack: ["Next.js", "Headless CMS", "OpenAI", "Postgres"],
    metrics: [
      ["Surface", "Web + mobile web"],
      ["Scope", "Design + build + AI"],
      ["Format", "Discovery + booking"],
    ],
    highlights: [
      "Editorial CMS for beach guides and itineraries",
      "AI recommendation engine with mood + season filters",
      "Image-first design system with cinematic motion",
      "Booking partners + affiliate revenue layer",
    ],
    story: [
      { type: "h2", text: "The brief" },
      { type: "p", text: "OnlyBeaches is a discovery, planning and booking platform for the world's best beaches. The brief was to deliver design, content CMS, an AI recommendation engine that actually understood beach context (season, crowd, water quality, family-friendliness), and a booking revenue layer — all wrapped in an image-first editorial brand." },
      { type: "h2", text: "Architecture & engineering choices" },
      { type: "p", text: "Next.js + a headless CMS for the editorial layer, OpenAI behind a curated knowledge base for recommendations, and a Postgres data layer for beach metadata, itineraries and bookings. The AI recommendation prompt is grounded against editorial content the team has actually written — no hallucinations about beaches that don't exist." },
      { type: "h2", text: "What we shipped" },
      { type: "ul", items: [
        "Editorial CMS for beach guides, itineraries and seasonal content",
        "AI recommendation engine with mood, season and family-context filters",
        "Image-first design system with cinematic motion across the site",
        "Booking partners + affiliate revenue layer",
      ]},
      { type: "h2", text: "Where it stands now" },
      { type: "p", text: "Live, with a steadily growing editorial audience. The team continues to expand the destination catalogue and the AI recommendation surface." },
    ],
    repeat: true,
  },
  {
    slug: "wholosophy",
    name: "Wholosophy",
    tag: "Wellness · AI",
    url: "https://wholosophy.com",
    logo: "wholosophy.svg",
    oneLiner: "AI-powered wellness coaching that meets people where they are.",
    summary:
      "Wholosophy blends wellness content with an AI coach that personalises guidance. We built the web platform and the AI surface.",
    role: ["Web platform", "AI coach", "Content"],
    stack: ["Next.js", "Node", "OpenAI", "Vector DB"],
    metrics: [
      ["Surface", "Web + mobile web"],
      ["AI", "Coach w/ RAG"],
      ["Scope", "Content + AI"],
    ],
    highlights: [
      "RAG-grounded AI coach with persona prompts",
      "Content platform with editorial workflow",
      "Token budgets and offline evaluations for safety",
    ],
    story: [
      { type: "h2", text: "The brief" },
      { type: "p", text: "Wholosophy blends wellness content with an AI coach that personalises guidance to the reader's actual goals and history. The brief required serious AI engineering hygiene — Wholosophy is in a category where bad advice has real consequences, and the AI surface had to be defensible in a clinical-adjacent context." },
      { type: "h2", text: "Architecture & engineering choices" },
      { type: "p", text: "Next.js + Node + OpenAI + a vector DB grounding the AI coach against curated, expert-reviewed content. Token budgets, offline eval sets and safety classifiers gate every response — Wholosophy never ships a prompt change without an eval run, and never lets a response leave the server without a safety pass." },
      { type: "h2", text: "What we shipped" },
      { type: "ul", items: [
        "RAG-grounded AI coach with persona prompts and editorial guardrails",
        "Content platform with editorial workflow for expert review",
        "Token budgets, offline eval sets and online safety classifiers",
        "Privacy posture appropriate to a wellness-adjacent context",
      ]},
      { type: "h2", text: "Where it stands now" },
      { type: "p", text: "Live, growing, and the engagement is ongoing. The AI coaching surface continues to expand carefully — never faster than the safety eval set can keep up with." },
    ],
    repeat: true,
  },
];

export const CASE_STUDIES = PROJECTS.filter((p) => ["hiphopgrails", "playsqor", "acquire"].includes(p.slug));

// =====================================================================
// Auctions practice — flagship vertical
// =====================================================================
export const AUCTIONS = {
  hero: {
    overline: "Auctions practice",
    title: "Auction houses,\nengineered.",
    body:
      "We build the bidding floors of the internet. Sotheby's, Christie's and the storied houses of the last three centuries shaped how the world buys art, jewellery and collectibles. Our job is to build their digital-native successors — and the platforms culture-forward operators are using to compete with them.",
  },
  positioning: {
    title: "We don't sell software. We build auction houses.",
    body:
      "Auctions are theatre. They are a clock, a crowd, a reserve, an escrow and a thousand small product decisions about trust. We've spent a decade making those decisions — for hip-hop memorabilia at HipHopGrails, for celebrity drops, for high-value collectibles. Our reference architecture is now used as the spine of new auction houses across music, fashion, sport and luxury.",
  },
  stats: [
    { k: "Microsoft", l: "Azure cloud", note: "Reference deployment for HipHopGrails" },
    { k: ".NET 8", l: "Microservices core", note: "C# domain services + minimal APIs" },
    { k: "Next.js", l: "Front-end stack", note: "App Router + React 18" },
    { k: "PostgreSQL", l: "System of record", note: "Row-level security, partitioning, audit" },
    { k: "<100ms", l: "Bid latency", note: "Azure SignalR real-time fan-out" },
    { k: "24/7", l: "Live ops", note: "Run-of-show tooling for event teams" },
  ],
  capabilities: [
    {
      title: "Bidding engine",
      text:
        "Server-authoritative bidding with anti-snipe, soft-close, proxy bids, reserve handling and absentee bids. Sub-100ms fan-out via Azure SignalR. Tested for live-event spikes at 10× normal load.",
    },
    {
      title: "Live & timed formats",
      text:
        "Timed auctions, live-streamed auctions with auctioneer paddle, drops and Buy-It-Now hybrids. Run-of-show tooling for event producers — pacing, holds, withdrawals, ad-hoc lots.",
    },
    {
      title: "Consignment & seller ops",
      text:
        "Workflows for labels, artists, estates, curators and resellers. Provenance, condition reports, lot-level photography and video, reserve negotiation, commission splits and post-sale settlement.",
    },
    {
      title: "Identity, KYC & AML",
      text:
        "Bidder identity verification, source-of-funds for high-value lots, sanctions screening and audit trails. Plug-in providers for jurisdiction-specific compliance.",
    },
    {
      title: "Escrow, payments & payouts",
      text:
        "Escrow with explicit hold periods, dispute windows and payout rails — Stripe Connect, ACH and specialist art-lending partners. Fully reconciled ledger built on PostgreSQL.",
    },
    {
      title: "Authentication & provenance",
      text:
        "Photo-grade lot record-keeping, condition history, third-party authentication hooks and tamper-evident provenance trails. Optional NFT certificates of authenticity per lot.",
    },
    {
      title: "Native mobile apps",
      text:
        "iOS and Android apps for bidders and ops — push notifications, deep-linked lot URLs, offline watch-list, biometric login. The same .NET API powers both surfaces.",
    },
    {
      title: "Operator console",
      text:
        "Catalog management, photography pipeline, scheduling, jackpots, loyalty, telemetry and CRM. Built so the ops team runs the platform — not the other way around.",
    },
    {
      title: "Compliance & reporting",
      text:
        "Auction-house grade audit trails, reportable events, tax reporting, GAAP-friendly revenue recognition. Designed for legal and finance teams from day one.",
    },
  ],
  stack: {
    title: "An auction-grade reference architecture.",
    body:
      "We standardised on a battle-tested stack so we can ship auction platforms in months, not years — without compromising on the audit, compliance and performance bar that real money demands.",
    layers: [
      { label: "Cloud", name: "Microsoft Azure", note: "App Service, Container Apps, SignalR, Service Bus, Storage, Front Door" },
      { label: "Backend", name: ".NET 8 / C#", note: "Microservices, minimal APIs, MediatR, EF Core, FluentValidation" },
      { label: "Realtime", name: "Azure SignalR + Service Bus", note: "Bid fan-out, live-event sync, durable async workflows" },
      { label: "Database", name: "PostgreSQL", note: "Row-level security, partitioning by auction, pgvector for catalog search, full audit trail" },
      { label: "Front end (web)", name: "Next.js 14", note: "App Router, server components, edge runtimes" },
      { label: "Front end (mobile)", name: "React Native + Swift / Kotlin", note: "Native modules where bidder UX demands it" },
      { label: "Identity & payments", name: "OIDC / Stripe / KYC partner", note: "OpenID Connect SSO, Stripe Connect, sanctions screening" },
      { label: "Observability", name: "App Insights + OpenTelemetry", note: "Per-lot tracing, RTP-style live ops dashboards" },
    ],
  },
  formats: [
    {
      title: "Timed online auction",
      points: [
        "Anti-snipe extension windows",
        "Auto-bid (proxy) and absentee bids",
        "Soft-close per lot or session",
      ],
    },
    {
      title: "Live-streamed auction",
      points: [
        "Auctioneer paddle, room + online + phone bidders",
        "Real-time clerking and stand-in workflows",
        "Live HLS video, latency-aware bid floor",
      ],
    },
    {
      title: "Drop & buy-now hybrid",
      points: [
        "Scheduled drops with anti-bot capacity",
        "Buy-it-now with optional best offer",
        "Membership-gated early access",
      ],
    },
    {
      title: "Sealed-bid & private sale",
      points: [
        "Sealed-envelope mechanics",
        "Auctioneer-mediated negotiations",
        "Confidential consignment workflows",
      ],
    },
  ],
  proof: ["hiphopgrails", "nickcooper", "truewrld"],
};

// =====================================================================
// Media & Publishers practice — programmatic, RTB, content monetization
// =====================================================================
export const MEDIA = {
  hero: {
    overline: "Media & Publishers practice",
    title: "We turn premium content\ninto compounding revenue.",
    body:
      "Origami is the engineering team for the next chapter of digital media. We build the programmatic, contextual and commerce layer that premium publishers need to grow yield without surrendering control of the user experience or the data — for luxury travel, regional lifestyle, mass-market trusted media and the category-defining titles being built next.",
  },
  thesis: {
    overline: "The thesis",
    title:
      "The world's best content is being monetized at a fraction of its potential.",
    body:
      "Premium publishers sit on the most valuable inventory on the internet — engaged, intent-rich, brand-safe audiences. The infrastructure underneath, though, was built for a different decade. We bring a modern programmatic, contextual and content-commerce stack to publishers who care about the work — and want the revenue line to follow.",
  },
  // Six headline stats designed to read like an industry datasheet.
  stats: [
    { k: "Sub-100ms", l: "Auction latency", note: "Edge-deployed prebid + server-side header bidding" },
    { k: "Zero PII", l: "Contextual-first", note: "We start with content, not user identity" },
    { k: "12+", l: "SSP integrations", note: "Google AdX, Magnite, PubMatic, OpenX, Index, Criteo, Sharethrough" },
    { k: "+15–35%", l: "Typical RPM lift", note: "Header bidding + floor optimization + curated demand" },
    { k: "100%", l: "Brand-safety vetted", note: "IAS / DoubleVerify / Oracle Moat compatible" },
    { k: "GDPR · CCPA", l: "Compliance-ready", note: "TCF v2.2, GPP, DPA-grade processing" },
  ],
  capabilities: [
    {
      title: "Header bidding",
      text:
        "Prebid.js client-side and server-side header bidding deployed at the edge — multi-format, multi-currency, deal-aware. Wired so the publisher controls timeouts, floors and bidder allow-lists.",
    },
    {
      title: "Real-time bidding (RTB)",
      text:
        "OpenRTB 2.6 / 3.0 endpoints, programmatic guaranteed (PG) and PMP deal flow, deal IDs and audience deals tuned per publisher. Shaped to lift yield without cannibalising direct-sold inventory.",
    },
    {
      title: "Contextual targeting",
      text:
        "IAB content-taxonomy classification, embeddings-based topic modelling and brand-safety segments — all without touching personal data. Performance comparable to behavioural targeting on the categories that matter.",
    },
    {
      title: "Content commerce & affiliate",
      text:
        "Inline product cards, affiliate links, recommendation rails and shoppable editorial — all derived from page context. We make the article earn beyond the ad slot.",
    },
    {
      title: "AI-driven recommendations",
      text:
        "Embedding-based 'next-best read' and 'next-best buy' modules grounded in your own corpus. We lift session depth and pages-per-visit — the metrics every premium publisher actually cares about.",
    },
    {
      title: "Yield optimization",
      text:
        "Floor-price ML, bidder selection, identity-graph fallbacks (RampID, ID5, UID2.0 where used), and unified auction analytics. We tune the auction; you keep the revenue.",
    },
    {
      title: "First-party data & CDP",
      text:
        "When the publisher is ready, we stand up a first-party data layer — consent-managed, privacy-safe — for direct deals, audience extension and durable revenue beyond the cookie.",
    },
    {
      title: "Brand safety & IVT",
      text:
        "Pre-bid brand-safety filters, post-impression measurement (IAS, DoubleVerify, Oracle Moat) and invalid-traffic shielding so high-CPM advertisers come back.",
    },
    {
      title: "Privacy & compliance",
      text:
        "TCF v2.2, GPP, CCPA, regional regimes (LGPD, POPIA, India DPDP). Consent flows, processor agreements and audit trails the publisher's legal team will sign off on.",
    },
  ],
  // The Trojan Horse pitch — risk-free entry, prove revenue, then expand.
  trojanHorse: {
    overline: "How we get in",
    title: "Zero risk. No data. Pure contextual.",
    body:
      "Premium publishers don't hand over data because someone asked nicely. We don't ask. We deploy on a slice of the property, prove revenue uplift on contextual signals alone, and only then talk about deeper integration — on the publisher's terms.",
    steps: [
      {
        n: "01",
        title: "Lightweight integration",
        text:
          "A JS snippet or content-API integration. No user data needed. We start with page context, category, geo (coarse) and device — the signals you already expose.",
      },
      {
        n: "02",
        title: "Prove revenue",
        text:
          "We run on 50–100 pages first. Transparent reporting, side-by-side A/B against control. Typical lift: +15–35% RPM in the first 60 days.",
      },
      {
        n: "03",
        title: "Expand scope",
        text:
          "Once the revenue line moves, expansion is a conversation about coverage — not a procurement battle. Section-level, then site-level, then network-level.",
      },
      {
        n: "04",
        title: "Deeper signals (only if needed)",
        text:
          "After we've earned it, we co-design first-party data layers, audience extension and direct-deal automation. Always opt-in. Always reversible.",
      },
    ],
    objections: [
      {
        q: "Will you misuse our users?",
        a: "We don't store or access personal data. Everything is contextual and consent-aware.",
      },
      {
        q: "Will this break our UX?",
        a: "We control no placement without your sign-off. Every unit is reviewable, throttle-able, removable.",
      },
      {
        q: "Will this cannibalise our direct ads?",
        a: "We optimise incremental revenue — never the floor your sales team has already sold against.",
      },
    ],
  },
  // Premium publisher tier — described by category, not named.
  audience: {
    overline: "Who we build for",
    title: "Publishers in three tiers —",
    note:
      "Premium audiences. Premium standards. Three publisher categories where the modern monetization stack moves the revenue line the most.",
    brands: [
      {
        name: "Luxury travel & culture",
        parent: "Global lifestyle networks",
        focus: "Travel · Culture · Fashion · Food",
        positioning: "Premium · Aspirational · Global audience",
        sister: "High-CPM contextual + commerce surfaces",
      },
      {
        name: "Regional lifestyle & editorial",
        parent: "Independent media houses",
        focus: "Food · Outdoors · Regional culture",
        positioning: "Niche · High-quality · Loyal subscriber base",
        sister: "Editorial-led commerce + member-driven yield",
      },
      {
        name: "Trusted family & utility media",
        parent: "Multi-title publishing groups",
        focus: "Practical · Family · Home · Hobbies",
        positioning: "Broad audience · Ads + subscription + affiliate",
        sister: "Affiliate-heavy yield + first-party data depth",
      },
    ],
  },
  // Modern, credible adtech stack.
  stack: {
    title: "An adtech-grade reference architecture.",
    body:
      "Built to drop into existing publisher tech without ripping anything out. SSAI, prebid, identity, contextual and analytics — wired to the cloud the publisher already runs on.",
    layers: [
      { label: "Cloud", name: "AWS / Azure / GCP", note: "Publisher-portable; deployed where their data already lives" },
      { label: "Edge", name: "Cloudflare / Fastly / Vercel Edge", note: "Sub-100ms auction latency, global PoPs" },
      { label: "Auction", name: "Prebid.js + PBS (Server)", note: "Client- and server-side header bidding, identity hub" },
      { label: "Demand", name: "Google AdX · Magnite · PubMatic · OpenX · Index · Criteo · Sharethrough", note: "12+ SSP / DSP integrations, with deal-ID and PMP support" },
      { label: "Identity", name: "RampID · ID5 · UID2.0 · publisher-1P", note: "Cookie-less ready, consent-aware, opt-in only" },
      { label: "Contextual", name: "IAB taxonomy + embeddings", note: "Pgvector + OpenAI embeddings; brand-safety segments out of the box" },
      { label: "Verification", name: "IAS · DoubleVerify · Oracle Moat", note: "Pre-bid filtering + post-impression measurement" },
      { label: "Analytics", name: "BigQuery / Snowflake + Looker / Metabase", note: "Bidder-level transparency, daily yield reports" },
    ],
  },
  // Lightweight engagement model so prospects can self-qualify.
  engagement: [
    {
      title: "Audit",
      duration: "2 weeks",
      text: "We benchmark current yield, fill rate, latency and brand-safety posture. Output: a numbered opportunity list with $-per-month estimates.",
    },
    {
      title: "Pilot",
      duration: "60 days",
      text: "Lightweight integration on a slice of the property. Side-by-side A/B against your control bucket. Transparent reporting from day one.",
    },
    {
      title: "Scale",
      duration: "Ongoing",
      text: "Expand coverage section-by-section, layer in first-party data and direct deals when the publisher is ready. Revenue-share or fixed-fee — whichever fits.",
    },
  ],
};



export const CLASS_GAMES = {
  hero: {
    overline: "Class II & Class III Games",
    title: "Real-money gaming,\nengineered for operators.",
    body:
      "Origami builds and ships Class II bingo-based mechanics and Class III RNG gaming platforms for tribal and commercial operators in the US — with the compliance, RGS integrations and operator tooling that modern gaming needs.",
  },
  split: {
    classII: {
      label: "Class II",
      title: "Bingo-based, server-drawn mechanics",
      points: [
        "Server-drawn bingo games with game-server determined outcomes",
        "Compatible with IGRA Class II regulation for tribal operators",
        "Thematic re-skins across slot-style and bingo-style presentations",
        "Player pool management, prize distribution and audit trails",
      ],
    },
    classIII: {
      label: "Class III",
      title: "RNG-driven real-money titles",
      points: [
        "Certified RNG for casino-style mechanics: slots, table, instant-win",
        "RGS + math model integration with third-party studios",
        "Jurisdiction-aware player protection, limits and cooling-off",
        "Tooling for operators: campaigns, jackpots, telemetry",
      ],
    },
  },
  capabilities: [
    {
      title: "Compliance & Certification",
      text: "We build with the audit trail first — from GLI-aligned processes to responsible-gaming controls and reportable events.",
    },
    {
      title: "RGS & Integrations",
      text: "Remote Game Server, wallet, PAM, identity, payment and geolocation integrations are first-class citizens, not bolt-ons.",
    },
    {
      title: "Math & Game Design",
      text: "We partner with math studios to deliver themed, volatility-tuned titles — and build the surrounding platform.",
    },
    {
      title: "Operator Tooling",
      text: "Admin, campaigns, jackpots, loyalty and analytics dashboards so your ops team can actually run the platform.",
    },
    {
      title: "Content Pipelines",
      text: "Re-skin and re-theme content rapidly — from promotional drops tied to artist launches, to seasonal refreshes.",
    },
    {
      title: "Observability",
      text: "Instrumentation at every layer: RTP tracking, player telemetry, incident dashboards, SLA reporting.",
    },
  ],
};

// AI Practice
export const AI_PRACTICE = {
  hero: {
    overline: "AI Practice",
    title: "AI that ships\nbehind your login.",
    body:
      "We build production AI — LLM apps, RAG, agents, voice and vision — grounded in your data and wrapped in the observability, evals and compliance that real products demand.",
  },
  useCases: [
    {
      slug: "llm-apps",
      title: "LLM-native apps",
      text: "Product surfaces built from the ground up around LLMs — chat, co-pilot, structured generation — with streaming, tool-calling and graceful degradation.",
      models: ["GPT-5", "Claude Sonnet 4.5", "Gemini 3"],
    },
    {
      slug: "rag",
      title: "RAG over your data",
      text: "Retrieval-augmented generation grounded in your internal corpus — vector search, hybrid retrieval, chunking strategies that preserve meaning.",
      models: ["OpenAI embeddings", "Voyage", "Cohere rerank"],
    },
    {
      slug: "agents",
      title: "Agentic workflows",
      text: "Tool-using agents that execute multi-step work reliably — with deterministic evals, retries, budgets and full trace observability.",
      models: ["Claude agents", "LangGraph", "Custom orchestration"],
    },
    {
      slug: "voice",
      title: "Voice agents",
      text: "Real-time voice applications — inbound and outbound — with low-latency turn-taking, barge-in and function-calling.",
      models: ["OpenAI Realtime", "ElevenLabs", "Whisper"],
    },
    {
      slug: "vision",
      title: "Vision & multimodal",
      text: "OCR, document understanding, moderation and product tagging pipelines — with a POV on cost per frame, not just accuracy.",
      models: ["GPT-5 Vision", "Gemini Vision", "Nano Banana"],
    },
    {
      slug: "evals",
      title: "Evals & observability",
      text: "We treat LLM apps like any other production system — offline evals, online evals, regression suites, tracing and token budgets.",
      models: ["LangSmith", "Braintrust", "OpenTelemetry"],
    },
  ],
  proof: [
    { client: "wholosophy", what: "RAG-grounded wellness coach" },
    { client: "realprofits", what: "Trade-grounded AI co-pilot for retail traders" },
    { client: "getcashback", what: "AI-personalised offer ranking" },
  ],
};

export const INSIGHTS = [
  {
    slug: "how-to-hire-custom-software-development-company",
    title: "How to hire a custom software development company in 2026",
    excerpt:
      "The signals to look for, the red flags that hide in the sales deck, and the questions that separate a shipping team from an agency that will disappear after month three.",
    date: "2026-02-24",
    read: "10 min read",
    tag: "Custom Software",
    body: [
      { type: "p", text: "Every year we get onboarded to salvage a project that a different agency started and abandoned. The pattern is depressingly consistent: charismatic sales cycle, mediocre discovery, a lead engineer who leaves in month two, a scope that quietly balloons, and by month six the client has a half-built product and a very expensive lesson in agency selection." },
      { type: "p", text: "There is no shortcut past this problem, but there is a checklist. Here is how a senior technical buyer should evaluate a custom software development company before signing anything." },
      { type: "h2", text: "1. Who will actually write the code?" },
      { type: "p", text: "The single most valuable question in the entire buying cycle. Ask by name. Ask for their LinkedIn. Ask how many years they've been at the agency. If the answer is 'we'll assign the team once we sign the SoW', walk away. Great agencies will name the engineer, the tech lead and the PM on the first sales call. Weak ones will not." },
      { type: "h2", text: "2. What percentage of their staff is senior?" },
      { type: "p", text: "This is the single strongest signal in the market. Agencies that scale by hiring cheap juniors and billing them out at senior rates are the ones producing the disasters. If less than 60% of engineers on client work have 6+ years of experience, expect a rough project. At Origami we are 100% senior on client work — no juniors, no exceptions. It is our single most important operating rule." },
      { type: "h2", text: "3. How often do they ship to production?" },
      { type: "p", text: "Weekly is the target. Every-two-weeks is acceptable. Monthly or less is a red flag: it means either the CI/CD is bad, the tests are missing, or the client is being kept in the dark about progress. Ask to see the last four release notes from a comparable client project (redacted is fine)." },
      { type: "h2", text: "4. Can you talk to a live client?" },
      { type: "p", text: "Not a case study. A phone call with the person actually paying the invoices right now, ideally at a comparable-stage project. The best agencies are proud of their client relationships and will make the intro fast. The worst will 'circle back'." },
      { type: "h2", text: "5. What does their eval / observability practice look like?" },
      { type: "p", text: "For any AI-adjacent work, the eval story matters more than the model choice. Ask: 'show me the eval harness for a recent LLM feature you shipped'. If they don't have one, they are shipping demos, not products. The same question applies to non-AI: how do you monitor a live feature after launch? What's your rollback story?" },
      { type: "h2", text: "6. How do they handle scope creep?" },
      { type: "p", text: "There is no such thing as a custom software project without scope creep. What matters is how the agency talks about it. Two red flags: (a) 'we do fixed-scope, fixed-price — everything else is a change request' (they will nickel-and-dime you); and (b) 'we don't track scope, we just build until you're happy' (they will churn on politics and take twice as long)." },
      { type: "p", text: "The healthy answer is: we run T&M or dedicated pods against a living backlog, we track velocity, we surface scope pressure weekly, and we make the trade-off explicit — cut something or add capacity. Grown-ups on both sides." },
      { type: "h2", text: "7. What's their staff turnover?" },
      { type: "p", text: "Ask directly: 'how long has the average engineer been at your company?'. Under 12 months means you'll get someone new mid-project. Over 3 years means the culture is retaining talent. At Origami our senior engineers average 3-5 year tenures — because we treat them like adults and pay them competitively." },
      { type: "h2", text: "The takeaway" },
      { type: "p", text: "A great custom software development company looks boring from the outside — same senior engineers, weekly releases, transparent tools, dull retrospectives. That boringness is the value. Everything exciting in this space is a warning sign." },
      { type: "p", text: "If you want to see how Origami handles this — from senior-only staffing to weekly release cadence to eval-first AI — see how we approach engagements or book a scoping call." },
    ],
  },
  {
    slug: "build-vs-buy-custom-software-2026",
    title: "Build vs buy: when to build custom software in 2026",
    excerpt:
      "The single most misdiagnosed decision in enterprise software. Here's the framework we use with every client — and the four cases where 'build' is almost always the right answer.",
    date: "2026-02-23",
    read: "8 min read",
    tag: "Custom Software",
    body: [
      { type: "p", text: "Every CTO we work with is holding a build-vs-buy decision. The failure mode is not that people pick wrong — it's that they don't apply a framework, and end up rationalising whichever choice matches the team's mood that week." },
      { type: "p", text: "Here is the framework we bring into every engagement. It's not novel. It's just the version that survives contact with real projects." },
      { type: "h2", text: "Rule 1: Buy your commodities, build your differentiators" },
      { type: "p", text: "Your billing? Buy Stripe. Your email? Buy Resend or SendGrid. Your auth? Buy Clerk, Auth0 or Emergent Auth. Your CRM? Buy Salesforce or HubSpot." },
      { type: "p", text: "Your product experience — the thing the customer actually pays you for? Build. Every serious differentiator you have will erode if you outsource it to a generic SaaS that also serves your competitors." },
      { type: "h2", text: "Rule 2: If the market moves faster than the vendor, build" },
      { type: "p", text: "This is the rule that killed a lot of no-code + low-code decisions in the AI era. Between 2023 and 2026, LLM providers released major capabilities every six weeks. Any SaaS that bought vs. built its AI features 18 months ago is now behind — the vendors couldn't keep up." },
      { type: "p", text: "Rule of thumb: if the technology underlying the feature is doubling in capability every 12 months, build. If it's stable (payments, auth, log ingestion), buy." },
      { type: "h2", text: "Rule 3: If integration cost exceeds build cost, build" },
      { type: "p", text: "The hidden cost of buying is integration. Vendor APIs change, SSO configurations drift, webhook payloads break, and vendors get acquired. If integrating and maintaining a vendor SaaS costs more over 3 years than building the equivalent from scratch, the buy was the wrong call." },
      { type: "p", text: "We've seen this exact miscalculation on document parsing (buying an off-the-shelf OCR SaaS that couldn't handle the client's document shapes), on search (buying Algolia at $10k/mo when a Postgres FTS index would have covered 95% of the use case), and on notification systems (buying a $2k/mo transactional email vendor when Resend at $20/mo covered everything)." },
      { type: "h2", text: "Rule 4: If compliance ties the buy to your walls, build" },
      { type: "p", text: "This is why healthcare, legal, banking and defence still build so much. Any vendor SaaS that requires data to leave your compliance perimeter is fighting an uphill regulatory battle. Custom-built, sovereign, single-tenant deployments (like our Document Intelligence platform) exist because 'trust the SaaS with your regulated data' is a career-limiting bet." },
      { type: "h2", text: "The four cases where building is almost always right" },
      { type: "p", text: "1. **The core product experience** — build. 2. **AI features that will differentiate your product for the next 24 months** — build. 3. **Anything that touches regulated data behind a compliance perimeter** — build. 4. **Anything where the vendor's roadmap is meaningfully slower than your product velocity** — build." },
      { type: "h2", text: "The three cases where buying is almost always right" },
      { type: "p", text: "1. **Undifferentiated infrastructure** (auth, payments, email, logs, observability, error tracking). 2. **Categories with 10+ mature vendors and stable APIs** (analytics, CRM, HRIS). 3. **Anything a $30/mo SaaS covers before you have paying customers**." },
      { type: "h2", text: "How Origami approaches this" },
      { type: "p", text: "We don't have a build-bias. About 40% of our discovery engagements end with 'don't build — buy X, integrate Y, and here's how'. Because the goal is your outcome, not our billing hours. When we do recommend building — and we do, often — it's because we've walked through this framework and one of the four 'build' triggers fired." },
    ],
  },
  {
    slug: "saas-mvp-development-90-days-playbook",
    title: "SaaS MVP development in 90 days — the actual playbook",
    excerpt:
      "The MVP that ships is the one you scoped honestly on day one. Here's the exact week-by-week plan we use with VC-backed founders to get to a paying customer in a quarter.",
    date: "2026-02-22",
    read: "9 min read",
    tag: "Custom Software",
    body: [
      { type: "p", text: "The problem with 'MVP' as a term is that it's been diluted to mean 'anything smaller than the final vision'. A real MVP is much narrower: one core loop, one type of user, one workflow, one paying customer proof point. Everything else is scope creep dressed as ambition." },
      { type: "p", text: "Here's the 90-day plan we run with VC-backed founders. It works because every week has a specific artefact — no hand-waving, no 'we're building infrastructure'." },
      { type: "h2", text: "Weeks 1–2: Discovery" },
      { type: "p", text: "Not brand strategy. Not user personas. **One question**: what is the smallest thing a real customer will pay for? Interview 5-8 target users, define the core loop, write it up as a one-page brief. If the brief is more than one page, you haven't decided yet." },
      { type: "p", text: "Artefact at end of week 2: a one-page product brief, a wireframe of the core loop, and a landing page that describes the MVP." },
      { type: "h2", text: "Weeks 3–4: Design + technical spike" },
      { type: "p", text: "Design the core loop in Figma to a level detailed enough to build from. In parallel, a senior engineer builds throwaway spikes on the technical unknowns — usually 2-3 things: 'can we integrate with X vendor cleanly?', 'does the AI feature actually give useful outputs?', 'is the third-party API reliable enough?'." },
      { type: "p", text: "Artefact at end of week 4: high-fidelity design of the core loop + risk register with each technical unknown marked green/yellow/red." },
      { type: "h2", text: "Weeks 5–8: Build v0" },
      { type: "p", text: "Two senior engineers, one designer, one PM. Weekly demos on Fridays. The goal is a functional core loop that a friendly customer can actually use — not something polished." },
      { type: "p", text: "The single most important discipline in these four weeks: **do not add anything to the scope**. Every 'wouldn't it be cool if' idea goes on the v1 list. Founders who cannot enforce this end up 4 months in with a broken v0." },
      { type: "p", text: "Artefact at end of week 8: internal build, deployed to a staging env, walk-throughable end-to-end." },
      { type: "h2", text: "Weeks 9–10: Design partner rollout" },
      { type: "p", text: "Onboard 3-5 design partners. Not a beta group. Specific individual users who have committed to using the product for real work. Watch them use it. Log everything. Fix the top 5 friction points." },
      { type: "p", text: "Artefact at end of week 10: 3-5 real users, at least one with recurring usage." },
      { type: "h2", text: "Weeks 11–12: Ship + pricing" },
      { type: "p", text: "Public launch: landing page live, pricing set, Stripe integrated, first paying customer signed. This is the artefact of the whole engagement — not 'a working product' but 'a paying customer'." },
      { type: "p", text: "Founders who skip pricing until 'we have more data' are the ones who spend another 6 months building. Pricing is a research tool, not a monetisation tool. Set a number, be prepared to change it." },
      { type: "h2", text: "What kills MVPs in 90 days" },
      { type: "p", text: "1. **Scope creep from the founder**. The bar for adding anything to the v0 backlog has to be extreme. 2. **Underestimating deployment work**. Auth, payments, SSO, email — allocate 15-20% of engineering time to plumbing. 3. **Not scoping AI features tightly enough**. LLM features are magic in demos and messy in production; if AI is core to the MVP, treat it as its own workstream with its own evals from day one." },
      { type: "h2", text: "The Origami MVP model" },
      { type: "p", text: "We run this 90-day plan as a fixed-scope engagement. Two senior engineers, one designer, one product lead, one QA. Weekly demos, transparent Jira, direct engineer access. Typical budget $150k–$220k depending on integration complexity. If you want the paying-customer version of an MVP in a quarter, book a scoping call." },
    ],
  },
  {
    slug: "legacy-modernization-without-big-bang-rewrite",
    title: "Legacy modernization without the big-bang rewrite",
    excerpt:
      "The rewrite is the wrong instinct. Here's the strangler-fig pattern applied to real enterprise codebases — with a working 24-month roadmap and the traps that kill most modernization projects.",
    date: "2026-02-21",
    read: "11 min read",
    tag: "Custom Software",
    body: [
      { type: "p", text: "The single most reliable way to burn $10M and 2 years is to rewrite a legacy enterprise system 'from scratch on modern infrastructure'. It never works. The rewrite starves the current system of maintenance while never quite catching up on feature parity, and the org either abandons the project or ships a version 2 that's worse than the original." },
      { type: "p", text: "Modernization is a series of small, boring migrations that compound. Here's how it actually works." },
      { type: "h2", text: "The strangler-fig pattern in one paragraph" },
      { type: "p", text: "Named after a real botanical species. You plant the new system alongside the old, route a slice of traffic to it, gradually widen the slice as confidence grows, and eventually the new has 'strangled' the old — which can be deprecated without downtime. First described by Martin Fowler in 2004, still the correct pattern in 2026." },
      { type: "h2", text: "Step 1: Anticorruption layer" },
      { type: "p", text: "Wrap the legacy system in a facade — a thin API layer that exposes its data + operations in a clean, modern shape. Every new consumer talks to the facade, not the legacy system directly. This lets you evolve the underneath without touching every consumer." },
      { type: "p", text: "The facade is boring code. That's a feature. It's the piece the modernization hinges on for the next 24 months." },
      { type: "h2", text: "Step 2: Instrument everything" },
      { type: "p", text: "You cannot migrate what you cannot measure. Before touching business logic, add tracing (OpenTelemetry), metrics (Prometheus), logs (Vector, Loki) and error tracking (Sentry). Understand exactly what traffic each legacy endpoint receives, from whom, and how often. Half the endpoints you thought were critical will turn out to be called by nothing. Half the endpoints you thought were vestigial will be someone's monthly report generator." },
      { type: "h2", text: "Step 3: Pick the first slice" },
      { type: "p", text: "Rules for the first slice: (a) high value to the org, (b) contained blast radius, (c) clear data ownership. A great first slice is often something like 'user management' or 'notifications' — coherent, well-understood, and touches every part of the system so you learn the org's real interfaces." },
      { type: "p", text: "Bad first slices: the heart of the transaction engine, anything with unclear ownership, anything already mid-refactor by another team." },
      { type: "h2", text: "Step 4: Dual-write, dual-read, verify" },
      { type: "p", text: "For the slice you picked: write to both systems, read from the old, verify the new produces the same answer. Do this for 4-8 weeks. Almost every big rewrite failure is because this step was skipped." },
      { type: "h2", text: "Step 5: Cut over" },
      { type: "p", text: "Once dual-write has been clean for weeks: flip the read to the new. Keep dual-write for another 4 weeks as insurance. Then deprecate the old code path for that slice. Congratulations — you've modernized 5% of the system." },
      { type: "h2", text: "Step 6: Repeat" },
      { type: "p", text: "You're going to do this 15-25 times over 18-24 months. The rhythm is: each slice is 4-8 weeks, each slice is celebrated internally, each slice provides a demo that funds the next slice. The org sees continuous progress, not a black-box rewrite." },
      { type: "h2", text: "The three traps that kill modernization" },
      { type: "p", text: "**1. Trying to modernize the schema before the code.** You cannot easily migrate a database while a live production system depends on its exact shape. Modernize the code first, isolate the schema behind repositories, then and only then migrate the storage." },
      { type: "p", text: "**2. Letting the new team ignore the old.** The engineers on the modernization team have to be as fluent in the legacy as they are in the new. Sending 'the new team' to reinvent while 'the old team' keeps the lights on is the recipe for a doomed rewrite." },
      { type: "p", text: "**3. Not deprecating aggressively.** Every slice you strangler-fig must be followed by ripping the old code out. Otherwise you end up with two systems forever." },
      { type: "h2", text: "The 24-month roadmap" },
      { type: "p", text: "Month 1-3: Anticorruption layer + instrumentation. Month 4-6: First slice (usually auth / users / notifications). Month 7-12: Second and third slices, growing team confidence. Month 13-18: Core business logic — the transaction engine, the pricing engine, whatever the heart is. Month 19-24: Data platform, background jobs, reporting. End state: legacy is a museum, running on 1 VM, ready to shut down." },
      { type: "h2", text: "How Origami does it" },
      { type: "p", text: "We run legacy modernizations as embedded senior teams — usually 3-5 engineers plus a lead — working alongside the client's existing team, not replacing them. Weekly slice demos, monthly steering, quarterly board updates. Typical program: 18-24 months, $2-4M loaded, tangible slice-by-slice ROI from month 6 onwards. Book a scoping call if this maps to your situation." },
    ],
  },
  {
    slug: "hipaa-compliant-software-development",
    title: "HIPAA-compliant software development — what actually matters",
    excerpt:
      "BAAs, encryption, audit trails and 'HIPAA compliance' — separating the substance from the compliance theatre. What auditors actually check, and what shipping teams should actually build.",
    date: "2026-02-20",
    read: "10 min read",
    tag: "Healthcare",
    body: [
      { type: "p", text: "Every healthcare software vendor claims to be 'HIPAA compliant'. The claim is nearly meaningless without specifics. HIPAA is not a certification, it's a US federal regulation with specific administrative, physical and technical safeguards. This is the substance." },
      { type: "h2", text: "The one-sentence version" },
      { type: "p", text: "HIPAA (the Health Insurance Portability and Accountability Act, 1996, updated multiple times) protects Protected Health Information (PHI) in the United States. Any software that stores, processes or transmits PHI must implement the Administrative, Physical and Technical Safeguards defined in the Security Rule." },
      { type: "h2", text: "Who has to comply" },
      { type: "p", text: "Two categories: **Covered Entities** (healthcare providers, health plans, healthcare clearinghouses) and **Business Associates** (vendors that handle PHI on behalf of Covered Entities). If you build software that processes PHI for a hospital, insurer or clinician, you're a Business Associate. You need to sign a Business Associate Agreement (BAA) with them." },
      { type: "h2", text: "The technical safeguards that actually get audited" },
      { type: "p", text: "**Access controls.** Role-based access, unique user IDs, automatic logoff. In practice: SSO with SAML/OIDC, RBAC in the database and application layer, session timeouts under 15 minutes for clinical apps." },
      { type: "p", text: "**Audit controls.** Every access to PHI logged. Immutable, tamper-evident logs. Retained 6 years minimum. In practice: append-only audit tables (or an external service like Datadog + retention policy), user + resource + action + timestamp on every PHI read/write." },
      { type: "p", text: "**Integrity controls.** Detect unauthorized modification of PHI. In practice: hashing critical records, or database-level tamper detection." },
      { type: "p", text: "**Transmission security.** Encryption in transit. TLS 1.3, no exceptions. Internal service-to-service traffic encrypted too — 'we're inside the VPC' doesn't cut it any more." },
      { type: "p", text: "**Encryption at rest.** PHI encrypted in storage. Modern cloud providers offer this at the volume level; belt-and-braces implementations add application-level field encryption for the most sensitive columns (SSN, MRN)." },
      { type: "h2", text: "The compliance theatre to ignore" },
      { type: "p", text: "**'HIPAA-certified cloud provider'** — HIPAA doesn't certify cloud providers. AWS, Azure and GCP sign BAAs and offer HIPAA-eligible services; those services are yours to configure correctly. The certification claim is marketing." },
      { type: "p", text: "**'HITRUST certified'** — Actually meaningful. HITRUST is a real certification framework that maps to HIPAA. Getting HITRUST certified takes 6-12 months and $150k-$500k. Enterprises expect it. If you're selling to hospitals, plan for it." },
      { type: "p", text: "**'SOC 2 Type II'** — Meaningful but different. SOC 2 attests to your operational controls broadly. HIPAA is health-specific. Enterprises usually want both." },
      { type: "h2", text: "The BAA in practice" },
      { type: "p", text: "The Business Associate Agreement is a contract that flows down HIPAA obligations from Covered Entity to Business Associate. Real requirements: BAA with every downstream vendor that touches PHI, BAA with every cloud provider, BAA with every third-party API that receives PHI. Documented, dated, current." },
      { type: "p", text: "When we build for healthcare clients, we maintain a BAA registry — every service we use, whether it has a BAA in place, and when it was last reviewed. Auditors love this document." },
      { type: "h2", text: "The AI wrinkle" },
      { type: "p", text: "AI features in HIPAA-covered products need extra care. Rules of thumb: (1) never send PHI to a provider you don't have a BAA with (OpenAI signs BAAs at the enterprise tier; Anthropic signs BAAs; Google Cloud Vertex signs BAAs); (2) never use PHI to fine-tune public models; (3) log every LLM call as a PHI access event." },
      { type: "p", text: "For teams that can't or won't send PHI to a hosted LLM provider, the pattern is sovereign / on-prem inference on open-weight models. We've deployed this pattern for regulated clients — see Document Intelligence for the architecture." },
      { type: "h2", text: "The Origami POV" },
      { type: "p", text: "HIPAA compliance is boring engineering discipline plus paperwork. The engineering is well-understood; the paperwork is where teams stumble. Every healthcare engagement we take, we spend the first two weeks setting up the compliance scaffolding — BAA registry, audit log framework, encryption policy, incident response runbook — because retrofitting compliance is 10x the effort of building it in from day one." },
    ],
  },
  {
    slug: "fhir-first-modern-healthcare-integrations",
    title: "FHIR-first — building modern healthcare integrations in 2026",
    excerpt:
      "HL7 v2 is the past, FHIR is the present, and every serious healthcare integration project in 2026 is at least partly on FHIR. The pragmatic starting guide.",
    date: "2026-02-19",
    read: "9 min read",
    tag: "Healthcare",
    body: [
      { type: "p", text: "If you're integrating with a US healthcare organisation in 2026, FHIR is where you start. HL7 v2 is still everywhere in the walls of the EMR, but the interfaces the outside world touches — the patient-access API, the provider-directory API, the payer-mandated APIs — are all FHIR. The regulators have decided." },
      { type: "h2", text: "What FHIR actually is" },
      { type: "p", text: "FHIR (Fast Healthcare Interoperability Resources) is a family of standards from HL7 International. Version 4.0.1 (R4) is the current implementable version in production; R5 is finalising. FHIR is RESTful, JSON-first, HTTPS-based, and designed by people who had actually seen a modern web API." },
      { type: "p", text: "The core primitive is a Resource — a JSON object representing a clinical or administrative entity (Patient, Encounter, Observation, MedicationRequest, Practitioner, Organization, Claim, ExplanationOfBenefit, etc.). There are around 150 resource types in R4." },
      { type: "h2", text: "The regulatory push" },
      { type: "p", text: "**CMS Interoperability and Patient Access Rule** — mandates FHIR-based patient-access APIs for most US payers. **21st Century Cures Act — Information Blocking Rule** — providers must share clinical data with patients on request. **CMS Prior Authorization Rule** — coming, mandates FHIR-based prior-auth APIs." },
      { type: "p", text: "The net effect: every US payer and most large providers now expose FHIR APIs to at least some population." },
      { type: "h2", text: "The FHIR endpoints you'll actually build against" },
      { type: "p", text: "**Patient / Encounter / Observation** — the clinical trio. Patient identity, care events, and clinical readings (labs, vitals). About 60% of the reads on any real FHIR API." },
      { type: "p", text: "**MedicationRequest / MedicationStatement / AllergyIntolerance / Condition** — the med / problem list trio. Care history." },
      { type: "p", text: "**DocumentReference / DiagnosticReport / Binary** — the unstructured doc endpoints. Where PDFs, lab reports and imaging live." },
      { type: "p", text: "**Coverage / Claim / ExplanationOfBenefit** — the money side. Insurance coverage, claims submitted, EOBs returned." },
      { type: "p", text: "**Practitioner / Organization / Location** — the directory endpoints." },
      { type: "h2", text: "Auth: SMART on FHIR" },
      { type: "p", text: "FHIR itself doesn't specify auth. The industry standard is SMART on FHIR — OAuth 2.0 + OpenID Connect, with FHIR-specific scopes (`patient/*.read`, `user/Observation.write`, etc.). If you're not building against SMART, you're not building against FHIR seriously." },
      { type: "p", text: "SMART also defines app-launch flows — how a third-party app launches inside the EMR with a patient context. This is how modern EMR-embedded apps work." },
      { type: "h2", text: "The pain points to expect" },
      { type: "p", text: "**Vendor drift.** Epic's FHIR is not Cerner's is not athenaHealth's. All conform to R4, all have quirks. Plan for a per-vendor test suite." },
      { type: "p", text: "**US Core profiles.** The US Core Implementation Guide constrains which fields are mandatory in the US context. Most vendors implement US Core; make sure your app requires only US Core mandatories, otherwise you'll get null pointer exceptions in the wild." },
      { type: "p", text: "**Bulk data vs single-patient.** Bulk FHIR ($export) is a completely different beast from patient-scoped reads. Different rate limits, different auth scopes, different pagination. Plan accordingly." },
      { type: "p", text: "**Rate limits.** Vendor rate limits are aggressive and undocumented. Expect 429s. Design retries, jitter, and back-off from day one." },
      { type: "h2", text: "The FHIR-adjacent tooling to know" },
      { type: "p", text: "**HAPI FHIR** — Java reference implementation. The default self-hosted FHIR server." },
      { type: "p", text: "**Medplum, Aidbox, Firely Server** — commercial FHIR servers. Modern DX, hosted or self-hosted." },
      { type: "p", text: "**Inferno** — official FHIR conformance test suite. Every serious FHIR integration is validated against Inferno." },
      { type: "p", text: "**Synthea** — synthetic patient data generator. Test your FHIR app against realistic data without HIPAA risk." },
      { type: "h2", text: "How Origami approaches FHIR builds" },
      { type: "p", text: "We start with the vendor stack the client actually connects to (Epic, Cerner/Oracle Health, athenaHealth, Meditech, Veradigm) and build a small conformance harness before writing a single line of business logic. Once we know exactly what the vendor's FHIR returns, we build the app on top with confidence." },
      { type: "p", text: "Every FHIR integration we've shipped has taken 30-40% less time in the second month than the first — because the first month is 90% about understanding vendor quirks. Once the conformance harness is in place, everything else moves." },
    ],
  },
  {
    slug: "ai-in-healthcare-five-real-use-cases",
    title: "AI in healthcare — five use cases that actually ship (and five that don't)",
    excerpt:
      "The healthcare AI hype is bigger than the market. Here are the LLM and ML use cases we've seen deployed to production in real health systems — and the ones that reliably die in pilot.",
    date: "2026-02-18",
    read: "10 min read",
    tag: "Healthcare",
    body: [
      { type: "p", text: "Nowhere is the gap between AI demo and AI production wider than in healthcare. The demos are magical, the pilots are common, the production deployments are rare. That's not because healthcare is uniquely hard for AI — it's because healthcare has uniquely low tolerance for hand-waving." },
      { type: "p", text: "Here are five healthcare AI use cases we've seen ship to real production — and five that consistently die in pilot." },
      { type: "h2", text: "SHIPS — 1. Clinical documentation (ambient scribes)" },
      { type: "p", text: "The single biggest healthcare AI win of the last three years. The clinician wears a mic, the ambient LLM transcribes and structures the encounter, the clinician reviews and signs. Products like Abridge, Nabla, Suki and DAX Copilot have deployed to thousands of clinicians." },
      { type: "p", text: "Why it ships: the value prop is unambiguous (30-90 minutes back per clinician per day), the compliance path is well-trodden (BAA + audit + human sign-off), and the failure mode is graceful (human reviews before signing)." },
      { type: "h2", text: "SHIPS — 2. Prior authorization automation" },
      { type: "p", text: "Prior auth is the single most soul-crushing task in US healthcare admin. Modern implementations use LLMs to draft prior-auth submissions from clinical notes, then a human reviewer approves before the X12 278 goes on the wire." },
      { type: "p", text: "Why it ships: extraction from unstructured clinical notes is exactly what LLMs are good at, the human-in-the-loop step keeps the safety story intact, and the ROI is measured in $/hour of nursing time saved. Companies like Cohere Health and Availity are deployed at scale." },
      { type: "h2", text: "SHIPS — 3. Claim status Q&A" },
      { type: "p", text: "'Has claim 12345 been paid yet? If not, why?' A grounded RAG layer over the X12 837/835/276/277 transaction stream + payer implementation guides answers this in plain English. The user gets citations back to the underlying documents; the ops team gets 4 hours a day back." },
      { type: "p", text: "This is the same architecture as our Document Intelligence product, applied to healthcare claims instead of contracts. Sovereign, cited, cost-transparent." },
      { type: "h2", text: "SHIPS — 4. Radiology second-read" },
      { type: "p", text: "Not the sci-fi 'AI replaces radiologists'. The reality: computer-vision models flag likely findings on chest X-rays and CTs, a radiologist reviews and either agrees or overrides. FDA-cleared products (Aidoc, Rad AI, Annalise.ai) have real deployments." },
      { type: "p", text: "Why it ships: narrow scope, clear ground truth (biopsy or follow-up imaging), regulator-cleared, workflow-integrated. The killer app is 'triage' — surfacing likely acute cases to the top of the worklist." },
      { type: "h2", text: "SHIPS — 5. Patient-facing symptom triage" },
      { type: "p", text: "NHS 111 online, Ada Health, Buoy, Symptomate. Not diagnosis — triage. 'Given what you're describing, you should book a same-day GP visit; call 999 if X, Y or Z happens meanwhile'. Deployed to tens of millions of users." },
      { type: "p", text: "Why it ships: the value is genuine (self-service triage reduces call-centre load), the risk is manageable (always safer-erring), and the human handoff is graceful (escalate to human)." },
      { type: "h2", text: "DIES IN PILOT — 1. AI-generated clinical decision support" },
      { type: "p", text: "The 'AI recommends the next diagnostic test / drug' feature. Dies because: no clinician wants to be second-guessed by a black box on a legal-liability-carrying decision, no regulatory path is clean, and the value prop is 'saves the clinician 30 seconds sometimes' when they'd rather save 30 minutes of documentation." },
      { type: "h2", text: "DIES IN PILOT — 2. Fully autonomous scheduling agents" },
      { type: "p", text: "The idea that an AI agent will negotiate appointments across multiple providers autonomously. Consistently dies on integration complexity (every provider's scheduling system is different), consent flows (patients want to see and confirm), and edge cases (insurance verification, prep instructions)." },
      { type: "h2", text: "DIES IN PILOT — 3. Predictive readmission modelling" },
      { type: "p", text: "Predict which patients will be readmitted within 30 days. Everyone builds one. Almost nobody deploys it meaningfully. Dies because: predictions get made too late to change behaviour, care teams don't have capacity to act on the prediction, and the model's precision at useful recall is usually just okay." },
      { type: "h2", text: "DIES IN PILOT — 4. Freeform patient chatbots on general LLMs" },
      { type: "p", text: "'Chat with our AI nurse about anything'. Dies because: hallucination + patient safety is a catastrophic combination, the compliance story is impossible to defend, and every deployment gets one bad interaction that makes headlines. See ChatGPT + eating-disorder helpline. Do not do this." },
      { type: "h2", text: "DIES IN PILOT — 5. Fully generative medical imaging" },
      { type: "p", text: "AI generates synthetic imaging for training or teaching. Interesting research, no clear product line. Dies because: nobody trusts synthetic imaging for real clinical decisions, and using it for training runs into the 'was our model trained on hallucinated data' problem." },
      { type: "h2", text: "The pattern" },
      { type: "p", text: "AI ships in healthcare when: (a) there's a clear human review step, (b) the model is narrow-scope with clear ground truth, (c) the workflow already exists and AI accelerates a known task. AI dies in pilot when it aspires to replace clinical judgment or handle open-ended patient interactions without guardrails." },
      { type: "p", text: "The Origami approach to healthcare AI: pick the boring, high-ROI use cases, ship with evals + human-in-the-loop + audit logs from day one, and let clinicians be the ones who sign anything that reaches a patient chart." },
    ],
  },
  {
    slug: "prior-authorization-automation-with-ai",
    title: "Prior authorization automation with AI — the practical playbook",
    excerpt:
      "The most annoying task in US healthcare admin. LLMs are unusually well-suited to it — if you deploy them correctly. Here's the pattern we've seen work in production.",
    date: "2026-02-17",
    read: "8 min read",
    tag: "Healthcare",
    body: [
      { type: "p", text: "Prior authorization is the tax the US healthcare system levies on itself. A clinician orders a test or a drug, the payer requires pre-approval, someone (usually a nurse) assembles the clinical documentation and submits it, the payer approves or denies, and the process often takes days. The American Medical Association estimates 12+ hours per physician per week spent on prior auth support." },
      { type: "p", text: "This is exactly the kind of task LLMs are unusually good at — extracting structured data from unstructured clinical notes, matching it against payer criteria, drafting a submission — as long as they're deployed with the right guardrails." },
      { type: "h2", text: "The workflow, broken down" },
      { type: "p", text: "1. **Detection** — the ordering system flags an order that requires prior auth. Sometimes explicit (formulary check), sometimes inferred (CPT + payer combination)." },
      { type: "p", text: "2. **Documentation assembly** — pull relevant notes, imaging reports, prior treatment history from the EMR. Historically a human task; the LLM opportunity." },
      { type: "p", text: "3. **Criteria matching** — the payer publishes clinical policy criteria (LCDs, NCDs, formulary criteria). Match assembled documentation against them." },
      { type: "p", text: "4. **Submission** — package as an X12 278 or (increasingly) a FHIR-based prior-auth resource. Send." },
      { type: "p", text: "5. **Response handling** — approval, denial with reason, or request for additional documentation." },
      { type: "h2", text: "Where LLMs add value" },
      { type: "p", text: "**Documentation assembly.** LLMs are excellent at reading through 30 pages of clinical notes and pulling out the specific data points a payer requires: 'has the patient tried and failed metformin?' 'is there imaging showing X?' 'when was the last elevated HbA1c?'. This is retrieval + extraction at its most useful." },
      { type: "p", text: "**Criteria matching.** Given a payer's clinical policy (a PDF document), an LLM can compare it point-by-point against assembled documentation and produce a 'this meets/does not meet' response for each criterion. A human reviews the disagreements." },
      { type: "p", text: "**Draft appeal letters.** When a prior auth is denied, someone writes an appeal citing specific clinical evidence. LLMs draft the first version; a clinician reviews and sends." },
      { type: "h2", text: "The architecture" },
      { type: "p", text: "The architecture we've seen work well: (1) RAG retrieval over the patient chart (grounded, cited); (2) structured extraction into a normalized form; (3) rule-based matching against payer criteria (deterministic); (4) LLM only for the free-text summary + rationale sections; (5) mandatory human review before submission." },
      { type: "p", text: "The critical bit is step (5). No LLM output goes to a payer without a human clicking approve. The value prop is not automation-away-humans; it's automation-of-drudgery — 3 minutes of clinician review instead of 25 minutes of nurse documentation assembly." },
      { type: "h2", text: "The compliance overlay" },
      { type: "p", text: "PHI is involved in every step, which means: BAA with the LLM provider (OpenAI Enterprise, Anthropic, or self-hosted); audit log every LLM call as a PHI access event; encryption in transit and at rest; SOC 2 + HIPAA compliance for the software; ideally HITRUST if selling to hospitals." },
      { type: "p", text: "For clients who can't send PHI to a hosted LLM, the pattern is sovereign / on-prem inference on open-weight models (Llama, Qwen, Mistral). Same architecture as our Document Intelligence product." },
      { type: "h2", text: "The regulatory tailwind" },
      { type: "p", text: "**CMS Prior Authorization Rule (2024-2027 phased)** — mandates FHIR-based prior-auth APIs for Medicare Advantage, Medicaid managed care, and QHP payers. Impact response times drop from days to 72 hours. This is the largest structural change to US prior auth in a decade, and it makes AI-assisted PA more valuable (fast + accurate wins), not less." },
      { type: "h2", text: "The economics" },
      { type: "p", text: "Rough numbers on a real deployment: 200 prior auths per week per clinic, 20 minutes each on the old workflow = 66 hours/week. AI-assisted workflow: 3-5 minutes each = 15 hours/week. Net saving: 50 nurse-hours per clinic per week. At $60/hr loaded cost, that's $150k/clinic/year." },
      { type: "p", text: "The economics work at basically any operator scale. That's why this is one of the fastest-growing healthcare AI verticals." },
      { type: "h2", text: "How Origami builds these" },
      { type: "p", text: "Standard engagement: 8-week build of the core RAG + extraction layer against a client's EMR (Epic, Cerner, athena), 8-week integration to their existing prior-auth submission pipeline, 4-week production hardening + evals + human-in-the-loop workflow. Total 5 months, single senior engineer + product lead + designer. Deployed to production. Book a scoping call if this is on your roadmap." },
    ],
  },
  {
    slug: "what-is-edi-electronic-data-interchange-2026-guide",
    title: "What is EDI? The 2026 guide to Electronic Data Interchange",
    excerpt:
      "EDI still moves trillions of dollars of B2B trade every year — and quietly runs healthcare, banking, retail and logistics. A plain-language guide to what it is, how it works, and where it's going next.",
    date: "2026-02-16",
    read: "12 min read",
    tag: "EDI",
    body: [
      { type: "p", text: "Every year, more than 20 billion Electronic Data Interchange (EDI) transactions move between businesses worldwide — purchase orders, invoices, shipping notices, healthcare claims, insurance eligibility checks, banking remittances. It is the single largest, most invisible layer of B2B software in the global economy, and unless you work in retail, healthcare, banking or logistics, you have probably never seen a line of it." },
      { type: "p", text: "That is a problem. Because in 2026, EDI is at the same inflection point that on-premise software was in 2010: fundamentally sound, wildly entrenched, and quietly under-served by the current generation of tools. This guide is the plain-language starting point — what EDI is, how it actually works, and why it is worth understanding even if you never touch a raw X12 file." },
      { type: "h2", text: "The one-sentence definition" },
      { type: "p", text: "Electronic Data Interchange is the computer-to-computer exchange of business documents in a standardised, machine-readable format — no humans, no PDFs, no email, no re-typing. When Walmart tells one of its suppliers exactly which SKUs to ship to which distribution centre by which date, that instruction is an EDI document." },
      { type: "h2", text: "Why EDI exists at all" },
      { type: "p", text: "Imagine you are a retailer with 5,000 suppliers. Each supplier has its own way of representing a purchase order: different fields, different formats, different units, different order of information. Doing business with all of them requires either (a) accepting whatever each of them sends and reconciling manually, or (b) forcing every one of them to use the same standard. Retailers picked (b), and EDI is the resulting standard." },
      { type: "p", text: "The core value proposition has not changed in 50 years: agree on the format once, then never re-type a purchase order again. What has changed is how the transport, transformation and business logic around EDI is built — that layer is now ripe for modernisation with APIs and AI." },
      { type: "h2", text: "The two major EDI standards you'll see" },
      { type: "p", text: "There are two dominant EDI standards in 2026: ANSI ASC X12 (dominant in North America) and UN/EDIFACT (dominant in Europe and used globally). Both are text-based, both use segment/element structures, and both are absolutely nobody's idea of a modern data format. Neither is going away." },
      { type: "p", text: "There are also industry-specific dialects: HL7 for healthcare (arguably its own thing, but often lumped in), TRADACOMS for UK retail (largely deprecated), VDA for German automotive, and NCPDP for US pharmacy. Everything else typically maps into or out of X12 or EDIFACT at some point." },
      { type: "h2", text: "The transaction sets you'll actually see" },
      { type: "p", text: "In X12, business documents are called transaction sets and are numbered. A handful of these run the majority of B2B commerce:" },
      { type: "p", text: "**EDI 810** — Invoice. The bill." },
      { type: "p", text: "**EDI 850** — Purchase Order. What the buyer wants." },
      { type: "p", text: "**EDI 855** — PO Acknowledgment. The supplier saying yes/no/partial." },
      { type: "p", text: "**EDI 856** — Advance Ship Notice. What's in the box before it arrives." },
      { type: "p", text: "**EDI 820** — Payment / Remittance Advice." },
      { type: "p", text: "**EDI 837** — Healthcare claim. How every US insurance claim gets submitted." },
      { type: "p", text: "**EDI 835** — Healthcare claim payment / remittance." },
      { type: "p", text: "**EDI 270 / 271** — Healthcare eligibility inquiry / response." },
      { type: "p", text: "There are hundreds more, but if you master those eight, you've covered maybe 80% of B2B EDI traffic." },
      { type: "h2", text: "How EDI actually moves" },
      { type: "p", text: "EDI documents move over a handful of transport protocols. In order of prevalence in 2026:" },
      { type: "p", text: "**AS2** (Applicability Statement 2) — HTTPS-based, encrypted, receipt-acknowledged. The de-facto standard for direct trading-partner exchange in retail and healthcare." },
      { type: "p", text: "**SFTP** — Secure FTP. Simpler, still widely used, less enterprise-grade audit trail." },
      { type: "p", text: "**Value-Added Networks (VANs)** — Third-party clearing houses (SPS Commerce, TrueCommerce, OpenText, IBM Sterling) that broker EDI between partners. Reliable, expensive, and dominant in verticals where trading partners can't be trusted to run AS2." },
      { type: "p", text: "**AS4** — Newer, SOAP-based, mandated by e-invoicing regulations in some EU countries. Growing." },
      { type: "p", text: "**API + EDI hybrids** — REST APIs that emit or ingest EDI on the wire. Increasingly the way modern SaaS companies bridge to legacy EDI partners." },
      { type: "h2", text: "The four things every EDI implementation actually needs" },
      { type: "p", text: "Every EDI integration, whether custom or SaaS, boils down to four responsibilities:" },
      { type: "p", text: "1. **Transport** — get the file to and from the trading partner (AS2, SFTP, VAN, API). 2. **Translation** — parse raw X12/EDIFACT into your internal schema, and produce it back on the wire. 3. **Validation** — reject malformed documents fast; catch the ones that will silently break downstream. 4. **Business logic** — the actual rules of your business applied to the parsed document (does this PO match a contract? does this claim have the right modifiers?)." },
      { type: "p", text: "Most legacy EDI systems bundle all four in a proprietary monolith. Modern architectures split them: transport handled by a managed AS2/SFTP layer, translation handled by an open-source parser (or an LLM, more on that below), validation as pure functions, business logic as regular application code." },
      { type: "h2", text: "Where EDI is failing in 2026" },
      { type: "p", text: "EDI itself is not failing — the tooling around it is. The three most common pain points we see when clients bring us into EDI-adjacent projects:" },
      { type: "p", text: "**Onboarding a new trading partner takes 6–12 weeks.** Not because the standard is unknown, but because every partner has quirks and every existing EDI stack requires specialist skills to modify." },
      { type: "p", text: "**Nobody knows what breaks when.** A trading partner changes a field by one character, and 40,000 shipments get rejected at the receiver, and nobody notices for three days because the observability layer is a nightly report." },
      { type: "p", text: "**Cost per transaction stays high.** VANs charge per KC (kilocharacter), meaning a business paying $50k/year in EDI fees to move data that AWS would ferry for $12/month." },
      { type: "h2", text: "How AI changes EDI in 2026" },
      { type: "p", text: "LLMs turn out to be surprisingly good at three things EDI teams have always paid consultants to do:" },
      { type: "p", text: "**Mapping a new trading partner's schema.** Feed the LLM a sample of the partner's raw file plus your target schema, and it produces a mapping proposal in minutes rather than weeks. A senior engineer still reviews it, but the 80% is done in one prompt." },
      { type: "p", text: "**Explaining why a document was rejected.** An X12 999 rejection code is human-readable in the same way a stack trace is human-readable: yes, technically. An LLM turns it into a plain-English 'the tax jurisdiction code in segment N4 element 04 is required for California destinations' — which is what the operations team actually needed." },
      { type: "p", text: "**Anomaly detection on transaction flows.** Feed a week of transaction volumes into a lightweight model, and it flags 'invoices from partner X are down 40% today, and the ones we did get are missing PO references' — before the accounts team notices in Monday's report." },
      { type: "p", text: "We wrote a follow-up guide on this exact pattern: EDI modernisation with AI and APIs. The short version is: keep the standard, replace the tooling." },
      { type: "h2", text: "What Origami builds around EDI" },
      { type: "p", text: "We build the modern layer on top of EDI: AS2/SFTP transport as a managed service, LLM-assisted trading-partner onboarding, observability that treats every transaction as a first-class event, and business-logic services that expose EDI-backed workflows as clean internal APIs. If you have an EDI stack that costs too much, breaks too often and takes too long to change, that's the engagement." },
      { type: "p", text: "For an example of how we've applied a similar 'grounded, cited, cost-aware' architecture to unstructured document Q&A, see our Document Intelligence product." },
      { type: "h2", text: "The takeaway" },
      { type: "p", text: "EDI is not going anywhere in 2026. Neither is the industry that runs on it. The opportunity is in the layer above — the modern tooling, the AI-assisted mapping, the observability, the cost-per-transaction — where the incumbents have been quietly complacent for a decade. That is the corner Origami has been building in." },
    ],
  },
  {
    slug: "edi-vs-api-integration-2026",
    title: "EDI vs API integration in 2026 — when to use each",
    excerpt:
      "'Just use an API' works when both sides agree. When your trading partner is a 40-year-old distributor with an AS2 endpoint and a phone number, EDI still wins. Here's how we decide.",
    date: "2026-02-15",
    read: "8 min read",
    tag: "EDI",
    body: [
      { type: "p", text: "The most common question we get on any B2B integration engagement in 2026 is: EDI or API? A decade ago the answer was 'API if you can, EDI if you must'. Today it's more nuanced — and getting it wrong costs six-figure re-implementations." },
      { type: "h2", text: "The core difference" },
      { type: "p", text: "EDI is a document standard. It says: this is what a purchase order looks like, this is what an invoice looks like, this is what a shipping notice looks like. It does not care how the document moves — AS2, SFTP, VAN, HTTPS, floppy disk, whatever." },
      { type: "p", text: "APIs are a transport pattern. They say: hit this URL with this JSON and get that JSON back. They do not care what the document means — that's on you to define, per partner, per integration." },
      { type: "p", text: "You can absolutely wrap EDI in an API (POST an X12 850 to a REST endpoint), and you can absolutely define an EDI-like standard on top of APIs (OpenAPI schemas describing purchase orders). The label doesn't matter. What matters is: who else already speaks this language?" },
      { type: "h2", text: "When EDI still wins" },
      { type: "p", text: "**Retail supply chain.** Walmart, Target, Costco, Amazon Vendor Central — every major North American retailer has an EDI-first onboarding process. If you want to sell into one of them, you speak EDI or you don't sell." },
      { type: "p", text: "**Healthcare payer/provider exchange.** HIPAA mandates the use of X12N transaction sets (837 claims, 835 payments, 270/271 eligibility). No API rebellion is going to overturn a federal regulation." },
      { type: "p", text: "**Automotive OEM tier-one supply.** VDA in Germany, X12 in the US. Fifty years of tooling, none of it moving." },
      { type: "p", text: "**Ocean freight and customs.** UN/EDIFACT is the lingua franca of every port, customs authority and container line. APIs exist on top but the underlying standard is EDI." },
      { type: "h2", text: "When APIs win" },
      { type: "p", text: "**Any greenfield SaaS-to-SaaS integration.** Two modern SaaS products exchanging data? APIs, JSON, webhooks. There is no scenario where introducing EDI makes sense between two 2020s-era SaaS products." },
      { type: "p", text: "**Mobile-first commerce (Shopify, Stripe, Square).** Consumer commerce has moved off EDI at the small-merchant level. Enterprise commerce still uses it on the back-end, but the front door is APIs." },
      { type: "p", text: "**Real-time inventory, pricing and personalisation.** EDI is batch-oriented. If you need sub-second responses, EDI is architecturally the wrong choice." },
      { type: "p", text: "**Fintech.** Almost entirely API-first. The rare exception (ACH NACHA files, SWIFT messages) is closer to EDI in spirit but has its own dedicated ecosystem." },
      { type: "h2", text: "When you need both" },
      { type: "p", text: "This is where 90% of enterprise integration engagements actually land: EDI on the outside, APIs on the inside. Your legacy trading partners send you X12 850s over AS2, an EDI gateway parses them into JSON, an internal REST/GraphQL API exposes the parsed documents to the rest of your organisation, and business logic runs on the API layer where developers actually want to work." },
      { type: "p", text: "This hybrid pattern lets you keep the trading-partner contracts (which are worth millions of dollars a year) while modernising the internal developer experience (which is worth engineering velocity and retention)." },
      { type: "h2", text: "The decision framework" },
      { type: "p", text: "Ask three questions:" },
      { type: "p", text: "**1. Who is your counterparty?** If they already have an EDI stack, meet them where they are. If they don't, don't drag them into EDI." },
      { type: "p", text: "**2. Are you in a regulated vertical?** Healthcare, government procurement, some financial services — EDI is mandated. The question isn't 'if', it's 'how'." },
      { type: "p", text: "**3. Is this batch or real-time?** EDI is optimised for batch. Real-time use cases are almost always better served by APIs, even if you have to sit on top of an EDI-based system of record." },
      { type: "h2", text: "The Origami POV" },
      { type: "p", text: "Ninety percent of the 'EDI vs API' arguments we walk into are false dichotomies. Almost every real-world B2B integration is EDI at the boundary and APIs everywhere else. What matters is the quality of the layer between them: how fast a trading partner can be onboarded, how cheaply a transaction moves, how much observability you get for free, and how many senior engineers you have to hire to keep it alive." },
      { type: "p", text: "If you want to see how we've applied the same 'legacy on the outside, modern APIs on the inside' pattern to document intelligence, see our Document Intelligence product." },
    ],
  },
  {
    slug: "edi-modernisation-with-ai",
    title: "EDI modernisation with AI — what actually works",
    excerpt:
      "Trading-partner mapping in minutes instead of weeks. Rejection triage in plain English. Anomaly detection that fires on Monday morning, not Wednesday. The pragmatic AI wins for EDI teams.",
    date: "2026-02-14",
    read: "10 min read",
    tag: "EDI",
    body: [
      { type: "p", text: "There's a lot of AI theatre in the EDI space right now: vendors promising 'AI-powered EDI' that turns out to be a fuzzy-matching algorithm from 2013 with a chat interface bolted on. Meanwhile, the actual wins from LLMs and modern ML in EDI are unglamorous, boring and enormously valuable. Here's what we've seen work in production." },
      { type: "h2", text: "Win #1 — Trading-partner mapping in minutes" },
      { type: "p", text: "Historically the single most expensive activity in an EDI shop is onboarding a new trading partner. Every partner has quirks: they call the ship-to code SHIP-TO in one segment and SHIPTO in another; their PO reference lives in a non-standard element; their date format is MMDDYY while yours is YYYYMMDD." },
      { type: "p", text: "An LLM handed a sample of the partner's raw file plus your target schema will produce a mapping proposal in one prompt. It won't be perfect. It doesn't need to be — a senior integration engineer reviews it, fixes the 20% that's wrong, and ships. The 6-week onboarding drops to 2 days." },
      { type: "p", text: "What matters here is the review workflow, not the mapping. LLMs get 80% right and 20% subtly wrong, so the discipline is: every mapping goes through a diff review, every diff gets tested against a corpus of that partner's real historical documents, and every deployed mapping ships with an eval that runs on every message." },
      { type: "h2", text: "Win #2 — Rejection triage in plain English" },
      { type: "p", text: "When a trading partner sends back an X12 999 (Implementation Acknowledgment) with a rejection, the raw error looks like: 'AK4*3*81*7*Y'. A human being can technically read that. Nobody wants to." },
      { type: "p", text: "Feed the same rejection to a small LLM (Claude Haiku, GPT-5 Mini) with the trading partner's implementation guide as context, and you get: 'Segment N4, element 04 (State) is missing for a US destination. Add the state code and retransmit.' That's the message that goes to the ops team. The 15-minute triage becomes 15 seconds." },
      { type: "p", text: "The cost is minuscule — a few thousand tokens per rejection, cached because rejections repeat. The impact is measured in operator-hours saved per week." },
      { type: "h2", text: "Win #3 — Anomaly detection that actually catches things" },
      { type: "p", text: "Legacy EDI observability is a nightly summary email. It tells you what happened yesterday. Modern anomaly detection uses simple time-series models (Prophet, or lightweight LLM classification with structured outputs) to spot patterns as they emerge:" },
      { type: "p", text: "'Invoices from partner X are down 40% in the last 4 hours. Historical median at this hour is 320. Current: 190. Root cause suggestions: partner X had a routine batch job schedule change last week; check if a new schedule window applies.'" },
      { type: "p", text: "That's the alert that goes to Slack at 10am on Monday, not the report that hits the CFO's inbox at 8am on Wednesday." },
      { type: "h2", text: "Win #4 — Structured extraction from unstructured docs" },
      { type: "p", text: "Not everything a trading partner sends is EDI. Many still send PDF purchase orders, faxed invoices, and emailed shipping instructions. Historically these got manually keyed into an ERP." },
      { type: "p", text: "Modern VLMs (GPT-5, Claude Sonnet 4.5, Gemini 3) extract structured data from these documents with accuracy in the high-90s. Layered with human-in-the-loop review for low-confidence extractions, this eliminates a category of data-entry work that used to consume a full FTE per hundred partners." },
      { type: "h2", text: "Win #5 — Explainable compliance for auditors" },
      { type: "p", text: "In regulated verticals (healthcare, financial services), every EDI transaction has to be auditable. When a claim is denied, why? When a payment was withheld, why? Traditionally that meant a compliance officer digging through logs and stitching together the story from three systems." },
      { type: "p", text: "A grounded LLM Q&A layer on top of the transaction store answers these questions with page-level citations back to the underlying documents — the same architecture as our Document Intelligence product, applied to EDI transactions instead of contracts. Auditors get plain-English answers with proof; compliance teams get their time back." },
      { type: "h2", text: "What NOT to do with AI in EDI" },
      { type: "p", text: "**Don't let an LLM produce EDI documents autonomously.** The failure modes are catastrophic: hallucinated PO numbers, invented SKUs, wrong amounts. Deterministic templates + validated data go on the wire; LLMs go in the tooling around it." },
      { type: "p", text: "**Don't skip evals.** An LLM-based mapping that works 95% of the time still corrupts 5 out of every 100 transactions — potentially thousands of dollars of downstream reconciliation. Evals aren't optional." },
      { type: "p", text: "**Don't chase real-time.** LLM inference latency is fine for tooling and diagnostics, not for the hot path of transaction acceptance. Keep the LLMs in the offline and near-real-time layers." },
      { type: "h2", text: "How Origami does it" },
      { type: "p", text: "We build the modernisation layer, not another EDI platform. Concretely: LLM-assisted mapping tools inside the developer workflow, plain-English rejection triage in the ops dashboard, anomaly detection in the observability layer, and RAG-grounded compliance Q&A for auditors. All of it sits on top of whatever EDI stack you already have — Boomi, MuleSoft, Cleo, SPS Commerce, Sterling, or a bespoke build." },
      { type: "p", text: "The economics are usually obvious. A single senior integration engineer onboarding 40 partners a year at 6 weeks each costs about $250k in loaded time. Cut that to 2 days per partner and the ROI on the tooling is measured in weeks, not quarters." },
    ],
  },
  {
    slug: "edi-850-purchase-order-explained",
    title: "EDI 850 Purchase Order — a plain-language explainer",
    excerpt:
      "The single most common B2B document in North American retail. What every segment means, why the format looks the way it does, and how to send one that doesn't get rejected.",
    date: "2026-02-13",
    read: "7 min read",
    tag: "EDI",
    body: [
      { type: "p", text: "Of the several hundred X12 transaction sets, one dominates North American retail: the EDI 850, the Purchase Order. When Walmart, Target, Costco, Amazon Vendor or any large retailer wants to buy something from a supplier, it sends an 850. If you sell into any of them, you receive 850s. If you handle any of that supplier integration work, you read 850s. This is a plain-language guide to what one looks like and how it hangs together." },
      { type: "h2", text: "The anatomy of an 850" },
      { type: "p", text: "An 850 is a text document made of segments. Each segment starts with a two- or three-letter tag, followed by elements separated by a delimiter (usually '*'), and terminated by another delimiter (usually '~' or newline). Human-readable is a stretch, but readable-enough with practice." },
      { type: "p", text: "The minimum viable 850 has roughly a dozen segment types. The full spec allows for a hundred or so. Most retailers use fifteen to twenty-five." },
      { type: "h2", text: "The segments you'll always see" },
      { type: "p", text: "**ISA** — Interchange Control Header. Envelope-level metadata: sender/receiver IDs, date, control number." },
      { type: "p", text: "**GS** — Functional Group Header. Groups related transactions." },
      { type: "p", text: "**ST** — Transaction Set Header. Marks the start of one 850." },
      { type: "p", text: "**BEG** — Beginning of Purchase Order. Order number, order type, order date. This is the marquee segment — it says 'this is order 12345, dated 2026-02-15, of type New Order'." },
      { type: "p", text: "**REF** — Reference Identification. Any additional reference numbers (contract number, blanket PO reference, department code)." },
      { type: "p", text: "**DTM** — Date/Time Reference. Required-by-date, cancel-after-date, ship-window dates." },
      { type: "p", text: "**N1 / N3 / N4** — Name / Address / Geographic Location. Who to ship to, bill to, buyer address." },
      { type: "p", text: "**PO1** — Baseline Item Data. The actual line items. There is one PO1 loop per SKU, and this is where the money lives." },
      { type: "p", text: "**PID** — Product/Item Description. Free-text description of each item." },
      { type: "p", text: "**CTT** — Transaction Totals. Line-count totals, hash totals — used to detect truncation." },
      { type: "p", text: "**SE / GE / IEA** — Closing segments that mirror the openers." },
      { type: "h2", text: "The three things that get 850s rejected" },
      { type: "p", text: "**Envelope errors.** The ISA has strict field-position and padding rules. Get one character wrong and the receiver rejects the whole file with a TA1 (Interchange Acknowledgment) before it ever gets parsed." },
      { type: "p", text: "**Missing REF numbers.** Every retailer has its own set of required REF qualifiers (Walmart wants a Department Number in a specific REF*DP; Target wants a Vendor Number in a REF*VN). Missing one gets you a 997/999 rejection at the transaction level." },
      { type: "p", text: "**Wrong date formats or wrong DTM qualifiers.** Ship-not-before, ship-not-after and required-by-date are all separate DTM segments with different qualifiers. Confusing them causes downstream fulfilment chaos even when the document technically parses." },
      { type: "h2", text: "A minimal 850 example" },
      { type: "p", text: "Here's what a stripped-down 850 looks like, with segment terminators shown as newlines for readability:" },
      { type: "p", text: "```\nISA*00* *00* *ZZ*BUYERCORP *ZZ*SUPPLIER01 *260215*1000*U*00401*000000001*0*P*>\nGS*PO*BUYERCORP*SUPPLIER01*20260215*1000*1*X*004010\nST*850*0001\nBEG*00*NE*PO-2026-001**20260215\nREF*DP*065\nDTM*002*20260301\nN1*ST*STORE 4192 DC\nN3*100 DISTRIBUTION DR\nN4*BENTONVILLE*AR*72712\nPO1*1*100*EA*15.99**BP*ABC-123\nPID*F****WIDGET, BLUE, LARGE\nCTT*1\nSE*10*0001\nGE*1*1\nIEA*1*000000001\n```" },
      { type: "p", text: "That's a real 850, however stripped down. It says: BUYERCORP is ordering 100 units of SKU ABC-123 (a large blue widget), at $15.99 each, from SUPPLIER01, delivered to Store 4192 DC in Bentonville, AR, by 2026-03-01, under Department 065." },
      { type: "h2", text: "The ecosystem around the 850" },
      { type: "p", text: "An 850 rarely arrives alone. It's usually followed by an 855 (PO Acknowledgment) from the supplier, then an 856 (Advance Ship Notice) when the goods leave the warehouse, then an 810 (Invoice) after the goods are received. Reconciliation between these four documents is where most of a supplier's back-office work actually happens." },
      { type: "h2", text: "The takeaway" },
      { type: "p", text: "The 850 is boring, entrenched, and quietly runs a large chunk of the global retail economy. If you're building software that touches retail supply chain in North America, you will encounter 850s. Learn the twenty core segments, respect the retailer-specific quirks, and invest in the tooling around it — mapping, validation, observability, rejection triage. The document itself isn't going anywhere, but the layer around it is where all the current opportunity lies." },
    ],
  },
  {
    slug: "hl7-vs-x12-healthcare-edi",
    title: "HL7 vs X12 — the two EDI worlds inside healthcare",
    excerpt:
      "The same claim moves through both. HL7 handles clinical data; X12 handles the money. Confusing the two is one of the fastest ways to lose credibility in a healthcare integration meeting.",
    date: "2026-02-12",
    read: "8 min read",
    tag: "EDI",
    body: [
      { type: "p", text: "Every healthcare integration project eventually hits the same wall: HL7 and X12 are both called 'healthcare EDI', they both exist inside the same organisations, they're both mandated by regulators, and they do completely different things. This is the plain-language sorting of them." },
      { type: "h2", text: "The one-line difference" },
      { type: "p", text: "**HL7** carries clinical data — patient records, lab results, discharge summaries, orders. **X12** carries administrative and financial data — claims, eligibility, remittance, prior authorisations. If the message is about the patient's health, it's HL7. If it's about the patient's bill, it's X12." },
      { type: "h2", text: "What HL7 actually is" },
      { type: "p", text: "HL7 is a family of standards from Health Level Seven International. Three generations coexist today:" },
      { type: "p", text: "**HL7 v2** — Pipe-delimited text messages. Still by far the most widely deployed HL7 flavour, particularly in EMRs, LIS, RIS and PACS integrations. If you've ever seen an ADT^A01 (patient admission) message, that's HL7 v2." },
      { type: "p", text: "**HL7 v3 / CDA** — XML-based clinical documents. Never achieved v2's dominance in messaging, but the CDA (Clinical Document Architecture) subset is widely used for continuity-of-care documents." },
      { type: "p", text: "**HL7 FHIR** — RESTful, JSON-native, modern. The direction of the industry. Mandated for US patient-access APIs. Every serious healthcare integration project in 2026 is at least partly on FHIR." },
      { type: "h2", text: "What X12 actually is" },
      { type: "p", text: "X12 in healthcare (specifically the X12N subset) is what HIPAA mandates for all electronic administrative transactions between payers and providers in the US. The core transaction sets:" },
      { type: "p", text: "**837** — Healthcare Claim (Professional, Institutional, or Dental). The bill." },
      { type: "p", text: "**835** — Claim Payment / Remittance Advice. The response to the bill." },
      { type: "p", text: "**270 / 271** — Eligibility inquiry and response. 'Is this patient covered?'" },
      { type: "p", text: "**276 / 277** — Claim Status inquiry and response. 'Has my claim been processed yet?'" },
      { type: "p", text: "**278** — Prior Authorisation." },
      { type: "p", text: "**820** — Premium Payment / Enrollment." },
      { type: "p", text: "**834** — Benefit Enrollment and Maintenance." },
      { type: "p", text: "**999** — Implementation Acknowledgment (the rejection message)." },
      { type: "h2", text: "How the same encounter flows through both" },
      { type: "p", text: "Consider a routine visit. The patient arrives, is admitted (HL7 ADT^A01 fires from the EMR to the LIS and PACS), receives lab tests (HL7 OML^O21 order, ORU^R01 result), is discharged (HL7 ADT^A03 with associated CDA discharge summary), and then goes home. That entire clinical journey is HL7." },
      { type: "p", text: "Meanwhile, the billing office batches up the encounter and submits an 837 Professional to the payer. The payer runs eligibility (270 sent, 271 received), adjudicates the claim, and returns an 835 with either a payment or a denial reason code. That entire financial journey is X12." },
      { type: "p", text: "Neither system usually knows the other exists. That's a feature — clinical data and financial data have different privacy, retention and access requirements — but it's also the source of most of the pain in health-tech integration work." },
      { type: "h2", text: "The integration patterns that come up over and over" },
      { type: "p", text: "**FHIR-to-X12 bridging.** Modern patient-access apps (built on FHIR) that also need billing context. The pattern: pull clinical FHIR from the EMR, correlate to the X12-based claims history from a clearinghouse, present a unified view to the patient." },
      { type: "p", text: "**HL7 v2 to FHIR migration.** Legacy EMR emits v2, downstream consumer wants FHIR. A translation layer (Mirth, Rhapsody, or a bespoke build) sits between them." },
      { type: "p", text: "**X12 837 generation from clinical events.** The EMR knows what happened; the billing system needs to submit the claim. A rules engine translates encounter data into an 837, catches obvious errors (missing modifiers, invalid CPT combinations) before submission." },
      { type: "p", text: "**AI-assisted prior auth (X12 278).** The single most soul-crushing task in US healthcare admin. Modern implementations use LLMs to draft prior-auth documentation from clinical notes, then a human reviewer approves before the 278 goes on the wire." },
      { type: "h2", text: "The regulatory backdrop" },
      { type: "p", text: "HIPAA mandates the X12N transactions. The 21st Century Cures Act and CMS Interoperability Rules mandate FHIR-based patient-access APIs. The Info-Blocking Rule requires providers to share clinical data with the patient on request. All of this is why every US healthcare organisation is running both stacks simultaneously in 2026 — you can't ignore either one." },
      { type: "h2", text: "How Origami thinks about healthcare integrations" },
      { type: "p", text: "Two rules we bring into every healthcare engagement: 1) never treat HL7 and X12 as the same thing (even though the org may call it all 'EDI'), and 2) build the modern layer — observability, AI-assisted mapping, rejection triage — as first-class, because the underlying standards aren't changing but the tooling around them is where the actual leverage lives." },
      { type: "p", text: "For an example of the RAG-grounded, cited, cost-transparent architecture we've applied to healthcare policy Q&A, see our Document Intelligence product. The same architectural pattern maps cleanly to X12 claim triage and HL7 encounter summarisation." },
    ],
  },
  {
    slug: "why-mobile-first-is-still-the-right-call-in-2026",
    title: "Why mobile-first is still the right call in 2026",
    excerpt:
      "The web got fast again and AI got useful, but the first tap of the day still happens on a phone. Here's how we think about mobile-first for culture-forward brands.",
    date: "2026-02-10",
    read: "6 min read",
    tag: "Mobile",
    body: [
      { type: "p", text: "Every year for the last five years, someone has predicted the end of the mobile app. Progressive web apps would replace it. Then voice would. Then AR. Then AI agents would just transact on our behalf and we wouldn't tap anything at all." },
      { type: "p", text: "Five years on, the home screen still wins. The first thing most people touch in the morning is a glass rectangle, and the apps on it are where commerce, culture and money actually happen. The browser is a fallback. The agent is a feature inside the app, not the replacement for it." },
      { type: "h2", text: "Why mobile is still the home for the brand" },
      { type: "p", text: "When a brand has a relationship with a real audience — fans, players, traders, travellers — that relationship lives where the audience already lives. Push notifications, biometric login, offline state, the lock-screen presence, App Store ranking, in-app purchases, native gestures: none of these have a real web equivalent in 2026, and most of them got better in the last 12 months, not worse." },
      { type: "p", text: "We've shipped mobile apps for hip-hop fans (HipHopGrails), fantasy bettors (PlaySQOR), retail traders (RealProfits), shoppers (VideoShops, GetCashback) and beach travellers (OnlyBeaches). The variable changes, the conclusion doesn't: the engaged user comes back through the home screen, not through a search box." },
      { type: "h2", text: "What mobile-first actually means now" },
      { type: "p", text: "It does not mean \"build mobile first, then a website\". It means designing the experience around the constraints and capabilities of a phone in someone's hand — and letting those constraints shape product decisions across every surface, including web." },
      { type: "p", text: "In practice, that's a checklist we use early in any engagement: cold start under 1.5 seconds; 60fps scroll on lists that matter; biometric login by default; deep-linking that survives push, email and shared URL; offline-first state on any screen the user might open in transit; analytics on tap latency, not just session length." },
      { type: "h2", text: "Where AI fits in" },
      { type: "p", text: "AI doesn't replace the app — it rides inside it. The most engaging AI features we've shipped this year are inside mobile apps: Wholosophy's coach, RealProfits' trade co-pilot, GetCashback's offer ranker. Each one is a feature, not a product, and each one needed the surrounding app to make it useful." },
      { type: "p", text: "If you remove the app, AI alone is a chatbot with a brand on top. If you keep the app and add AI, you get a product that feels like the future." },
      { type: "h2", text: "The takeaway" },
      { type: "p", text: "Mobile-first in 2026 isn't about choosing a platform. It's about being honest that the home screen is still the most valuable real-estate your brand will ever rent — and building like you intend to live there." },
    ],
  },
  {
    slug: "shipping-llm-features-without-shipping-a-demo",
    title: "Shipping LLM features without shipping a demo",
    excerpt:
      "Most LLM features look great in a demo and fall apart in production. Here's the observability, eval and rollback stack we wrap around every AI feature.",
    date: "2026-02-02",
    read: "9 min read",
    tag: "AI",
    body: [
      { type: "p", text: "There's a pattern that has cost teams real money over the last two years. It looks like this: someone hacks together an LLM feature on a Friday, the demo is magical, leadership greenlights it, the team ships it Monday — and within a week the support inbox is full of hallucinations, jailbreaks and quietly inflated bills." },
      { type: "p", text: "The feature wasn't bad. The wrapper around it was missing. Production LLM work is 20% prompt and model selection, 80% the operational layer that makes it survive contact with real users. Here's the layer we wrap around every AI feature we ship." },
      { type: "h2", text: "1. Offline evals before any user sees it" },
      { type: "p", text: "Before a feature goes near a real user, we build an eval set. Fifty to two hundred input/output pairs that represent the work the feature is supposed to do. We run the model against the eval set on every prompt change and every model swap, and we score outputs with a combination of deterministic checks (regex, JSON validity, did-it-call-the-right-tool) and LLM-judges scored against a reference rubric." },
      { type: "p", text: "Tools we reach for: LangSmith, Braintrust, or a homegrown harness in pytest. The brand doesn't matter. The discipline does." },
      { type: "h2", text: "2. Online evals once it ships" },
      { type: "p", text: "Offline evals catch regression. Online evals catch reality. We sample real production traffic — anonymised — and grade it the same way, on a rolling basis. If the score on a metric drops by more than X% week-over-week, an alert fires." },
      { type: "p", text: "This is the single biggest difference between an AI product that ages well and one that quietly degrades. Models drift. User behaviour drifts. If you don't measure both, you'll find out from the support inbox." },
      { type: "h2", text: "3. Cost ceilings, per feature" },
      { type: "p", text: "Every LLM feature has a per-request token budget and a per-day spend ceiling. If a request exceeds its budget, it gets truncated or downgraded to a cheaper model. If the daily ceiling hits, we degrade gracefully — the feature shows a fallback message instead of silently burning cash. We've seen too many post-mortems about LLM bills to skip this step." },
      { type: "h2", text: "4. Tracing on every request" },
      { type: "p", text: "We trace every LLM call with OpenTelemetry: which model, how many tokens, how long it took, which tools it called, what the upstream user did before and after. If a customer complains about an output six weeks later, we can pull the exact trace." },
      { type: "h2", text: "5. A rollback that actually works" },
      { type: "p", text: "Prompts and models go through the same release path as code. They're versioned, gated behind feature flags, and rollable from a single switch. We never edit a production prompt by hand — every change is a PR." },
      { type: "h2", text: "6. PII and safety as code, not policy" },
      { type: "p", text: "PII redaction happens at the boundary, not in the prompt. Safety classifiers run before and after generation. Refusals are logged and reviewed weekly. The compliance answer to \"what happens if the model says X\" should never be \"we hope it doesn't\"." },
      { type: "h2", text: "What this gets you" },
      { type: "p", text: "You get an LLM feature that ships on a Tuesday, doesn't melt down by Friday, and gets quietly better month-over-month — instead of one that demos beautifully and requires a war room to keep alive. That's the difference between AI as a marketing line and AI as a product." },
    ],
  },
  {
    slug: "class-ii-vs-class-iii-what-operators-actually-need",
    title: "Class II vs Class III: what operators actually need",
    excerpt:
      "A plain-language walk-through of Class II bingo mechanics and Class III RNG — and the engineering surface that each one demands.",
    date: "2026-01-20",
    read: "11 min read",
    tag: "Gaming",
    body: [
      { type: "p", text: "If you're building a real-money gaming platform in the United States, the first decision isn't a tech-stack decision. It's a regulatory one: are you Class II, Class III, or both? The answer shapes every line of code that comes after." },
      { type: "p", text: "Most non-specialist teams blur the two. Operators don't have that luxury. Here's the plain-language version, with the engineering implications attached." },
      { type: "h2", text: "Class II — the bingo-based world" },
      { type: "p", text: "Under the Indian Gaming Regulatory Act (IGRA), Class II games are bingo and bingo-derived games. The defining technical characteristic: outcomes are determined by a server-drawn bingo, with players competing against each other for prizes drawn from a shared pool. The slot-machine-looking presentation on top is exactly that — a presentation. The math underneath is bingo." },
      { type: "p", text: "What this means for the build:" },
      { type: "ul", items: [
        "A bingo draw engine that operates a shared player pool and emits results deterministically and auditably.",
        "Re-skinnable presentation layers — the same bingo math, visualised as slots, instant-wins or traditional bingo cards.",
        "Compatibility with tribal regulatory frameworks, not state gaming commissions.",
        "Audit trails that map presentation events back to bingo outcomes.",
      ]},
      { type: "h2", text: "Class III — the RNG world" },
      { type: "p", text: "Class III is the casino-style world: slots, table games, instant-win, sportsbook. Outcomes are determined by a certified Random Number Generator. Where Class II is shared-pool, Class III is per-player and stateless." },
      { type: "p", text: "What this means for the build:" },
      { type: "ul", items: [
        "A certified RNG, integrated and audited end-to-end.",
        "RGS (Remote Game Server) integration with third-party math/content studios.",
        "Per-jurisdiction player-protection: limits, cooling-off, self-exclusion, RG controls.",
        "State-level (or tribal compact) regulatory compliance, with the audit and reporting infrastructure that follows.",
      ]},
      { type: "h2", text: "What's the same" },
      { type: "p", text: "Both classes need the same surrounding platform: wallet, KYC, AML, geo-fencing, payments, payouts, responsible-gaming controls, operator dashboards, BI, observability. We've shipped these layers for tribal Class II operators and for fantasy/Class III hybrid platforms like PlaySQOR and Acquire.bet, and 60–70% of the engineering surface is shared." },
      { type: "h2", text: "What's different" },
      { type: "p", text: "The differences sit in three places: the math layer (bingo vs RNG), the certification path (tribal lab vs state-recognised lab like GLI), and the player pool model (shared vs per-player). Get those three right and the rest of the platform is recognisable engineering." },
      { type: "h2", text: "How to choose" },
      { type: "p", text: "Operators don't pick \"Class II vs Class III\" in a vacuum. They pick based on the markets they want to serve, the compacts they hold, and the content they want to license. Many operators run both — Class II content in tribal markets, Class III content in licensed states — on a unified platform. That's the world we build for." },
    ],
  },
  {
    slug: "auctions-are-a-design-problem-before-theyre-an-engineering-one",
    title: "Auctions are a design problem before they're an engineering one",
    excerpt:
      "What we learned building HipHopGrails — why bid mechanics, anti-snipe and event run-of-show are UX concerns first, systems concerns second.",
    date: "2026-01-08",
    read: "7 min read",
    tag: "Commerce",
    body: [
      { type: "p", text: "When we started building HipHopGrails — an auction platform for hip-hop memorabilia and celebrity drops — the assumption inside the team was that auctions were an engineering problem. Bid throughput, queue management, anti-fraud, payments. Hard problems, but known ones." },
      { type: "p", text: "Six months in, we'd shipped all of that. The platform was rock-solid. And the auctions still felt off. The conversion wasn't where we wanted it. The bidders weren't coming back at the rate we'd modelled. Sellers were nervous." },
      { type: "p", text: "The problem wasn't engineering. It was design. Specifically: every auction is a piece of theatre, and we hadn't designed the theatre well enough." },
      { type: "h2", text: "An auction is a clock, not a database" },
      { type: "p", text: "The user-facing artefact of an auction is a countdown, not a list of bids. Every design decision flows from there: how big the clock is, where the bid history sits, whether you see other bidders, how you're notified when you've been outbid, what happens in the last 30 seconds." },
      { type: "p", text: "The first thing we changed was anti-snipe behaviour. The default — \"if a bid lands in the last X seconds, extend the clock by Y\" — is correct mechanically. But the way you communicate it matters. We tried three different visual treatments before we landed on one that made bidders feel like the auction was fair, not rigged. The engineering didn't change. The UX did." },
      { type: "h2", text: "Sellers want a run-of-show, not an admin panel" },
      { type: "p", text: "The other thing we under-engineered initially was the seller experience. Sellers — labels, artists, curators — don't think in CRUD. They think in events. \"This auction goes live at 8pm Eastern, the artist is doing a live drop at 8:15, we want a flash extension at 8:30, payouts go out within 72 hours.\" That's not a database screen. That's a run-of-show document." },
      { type: "p", text: "We rebuilt the seller console as a timeline. One auction is one row. The row has a state machine: scheduled → live → extending → settling → settled. Every action a seller can take is anchored to that timeline. Onboarding got faster. Support tickets dropped." },
      { type: "h2", text: "The engineering re-emerges, but now it serves the design" },
      { type: "p", text: "Once the design was right, the engineering choices got obvious. Real-time bid updates were WebSockets, not long-poll. Anti-snipe extension was a server-authoritative state machine, not a client-side trick. Payouts were a separate worker queue with explicit hold periods. None of that is novel. What was novel was knowing what to build." },
      { type: "h2", text: "The lesson, generalised" },
      { type: "p", text: "Anything with a clock, a crowd and money on it is a design problem first. Auctions, drops, fantasy contests, real-money games, live-shopping events. The engineering follows the design. If you start with the engineering, you'll ship a database with a clock on top — and your audience will feel it." },
    ],
  },
  {
    slug: "why-dotnet-and-azure-is-still-the-right-call-for-high-value-auctions",
    title: "Why .NET + Azure is still the right call for high-value auctions",
    excerpt:
      "Node and Postgres get the blog posts. For high-value auction platforms, the boring stack is still winning — and here's why we doubled down on .NET and Azure for HipHopGrails.",
    date: "2026-02-18",
    read: "8 min read",
    tag: "Auctions",
    body: [
      { type: "p", text: "Every six months, a team building an auction platform asks us the same question. \"Why .NET? Why Azure? Wouldn't Node and AWS be more modern?\" The question is fair. The answer hasn't changed in three years." },
      { type: "p", text: "When you're auctioning a $40,000 Travis Scott McLaren or a $2M Basquiat print run, the stack you pick is doing two jobs. One: it has to be fast enough that the last 30 seconds of a bid war don't feel like dial-up. Two: it has to be auditable enough that when a $40k bid gets disputed, you can prove to a court what happened down to the millisecond. \"Modern\" is the wrong axis. \"Survives an audit\" is the right one." },
      { type: "h2", text: "The bidding engine is the product" },
      { type: "p", text: "Most auction platforms are CRUD apps with a countdown on top. That works fine for an eBay knock-off. It doesn't work for high-value drops where every bid is a financial event with regulatory weight. The bidding engine is the product, and the bidding engine needs four things: strict ordering, sub-100ms broadcast, server-authoritative state, and an audit log that survives subpoena." },
      { type: "p", text: "ASP.NET Core gets you three of those out of the box. SignalR — Microsoft's WebSocket layer — gets you the fourth. Azure SignalR Service handles the scale-out so a 10,000-person live auction doesn't melt the bidding server. We tried the Node/Socket.IO equivalent on an earlier project. It worked. It also required us to build, in-house, three things that .NET ships with: request-scoped DI, structured logging with W3C trace context, and a typed actor model for the auction state machine." },
      { type: "h2", text: "Azure is not AWS-but-worse" },
      { type: "p", text: "AWS is genuinely better at some things — managed Postgres, ML services, the breadth of the marketplace. Azure is genuinely better at a few specific things that matter for an auction platform:" },
      { type: "ul", items: [
        "Azure SignalR Service — the only managed WebSocket layer that handles 100k+ concurrent connections without you operating it yourself.",
        "Azure Front Door + WAF — bot protection, geo-fencing and rate limiting in one product, configured in minutes instead of weeks.",
        "Azure AD B2C — when your auction needs KYC-bound identities and per-jurisdiction identity providers, B2C is years ahead of Cognito.",
        "Azure SQL with audit + always-encrypted columns — the audit trail you'd otherwise hand-roll comes built in.",
        "Closer-than-people-expect parity on price for steady-state workloads, and significantly cheaper egress.",
      ]},
      { type: "p", text: "Are we Azure maximalists? No. We've shipped on AWS for plenty of clients. But for an auction platform handling regulated, high-value transactions in the US tribal and state-level markets, Azure's identity, audit and compliance posture is the easier path." },
      { type: "h2", text: "The .NET ecosystem caught up — and then quietly pulled ahead" },
      { type: "p", text: "The story \"C# is enterprise, Node is modern\" stopped being true around 2022. EF Core matches Prisma feature-for-feature. Minimal APIs are as terse as Express. .NET 8 is the fastest mainstream web runtime on the TechEmpower benchmarks. The tooling — Rider, source generators, hot reload, native AOT — is genuinely state of the art. The hiring story is the only place where the perception gap survives, and even that's recovering as bootcamp grads notice the salary differential." },
      { type: "h2", text: "Where we'd not pick this stack" },
      { type: "p", text: "We're not religious. There are projects where we reach for Node, or Go, or Python first. Real-time AI workloads that need to call OpenAI on every request — Node is fine. Internal tools where developer velocity matters more than long-term operability — Next.js full-stack. Highly numeric or ML-adjacent work — Python. Edge-deployed APIs — Go or Rust." },
      { type: "p", text: "But for a regulated platform handling money, state and high-value events — auctions, gaming, fintech rails — .NET on Azure remains the call we make first, the one we defend in architecture reviews, and the one our clients are quietly relieved we picked once the first audit lands." },
      { type: "h2", text: "The takeaway" },
      { type: "p", text: "Stack debates are usually proxy wars for something else: hiring stories, founder backgrounds, what got someone promoted at their last company. For auction work, the right framing is \"what stack still works when the room is full, the lawyer is watching and the regulator is mid-audit?\" .NET and Azure pass that test. That's why HipHopGrails runs on them, and why we'd build the next one the same way." },
    ],
  },
  {
    slug: "the-case-for-senior-only-delivery",
    title: "The case for senior-only delivery — what 7 years and 40 engineers taught us",
    excerpt:
      "Most agencies sell juniors at senior rates. We sell seniors at senior rates and ship in a quarter what pyramid agencies ship in a year. Here's why the model works.",
    date: "2026-02-14",
    read: "7 min read",
    tag: "Operating",
    body: [
      { type: "p", text: "Origami is seven years old and has roughly forty engineers. That number surprises people. They expect bigger. They expect the agency pyramid: a few partners, a layer of project managers, a layer of senior engineers, and a wide base of juniors and offshore contractors doing the actual typing." },
      { type: "p", text: "We don't run that model. Every engineer on every Origami engagement is senior — 8+ years, shipped at least one production platform, owns their own code end-to-end. We've stayed at roughly 40 people on purpose. Here's what seven years of running it this way has taught us." },
      { type: "h2", text: "The pyramid model exists for the agency's economics, not the client's outcomes" },
      { type: "p", text: "If you bill juniors at $150/hour and pay them $50/hour, the pyramid prints money. The catch — for the client — is that those juniors need supervision, the seniors get pulled into review instead of building, and the velocity is a fraction of what the headcount would suggest. A 30-person pyramid team often ships less than a 6-person senior team. We've replaced two of them on existing engagements and watched it happen." },
      { type: "p", text: "The senior-only model has worse unit economics for us. Senior people cost more, they don't 'lever up' the way a pyramid does, and we leave money on the table on every engagement. We're fine with that, because the lifetime value of a happy client who comes back for the second project — and the third, and the fourth — dwarfs the margin we'd add by stuffing juniors onto a team." },
      { type: "h2", text: "What seniors actually do differently" },
      { type: "p", text: "There's a list of things a senior engineer does that a junior doesn't. We could write the list. It would read like every other 'why hire seniors' post on the internet, and it wouldn't capture the actual difference, which is this:" },
      { type: "ul", items: [
        "Seniors say no to features that will hurt the product, and they say it in a meeting, in front of the client, with a reason.",
        "Seniors notice the second-order consequences — the migration that'll be painful, the schema that'll bite at scale, the auth model that won't survive the next compliance review.",
        "Seniors finish things. Not 85%, not 'pending QA', not 'ready for testing' — actually merged, deployed, monitored and handed off.",
        "Seniors ask for less management, less rework and less rescue. A two-person senior team needs roughly one hour of PM time per week. A six-person pyramid team needs roughly fifteen.",
      ]},
      { type: "p", text: "None of these are skills you can train into a junior in 12 months. They come from 5+ years of shipping things that broke, getting paged at 3am, and learning what production really means. That's why we don't try to train juniors into the model — we just hire people who've already been through it." },
      { type: "h2", text: "Forty engineers is not a coincidence" },
      { type: "p", text: "We've thought about getting bigger. We could be. The market would support 200+ engineers at our rates. We've held the line at roughly 40 for one reason: senior engineers don't scale the way juniors do. Every additional senior is a real person we have to find, vet, onboard, retain and trust. We won't hire someone just because the pipeline says we should. So we grow when we find the right person, not when the spreadsheet says we need one." },
      { type: "p", text: "That's also why we cap concurrent engagements. A team can run two serious projects. Not five. Not ten. Two. That number is the number of contexts a senior person can carry without the quality dropping. We protect that number aggressively, even when it costs us a deal." },
      { type: "h2", text: "Twenty-five years of doing this — in someone else's company" },
      { type: "p", text: "Origami is seven years old. The people running it have twenty-five years of shipping software, most of it in someone else's company before this one. That's where the experience lives — in the operators who joined a startup that became a Fortune 500, in the architects who watched a stack scale from 100 users to 100 million, in the leads who shipped through three CTOs and an acquisition. You can't manufacture that in a graduate program. You have to find it, hire it, and protect it." },
      { type: "h2", text: "What it costs you, and what it gives you" },
      { type: "p", text: "Senior-only is more expensive per hour and cheaper per outcome. Our blended day rate is higher than a pyramid agency's. The total cost of the project, end to end, is usually 30–50% lower, because there's less rework, less management, less drama, and fewer surprises in production. That's the trade we offer. Seven years of repeat clients tells us it's the trade serious teams want." },
    ],
  },
  {
    slug: "react-native-vs-native-after-9-mobile-builds",
    title: "How we evaluated React Native vs native after 9 mobile builds",
    excerpt:
      "We've shipped 9 production mobile apps in the last 4 years — some React Native, some fully native. Here's the decision framework we now use, with the trade-offs that actually matter.",
    date: "2026-02-08",
    read: "10 min read",
    tag: "Mobile",
    body: [
      { type: "p", text: "The React Native vs native debate is one of the longest-running arguments in mobile engineering, and most of the public discourse on it is unhelpful — it's either Meta employees telling you RN ships everywhere, or Apple-shop developers telling you Swift is the only serious option. Neither is wrong. Both are missing the question your team is actually trying to answer." },
      { type: "p", text: "Over the last four years we've shipped nine production mobile apps. Five on React Native (HipHopGrails, PlaySQOR, VideoShops, GetCashback, OnlyBeaches). Four fully native (RealProfits iOS-first, two internal tools, one client we can't name). The decision framework we use now is shorter than the one we started with, and we've stopped letting it be a religious debate." },
      { type: "h2", text: "The question that actually matters" },
      { type: "p", text: "It's not 'which is faster' or 'which is more performant'. It's: how much of your product's value is in the rendering layer? If the answer is 'most of it' — your product is a camera, a game, a music player, a 3D viewer, anything where the pixels on screen are the product — go native. The savings from a shared codebase will be eaten by the time you spend fighting the framework." },
      { type: "p", text: "If the answer is 'very little' — your product is a list of things, with screens that fetch data, show it, and let users do CRUD on it (which is 80% of mobile apps including most fintech, e-commerce, content and gaming app shells) — React Native is the right answer. The shared codebase is a real, ongoing 40–60% engineering saving over the life of the product." },
      { type: "h2", text: "Where React Native actually wins" },
      { type: "p", text: "It's not 'write once run everywhere' — that was always a lie. It's three things that compound:" },
      { type: "ul", items: [
        "One product engineering team, not two. The same engineer ships the iOS and Android version of a feature in the same week. Coordination cost goes from O(n²) to O(n).",
        "Hot reload during development. Native devs underrate this because they've forgotten how slow native rebuild loops are.",
        "OTA updates via CodePush / EAS Update. Push a bug fix in 30 minutes instead of waiting four days for App Review. For a business-critical app, this is worth real money.",
        "Hiring liquidity. Senior React engineers outnumber senior Swift+Kotlin pairs by something like 10:1 in the markets we hire from. That's not RN's fault, but it's RN's advantage.",
      ]},
      { type: "h2", text: "Where native actually wins" },
      { type: "p", text: "Same exercise, opposite direction. Native earns its complexity premium when:" },
      { type: "ul", items: [
        "You need 120fps interactions on complex UI. RN's New Architecture closed most of this gap but didn't eliminate it.",
        "You need deep platform integration — Live Activities, App Clips, Widgets, HealthKit, ARKit, advanced background tasks. RN can bridge to all of these but you'll write native code anyway, and now you're maintaining a bridge.",
        "You're shipping a single-platform product. If you're iOS-only for the first 18 months, RN's cross-platform value is zero and you're just paying its cost.",
        "Your app is a game, a creative tool, or anything where the GPU is doing the work.",
      ]},
      { type: "h2", text: "The hidden cost of RN — and how we manage it" },
      { type: "p", text: "RN has a real hidden cost: every native module dependency is a long-term liability. The package author can stop maintaining it. The library can break on a Swift toolchain bump. The peer dependency tree can turn into a maze. We've been bitten by this enough times that we now treat every native dependency as a decision that needs justification, the same way we'd justify pulling in a major library on the backend." },
      { type: "p", text: "Our rule: if a feature needs more than three native modules we don't already use, we re-evaluate whether the feature wants to be native. Sometimes the answer is yes. Sometimes the answer is 'this whole flow should be a native sub-app embedded in the RN shell', which is a pattern that works surprisingly well." },
      { type: "h2", text: "The framework we use now" },
      { type: "p", text: "When a new mobile project lands on our desk, we walk a three-question decision tree:" },
      { type: "ul", items: [
        "1. Is the rendering layer the product? (Camera, game, 3D, music DSP.) If yes → native. Stop.",
        "2. Will this ship on both iOS and Android within the first 12 months? If no → native, on the platform you actually need.",
        "3. Does the team need to push fixes faster than App Review allows? If yes → React Native, for the OTA capability alone.",
      ]},
      { type: "p", text: "If it's a no-no-yes — RN. If it's a yes-yes-no — native. The other combinations are judgment calls, and we make them with the client in the room." },
      { type: "h2", text: "The honest summary" },
      { type: "p", text: "After nine apps, we don't think there's a winner. There's a fit. The teams that get burned are the ones who picked the framework based on a tweet thread or their CTO's last gig, not the actual product. Pick based on where your product's value lives. The rest is implementation detail — and we've shipped both, several times, and would happily ship either again." },
    ],
  },
];

export const CAREERS = [
  {
    role: "Senior Full-Stack Engineer",
    type: "Remote · Full-time",
    location: "Global",
    tags: ["React", "Node", "Postgres", "AWS"],
  },
  {
    role: "Senior Mobile Engineer (iOS / Android)",
    type: "Remote · Full-time",
    location: "Global",
    tags: ["Swift", "Kotlin", "React Native"],
  },
  {
    role: "AI Engineer — LLM Products",
    type: "Remote · Full-time",
    location: "Global",
    tags: ["Python", "LLMs", "RAG", "Evals"],
  },
  {
    role: "Platform Engineer — Gaming",
    type: "Hybrid · Full-time",
    location: "New York / Bengaluru",
    tags: ["Go", "Kubernetes", "RGS", "GLI"],
  },
  {
    role: "Product Designer",
    type: "Remote · Full-time",
    location: "Global",
    tags: ["Figma", "Motion", "Systems"],
  },
  {
    role: "QA & Compliance Engineer",
    type: "Remote · Contract",
    location: "Global",
    tags: ["Automation", "Regulated", "GLI"],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Origami quietly shipped production-quality work while our other partners were still arguing about Jira boards.",
    author: "VP Product",
    org: "Hip-Hop commerce platform",
  },
  {
    quote:
      "Their gaming team understood compliance the way our legal team does. That is rare and worth everything.",
    author: "Chief Operating Officer",
    org: "Tribal gaming operator",
  },
  {
    quote:
      "Senior people, clear reporting, pragmatic architecture. We've extended the engagement twice.",
    author: "CTO",
    org: "Enterprise SaaS",
  },
];

export function getProject(slug) {
  return PROJECTS.find((p) => p.slug === slug) || null;
}
export function getService(slug) {
  return SERVICES.find((s) => s.slug === slug) || null;
}
export function getIndustry(slug) {
  return INDUSTRIES.find((i) => i.slug === slug) || null;
}
export function getAIUseCase(slug) {
  return AI_PRACTICE.useCases.find((u) => u.slug === slug) || null;
}
export function getInsight(slug) {
  return INSIGHTS.find((i) => i.slug === slug) || null;
}

// =====================================================================
// PSEO — Tech stack landing pages (/build/[slug])
// =====================================================================
export const TECH_STACKS = [
  {
    slug: "react-native",
    name: "React Native",
    category: "Mobile",
    overline: "Cross-platform mobile",
    headline: "React Native apps that feel native — because they are.",
    body:
      "We build production React Native apps that ship on the App Store and Play Store with native-grade performance, deep-linking, push, in-app purchases and offline-first state.",
    bullets: [
      "Architecture: Expo or bare RN, native module integration",
      "Performance: 60fps lists, < 1.5s cold start, Hermes",
      "Native bridges for camera, biometrics, secure storage",
      "EAS / Fastlane CI/CD with staged rollouts",
      "Push, deep-linking, in-app purchases and subscriptions",
      "Crash analytics and remote config built in",
    ],
    relatedService: "mobile-app-development",
    relatedWork: ["playsqor", "videoshops", "truewrld", "realprofits"],
  },
  {
    slug: "ios-swift",
    name: "iOS / Swift",
    category: "Mobile",
    overline: "Native iOS",
    headline: "Native iOS apps engineered for the platform.",
    body:
      "Swift, SwiftUI, modern concurrency. We ship native iOS apps that take advantage of every platform capability — from widgets to Live Activities.",
    bullets: [
      "Swift / SwiftUI / Combine / async-await",
      "Widgets, Live Activities, Lock Screen surfaces",
      "Sign in with Apple, App Tracking Transparency",
      "TestFlight + App Store launch + ASO",
      "StoreKit 2 for IAP and subscriptions",
      "App Clips and Universal Links",
    ],
    relatedService: "mobile-app-development",
    relatedWork: ["hiphopgrails", "playsqor"],
  },
  {
    slug: "android-kotlin",
    name: "Android / Kotlin",
    category: "Mobile",
    overline: "Native Android",
    headline: "Native Android apps with Jetpack and Compose.",
    body:
      "Kotlin, Jetpack Compose, modern Android architecture. Built for performance, accessibility and the realities of fragmented devices.",
    bullets: [
      "Kotlin + Jetpack Compose + coroutines",
      "Material 3 design system and theming",
      "Play Billing, Play Integrity, App Bundles",
      "Background work (WorkManager) and notifications",
      "Performance budgets across low-end devices",
      "Play Store launch + staged rollouts",
    ],
    relatedService: "mobile-app-development",
    relatedWork: ["hiphopgrails", "playsqor"],
  },
  {
    slug: "flutter",
    name: "Flutter",
    category: "Mobile",
    overline: "Cross-platform UI",
    headline: "Flutter for pixel-precise, brand-led mobile.",
    body:
      "When the product is the brand, we reach for Flutter. Pixel-precise UIs that look identical on iOS and Android, with native performance and a single codebase.",
    bullets: [
      "Dart 3, Flutter 3.x with Material 3 and Cupertino",
      "Custom design systems and motion-rich UIs",
      "Federated plugins for native capabilities",
      "Riverpod / BLoC state management",
      "iOS and Android builds from a single codebase",
      "Web and desktop targets where useful",
    ],
    relatedService: "mobile-app-development",
    relatedWork: ["videoshops"],
  },
  {
    slug: "nextjs",
    name: "Next.js",
    category: "Web",
    overline: "React, server-first",
    headline: "Next.js sites and apps with Core Web Vitals targets.",
    body:
      "Next.js 14 App Router, Server Components, edge runtimes. We build marketing sites, product surfaces and back-office consoles tuned for speed, SEO and conversion.",
    bullets: [
      "App Router, Server Components, Server Actions",
      "Edge runtimes (Vercel, Cloudflare) and ISR",
      "LCP < 1.5s, INP < 200ms targets",
      "Headless CMS integration (Sanity, Contentful, Payload)",
      "SEO infrastructure: sitemap, robots, JSON-LD",
      "TypeScript-first with end-to-end typing",
    ],
    relatedService: "web-development",
    relatedWork: ["onlybeaches", "wholosophy", "acquire", "getcashback"],
  },
  {
    slug: "react",
    name: "React",
    category: "Web",
    overline: "UI engineering",
    headline: "React, used the way modern teams use it.",
    body:
      "Hooks, suspense, server components, and the patterns that hold up in production. We build component libraries and product surfaces teams can scale on.",
    bullets: [
      "React 18 — Suspense, transitions, concurrent rendering",
      "Component libraries with strict typing",
      "Design systems with Tailwind / CSS-in-JS",
      "Testing with Vitest / Playwright",
      "Code-splitting and bundle budgets",
      "Storybook + visual regression",
    ],
    relatedService: "web-development",
    relatedWork: ["acquire", "realprofits"],
  },
  {
    slug: "nodejs",
    name: "Node.js",
    category: "Backend",
    overline: "Server runtime",
    headline: "Node back-ends that scale predictably.",
    body:
      "TypeScript-first Node services with clean module boundaries, observability and the performance budgets that production demands.",
    bullets: [
      "TypeScript + Fastify / Express / Nest",
      "Worker queues (BullMQ, SQS) for async jobs",
      "Postgres / Redis / Kafka integration",
      "OpenTelemetry tracing and structured logs",
      "Horizontal scaling with stateless services",
      "Auth (JWT, OAuth) and rate-limiting",
    ],
    relatedService: "web-development",
    relatedWork: ["acquire", "playsqor", "getcashback"],
  },
  {
    slug: "python-fastapi",
    name: "Python / FastAPI",
    category: "Backend",
    overline: "AI-friendly server",
    headline: "FastAPI services for AI-heavy products.",
    body:
      "When the back-end is half AI pipeline, half API, FastAPI is our default. Async Python, pydantic typing, OpenAPI docs out of the box.",
    bullets: [
      "FastAPI + pydantic v2 + async/await",
      "LLM integrations: OpenAI, Anthropic, Google",
      "Vector stores (pgvector, Pinecone, Weaviate)",
      "Background workers with Celery / RQ",
      "Postgres / Redis / S3",
      "OpenTelemetry, OpenAPI, Sentry",
    ],
    relatedService: "ai-and-llm-products",
    relatedWork: ["realprofits", "wholosophy"],
  },
  {
    slug: "postgres",
    name: "Postgres",
    category: "Data",
    overline: "Database",
    headline: "Postgres-first data architectures.",
    body:
      "We start with Postgres and only leave when we have to. Row-level security, partitioning, materialized views, pgvector — the breadth covers most of what teams reach for elsewhere.",
    bullets: [
      "Schema design and migrations (Prisma, Drizzle, Alembic)",
      "RLS for multi-tenant isolation",
      "Partitioning, materialized views and indexes",
      "pgvector for embeddings",
      "Replication, PITR, read replicas",
      "Cost-tuned on RDS / Supabase / Neon",
    ],
    relatedService: "data-and-bi",
    relatedWork: ["acquire", "playsqor", "getcashback"],
  },
  {
    slug: "openai-llm",
    name: "OpenAI (GPT-5, GPT-4o)",
    category: "AI",
    overline: "Frontier LLM",
    headline: "OpenAI in production, with budgets and evals.",
    body:
      "GPT-5, GPT-4o, embeddings, vision, voice and Realtime. We build OpenAI-powered features inside production apps — with token budgets, evals and graceful degradation.",
    bullets: [
      "Streaming responses with tool-calling",
      "RAG with OpenAI embeddings + pgvector",
      "Voice agents with the Realtime API",
      "Vision and document understanding",
      "Cost ceilings and rate-limit handling",
      "Offline + online evals via LangSmith / Braintrust",
    ],
    relatedService: "ai-and-llm-products",
    relatedWork: ["realprofits", "wholosophy", "getcashback"],
  },
  {
    slug: "anthropic-claude",
    name: "Anthropic Claude",
    category: "AI",
    overline: "Frontier LLM",
    headline: "Claude Sonnet 4.5 for tool-using agents.",
    body:
      "Claude is our default for agentic, long-context, tool-using workflows. We build production Claude apps with the eval and observability layer wrapped around them.",
    bullets: [
      "Claude Sonnet 4.5 / Haiku 4.5 / Opus 4.5",
      "Tool-calling and computer use",
      "Long-context reasoning over docs",
      "Agentic workflows with retries and budgets",
      "Prompt caching for cost control",
      "PII redaction and safety layering",
    ],
    relatedService: "ai-and-llm-products",
    relatedWork: ["wholosophy", "realprofits"],
  },
  {
    slug: "google-gemini",
    name: "Google Gemini",
    category: "AI",
    overline: "Frontier LLM",
    headline: "Gemini 3 + Nano Banana for vision and multimodal.",
    body:
      "Gemini 3 for large-context multimodal reasoning and Gemini Nano Banana for image generation — wired into product surfaces with the right cost ceilings.",
    bullets: [
      "Gemini 3 Flash / Pro for chat and reasoning",
      "Nano Banana for image generation",
      "Multimodal input — text, image, audio, video",
      "Grounded search and retrieval",
      "Streaming and structured outputs",
      "Cost-aware model routing",
    ],
    relatedService: "ai-and-llm-products",
    relatedWork: ["onlybeaches", "videoshops"],
  },
  {
    slug: "dotnet-and-azure",
    name: ".NET & Azure",
    category: "Backend",
    overline: "Regulated, high-throughput",
    headline: ".NET 8 on Microsoft Azure for regulated, high-value platforms.",
    body:
      "Where the workload is auctions, gaming, fintech or anything regulated, we reach for .NET 8 on Azure. ASP.NET Core, EF Core, Azure SignalR for real-time, Azure AD B2C for KYC-bound identity, Azure SQL with always-encrypted audit. The boring stack is still the right stack when the room is full and the lawyer is watching.",
    bullets: [
      ".NET 8 / ASP.NET Core / EF Core with source generators",
      "Azure SignalR Service for 100k+ concurrent WebSockets",
      "Azure AD B2C for per-jurisdiction KYC-bound identity",
      "Azure SQL with audit + always-encrypted columns",
      "Azure Front Door + WAF for bot, geo and rate protection",
      "Containers on Azure App Service or AKS with blue-green deploys",
    ],
    relatedService: "auctions-and-fan-drops",
    relatedWork: ["hiphopgrails"],
  },
  {
    slug: "python-fastapi",
    name: "Python & FastAPI",
    category: "Backend",
    overline: "AI-native services",
    headline: "Python + FastAPI for AI-native services and data pipelines.",
    body:
      "When the workload is AI, ML, vector search or heavy numeric work, Python is the right call. FastAPI for service surfaces, async-first I/O, Pydantic for typed contracts, and a clean integration story with PyTorch, LangChain and the modern LLM ecosystem.",
    bullets: [
      "FastAPI service surfaces with async I/O and Pydantic",
      "LangChain / LlamaIndex / direct SDK orchestration",
      "Vector stores: pgvector, Pinecone, Weaviate, Qdrant",
      "OpenTelemetry tracing on every LLM call",
      "Eval harnesses (LangSmith, Braintrust, pytest)",
      "Containerised deploys with token + cost ceilings",
    ],
    relatedService: "ai-and-llm-products",
    relatedWork: ["realprofits", "fanrush", "wholosophy"],
  },
];

export function getStack(slug) {
  return TECH_STACKS.find((s) => s.slug === slug) || null;
}

// =====================================================================
// PSEO — Solutions: Service × Industry combo pages (/solutions/[slug])
// Auto-generated from INDUSTRIES.services mapping for high-intent SEO.
// =====================================================================
export const SOLUTIONS = INDUSTRIES.flatMap((ind) =>
  ind.services.map((serviceSlug) => {
    const service = SERVICES.find((s) => s.slug === serviceSlug);
    if (!service) return null;
    return {
      slug: `${serviceSlug}-for-${ind.slug}`,
      serviceSlug,
      industrySlug: ind.slug,
      title: `${service.title} for ${ind.name}`,
      headline: `${service.title} for ${ind.name.toLowerCase()}.`,
      body: `${service.desc} Tailored to ${ind.name.toLowerCase()} — ${ind.blurb.toLowerCase()}`,
    };
  })
).filter(Boolean);

export function getSolution(slug) {
  return SOLUTIONS.find((s) => s.slug === slug) || null;
}

// =====================================================================
// PSEO — Compare pages (/compare/[slug])
// =====================================================================
export const COMPARES = [
  {
    slug: "react-native-vs-flutter",
    a: { name: "React Native", stack: "react-native" },
    b: { name: "Flutter", stack: "flutter" },
    headline: "React Native vs Flutter — which is right in 2026?",
    summary:
      "Both are great. Both ship native-quality apps from a single codebase. The right answer depends on team, brand fidelity and platform-specific requirements.",
    rows: [
      ["Language", "JS / TypeScript", "Dart"],
      ["UI fidelity", "Native components", "Pixel-precise custom"],
      ["Brand-led design", "Good", "Excellent"],
      ["Native module access", "Excellent", "Excellent"],
      ["Hiring market", "Larger", "Smaller but growing"],
      ["Web target", "Possible (RN Web)", "Yes (Flutter Web)"],
      ["Hot reload", "Fast", "Faster"],
      ["Best for", "Content + commerce + RMG", "Brand-led, motion-rich UIs"],
    ],
    verdict:
      "Default to React Native for content, commerce and gaming apps. Reach for Flutter when the product is the brand and pixel-precise consistency across iOS / Android matters more than ecosystem size.",
  },
  {
    slug: "native-vs-react-native",
    a: { name: "Native (Swift / Kotlin)", stack: "ios-swift" },
    b: { name: "React Native", stack: "react-native" },
    headline: "Native vs React Native — when to pick which.",
    summary:
      "Native is unbeatable for platform-specific surfaces and the deepest performance work. React Native wins on velocity, hiring and shared product surfaces.",
    rows: [
      ["Velocity", "Slower (two codebases)", "Faster (one codebase)"],
      ["Performance ceiling", "Highest", "High enough for most apps"],
      ["Platform surfaces", "Widgets, Live Activities, full APIs", "Most via bridges"],
      ["Hiring", "Two specialised teams", "One product team"],
      ["Best for", "Deep platform integration, AAA games", "Most consumer apps"],
    ],
    verdict:
      "Pick native when the product is the platform integration. Pick React Native for everything else — most consumer apps in 2026.",
  },
  {
    slug: "nextjs-vs-remix",
    a: { name: "Next.js", stack: "nextjs" },
    b: { name: "Remix", stack: "nextjs" },
    headline: "Next.js vs Remix — the modern React framework debate.",
    summary:
      "Next.js dominates the ecosystem. Remix has a strong web-fundamentals POV. For most teams in 2026, Next.js is the safer default.",
    rows: [
      ["Ecosystem", "Largest in React", "Smaller, focused"],
      ["Server Components", "First-class", "Loaders / actions"],
      ["Edge runtimes", "Excellent", "Excellent"],
      ["Hiring", "Easier", "Harder"],
      ["Best for", "Almost everything", "Web-fundamentals-first teams"],
    ],
    verdict:
      "Next.js for almost any new build. Remix is a fine pick for teams committed to its model — but the ecosystem gap matters.",
  },
  {
    slug: "openai-vs-claude",
    a: { name: "OpenAI", stack: "openai-llm" },
    b: { name: "Anthropic Claude", stack: "anthropic-claude" },
    headline: "OpenAI vs Claude — model selection in 2026.",
    summary:
      "Both are excellent. Pick per workload. We ship multi-model architectures so we never have to pick once.",
    rows: [
      ["Best for chat / co-pilot", "GPT-5 / GPT-4o", "Sonnet 4.5"],
      ["Best for tool-using agents", "Strong", "Strongest"],
      ["Long context", "Strong", "Best in class"],
      ["Voice / Realtime", "Excellent (Realtime API)", "Limited"],
      ["Vision", "Excellent", "Excellent"],
      ["Image generation", "GPT Image 1", "—"],
    ],
    verdict:
      "We default to multi-model: OpenAI Realtime for voice, Claude Sonnet 4.5 for agents and long-context, OpenAI for chat surfaces. Route per workload.",
  },
  {
    slug: "postgres-vs-mongodb",
    a: { name: "Postgres", stack: "postgres" },
    b: { name: "MongoDB", stack: "postgres" },
    headline: "Postgres vs MongoDB — which database in 2026?",
    summary:
      "Postgres has caught up on document workloads. MongoDB still wins on horizontal scale-out and developer ergonomics for some teams. We default to Postgres.",
    rows: [
      ["Document storage", "JSONB (excellent)", "Native"],
      ["Relational features", "Best in class", "Limited"],
      ["Horizontal scale", "With Citus / partitioning", "Built-in"],
      ["Vector search", "pgvector", "Atlas Search"],
      ["Operational tooling", "Mature", "Mature"],
      ["Best for", "Almost everything", "Doc-heavy + horizontal scale"],
    ],
    verdict:
      "Default to Postgres. Reach for MongoDB only when the workload is genuinely document-shaped and the scale curve is sharp.",
  },
  {
    slug: "ios-vs-android",
    a: { name: "iOS first", stack: "ios-swift" },
    b: { name: "Android first", stack: "android-kotlin" },
    headline: "iOS-first vs Android-first — which platform to launch on.",
    summary:
      "Most US-centric consumer launches still go iOS-first. Global, emerging-market and creator-economy launches often invert that.",
    rows: [
      ["US monetisation", "Higher per user", "Lower per user"],
      ["Global reach", "Lower", "Higher"],
      ["Creator-economy fit", "Mixed", "Strong"],
      ["Side-loading / payments flexibility", "Limited", "More flexible"],
      ["Best for", "US consumer, premium", "Global, creator, emerging"],
    ],
    verdict:
      "If revenue concentrates in the US and feature-flag-style launches matter, ship iOS first. If global reach and Android-skewed audiences matter more, invert.",
  },
  {
    slug: "dotnet-vs-nodejs",
    a: { name: ".NET 8", stack: "dotnet-and-azure" },
    b: { name: "Node.js", stack: "nodejs" },
    headline: ".NET vs Node.js — when to pick which backend.",
    summary:
      "Both are fast, mature and shippable. The right answer depends on the workload — regulated and stateful favour .NET, AI-native and high-velocity product surfaces favour Node.",
    rows: [
      ["Performance ceiling (TechEmpower)", "Top tier", "Top tier"],
      ["Typed-first ergonomics", "C# (best in class)", "TypeScript (good)"],
      ["Regulated / financial workloads", "Stronger ecosystem", "Possible"],
      ["AI / LLM SDK ergonomics", "Catching up", "Best in class"],
      ["WebSockets at scale", ".NET + Azure SignalR", "Socket.IO / native ws"],
      ["Hiring market", "Enterprise-heavy", "Larger, more startup-fluent"],
      ["Best for", "Auctions, gaming, fintech, regulated", "AI products, content, commerce"],
    ],
    verdict:
      "Default to Node.js for content, commerce and AI products. Reach for .NET when the workload is regulated, stateful, or audit-heavy — auctions, gaming and fintech in particular.",
  },
  {
    slug: "azure-vs-aws",
    a: { name: "Microsoft Azure", stack: "dotnet-and-azure" },
    b: { name: "AWS", stack: "nodejs" },
    headline: "Azure vs AWS — picking a cloud for a regulated platform.",
    summary:
      "AWS is broader and deeper across most categories. Azure wins decisively on a handful of capabilities that matter for regulated, identity-bound and real-time platforms.",
    rows: [
      ["Breadth of services", "Excellent", "Best in class"],
      ["Managed WebSockets at scale", "Azure SignalR (best)", "API Gateway / AppSync"],
      ["KYC-bound identity", "Azure AD B2C (best)", "Cognito"],
      ["Audit + always-encrypted DB", "Azure SQL (best)", "RDS + custom"],
      ["Egress pricing", "Cheaper", "More expensive"],
      ["AI / ML breadth", "Catching up (OpenAI partner)", "Best in class (SageMaker)"],
      ["Best for", "Auctions, regulated platforms, identity-heavy", "Almost everything else"],
    ],
    verdict:
      "Default to AWS for breadth, ML depth and marketplace ecosystem. Pick Azure when the platform is regulated, identity-bound or needs managed real-time at scale — auctions, gaming, regulated fintech.",
  },
  // ---- Additional PSEO compare pages ------------------------------------
  ...[
    ["expo-vs-bare-react-native", "Expo", "Bare React Native", "Expo's managed workflow vs bare React Native — which to pick for a new mobile app.", "Expo wins on velocity for 95% of apps. Bare React Native still wins when you need deep native customisation from day one."],
    ["swiftui-vs-uikit", "SwiftUI", "UIKit", "SwiftUI vs UIKit for new iOS apps in 2026.", "Default to SwiftUI. Reach for UIKit only for legacy interop or niche APIs still missing from SwiftUI."],
    ["jetpack-compose-vs-xml", "Jetpack Compose", "Android XML views", "Jetpack Compose vs XML views for Android in 2026.", "Compose for every new screen. Only touch XML when maintaining legacy modules."],
    ["kotlin-vs-java-android", "Kotlin", "Java", "Kotlin vs Java for Android development in 2026.", "Kotlin. It's not close."],
    ["gpt-5-vs-claude-sonnet-4-5", "GPT-5", "Claude Sonnet 4.5", "GPT-5 vs Claude Sonnet 4.5 — 2026 model selection.", "GPT-5 for chat and voice surfaces. Claude Sonnet 4.5 for agents and long-context reasoning. Multi-model in production."],
    ["gpt-5-vs-gemini-3", "GPT-5", "Gemini 3", "GPT-5 vs Gemini 3 — capability and cost tradeoffs.", "GPT-5 leads chat and Realtime voice. Gemini 3 leads long-context multimodal and cost efficiency."],
    ["gemini-3-vs-claude-4-5", "Gemini 3", "Claude Sonnet 4.5", "Gemini 3 vs Claude Sonnet 4.5.", "Gemini 3 for multimodal + cost. Claude Sonnet 4.5 for agentic reliability."],
    ["pgvector-vs-pinecone", "pgvector", "Pinecone", "pgvector vs Pinecone — vector search in 2026.", "Start on pgvector. Move to Pinecone only when scale, filtering or ops become the bottleneck."],
    ["pgvector-vs-weaviate", "pgvector", "Weaviate", "pgvector vs Weaviate — self-hosted vector search options.", "pgvector for pragmatism, Weaviate when you need first-class hybrid search + module ecosystem."],
    ["langchain-vs-llamaindex", "LangChain", "LlamaIndex", "LangChain vs LlamaIndex for RAG apps.", "LlamaIndex when the app is retrieval-first. LangChain for broader orchestration. Neither is required — direct SDKs often win."],
    ["openai-realtime-vs-elevenlabs", "OpenAI Realtime", "ElevenLabs", "OpenAI Realtime vs ElevenLabs for voice agents.", "OpenAI Realtime for fully-integrated STT+LLM+TTS. ElevenLabs for the best voice quality and multi-provider architectures."],
    ["nextjs-vs-nuxt", "Next.js", "Nuxt", "Next.js vs Nuxt — React or Vue for your next app.", "Next.js for the ecosystem lead. Nuxt when the team is Vue-first."],
    ["nextjs-vs-astro", "Next.js", "Astro", "Next.js vs Astro — dynamic apps vs content-heavy sites.", "Next.js for apps. Astro for content-heavy marketing sites and blogs."],
    ["nextjs-14-vs-nextjs-13", "Next.js 14", "Next.js 13", "Next.js 14 vs 13 — is the App Router ready for production?", "Yes. App Router in Next 14 is the recommended default for new projects."],
    ["vercel-vs-cloudflare-pages", "Vercel", "Cloudflare Pages", "Vercel vs Cloudflare Pages for Next.js hosting.", "Vercel for zero-friction Next.js DX. Cloudflare Pages for lower egress and Workers-first architectures."],
    ["stripe-vs-adyen", "Stripe", "Adyen", "Stripe vs Adyen for consumer + platform payments.", "Stripe for startup and creator-economy velocity. Adyen for enterprise cross-border scale."],
    ["stripe-connect-vs-marketplace", "Stripe Connect", "Custom marketplace payments", "Stripe Connect vs a custom marketplace payments stack.", "Almost always Stripe Connect. Roll your own only when Connect materially blocks a real requirement."],
    ["redis-vs-postgres-caching", "Redis", "Postgres", "Redis vs Postgres for caching in 2026.", "Redis for hot paths, session stores and rate limiting. Postgres unlogged tables can go surprisingly far for lighter loads."],
    ["snowflake-vs-bigquery", "Snowflake", "BigQuery", "Snowflake vs BigQuery — picking a data warehouse.", "BigQuery for tight Google Cloud stacks and pay-per-query economics. Snowflake for cross-cloud + shared-data marketplaces."],
    ["dbt-vs-airbyte", "dbt", "Airbyte", "dbt vs Airbyte — modeling vs ingestion.", "They solve different problems — dbt for modeling, Airbyte for ingestion. Most modern stacks use both."],
    ["mixpanel-vs-amplitude", "Mixpanel", "Amplitude", "Mixpanel vs Amplitude for product analytics.", "Amplitude leans free-tier-friendly and enterprise-analytics-strong. Mixpanel is a strong default with cleaner UX."],
    ["posthog-vs-amplitude", "PostHog", "Amplitude", "PostHog vs Amplitude — open-source product analytics vs SaaS.", "PostHog for self-hosted control + feature flags + session replay in one. Amplitude for depth of analytics features."],
    ["playwright-vs-cypress", "Playwright", "Cypress", "Playwright vs Cypress — the e2e testing debate.", "Playwright leads on speed, cross-browser and multi-tab. Cypress for a mature dev-loop DX."],
    ["shopify-vs-custom-commerce", "Shopify", "Custom commerce", "Shopify vs a custom e-commerce build.", "Shopify wins for 90% of merchants. Build custom when the product experience is the differentiator."],
    ["react-native-vs-kotlin-multiplatform", "React Native", "Kotlin Multiplatform Mobile", "React Native vs Kotlin Multiplatform Mobile.", "React Native for the mature JS ecosystem. KMM for teams already deep in Kotlin who want shared business logic."],
    ["figma-vs-sketch", "Figma", "Sketch", "Figma vs Sketch — product design in 2026.", "Figma. Multiplayer, cross-platform, plugin ecosystem — it's not close for teams."],
    ["fastapi-vs-express", "FastAPI", "Express", "FastAPI vs Express — Python vs Node for API services.", "FastAPI for AI-heavy backends. Express (or Fastify) when the ecosystem is TypeScript-first."],
    ["react-vs-vue", "React", "Vue", "React vs Vue for a new SPA.", "React for hiring and ecosystem. Vue for cleaner DX in smaller teams."],
    ["swift-vs-kotlin-shared", "Swift", "Kotlin", "Swift vs Kotlin — native mobile language comparison.", "Different platforms, different jobs — but architecturally very similar. Modern coroutines and structured concurrency have converged."],
    ["twilio-vs-vonage", "Twilio", "Vonage", "Twilio vs Vonage for programmable comms.", "Twilio for depth of SDK and marketplace. Vonage competitive on price and voice quality in specific corridors."],
  ].map(([slug, aName, bName, headline, verdict]) => ({
    slug,
    a: { name: aName },
    b: { name: bName },
    headline,
    summary: `A senior-engineering POV on ${aName} vs ${bName} — what changes in 2026, where each wins, and which we'd default to for greenfield builds.`,
    rows: [
      ["Category leader", aName, bName],
      ["Adoption in 2026", "Widespread", "Strong niche"],
      ["Hiring market", "Broad", "Focused"],
      ["Learning curve", "Moderate", "Moderate"],
    ],
    verdict,
  })),
];

export function getCompare(slug) {
  return COMPARES.find((c) => c.slug === slug) || null;
}

