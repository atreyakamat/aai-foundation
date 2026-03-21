"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav aria-label="Main Navigation" className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[5%] py-4 bg-white/70 backdrop-blur-md border-b border-border/50">
      <Link href="/" className="flex items-center gap-3">
        <Logo width={42} height={42} />
        <div className="font-plus-jakarta font-extrabold text-base text-navy leading-tight">
          All About<br/><span className="text-blue">Innovation</span>
        </div>
      </Link>
      <ul className="hidden md:flex gap-8 list-none">
        <li><Link href="/#about" className="text-muted text-sm font-medium hover:text-navy transition-colors">About</Link></li>
        <li><Link href="/#industry-readiness" className="text-muted text-sm font-medium hover:text-navy transition-colors">Industry</Link></li>
        <li><Link href="/#programs" className="text-muted text-sm font-medium hover:text-navy transition-colors">Programs</Link></li>
        <li><Link href="/#initiatives" className="text-muted text-sm font-medium hover:text-navy transition-colors">Initiatives</Link></li>
      </ul>
      <a href="mailto:hello@aaiimpact.org" className="hidden md:block text-muted hover:text-blue transition-colors font-bold text-[0.85rem] tracking-wide">
        hello@aaiimpact.org
      </a>    </nav>
  );
}
