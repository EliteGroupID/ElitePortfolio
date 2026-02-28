"use client";

import { useTranslations } from "next-intl";
import { Link } from "../i18n/navigation";
import ThemeToggle from "./ThemeToggle";
import LocaleSwitcher from "./LocaleSwitcher";

const EGIcon = "/assets/eg-icon.png";

const Navbar = () => {
  const t = useTranslations("nav");

  const scrollLinks = [
    { label: t("about"), href: "about" },
    { label: t("services"), href: "services" },
    { label: t("team"), href: "team" },
    { label: t("contact"), href: "contact" },
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-gray-200 dark:border-neutral-700 font-popin">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src={EGIcon} className="w-8" alt="EG Icon" />
          <span className="font-semibold tracking-wide text-neutral-900 dark:text-white text-sm">
            EliteTech DEV
          </span>
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {scrollLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleScroll(link.href)}
                className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 text-sm tracking-wide"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <Link
              href="/products"
              className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 text-sm tracking-wide"
            >
              {t("products")}
            </Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
          <li>
            <LocaleSwitcher />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
