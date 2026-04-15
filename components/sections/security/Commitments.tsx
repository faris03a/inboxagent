import SpotlightCard from "@/components/SpotlightCard";
import Reveal from "@/components/Reveal";

const commitments = [
  { icon: "verified_user", title: "SOC 2 Type II", body: "Audited annually. Report available under NDA." },
  { icon: "policy", title: "GDPR & CCPA", body: "Full data rights, DPA on request, EU residency available." },
  { icon: "lock", title: "Encryption at rest", body: "AES-256 at rest, TLS 1.3 in transit. Customer-managed keys on Scale." },
  { icon: "vpn_key", title: "SSO & SCIM", body: "Okta, Azure AD, Google Workspace. Provisioning via SCIM 2.0." },
  { icon: "history", title: "Audit logs", body: "Immutable audit log of every agent action, exportable to your SIEM." },
  { icon: "model_training", title: "No training on your data", body: "Your content never trains any general-purpose model. Ever." },
];

export default function Commitments() {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-8 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {commitments.map((c, i) => (
          <Reveal key={c.title} delay={(i % 3) * 80}>
            <SpotlightCard
              className="rounded-lg border border-outline-variant glass-card p-6 h-full"
            >
              <span className="material-symbols-outlined text-primary text-3xl">{c.icon}</span>
              <div className="font-headline font-bold mt-3">{c.title}</div>
              <div className="text-on-surface-variant text-sm mt-1">{c.body}</div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
