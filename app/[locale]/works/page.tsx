"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "../../../src/i18n/navigation";
import { allWorks, WORK_CATEGORIES } from "../../../src/data/works";
import { JsonLd, generateWebPageJsonLd, generateBreadcrumbJsonLd } from "../../../src/lib/seo";
import { OptimizedImage } from "../../../src/components/OptimizedImage";

export function WorksPageMetadata() {
  return (
    <>
      <JsonLd
        data={generateWebPageJsonLd({
          name: "Our Work - Portfolio & Case Studies",
          description: "Explore our portfolio of successful projects. From web applications to IoT solutions, see how ELITECH ID transforms ideas into exceptional digital products.",
          url: "https://elitetech.dev/works",
        })}
      />
      <JsonLd
        data={generateBreadcrumbJsonLd([
          { name: "Home", item: "https://elitetech.dev" },
          { name: "Works", item: "https://elitetech.dev/works" },
        ])}
      />
    </>
  );
}

export default function WorksPage() {
  const t = useTranslations("worksPage");
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? allWorks : allWorks.filter((p) => p.category === active);

  return (
    <>
      <WorksPageMetadata />
      <main className="bg-[#050505] text-white min-h-screen">
      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex flex-col justify-end pb-20 pt-40 overflow-hidden">
        {/* Background number watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[30vw] font-black tracking-tighter text-white/2 leading-none">
            06
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
              className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85]"
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

        {/* Bottom border */}
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
          {WORK_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative shrink-0 px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                active === cat
                  ? "bg-white text-black"
                  : "text-neutral-500 hover:text-white border border-white/10 hover:border-white/30"
              }`}
            >
              {cat === "All" ? t("filterAll") : cat}
              {active === cat && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-white -z-10"
                />
              )}
            </button>
          ))}

          <span className="ml-auto shrink-0 text-xs text-neutral-600 font-medium tracking-widest uppercase">
            {filtered.length} Projects
          </span>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="container mx-auto px-6 py-20">
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {filtered.map((project, idx) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className={project.featured && active === "All" ? "md:col-span-2" : ""}
              >
                <Link href={`/works/${project.slug}`} className="group block">
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden rounded-2xl bg-neutral-900 mb-5 ${
                      project.featured && active === "All"
                        ? "aspect-16/7"
                        : "aspect-4/3"
                    }`}
                  >
                    <OptimizedImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      aspectRatio={project.featured && active === "All" ? "16/7" : "4/3"}
                      priority={idx < 2}
                    />

                    {/* Dark gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <motion.div
                        initial={false}
                        className="bg-white text-black rounded-full px-8 py-3 font-medium uppercase tracking-widest text-sm flex items-center space-x-2 shadow-2xl"
                      >
                        <span>{t("viewProject")}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.div>
                    </div>

                    {/* Top badges */}
                    <div className="absolute top-5 left-5 flex items-center space-x-2">
                      <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-widest">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute top-5 right-5 text-neutral-500 text-xs font-medium tracking-widest">
                      {project.year}
                    </div>
                  </div>

                  {/* Card info */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-neutral-700 text-sm font-light tabular-nums">
                          {project.num}
                        </span>
                        <span className="w-8 h-px bg-neutral-700" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2 group-hover:text-neutral-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-neutral-500 font-light text-sm leading-relaxed mb-4 max-w-lg">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-neutral-600 border border-white/6 px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="shrink-0 w-11 h-11 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-transparent transition-all duration-300 mt-8">
                      <ArrowUpRight className="w-4 h-4" />
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
          <span className="text-[20vw] font-black tracking-tighter text-white/2 leading-none">
            START
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
              Next Step
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-10">
              {t("ctaTitle1")}
              <br />
              <span className="text-neutral-500 italic font-light">{t("ctaTitle2")}</span>
            </h2>

            <Link
              href="/#contact"
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
