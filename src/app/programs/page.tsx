import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#000b1d] pt-24">
      <Navbar />
      <Programs />
      <CTA />
      <Footer />
    </main>
  );
}
