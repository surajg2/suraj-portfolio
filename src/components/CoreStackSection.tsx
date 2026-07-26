import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CoreStackSection: React.FC = () => {
  const { coreStack } = PORTFOLIO_DATA;

  return (
    <section id="stack" className="relative w-full py-8 px-3 sm:px-6 md:px-8">
      {/* Editorial Light Container Card Matching Hero Card */}
      <div className="relative w-full max-w-7xl mx-auto bg-[#eae8e3] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden shadow-2xl border border-black/5 flex flex-col gap-10">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-black/10 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
              <p className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#111111] uppercase font-sans">
                TECHNICAL ECOSYSTEM • STACK &amp; FRAMEWORKS
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0f0f0f] leading-none font-display">
              TECHNOLOGIES &amp; <br />
              <span className="font-serif italic font-normal text-[#111111]">ANALYTICAL TOOLKIT</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed font-sans md:text-right">
            Hand-crafted suite of database engines, ML frameworks, cloud services, and visualization tools powering my data analytics &amp; engineering workflows.
          </p>
        </div>

        {/* Reference-Styled Fluid Pill Cluster Layout */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3.5 pt-2 justify-start items-center">
          {coreStack.map((tech) => (
            <div
              key={tech.name}
              className="bg-white/95 backdrop-blur-sm border border-black/10 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full flex items-center gap-2.5 sm:gap-3 shadow-[0_2px_6px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-black/30 hover:-translate-y-0.5 transition-all duration-300 group cursor-default"
            >
              {/* Left Brand Icon */}
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-4 h-4 sm:w-5 sm:h-5 object-contain rounded shrink-0 transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />

              {/* Bold Technology Title */}
              <span className="text-xs sm:text-sm font-extrabold text-[#0f0f0f] font-sans tracking-tight group-hover:text-black">
                {tech.name}
              </span>

              {/* Right Category Label (Matching Reference Screenshot) */}
              <span className="text-[0.55rem] sm:text-[0.6rem] font-bold uppercase tracking-widest text-neutral-400 font-sans ml-0.5 group-hover:text-neutral-600 transition-colors">
                {tech.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
