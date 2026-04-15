"use client";

import Link from "next/link";
import { useState } from "react";
import { useModals } from "./ModalProvider";
import MagneticButton from "./MagneticButton";

type Page = "home" | "how-it-works" | "presets" | "pricing" | "security";

interface Props {
  activePage?: Page;
}

const LINKS: { href: string; label: string; key: Page }[] = [
  { href: "/how-it-works", label: "How it works", key: "how-it-works" },
  { href: "/presets", label: "Presets", key: "presets" },
  { href: "/pricing", label: "Pricing", key: "pricing" },
  { href: "/security", label: "Security", key: "security" },
];

export default function Nav({ activePage }: Props) {
  const { openLoginModal, openSignupModal } = useModals();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 glass-panel border-b border-outline-variant">
      <nav className="mx-auto max-w-7xl px-4 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-headline text-lg font-bold tracking-tight glow-text">
          Inbox<span className="text-primary">Agent</span>
        </Link>
        <div className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className={`text-sm transition-colors ${
                activePage === l.key
                  ? "text-primary"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={openLoginModal}
            className="text-sm text-on-surface-variant hover:text-on-surface"
          >
            Log in
          </button>
          <MagneticButton
            type="button"
            onClick={() => openSignupModal("trial")}
            className="rounded-full bg-primary text-on-primary px-4 py-2 text-sm font-bold hover:bg-primary-dim transition-colors"
          >
            Get started
          </MagneticButton>
        </div>
        <button
          type="button"
          className="md:hidden text-on-surface"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="material-symbols-outlined">{mobileOpen ? "close" : "menu"}</span>
        </button>
      </nav>
      {mobileOpen && (
        <div className="md:hidden border-t border-outline-variant glass-panel px-4 py-4 space-y-3">
          {LINKS.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-on-surface-variant hover:text-on-surface"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-3 border-t border-outline-variant">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                openLoginModal();
              }}
              className="flex-1 rounded-full border border-outline-variant py-2 text-sm"
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                openSignupModal("trial");
              }}
              className="flex-1 rounded-full bg-primary text-on-primary py-2 text-sm font-bold"
            >
              Get started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
