import SpotlightCard from "@/components/SpotlightCard";
import Reveal from "@/components/Reveal";

const problems = [
  {
    icon: "schedule",
    title: "VAs sleep. Customers don&apos;t.",
    body: "Your agent in Manila is offline when your US customers are furious about a missing package at 2am.",
  },
  {
    icon: "autorenew",
    title: "Training never ends.",
    body: "Every policy change is a week of retraining. Every new hire forgets your refund thresholds.",
  },
  {
    icon: "trending_up",
    title: "Costs grow with tickets.",
    body: "Double your volume, double your headcount. That&apos;s not a business, that&apos;s a treadmill.",
  },
];

export default function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-8 py-20 md:py-28">
      <Reveal className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider">The problem</p>
        <h2 className="font-headline text-3xl md:text-5xl font-bold mt-3">
          Your support stack is a bucket with a hole in it.
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-5">
        {problems.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <SpotlightCard
              className="rounded-lg border border-outline-variant glass-card p-7 h-full"
            >
              <span className="material-symbols-outlined text-primary text-3xl">{p.icon}</span>
              <h3
                className="font-headline text-xl font-bold mt-4"
                dangerouslySetInnerHTML={{ __html: p.title }}
              />
              <p
                className="text-on-surface-variant text-sm mt-2"
                dangerouslySetInnerHTML={{ __html: p.body }}
              />
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
