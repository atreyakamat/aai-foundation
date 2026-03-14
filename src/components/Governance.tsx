"use client";

import { motion } from "framer-motion";

const team = [
  { name: "Resha Rajesh Sangelkar", role: "President", initial: "RS" },
  { name: "Mrinal Ramnath Sangelkar", role: "Secretary", initial: "MS" },
  { name: "Shanisha Naik", role: "Treasurer", initial: "SN" },
  { name: "Ramakant Shankar Samant", role: "Member", initial: "RS" },
  { name: "Mohit Ramnath Sangelkar", role: "Member", initial: "MR" },
];

export default function Governance() {
  return (
    <section id="governance" className="py-24 px-[5%] bg-[#000b1d] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="mb-14 text-center">
          <div className="flex items-center justify-center gap-2 text-blue-400 text-[0.72rem] font-bold tracking-[0.14em] uppercase mb-3">
            <div className="w-5.5 h-[2px] bg-blue-400 rounded-full" />
            Our Team
          </div>
          <h2 className="font-plus-jakarta text-[clamp(1.8rem,3.5vw,2.7rem)] font-extrabold leading-tight tracking-tight text-white">
            Governing Body
          </h2>
          <p className="mt-4 text-white/70 max-w-[560px] mx-auto leading-relaxed font-medium">
            AAI is managed by a dedicated Managing Committee of governing members, committed to driving social welfare and innovation in Goa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.2)" }}
              className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 text-center transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue/40 to-navy/60 border border-white/10 flex items-center justify-center text-white font-plus-jakarta font-extrabold text-xl mx-auto mb-6 shadow-xl">
                {member.initial}
              </div>
              <h3 className="font-plus-jakarta font-bold text-white text-[1rem] mb-2 leading-tight">{member.name}</h3>
              <div className="inline-block bg-blue/20 text-blue-400 text-[0.65rem] font-bold uppercase tracking-[0.12em] px-4 py-1.5 rounded-full border border-blue-400/20">
                {member.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
