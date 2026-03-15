import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Governance from "@/components/Governance";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About Us | AAI (All About Innovation)",
  description: "Learn more about AAI Foundation, our mission to support positive change in Goa, and our dedicated governing committee.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-offwhite pt-24">
      <Navbar />
      <About />
      <Governance />
      <CTA />
      <Footer />
    </main>
  );
}
