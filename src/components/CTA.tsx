"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Mail 
} from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="cta" className="py-28 px-[5%] bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[900px] mx-auto text-center bg-offwhite border border-border rounded-[40px] p-12 md:p-20 relative overflow-hidden shadow-sm"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue/5 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full -ml-32 -mb-32 blur-3xl" />
        
        <div className="relative z-10">
          <div className="w-20 h-20 rounded-[24px] bg-white border border-border text-blue flex items-center justify-center mx-auto mb-8 shadow-md">
            <Mail size={32} className="text-blue" />
          </div>
          <h2 className="font-plus-jakarta text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-navy leading-[1.1] mb-6">
            Ready to bring your<br/>idea to life?
          </h2>
          <p className="text-muted text-[1.1rem] leading-relaxed font-medium max-w-[580px] mx-auto mb-12">
            Whether you're an entrepreneur, a student, a volunteer, or a donor — there's a place for you in the AAI community. Join us in building a brighter future for Goa.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link href="mailto:hello@aai.org.in" className="bg-blue text-white px-10 py-4 rounded-full font-plus-jakarta font-bold text-[0.95rem] tracking-wide shadow-[0_10px_30px_rgba(11,128,190,0.2)] hover:bg-navy hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2.5">
              <Mail size={20} /> Get in Touch
            </Link>
            <Link href="#programs" className="bg-white border-2 border-border text-navy px-10 py-4 rounded-full font-plus-jakarta font-bold text-[0.95rem] tracking-wide hover:bg-navy hover:text-white hover:border-navy transition-all duration-300 inline-flex items-center gap-2.5">
              Explore Programs <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
