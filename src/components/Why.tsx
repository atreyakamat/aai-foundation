"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  Wifi, 
  Leaf, 
  Bolt 
} from "lucide-react";

const whyCards = [
  { icon: Briefcase, num: "01", text: "Create community-level employment & opportunity" },
  { icon: Wifi, num: "02", text: "Bridge the digital divide for underserved groups" },
  { icon: Leaf, num: "03", text: "Drive social, economic & environmental progress" },
  { icon: Bolt, num: "04", text: "Empower the next generation of bold entrepreneurs" },
];

export default function Why() {
  return (
    <section id="why" className="py-24 px-[5%] bg-navy relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] rounded-full bg-blue/14 pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-60px] w-[350px] h-[350px] rounded-full bg-white/[0.03] pointer-events-none" />
      
      <div className="max-w-[1100px] mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-inter text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-white leading-tight max-w-[600px] mb-14"
        >
          Innovations are <span className="text-sky italic">essential</span> to grow & survive in tomorrow's world.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)", y: -4 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/[0.05] transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-white/[0.08] border border-white/[0.12] flex items-center justify-center text-sky mb-4">
                <card.icon size={18} />
              </div>
              <div className="font-inter text-[1.8rem] font-extrabold text-sky leading-none mb-2">
                {card.num}
              </div>
              <p className="text-white/55 text-[0.88rem] leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
