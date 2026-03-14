"use client";

import Image from "next/image";
import { MapPin, Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#060f1e] text-white border-t border-blue/20 pt-14 pb-8 px-[5%]">
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between items-start gap-10">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="AAI Logo" width={38} height={38} />
            <div className="font-inter text-[1rem] font-extrabold">All About <span className="text-sky">Innovation</span> | AAI</div>
          </Link>
          <p className="text-white/30 text-[0.8rem] mt-3.5 flex items-center gap-1.5">
            <MapPin size={14} /> NGO &middot; Goa, India &middot; Supporting Ideas That Bring Change
          </p>
        </div>

        <ul className="flex gap-7 list-none items-center">
          <li><Link href="#about" className="text-white/40 text-[0.82rem] hover:text-white transition-colors">About</Link></li>
          <li><Link href="#programs" className="text-white/40 text-[0.82rem] hover:text-white transition-colors">Programs</Link></li>
          <li><Link href="#techforward" className="text-white/40 text-[0.82rem] hover:text-white transition-colors">TechForward</Link></li>
          <li><Link href="#initiatives" className="text-white/40 text-[0.82rem] hover:text-white transition-colors">Initiatives</Link></li>
          <li><Link href="#cta" className="text-white/40 text-[0.82rem] hover:text-white transition-colors">Contact</Link></li>
        </ul>

        <div className="text-white/22 text-[0.75rem] leading-[1.8]">
          &copy; {new Date().getFullYear()} AAI &ndash; All About Innovation<br/>
          <span className="flex items-center gap-1"><Heart size={10} className="text-blue" /> Empowering communities through innovation.</span>
        </div>
      </div>
    </footer>
  );
}
