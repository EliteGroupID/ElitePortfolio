"use client";

import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "motion/react";

const ROW_ONE = [
  "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Redis",
  "Docker", "AWS", "GraphQL", "React Native", "Tailwind CSS", "Figma",
];

const ROW_TWO = [
  "ESP32", "Arduino", "Raspberry Pi", "MQTT", "InfluxDB", "Grafana",
  "Stripe", "Midtrans", "WebSocket", "Nginx", "Kubernetes", "Python",
];

interface MarqueeRowProps {
  items: string[];
  speed: number; // px per second, negative = right-to-left
}

function MarqueeRow({ items, speed }: MarqueeRowProps) {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
    const container = containerRef.current;
    if (!container) return;
    // Width of one set of items (half the total since we duplicate)
    const halfWidth = container.scrollWidth / 2;
    let next = x.get() + (speed * delta) / 1000;
    // Loop seamlessly
    if (speed < 0 && next <= -halfWidth) next += halfWidth;
    if (speed > 0 && next >= 0) next -= halfWidth;
    x.set(next);
  });

  // Duplicate items for seamless loop
  const all = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <motion.div
        ref={containerRef}
        style={{ x }}
        className="flex items-center gap-3 w-max"
      >
        {all.map((tech, idx) => (
          <div
            key={idx}
            className="shrink-0 flex items-center gap-3"
          >
            <span className="px-5 py-2.5 border border-white/8 rounded-full text-sm text-neutral-400 hover:text-white hover:border-white/25 transition-all duration-300 cursor-default whitespace-nowrap font-light tracking-wide">
              {tech}
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-700 shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function TechMarquee() {
  return (
    <section className="pt-10 pb-14 bg-[#050505] border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-6">
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-600 font-medium text-center">
          Technologies We Work With
        </p>
      </div>

      <div className="space-y-4">
        <MarqueeRow items={ROW_ONE} speed={-40} />
        <MarqueeRow items={ROW_TWO} speed={40} />
      </div>
    </section>
  );
}

export default TechMarquee;
