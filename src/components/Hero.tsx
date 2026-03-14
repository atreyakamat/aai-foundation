"use client";

import { motion, Variants } from "framer-motion";
import { Compass, ArrowDown, Rocket } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-[5%] pt-36 pb-20 relative overflow-hidden bg-offwhite">
      <div className="hero-grid-bg"></div>
      
      {/* Background Shapes */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="hero-shape w-[640px] h-[640px] -top-[200px] -right-[140px] bg-[radial-gradient(circle,rgba(11,128,190,0.13),transparent_70%)]" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="hero-shape w-[380px] h-[380px] -bottom-[80px] -left-[100px] bg-[radial-gradient(circle,rgba(0,39,127,0.08),transparent_70%)]" 
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[820px]"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-skylight border border-blue/25 text-blue text-[0.78rem] font-semibold tracking-[0.08em] uppercase px-4 py-1.5 rounded-full mb-7">
          <span className="w-1.5 h-1.5 bg-blue rounded-full animate-pulse"></span>
          NGO &middot; Goa, India &middot; Supporting Local Change
        </motion.div>

        <motion.h1 variants={itemVariants} className="font-inter text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-navy">
          Ideas that<br/>
          <span className="text-blue">create real</span><br/>
          <span className="text-accent">impact.</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="mt-8 text-[1.125rem] text-muted max-w-[560px] leading-[1.65] font-normal tracking-tight">
          AAI &mdash; All About Innovation &mdash; backs passionate entrepreneurs, women leaders, and bold startups using modern technology to solve real community challenges across Goa.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-9 flex flex-wrap gap-2 items-center">
          {["More Ideas", "More Opportunities", "More Innovation", "Brighter Future"].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="bg-white border border-border px-4 py-1.5 rounded-lg text-[0.85rem] font-medium shadow-[0_1px_4px_rgba(0,39,127,0.06)] hover:border-blue hover:shadow-[0_2px_10px_rgba(11,128,190,0.15)] transition-all">
                {item}
              </div>
              {i < 3 && <span className="text-blue text-lg font-bold">=</span>}
            </div>
          ))}
          <span className="text-blue text-lg font-bold">=</span>
          <div className="bg-navy border border-navy px-4 py-1.5 rounded-lg text-[0.85rem] font-medium text-white shadow-[0_4px_14px_rgba(0,39,127,0.2)] flex items-center gap-2">
            AAI <Rocket size={14} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-11 flex flex-wrap gap-4">
          <Link href="#about" className="bg-navy text-white px-8 py-3.5 rounded-full font-inter font-bold text-[0.9rem] tracking-wide shadow-[0_6px_24px_rgba(0,39,127,0.25)] hover:bg-blue hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(11,128,190,0.35)] transition-all inline-flex items-center gap-2">
            <Compass size={18} /> Discover Our Mission
          </Link>
          <Link href="#initiatives" className="border-2 border-navy text-navy px-8 py-3.5 rounded-full font-inter font-bold text-[0.9rem] tracking-wide hover:bg-navy hover:text-white transition-all inline-flex items-center gap-2">
            <ArrowDown size={18} /> Our Projects
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
