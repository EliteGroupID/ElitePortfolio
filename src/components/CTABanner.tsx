"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function CTA() {
  const t = useTranslations("cta");

  return (
    <section className="py-40 bg-white text-[#050505] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-200 h-200 bg-neutral-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-neutral-200 rounded-full blur-3xl opacity-30 translate-y-1/3 -translate-x-1/4 z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.9] mb-10">
            {t("heading1")} <br />
            <span className="italic font-light text-neutral-400">{t("heading2")}</span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
            {t("subtitle")}
          </p>

          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center space-x-3 bg-[#050505] text-white px-10 py-5 rounded-full text-xl font-medium overflow-hidden transition-transform hover:scale-105 shadow-2xl shadow-black/20"
          >
            <span className="relative z-10">{t("button")}</span>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center relative z-10">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
