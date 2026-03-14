"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { Compass, ArrowDown, Rocket, TrendingUp, Users, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Particles } from "./ui/particles";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

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
    <section 
      ref={containerRef}
      id="hero" 
      className="min-h-screen flex flex-col justify-center px-[5%] pt-36 pb-20 relative overflow-hidden bg-[#000b1d]"
    >
      {/* Magic UI Particles Background */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={120}
        ease={80}
        color="#ffffff"
        refresh
      />

      <div className="hero-grid-bg opacity-10"></div>
      
      {/* Background Shapes */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="hero-shape w-[640px] h-[640px] -top-[200px] -right-[140px] bg-[radial-gradient(circle,rgba(11,128,190,0.15),transparent_70%)]" 
      />
      
      {/* Professional Success Dashboard (Right Side) */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[45%] h-[600px] hidden lg:flex items-center justify-center z-10 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full max-w-[500px]"
        >
          {/* Main Success Card - Glassmorphism style */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white/5 backdrop-blur-xl rounded-[32px] shadow-[0_32px_80px_rgba(0,0,0,0.4)] border border-white/10 p-8 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue/20 rounded-xl flex items-center justify-center border border-blue/30">
                  <TrendingUp className="text-blue" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg leading-tight">Innovation Index</h4>
                  <p className="text-white/50 text-xs font-medium">Monthly Impact Report</p>
                </div>
              </div>
              <div className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                +12.5% <TrendingUp size={12} />
              </div>
            </div>

            {/* Simple Visual Chart */}
            <div className="h-32 flex items-end gap-2 mb-8 px-2">
              {[40, 70, 55, 90, 65, 80, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                  className="flex-1 bg-gradient-to-t from-blue/10 to-blue/60 rounded-t-md relative group border-t border-x border-white/5"
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {h}%
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-1">Active Projects</p>
                <p className="text-white text-xl font-black">240+</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-1">Funding Raised</p>
                <p className="text-white text-xl font-black">₹8.4M</p>
              </div>
            </div>

            {/* Decorative Overlay */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue/10 to-transparent pointer-events-none" />
          </motion.div>

          {/* Floating Mini Card 1: Users */}
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -left-12 bg-[#0a192f] rounded-2xl shadow-2xl border border-white/10 p-4 flex items-center gap-3 z-20"
          >
            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center border border-accent/30">
              <Users className="text-accent" size={20} />
            </div>
            <div>
              <p className="text-white font-bold text-sm">1,200+</p>
              <p className="text-white/50 text-[10px] font-medium">Volunteers</p>
            </div>
          </motion.div>

          {/* Floating Mini Card 2: Success */}
          <motion.div
            animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -right-8 bg-blue rounded-2xl shadow-xl p-5 flex items-center gap-3 z-20 text-white border border-white/20"
          >
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="text-white" size={20} />
            </div>
            <div>
              <p className="font-bold text-sm">Verified</p>
              <p className="text-white/70 text-[10px] font-medium">Social Impact</p>
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
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-blue/10 border border-blue/30 text-blue-400 text-[0.8rem] font-bold tracking-[0.08em] uppercase px-5 py-2 rounded-full mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
          NGO &middot; Goa, India &middot; Supporting Local Change
        </motion.div>

        <motion.h1 
          variants={itemVariants} 
          className="font-plus-jakarta text-[clamp(3.5rem,7vw,6.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white mb-2"
        >
          Ideas that<br/>
          <span className="text-blue">create real</span><br/>
          <span className="text-accent">impact.</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="mt-10 text-[1.15rem] text-white/70 max-w-[580px] leading-[1.7] font-medium tracking-tight">
          AAI &mdash; All About Innovation &mdash; backs passionate entrepreneurs, women leaders, and bold startups using modern technology to solve real community challenges across Goa.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-12 flex flex-wrap gap-4">
          <Link href="#about" className="bg-blue text-white px-10 py-4 rounded-full font-plus-jakarta font-bold text-[0.95rem] tracking-wide shadow-[0_10px_30px_rgba(11,128,190,0.3)] hover:bg-white hover:text-navy hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(255,255,255,0.2)] transition-all duration-300 inline-flex items-center gap-2.5">
            <Compass size={20} /> Discover Our Mission
          </Link>
          <Link href="#initiatives" className="border-2 border-white/20 text-white px-10 py-4 rounded-full font-plus-jakarta font-bold text-[0.95rem] tracking-wide hover:bg-white hover:text-navy hover:border-white transition-all duration-300 inline-flex items-center gap-2.5">
            <ArrowDown size={20} /> Our Projects
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
