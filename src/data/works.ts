export interface WorkResult {
  value: string;
  label: string;
}

export interface WorkTestimonial {
  quote: string;
  name: string;
  title: string;
}

export interface Work {
  slug: string;
  num: string;
  title: string;
  category: string;
  year: string;
  featured: boolean;
  // List view
  desc: string;
  image: string;
  tags: string[];
  // Detail view
  duration: string;
  client: string;
  role: string;
  images: string[];
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  results: WorkResult[];
  testimonial: WorkTestimonial;
}

export const allWorks: Work[] = [
  {
    slug: "finflow-platform",
    num: "01",
    title: "FinFlow Platform",
    category: "Fintech",
    year: "2024",
    featured: true,
    desc: "Processed over $50M in secure, high-frequency transactions with robust backend architecture and real-time analytics.",
    image:
      "https://images.unsplash.com/photo-1762330463863-a6a399beb5ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwVUklMjBkZXNpZ24lMjBtb2NrdXAlMjBkYXJrfGVufDF8fHx8MTc3Mzk1OTUwOXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    duration: "8 months",
    client: "FinFlow Inc.",
    role: "Full-Stack Engineering + System Architecture",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    tagline: "Processing millions in transactions — seamlessly.",
    overview:
      "FinFlow needed a complete rebuild of their legacy transaction platform. The existing system could not handle peak load, had zero real-time visibility, and was bleeding revenue through failed transactions. We engineered a resilient, high-throughput platform from the ground up.",
    challenge:
      "The legacy system was built on a monolithic PHP backend, collapsing under 10k concurrent users. Transaction failure rates reached 12% during peak hours, directly impacting revenue. The team had no real-time dashboard, no alerting, and no audit trail.",
    solution:
      "We designed a microservices architecture with event-driven processing, decoupled payment flows, and a real-time analytics layer. A distributed queue handled burst traffic, while a custom retry mechanism dropped transaction failures from 12% to under 0.1%.",
    results: [
      { value: "$50M+", label: "Transactions Processed" },
      { value: "99.98%", label: "Uptime Achieved" },
      { value: "0.08%", label: "Transaction Failure Rate" },
      { value: "3.2×", label: "Faster Load Times" },
    ],
    testimonial: {
      quote:
        "EliteTech Dev didn't just fix our platform — they future-proofed it. The architecture they delivered has handled every peak we've thrown at it without a single incident.",
      name: "Marcus Reynolds",
      title: "CTO, FinFlow Inc.",
    },
  },
  {
    slug: "nova-os",
    num: "02",
    title: "Nova OS",
    category: "SaaS",
    year: "2024",
    featured: false,
    desc: "A highly interactive dashboard that increased active user retention by 42% through thoughtful UX engineering.",
    image:
      "https://images.unsplash.com/photo-1725267196915-7700df784ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBtb2NrdXAlMjBtaW5pbWFsfGVufDF8fHx8MTc3Mzk1OTUwOXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Node.js", "Redis"],
    duration: "5 months",
    client: "Nova Labs",
    role: "Product Engineering + UI/UX Design",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    tagline: "A dashboard users actually want to open.",
    overview:
      "Nova Labs had a powerful product but a UI that users dreaded. Churn was high, onboarding was painful, and the engineering team was buried in support tickets about confusing workflows. We redesigned and rebuilt the entire product experience.",
    challenge:
      "42% of users abandoned the product within the first week. The interface was data-dense but insight-poor. Users couldn't find critical features, and the page load time of 6+ seconds made the experience feel broken before it even started.",
    solution:
      "We conducted deep user research, rebuilt the information architecture, and engineered a new frontend with optimistic UI, skeleton loaders, and real-time collaboration. Page loads dropped to under 800ms. Onboarding was redesigned with a guided setup flow that got users to their first win in under 3 minutes.",
    results: [
      { value: "42%", label: "Increase in Retention" },
      { value: "800ms", label: "Average Page Load" },
      { value: "−68%", label: "Support Tickets" },
      { value: "4.8★", label: "App Store Rating" },
    ],
    testimonial: {
      quote:
        "We went from an embarrassing product to one our users rave about. The team's ability to balance technical precision with design intuition is genuinely rare.",
      name: "Priya Nair",
      title: "Head of Product, Nova Labs",
    },
  },
  {
    slug: "lumina-commerce",
    num: "03",
    title: "Lumina Commerce",
    category: "E-Commerce",
    year: "2023",
    featured: false,
    desc: "Headless commerce build optimizing global load times and boosting conversion rates by 28% at scale.",
    image:
      "https://images.unsplash.com/photo-1752134593976-603769edccbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlayUyMG1vZGVybiUyMGJyYW5kaW5nJTIwbW9ja3VwfGVufDF8fHx8MTc3Mzk1OTUwOXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Shopify", "Hydrogen", "Tailwind"],
    duration: "6 months",
    client: "Lumina Retail Group",
    role: "Headless Commerce Engineering",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    tagline: "Commerce at the speed of thought.",
    overview:
      "Lumina's legacy Shopify theme was costing them sales. A 4.8s load time, poor mobile experience, and a checkout flow with 7 steps were destroying conversion. We migrated them to a fully headless architecture built for performance.",
    challenge:
      "Every 1-second delay in page load was estimated to cost Lumina $180k/year in lost revenue. Their mobile conversion rate was 1.2% — half the industry average. The monolithic Shopify theme could not be optimized further without a complete rebuild.",
    solution:
      "We built a Shopify Hydrogen storefront deployed on Cloudflare's edge network, cutting global load times to under 1.2s. The checkout was rebuilt as a 3-step flow with persistent cart state and smart address completion. Mobile was treated as the primary surface, not an afterthought.",
    results: [
      { value: "+28%", label: "Conversion Rate Lift" },
      { value: "1.2s", label: "Global Load Time" },
      { value: "+91%", label: "Mobile Conversions" },
      { value: "$2.1M", label: "Additional Annual Revenue" },
    ],
    testimonial: {
      quote:
        "The ROI was visible within the first month. Our mobile conversion rate tripled and the team has zero performance complaints. Best investment we've made.",
      name: "Sofia Torres",
      title: "CEO, Lumina Retail Group",
    },
  },
  {
    slug: "pulse-health",
    num: "04",
    title: "PulseHealth",
    category: "Healthcare",
    year: "2023",
    featured: false,
    desc: "Patient management platform serving 50k+ users daily, with HIPAA-compliant data architecture and real-time monitoring.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["React", "Django", "AWS"],
    duration: "10 months",
    client: "PulseHealth Systems",
    role: "Platform Engineering + Compliance Architecture",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    tagline: "Healthcare data, handled with precision.",
    overview:
      "PulseHealth required a patient management platform capable of serving 50,000+ daily active users while maintaining strict HIPAA compliance. We built a system that clinical staff actually enjoy using.",
    challenge:
      "The existing system was a patchwork of legacy tools that didn't communicate with each other. Clinicians spent 40% of their time on administrative data entry. The platform had no audit trail, exposing the organization to significant compliance risk.",
    solution:
      "We architected a unified platform with HL7 FHIR-compliant data exchange, automated clinical workflows, and a real-time monitoring dashboard. Role-based access control and a full audit trail were built in from day one, not bolted on later.",
    results: [
      { value: "50k+", label: "Daily Active Users" },
      { value: "−40%", label: "Admin Time Per Clinician" },
      { value: "100%", label: "HIPAA Compliant" },
      { value: "99.99%", label: "Data Availability" },
    ],
    testimonial: {
      quote:
        "For the first time, our clinical staff has a system that works for them, not against them. The compliance architecture gave our legal team complete peace of mind.",
      name: "Dr. James Whitfield",
      title: "CIO, PulseHealth Systems",
    },
  },
  {
    slug: "aero-desk",
    num: "05",
    title: "AeroDesk",
    category: "SaaS",
    year: "2023",
    featured: false,
    desc: "Collaborative workspace tool that replaced five legacy tools, reducing overhead by 60% for remote-first teams.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Vue.js", "Supabase", "WebSocket"],
    duration: "4 months",
    client: "AeroDesk Corp.",
    role: "Full-Stack Engineering",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    tagline: "Five tools. One workspace.",
    overview:
      "AeroDesk set out to replace five separate tools their remote teams were juggling daily. The goal: one unified workspace that reduced cognitive overhead and kept everyone in sync without endless context switching.",
    challenge:
      "Teams were paying for Slack, Notion, Jira, Figma, and Loom separately — with no single source of truth. Meetings were scheduled just to catch up on what should have been visible. The tool sprawl was costing the company $4k/month and hours of lost productivity daily.",
    solution:
      "We built a unified workspace with real-time document collaboration, async video messaging, lightweight project tracking, and a shared knowledge base. WebSocket-powered presence indicators and live cursors made remote teams feel genuinely co-located.",
    results: [
      { value: "−60%", label: "Overhead Costs" },
      { value: "5 → 1", label: "Tools Consolidated" },
      { value: "3.4h", label: "Time Saved Per User/Day" },
      { value: "94%", label: "Team Adoption Rate" },
    ],
    testimonial: {
      quote:
        "We cancelled five subscriptions the week we launched AeroDesk. The ROI was immediate and the team is happier than ever. Genuinely transformative.",
      name: "Lena Hoffmann",
      title: "COO, AeroDesk Corp.",
    },
  },
  {
    slug: "shield-auth",
    num: "06",
    title: "ShieldAuth",
    category: "Security",
    year: "2022",
    featured: false,
    desc: "Zero-trust identity platform protecting 2M+ accounts across enterprise environments with adaptive threat response.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Go", "Kubernetes", "Vault"],
    duration: "12 months",
    client: "ShieldAuth Technologies",
    role: "Security Engineering + Infrastructure",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    tagline: "Zero trust. Zero compromise.",
    overview:
      "ShieldAuth needed an identity platform that could protect enterprise accounts at scale, with adaptive threat response that didn't create friction for legitimate users. We built a zero-trust auth layer from the ground up.",
    challenge:
      "Enterprise clients were experiencing account takeover attacks with increasing sophistication. Traditional MFA was being bypassed via SIM-swapping and phishing. The existing auth system had no behavioral analysis, no anomaly detection, and no real-time threat response.",
    solution:
      "We engineered a zero-trust identity platform with behavioral biometrics, device fingerprinting, and ML-driven risk scoring. Each authentication attempt is evaluated in under 50ms against 40+ signals. High-risk sessions trigger step-up authentication invisibly to legitimate users.",
    results: [
      { value: "2M+", label: "Accounts Protected" },
      { value: "−99.7%", label: "Account Takeover Rate" },
      { value: "50ms", label: "Auth Evaluation Time" },
      { value: "0", label: "Security Incidents Post-Launch" },
    ],
    testimonial: {
      quote:
        "Our enterprise clients sleep better at night. The threat response capabilities are unlike anything we've seen in the market. EliteTech built something truly exceptional.",
      name: "Daniel Voss",
      title: "VP Engineering, ShieldAuth Technologies",
    },
  },
];

export const WORK_CATEGORIES = ["All", "Fintech", "SaaS", "E-Commerce", "Healthcare", "Security"];
