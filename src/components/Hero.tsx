"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import dynamic from "next/dynamic";
import Logo from "./Logo";

const Particles = dynamic(() => import("./ui/particles").then((mod) => mod.Particles), {
  ssr: false,
});

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="min-h-screen flex flex-col justify-center px-[5%] pt-36 pb-20 relative overflow-hidden bg-offwhite"
    >
      {/* Magic UI Particles Background */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={80}
        ease={80}
        color="#0b80be"
        refresh
      />

      <div className="hero-grid-bg opacity-20"></div>
      
      {/* Background Shapes */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="hero-shape w-[640px] h-[640px] -top-[200px] -right-[140px] bg-[radial-gradient(circle,rgba(11,128,190,0.1),transparent_70%)]" 
      />
      
      {/* Visual Component (Right Side) - Logo based */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[45%] h-[600px] hidden lg:flex items-center justify-center z-10 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full max-w-[450px]"
        >
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue/10 rounded-full blur-3xl scale-125"></div>
              <Logo width={300} height={300} className="relative z-10 opacity-80" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-[850px]"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-blue/10 border border-blue/20 text-blue text-[0.8rem] font-bold tracking-[0.08em] uppercase px-5 py-2 rounded-full mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-blue rounded-full animate-pulse"></span>
          NGO &middot; Goa, India &middot; Supporting Positive Change
        </motion.div>

        <motion.h1 
          variants={itemVariants} 
          className="font-plus-jakarta text-[clamp(3.5rem,7vw,6.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-navy mb-2"
        >
          Ideas that<br/>
          <span className="text-blue">create real</span><br/>
          <span className="text-accent">impact.</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="mt-10 text-[1.15rem] text-muted max-w-[580px] leading-[1.7] font-medium tracking-tight">
          AAI (All About Innovation) backs passionate entrepreneurs, women leaders, and bold startups using modern technology to solve real community challenges across Goa.
        </motion.p>
      </motion.div>
    </section>
  );
}
