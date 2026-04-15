"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  format?: (n: number) => string;
}

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export default function AnimatedCounter({
  value,
  duration = 1600,
  prefix = "",
  suffix = "",
  className = "",
  format,
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              setDisplay(Math.round(value * easeOut(t)));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  const rendered = format ? format(display) : display.toLocaleString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {rendered}
      {suffix}
    </span>
  );
}
