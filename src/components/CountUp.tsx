"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

interface CountUpProps {
  value: string; // e.g. "200+", "99%", "10+", "$50M+"
  duration?: number;
  className?: string;
}

function parse(value: string): { prefix: string; num: number; suffix: string } {
  // Match optional prefix (like $ or +/-), number (int or float), optional suffix
  const match = value.match(/^([^0-9]*)(\d+\.?\d*)(.*)$/);
  if (!match) return { prefix: "", num: 0, suffix: value };
  return {
    prefix: match[1] ?? "",
    num: parseFloat(match[2] ?? "0"),
    suffix: match[3] ?? "",
  };
}

export function CountUp({ value, duration = 2000, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");
  const hasRun = useRef(false);

  const { prefix, num, suffix } = parse(value);
  const isFloat = !Number.isInteger(num);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;

    let start: number | null = null;

    function step(timestamp: number) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease out quart
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = eased * num;
      setDisplay(isFloat ? current.toFixed(1) : Math.floor(current).toString());
      if (progress < 1) requestAnimationFrame(step);
      else setDisplay(isFloat ? num.toFixed(1) : num.toString());
    }

    requestAnimationFrame(step);
  }, [inView, num, duration, isFloat]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}

export default CountUp;
