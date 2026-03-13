import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Governance from "@/components/Governance";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

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
