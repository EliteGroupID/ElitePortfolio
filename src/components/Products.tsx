"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { products, type ProductCategory } from "@/data/products";
import { OptimizedImage } from "./OptimizedImage";

type Filter = "All" | ProductCategory;

const FILTERS: Filter[] = ["All", "Software", "IoT"];

export function Products() {
  const t = useTranslations("productsSection");
  const [active, setActive] = useState<Filter>("All");

  const filtered = (active === "All" ? products : products.filter((p) => p.category === active)).slice(0, 3);

  return (
    <section id="products" className="py-24 bg-[#050505] text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-sm uppercase tracking-widest text-neutral-500 mb-6 font-medium">
              {t("tagline")}
            </h2>
            <h3 className="text-4xl md:text-6xl font-semibold tracking-tighter max-w-2xl leading-[1.1]">
              {t("heading1")}{" "}
              <span className="text-neutral-500 italic font-light">{t("heading2")}</span>
              {t("heading3")}
            </h3>
          </div>
          <Link
            href="/products"
            className="flex items-center space-x-2 text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition-colors border-b border-neutral-600 pb-1 shrink-0"
          >
            <span>{t("viewAll")}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter */}
        <div className="flex items-center space-x-2 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                active === f
                  ? "bg-white text-black"
                  : "text-neutral-500 hover:text-white border border-white/10 hover:border-white/30"
              }`}
            >
              {f === "All" ? t("filterAll") : f === "Software" ? t("filterSoftware") : t("filterIoT")}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, idx) => (
              <motion.div
                key={product.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
              >
                <Link href={`/products/${product.slug}`} className="group block h-full">
                  <div className="h-full flex flex-col border border-white/5 rounded-2xl overflow-hidden hover:border-white/15 transition-colors duration-500">
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-video bg-neutral-900">
                      <OptimizedImage
                        src={product.image}
                        alt={product.name}
                        aspectRatio="16/9"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />

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
                    <div className="flex flex-col flex-1 p-6 bg-[#080808] group-hover:bg-white/[0.02] transition-colors duration-500">
                      <h4 className="text-xl font-semibold tracking-tight mb-2 group-hover:text-neutral-200 transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-neutral-500 font-light text-sm leading-relaxed mb-5 flex-1">
                        {product.description}
                      </p>

                      {/* Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {product.stack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs text-neutral-600 border border-white/6 px-2.5 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {product.stack.length > 4 && (
                          <span className="text-xs text-neutral-700 px-2.5 py-1">
                            +{product.stack.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <div className="text-xs text-neutral-600 uppercase tracking-widest font-medium">
                          {product.highlights[0].value}{" "}
                          <span className="text-neutral-700">{product.highlights[0].label}</span>
                        </div>
                        <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-transparent transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Products;
