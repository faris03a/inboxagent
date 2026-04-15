"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section";
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const commonProps = {
    ref,
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    transition: { duration: 0.5, ease: "easeOut" as const, delay: delay / 1000 },
    className,
  };

  if (as === "section") {
    return (
      <motion.section
        {...commonProps}
        ref={ref as unknown as React.RefObject<HTMLElement>}
      >
        {children}
      </motion.section>
    );
  }

  return <motion.div {...commonProps}>{children}</motion.div>;
}
