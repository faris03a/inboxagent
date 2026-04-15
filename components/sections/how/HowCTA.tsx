"use client";

import { useModals } from "@/components/ModalProvider";
import MagneticButton from "@/components/MagneticButton";
import Reveal from "@/components/Reveal";

export default function HowCTA() {
  const { openSignupModal } = useModals();
  return (
    <Reveal as="section" className="mx-auto max-w-3xl px-4 md:px-8 py-20 text-center">
      <h2 className="font-headline text-3xl md:text-4xl font-bold">
        Ready to ship your agent?
      </h2>
      <p className="text-on-surface-variant mt-3">
        Live in a day. Free for 14 days.
      </p>
      <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
        <MagneticButton
          type="button"
          onClick={() => openSignupModal("trial")}
          className="rounded-full bg-primary text-on-primary font-bold px-6 py-3 hover:bg-primary-dim transition-colors"
        >
          Start free trial
        </MagneticButton>
        <button
          type="button"
          onClick={() => openSignupModal("demo")}
          className="rounded-full border border-outline-variant px-6 py-3 font-semibold hover:bg-surface-container transition-colors"
        >
          Book a Demo
        </button>
      </div>
    </Reveal>
  );
}
