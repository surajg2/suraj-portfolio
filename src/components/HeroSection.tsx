import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenResume?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative w-full py-6 sm:py-8 px-3 sm:px-6 md:px-8 flex flex-col justify-center min-h-[90vh]">
      {/* Editorial Light Container Card */}
      <div className="relative w-full max-w-7xl mx-auto bg-[#eae8e3] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden shadow-2xl border border-black/5 flex flex-col justify-between min-h-[85vh] lg:min-h-[88vh]">
        
        {/* Static Background Ambient Glow */}
        <div className="absolute top-[10%] right-[15%] w-96 h-96 bg-amber-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-300/40 rounded-full blur-3xl pointer-events-none" />

        {/* Top Tagline / Subtitle */}
        <div className="relative z-10 mb-6 sm:mb-10 flex items-center justify-between">
          <p className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#111111] uppercase font-sans">
            DATA ANALYST &amp; DATA ENGINEER
          </p>
        </div>

        {/* Central Display Headline & Razor Sharp Portrait Cutout Container */}
        <div className="relative z-10 my-auto py-4 sm:py-8 flex flex-col justify-center items-start w-full">
          
          {/* Central Standing Portrait Cutout (z-30 FOREGROUND LAYER - PERFECTLY PROPORTIONED FOR ALL DEVICES) */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full max-w-[75vw] xs:max-w-xs sm:max-w-md lg:max-w-xl h-[80%] xs:h-[92%] sm:h-[105%] lg:h-[110%] z-30 pointer-events-none flex justify-center items-end">
            <img
              src="/hero_portrait.png?v=rembg100"
              alt="Suraj Gupta - Data Analyst & Data Engineer"
              className="h-full w-auto object-contain object-bottom filter drop-shadow-2xl brightness-[1.02] contrast-[1.02]"
              style={{
                imageRendering: 'crisp-edges',
              }}
            />
          </div>

          {/* Massive Display Headline (z-10 BACKGROUND LAYER - BEHIND PORTRAIT) */}
          <div className="relative z-10 select-none w-full pointer-events-none">
            <h1 className="flex flex-col items-start w-full leading-[0.88] sm:leading-[0.85] text-[#0f0f0f] max-w-full">
              <span className="block font-display font-black text-[1.3rem] xs:text-[1.8rem] sm:text-[3.2rem] md:text-[4.6rem] lg:text-[6.0rem] xl:text-[7.2rem] tracking-tighter uppercase whitespace-nowrap text-[#0f0f0f]">
                TRANSFORMING
              </span>
              <span className="block font-serif italic font-normal text-[1.5rem] xs:text-[2.2rem] sm:text-[3.8rem] md:text-[5.2rem] lg:text-[6.8rem] xl:text-[8.0rem] tracking-tight pl-2 xs:pl-3 sm:pl-8 md:pl-14 lg:pl-20 text-[#111111] whitespace-nowrap">
                DATA INTO
              </span>
              <span className="block font-display font-black text-[1.5rem] xs:text-[2.2rem] sm:text-[3.8rem] md:text-[5.4rem] lg:text-[7.0rem] xl:text-[8.2rem] tracking-tighter uppercase whitespace-nowrap text-[#0f0f0f]">
                INSIGHTS.
              </span>
            </h1>
          </div>
        </div>

        {/* Bottom Bar: Scroll Indicator (Left) & Bio / CTA (Right) */}
        <div className="relative z-30 pt-8 mt-auto flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          {/* Bottom Left: Scroll to explore */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#111111] animate-ping" />
            <span className="text-[0.65rem] sm:text-xs font-extrabold tracking-[0.25em] text-[#111111] uppercase">
              SCROLL TO EXPLORE
            </span>
          </div>

          {/* Bottom Right: Short Bio Paragraph & CTA Link */}
          <div className="flex flex-col items-start sm:items-end gap-5 text-left sm:text-right max-w-sm ml-auto">
            <p className="text-xs sm:text-sm text-neutral-800 font-medium leading-relaxed font-sans">
              I transform complex datasets into actionable business analytics and build high-performance data engineering pipelines that create impact.
            </p>
            
            <a
              href="#projects"
              className="group flex items-center gap-3 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#111111] hover:text-black transition-all pointer-events-auto"
            >
              <span>EXPLORE MY WORK</span>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0f0f0f] group-hover:bg-black text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-md">
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

