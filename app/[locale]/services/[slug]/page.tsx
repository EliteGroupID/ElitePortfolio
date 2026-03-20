"use client";

import { notFound, useParams } from "next/navigation";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "../../../../src/i18n/navigation";

const allServices = [
  {
    slug: "web-development",
    num: "01",
    title: "Web Development",
    tagline: "Built to perform. Engineered to last.",
    category: "Core Service",
    description:
      "We architect and build high-performance web applications that scale with your business. From complex enterprise platforms to consumer-facing products, every line of code is written with precision, security, and long-term maintainability in mind.",
    image:
      "https://images.unsplash.com/photo-1762330463863-a6a399beb5ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
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
    tagline: "Interfaces that convert. Experiences that retain.",
    category: "Core Service",
    description:
      "Great design isn't decoration — it's a revenue driver. We design interfaces that guide users toward their goals with clarity and confidence, reducing friction at every touchpoint and building the kind of experience that earns loyalty.",
    image:
      "https://images.unsplash.com/photo-1725267196915-7700df784ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
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
    tagline: "Every millisecond is revenue. We find them all.",
    category: "Specialist Service",
    description:
      "Slow software is a business problem, not just a technical one. We conduct deep performance audits of your existing platform, identify every bottleneck from the database to the browser, and implement targeted fixes that deliver measurable, lasting improvements.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
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
    tagline: "Your tools, finally talking to each other.",
    category: "Specialist Service",
    description:
      "Modern businesses run on a stack of specialized tools. We design and build the integration layer that connects them — eliminating manual data entry, reducing errors, and creating a single source of truth that your entire organization can trust.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
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
    tagline: "Smart devices. Smarter businesses.",
    category: "Specialist Service",
    description:
      "We design and build custom IoT solutions and embedded systems that connect the physical world to digital intelligence. From sensor networks to automated control systems, we handle everything from hardware specification and firmware development to cloud connectivity and real-time dashboards.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
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

const relatedProjectData: Record<string, { title: string; category: string; image: string }> = {
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

export default function ServicePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = allServices.find((s) => s.slug === slug);

  if (!service) notFound();

  const otherServices = allServices.filter((s) => s.slug !== slug);

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
        {/* Background image — subtle */}
        <div className="absolute inset-0 opacity-10">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#050505]/50 to-[#050505]" />
        </div>

        {/* Back button */}
        <div className="absolute top-24 left-6 z-10">
          <Link
            href="/#services"
            className="group flex items-center space-x-2 text-sm text-neutral-500 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="uppercase tracking-widest">All Services</span>
          </Link>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-neutral-700 font-light text-sm tabular-nums">{service.num}</span>
            <span className="w-8 h-px bg-neutral-700" />
            <span className="text-xs uppercase tracking-widest text-neutral-500 border border-white/10 px-3 py-1 rounded-full">
              {service.category}
            </span>
          </motion.div>

          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.85]"
            >
              {service.title}
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-5xl"
          >
            <p className="text-lg md:text-2xl text-neutral-400 font-light italic">
              &ldquo;{service.tagline}&rdquo;
            </p>
            <Link
              href="/#contact"
              className="group shrink-0 flex items-center space-x-3 bg-white text-black px-7 py-3.5 rounded-full font-semibold text-sm hover:scale-105 transition-transform duration-300"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3">
            {service.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="py-12 px-4 text-center border-r border-white/5 last:border-r-0"
              >
                <div className="text-3xl md:text-5xl font-black tracking-tighter mb-2">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-neutral-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Description + Deliverables ── */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <p className="text-sm uppercase tracking-widest text-neutral-600 mb-6">
              What We Do
            </p>
            <p className="text-xl text-neutral-300 font-light leading-relaxed">
              {service.description}
            </p>
          </motion.div>

          {/* Right: Deliverables */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <p className="text-sm uppercase tracking-widest text-neutral-600 mb-8">
              What's Included
            </p>
            <ul className="space-y-4">
              {service.deliverables.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex items-start space-x-4 py-4 border-b border-white/5 group"
                >
                  <CheckCircle2 className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors duration-300 shrink-0 mt-0.5" />
                  <span className="text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300 font-light">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="py-24 bg-[#0A0A0A] border-b border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-sm uppercase tracking-widest text-neutral-600 mb-4">Our Approach</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
              How we deliver{" "}
              <span className="text-neutral-600 italic font-light">results.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {service.approach.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#0A0A0A] p-8 hover:bg-white/[0.02] transition-colors duration-300 group"
              >
                <div className="text-5xl font-black text-white/5 mb-4 group-hover:text-white/10 transition-colors duration-300">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold tracking-tight mb-3">{step.title}</h3>
                <p className="text-neutral-500 font-light text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="py-20 border-b border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-neutral-600 mb-10 text-center">
            Technologies We Use
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {service.stack.map((tech, idx) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="px-5 py-2.5 border border-white/10 rounded-full text-sm text-neutral-300 hover:border-white/30 hover:text-white transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Works ── */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm uppercase tracking-widest text-neutral-600 mb-3">
                Related Work
              </p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter">
                Projects using this service
              </h2>
            </div>
            <Link
              href="/works"
              className="hidden md:flex items-center space-x-2 text-sm text-neutral-500 hover:text-white transition-colors border-b border-neutral-700 pb-1"
            >
              <span className="uppercase tracking-widest">View All</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {service.relatedWorks.map((workSlug, idx) => {
              const work = relatedProjectData[workSlug];
              if (!work) return null;
              return (
                <motion.div
                  key={workSlug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Link href={`/works/${workSlug}`} className="group block">
                    <div className="relative overflow-hidden rounded-xl aspect-video bg-neutral-900 mb-4">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white text-black text-xs font-medium uppercase tracking-widest px-4 py-2 rounded-full flex items-center gap-2">
                          View Case <ArrowUpRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-neutral-600 uppercase tracking-widest mb-1">
                      {work.category}
                    </p>
                    <h3 className="font-semibold tracking-tight group-hover:text-neutral-300 transition-colors">
                      {work.title}
                    </h3>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Other Services ── */}
      <section className="py-20 border-b border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-neutral-600 mb-10">
            Other Services
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherServices.map((svc, idx) => (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Link
                  href={`/services/${svc.slug}`}
                  className="group flex items-center justify-between p-6 border border-white/5 rounded-xl hover:border-white/15 hover:bg-white/[0.02] transition-all duration-300"
                >
                  <div>
                    <span className="text-xs text-neutral-700 tabular-nums mr-3">{svc.num}</span>
                    <span className="font-medium tracking-tight group-hover:text-neutral-300 transition-colors">
                      {svc.title}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-700 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center">
          <span className="text-[18vw] font-black tracking-tighter text-white/[0.02] leading-none uppercase">
            {service.title.split(" ")[0]}
          </span>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-widest text-neutral-600 mb-8">
              Let's Build Together
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-12">
              Ready to invest in{" "}
              <span className="italic font-light text-neutral-500">
                {service.title.toLowerCase()}?
              </span>
            </h2>
            <Link
              href="/#contact"
              className="group inline-flex items-center space-x-3 bg-white text-black px-10 py-5 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-2xl shadow-white/10"
            >
              <span>Start a Project</span>
              <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
