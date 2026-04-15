"use client";

import { useModals } from "@/components/ModalProvider";
import MagneticButton from "@/components/MagneticButton";
import Reveal from "@/components/Reveal";

export default function CustomCTA() {
  const { openSignupModal } = useModals();
  return (
    <section className="mx-auto max-w-4xl px-4 md:px-8 py-20">
      <Reveal className="rounded-lg border border-outline-variant glass-card p-10 text-center">
        <h2 className="font-headline text-2xl md:text-3xl font-bold">
          Don&apos;t see your industry?
        </h2>
        <p className="text-on-surface-variant mt-3 max-w-md mx-auto">
          Tell us what you sell and how you support it. We&apos;ll spec a custom agent.
        </p>
        <div className="mt-6">
          <MagneticButton
            type="button"
            onClick={() => openSignupModal("custom")}
            className="rounded-full bg-primary text-on-primary font-bold px-6 py-3 hover:bg-primary-dim transition-colors"
          >
            Build My Custom Agent
          </MagneticButton>
        </div>
      </Reveal>
    </section>
  );
}
