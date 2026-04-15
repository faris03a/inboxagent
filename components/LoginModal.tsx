"use client";

import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function LoginModal({ open, onClose }: Props) {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) {
      setSent(false);
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
        <h2 className="font-headline text-2xl font-bold mb-2">Log in to InboxAgent</h2>
        <p className="text-on-surface-variant text-sm mb-6">
          We will send you a magic link. No passwords.
        </p>
        {sent ? (
          <div className="rounded-lg bg-tertiary-container/20 border border-tertiary-fixed-dim/40 p-4 text-sm text-tertiary-fixed-dim">
            Check your inbox for a login link.
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-3"
          >
            <input
              required
              type="email"
              placeholder="Work email"
              className="w-full rounded-lg bg-surface-container-low border border-outline-variant px-4 py-3 text-sm focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-primary text-on-primary font-bold py-3 hover:bg-primary-dim transition-colors"
            >
              Send magic link
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
