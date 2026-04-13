"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export function Process() {
  const t = useTranslations("process");

  const steps = [
    { id: "01", titleKey: "step1Title", descKey: "step1Desc" },
    { id: "02", titleKey: "step2Title", descKey: "step2Desc" },
    { id: "03", titleKey: "step3Title", descKey: "step3Desc" },
    { id: "04", titleKey: "step4Title", descKey: "step4Desc" },
  ];

  return (
    <section className="pt-16 pb-24 bg-[#050505] text-white overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-sm uppercase tracking-widest text-neutral-500 mb-6 font-medium">
          {t("tagline")}
        </h2>
        <h3 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-20 max-w-2xl leading-[1.1]">
          {t("heading1")}{" "}
          <span className="text-neutral-500 italic font-light">{t("heading2")}</span>
          {t("heading3")}
        </h3>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative group"
              >
                <div className="hidden lg:flex w-4 h-4 rounded-full bg-[#050505] border-2 border-neutral-600 group-hover:border-white group-hover:bg-white transition-colors duration-300 absolute top-12 left-6 z-10" />

                <div className="lg:pt-0 pb-6 border-l border-white/10 lg:border-l-0 pl-6 lg:pl-0">
                  <div className="text-5xl font-light text-neutral-800 mb-6 group-hover:text-white transition-colors duration-300">
                    {step.id}
                  </div>
                  <h4 className="text-2xl font-medium mb-3 tracking-tight">{t(step.titleKey)}</h4>
                  <p className="text-neutral-400 font-light text-base leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
