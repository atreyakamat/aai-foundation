"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  ShoppingBag, 
  Store, 
  Users, 
  ArrowRight 
} from "lucide-react";
import Link from "next/link";

const initiatives = [
  {
    title: "Digital Baila",
    desc: "A social collaboration and networking platform digitally transforming Self-Help Groups (SHGs). Integrated with modern technologies for trust, transparency, and instant data insights — eliminating all manual paper processes.",
    icon: Globe,
    color: "from-[#0b80be] to-[#3da8e0]",
    bgColor: "bg-[#e8f4fb]",
    iconColor: "text-[#0b80be]",
    borderColor: "border-[#0b80be]/20",
    tags: ["SHG Platform", "Digital Transformation", "Automation"]
  },
  {
    title: "Women's Marketplace",
    desc: "A dedicated e-commerce marketplace — part of Digital Baila Phase 2 — built exclusively for women entrepreneurs to promote and grow their businesses locally and globally.",
    icon: ShoppingBag,
    color: "from-[#e07b00] to-[#f5b942]",
    bgColor: "bg-[#fff4e0]",
    iconColor: "text-[#e07b00]",
    borderColor: "border-[#e07b00]/20",
    tags: ["E-commerce", "Women-First", "Phase 2"]
  },
  {
    title: "Goa Local Marketplace",
    desc: "An online marketplace for Goans with creative talents — sell arts, crafts, products, and services locally and globally with full e-commerce features including payment and shipping.",
    icon: Store,
    color: "from-[#00a859] to-[#34d68b]",
    bgColor: "bg-[#e6f9f0]",
    iconColor: "text-[#00a859]",
    borderColor: "border-[#00a859]/20",
    tags: ["Local Business", "Arts & Crafts", "Global Reach"]
  },
  {
    title: "NGO Collaboration Platform",
    desc: "A social platform for non-profit organizations to bring the local community and volunteers together for good causes. With 60+ NGOs in Goa, volunteers can register and collaborate across organizations.",
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
    <section id="initiatives" className="py-24 px-[5%] bg-offwhite">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-14">
          <div className="flex items-center gap-2 text-blue text-[0.72rem] font-bold tracking-[0.14em] uppercase mb-3">
            <div className="w-5.5 h-[2px] bg-blue rounded-full" />
            Social Initiatives
          </div>
          <h2 className="font-inter text-[clamp(1.8rem,3.5vw,2.7rem)] font-extrabold leading-tight tracking-tight text-navy">
            Projects that power<br/>community change
          </h2>
          <p className="mt-4 text-muted max-w-[500px] leading-relaxed font-light">
            Real platforms and products solving real problems for communities, women entrepreneurs, and small businesses in Goa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {initiatives.map((init, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 14px 44px rgba(0,39,127,0.1)" }}
              className="group relative bg-white border border-border rounded-2xl p-10 transition-all overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${init.color}`} />
              
              <div className={`w-[50px] h-[50px] rounded-[14px] flex items-center justify-center text-lg mb-5 ${init.bgColor} border ${init.borderColor} ${init.iconColor}`}>
                <init.icon size={22} />
              </div>
              
              <h3 className="font-inter font-bold text-navy text-[1.15rem] mb-3">{init.title}</h3>
              <p className="text-muted text-[0.92rem] leading-relaxed font-light mb-6">{init.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {init.tags.map((tag, j) => (
                  <span key={j} className={`${init.bgColor} border ${init.borderColor} ${init.iconColor} text-[0.72rem] px-3 py-1 rounded-full font-semibold tracking-wide`}>
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link href="#" className="inline-flex items-center gap-2 text-blue text-[0.85rem] font-bold group/link hover:gap-3 transition-all">
                Learn more <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
