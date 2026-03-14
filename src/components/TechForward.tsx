"use client";

import { motion } from "framer-motion";
import { 
  Star, 
  Target, 
  Cpu, 
  Brain, 
  Globe, 
  Wrench, 
  GraduationCap, 
  School 
} from "lucide-react";

const offers = [
  { icon: Star, text: "Expert guest speakers & industry professionals" },
  { icon: Target, text: "Career guidance & motivation sessions beyond textbooks" },
  { icon: Cpu, text: "Technology & innovation talks for tomorrow's leaders" },
  { icon: Brain, text: "Personality development & life-skills workshops" },
  { icon: Globe, text: "Social awareness & responsibility programs" },
  { icon: Wrench, text: "Customized sessions based on each school's unique needs" },
];

export default function TechForward() {
  return (
    <section id="techforward" className="py-24 px-[5%] bg-white relative overflow-hidden">
      <div className="absolute right-[-50px] top-1/2 -translate-y-1/2 font-inter text-[13rem] font-extrabold leading-[0.85] text-navy/[0.04] pointer-events-none tracking-tighter hidden lg:block select-none">
        TECH<br/>FORWARD
      </div>
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-accentlt border border-accent/25 text-accent text-[0.75rem] font-bold uppercase tracking-[0.09em] px-3.5 py-1.5 rounded-full mb-4">
              <Star size={14} /> Featured Initiative
            </div>
            <div className="flex items-center gap-2 text-blue text-[0.72rem] font-bold tracking-[0.14em] uppercase mb-3">
              <div className="w-5.5 h-[2px] bg-blue rounded-full" />
              Education & Awareness
            </div>
            <h2 className="font-inter text-[clamp(1.8rem,3.5vw,2.7rem)] font-extrabold leading-tight tracking-tight text-navy">
              TechForward: Talks for Young Innovators
            </h2>
            <p className="mt-4 text-muted max-w-[500px] leading-relaxed font-light mb-8">
              Connecting schools with experienced speakers, professionals, and mentors who deliver impactful sessions — completely or partially sponsored by our partners and donors.
            </p>
            
            <div className="space-y-2.5">
              {offers.map((offer, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ borderColor: "rgba(11,128,190,0.3)", backgroundColor: "var(--skylight)" }}
                  className="flex items-start gap-3.5 p-3.5 bg-offwhite border border-border rounded-xl transition-all"
                >
                  <div className="w-7.5 h-7.5 rounded-lg bg-white border border-border flex items-center justify-center shrink-0 text-blue">
                    <offer.icon size={14} />
                  </div>
                  <p className="text-text text-[0.9rem] leading-snug">{offer.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-navy to-[#003fa3] rounded-[24px] p-12 text-center relative overflow-hidden shadow-[0_20px_60px_rgba(0,39,127,0.18)]"
          >
            {/* Visual Decoration */}
            <div className="absolute -top-[70px] -right-[70px] w-[220px] h-[220px] rounded-full bg-white/5" />
            <div className="absolute -bottom-[90px] -left-[50px] w-[260px] h-[260px] rounded-full bg-blue/12" />
            
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-[20px] bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6 text-white">
                <GraduationCap size={40} />
              </div>
              <h3 className="font-inter text-[1.6rem] font-extrabold text-white leading-tight mb-3">
                Inspire Students.<br/>Empower Futures.
              </h3>
              <p className="text-white/60 text-[0.9rem] leading-relaxed max-w-[320px] mx-auto mb-7">
                Quality knowledge made accessible to every student through sponsored sessions with industry leaders and experienced mentors.
              </p>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/85 text-[0.78rem] font-semibold px-5 py-2 rounded-full tracking-wide">
                <School size={16} /> Schools &middot; Colleges &middot; Institutions
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
