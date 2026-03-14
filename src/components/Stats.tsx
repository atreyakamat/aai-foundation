"use client";

import { motion } from "framer-motion";
import { 
  FolderKanban, 
  Venus, 
  Sprout, 
  GraduationCap, 
  HandHeart, 
  Users 
} from "lucide-react";

const stats = [
  { icon: FolderKanban, num: "10+", label: "Social Projects" },
  { icon: Venus, num: "50+", label: "Women Trained" },
  { icon: Sprout, num: "2+", label: "Startups Funded" },
  { icon: GraduationCap, num: "200+", label: "Professionals Trained" },
  { icon: HandHeart, num: "50+", label: "Volunteers" },
  { icon: Users, num: "100+", label: "People Helped" },
];

export default function Stats() {
  return (
    <div id="stats" className="bg-white py-16 px-[5%] border-y border-border/50">
      <div className="max-w-[1140px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center group hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="text-blue/30 mb-3 group-hover:text-blue transition-colors">
              <stat.icon size={20} />
            </div>
            <div className="font-plus-jakarta text-4xl font-extrabold text-navy leading-none tracking-tight">
              {stat.num}
            </div>
            <div className="text-[0.7rem] text-muted mt-2 uppercase tracking-[0.15em] font-bold">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
