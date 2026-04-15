"use client";

import Odometer from "@/components/Odometer";
import Reveal from "@/components/Reveal";
import { useState } from "react";

export default function ROI() {
  const [tickets, setTickets] = useState(2000);
  const [cost, setCost] = useState(6);
  // InboxAgent handles 70% at $0.30 per ticket
  const vaCost = tickets * cost;
  const agentCost = tickets * 0.7 * 0.3 + tickets * 0.3 * cost;
  const savings = Math.max(0, Math.round(vaCost - agentCost));

  return (
    <section className="mx-auto max-w-6xl px-4 md:px-8 py-20 md:py-28 border-t border-outline-variant">
      <Reveal className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider">ROI calculator</p>
        <h2 className="font-headline text-3xl md:text-5xl font-bold mt-3">
          See what you&apos;re leaving on the table.
        </h2>
      </Reveal>
      <Reveal className="rounded-lg border border-outline-variant glass-card p-8 md:p-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div>
            <label className="text-sm text-on-surface-variant flex justify-between">
              <span>Tickets per month</span>
              <span className="text-on-surface font-semibold">{tickets.toLocaleString()}</span>
            </label>
            <input
              type="range"
              min={100}
              max={20000}
              step={100}
              value={tickets}
              onChange={(e) => setTickets(Number(e.target.value))}
              className="w-full mt-2 accent-primary"
            />
          </div>
          <div>
            <label className="text-sm text-on-surface-variant flex justify-between">
              <span>Cost per ticket (VA)</span>
              <span className="text-on-surface font-semibold">${cost}</span>
            </label>
            <input
              type="range"
              min={1}
              max={20}
              step={1}
              value={cost}
              onChange={(e) => setCost(Number(e.target.value))}
              className="w-full mt-2 accent-primary"
            />
          </div>
        </div>
        <div className="text-center">
          <div className="text-sm uppercase tracking-wider text-on-surface-variant">
            Estimated monthly savings
          </div>
          <div className="font-headline font-extrabold text-primary text-5xl md:text-6xl mt-3">
            <Odometer value={savings} prefix="$" />
          </div>
          <p className="text-on-surface-variant text-sm mt-4 max-w-xs mx-auto">
            Assumes InboxAgent automates 70% of tickets at $0.30 each.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
