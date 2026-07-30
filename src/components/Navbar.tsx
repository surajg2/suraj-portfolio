import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('HOME');

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#stack' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'EXPERIENCE', href: '#profiles' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[3000] px-4 sm:px-8 py-5 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Stenciled Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2 text-lg sm:text-xl font-black tracking-tighter text-[#111111] bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-xl border border-black/10 shadow-sm hover:scale-105 transition-transform"
        >
          <span className="w-2 h-2 rounded-full bg-amber-500 group-hover:animate-ping" />
          <span className="font-display font-black tracking-tight text-[#0f0f0f]">SG</span>
          <span className="text-[0.6rem] font-mono font-bold tracking-widest text-neutral-400 uppercase hidden xs:inline border-l border-black/10 pl-2">
            DATA &amp; AI
          </span>
        </a>

        {/* Center Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 bg-white/80 backdrop-blur-md px-8 py-3 rounded-full border border-black/5 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveNav(link.name)}
              className={`relative text-[0.7rem] font-bold tracking-[0.2em] transition-colors ${
                activeNav === link.name ? 'text-[#111111]' : 'text-neutral-500 hover:text-[#111111]'
              }`}
            >
              {link.name}
              {activeNav === link.name && (
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#111111]" />
              )}
            </a>
          ))}
        </nav>

        {/* Right CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 bg-[#0f0f0f] hover:bg-black text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all shadow-md hover:shadow-lg hover:scale-[1.02]"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden bg-white/90 backdrop-blur-md p-2.5 rounded-full border border-black/10 text-neutral-800 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="md:hidden mt-3 bg-white/95 backdrop-blur-xl rounded-2xl p-6 border border-black/10 shadow-2xl flex flex-col gap-4 text-xs font-extrabold tracking-widest text-center text-neutral-900">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveNav(link.name);
                setIsOpen(false);
              }}
              className="py-2.5 hover:text-black border-b border-neutral-100 last:border-none"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 bg-black text-white py-3 rounded-xl text-xs font-bold"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};
