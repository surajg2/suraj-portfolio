import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CoreStackSection: React.FC = () => {
  const { coreStack } = PORTFOLIO_DATA;

  return (
    <section id="stack" className="relative w-full py-24 px-6 md:px-16 bg-white text-[#111111] z-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h2 className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#FF3D00] mb-3">
              Core Stack
            </h2>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#111111] leading-none">
              Technologies <br /> & Frameworks
            </h3>
          </div>
          <p className="max-w-md text-sm sm:text-base text-gray-600 leading-relaxed md:text-right">
            A curated selection of tools I use to build intelligent, scalable, and beautiful digital experiences.
          </p>
        </div>

        {/* Stack Badges Grid */}
        <div className="flex flex-wrap gap-3 pt-4">
          {coreStack.map((tech) => (
            <div
              key={tech.name}
              className="px-5 py-2.5 rounded-full border border-black/10 flex items-center gap-3 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-black/30 hover:-translate-y-0.5 transition-all duration-300 group cursor-default"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-6 h-6 object-contain rounded"
                onError={(e) => {
                  // Fallback if image fails
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="text-sm font-semibold text-[#111111] group-hover:text-[#FF3D00] transition-colors">
                {tech.name}
              </span>
              <span className="text-[0.6rem] font-extrabold uppercase tracking-wider text-gray-400 group-hover:text-gray-600 transition-colors ml-1">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
