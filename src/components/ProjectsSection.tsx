import React, { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight, Sparkles, FolderGit2, BookOpen, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'SIDE PROJECTS' | 'DEVLOGS & MY STORY'>('SIDE PROJECTS');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const projects = PORTFOLIO_DATA.projects.filter(
    (p) => p.category === activeCategory
  );

  return (
    <section id="projects" className="relative w-full py-8 px-3 sm:px-6 md:px-8">
      {/* Editorial Light Container Card Matching Hero Card Theme */}
      <div className="relative w-full max-w-7xl mx-auto bg-[#eae8e3] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden shadow-2xl border border-black/5 flex flex-col gap-10">
        
        {/* Top Header Row & Category Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#111111] animate-pulse" />
              <p className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#111111] uppercase font-sans">
                WORK &amp; INSIGHTS • FEATURED SHOWCASE
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0f0f0f] leading-none font-display">
              DATA PROJECTS &amp; <br />
              <span className="font-serif italic font-normal text-[#111111]">DEVLOG INSIGHTS</span>
            </h2>
          </div>

          {/* Minimal Editorial Category Switcher */}
          <div className="flex items-center gap-2 bg-[#f3f1ea] p-1.5 rounded-full border border-black/10 w-fit shadow-sm">
            <button
              onClick={() => setActiveCategory('SIDE PROJECTS')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
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
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
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

        {/* Minimal Editorial Project List (Zero Box Containers!) */}
        <div className="flex flex-col">
          {projects.map((project: ProjectItem, idx: number) => {
            const isHovered = hoveredId === project.id;
            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative border-b border-black/10 py-8 first:pt-2 transition-all duration-500 flex flex-col gap-4"
              >
                {/* Main Typography Row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  
                  {/* Left: Number & Massive Title */}
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    <span className="text-xs sm:text-sm font-mono font-black text-neutral-500 group-hover:text-black transition-colors pt-1 sm:pt-0">
                      0{idx + 1}
                    </span>

                    <div className="flex flex-col">
                      <span className="text-[0.65rem] font-extrabold uppercase tracking-widest text-neutral-500 mb-0.5">
                        {project.subtitle} • {project.date}
                      </span>
                      <h3 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#0f0f0f] tracking-tight font-sans group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-3">
                        <span>{project.title}</span>
                      </h3>
                    </div>
                  </div>

                  {/* Right: Floating Image Micro-Preview & Action CTAs */}
                  <div className="flex items-center gap-4 ml-8 sm:ml-12 lg:ml-0">
                    
                    {/* Minimal Hover Image Reveal */}
                    <div
                      className={`relative w-28 h-16 rounded-xl overflow-hidden shadow-lg border border-black/10 transition-all duration-500 shrink-0 hidden sm:block ${
                        isHovered ? 'opacity-100 scale-105 translate-y-0' : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Action Link Pills */}
                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-xs font-extrabold tracking-widest uppercase hover:bg-neutral-800 transition-all shadow-sm"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">REPOSITORY</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                      </a>

                      {project.liveUrl && project.liveUrl !== project.githubUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#f3f1ea] border border-black/10 text-[#0f0f0f] text-xs font-extrabold tracking-widest uppercase hover:bg-black hover:text-white transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                  </div>

                </div>

                {/* Description & Inline Micro Tags (Zero Box Containers) */}
                <div className="ml-8 sm:ml-12 flex flex-col gap-3 max-w-4xl">
                  <p className="text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Highlights Bullet Row */}
                  {project.highlights && (
                    <div className="flex flex-wrap gap-4 pt-1">
                      {project.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-1.5 text-xs font-bold text-neutral-900 font-sans">
                          <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Minimal Inline Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-0.5 rounded-full text-[0.65rem] font-extrabold uppercase tracking-wider bg-[#f3f1ea] border border-black/10 text-neutral-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
