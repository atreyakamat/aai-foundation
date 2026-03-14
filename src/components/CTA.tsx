"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Mail 
} from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="cta" className="py-28 px-[5%] bg-[#000b1d] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[900px] mx-auto text-center bg-gradient-to-br from-blue/20 to-navy/40 backdrop-blur-xl border border-white/10 rounded-[40px] p-12 md:p-20 relative overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full -ml-32 -mb-32 blur-3xl" />
        
        <div className="relative z-10">
          <div className="w-20 h-20 rounded-[24px] bg-white/10 border border-white/20 text-white flex items-center justify-center mx-auto mb-8 shadow-2xl backdrop-blur-md">
            <Mail size={32} className="text-blue-400" />
          </div>
          <h2 className="font-plus-jakarta text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-white leading-[1.1] mb-6">
            Ready to bring your<br/>idea to life?
          </h2>
          <p className="text-white/70 text-[1.1rem] leading-relaxed font-medium max-w-[580px] mx-auto mb-12">
            Whether you're an entrepreneur, a student, a volunteer, or a donor — there's a place for you in the AAI community. Join us in building a brighter future for Goa.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link href="mailto:hello@aai.org.in" className="bg-blue text-white px-10 py-4 rounded-full font-plus-jakarta font-bold text-[0.95rem] tracking-wide shadow-[0_10px_30px_rgba(11,128,190,0.3)] hover:bg-white hover:text-[#000b1d] hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2.5">
              <Mail size={20} /> Get in Touch
            </Link>
            <Link href="#programs" className="bg-white/5 border-2 border-white/20 text-white px-10 py-4 rounded-full font-plus-jakarta font-bold text-[0.95rem] tracking-wide hover:bg-white hover:text-[#000b1d] hover:border-white transition-all duration-300 inline-flex items-center gap-2.5">
              Explore Programs <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
