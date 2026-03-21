import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About Us | AAI (All About Innovation)",
  description: "Learn more about AAI Foundation and our global mission to support positive change.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-offwhite pt-24">
      <Navbar />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
