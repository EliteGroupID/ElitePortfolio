"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer id="contact" className="bg-[#050505] text-white pt-32 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
          <div className="md:col-span-6 lg:col-span-5">
            <h4 className="text-3xl font-medium tracking-tighter mb-6">
              EliteTech <span className="text-neutral-500">Dev</span>
            </h4>
            <p className="text-neutral-400 font-light text-lg max-w-sm mb-10 leading-relaxed">
              {t("tagline")}
            </p>
            <div className="text-xl font-light">
              <a
                href="mailto:hello@elitetech.dev"
                className="hover:text-white text-neutral-300 transition-colors border-b border-white/20 hover:border-white pb-1"
              >
                hello@elitetech.dev
              </a>
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-2 lg:col-start-8">
            <h5 className="text-sm uppercase tracking-widest text-neutral-500 mb-6 font-medium">
              {t("navLabel")}
            </h5>
            <ul className="space-y-4 text-neutral-400 font-light">
              <li><Link href="/" className="hover:text-white transition-colors">{t("navHome")}</Link></li>
              <li><Link href="/#about" className="hover:text-white transition-colors">{t("navAbout")}</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">{t("navServices")}</Link></li>
              <li><Link href="/works" className="hover:text-white transition-colors">{t("navWork")}</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">{t("navProducts")}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{t("navContact")}</Link></li>
              <li><Link href="/estimate" className="hover:text-white transition-colors">{t("navEstimate")}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-2 lg:col-start-11">
            <h5 className="text-sm uppercase tracking-widest text-neutral-500 mb-6 font-medium">
              {t("connectLabel")}
            </h5>
            <ul className="space-y-4 text-neutral-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dribbble</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-neutral-500 font-light">
          <div>{t("copyright", { year: new Date().getFullYear() })}</div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">{t("privacy")}</Link>
            <Link href="/terms" className="hover:text-white transition-colors">{t("terms")}</Link>
          </div>
        </div>

        <div className="mt-20 overflow-hidden flex justify-center text-[12vw] font-bold tracking-tighter leading-none opacity-5 select-none">
          ELITETECH
        </div>
      </div>
    </footer>
  );
}

export default Footer;
