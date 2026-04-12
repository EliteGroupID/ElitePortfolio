"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft, ArrowRight, Globe, Smartphone, Palette,
  Zap, Plug, Cpu, ShoppingCart, CheckCircle2, ArrowUpRight,
} from "lucide-react";
import { Link } from "../../../src/i18n/navigation";
import { JsonLd, generateWebPageJsonLd, generateBreadcrumbJsonLd } from "../../../src/lib/seo";

// ── Data ─────────────────────────────────────────────────────────────────────

const PROJECT_TYPES = [
  { id: "web-app",      label: "Web Application",       icon: Globe,        base: 4000 },
  { id: "mobile-app",  label: "Mobile App",             icon: Smartphone,   base: 6000 },
  { id: "ui-ux",       label: "UI/UX Design",           icon: Palette,      base: 1800 },
  { id: "perf",        label: "Performance Optimization",icon: Zap,         base: 1200 },
  { id: "integration", label: "System Integration",     icon: Plug,         base: 2500 },
  { id: "iot",         label: "IoT / Embedded System",  icon: Cpu,          base: 3000 },
  { id: "ecommerce",   label: "E-Commerce Platform",    icon: ShoppingCart, base: 5000 },
];

const SCALES = [
  { id: "small",      label: "Small",      sub: "1–2 core features",    multiplier: 1.0 },
  { id: "medium",     label: "Medium",     sub: "3–5 features",         multiplier: 2.0 },
  { id: "large",      label: "Large",      sub: "6–10 features",        multiplier: 3.5 },
  { id: "enterprise", label: "Enterprise", sub: "Full custom platform",  multiplier: 6.0 },
];

const FEATURES = [
  { id: "auth",      label: "User Authentication",    price: 600  },
  { id: "admin",     label: "Admin Dashboard",        price: 900  },
  { id: "payment",   label: "Payment Integration",    price: 800  },
  { id: "api",       label: "Third-party API",        price: 500  },
  { id: "realtime",  label: "Real-time (WebSocket)",  price: 800  },
  { id: "i18n",      label: "Multi-language",         price: 400  },
  { id: "analytics", label: "Analytics Dashboard",    price: 700  },
  { id: "notif",     label: "Push Notifications",     price: 450  },
  { id: "storage",   label: "File / Media Storage",   price: 400  },
  { id: "email",     label: "Email System",           price: 350  },
  { id: "seo",       label: "SEO Optimization",       price: 500  },
  { id: "cms",       label: "CMS / Content Editor",   price: 750  },
];

const TIMELINES = [
  { id: "rush",     label: "ASAP",       sub: "< 1 month",     multiplier: 1.5,  weeks: "2–4 weeks"  },
  { id: "standard", label: "Standard",   sub: "1–3 months",    multiplier: 1.0,  weeks: "4–12 weeks" },
  { id: "flexible", label: "Flexible",   sub: "3–6 months",    multiplier: 0.9,  weeks: "12–24 weeks"},
  { id: "longterm", label: "Long-term",  sub: "6+ months",     multiplier: 0.85, weeks: "24+ weeks"  },
];

const STEPS = ["Project Type", "Scale", "Features", "Timeline", "Estimate"];

// ── Helpers ───────────────────────────────────────────────────────────────────

function calcEstimate(
  typeId: string,
  scaleId: string,
  featureIds: string[],
  timelineId: string
): { low: number; high: number; weeks: string } | null {
  const type = PROJECT_TYPES.find((t) => t.id === typeId);
  const scale = SCALES.find((s) => s.id === scaleId);
  const timeline = TIMELINES.find((t) => t.id === timelineId);
  if (!type || !scale || !timeline) return null;

  const featureTotal = featureIds.reduce((sum, fid) => {
    return sum + (FEATURES.find((f) => f.id === fid)?.price ?? 0);
  }, 0);

  const raw = (type.base * scale.multiplier + featureTotal) * timeline.multiplier;
  return {
    low: Math.round((raw * 0.85) / 100) * 100,
    high: Math.round((raw * 1.15) / 100) * 100,
    weeks: timeline.weeks,
  };
}

function fmt(n: number) {
  return "$" + n.toLocaleString("en-US");
}

// ── Component ────────────────────────────────────────────────────────────────

export function EstimatePageMetadata() {
  return (
    <>
      <JsonLd
        data={generateWebPageJsonLd({
          name: "Project Cost Estimator",
          description: "Get an instant estimate for your web development, mobile app, or IoT project. Our 4-step estimator provides pricing and timeline estimates.",
          url: "https://elitetech.dev/estimate",
        })}
      />
      <JsonLd
        data={generateBreadcrumbJsonLd([
          { name: "Home", item: "https://elitetech.dev" },
          { name: "Project Estimator", item: "https://elitetech.dev/estimate" },
        ])}
      />
    </>
  );
}

export default function EstimatePage() {
  const [step, setStep] = useState(0);
  const [typeId, setTypeId] = useState("");
  const [scaleId, setScaleId] = useState("");
  const [featureIds, setFeatureIds] = useState<string[]>([]);
  const [timelineId, setTimelineId] = useState("");
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const estimate = calcEstimate(typeId, scaleId, featureIds, timelineId);

  function go(next: number) {
    setDirection(next > step ? 1 : -1);
    setStep(next);
  }

  function toggleFeature(id: string) {
    setFeatureIds((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  }

  const canNext = [
    typeId !== "",
    scaleId !== "",
    true, // features optional
    timelineId !== "",
  ][step];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <>
      <EstimatePageMetadata />
      <main className="bg-[#050505] text-white min-h-screen">
      {/* ── Header ── */}
      <section className="pt-40 pb-12 border-b border-white/5">
        <div className="container mx-auto px-6">
          <Link
            href="/"
            className="group inline-flex items-center space-x-2 text-sm text-neutral-500 hover:text-white transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="uppercase tracking-widest">Back to Home</span>
          </Link>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-widest text-neutral-500 mb-4 font-medium"
          >
            Project Estimator
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]"
          >
            How much will
            <br />
            <span className="text-neutral-500 italic font-light">your project cost?</span>
          </motion.h1>
        </div>
      </section>

      {/* ── Main ── */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left: Steps */}
            <div className="lg:col-span-8">
              {/* Step indicator */}
              <div className="flex items-center gap-2 mb-12">
                {STEPS.slice(0, 4).map((label, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <button
                      onClick={() => idx < step && go(idx)}
                      className={`flex items-center gap-2 text-xs uppercase tracking-widest font-medium transition-colors ${
                        idx === step
                          ? "text-white"
                          : idx < step
                          ? "text-neutral-400 hover:text-white cursor-pointer"
                          : "text-neutral-700 cursor-default"
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border transition-colors ${
                          idx < step
                            ? "border-white/30 bg-white/10"
                            : idx === step
                            ? "border-white bg-white text-black"
                            : "border-white/10"
                        }`}
                      >
                        {idx < step ? <CheckCircle2 className="w-3 h-3" /> : idx + 1}
                      </span>
                      <span className="hidden md:inline">{label}</span>
                    </button>
                    {idx < 3 && <div className={`h-px w-8 ${idx < step ? "bg-white/20" : "bg-white/5"}`} />}
                  </div>
                ))}
              </div>

              {/* Step content */}
              <div className="overflow-hidden min-h-[400px]">
                <AnimatePresence custom={direction} mode="wait">
                  {/* STEP 0 — Project Type */}
                  {step === 0 && (
                    <motion.div
                      key="step0"
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.35, ease: [0.32, 0, 0.67, 0] }}
                    >
                      <h2 className="text-2xl font-semibold tracking-tight mb-8">
                        What type of project do you need?
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {PROJECT_TYPES.map((type) => {
                          const Icon = type.icon;
                          const selected = typeId === type.id;
                          return (
                            <button
                              key={type.id}
                              onClick={() => setTypeId(type.id)}
                              className={`group flex items-center gap-4 p-5 rounded-xl border text-left transition-all duration-200 ${
                                selected
                                  ? "border-white bg-white/[0.06] text-white"
                                  : "border-white/8 hover:border-white/20 text-neutral-400 hover:text-white"
                              }`}
                            >
                              <div
                                className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                  selected ? "bg-white text-black" : "bg-white/5"
                                }`}
                              >
                                <Icon className="w-5 h-5" />
                              </div>
                              <span className="font-medium tracking-tight">{type.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 1 — Scale */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.35, ease: [0.32, 0, 0.67, 0] }}
                    >
                      <h2 className="text-2xl font-semibold tracking-tight mb-8">
                        What's the scale of your project?
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {SCALES.map((scale) => {
                          const selected = scaleId === scale.id;
                          return (
                            <button
                              key={scale.id}
                              onClick={() => setScaleId(scale.id)}
                              className={`p-6 rounded-xl border text-left transition-all duration-200 ${
                                selected
                                  ? "border-white bg-white/[0.06]"
                                  : "border-white/8 hover:border-white/20"
                              }`}
                            >
                              <div className="font-semibold tracking-tight mb-1 text-white">
                                {scale.label}
                              </div>
                              <div className="text-sm text-neutral-500">{scale.sub}</div>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2 — Features */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.35, ease: [0.32, 0, 0.67, 0] }}
                    >
                      <div className="flex items-end justify-between mb-8">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Which features do you need?
                        </h2>
                        <span className="text-sm text-neutral-500">Optional</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {FEATURES.map((feature) => {
                          const checked = featureIds.includes(feature.id);
                          return (
                            <button
                              key={feature.id}
                              onClick={() => toggleFeature(feature.id)}
                              className={`flex items-center justify-between px-5 py-4 rounded-xl border text-left transition-all duration-200 ${
                                checked
                                  ? "border-white/30 bg-white/[0.04] text-white"
                                  : "border-white/8 hover:border-white/20 text-neutral-400 hover:text-white"
                              }`}
                            >
                              <span className="font-light text-sm">{feature.label}</span>
                              <div className="flex items-center gap-3">
                                <span className="text-xs text-neutral-600">+{fmt(feature.price)}</span>
                                <div
                                  className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                                    checked ? "bg-white border-white" : "border-white/20"
                                  }`}
                                >
                                  {checked && <CheckCircle2 className="w-3 h-3 text-black" />}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3 — Timeline */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.35, ease: [0.32, 0, 0.67, 0] }}
                    >
                      <h2 className="text-2xl font-semibold tracking-tight mb-2">
                        What's your timeline?
                      </h2>
                      <p className="text-neutral-500 text-sm mb-8">Rush projects may incur a premium.</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {TIMELINES.map((tl) => {
                          const selected = timelineId === tl.id;
                          return (
                            <button
                              key={tl.id}
                              onClick={() => setTimelineId(tl.id)}
                              className={`p-6 rounded-xl border text-left transition-all duration-200 ${
                                selected
                                  ? "border-white bg-white/[0.06]"
                                  : "border-white/8 hover:border-white/20"
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-semibold tracking-tight text-white">{tl.label}</span>
                                {tl.multiplier !== 1 && (
                                  <span
                                    className={`text-xs px-2 py-0.5 rounded-full ${
                                      tl.multiplier > 1
                                        ? "bg-amber-500/15 text-amber-400"
                                        : "bg-green-500/15 text-green-400"
                                    }`}
                                  >
                                    {tl.multiplier > 1 ? `+${Math.round((tl.multiplier - 1) * 100)}%` : `−${Math.round((1 - tl.multiplier) * 100)}%`}
                                  </span>
                                )}
                              </div>
                              <div className="text-sm text-neutral-500">{tl.sub}</div>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 4 — Result */}
                  {step === 4 && estimate && (
                    <motion.div
                      key="step4"
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.35, ease: [0.32, 0, 0.67, 0] }}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4 font-medium">
                          Your Estimate
                        </p>
                        <div className="mb-2">
                          <span className="text-6xl md:text-8xl font-black tracking-tighter">
                            {fmt(estimate.low)}
                          </span>
                          <span className="text-3xl font-light text-neutral-500 ml-3">
                            – {fmt(estimate.high)}
                          </span>
                        </div>
                        <p className="text-neutral-500 mb-10">
                          Estimated delivery: <span className="text-white font-medium">{estimate.weeks}</span>
                        </p>

                        <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 mb-8">
                          <p className="text-xs uppercase tracking-widest text-neutral-600 mb-4">Summary</p>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-neutral-400">Project type</span>
                              <span className="text-white font-medium">{PROJECT_TYPES.find(t => t.id === typeId)?.label}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-neutral-400">Scale</span>
                              <span className="text-white font-medium">{SCALES.find(s => s.id === scaleId)?.label}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-neutral-400">Features selected</span>
                              <span className="text-white font-medium">{featureIds.length} features</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-neutral-400">Timeline</span>
                              <span className="text-white font-medium">{TIMELINES.find(t => t.id === timelineId)?.label}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-xs text-neutral-600 mb-8 leading-relaxed">
                          * This is a rough estimate based on your inputs. Actual pricing depends on specific requirements, complexity, and final scope. Contact us for a detailed proposal.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link
                            href="/contact"
                            className="group inline-flex items-center justify-center space-x-3 bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
                          >
                            <span>Start This Project</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </Link>
                          <button
                            onClick={() => {
                              setStep(0);
                              setTypeId("");
                              setScaleId("");
                              setFeatureIds([]);
                              setTimelineId("");
                            }}
                            className="px-8 py-4 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 transition-all text-sm"
                          >
                            Start Over
                          </button>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Navigation */}
              {step < 4 && (
                <div className="flex items-center justify-between mt-10 pt-8 border-t border-white/5">
                  <button
                    onClick={() => go(step - 1)}
                    disabled={step === 0}
                    className="flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors disabled:opacity-0 disabled:cursor-default"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>

                  <button
                    onClick={() => go(step + 1)}
                    disabled={!canNext}
                    className="flex items-center gap-2 bg-white text-black px-7 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {step === 3 ? "See Estimate" : "Next"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Right: Live preview card */}
            <div className="lg:col-span-4">
              <div className="sticky top-28">
                <div className="border border-white/8 rounded-2xl p-6 bg-white/[0.02]">
                  <p className="text-xs uppercase tracking-widest text-neutral-600 mb-6 font-medium">
                    Live Estimate
                  </p>

                  {estimate ? (
                    <motion.div
                      key={`${typeId}-${scaleId}-${featureIds.join()}-${timelineId}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-3xl font-black tracking-tighter mb-1">
                        {fmt(estimate.low)}
                        <span className="text-neutral-600 font-light text-lg ml-2">– {fmt(estimate.high)}</span>
                      </div>
                      <p className="text-sm text-neutral-500 mb-6">{estimate.weeks}</p>

                      <div className="space-y-3 text-xs">
                        {typeId && (
                          <div className="flex justify-between text-neutral-500">
                            <span>Base</span>
                            <span>{fmt(PROJECT_TYPES.find(t => t.id === typeId)!.base)}</span>
                          </div>
                        )}
                        {scaleId && typeId && (
                          <div className="flex justify-between text-neutral-500">
                            <span>Scale ({SCALES.find(s => s.id === scaleId)?.label})</span>
                            <span>×{SCALES.find(s => s.id === scaleId)?.multiplier}</span>
                          </div>
                        )}
                        {featureIds.length > 0 && (
                          <div className="flex justify-between text-neutral-500">
                            <span>Features ({featureIds.length})</span>
                            <span>+{fmt(featureIds.reduce((s, id) => s + (FEATURES.find(f => f.id === id)?.price ?? 0), 0))}</span>
                          </div>
                        )}
                        {timelineId && (
                          <div className="flex justify-between text-neutral-500">
                            <span>Timeline ({TIMELINES.find(t => t.id === timelineId)?.label})</span>
                            <span>×{TIMELINES.find(t => t.id === timelineId)?.multiplier}</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    <div className="space-y-3">
                      <div className="h-8 bg-white/5 rounded-lg w-3/4 animate-pulse" />
                      <div className="h-4 bg-white/5 rounded w-1/2 animate-pulse" />
                      <div className="h-px bg-white/5 my-4" />
                      <div className="h-3 bg-white/5 rounded w-full animate-pulse" />
                      <div className="h-3 bg-white/5 rounded w-2/3 animate-pulse" />
                    </div>
                  )}

                  <div className="mt-8 pt-6 border-t border-white/5">
                    <p className="text-xs text-neutral-700 leading-relaxed">
                      Estimates are indicative. Final pricing varies based on detailed requirements.
                    </p>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <Link
                    href="/contact"
                    className="text-xs text-neutral-500 hover:text-white transition-colors"
                  >
                    Skip estimator → Talk to us directly
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
