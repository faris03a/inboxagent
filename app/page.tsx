import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/home/Hero";
import Problem from "@/components/sections/home/Problem";
import Solution from "@/components/sections/home/Solution";
import HowItWorks from "@/components/sections/home/HowItWorks";
import Intents from "@/components/sections/home/Intents";
import Trust from "@/components/sections/home/Trust";
import Presets from "@/components/sections/home/Presets";
import ROI from "@/components/sections/home/ROI";
import Pricing from "@/components/sections/home/Pricing";
import FAQSection from "@/components/sections/home/FAQSection";
import FinalCTA from "@/components/sections/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Nav activePage="home" />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Intents />
        <Trust />
        <Presets />
        <ROI />
        <Pricing />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
