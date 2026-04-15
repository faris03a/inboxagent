"use client";

import SpotlightCard from "@/components/SpotlightCard";
import MagneticButton from "@/components/MagneticButton";
import Reveal from "@/components/Reveal";
import { useModals } from "@/components/ModalProvider";

const presets = [
  { icon: "shopping_bag", name: "Ecommerce", body: "Where's my order, refunds, returns, exchanges." },
  { icon: "cloud", name: "SaaS", body: "Billing, cancellations, feature questions, password resets." },
  { icon: "storefront", name: "Marketplace", body: "Buyer-seller mediation, dispute resolution, payout questions." },
  { icon: "event_available", name: "Services", body: "Bookings, rescheduling, intake, post-service follow-up." },
  { icon: "local_dining", name: "Food & Bev", body: "Order status, allergen questions, delivery issues." },
  { icon: "fitness_center", name: "Fitness & Wellness", body: "Membership questions, class scheduling, trainer matching." },
  { icon: "school", name: "Edtech", body: "Course access, refunds, homework help escalation." },
  { icon: "travel", name: "Travel", body: "Bookings, changes, cancellations, loyalty queries." },
];

export default function PresetGrid() {
  const { openSignupModal } = useModals();
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-8 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {presets.map((p, i) => (
          <Reveal key={p.name} delay={(i % 4) * 80}>
            <SpotlightCard
              className="rounded-lg border border-outline-variant glass-card p-6 flex flex-col h-full"
            >
              <span className="material-symbols-outlined text-primary text-3xl">{p.icon}</span>
              <div className="font-headline font-bold mt-3">{p.name}</div>
              <div className="text-on-surface-variant text-sm mt-1 flex-1">{p.body}</div>
              <MagneticButton
                type="button"
                onClick={() => openSignupModal("custom", p.name)}
                className="mt-4 rounded-full border border-outline-variant px-4 py-2 text-xs font-semibold hover:bg-surface-container transition-colors self-start"
              >
                Use preset
              </MagneticButton>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
