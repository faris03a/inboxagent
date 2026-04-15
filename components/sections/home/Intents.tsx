"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

type Mode = "auto" | "draft";

const intents = {
  auto: [
    { title: "Where is my order?", detail: "Agent pulls tracking, replies with ETA. Closed ticket." },
    { title: "Cancel my subscription", detail: "Agent offers pause + discount; processes cancel if declined." },
    { title: "Password reset", detail: "Sends secure reset link with verification." },
    { title: "Refund under threshold", detail: "Applies refund rule, issues credit, notifies finance." },
  ],
  draft: [
    { title: "Legal complaint", detail: "Drafts response, flags for human review, attaches policy." },
    { title: "Large refund request", detail: "Drafts with recommended action, waits for approval." },
    { title: "Chargeback dispute", detail: "Prepares evidence packet in the draft for you to send." },
    { title: "VIP escalation", detail: "Drafts personal reply in founder tone, pings account owner." },
  ],
};

export default function Intents() {
  const [mode, setMode] = useState<Mode>("auto");
  const list = intents[mode];
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-8 py-20 md:py-28 border-t border-outline-variant">
      <Reveal className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider">Intents</p>
        <h2 className="font-headline text-3xl md:text-5xl font-bold mt-3">
          Automated where it&apos;s safe. Drafted where it isn&apos;t.
        </h2>
      </Reveal>
      <div className="inline-flex mx-auto rounded-full border border-outline-variant p-1 glass-panel mb-10 mx-auto w-fit block">
        {(["auto", "draft"] as Mode[]).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
              mode === m ? "bg-primary text-on-primary" : "text-on-surface-variant"
            }`}
          >
            {m === "auto" ? "Automated" : "Human-Draft"}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {list.map((it, i) => (
          <Reveal
            key={it.title}
            delay={i * 80}
            className="rounded-lg border border-outline-variant glass-card p-6 flex items-start gap-4"
          >
            <span
              className={`material-symbols-outlined mt-1 ${
                mode === "auto" ? "text-tertiary-fixed-dim" : "text-secondary"
              }`}
            >
              {mode === "auto" ? "bolt" : "edit_note"}
            </span>
            <div>
              <div className="font-headline font-bold">{it.title}</div>
              <div className="text-on-surface-variant text-sm mt-1">{it.detail}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
