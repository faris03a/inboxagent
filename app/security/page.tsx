import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Commitments from "@/components/sections/security/Commitments";
import SecurityActions from "@/components/sections/security/SecurityActions";
import GradientBlob from "@/components/GradientBlob";

export const metadata: Metadata = {
  title: "Security",
  description: "SOC 2, GDPR, and enterprise-grade controls for your customer data.",
  openGraph: {
    title: "InboxAgent Security",
    description: "Enterprise security without the enterprise sales cycle.",
  },
};

export default function SecurityPage() {
  return (
    <>
      <Nav activePage="security" />
      <main>
        <section className="relative overflow-hidden">
          <GradientBlob
            className="-top-40 left-1/2 -translate-x-1/2"
            color="rgba(107,255,193,0.22)"
            size={600}
          />
          <div className="relative mx-auto max-w-4xl px-4 md:px-8 pt-24 md:pt-32 pb-10 text-center">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider">Security</p>
            <h1 className="font-headline font-extrabold text-4xl md:text-6xl leading-tight text-glow mt-3">
              Built for enterprises.
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
                Priced for founders.
              </span>
            </h1>
            <p className="mt-5 text-on-surface-variant text-lg max-w-xl mx-auto">
              SOC 2 Type II. GDPR. SSO. Audit logs. No data training. The works.
            </p>
          </div>
        </section>
        <Commitments />
        <SecurityActions />
      </main>
      <Footer />
    </>
  );
}
