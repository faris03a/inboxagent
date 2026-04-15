"use client";

import Link from "next/link";
import { useModals } from "@/components/ModalProvider";
import MagneticButton from "@/components/MagneticButton";
import TextScramble from "@/components/TextScramble";
import GradientBlob from "@/components/GradientBlob";

export default function Hero() {
  const { openSignupModal } = useModals();
  return (
    <section className="relative overflow-hidden">
      <GradientBlob className="-top-40 -left-40" color="rgba(155,221,255,0.25)" size={500} />
      <GradientBlob className="top-40 -right-20" color="rgba(255,175,211,0.25)" size={500} />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8 pt-24 md:pt-32 pb-20 text-center">
        <div className="inline-block rounded-full border border-outline-variant glass-panel px-4 py-1.5 text-xs text-on-surface-variant mb-8">
          Now in private beta &middot; 14-day free trial
        </div>
        <h1 className="font-headline font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight text-glow">
          Fire your customer
          <br />
          <TextScramble
            text="service VA."
            className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent"
          />
        </h1>
        <p className="mt-6 text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto">
          InboxAgent replies, refunds, and resolves tickets while you sleep &mdash; so your inbox stays empty and your customers stay happy.
        </p>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
          <MagneticButton
            type="button"
            onClick={() => openSignupModal("trial")}
            className="rounded-full bg-primary text-on-primary font-bold px-7 py-4 text-base hover:bg-primary-dim transition-colors"
          >
            Start free trial
          </MagneticButton>
          <Link
            href="/how-it-works"
            className="rounded-full border border-outline-variant px-7 py-4 text-base font-semibold hover:bg-surface-container transition-colors"
          >
            See how it works
          </Link>
        </div>
      </div>
    </section>
  );
}
