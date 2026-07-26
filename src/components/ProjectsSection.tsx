import React, { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight, Sparkles, FolderGit2, BookOpen } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'SIDE PROJECTS' | 'DEVLOGS & MY STORY'>('SIDE PROJECTS');

  const filteredProjects = PORTFOLIO_DATA.projects.filter(
    (p) => p.category === activeTab
  );

  return (
    <section id="projects" className="relative w-full py-8 px-3 sm:px-6 md:px-8">
      {/* Editorial Light Container Card Matching Hero Card Theme */}
      <div className="relative w-full max-w-7xl mx-auto bg-[#eae8e3] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden shadow-2xl border border-black/5 flex flex-col gap-10">
        
        {/* Top Header Row & Tab Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
              <p className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#111111] uppercase font-sans">
                FEATURED SHOWCASE • WORK &amp; INSIGHTS
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0f0f0f] leading-none font-display">
              DATA PROJECTS &amp; <br />
              <span className="font-serif italic font-normal text-[#111111]">DEVLOG INSIGHTS</span>
            </h2>
          </div>

          {/* Editorial Tab Switcher */}
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full border border-black/10 w-fit shadow-sm">
            <button
              onClick={() => setActiveTab('SIDE PROJECTS')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'SIDE PROJECTS'
                  ? 'bg-black text-white shadow-md scale-105'
                  : 'text-neutral-700 hover:text-black'
              }`}
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>SIDE PROJECTS</span>
            </button>
            <button
              onClick={() => setActiveTab('DEVLOGS & MY STORY')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'DEVLOGS & MY STORY'
                  ? 'bg-black text-white shadow-md scale-105'
                  : 'text-neutral-700 hover:text-black'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>DEVLOGS &amp; STORY</span>
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Preview Container */}
              <div className="relative h-52 w-full overflow-hidden bg-stone-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[0.65rem] font-extrabold tracking-wider text-white border border-white/10 uppercase">
                  {project.date}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[0.65rem] font-extrabold uppercase tracking-widest text-neutral-500 mb-1.5 block">
                    {project.subtitle}
                  </span>
                  <h3 className="text-xl font-black text-[#0f0f0f] mb-3 group-hover:text-black transition-colors leading-snug font-sans flex items-start justify-between gap-2">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-black" />
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Highlights & Tags */}
                <div>
                  {project.highlights && (
                    <div className="mb-4 space-y-1.5 border-t border-black/5 pt-3">
                      {project.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[0.7rem] font-medium text-neutral-800 font-sans">
                          <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-[0.65rem] font-extrabold uppercase tracking-wider bg-stone-900 text-stone-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-black/10 flex items-center justify-between">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-extrabold tracking-wider uppercase text-neutral-900 hover:text-black transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>REPOSITORY</span>
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-extrabold tracking-wider uppercase text-black hover:underline"
                      >
                        <span>LIVE DEMO</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
