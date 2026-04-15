"use client";

import AnimatedCounter from "@/components/AnimatedCounter";
import Reveal from "@/components/Reveal";
import { useState } from "react";

const stats = [
  { label: "Tickets resolved", value: 2400000, suffix: "+" },
  { label: "Median first response", value: 12, suffix: "s" },
  { label: "Customer CSAT", value: 96, suffix: "%" },
  { label: "Hours saved monthly", value: 180, suffix: "h" },
];

export default function Trust() {
  const [approved, setApproved] = useState(false);
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-8 py-20 md:py-28 border-t border-outline-variant">
      <div className="grid md:grid-cols-4 gap-5 mb-16">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 80}
            className="rounded-lg border border-outline-variant glass-card p-6 text-center"
          >
            <div className="font-headline font-extrabold text-3xl md:text-4xl text-primary">
              <AnimatedCounter value={s.value} suffix={s.suffix} />
            </div>
            <div className="text-xs uppercase tracking-wider text-on-surface-variant mt-2">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="rounded-lg border border-outline-variant glass-card p-6 md:p-8 max-w-xl mx-auto">
        <div className="flex items-start gap-4">
          <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary">payments</span>
          </div>
          <div className="flex-1">
            <div className="font-headline font-bold">Refund request &mdash; $42.00</div>
            <p className="text-on-surface-variant text-sm mt-1">
              Order #10293 &middot; &ldquo;The strap broke after two uses.&rdquo;
            </p>
            <div className="mt-4 flex gap-3">
              {approved ? (
                <span className="rounded-full bg-tertiary-fixed-dim/20 text-tertiary-fixed-dim px-4 py-2 text-sm font-semibold">
                  Approved
                </span>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setApproved(true)}
                    className="rounded-full bg-primary text-on-primary px-4 py-2 text-sm font-bold"
                  >
                    Approve Refund
                  </button>
                  <button
                    type="button"
                    onClick={() => setApproved(false)}
                    className="rounded-full border border-outline-variant px-4 py-2 text-sm"
                  >
                    Decline
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
