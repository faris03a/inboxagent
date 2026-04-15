"use client";

import { useEffect, useState } from "react";

export type SignupVariant = "trial" | "sales" | "demo" | "custom";

interface Props {
  open: boolean;
  variant: SignupVariant;
  tier?: string;
  onClose: () => void;
}

const HEADERS: Record<SignupVariant, { title: string; subtitle: string; cta: string }> = {
  trial: {
    title: "Start your 14-day free trial",
    subtitle: "No credit card required. Connect your inbox in minutes.",
    cta: "Start free trial",
  },
  sales: {
    title: "Talk to sales",
    subtitle: "We will reach out within one business day.",
    cta: "Contact sales",
  },
  demo: {
    title: "Book a live demo",
    subtitle: "30 minutes with a solutions engineer.",
    cta: "Request demo",
  },
  custom: {
    title: "Build your custom agent",
    subtitle: "Tell us about your workflow and we will spec it.",
    cta: "Request build",
  },
};

export default function SignupModal({ open, variant, tier, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const header = HEADERS[variant];

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-lg glass-panel border border-outline-variant p-8 shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface"
          aria-label="Close"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        {tier && (
          <div className="mb-3 inline-block rounded-full bg-primary/15 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            {tier} plan
          </div>
        )}
        <h2 className="font-headline text-2xl font-bold mb-2">{header.title}</h2>
        <p className="text-on-surface-variant text-sm mb-6">{header.subtitle}</p>
        {submitted ? (
          <div className="rounded-lg bg-tertiary-container/20 border border-tertiary-fixed-dim/40 p-4 text-sm text-tertiary-fixed-dim">
            Thanks. We will be in touch shortly.
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-3"
          >
            <input
              required
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg bg-surface-container-low border border-outline-variant px-4 py-3 text-sm focus:outline-none focus:border-primary"
            />
            <input
              required
              type="email"
              placeholder="Work email"
              className="w-full rounded-lg bg-surface-container-low border border-outline-variant px-4 py-3 text-sm focus:outline-none focus:border-primary"
            />
            <input
              type="text"
              placeholder="Company (optional)"
              className="w-full rounded-lg bg-surface-container-low border border-outline-variant px-4 py-3 text-sm focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-primary text-on-primary font-bold py-3 hover:bg-primary-dim transition-colors"
            >
              {header.cta}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
