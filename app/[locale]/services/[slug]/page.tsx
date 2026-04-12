import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "../../../../src/i18n/navigation";
import { allServices, relatedProjectData } from "../../../../src/data/services";
import { JsonLd, generateServiceJsonLd, generateBreadcrumbJsonLd } from "../../../../src/lib/seo";
import { OptimizedImage } from "../../../../src/components/OptimizedImage";

interface PageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | ELITECH ID.`,
      description: service.description,
      images: [{ url: service.image, width: 1200, height: 630, alt: service.title }],
    },
    twitter: {
      title: `${service.title} | ELITECH ID.`,
      description: service.description,
      images: [service.image],
    },
  };
}

export async function generateStaticParams() {
  return allServices.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);

  if (!service) notFound();

  const otherServices = allServices.filter((s) => s.slug !== slug);

  return (
    <>
      <JsonLd
        data={generateServiceJsonLd({
          name: service.title,
          description: service.description,
          provider: "ELITECH ID.",
          areaServed: "Indonesia",
        })}
      />
      <JsonLd
        data={generateBreadcrumbJsonLd([
          { name: "Home", item: "https://elitetech.dev" },
          { name: "Services", item: "https://elitetech.dev/services" },
          { name: service.title, item: `https://elitetech.dev/services/${service.slug}` },
        ])}
      />
      <main className="bg-[#050505] text-white min-h-screen">
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
        {/* Background image — subtle */}
        <div className="absolute inset-0 opacity-10">
          <OptimizedImage
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            priority
            fadeIn={false}
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
                      <OptimizedImage
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        aspectRatio="16/9"
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
    </>
  );
}
