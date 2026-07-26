import React, { useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'SIDE PROJECTS' | 'DEVLOGS & MY STORY'>('SIDE PROJECTS');

  const projects = PORTFOLIO_DATA.projects.filter(
    (p) => p.category === activeCategory
  );

  return (
    <section id="projects" className="relative w-full py-8 px-3 sm:px-6 md:px-8">
      {/* Editorial Light Container Card Matching Hero Card Theme */}
      <div className="relative w-full max-w-7xl mx-auto bg-[#eae8e3] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden shadow-2xl border border-black/5 flex flex-col gap-10">
        
        {/* Top Minimal Header & Category Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-black/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
            <p className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#111111] uppercase font-sans">
              WORK &amp; INSIGHTS • REPOSITORIES
            </p>
          </div>

          {/* Minimal Text Links */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveCategory('SIDE PROJECTS')}
              className={`text-xs font-extrabold tracking-widest uppercase transition-all flex items-center gap-1.5 ${
                activeCategory === 'SIDE PROJECTS' ? 'text-black' : 'text-neutral-600 hover:text-black'
              }`}
            >
              {activeCategory === 'SIDE PROJECTS' && <span className="w-1.5 h-1.5 rounded-full bg-black" />}
              <span>REPOSITORIES</span>
            </button>

            <button
              onClick={() => setActiveCategory('DEVLOGS & MY STORY')}
              className={`text-xs font-extrabold tracking-widest uppercase transition-all flex items-center gap-1.5 ${
                activeCategory === 'DEVLOGS & MY STORY' ? 'text-black' : 'text-neutral-600 hover:text-black'
              }`}
            >
              {activeCategory === 'DEVLOGS & MY STORY' && <span className="w-1.5 h-1.5 rounded-full bg-black" />}
              <span>DEVLOGS</span>
            </button>
          </div>
        </div>

        {/* Hyper-Minimal Editorial Project List */}
        <div className="flex flex-col divide-y divide-black/10">
          {projects.map((project: ProjectItem, idx: number) => (
            <a
              key={project.id}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group py-8 px-3 -mx-3 rounded-2xl transition-all duration-300 hover:bg-[#f3f1ea]/80 flex flex-col gap-3"
            >
              {/* Main Headline Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                
                {/* Left: Index + Title */}
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="text-xs font-mono font-bold text-neutral-600 group-hover:text-black transition-colors shrink-0">
                    0{idx + 1}
                  </span>

                  <h3 className="text-2xl sm:text-4xl font-black text-[#0f0f0f] tracking-tight font-display group-hover:translate-x-1.5 transition-transform duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Right: Minimal Arrow Link */}
                <div className="flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase text-black shrink-0 self-end md:self-auto">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">VIEW REPOSITORY</span>
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>

              </div>

              {/* Minimal Inline Description & Tags */}
              <div className="ml-8 sm:ml-12 flex flex-col gap-2 max-w-4xl">
                <p className="text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed font-sans">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-2 text-[0.7rem] font-bold text-neutral-600 uppercase tracking-wider font-sans">
                  {project.tags.map((tag, tIdx) => (
                    <React.Fragment key={tag}>
                      <span className="text-neutral-800 font-extrabold">{tag}</span>
                      {tIdx < project.tags.length - 1 && <span className="text-neutral-400">•</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
