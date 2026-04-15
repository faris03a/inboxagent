"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60]"
      style={{ mixBlendMode: "screen" }}
    >
      <div
        className="absolute rounded-full"
        style={{
          left: pos.x - 200,
          top: pos.y - 200,
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(155,221,255,0.18) 0%, rgba(255,175,211,0.08) 40%, transparent 70%)",
          transition: "transform 60ms linear",
        }}
      />
    </div>
  );
}
