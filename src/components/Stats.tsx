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
  { icon: GraduationCap, num: "100+", label: "Students Trained" },
  { icon: HandHeart, num: "50+", label: "Volunteers" },
  { icon: Users, num: "100+", label: "People Helped" },
];

export default function Stats() {
  return (
    <div id="stats" className="bg-navy py-12 px-[5%]">
      <div className="max-w-[1140px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="text-white/30 mb-2">
              <stat.icon size={18} />
            </div>
            <div className="font-inter text-4xl font-extrabold text-white leading-none">
              {stat.num}
            </div>
            <div className="text-[0.72rem] text-white/50 mt-1.5 uppercase tracking-widest">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
