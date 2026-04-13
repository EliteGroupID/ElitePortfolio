"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { CountUp } from "./CountUp";
import Image from "next/image";

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="pt-16 pb-28 bg-[#0A0A0A] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

          <div className="lg:col-span-5 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm uppercase tracking-widest text-neutral-500 mb-6 font-medium">
                {t("tagline")}
              </h2>
              <h3 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-8 leading-[1.1]">
                {t("heading1")} <br />
                <span className="text-neutral-500 italic font-light">{t("heading2")}</span>
              </h3>
              <p className="text-lg text-neutral-400 mb-8 max-w-md font-light leading-relaxed">
                {t("description")}
              </p>

              <div className="flex items-center space-x-12">
                <div>
                  <CountUp value={t("stat1Value")} className="text-4xl font-light mb-1 text-white block" />
                  <div className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
                    {t("stat1Label")}
                  </div>
                </div>
                <div>
                  <CountUp value={t("stat2Value")} className="text-4xl font-light mb-1 text-white block" />
                  <div className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
                    {t("stat2Label")}
                  </div>
                </div>
                <div>
                  <CountUp value={t("stat3Value")} className="text-4xl font-light mb-1 text-white block" />
                  <div className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
                    {t("stat3Label")}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1571273033940-89c3e9bb18b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczOTUxMDI2fDA&ixlib=rb-4.1.0&q=80&w=1920"
                alt="Minimalist Architecture"
                width={1920}
                height={1080}
                quality={85}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 w-48 md:w-80 aspect-square rounded-2xl overflow-hidden border-8 border-[#0A0A0A] hidden md:block shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1622258418550-46a51f29f084?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpZ2l0YWwlMjBhZ2VuY3klMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzczOTU5NTA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Creative Engineering Workspace"
                width={1080}
                height={1080}
                quality={85}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
