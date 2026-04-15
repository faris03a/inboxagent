import Link from "next/link";
import Reveal from "@/components/Reveal";

const presets = [
  { name: "Ecommerce", icon: "shopping_bag", body: "Shopify + Stripe, refund rules, WISMO out of the box." },
  { name: "SaaS", icon: "cloud", body: "Billing questions, password resets, churn offers." },
  { name: "Marketplace", icon: "storefront", body: "Buyer-seller mediation, dispute resolution." },
  { name: "Services", icon: "event_available", body: "Bookings, rescheduling, intake forms." },
];

export default function Presets() {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-8 py-20 md:py-28 border-t border-outline-variant">
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <p className="text-primary text-sm font-semibold uppercase tracking-wider">Presets</p>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
            Start from a template. Ship today.
          </h2>
        </div>
        <Link
          href="/presets"
          className="text-sm text-primary font-semibold hover:text-primary-dim"
        >
          Browse all presets &rarr;
        </Link>
      </div>
      <div className="grid md:grid-cols-4 gap-4">
        {presets.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <Link
              href="/presets"
              className="rounded-lg border border-outline-variant glass-card p-6 hover:border-primary/50 transition-colors block h-full"
            >
              <span className="material-symbols-outlined text-primary">{p.icon}</span>
              <div className="font-headline font-bold mt-3">{p.name}</div>
              <div className="text-on-surface-variant text-sm mt-1">{p.body}</div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
