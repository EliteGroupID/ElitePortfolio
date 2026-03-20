"use client";

import { motion } from "motion/react";
import { Code2, Layers, Zap, MessageSquare } from "lucide-react";
import { useTranslations } from "next-intl";

export function WhyUs() {
  const t = useTranslations("whyUs");

  const reasons = [
    { icon: Code2, titleKey: "item1Title", descKey: "item1Desc" },
    { icon: Layers, titleKey: "item2Title", descKey: "item2Desc" },
    { icon: Zap, titleKey: "item3Title", descKey: "item3Desc" },
    { icon: MessageSquare, titleKey: "item4Title", descKey: "item4Desc" },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-sm uppercase tracking-widest text-neutral-500 mb-6 text-center font-medium">
          {t("tagline")}
        </h2>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter mb-20 text-center max-w-4xl mx-auto leading-[1.1]">
          {t("heading1")}{" "}
          <span className="text-neutral-500 italic font-light">{t("heading2")}</span>
          {t("heading3")}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 backdrop-blur-sm group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-2xl font-medium mb-4 tracking-tight">{t(item.titleKey)}</h4>
              <p className="text-neutral-400 font-light leading-relaxed text-sm lg:text-base">
                {t(item.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
