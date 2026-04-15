import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Steps from "@/components/sections/how/Steps";
import HowCTA from "@/components/sections/how/HowCTA";
import GradientBlob from "@/components/GradientBlob";

export const metadata: Metadata = {
  title: "How it works",
  description: "From connected inbox to auto-reply in five steps.",
  openGraph: {
    title: "How InboxAgent works",
    description: "Connect, teach, and go live in a day.",
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <Nav activePage="how-it-works" />
      <main>
        <section className="relative overflow-hidden">
          <GradientBlob className="-top-40 left-1/2 -translate-x-1/2" color="rgba(155,221,255,0.25)" size={600} />
          <div className="relative mx-auto max-w-4xl px-4 md:px-8 pt-24 md:pt-32 pb-10 text-center">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider">How it works</p>
            <h1 className="font-headline font-extrabold text-4xl md:text-6xl leading-tight text-glow mt-3">
              Five steps.
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
                One day.
              </span>
            </h1>
            <p className="mt-5 text-on-surface-variant text-lg max-w-xl mx-auto">
              No training courses. No six-figure consultants. Just OAuth, SOPs, and go.
            </p>
          </div>
        </section>
        <Steps />
        <HowCTA />
      </main>
      <Footer />
    </>
  );
}
