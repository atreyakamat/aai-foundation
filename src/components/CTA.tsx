"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Mail 
} from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="cta" className="py-28 px-[5%] bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[780px] mx-auto text-center bg-offwhite border border-border rounded-[28px] p-20 relative overflow-hidden shadow-[0_4px_40px_rgba(0,39,127,0.07)]"
      >
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-[50%] bg-[radial-gradient(ellipse,rgba(11,128,190,0.08),transparent_70%)] pointer-events-none" />
        
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-[18px] bg-navy text-white flex items-center justify-center text-[1.4rem] mx-auto mb-7 shadow-[0_8px_24px_rgba(0,39,127,0.25)]">
            <Mail size={24} />
          </div>
          <h2 className="font-inter text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold text-navy leading-tight mb-4">
            Ready to bring your idea to life?
          </h2>
          <p className="text-muted text-[0.98rem] leading-[1.75] font-light max-w-[500px] mx-auto mb-10">
            Whether you're an entrepreneur, a student, a volunteer, or a donor — there's a place for you in the AAI community. Join us in building a brighter future for Goa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="mailto:hello@aai.org.in" className="bg-accent text-white px-9 py-3.5 rounded-full font-inter font-extrabold text-[0.9rem] tracking-wide shadow-[0_6px_24px_rgba(224,123,0,0.28)] hover:bg-[#c86c00] hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(224,123,0,0.4)] transition-all inline-flex items-center gap-2">
              <Mail size={18} /> Get in Touch
            </Link>
            <Link href="#programs" className="border-2 border-navy text-navy px-9 py-3.5 rounded-full font-inter font-extrabold text-[0.9rem] tracking-wide hover:bg-navy hover:text-white transition-all inline-flex items-center gap-2">
              Explore Programs <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
