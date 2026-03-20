"use client";

import { notFound, useParams } from "next/navigation";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";
import { Link } from "../../../../src/i18n/navigation";
import { products } from "../../../../src/data/products";

export default function ProductPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  const otherProducts = products.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
        {/* Background image */}
        <div className="absolute inset-0 opacity-10">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#050505]/50 to-[#050505]" />
        </div>

        {/* Back */}
        <div className="absolute top-24 left-6 z-10">
          <Link
            href="/products"
            className="group flex items-center space-x-2 text-sm text-neutral-500 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="uppercase tracking-widest">All Products</span>
          </Link>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-neutral-700 font-light text-sm tabular-nums">{product.num}</span>
            <span className="w-8 h-px bg-neutral-700" />
            <span className="text-xs uppercase tracking-widest text-neutral-500 border border-white/10 px-3 py-1 rounded-full">
              {product.category}
            </span>
            {product.status !== "Available" && (
              <span className="bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-medium px-3 py-1 rounded-full">
                {product.status}
              </span>
            )}
          </motion.div>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.85]"
            >
              {product.name}
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-5xl"
          >
            <p className="text-lg md:text-2xl text-neutral-400 font-light italic">
              &ldquo;{product.tagline}&rdquo;
            </p>
            <Link
              href="/contact"
              className="group shrink-0 flex items-center space-x-3 bg-white text-black px-7 py-3.5 rounded-full font-semibold text-sm hover:scale-105 transition-transform duration-300"
            >
              <span>Get This Product</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3">
            {product.highlights.map((h, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="py-12 px-4 text-center border-r border-white/5 last:border-r-0"
              >
                <div className="text-3xl md:text-5xl font-black tracking-tighter mb-2">
                  {h.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-neutral-600 font-medium">
                  {h.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Description ── */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <p className="text-sm uppercase tracking-widest text-neutral-600 mb-6">About</p>
            <p className="text-xl text-neutral-300 font-light leading-relaxed">
              {product.longDescription}
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <p className="text-sm uppercase tracking-widest text-neutral-600 mb-8">Tech Stack</p>
            <div className="flex flex-wrap gap-3">
              {product.stack.map((tech, idx) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="px-5 py-2.5 border border-white/10 rounded-full text-sm text-neutral-300 hover:border-white/30 hover:text-white transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-neutral-600 mb-10">Screenshots</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {product.gallery.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative overflow-hidden rounded-xl bg-neutral-900 ${
                  idx === 0 ? "md:col-span-2 aspect-video" : "aspect-video"
                }`}
              >
                <img
                  src={img}
                  alt={`${product.name} screenshot ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-24 bg-[#0A0A0A] border-b border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-sm uppercase tracking-widest text-neutral-600 mb-4">Key Features</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
              Everything you need,{" "}
              <span className="text-neutral-600 italic font-light">built in.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {product.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="bg-[#0A0A0A] p-8 hover:bg-white/[0.02] transition-colors duration-300 group"
              >
                <CheckCircle2 className="w-5 h-5 text-neutral-700 group-hover:text-white transition-colors duration-300 mb-5" />
                <h3 className="text-base font-semibold tracking-tight mb-3">{feature.title}</h3>
                <p className="text-neutral-500 font-light text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Products ── */}
      <section className="py-20 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <p className="text-sm uppercase tracking-widest text-neutral-600">Other Products</p>
            <Link
              href="/products"
              className="hidden md:flex items-center space-x-2 text-sm text-neutral-500 hover:text-white transition-colors border-b border-neutral-700 pb-1"
            >
              <span className="uppercase tracking-widest">View All</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherProducts.map((p, idx) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Link href={`/products/${p.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-xl aspect-video bg-neutral-900 mb-4">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium px-2.5 py-0.5 rounded-full uppercase tracking-widest">
                        {p.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-semibold tracking-tight group-hover:text-neutral-300 transition-colors mb-1">
                    {p.name}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed line-clamp-2">{p.tagline}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center">
          <span className="text-[16vw] font-black tracking-tighter text-white/[0.02] leading-none uppercase">
            {product.name.split(" ")[0]}
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
              Interested?
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-12">
              Ready to use{" "}
              <span className="italic font-light text-neutral-500">{product.name}?</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-3 bg-white text-black px-10 py-5 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-2xl shadow-white/10"
              >
                <span>Get This Product</span>
                <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors px-6 py-5 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Browse All Products</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
