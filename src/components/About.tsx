"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { UserRound, Lightbulb, Rocket, Store } from "lucide-react";

export default function About() {
  const backItems = [
    { icon: UserRound, text: "Women entrepreneurs building a better, more equitable community" },
    { icon: Lightbulb, text: "Individual entrepreneurs creating positive local impact" },
    { icon: Rocket, text: "Startups creating jobs and opportunities in the community" },
    { icon: Store, text: "Small businesses building sustainable local livelihoods" },
  ];

  return (
    <section id="about" className="py-24 px-[5%] bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Visual Orbit Animation */}
          <div className="hidden lg:flex justify-center relative h-[360px]">
            <div className="relative w-[360px] h-[360px] flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-blue/20"
              />
              <div className="absolute inset-[40px] rounded-full border-[1.5px] border-border/30" />
              <div className="absolute inset-[65px] rounded-full bg-offwhite border border-border shadow-inner" />
              
              {/* Orbiting Dots */}
              {[
                { color: "bg-blue", delay: 0, shadow: "shadow-[0_0_15px_rgba(11,128,190,0.3)]" },
                { color: "bg-navy", delay: -2.3, shadow: "shadow-[0_0_15px_rgba(0,39,127,0.2)]" },
                { color: "bg-blue-400", delay: -4.6, shadow: "shadow-[0_0_15px_rgba(96,165,250,0.3)]" },
              ].map((dot, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: dot.delay }}
                  className="absolute w-full h-full"
                >
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full ${dot.color} ${dot.shadow}`} />
                </motion.div>
              ))}

              <div className="relative z-10 w-40 h-40 bg-white rounded-full border border-border shadow-xl flex items-center justify-center p-6">
                <Image src="/logo.svg" alt="AAI Logo" width={120} height={120} />
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 text-blue text-[0.72rem] font-bold tracking-[0.14em] uppercase mb-3">
              <div className="w-5.5 h-[2px] bg-blue rounded-full" />
              Who We Are
            </div>
            <h2 className="font-plus-jakarta text-[clamp(1.8rem,3.5vw,2.7rem)] font-extrabold leading-tight tracking-tight text-navy mb-6">
              Supporting ideas that bring real change
            </h2>
            <div className="space-y-5">
              <p className="text-muted leading-relaxed font-medium text-[1.05rem]">
                AAI provides support, coaching & funding to startups and small businesses pursuing social, economic, and environmental outcomes — with business models that create positive impact in the local Goan community.
              </p>
              <p className="text-muted/80 leading-relaxed font-normal">
                We back passionate entrepreneurs who leverage modern technology startup methodologies to address key challenges facing our community today.
              </p>
            </div>
            
            <div className="mt-10">
              <div className="font-plus-jakarta font-bold text-navy text-lg mb-5">We back:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {backItems.map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02, borderColor: "rgba(11,128,190,0.3)", backgroundColor: "white" }}
                    className="flex items-start gap-3.5 p-4 bg-offwhite border border-border rounded-2xl transition-all shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue/10 border border-blue/20 flex items-center justify-center shrink-0 text-blue">
                      <item.icon size={18} />
                    </div>
                    <p className="text-muted text-[0.85rem] leading-snug font-medium">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
