"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "../../../src/i18n/navigation";
import { products, type ProductCategory } from "../../../src/data/products";
import { JsonLd, generateWebPageJsonLd, generateBreadcrumbJsonLd } from "../../../src/lib/seo";
import { OptimizedImage } from "../../../src/components/OptimizedImage";

type Filter = "All" | ProductCategory;
const FILTERS: Filter[] = ["All", "Software", "IoT"];

export function ProductsPageMetadata() {
  return (
    <>
      <JsonLd
        data={generateWebPageJsonLd({
          name: "Our Products - Software Solutions & IoT Products",
          description: "Discover our ready-to-use software products and IoT solutions. Built with cutting-edge technology, our products help businesses scale efficiently.",
          url: "https://elitetech.dev/products",
        })}
      />
      <JsonLd
        data={generateBreadcrumbJsonLd([
          { name: "Home", item: "https://elitetech.dev" },
          { name: "Products", item: "https://elitetech.dev/products" },
        ])}
      />
    </>
  );
}

export default function ProductsPage() {
  const t = useTranslations("productsPage");
  const [active, setActive] = useState<Filter>("All");

  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <ProductsPageMetadata />
      <main className="bg-[#050505] text-white min-h-screen">
      {/* ── Hero ── */}
      <section className="relative min-h-[65vh] flex flex-col justify-end pb-20 pt-40 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[25vw] font-black tracking-tighter text-white/[0.02] leading-none">
            07
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-widest text-neutral-500 mb-6 font-medium"
          >
            {t("label")}
          </motion.p>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.85]"
            >
              {t("title1")}
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-neutral-300 via-white to-neutral-600 italic font-light">
                {t("title2")}
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <p className="text-lg text-neutral-500 font-light max-w-lg leading-relaxed">
              {t("subtitle")}
            </p>
            <Link
              href="/"
              className="flex items-center space-x-2 text-sm text-neutral-500 hover:text-white transition-colors duration-300 group shrink-0"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="uppercase tracking-widest">{t("backHome")}</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-0 right-0 h-px bg-white/10 origin-left"
        />
      </section>

      {/* ── Filter ── */}
      <section className="sticky top-19 z-30 bg-[#050505]/90 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 py-5 flex items-center space-x-2 overflow-x-auto scrollbar-hide">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`relative shrink-0 px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                active === f
                  ? "bg-white text-black"
                  : "text-neutral-500 hover:text-white border border-white/10 hover:border-white/30"
              }`}
            >
              {f === "All" ? t("filterAll") : f}
              {active === f && (
                <motion.span
                  layoutId="product-filter-pill"
                  className="absolute inset-0 rounded-full bg-white -z-10"
                />
              )}
            </button>
          ))}
          <span className="ml-auto shrink-0 text-xs text-neutral-600 font-medium tracking-widest uppercase">
            {filtered.length} {t("productCount")}
          </span>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="container mx-auto px-6 py-20">
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, idx) => (
              <motion.div
                key={product.slug}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
              >
                <Link href={`/products/${product.slug}`} className="group block h-full">
                  <div className="h-full flex flex-col border border-white/5 rounded-2xl overflow-hidden hover:border-white/15 transition-colors duration-500">
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-video bg-neutral-900">
                      <OptimizedImage
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        aspectRatio="16/9"
                        priority={idx < 3}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-0 transition-opacity duration-500" />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="bg-white text-black rounded-full px-6 py-2.5 font-medium uppercase tracking-widest text-xs flex items-center space-x-2">
                          <span>{t("viewProduct")}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-widest">
                          {product.category}
                        </span>
                        {product.status !== "Available" && (
                          <span className="bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-medium px-3 py-1 rounded-full">
                            {product.status}
                          </span>
                        )}
                      </div>
                      <div className="absolute top-4 right-4 text-neutral-500 text-xs font-medium tracking-widest">
                        {product.num}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6 bg-[#080808]">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold tracking-tight group-hover:text-neutral-300 transition-colors duration-300">
                          {product.name}
                        </h3>
                      </div>
                      <p className="text-neutral-500 font-light text-sm leading-relaxed mb-4 flex-1">
                        {product.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {product.stack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs text-neutral-600 border border-white/6 px-2.5 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {product.stack.length > 4 && (
                          <span className="text-xs text-neutral-700 px-2">
                            +{product.stack.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Stats row */}
                      <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/5">
                        {product.highlights.map((h) => (
                          <div key={h.label} className="text-center">
                            <div className="text-sm font-black tracking-tighter">{h.value}</div>
                            <div className="text-[10px] uppercase tracking-wider text-neutral-700 leading-tight mt-0.5">
                              {h.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/5 py-40 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center">
          <span className="text-[18vw] font-black tracking-tighter text-white/[0.02] leading-none">
            BUILD
          </span>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-widest text-neutral-600 mb-8 font-medium">
              Custom Solution
            </p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-10">
              {t("ctaTitle1")}
              <br />
              <span className="text-neutral-500 italic font-light">{t("ctaTitle2")}</span>
            </h2>
            <Link
              href="/contact"
              className="group inline-flex items-center space-x-3 bg-white text-black px-10 py-5 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-2xl shadow-white/10"
            >
              <span>{t("ctaBtn")}</span>
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
