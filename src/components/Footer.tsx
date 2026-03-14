"use client";

import Image from "next/image";
import { MapPin, Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#000b1d] text-white border-t border-white/10 pt-16 pb-12 px-[5%] relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
      
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="AAI Logo" width={40} height={40} className="brightness-110" />
            <div className="font-plus-jakarta text-[1.1rem] font-extrabold tracking-tight">
              All About <span className="text-blue-400">Innovation</span>
            </div>
          </Link>
          <p className="text-white/40 text-[0.85rem] mt-4 flex items-center gap-2 font-medium">
            <MapPin size={16} className="text-blue-400/60" /> Goa, India &middot; Supporting Real Change
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 list-none items-center">
          <li><Link href="/about" className="text-white/50 text-[0.85rem] font-bold hover:text-white transition-colors">About</Link></li>
          <li><Link href="/programs" className="text-white/50 text-[0.85rem] font-bold hover:text-white transition-colors">Programs</Link></li>
          <li><Link href="/initiatives" className="text-white/50 text-[0.85rem] font-bold hover:text-white transition-colors">Initiatives</Link></li>
        </ul>

        <div className="text-white/30 text-[0.8rem] leading-relaxed md:text-right font-medium">
          &copy; {new Date().getFullYear()} AAI &ndash; All About Innovation Foundation<br/>
          <span className="flex items-center justify-start md:justify-end gap-1.5 mt-1.5">
            <Heart size={12} className="text-blue-400" /> Empowering communities through technology.
          </span>
        </div>
      </div>
    </footer>
  );
}
