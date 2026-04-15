import Reveal from "@/components/Reveal";

const steps = [
  { n: "01", title: "Connect", body: "OAuth into Gmail, Zendesk, or Shopify. Two clicks." },
  { n: "02", title: "Teach", body: "Upload your SOPs. Pick a preset. Edit the tone." },
  { n: "03", title: "Go live", body: "Shadow mode first. Flip to auto when you trust it." },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-8 py-20 md:py-28 border-t border-outline-variant">
      <Reveal className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider">How it works</p>
        <h2 className="font-headline text-3xl md:text-5xl font-bold mt-3">
          Live in a day. Not a quarter.
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-5">
        {steps.map((s, i) => (
          <Reveal
            key={s.n}
            delay={i * 80}
            className="rounded-lg border border-outline-variant glass-card p-7"
          >
            <div className="font-headline text-5xl font-extrabold text-primary/40">{s.n}</div>
            <h3 className="font-headline text-xl font-bold mt-3">{s.title}</h3>
            <p className="text-on-surface-variant text-sm mt-2">{s.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
