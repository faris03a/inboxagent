import FAQ from "@/components/FAQ";

const items = [
  {
    q: "What counts as a ticket?",
    a: "Any inbound customer message that starts or continues a conversation thread. Replies within the same thread don't count extra.",
  },
  {
    q: "What happens if I exceed my plan?",
    a: "We notify you at 80% and 100%. Overages are billed at the next-tier per-ticket rate. You can upgrade or downgrade at any time.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — 14 days, full access, no credit card required.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Monthly plans cancel instantly. Annual plans keep access through the paid period.",
  },
];

export default function PricingFAQ() {
  return (
    <section className="mx-auto max-w-3xl px-4 md:px-8 py-20 border-t border-outline-variant">
      <div className="text-center mb-10">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">Pricing FAQ</h2>
      </div>
      <FAQ items={items} />
    </section>
  );
}
