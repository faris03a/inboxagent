import Reveal from "@/components/Reveal";

const steps = [
  {
    n: "01",
    title: "Connect your inboxes",
    body: "OAuth into Gmail, Outlook, Zendesk, Gorgias, Intercom, Front, or Help Scout. Your data stays encrypted in transit and at rest.",
  },
  {
    n: "02",
    title: "Feed the agent",
    body: "Upload SOPs, paste macros, drop in a help center URL. The agent reads and indexes everything in minutes.",
  },
  {
    n: "03",
    title: "Set the rules",
    body: "Choose refund thresholds, escalation triggers, and tone guidelines. Toggle which intents run in auto vs draft.",
  },
  {
    n: "04",
    title: "Shadow mode",
    body: "Watch the agent draft every reply next to your human responses for a week. Approve, tweak, or reject each one.",
  },
  {
    n: "05",
    title: "Go live",
    body: "Flip safe intents to auto-reply. Watch your response time drop below 15 seconds while your team focuses on the hard stuff.",
  },
];

export default function Steps() {
  return (
    <section className="mx-auto max-w-4xl px-4 md:px-8 py-20">
      <div className="space-y-6">
        {steps.map((s, i) => (
          <Reveal
            key={s.n}
            delay={i * 80}
            className="rounded-lg border border-outline-variant glass-card p-7 flex gap-6"
          >
            <div className="font-headline text-4xl font-extrabold text-primary/40 shrink-0">
              {s.n}
            </div>
            <div>
              <h3 className="font-headline text-xl font-bold">{s.title}</h3>
              <p className="text-on-surface-variant text-sm mt-2">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
