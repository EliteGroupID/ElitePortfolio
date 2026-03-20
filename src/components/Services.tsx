"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Services() {
  const t = useTranslations("services");

  const services = [
    { id: "01", slug: "web-development",          titleKey: "item1Title", descKey: "item1Desc" },
    { id: "02", slug: "ui-ux-design",             titleKey: "item2Title", descKey: "item2Desc" },
    { id: "03", slug: "performance-optimization", titleKey: "item3Title", descKey: "item3Desc" },
  ];

  return (
    <section id="services" className="pt-32 pb-16 bg-[#050505] text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
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
            href="/services"
            className="flex items-center space-x-2 text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition-colors border-b border-neutral-600 pb-1 shrink-0"
          >
            <span>{t("viewAll")}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex flex-col border-t border-white/10">
          {services.map((svc, idx) => (
            <Link key={svc.id} href={`/services/${svc.slug}`} className="block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group flex flex-col md:flex-row md:items-center py-12 md:py-16 border-b border-white/10 relative overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-white/[0.02] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />

                <div className="relative z-10 shrink-0 w-24 text-2xl font-light text-neutral-600 mb-4 md:mb-0 group-hover:text-white transition-colors duration-500">
                  {svc.id}
                </div>

                <div className="relative z-10 grow md:pr-12">
                  <h4 className="text-4xl md:text-5xl font-medium tracking-tighter mb-4 group-hover:translate-x-4 transition-transform duration-500">
                    {t(svc.titleKey)}
                  </h4>
                  <p className="text-neutral-400 font-light text-lg max-w-2xl group-hover:translate-x-4 transition-transform duration-500 delay-75 leading-relaxed">
                    {t(svc.descKey)}
                  </p>
                </div>

                <div className="relative z-10 mt-8 md:mt-0 shrink-0 opacity-0 group-hover:opacity-100 transform -translate-x-8 group-hover:translate-x-0 transition-all duration-500 hidden md:block">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-white text-black shadow-lg">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
