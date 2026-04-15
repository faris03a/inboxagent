import SpotlightCard from "@/components/SpotlightCard";
import Reveal from "@/components/Reveal";

const features = [
  { icon: "bolt", title: "Replies in seconds", body: "Zero wait time. Every ticket, every time zone." },
  { icon: "shield_person", title: "Your policies, enforced", body: "Refund limits, escalation rules, tone — locked in." },
  { icon: "inventory_2", title: "Connected to your stack", body: "Shopify, Stripe, Zendesk, Gorgias, Intercom." },
  { icon: "psychology", title: "Learns from your team", body: "Every human-drafted reply improves the agent." },
];

export default function Solution() {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-8 py-20 md:py-28 border-t border-outline-variant">
      <Reveal className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider">The solution</p>
        <h2 className="font-headline text-3xl md:text-5xl font-bold mt-3">
          One agent. Every inbox. Zero excuses.
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-5">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 80}>
            <SpotlightCard
              className="rounded-lg border border-outline-variant glass-card p-7 flex gap-5 h-full"
            >
              <div className="shrink-0 size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">{f.icon}</span>
              </div>
              <div>
                <h3 className="font-headline text-lg font-bold">{f.title}</h3>
                <p className="text-on-surface-variant text-sm mt-1">{f.body}</p>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
