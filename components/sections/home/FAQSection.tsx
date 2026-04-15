import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal";

const items = [
  {
    q: "Will this actually replace my VA?",
    a: "For 60-80% of tickets, yes. The remaining tickets get drafted replies your team approves — still a massive time save.",
  },
  {
    q: "What if the agent makes a mistake?",
    a: "You set the risk tolerance. Start in shadow mode (drafts only), graduate to auto-reply for low-risk intents, and keep humans in the loop for high-stakes ones.",
  },
  {
    q: "How long to set up?",
    a: "Most teams are live within a day. Presets and OAuth integrations do the heavy lifting.",
  },
  {
    q: "Which inbox providers do you support?",
    a: "Gmail, Outlook, Zendesk, Gorgias, Intercom, Front, Help Scout, and anything with an IMAP fallback.",
  },
  {
    q: "Is my data safe?",
    a: "SOC 2 Type II, GDPR compliant, EU data residency available. Your data is never used to train general models.",
  },
];

export default function FAQSection() {
  return (
    <section className="mx-auto max-w-3xl px-4 md:px-8 py-20 border-t border-outline-variant">
      <Reveal className="text-center mb-10">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider">FAQ</p>
        <h2 className="font-headline text-3xl md:text-5xl font-bold mt-3">
          Questions you probably have.
        </h2>
      </Reveal>
      <FAQ items={items} />
    </section>
  );
}
