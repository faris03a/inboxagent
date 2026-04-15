"use client";

import { useState } from "react";
import { useModals } from "@/components/ModalProvider";
import MagneticButton from "@/components/MagneticButton";
import Reveal from "@/components/Reveal";

const tiers = [
  {
    name: "Starter",
    monthly: 99,
    tagline: "For solo founders and small ops teams.",
    features: ["500 tickets/mo", "1 inbox", "Email support", "Shopify integration"],
    highlighted: false,
  },
  {
    name: "Growth",
    monthly: 399,
    tagline: "For scaling brands with real volume.",
    features: ["5,000 tickets/mo", "5 inboxes", "Priority support", "All integrations", "Custom presets"],
    highlighted: true,
  },
  {
    name: "Scale",
    monthly: 1299,
    tagline: "For enterprises that need guarantees.",
    features: ["Unlimited tickets", "Unlimited inboxes", "Dedicated SE", "SSO & SAML", "99.99% SLA"],
    highlighted: false,
  },
];

export default function Pricing() {
  const { openSignupModal } = useModals();
  const [annual, setAnnual] = useState(false);

  const price = (monthly: number) =>
    annual ? Math.round((monthly * 12 * 0.8) / 12) : monthly;

  return (
    <section className="mx-auto max-w-6xl px-4 md:px-8 py-20 md:py-28 border-t border-outline-variant">
      <Reveal className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider">Pricing</p>
        <h2 className="font-headline text-3xl md:text-5xl font-bold mt-3">
          Pay less than one VA. Handle ten times the volume.
        </h2>
      </Reveal>
      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-full border border-outline-variant p-1 glass-panel">
          <button
            type="button"
            onClick={() => setAnnual(false)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
              !annual ? "bg-primary text-on-primary" : "text-on-surface-variant"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setAnnual(true)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
              annual ? "bg-primary text-on-primary" : "text-on-surface-variant"
            }`}
          >
            Annual (20% off)
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {tiers.map((t, idx) => {
          const body = (
            <div className="p-8 rounded-lg h-full flex flex-col">
              <div className="font-headline text-xl font-bold">{t.name}</div>
              <p className="text-on-surface-variant text-sm mt-1">{t.tagline}</p>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-headline text-4xl font-extrabold">${price(t.monthly)}</span>
                <span className="text-on-surface-variant text-sm">/mo</span>
              </div>
              <ul className="mt-5 space-y-2 text-sm flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2 items-center">
                    <span className="material-symbols-outlined text-primary text-base">
                      check_circle
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <MagneticButton
                type="button"
                onClick={() => openSignupModal("trial", t.name)}
                className={`mt-6 rounded-full px-4 py-3 text-sm font-bold transition-colors ${
                  t.highlighted
                    ? "bg-primary text-on-primary hover:bg-primary-dim"
                    : "border border-outline-variant hover:bg-surface-container"
                }`}
              >
                Choose {t.name}
              </MagneticButton>
            </div>
          );
          return t.highlighted ? (
            <Reveal key={t.name} delay={idx * 80} className="rotating-border">
              <div className="rotating-border-inner">{body}</div>
            </Reveal>
          ) : (
            <Reveal
              key={t.name}
              delay={idx * 80}
              className="rounded-lg border border-outline-variant glass-card"
            >
              {body}
            </Reveal>
          );
        })}
      </div>
      <div className="text-center mt-10 text-sm text-on-surface-variant">
        Need something custom?{" "}
        <button
          type="button"
          onClick={() => openSignupModal("sales")}
          className="text-primary font-semibold hover:underline"
        >
          Contact Sales
        </button>
      </div>
    </section>
  );
}
