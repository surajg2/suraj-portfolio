import React, { useState } from 'react';
import { ArrowUpRight, Github, Sparkles, FolderGit2, BookOpen } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'SIDE PROJECTS' | 'DEVLOGS & MY STORY'>('SIDE PROJECTS');

  const projects = PORTFOLIO_DATA.projects.filter(
    (p) => p.category === activeCategory
  );

  return (
    <section id="projects" className="relative w-full py-8 px-3 sm:px-6 md:px-8">
      {/* Editorial Light Container Card Matching Hero Card Theme */}
      <div className="relative w-full max-w-7xl mx-auto bg-[#eae8e3] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden shadow-2xl border border-black/5 flex flex-col gap-8">
        
        {/* Top Header Row & Category Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#111111] animate-pulse" />
              <p className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#111111] uppercase font-sans">
                FEATURED SHOWCASE • WORK &amp; INSIGHTS
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0f0f0f] leading-none font-display">
              DATA PROJECTS &amp; <br />
              <span className="font-serif italic font-normal text-[#111111]">DEVLOG INSIGHTS</span>
            </h2>
          </div>

          {/* Editorial Category Switcher */}
          <div className="flex items-center gap-2 bg-[#f3f1ea] p-1.5 rounded-full border border-black/10 w-fit shadow-sm">
            <button
              onClick={() => setActiveCategory('SIDE PROJECTS')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === 'SIDE PROJECTS'
                  ? 'bg-black text-white shadow-md'
                  : 'text-neutral-700 hover:text-black'
              }`}
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>REAL-WORLD REPOS</span>
            </button>
            <button
              onClick={() => setActiveCategory('DEVLOGS & MY STORY')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === 'DEVLOGS & MY STORY'
                  ? 'bg-black text-white shadow-md'
                  : 'text-neutral-700 hover:text-black'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>DEVLOGS &amp; STORY</span>
            </button>
          </div>
        </div>

        {/* Compact Balanced 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: ProjectItem, idx: number) => (
            <div
              key={project.id}
              className="bg-[#f3f1ea]/90 border border-black/10 rounded-3xl p-5 hover:border-black/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Image Preview Container */}
                <div className="relative h-44 w-full rounded-2xl overflow-hidden shadow-sm border border-black/10 bg-stone-900 mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                  
                  {/* Number Badge */}
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-0.5 rounded-full text-[0.65rem] font-mono font-black text-amber-400 border border-white/10">
                    0{idx + 1}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white text-[0.65rem] font-extrabold uppercase tracking-wider font-sans">
                    {project.subtitle}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-black text-[#0f0f0f] tracking-tight font-sans group-hover:text-black transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-[0.65rem] font-extrabold uppercase text-neutral-500 font-sans">
                    {project.date}
                  </span>
                </div>

                <p className="text-xs text-neutral-700 font-medium leading-relaxed font-sans mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-[0.6rem] font-extrabold uppercase tracking-wider bg-white/90 border border-black/10 text-neutral-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-black/10">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-black text-white rounded-full py-2.5 px-4 text-xs font-extrabold tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all shadow-sm group-hover:shadow-md"
                >
                  <Github className="w-3.5 h-3.5 text-amber-400" />
                  <span>REPOSITORY</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
