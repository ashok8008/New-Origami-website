// Centralized content / source-of-truth for the Origami site.
// Edit here and every page picks up the changes.

export const NAV = [
  { label: "About", href: "/about" },
  { label: "Auctions", href: "/auctions" },
  { label: "Class II & III Games", href: "/games" },
  { label: "AI", href: "/ai" },
  { label: "Media", href: "/media" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Careers", href: "/careers" },
];

export const NAV_EXTRA = [
  { label: "Industries", href: "/industries" },
  { label: "Solutions", href: "/solutions" },
  { label: "Build with", href: "/build" },
  { label: "Compare", href: "/compare" },
  { label: "Insights", href: "/insights" },
  { label: "Approach", href: "/approach" },
  { label: "Contact", href: "/contact" },
];

export const CONTACT = {
  email: "hello@origami.dev",
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
    slug: "auctions-and-fan-drops",
    title: "Auctions & Fan Drops",
    short: "Commerce for culture",
    desc:
      "End-to-end auction platforms, drop mechanics and fan-to-artist commerce — the stack behind HipHopGrails and the next wave of celebrity commerce.",
  },
  {
    code: "04",
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
      "Origami is the engineering team for the next chapter of digital media. We build the programmatic, contextual and commerce layer that publishers like Condé Nast Traveller, Garden & Gun and Trusted Media Brands need to grow yield without surrendering control of the user experience or the data.",
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
  // Premium publisher tier — explicitly aspirational targets.
  audience: {
    overline: "Who we build for",
    title: "Publishers in the tier of —",
    note:
      "Condé Nast Traveller, Garden & Gun, Trusted Media Brands, regional newsroom networks and category-defining digital titles. Premium audiences, premium standards.",
    brands: [
      {
        name: "Condé Nast Traveller",
        parent: "Condé Nast",
        focus: "Luxury travel · Culture · Lifestyle",
        positioning: "Premium · Aspirational · Global",
        sister: "Vogue · GQ · The New Yorker · Vanity Fair",
      },
      {
        name: "Garden & Gun",
        parent: "Evening Post Publishing (independent)",
        focus: "Southern U.S. lifestyle — food, culture, travel, outdoors",
        positioning: "High-quality editorial · Strong regional identity",
        sister: "—",
      },
      {
        name: "Trusted Media Brands",
        parent: "TMBI",
        focus: "Mass-market · Practical · Family-friendly",
        positioning: "Broad audience · Ads + subscription + affiliate monetised",
        sister: "Reader's Digest · The Family Handyman · Taste of Home · Birds & Blooms",
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
];

export function getCompare(slug) {
  return COMPARES.find((c) => c.slug === slug) || null;
}

