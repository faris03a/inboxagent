"use client";

import { motion } from "framer-motion";

interface Props {
  value: number;
  className?: string;
  digits?: number;
  prefix?: string;
}

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function Digit({ char }: { char: string }) {
  if (!/\d/.test(char)) {
    return <span className="inline-block">{char}</span>;
  }
  const n = Number(char);
  return (
    <span className="inline-block overflow-hidden align-baseline" style={{ height: "1em" }}>
      <motion.span
        className="flex flex-col"
        animate={{ y: `-${n}em` }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        {DIGITS.map((d) => (
          <span key={d} style={{ height: "1em", lineHeight: "1em" }}>
            {d}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

export default function Odometer({ value, className = "", digits = 0, prefix = "" }: Props) {
  const str = Math.max(0, Math.round(value)).toLocaleString();
  const padded = digits > 0 ? str.padStart(digits, "0") : str;
  return (
    <span className={`inline-flex items-baseline tabular-nums ${className}`}>
      {prefix && <span className="mr-1">{prefix}</span>}
      {padded.split("").map((ch, i) => (
        <Digit key={`${i}-${ch}`} char={ch} />
      ))}
    </span>
  );
}
