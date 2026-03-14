"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  BookOpen, 
  Award, 
  Users, 
  Lightbulb, 
  Rocket,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { TextCursorProximity } from "./ui/TextCursorProximity";

const features = [
  { icon: BookOpen, title: "Industry Skills", desc: "Digital literacy, technology, and entrepreneurship." },
  { icon: Award, title: "Certifications", desc: "Earn industry-recognized credentials upon completion." },
  { icon: Lightbulb, title: "Project Based", desc: "Hands-on learning through real-world applications." },
  { icon: Briefcase, title: "Career Support", desc: "Resume building, interviews, and placement guidance." },
];

export default function IndustryReadiness() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={containerRef}
      id="industry-readiness" 
      className="py-24 px-[5%] bg-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue/10 border border-blue/20 text-blue text-[0.75rem] font-bold uppercase tracking-[0.09em] px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Rocket size={14} /> In Partnership with SPARK+ Academia
            </div>
            
            <h2 className="font-plus-jakarta text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.1] tracking-tight text-navy mb-6">
              <TextCursorProximity
                containerRef={containerRef}
                radius={150}
                falloff="exponential"
                styles={{
                  color: { from: "var(--color-navy)", to: "var(--color-blue)" },
                  scale: { from: 1, to: 1.05 }
                }}
              >
                Industry Readiness
              </TextCursorProximity>
              <br />
              <TextCursorProximity
                containerRef={containerRef}
                radius={150}
                falloff="exponential"
                styles={{
                  color: { from: "var(--color-navy)", to: "var(--color-blue)" },
                  scale: { from: 1, to: 1.05 }
                }}
              >
                Program
              </TextCursorProximity>
            </h2>
            
            <p className="text-muted max-w-[540px] leading-relaxed font-normal mb-10 text-[1.1rem]">
              Equipping students, job seekers, and professionals with practical, industry-relevant skills to thrive in today's competitive workforce. Bridging the gap between education and employment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-offwhite border border-border flex items-center justify-center shrink-0 text-blue">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-navy font-bold text-[1rem] mb-1">{feature.title}</h4>
                    <p className="text-muted text-[0.85rem] leading-snug">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-offwhite border border-border rounded-[40px] p-10 relative overflow-hidden shadow-sm">
              <div className="flex items-center justify-between mb-10">
                <div className="w-16 h-16 rounded-2xl bg-blue/10 flex items-center justify-center text-blue">
                  <Users size={32} />
                </div>
                <div className="text-right">
                  <p className="text-blue text-3xl font-black">200+</p>
                  <p className="text-muted text-xs font-bold uppercase tracking-wider">Trained Professionals</p>
                </div>
              </div>

              <div className="space-y-6 pb-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-border/50">
                  <CheckCircle2 className="text-green-600 shrink-0" size={20} />
                  <p className="text-navy/80 text-sm font-medium">Industry-recognized certifications</p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-border/50">
                  <CheckCircle2 className="text-green-600 shrink-0" size={20} />
                  <p className="text-navy/80 text-sm font-medium">Hands-on, project-based learning</p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-border/50">
                  <CheckCircle2 className="text-green-600 shrink-0" size={20} />
                  <p className="text-navy/80 text-sm font-medium">Soft skills & entrepreneurship</p>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-blue/10 rounded-full blur-2xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
