import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenResume?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative w-full py-4 sm:py-8 px-2.5 sm:px-6 md:px-8 flex flex-col justify-center min-h-[90vh]">
      {/* Editorial Light Container Card */}
      <div className="relative w-full max-w-7xl mx-auto bg-[#eae8e3] rounded-[1.8rem] sm:rounded-[2.5rem] p-5 sm:p-10 md:p-14 lg:p-16 overflow-hidden shadow-2xl border border-black/5 flex flex-col justify-between min-h-[82vh] sm:min-h-[85vh] lg:min-h-[88vh]">

        {/* Static Background Ambient Glow */}
        <div className="absolute top-[10%] right-[15%] w-72 sm:w-96 h-72 sm:h-96 bg-amber-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-stone-300/40 rounded-full blur-3xl pointer-events-none" />

        {/* Top Tagline / Subtitle */}
        <div className="relative z-10 mb-4 sm:mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#111111] animate-pulse" />
            <p className="text-[0.65rem] sm:text-xs md:text-sm font-extrabold tracking-[0.18em] sm:tracking-[0.25em] text-[#111111] uppercase font-sans">
              DATA ANALYST &amp; DATA ENGINEER
            </p>
          </div>
        </div>

        {/* Standing Portrait Cutout - ANCHORED TO ENTIRE HERO CARD (BIG & PROMINENT COVERAGE) */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full max-w-[85vw] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-[72%] sm:h-[82%] lg:h-[92%] z-30 pointer-events-none flex justify-center items-end">
          <img
            src="/hero_portrait.png?v=rembg100"
            alt="Suraj Gupta - Data Analyst & Data Engineer"
            className="h-full w-auto object-contain object-bottom filter drop-shadow-2xl brightness-[1.02] contrast-[1.02] scale-105 sm:scale-100 transform origin-bottom"
            style={{
              imageRendering: 'crisp-edges',
            }}
          />
        </div>

        {/* Display Headline - Positioned upper-card so TRANSFORMING is 100% unobstructed */}
        <div className="relative z-10 mt-2 sm:mt-4 mb-auto py-2 sm:py-4 flex flex-col justify-start items-start w-full">
          <div className="relative z-10 select-none w-full pointer-events-none">
            <h1 className="flex flex-col items-start w-full leading-[0.88] sm:leading-[0.84] text-[#0f0f0f] max-w-full">
              <span className="block font-display font-black text-[6.2vw] xs:text-[6.5vw] sm:text-[5.4vw] md:text-[5.6vw] lg:text-[5.6rem] xl:text-[6.8rem] tracking-tight uppercase text-[#0f0f0f] max-w-full">
                TRANSFORMING
              </span>
              <span className="block font-serif italic font-normal text-[7.4vw] xs:text-[7.8vw] sm:text-[6.4vw] md:text-[6.6vw] lg:text-[6.4rem] xl:text-[7.6rem] tracking-tight pl-2 sm:pl-8 md:pl-14 lg:pl-16 text-[#111111] max-w-full">
                DATA INTO
              </span>
              <span className="block font-display font-black text-[7.4vw] xs:text-[7.8vw] sm:text-[6.4vw] md:text-[6.6vw] lg:text-[6.6rem] xl:text-[7.8rem] tracking-tight uppercase text-[#0f0f0f] max-w-full">
                INSIGHTS.
              </span>
            </h1>
          </div>
        </div>

        {/* Bottom Bar: Scroll Indicator (Left) & Bio / CTA (Right) */}
        <div className="relative z-30 pt-4 sm:pt-8 mt-auto flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-6">
          {/* Bottom Left: Scroll to explore */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#111111] animate-ping" />
            <span className="text-[0.6rem] sm:text-xs font-extrabold tracking-[0.18em] sm:tracking-[0.25em] text-[#111111] uppercase">
              SCROLL TO EXPLORE
            </span>
          </div>

          {/* Bottom Right: Short Bio Paragraph & CTA Link */}
          <div className="flex flex-col items-start sm:items-end gap-3 sm:gap-5 text-left sm:text-right max-w-sm ml-auto">
            <p className="text-[0.7rem] sm:text-xs md:text-sm text-neutral-800 font-medium leading-relaxed font-sans">
              I transform complex datasets into actionable business analytics and build high-performance data engineering pipelines that create impact.
            </p>

            <a
              href="#projects"
              className="group flex items-center gap-2.5 sm:gap-3 text-[0.65rem] sm:text-xs font-extrabold uppercase tracking-widest text-[#111111] hover:text-black transition-all pointer-events-auto"
            >
              <span>EXPLORE MY WORK</span>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0f0f0f] group-hover:bg-black text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-md">
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

