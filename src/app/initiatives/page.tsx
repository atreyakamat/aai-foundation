import Navbar from "@/components/Navbar";
import Initiatives from "@/components/Initiatives";
import TechForward from "@/components/TechForward";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function InitiativesPage() {
  return (
    <main className="min-h-screen bg-[#000b1d] pt-24">
      <Navbar />
      <TechForward />
      <Initiatives />
      <CTA />
      <Footer />
    </main>
  );
}
