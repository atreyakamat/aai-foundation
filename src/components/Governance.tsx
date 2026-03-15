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
    <section id="governance" className="py-24 px-[5%] bg-offwhite relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="mb-14 text-center">
          <div className="flex items-center justify-center gap-2 text-blue text-[0.72rem] font-bold tracking-[0.14em] uppercase mb-3">
            <div className="w-5.5 h-[2px] bg-blue rounded-full" />
            Our Team
          </div>
          <h2 className="font-plus-jakarta text-[clamp(1.8rem,3.5vw,2.7rem)] font-extrabold leading-tight tracking-tight text-navy">
            Governing Body
          </h2>
          <p className="mt-4 text-muted max-w-[560px] mx-auto leading-relaxed font-medium">
            AAI is managed by a dedicated Managing Committee of governing members, committed to driving social welfare and innovation globally.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                opacity: { duration: 0.3, delay: i * 0.02 },
                y: { duration: 0.3, delay: i * 0.02 }
              }}
              whileHover={{ 
                y: -5, 
                backgroundColor: "white", 
                borderColor: "rgba(0,39,127,0.1)",
                transition: { duration: 0.2, delay: 0 } 
              }}
              className="bg-white border border-border rounded-2xl p-8 text-center transition-all duration-300 shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue to-navy border border-white/20 flex items-center justify-center text-white font-plus-jakarta font-extrabold text-xl mx-auto mb-6 shadow-md">
                {member.initial}
              </div>
              <h3 className="font-plus-jakarta font-bold text-navy text-[1rem] mb-2 leading-tight">{member.name}</h3>
              <div className="inline-block bg-blue/10 text-blue text-[0.65rem] font-bold uppercase tracking-[0.12em] px-4 py-1.5 rounded-full border border-blue/20">
                {member.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
