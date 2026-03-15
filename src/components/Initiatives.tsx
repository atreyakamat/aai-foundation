"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  ShoppingBag, 
  Store, 
  Users
} from "lucide-react";

const initiatives = [
  {
    title: "Digital Baila",
    desc: "A social collaboration and networking platform digitally transforming Self-Help Groups (SHGs). Integrated with modern technologies for trust, transparency, and instant data insights, eliminating all manual paper processes.",
    icon: Globe,
    color: "from-[#0b80be] to-[#3da8e0]",
    bgColor: "bg-[#e8f4fb]",
    iconColor: "text-[#0b80be]",
    borderColor: "border-[#0b80be]/20",
    tags: ["SHG Platform", "Digital Transformation", "Automation"]
  },
  {
    title: "Women's Marketplace",
    desc: "A dedicated e-commerce marketplace (part of Digital Baila Phase 2) built exclusively for women entrepreneurs to promote and grow their businesses.",
    icon: ShoppingBag,
    color: "from-[#e07b00] to-[#f5b942]",
    bgColor: "bg-[#fff4e0]",
    iconColor: "text-[#e07b00]",
    borderColor: "border-[#e07b00]/20",
    tags: ["E-commerce", "Women-First", "Phase 2"]
  },
  {
    title: "Global Collaboration Marketplace",
    desc: "A worldwide online marketplace that allows creators to sell arts, crafts, and products globally with full e-commerce features including global payment and shipping.",
    icon: Store,
    color: "from-[#00a859] to-[#34d68b]",
    bgColor: "bg-[#e6f9f0]",
    iconColor: "text-[#00a859]",
    borderColor: "border-[#00a859]/20",
    tags: ["Business", "Arts & Crafts", "Global Reach"]
  },
  {
    title: "NGO Collaboration Platform",
    desc: "A global social platform for non-profit organizations to bring the community and volunteers together, connecting volunteers across organizations worldwide.",
    icon: Users,
    color: "from-[#7c3aed] to-[#a78bfa]",
    bgColor: "bg-[#f3eeff]",
    iconColor: "text-[#7c3aed]",
    borderColor: "border-[#7c3aed]/20",
    tags: ["60+ NGOs", "Volunteers", "Community"]
  }
];

export default function Initiatives() {
  return (
    <section id="initiatives" className="py-24 px-[5%] bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="mb-14">
          <div className="flex items-center gap-2 text-blue text-[0.72rem] font-bold tracking-[0.14em] uppercase mb-3">
            <div className="w-5.5 h-[2px] bg-blue rounded-full" />
            Social Initiatives
          </div>
          <h2 className="font-plus-jakarta text-[clamp(1.8rem,3.5vw,2.7rem)] font-extrabold leading-tight tracking-tight text-navy">
            Projects that power<br/>global change
          </h2>
          <p className="mt-4 text-muted max-w-[500px] leading-relaxed font-medium">
            Real platforms and products solving real problems for communities, women entrepreneurs, and small businesses worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {initiatives.map((init, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                opacity: { duration: 0.5, delay: i * 0.1 },
                scale: { duration: 0.5, delay: i * 0.1 }
              }}
              whileHover={{ 
                y: -4, 
                backgroundColor: "white", 
                borderColor: "rgba(0,39,127,0.1)",
                transition: { duration: 0.2, delay: 0 } 
              }}
              className="group relative bg-offwhite border border-border rounded-2xl p-10 transition-all duration-300 overflow-hidden shadow-sm"
            >
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${init.color} opacity-40`} />
              
              <div className={`w-[52px] h-[52px] rounded-[16px] flex items-center justify-center text-lg mb-6 bg-white border border-border shadow-md ${init.iconColor}`}>
                <init.icon size={24} />
              </div>
              
              <h3 className="font-plus-jakarta font-bold text-navy text-[1.25rem] mb-4">{init.title}</h3>
              <p className="text-muted text-[0.95rem] leading-relaxed font-normal mb-8">{init.desc}</p>
              
              <div className="flex flex-wrap gap-2.5">
                {init.tags.map((tag, j) => (
                  <span key={j} className={`bg-white border border-border/50 ${init.iconColor} text-[0.7rem] px-3.5 py-1.5 rounded-full font-bold tracking-wider uppercase`}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
