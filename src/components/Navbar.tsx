"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "./LocaleSwitcher";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("nav");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("about"), href: "/#about" },
    { label: t("services"), href: "/#services" },
    { label: t("work"), href: "/#work" },
    { label: t("products"), href: "/#products" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-5 flex justify-between items-center transition-all duration-500 ${
          scrolled
            ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter uppercase text-white"
        >
          ELITECH ID<span className="text-neutral-500">.</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-white">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-neutral-300 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/estimate"
            className="px-5 py-2 rounded-full bg-white/5 border border-white/15 hover:bg-white/10 transition-all duration-300 text-neutral-300 text-sm"
          >
            Get Estimate
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 text-white"
          >
            {t("contact")}
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-3">
          <LocaleSwitcher />
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 text-white"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-3xl font-light tracking-tight hover:text-neutral-400 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/estimate"
            className="text-3xl font-light tracking-tight hover:text-neutral-400 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Get Estimate
          </Link>
          <Link
            href="/contact"
            className="text-3xl font-light tracking-tight hover:text-neutral-400 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            {t("contact")}
          </Link>
          <div className="flex items-center space-x-4 mt-8">
            <LocaleSwitcher />
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Navbar;
