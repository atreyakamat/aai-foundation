import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Initiatives from "@/components/Initiatives";
import TechForward from "@/components/TechForward";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Social Initiatives | AAI (All About Innovation)",
  description: "Explore AAI's global social initiatives including Digital Baila, TechForward, and community marketplaces driving innovation worldwide.",
};

export default function InitiativesPage() {
  return (
    <main className="min-h-screen bg-offwhite pt-24">
      <Navbar />
      <TechForward />
      <Initiatives />
      <CTA />
      <Footer />
    </main>
  );
}
