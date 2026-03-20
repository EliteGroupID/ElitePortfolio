"use client";

import { motion } from "motion/react";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "../../../src/i18n/navigation";

const services = [
  {
    slug: "web-development",
    num: "01",
    category: "Core Service",
    titleKey: "item1Title",
    descKey: "item1LongDesc",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1762330463863-a6a399beb5ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    stats: { value: "200+", label: "Apps Shipped" },
  },
  {
    slug: "ui-ux-design",
    num: "02",
    category: "Core Service",
    titleKey: "item2Title",
    descKey: "item2LongDesc",
    tags: ["Figma", "Framer", "Design Systems", "Prototyping"],
    image:
      "https://images.unsplash.com/photo-1725267196915-7700df784ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    stats: { value: "+42%", label: "Avg. Retention Lift" },
  },
  {
    slug: "performance-optimization",
    num: "03",
    category: "Specialist Service",
    titleKey: "item3Title",
    descKey: "item3LongDesc",
    tags: ["Lighthouse", "Datadog", "Cloudflare", "Webpack"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    stats: { value: "3×", label: "Avg. Speed Gain" },
  },
  {
    slug: "system-integration",
    num: "04",
    category: "Specialist Service",
    titleKey: "item4Title",
    descKey: "item4LongDesc",
    tags: ["REST", "GraphQL", "Kafka", "n8n"],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    stats: { value: "99.95%", label: "Integration Uptime" },
  },
  {
    slug: "iot-embedded-systems",
    num: "05",
    category: "Specialist Service",
    titleKey: "item5Title",
    descKey: "item5LongDesc",
    tags: ["ESP32", "Arduino", "MQTT", "Raspberry Pi"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    stats: { value: "99.8%", label: "Device Uptime" },
  },
];

export default function ServicesPage() {
  const t = useTranslations("servicesListingPage");
  const ts = useTranslations("services");

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      {/* ── Hero ── */}
      <section className="relative min-h-[65vh] flex flex-col justify-end pb-20 pt-40 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[28vw] font-black tracking-tighter text-white/[0.02] leading-none">
            04
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

      {/* ── Services List ── */}
      <section className="container mx-auto px-6 py-20">
        <div className="space-y-6">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link href={`/services/${svc.slug}`} className="group block">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/5 rounded-2xl overflow-hidden hover:border-white/15 transition-colors duration-500">
                  {/* Image */}
                  <div className="lg:col-span-4 relative overflow-hidden aspect-video lg:aspect-auto">
                    <img
                      src={svc.image}
                      alt={ts(svc.titleKey)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#050505] hidden lg:block" />
                    <div className="absolute inset-0 bg-black/30 lg:hidden" />
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-8 p-8 lg:p-10 flex flex-col justify-between bg-[#080808] group-hover:bg-white/[0.02] transition-colors duration-500">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-neutral-700 font-light text-sm tabular-nums">{svc.num}</span>
                        <span className="w-8 h-px bg-neutral-700" />
                        <span className="text-xs uppercase tracking-widest text-neutral-500 border border-white/10 px-3 py-1 rounded-full">
                          {svc.category}
                        </span>
                      </div>

                      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 group-hover:text-neutral-200 transition-colors duration-300">
                        {ts(svc.titleKey)}
                      </h2>
                      <p className="text-neutral-400 font-light leading-relaxed mb-6 max-w-xl">
                        {t(svc.descKey)}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {svc.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-neutral-600 border border-white/6 px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
                      <div>
                        <div className="text-2xl font-black tracking-tighter">{svc.stats.value}</div>
                        <div className="text-xs uppercase tracking-widest text-neutral-600 font-medium mt-1">
                          {svc.stats.label}
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 text-sm text-neutral-500 group-hover:text-white transition-colors duration-300">
                        <span className="uppercase tracking-widest">{t("learnMore")}</span>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-transparent transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/5 py-40 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center">
          <span className="text-[18vw] font-black tracking-tighter text-white/[0.02] leading-none">
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
  );
}
