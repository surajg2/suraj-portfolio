import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CodingProfilesSection: React.FC = () => {
  const { codingProfiles } = PORTFOLIO_DATA;

  return (
    <section id="profiles" className="relative w-full py-8 px-3 sm:px-6 md:px-8">
      {/* Editorial Light Container Card Matching Hero Card Theme */}
      <div className="relative w-full max-w-7xl mx-auto bg-[#eae8e3] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden shadow-2xl border border-black/5 flex flex-col gap-10">
        
        {/* Top Minimal Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-black/10 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
              <p className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#111111] uppercase font-sans">
                COMPETITIVE PROGRAMMING • ALGORITHMS
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0f0f0f] leading-none font-display">
              CODING <span className="font-serif italic font-normal text-[#111111]">PROFILES</span>
            </h2>
          </div>
          <p className="max-w-sm text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed font-sans sm:text-right">
            Algorithmic problem solving and data science challenge standings across competitive platforms.
          </p>
        </div>

        {/* Minimal Editorial Pill List */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {codingProfiles.map((profile) => (
            <a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/95 backdrop-blur-sm border border-black/10 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-black/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-4 group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <img
                  src={profile.icon}
                  alt={profile.platform}
                  className="w-7 h-7 object-contain rounded"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="w-7 h-7 rounded-full bg-[#f3f1ea] flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>

              <div>
                <h3 className="text-base font-black text-[#0f0f0f] tracking-tight font-sans">
                  {profile.platform}
                </h3>
                <p className="text-[0.65rem] font-extrabold uppercase tracking-widest text-neutral-500 font-sans">
                  @{profile.username}
                </p>
              </div>

              <div className="pt-2 border-t border-black/5">
                <span className="text-[0.65rem] font-mono font-bold text-neutral-800">
                  {profile.stats}
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
