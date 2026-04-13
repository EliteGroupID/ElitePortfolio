"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section className="py-24 bg-[#050505] text-white overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <Quote className="w-12 h-12 md:w-16 md:h-16 text-neutral-800 mx-auto mb-10" />
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight leading-[1.3] mb-14">
              &ldquo;{t("quote")}&rdquo;
            </h3>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-5 border border-white/20 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1605464705085-b7234de7a4dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25maWRlbnQlMjB3b21hbiUyMHBvcnRyYWl0JTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwxfHx8fDE3NzM5NTk1MDl8MA&ixlib=rb-4.1.0&q=80&w=200"
                    alt={t("personName")}
                    width={200}
                    height={200}
                    quality={85}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              </div>
              <div className="text-lg font-medium tracking-tight">{t("personName")}</div>
              <div className="text-sm text-neutral-500 uppercase tracking-widest mt-1 font-medium">
                {t("personTitle")}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
