export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceApproachStep {
  step: string;
  title: string;
  desc: string;
}

export interface Service {
  slug: string;
  num: string;
  title: string;
  titleKey: string;
  tagline: string;
  category: string;
  description: string;
  descKey: string;
  image: string;
  tags: string[];
  listStat: ServiceStat;
  deliverables: string[];
  approach: ServiceApproachStep[];
  stack: string[];
  relatedWorks: string[];
  stats: ServiceStat[];
}

export const allServices: Service[] = [
  {
    slug: "web-development",
    num: "01",
    title: "Web Development",
    titleKey: "item1Title",
    tagline: "Built to perform. Engineered to last.",
    category: "Core Service",
    description:
      "We architect and build high-performance web applications that scale with your business. From complex enterprise platforms to consumer-facing products, every line of code is written with precision, security, and long-term maintainability in mind.",
    descKey: "item1LongDesc",
    image:
      "https://images.unsplash.com/photo-1762330463863-a6a399beb5ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
    listStat: { value: "200+", label: "Apps Shipped" },
    deliverables: [
      "Custom web application architecture & development",
      "REST & GraphQL API design and implementation",
      "Database schema design and optimization",
      "Authentication & authorization systems",
      "CI/CD pipeline setup and deployment",
      "Performance testing and load optimization",
      "Security audit and hardening",
      "Technical documentation and handoff",
    ],
    approach: [
      {
        step: "01",
        title: "Discovery & Planning",
        desc: "We start by understanding your business logic, user flows, and technical constraints to define a precise engineering roadmap before writing a single line of code.",
      },
      {
        step: "02",
        title: "Architecture Design",
        desc: "We design a scalable system architecture — choosing the right tech stack, infrastructure, and patterns to meet both current needs and future growth.",
      },
      {
        step: "03",
        title: "Iterative Development",
        desc: "We build in sprints with weekly demos, ensuring you see real progress and can provide feedback throughout the entire build — not just at the end.",
      },
      {
        step: "04",
        title: "Launch & Support",
        desc: "We handle deployment, monitoring setup, and provide a structured handoff with full documentation. Post-launch support is included for the first 30 days.",
      },
    ],
    stack: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "AWS"],
    relatedWorks: ["finflow-platform", "nova-os", "lumina-commerce"],
    stats: [
      { value: "200+", label: "Applications Shipped" },
      { value: "99.9%", label: "Average Uptime" },
      { value: "<1s", label: "Target Load Time" },
    ],
  },
  {
    slug: "ui-ux-design",
    num: "02",
    title: "UI/UX Design",
    titleKey: "item2Title",
    tagline: "Interfaces that convert. Experiences that retain.",
    category: "Core Service",
    description:
      "Great design isn't decoration — it's a revenue driver. We design interfaces that guide users toward their goals with clarity and confidence, reducing friction at every touchpoint and building the kind of experience that earns loyalty.",
    descKey: "item2LongDesc",
    image:
      "https://images.unsplash.com/photo-1725267196915-7700df784ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Figma", "Framer", "Design Systems", "Prototyping"],
    listStat: { value: "+42%", label: "Avg. Retention Lift" },
    deliverables: [
      "User research and persona development",
      "Information architecture and user flow mapping",
      "Wireframing and low-fidelity prototyping",
      "High-fidelity UI design in Figma",
      "Design system and component library",
      "Interactive prototype for stakeholder review",
      "Responsive design for all breakpoints",
      "Developer handoff with annotated specs",
    ],
    approach: [
      {
        step: "01",
        title: "Research & Insights",
        desc: "We talk to real users, analyze behavioral data, and audit your existing interface to identify exactly where users get confused, frustrated, or drop off.",
      },
      {
        step: "02",
        title: "Structure & Flow",
        desc: "Before any visual design, we map the information architecture and key user journeys to ensure the foundation is solid and every path leads somewhere meaningful.",
      },
      {
        step: "03",
        title: "Design & Iterate",
        desc: "We design in Figma, delivering high-fidelity mockups that reflect your brand with precision. Every design decision is backed by reasoning, not aesthetics alone.",
      },
      {
        step: "04",
        title: "Test & Refine",
        desc: "We validate designs through usability testing before handoff, identifying and resolving friction points before a single sprint of development begins.",
      },
    ],
    stack: ["Figma", "FigJam", "Framer", "Hotjar", "Maze", "Lottie", "Principle"],
    relatedWorks: ["nova-os", "lumina-commerce", "aero-desk"],
    stats: [
      { value: "+42%", label: "Avg. Retention Lift" },
      { value: "+28%", label: "Avg. Conversion Lift" },
      { value: "−68%", label: "Support Ticket Reduction" },
    ],
  },
  {
    slug: "performance-optimization",
    num: "03",
    title: "Performance Optimization",
    titleKey: "item3Title",
    tagline: "Every millisecond is revenue. We find them all.",
    category: "Specialist Service",
    description:
      "Slow software is a business problem, not just a technical one. We conduct deep performance audits of your existing platform, identify every bottleneck from the database to the browser, and implement targeted fixes that deliver measurable, lasting improvements.",
    descKey: "item3LongDesc",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Lighthouse", "Datadog", "Cloudflare", "Webpack"],
    listStat: { value: "3×", label: "Avg. Speed Gain" },
    deliverables: [
      "Full-stack performance audit report",
      "Database query analysis and index optimization",
      "Frontend bundle analysis and code splitting",
      "Image and asset optimization pipeline",
      "Caching strategy design and implementation",
      "CDN configuration and edge deployment",
      "Core Web Vitals improvement to green",
      "Before/after performance benchmark report",
    ],
    approach: [
      {
        step: "01",
        title: "Baseline Measurement",
        desc: "We establish a comprehensive performance baseline using real user monitoring, synthetic testing, and database profiling to know exactly what we're dealing with.",
      },
      {
        step: "02",
        title: "Root Cause Analysis",
        desc: "We go deeper than surface symptoms — tracing slow requests to their source, whether that's an N+1 query, a bloated bundle, or an unoptimized render path.",
      },
      {
        step: "03",
        title: "Targeted Fixes",
        desc: "We prioritize fixes by impact-to-effort ratio and implement them systematically, validating each change against the baseline before moving to the next.",
      },
      {
        step: "04",
        title: "Monitor & Document",
        desc: "We set up ongoing monitoring dashboards and provide a full report of all changes made, so your team understands what was done and why it worked.",
      },
    ],
    stack: ["Lighthouse", "WebPageTest", "Datadog", "New Relic", "Cloudflare", "Webpack", "Vite"],
    relatedWorks: ["lumina-commerce", "finflow-platform"],
    stats: [
      { value: "3×", label: "Average Speed Improvement" },
      { value: "100", label: "Core Web Vitals Score" },
      { value: "+22%", label: "Avg. Conversion Lift" },
    ],
  },
  {
    slug: "system-integration",
    num: "04",
    title: "System Integration",
    titleKey: "item4Title",
    tagline: "Your tools, finally talking to each other.",
    category: "Specialist Service",
    description:
      "Modern businesses run on a stack of specialized tools. We design and build the integration layer that connects them — eliminating manual data entry, reducing errors, and creating a single source of truth that your entire organization can trust.",
    descKey: "item4LongDesc",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["REST", "GraphQL", "Kafka", "n8n"],
    listStat: { value: "99.95%", label: "Integration Uptime" },
    deliverables: [
      "Integration architecture and data flow design",
      "REST, GraphQL, and webhook API integrations",
      "ETL pipeline design and implementation",
      "Real-time data synchronization",
      "Error handling and retry logic",
      "Integration monitoring and alerting",
      "API documentation and developer portal",
      "Ongoing integration maintenance plan",
    ],
    approach: [
      {
        step: "01",
        title: "Ecosystem Mapping",
        desc: "We map your entire tool ecosystem — what data lives where, what needs to move where, and what the integration failure modes are before we design anything.",
      },
      {
        step: "02",
        title: "Integration Design",
        desc: "We design the integration architecture, choosing between direct API connections, event-driven patterns, or an iPaaS layer based on your reliability and latency requirements.",
      },
      {
        step: "03",
        title: "Build & Test",
        desc: "We build integrations with robust error handling, dead letter queues, and idempotent operations — because integrations that fail silently are worse than no integration at all.",
      },
      {
        step: "04",
        title: "Monitor & Maintain",
        desc: "We set up integration health dashboards and alerting so your team knows immediately when something breaks, and can resolve it without involving engineering.",
      },
    ],
    stack: ["Zapier", "n8n", "Kafka", "RabbitMQ", "REST", "GraphQL", "Webhooks", "gRPC"],
    relatedWorks: ["finflow-platform", "shield-auth", "pulse-health"],
    stats: [
      { value: "5→1", label: "Tools Consolidated (avg)" },
      { value: "−60%", label: "Manual Data Entry" },
      { value: "99.95%", label: "Integration Uptime" },
    ],
  },
  {
    slug: "iot-embedded-systems",
    num: "05",
    title: "IoT & Embedded Systems",
    titleKey: "item5Title",
    tagline: "Smart devices. Smarter businesses.",
    category: "Specialist Service",
    description:
      "We design and build custom IoT solutions and embedded systems that connect the physical world to digital intelligence. From sensor networks to automated control systems, we handle everything from hardware specification and firmware development to cloud connectivity and real-time dashboards.",
    descKey: "item5LongDesc",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["ESP32", "Arduino", "MQTT", "Raspberry Pi"],
    listStat: { value: "99.8%", label: "Device Uptime" },
    deliverables: [
      "Hardware specification and component selection",
      "Custom firmware development (ESP32, Arduino, Raspberry Pi)",
      "IoT gateway design and cloud connectivity",
      "MQTT / WebSocket real-time communication layer",
      "Web & mobile monitoring dashboard",
      "OTA (over-the-air) firmware update system",
      "Device security hardening and authentication",
      "REST API for device management and data retrieval",
    ],
    approach: [
      {
        step: "01",
        title: "Requirements & Prototype",
        desc: "We start with a working proof-of-concept to validate the hardware approach, sensor accuracy, and connectivity before committing to full production.",
      },
      {
        step: "02",
        title: "Firmware & Hardware",
        desc: "We develop robust, low-power firmware with error recovery, watchdog timers, and secure boot — built to run unattended in the field.",
      },
      {
        step: "03",
        title: "Cloud & Dashboard",
        desc: "We connect your devices to a scalable cloud backend and build the real-time dashboard and alerting system your team needs to act on the data.",
      },
      {
        step: "04",
        title: "Deploy & Monitor",
        desc: "We handle field deployment, set up remote monitoring, and provide OTA update capability so you can push firmware improvements without physical access.",
      },
    ],
    stack: ["ESP32", "Arduino", "Raspberry Pi", "MQTT", "Node.js", "InfluxDB", "Grafana", "AWS IoT"],
    relatedWorks: ["finflow-platform", "pulse-health"],
    stats: [
      { value: "15+", label: "IoT Devices Deployed" },
      { value: "99.8%", label: "Device Uptime" },
      { value: "<100ms", label: "Avg. Sensor Latency" },
    ],
  },
];

// Lookup map for related project preview cards used in service detail pages
export const relatedProjectData: Record<string, { title: string; category: string; image: string }> = {
  "finflow-platform": {
    title: "FinFlow Platform",
    category: "Enterprise Fintech",
    image:
      "https://images.unsplash.com/photo-1762330463863-a6a399beb5ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  "nova-os": {
    title: "Nova OS",
    category: "SaaS Application",
    image:
      "https://images.unsplash.com/photo-1725267196915-7700df784ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  "lumina-commerce": {
    title: "Lumina Commerce",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1752134593976-603769edccbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  "aero-desk": {
    title: "AeroDesk",
    category: "Productivity SaaS",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  "shield-auth": {
    title: "ShieldAuth",
    category: "Security Platform",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  "pulse-health": {
    title: "PulseHealth",
    category: "Healthcare Tech",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
};
