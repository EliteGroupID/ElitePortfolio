"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { OptimizedImage } from "./OptimizedImage";

export function Works() {
  const t = useTranslations("works");

  const projects = [
    {
      slug: "finflow-platform",
      titleKey: "project1Title",
      categoryKey: "project1Category",
      descKey: "project1Desc",
      image:
        "https://images.unsplash.com/photo-1762330463863-a6a399beb5ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwVUklMjBkZXNpZ24lMjBtb2NrdXAlMjBkYXJrfGVufDF8fHx8MTc3Mzk1OTUwOXww&ixlib=rb-4.1.0&q=80&w=1080",
      layout: "col-span-12 md:col-span-8",
    },
    {
      slug: "nova-os",
      titleKey: "project2Title",
      categoryKey: "project2Category",
      descKey: "project2Desc",
      image:
        "https://images.unsplash.com/photo-1725267196915-7700df784ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBtb2NrdXAlMjBtaW5pbWFsfGVufDF8fHx8MTc3Mzk1OTUwOXww&ixlib=rb-4.1.0&q=80&w=1080",
      layout: "col-span-12 md:col-span-4 mt-0 md:mt-32",
    },
    {
      slug: "lumina-commerce",
      titleKey: "project3Title",
      categoryKey: "project3Category",
      descKey: "project3Desc",
      image:
        "https://images.unsplash.com/photo-1752134593976-603769edccbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlayUyMG1vZGVybiUyMGJyYW5kaW5nJTIwbW9ja3VwfGVufDF8fHx8MTc3Mzk1OTUwOXww&ixlib=rb-4.1.0&q=80&w=1080",
      layout: "col-span-12",
    },
  ];

  return (
    <section id="work" className="py-24 bg-[#0A0A0A] text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-sm uppercase tracking-widest text-neutral-500 mb-6 font-medium">
              {t("tagline")}
            </h2>
            <h3 className="text-4xl md:text-6xl font-semibold tracking-tighter max-w-2xl leading-[1.1]">
              {t("heading1")} <br />
              <span className="text-neutral-500 italic font-light">{t("heading2")}</span>{" "}
              {t("heading3")}
            </h3>
          </div>
          <Link
            href="/works"
            className="flex items-center space-x-2 text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition-colors border-b border-neutral-600 pb-1"
          >
            <span>{t("viewAll")}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`${project.layout}`}
            >
              <Link href={`/works/${project.slug}`} className="group flex flex-col cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6 bg-neutral-900 aspect-video w-full">
                  <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
                  <OptimizedImage
                    src={project.image}
                    alt={t(project.titleKey)}
                    aspectRatio="16/9"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-6 py-3 font-medium uppercase tracking-widest text-xs flex items-center space-x-2 shadow-xl">
                      <span>{t("viewCase")}</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-start grow">
                  <div className="pr-6">
                    <h4 className="text-2xl font-medium tracking-tight mb-1">{t(project.titleKey)}</h4>
                    <div className="text-neutral-500 font-medium text-sm uppercase tracking-wider mb-3">
                      {t(project.categoryKey)}
                    </div>
                    <p className="text-neutral-400 font-light leading-relaxed">{t(project.descKey)}</p>
                  </div>
                  <div className="shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-md">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
