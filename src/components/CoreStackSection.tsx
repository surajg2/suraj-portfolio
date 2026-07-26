import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CoreStackSection: React.FC = () => {
  const { coreStack } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = [
    'ALL',
    'Data Science',
    'AI/ML',
    'Database',
    'DevOps',
    'Frontend',
    'Tools'
  ];

  const filteredStack = activeCategory === 'ALL'
    ? coreStack
    : coreStack.filter(item => item.category === activeCategory);

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
            Curated set of frameworks, database engines, cloud services, and machine learning libraries powering my data analytics &amp; engineering pipelines.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-black text-white shadow-md scale-105'
                  : 'bg-white/80 text-neutral-800 hover:bg-black/10 border border-black/5'
              }`}
            >
              {cat === 'ALL' ? 'ALL TOOLS' : cat}
            </button>
          ))}
        </div>

        {/* Tech Stack Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 pt-2">
          {filteredStack.map((tech) => (
            <div
              key={tech.name}
              className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center gap-2.5 group"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="flex flex-col items-center">
                <span className="text-xs font-black text-[#0f0f0f] font-sans group-hover:text-black">
                  {tech.name}
                </span>
                <span className="text-[0.6rem] font-bold uppercase tracking-wider text-neutral-500 mt-0.5">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
