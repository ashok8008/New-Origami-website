// Centralized content / source-of-truth for the Origami site.
// Edit here and every page picks up the changes.

export const NAV = [
  { label: "About", href: "/about" },
  { label: "Class II & III Games", href: "/games" },
  { label: "AI", href: "/ai" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Careers", href: "/careers" },
];

export const NAV_EXTRA = [
  { label: "Industries", href: "/industries" },
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
    "Senior engineers shipping mobile apps, AI products, auction platforms and Class II / Class III real-money games for repeat clients — from HipHopGrails to FanRush.",
};

export const MARQUEE_WORDS = [
  "Mobile Apps",
  "iOS · Android",
  "React Native",
  "Flutter",
  "AI · LLM · RAG",
  "Hip-Hop",
  "Auctions",
  "Fan Drops",
  "Class II Games",
  "Class III Games",
  "Repeat Clients",
];

// Client logos (wordmark SVGs served from /public/brand/clients/)
export const CLIENTS = [
  { name: "HipHopGrails", file: "hiphopgrails.svg", url: "https://hiphopgrails.com", width: 180 },
  { name: "FanRush", file: "fanrush.svg", url: "https://fanrush.ai", width: 140 },
  { name: "Acquire.bet", file: "acquire.svg", url: "https://acquire.bet", width: 160 },
  { name: "VideoShops", file: "videoshops.svg", url: "https://videoshops.com", width: 160 },
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
    relatedWork: ["fanrush", "hiphopgrails", "videoshops", "truewrld"],
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
    relatedWork: ["acquire", "wholosophy", "nickcooper"],
  },
  "auctions-and-fan-drops": {
    headline: "Commerce built for culture, not generic retail.",
    body:
      "From timed celebrity auctions to artist drops and memorabilia, we've engineered the full commerce surface — bidding, consignment, identity, escrow and payouts.",
    pills: ["Bidding engines", "Consignment", "Payouts", "Identity/KYC", "Mobile-first"],
    bullets: [
      "Timed, live and drop auction mechanics with anti-snipe",
      "Consignment and seller workflows for labels, artists and curators",
      "Escrow, KYC, fraud rules and payouts (Stripe, Adyen, specialist rails)",
      "Ops tooling — inventory, moderation, event run-of-show",
    ],
    relatedWork: ["hiphopgrails", "nickcooper"],
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
    relatedWork: ["acquire"],
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
    relatedWork: ["wholosophy", "truewrld", "acquire"],
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
    relatedWork: ["hiphopgrails", "truewrld", "fanrush"],
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
    relatedWork: ["acquire", "fanrush"],
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
    clients: ["hiphopgrails", "fanrush"],
  },
  {
    slug: "real-money-gaming",
    name: "Real-Money Gaming",
    note: "Class II / III platforms",
    blurb:
      "Server-drawn Class II bingo and Class III RNG platforms for tribal and commercial operators — GLI-aligned and built for compliance teams.",
    services: ["class-ii-and-class-iii-games", "data-and-bi"],
    clients: ["acquire"],
  },
  {
    slug: "celebrity-and-creator-economy",
    name: "Celebrity & Creator Economy",
    note: "Apps for athletes, artists, personalities",
    blurb:
      "We build direct-to-fan apps, commerce and community for athletes, recording artists and cultural personalities.",
    services: ["mobile-app-development", "web-development", "design-and-brand"],
    clients: ["nickcooper", "truewrld", "fanrush"],
  },
  {
    slug: "commerce-and-retail",
    name: "Commerce & Retail",
    note: "Video commerce, marketplaces",
    blurb:
      "Video shoppable commerce, marketplaces and storefronts — with the logistics, payments and identity plumbing attached.",
    services: ["web-development", "mobile-app-development", "ai-and-llm-products"],
    clients: ["videoshops"],
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
    note: "KYC, escrow, payouts",
    blurb:
      "Payment rails, KYC, escrow and payouts — the boring plumbing that everything else depends on.",
    services: ["web-development", "data-and-bi", "ai-and-llm-products"],
    clients: [],
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
    oneLiner: "The auction destination for hip-hop memorabilia and celebrity drops.",
    summary:
      "We designed and engineered HipHopGrails as a destination for curated auctions and exclusive drops from hip-hop artists and culture-forward brands — covering bidding, identity, payouts, consignment workflows and operator tooling.",
    role: ["Product", "Design", "iOS + Android", "Web platform", "Ops tooling"],
    stack: ["React Native", "Next.js", "Node", "Postgres", "Stripe"],
    metrics: [
      ["Platform", "End-to-end auctions"],
      ["Verticals", "Music, fashion, culture"],
      ["Delivery", "Web + iOS + Android"],
    ],
    highlights: [
      "Native iOS and Android apps with timed and live auctions",
      "Consignment and seller flows for labels and artists",
      "Escrow, KYC and payouts — Stripe + specialist rails",
      "Operator tooling for event run-of-show and inventory",
    ],
    repeat: true,
  },
  {
    slug: "fanrush",
    name: "FanRush",
    tag: "Fan commerce · AI",
    url: "https://fanrush.ai",
    logo: "fanrush.svg",
    oneLiner: "AI-powered fan-to-creator platform for drops, perks and live moments.",
    summary:
      "FanRush connects creators with their most engaged fans through AI-curated drops, perks and live experiences. We built the iOS + Android app and the AI recommendation surface.",
    role: ["iOS + Android app", "AI recommendations", "Backend"],
    stack: ["React Native", "FastAPI", "OpenAI", "Postgres", "Redis"],
    metrics: [
      ["Platform", "iOS + Android"],
      ["AI", "LLM-curated drops"],
      ["Built", "End-to-end"],
    ],
    highlights: [
      "React Native app with real-time drop mechanics",
      "LLM-curated recommendations tuned per creator",
      "Push + deep-linking for live drop moments",
      "Creator admin with analytics and cohorts",
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

export const CASE_STUDIES = PROJECTS.filter((p) => ["hiphopgrails", "fanrush", "acquire"].includes(p.slug));

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
    { client: "fanrush", what: "LLM-curated drop recommendations" },
    { client: "acquire", what: "Risk + moderation pipelines" },
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
  },
  {
    slug: "shipping-llm-features-without-shipping-a-demo",
    title: "Shipping LLM features without shipping a demo",
    excerpt:
      "Most LLM features look great in a demo and fall apart in production. Here's the observability, eval and rollback stack we wrap around every AI feature.",
    date: "2026-02-02",
    read: "9 min read",
    tag: "AI",
  },
  {
    slug: "class-ii-vs-class-iii-what-operators-actually-need",
    title: "Class II vs Class III: what operators actually need",
    excerpt:
      "A plain-language walk-through of Class II bingo mechanics and Class III RNG — and the engineering surface that each one demands.",
    date: "2026-01-20",
    read: "11 min read",
    tag: "Gaming",
  },
  {
    slug: "auctions-are-a-design-problem-before-theyre-an-engineering-one",
    title: "Auctions are a design problem before they're an engineering one",
    excerpt:
      "What we learned building HipHopGrails — why bid mechanics, anti-snipe and event run-of-show are UX concerns first, systems concerns second.",
    date: "2026-01-08",
    read: "7 min read",
    tag: "Commerce",
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
