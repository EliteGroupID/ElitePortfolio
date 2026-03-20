"use client";

import { notFound, useParams } from "next/navigation";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "../../../../src/i18n/navigation";
import { allWorks } from "../../../../src/data/works";

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = allWorks.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      {/* ── Hero ── */}
      <section className="relative h-screen flex flex-col justify-end pb-20 overflow-hidden">
        {/* Hero image */}
        <div className="absolute inset-0">
          <img
            src={project.image}
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
