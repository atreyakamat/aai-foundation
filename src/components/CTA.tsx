"use client";

import { motion } from "framer-motion";
import { 
  Mail 
} from "lucide-react";

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
            Get in Touch
          </h2>
          <p className="text-muted text-[1.1rem] leading-relaxed font-medium max-w-[580px] mx-auto mb-12">
            Whether you're an entrepreneur, a student, a volunteer, or a donor, there's a place for you in the AAI community. Join us in building a brighter future for Goa.
          </p>
          <div className="flex flex-col items-center gap-2">
            <a 
              href="mailto:aaingo@sparkplustech.com" 
              className="text-blue font-plus-jakarta font-bold text-[1.2rem] hover:text-navy transition-colors flex items-center gap-3"
            >
              <Mail size={24} />
              aaingo@sparkplustech.com
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
