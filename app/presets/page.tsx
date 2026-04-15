import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PresetGrid from "@/components/sections/presets/PresetGrid";
import CustomCTA from "@/components/sections/presets/CustomCTA";
import GradientBlob from "@/components/GradientBlob";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Presets",
  description: "Pre-built InboxAgent configurations for every industry.",
  openGraph: {
    title: "InboxAgent Presets",
    description: "Start from a template. Ship today.",
  },
};

export default function PresetsPage() {
  return (
    <>
      <Nav activePage="presets" />
      <main>
        <section className="relative overflow-hidden">
          <GradientBlob
            className="-top-40 left-1/2 -translate-x-1/2"
            color="rgba(255,175,211,0.25)"
            size={600}
          />
          <Reveal className="relative mx-auto max-w-4xl px-4 md:px-8 pt-24 md:pt-32 pb-10 text-center">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider">Presets</p>
            <h1 className="font-headline font-extrabold text-4xl md:text-6xl leading-tight text-glow mt-3">
              Turn-key agents.
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
                Zero blank page.
              </span>
            </h1>
            <p className="mt-5 text-on-surface-variant text-lg max-w-xl mx-auto">
              Every preset ships with intents, policies, and integrations pre-wired.
            </p>
          </Reveal>
        </section>
        <PresetGrid />
        <CustomCTA />
      </main>
      <Footer />
    </>
  );
}
