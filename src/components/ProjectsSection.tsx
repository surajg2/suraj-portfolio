import React, { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'SIDE PROJECTS' | 'DEVLOGS & MY STORY'>('SIDE PROJECTS');

  const filteredProjects = PORTFOLIO_DATA.projects.filter(
    (p) => p.category === activeTab
  );

  return (
    <section id="projects" className="relative w-full py-28 px-6 md:px-16 bg-[#050505] text-white z-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header & Tab Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-white/10">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-[#FF3D00] mb-2 block">
              WORK & INSIGHTS
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Featured Showcase
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 p-1.5 glass-card rounded-full border border-white/10 w-fit">
            <button
              onClick={() => setActiveTab('SIDE PROJECTS')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'SIDE PROJECTS'
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Side Projects
            </button>
            <button
              onClick={() => setActiveTab('DEVLOGS & MY STORY')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'DEVLOGS & MY STORY'
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Devlogs & Story
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group relative"
            >
              {/* Image Preview Container */}
              <div className="relative h-56 w-full overflow-hidden bg-black/40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[0.65rem] font-mono font-bold text-white/80 border border-white/10">
                  {project.date}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-mono text-[#FF3D00] font-semibold mb-1">
                    {project.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF3D00] transition-colors flex items-center justify-between">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Highlights & Tags */}
                <div>
                  {project.highlights && (
                    <div className="mb-4 space-y-1">
                      {project.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[0.7rem] text-white/70">
                          <Sparkles className="w-3 h-3 text-[#FF3D00]" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[0.65rem] font-mono bg-white/5 border border-white/10 text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code Repository</span>
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-[#FF3D00] hover:underline"
                      >
                        <span>Live Demo</span>
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
