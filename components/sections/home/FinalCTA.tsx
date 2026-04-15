"use client";

import { useModals } from "@/components/ModalProvider";
import MagneticButton from "@/components/MagneticButton";
import GradientBlob from "@/components/GradientBlob";

export default function FinalCTA() {
  const { openSignupModal } = useModals();
  return (
    <section className="relative mx-auto max-w-5xl px-4 md:px-8 py-24 text-center overflow-hidden">
      <GradientBlob className="top-0 left-1/2 -translate-x-1/2" color="rgba(255,175,211,0.25)" size={600} />
      <div className="relative rounded-lg gradient-border glass-panel p-10 md:p-16">
        <h2 className="font-headline text-3xl md:text-5xl font-bold text-glow">
          Your VA is asleep. Your customers aren&apos;t.
        </h2>
        <p className="text-on-surface-variant mt-4 max-w-xl mx-auto">
          Connect your inbox in minutes. Free for 14 days. No credit card.
        </p>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-3">
          <MagneticButton
            type="button"
            onClick={() => openSignupModal("trial")}
            className="rounded-full bg-primary text-on-primary font-bold px-7 py-4 hover:bg-primary-dim transition-colors"
          >
            Start free trial
          </MagneticButton>
          <button
            type="button"
            onClick={() => openSignupModal("demo")}
            className="rounded-full border border-outline-variant px-7 py-4 font-semibold hover:bg-surface-container transition-colors"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
