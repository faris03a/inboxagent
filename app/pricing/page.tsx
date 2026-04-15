import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Pricing from "@/components/sections/home/Pricing";
import PricingFAQ from "@/components/sections/pricing/PricingFAQ";
import GradientBlob from "@/components/GradientBlob";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Plans that scale with your ticket volume, not your headcount.",
  openGraph: {
    title: "InboxAgent Pricing",
    description: "Pay less than one VA. Handle ten times the volume.",
  },
};

export default function PricingPage() {
  return (
    <>
      <Nav activePage="pricing" />
      <main>
        <section className="relative overflow-hidden">
          <GradientBlob className="-top-40 -left-20" color="rgba(107,255,193,0.18)" size={500} />
          <GradientBlob className="-top-40 -right-20" color="rgba(155,221,255,0.25)" size={500} />
          <div className="relative mx-auto max-w-4xl px-4 md:px-8 pt-24 md:pt-32 pb-4 text-center">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider">Pricing</p>
            <h1 className="font-headline font-extrabold text-4xl md:text-6xl leading-tight text-glow mt-3">
              Simple.
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
                Scales with you.
              </span>
            </h1>
          </div>
        </section>
        <Pricing />
        <PricingFAQ />
      </main>
      <Footer />
    </>
  );
}
