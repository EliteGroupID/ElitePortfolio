"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    // Only show once per browser session
    if (sessionStorage.getItem("splashShown")) return;
    sessionStorage.setItem("splashShown", "1");
    setVisible(true);

    // Count from 0 to 100 over ~1800ms
    let start: number | null = null;
    const duration = 1800;

    function step(timestamp: number) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * 100));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // Pause at 100 briefly then leave
        setTimeout(() => setLeaving(true), 300);
        setTimeout(() => setVisible(false), 1100);
      }
    }

    // Small delay before starting
    const raf = setTimeout(() => requestAnimationFrame(step), 200);
    return () => clearTimeout(raf);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 1 }}
        >
          {/* Curtain slide-up exit */}
          <motion.div
            className="absolute inset-0 bg-[#050505] origin-bottom"
            initial={{ scaleY: 1 }}
            animate={leaving ? { scaleY: 0 } : { scaleY: 1 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: leaving ? 0 : 1, y: leaving ? -16 : 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="mb-12"
            >
              <span className="text-white text-3xl md:text-4xl font-bold tracking-tighter uppercase">
                ELITECH ID<span className="text-neutral-500">.</span>
              </span>
            </motion.div>

            {/* Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: leaving ? 0 : 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-[5rem] md:text-[8rem] font-black tracking-tighter leading-none text-white tabular-nums"
            >
              {String(count).padStart(2, "0")}
              <span className="text-neutral-700">%</span>
            </motion.div>

            {/* Label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: leaving ? 0 : 0.4 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-xs uppercase tracking-[0.3em] text-neutral-500 mt-6 font-medium"
            >
              Loading Experience
            </motion.p>
          </div>

          {/* Progress bar at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5">
            <motion.div
              className="h-full bg-white/40"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: count / 100 }}
              style={{ originX: 0 }}
              transition={{ duration: 0.05 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SplashScreen;
