import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Our Programs | AAI (All About Innovation)",
  description: "Discover AAI's support programs across funding, mentorship, skilling, and community development for sustainable impact.",
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-offwhite pt-24">
      <Navbar />
      <Programs />
      <CTA />
      <Footer />
    </main>
  );
}
