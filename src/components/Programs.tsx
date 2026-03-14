"use client";

import { motion } from "framer-motion";
import { 
  IndianRupee, 
  Users, 
  Venus, 
  BookOpen, 
  Handshake, 
  Network 
} from "lucide-react";

const programs = [
  {
    icon: IndianRupee,
    title: "Startup Funding",
    desc: "Direct financial backing for early-stage startups with viable social, economic or environmental business models creating community impact.",
    tags: ["Seed Funding", "Grants", "Impact Investing"]
  },
  {
    icon: Users,
    title: "Coaching & Mentorship",
    desc: "Access experienced mentors and coaches who guide entrepreneurs through the challenges of building a sustainable, impactful business.",
    tags: ["1-on-1 Coaching", "Mentorship", "Advisory"]
  },
  {
    icon: Venus,
    title: "Women Empowerment",
    desc: "Dedicated programs to train, upskill, and support women entrepreneurs in building businesses that strengthen community development.",
    tags: ["Training", "Networking", "SHG Integration"]
  },
  {
    icon: BookOpen,
    title: "Skilling & Upskilling",
    desc: "Partnered with SPARK+ Academia to run skilling and upskilling programs for students, job seekers, and community members.",
    tags: ["SPARK+ Academy", "Tech Skills", "Career Ready"]
  },
  {
    icon: Handshake,
    title: "Community Volunteering",
    desc: "Connecting volunteers with NGOs and causes across Goa — 60+ NGOs in the network and growing every month.",
    tags: ["60+ NGOs", "Volunteer Network", "Social Impact"]
  },
  {
    icon: Network,
    title: "Innovation Ecosystem",
    desc: "Building a connected ecosystem where ideas, resources, and people come together to solve local challenges through modern technology.",
    tags: ["Ecosystem", "Collaboration", "Innovation Labs"]
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 px-[5%] bg-offwhite">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-14">
          <div className="flex items-center gap-2 text-blue text-[0.72rem] font-bold tracking-[0.14em] uppercase mb-3">
            <div className="w-5.5 h-[2px] bg-blue rounded-full" />
            What We Offer
          </div>
          <h2 className="font-inter text-[clamp(1.8rem,3.5vw,2.7rem)] font-extrabold leading-tight tracking-tight text-navy">
            Programs built to<br/>grow & survive
          </h2>
          <p className="mt-4 text-muted max-w-[500px] leading-relaxed font-light">
            Tailored support across funding, mentorship, skilling and technology — for those ready to create lasting change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(11,128,190,0.3)", boxShadow: "0 12px 40px rgba(0,39,127,0.1)" }}
              className="group relative bg-white border border-border rounded-2xl p-8 overflow-hidden transition-all"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-navy to-blue opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-12 h-12 rounded-xl bg-skylight border border-blue/20 flex items-center justify-center text-blue mb-5 group-hover:scale-110 transition-transform">
                <prog.icon size={20} />
              </div>
              
              <h3 className="font-inter font-bold text-navy text-[1.05rem] mb-2.5">{prog.title}</h3>
              <p className="text-muted text-[0.88rem] leading-relaxed font-light mb-5">{prog.desc}</p>
              
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {prog.tags.map((tag, j) => (
                  <span key={j} className="bg-skylight border border-blue/20 text-blue text-[0.7rem] px-2.5 py-1 rounded-full font-semibold tracking-wide">
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
