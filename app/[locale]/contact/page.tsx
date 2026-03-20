"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowLeft, Send, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "../../../src/i18n/navigation";

const SERVICE_OPTIONS = [
  "Web Development",
  "UI/UX Design",
  "Performance Optimization",
  "System Integration",
  "Other",
];

const BUDGET_OPTIONS = [
  "< $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Let's discuss",
];

export default function ContactPage() {
  const t = useTranslations("contactPage");

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — replace with real API call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-20 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[20vw] font-black tracking-tighter text-white/[0.02] leading-none">
            HELLO
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/"
            className="group inline-flex items-center space-x-2 text-sm text-neutral-500 hover:text-white transition-colors duration-300 mb-12"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="uppercase tracking-widest">{t("backHome")}</span>
          </Link>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-widest text-neutral-500 mb-6 font-medium"
          >
            {t("label")}
          </motion.p>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]"
            >
              {t("title1")}
              <br />
              <span className="text-neutral-500 italic font-light">{t("title2")}</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-neutral-400 font-light max-w-lg leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Left — Info */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-12 lg:sticky lg:top-32"
              >
                {/* Email */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral-600 mb-3 font-medium">
                    {t("infoEmailLabel")}
                  </p>
                  <a
                    href="mailto:hello@elitetech.dev"
                    className="text-xl font-light text-neutral-200 hover:text-white transition-colors border-b border-white/10 hover:border-white pb-1"
                  >
                    hello@elitetech.dev
                  </a>
                </div>

                {/* Response time */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral-600 mb-3 font-medium">
                    {t("infoResponseLabel")}
                  </p>
                  <p className="text-neutral-400 font-light">{t("infoResponseValue")}</p>
                </div>

                {/* Based in */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral-600 mb-3 font-medium">
                    {t("infoLocationLabel")}
                  </p>
                  <p className="text-neutral-400 font-light">Indonesia — Remote Worldwide</p>
                </div>

                {/* Divider */}
                <div className="border-t border-white/5 pt-10">
                  <p className="text-xs uppercase tracking-widest text-neutral-600 mb-6 font-medium">
                    {t("infoFollowLabel")}
                  </p>
                  <div className="flex flex-col space-y-3">
                    {["LinkedIn", "Twitter / X", "GitHub", "Dribbble"].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="flex items-center justify-between text-neutral-400 hover:text-white transition-colors group"
                      >
                        <span className="font-light">{social}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center text-center py-24 border border-white/5 rounded-2xl"
                >
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-8">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-black tracking-tighter mb-4">{t("successTitle")}</h2>
                  <p className="text-neutral-400 font-light max-w-md leading-relaxed mb-10">
                    {t("successDesc")}
                  </p>
                  <Link
                    href="/"
                    className="flex items-center space-x-2 text-sm text-neutral-500 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="uppercase tracking-widest">{t("backHome")}</span>
                  </Link>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-3 font-medium">
                        {t("fieldName")} <span className="text-white">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder={t("fieldNamePlaceholder")}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-3 font-medium">
                        {t("fieldEmail")} <span className="text-white">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder={t("fieldEmailPlaceholder")}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-3 font-medium">
                      {t("fieldCompany")}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder={t("fieldCompanyPlaceholder")}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors duration-200"
                    />
                  </div>

                  {/* Service + Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-3 font-medium">
                        {t("fieldService")} <span className="text-white">*</span>
                      </label>
                      <select
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors duration-200 appearance-none"
                      >
                        <option value="" disabled className="bg-[#050505]">
                          {t("fieldServicePlaceholder")}
                        </option>
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#0a0a0a]">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-3 font-medium">
                        {t("fieldBudget")}
                      </label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors duration-200 appearance-none"
                      >
                        <option value="" disabled className="bg-[#050505]">
                          {t("fieldBudgetPlaceholder")}
                        </option>
                        {BUDGET_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#0a0a0a]">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-3 font-medium">
                      {t("fieldMessage")} <span className="text-white">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder={t("fieldMessagePlaceholder")}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors duration-200 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex items-center justify-between pt-2">
                    <p className="text-xs text-neutral-600 font-light">
                      * {t("requiredNote")}
                    </p>
                    <button
                      type="submit"
                      disabled={loading}
                      className="group inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-2xl shadow-white/10"
                    >
                      {loading ? (
                        <span>{t("submitting")}</span>
                      ) : (
                        <>
                          <span>{t("submitBtn")}</span>
                          <div className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center">
                            <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </div>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
