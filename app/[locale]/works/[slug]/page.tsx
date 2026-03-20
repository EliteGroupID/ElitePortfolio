"use client";

import { notFound, useParams } from "next/navigation";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "../../../../src/i18n/navigation";

const allProjects = [
  {
    slug: "finflow-platform",
    title: "FinFlow Platform",
    category: "Enterprise Fintech",
    year: "2024",
    duration: "8 months",
    client: "FinFlow Inc.",
    role: "Full-Stack Engineering + System Architecture",
    heroImage:
      "https://images.unsplash.com/photo-1762330463863-a6a399beb5ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwVUklMjBkZXNpZ24lMjBtb2NrdXAlMjBkYXJrfGVufDF8fHx8MTc3Mzk1OTUwOXww&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    tags: ["Next.js", "PostgreSQL", "Stripe", "Redis", "AWS"],
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
    title: "Nova OS",
    category: "SaaS Application",
    year: "2024",
    duration: "5 months",
    client: "Nova Labs",
    role: "Product Engineering + UI/UX Design",
    heroImage:
      "https://images.unsplash.com/photo-1725267196915-7700df784ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBtb2NrdXAlMjBtaW5pbWFsfGVufDF8fHx8MTc3Mzk1OTUwOXww&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    tags: ["React", "Node.js", "Redis", "WebSocket", "Figma"],
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
    title: "Lumina Commerce",
    category: "E-Commerce System",
    year: "2023",
    duration: "6 months",
    client: "Lumina Retail Group",
    role: "Headless Commerce Engineering",
    heroImage:
      "https://images.unsplash.com/photo-1752134593976-603769edccbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlayUyMG1vZGVybiUyMGJyYW5kaW5nJTIwbW9ja3VwfGVufDF8fHx8MTc3Mzk1OTUwOXww&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    tags: ["Shopify Hydrogen", "Remix", "Tailwind CSS", "Cloudflare", "GraphQL"],
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
    title: "PulseHealth",
    category: "Healthcare Tech",
    year: "2023",
    duration: "10 months",
    client: "PulseHealth Systems",
    role: "Platform Engineering + Compliance Architecture",
    heroImage:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    tags: ["React", "Django", "AWS", "PostgreSQL", "HL7 FHIR"],
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
    title: "AeroDesk",
    category: "Productivity SaaS",
    year: "2023",
    duration: "4 months",
    client: "AeroDesk Corp.",
    role: "Full-Stack Engineering",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    tags: ["Vue.js", "Supabase", "WebSocket", "Tailwind CSS", "Vercel"],
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
    title: "ShieldAuth",
    category: "Security Platform",
    year: "2022",
    duration: "12 months",
    client: "ShieldAuth Technologies",
    role: "Security Engineering + Infrastructure",
    heroImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
    tags: ["Go", "Kubernetes", "HashiCorp Vault", "PostgreSQL", "gRPC"],
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

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      {/* ── Hero ── */}
      <section className="relative h-screen flex flex-col justify-end pb-20 overflow-hidden">
        {/* Hero image */}
        <div className="absolute inset-0">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/60 to-[#050505]/20" />
        </div>

        {/* Back button */}
        <div className="absolute top-24 left-6 z-10">
          <Link
            href="/works"
            className="group flex items-center space-x-2 text-sm text-neutral-400 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="uppercase tracking-widest">All Works</span>
          </Link>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <span className="text-xs uppercase tracking-widest border border-white/20 px-4 py-1.5 rounded-full text-neutral-300">
              {project.category}
            </span>
            <span className="text-xs uppercase tracking-widest text-neutral-600">
              {project.year}
            </span>
            <span className="text-xs uppercase tracking-widest text-neutral-600">·</span>
            <span className="text-xs uppercase tracking-widest text-neutral-600">
              {project.duration}
            </span>
          </motion.div>

          {/* Title */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.85]"
            >
              {project.title}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl italic"
          >
            &ldquo;{project.tagline}&rdquo;
          </motion.p>
        </div>
      </section>

      {/* ── Overview + Meta ── */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left: Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <p className="text-sm uppercase tracking-widest text-neutral-600 mb-6">
                Overview
              </p>
              <p className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed">
                {project.overview}
              </p>
            </motion.div>

            {/* Right: Meta */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 space-y-8"
            >
              {[
                { label: "Client", value: project.client },
                { label: "Year", value: project.year },
                { label: "Duration", value: project.duration },
                { label: "Our Role", value: project.role },
              ].map((item) => (
                <div key={item.label} className="border-b border-white/5 pb-6">
                  <p className="text-xs uppercase tracking-widest text-neutral-600 mb-2">
                    {item.label}
                  </p>
                  <p className="text-white font-light">{item.value}</p>
                </div>
              ))}

              {/* Tags */}
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-600 mb-4">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-neutral-400 border border-white/10 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Results ── */}
      <section className="py-24 bg-[#0A0A0A] border-y border-white/5">
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-widest text-neutral-600 mb-16 text-center"
          >
            Results Delivered
          </motion.p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
            {project.results.map((result, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center p-10 border border-white/5 hover:border-white/10 transition-colors duration-300"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-3 text-white">
                  {result.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-neutral-600 font-medium">
                  {result.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Challenge & Solution ── */}
      <section className="py-24">
        <div className="container mx-auto px-6 space-y-24">
          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
          >
            <div className="md:col-span-4">
              <span className="text-[5rem] font-black text-white/5 leading-none block">01</span>
              <p className="text-sm uppercase tracking-widest text-neutral-600 -mt-4">The Challenge</p>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-white/5" />

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
          >
            <div className="md:col-span-4">
              <span className="text-[5rem] font-black text-white/5 leading-none block">02</span>
              <p className="text-sm uppercase tracking-widest text-neutral-600 -mt-4">Our Solution</p>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed">
                {project.solution}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Screenshots ── */}
      <section className="py-8 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="overflow-hidden rounded-2xl aspect-video bg-neutral-900"
              >
                <img
                  src={img}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="py-24 bg-[#0A0A0A] border-y border-white/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-6xl text-white/5 font-black leading-none mb-8">&ldquo;</div>
            <p className="text-xl md:text-3xl font-light text-neutral-200 leading-relaxed mb-12 tracking-tight">
              {project.testimonial.quote}
            </p>
            <div>
              <p className="font-semibold text-white tracking-tight">{project.testimonial.name}</p>
              <p className="text-sm text-neutral-600 uppercase tracking-widest mt-1">
                {project.testimonial.title}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Next Project + CTA ── */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
            <Link
              href="/works"
              className="group flex items-center space-x-3 text-neutral-500 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm uppercase tracking-widest">Back to All Works</span>
            </Link>

            <Link
              href="/#contact"
              className="group flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-2xl shadow-white/10"
            >
              <span>Start a Similar Project</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Watermark */}
          <div className="overflow-hidden flex justify-center text-[12vw] font-black tracking-tighter leading-none text-white/[0.025] select-none uppercase">
            {project.title}
          </div>
        </div>
      </section>
    </main>
  );
}
