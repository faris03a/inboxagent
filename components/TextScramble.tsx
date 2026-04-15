"use client";

import { useEffect, useState } from "react";

interface Props {
  text: string;
  intervalMs?: number;
  className?: string;
}

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export default function TextScramble({ text, intervalMs = 2200, className = "" }: Props) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let raf = 0;
    let cycleTimer: ReturnType<typeof setTimeout>;

    const scramble = () => {
      const target = text;
      const queue: { from: string; to: string; start: number; end: number; char?: string }[] = [];
      for (let i = 0; i < target.length; i++) {
        const from = display[i] ?? " ";
        const to = target[i];
        const start = Math.floor(Math.random() * 20);
        const end = start + Math.floor(Math.random() * 20) + 10;
        queue.push({ from, to, start, end });
      }
      let frame = 0;

      const update = () => {
        let out = "";
        let done = 0;
        for (let i = 0; i < queue.length; i++) {
          const q = queue[i];
          if (frame >= q.end) {
            done++;
            out += q.to;
          } else if (frame >= q.start) {
            if (!q.char || Math.random() < 0.28) {
              q.char = CHARS[Math.floor(Math.random() * CHARS.length)];
            }
            out += q.char;
          } else {
            out += q.from;
          }
        }
        setDisplay(out);
        if (done < queue.length) {
          frame++;
          raf = requestAnimationFrame(update);
        } else {
          cycleTimer = setTimeout(scramble, intervalMs);
        }
      };
      update();
    };

    cycleTimer = setTimeout(scramble, intervalMs);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(cycleTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, intervalMs]);

  return <span className={className}>{display}</span>;
}
