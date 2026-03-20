"use client";

import { motion } from "motion/react";
import { Hexagon, Triangle, Circle, Square, Diamond, Star } from "lucide-react";
import { useTranslations } from "next-intl";

export function TrustedBy() {
  const t = useTranslations("trusted");

  const logos = [
    { icon: Hexagon, name: "Acme Corp" },
    { icon: Triangle, name: "Nexus" },
    { icon: Circle, name: "Aura" },
    { icon: Square, name: "Block" },
    { icon: Diamond, name: "Gemini" },
    { icon: Star, name: "Nova" },
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-24 bg-[#050505] border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <p className="text-center text-sm uppercase tracking-widest text-neutral-500">
          {t("tagline")}
        </p>
      </div>

      <div className="relative w-full flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity duration-500 w-max"
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="inline-flex w-48 items-center justify-center space-x-3 px-8 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <logo.icon className="w-8 h-8 text-neutral-400 flex-shrink-0" />
              <span className="text-xl font-medium tracking-tight text-neutral-400">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TrustedBy;
