import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import IndustryReadiness from "@/components/IndustryReadiness";
import TechForward from "@/components/TechForward";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Initiatives from "@/components/Initiatives";
import Governance from "@/components/Governance";
import Why from "@/components/Why";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-offwhite">
      <Navbar />
      <Hero />
      <Stats />
      <IndustryReadiness />
      <TechForward />
      <About />
      <Programs />
      <Initiatives />
      <Governance />
      <Why />
      <CTA />
      <Footer />
    </main>
  );
}
