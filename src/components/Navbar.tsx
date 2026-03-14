"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[5%] py-4 bg-[#000b1d]/80 backdrop-blur-md border-b border-white/10">
      <Link href="/" className="flex items-center gap-3">
        <Image src="/logo.svg" alt="AAI Logo" width={42} height={42} />
        <div className="font-plus-jakarta font-extrabold text-base text-white leading-tight">
          All About<br/><span className="text-blue">Innovation</span>
        </div>
      </Link>
      <ul className="hidden md:flex gap-8 list-none">
        <li><Link href="/#about" className="text-white/70 text-sm font-medium hover:text-white transition-colors">About</Link></li>
        <li><Link href="/#industry-readiness" className="text-white/70 text-sm font-medium hover:text-white transition-colors">Industry</Link></li>
        <li><Link href="/#programs" className="text-white/70 text-sm font-medium hover:text-white transition-colors">Programs</Link></li>
        <li><Link href="/#initiatives" className="text-white/70 text-sm font-medium hover:text-white transition-colors">Initiatives</Link></li>
        <li><Link href="/#governance" className="text-white/70 text-sm font-medium hover:text-white transition-colors">Team</Link></li>
      </ul>
      <Link href="/#cta" className="bg-blue text-white px-6 py-2.5 font-plus-jakarta font-bold text-[0.85rem] rounded-full hover:bg-white hover:text-[#000b1d] transition-all active:scale-95 tracking-wide">
        Get Involved &rarr;
      </Link>
    </nav>
  );
}
