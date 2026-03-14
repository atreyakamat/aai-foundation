"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[5%] py-4 bg-white/94 backdrop-blur-md border-b border-border shadow-[0_2px_20px_rgba(0,39,127,0.06)]">
      <Link href="/" className="flex items-center gap-3">
        <Image src="/logo.svg" alt="AAI Logo" width={42} height={42} />
        <div className="font-inter font-extrabold text-base text-navy leading-tight">
          All About<br/><span className="text-blue">Innovation</span>
        </div>
      </Link>
      <ul className="hidden md:flex gap-8 list-none">
        <li><Link href="#about" className="text-muted text-sm font-medium hover:text-navy transition-colors">About</Link></li>
        <li><Link href="#programs" className="text-muted text-sm font-medium hover:text-navy transition-colors">Programs</Link></li>
        <li><Link href="#techforward" className="text-muted text-sm font-medium hover:text-navy transition-colors">TechForward</Link></li>
        <li><Link href="#initiatives" className="text-muted text-sm font-medium hover:text-navy transition-colors">Initiatives</Link></li>
        <li><Link href="#governance" className="text-muted text-sm font-medium hover:text-navy transition-colors">Team</Link></li>
      </ul>
      <Link href="#cta" className="bg-navy text-white px-6 py-2.5 font-inter font-bold text-[0.85rem] rounded-full hover:bg-blue transition-all active:scale-95 tracking-wide">
        Get Involved &rarr;
      </Link>
    </nav>
  );
}
