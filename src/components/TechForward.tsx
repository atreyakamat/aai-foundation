"use client";

import { useRef } from "react";
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
import { TextCursorProximity } from "./ui/TextCursorProximity";

const offers = [
  { icon: Star, text: "Expert guest speakers & industry professionals" },
  { icon: Target, text: "Career guidance & motivation sessions beyond textbooks" },
  { icon: Cpu, text: "Technology & innovation talks for tomorrow's leaders" },
  { icon: Brain, text: "Personality development & life-skills workshops" },
  { icon: Globe, text: "Social awareness & responsibility programs" },
  { icon: Wrench, text: "Customized sessions based on each school's unique needs" },
];

export default function TechForward() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={containerRef}
      id="techforward" 
      className="py-24 px-[5%] bg-offwhite relative overflow-hidden"
    >
      <div className="absolute left-[-50px] top-1/2 -translate-y-1/2 font-plus-jakarta text-[13rem] font-extrabold leading-[0.85] text-navy/[0.03] pointer-events-none tracking-tighter hidden lg:block select-none">
        TECH<br/>FORWARD
      </div>
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-[0.75rem] font-bold uppercase tracking-[0.09em] px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Star size={14} /> Featured Initiative
            </div>
            <div className="flex items-center gap-2 text-blue text-[0.72rem] font-bold tracking-[0.14em] uppercase mb-4">
              <div className="w-5.5 h-[2px] bg-blue rounded-full" />
              Education & Awareness
            </div>
            <h2 className="font-plus-jakarta text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.1] tracking-tight text-navy mb-6">
              <TextCursorProximity
                containerRef={containerRef}
                radius={150}
                falloff="exponential"
                styles={{
                  color: { from: "var(--color-navy)", to: "var(--color-blue)" },
                  scale: { from: 1, to: 1.05 }
                }}
              >
                TechForward: Talks for Young Innovators
              </TextCursorProximity>
            </h2>
            <p className="text-muted max-w-[500px] leading-relaxed font-normal mb-10 text-[1.1rem]">
              Connecting schools with experienced speakers, professionals, and mentors who deliver impactful sessions completely or partially sponsored by our partners and donors.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {offers.map((offer, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ borderColor: "rgba(11,128,190,0.3)", backgroundColor: "white" }}
                  className="flex items-start gap-3.5 p-4 bg-white border border-border rounded-2xl transition-all shadow-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue/10 border border-blue/20 flex items-center justify-center shrink-0 text-blue">
                    <offer.icon size={16} />
                  </div>
                  <p className="text-muted text-[0.85rem] leading-snug">{offer.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-border rounded-[32px] p-12 text-center relative overflow-hidden shadow-md"
          >
            {/* Visual Decoration */}
            <div className="absolute -top-[70px] -right-[70px] w-[220px] h-[220px] rounded-full bg-blue/5" />
            <div className="absolute -bottom-[90px] -left-[50px] w-[260px] h-[260px] rounded-full bg-accent/5" />
            
            <div className="relative z-10">
              <div className="w-24 h-24 rounded-[28px] bg-offwhite border border-border flex items-center justify-center mx-auto mb-8 text-blue shadow-sm">
                <GraduationCap size={48} />
              </div>
              <h3 className="font-plus-jakarta text-[1.8rem] font-extrabold text-navy leading-tight mb-4">
                Inspire Students.<br/>Empower Futures.
              </h3>
              <p className="text-muted text-[1rem] leading-relaxed max-w-[340px] mx-auto mb-10">
                Quality knowledge made accessible to every student through sponsored sessions with industry leaders and experienced mentors.
              </p>
              <div className="inline-flex items-center gap-3 bg-offwhite border border-border text-navy/80 text-[0.85rem] font-semibold px-6 py-3 rounded-full tracking-wide">
                <School size={18} className="text-blue" /> Schools &middot; Colleges &middot; Institutions
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
