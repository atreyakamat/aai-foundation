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
    <section id="governance" className="py-24 px-[5%] bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-14 text-center">
          <div className="flex items-center justify-center gap-2 text-blue text-[0.72rem] font-bold tracking-[0.14em] uppercase mb-3">
            <div className="w-5.5 h-[2px] bg-blue rounded-full" />
            Our Team
          </div>
          <h2 className="font-inter text-[clamp(1.8rem,3.5vw,2.7rem)] font-extrabold leading-tight tracking-tight text-navy">
            Governing Body
          </h2>
          <p className="mt-4 text-muted max-w-[560px] mx-auto leading-relaxed font-light">
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
              whileHover={{ y: -5, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
              className="bg-white border border-border rounded-2xl p-8 text-center transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue to-navy flex items-center justify-center text-white font-inter font-extrabold text-xl mx-auto mb-5">
                {member.initial}
              </div>
              <h3 className="font-inter font-bold text-navy text-[0.95rem] mb-1.5">{member.name}</h3>
              <div className="inline-block bg-blue/10 text-blue text-[0.72rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                {member.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
