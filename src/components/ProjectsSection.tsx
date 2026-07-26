import React, { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight, Sparkles, FolderGit2, BookOpen, Terminal, CheckCircle2, Play } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'SIDE PROJECTS' | 'DEVLOGS & MY STORY'>('SIDE PROJECTS');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const projects = PORTFOLIO_DATA.projects.filter(
    (p) => p.category === activeCategory
  );

  const selectedProject = projects[selectedIndex] || projects[0];

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
                INTERACTIVE EXHIBITION • WORK &amp; REPOSITORIES
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0f0f0f] leading-none font-display">
              FEATURED <span className="font-serif italic font-normal text-[#111111]">DATA PROJECTS</span> &amp; <br />
              <span className="font-serif italic font-normal text-[#111111]">DEVLOG INSIGHTS</span>
            </h2>
          </div>

          {/* Editorial Category Switcher */}
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full border border-black/10 w-fit shadow-sm">
            <button
              onClick={() => {
                setActiveCategory('SIDE PROJECTS');
                setSelectedIndex(0);
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === 'SIDE PROJECTS'
                  ? 'bg-black text-white shadow-md scale-105'
                  : 'text-neutral-700 hover:text-black'
              }`}
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>REAL-WORLD REPOS</span>
            </button>
            <button
              onClick={() => {
                setActiveCategory('DEVLOGS & MY STORY');
                setSelectedIndex(0);
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === 'DEVLOGS & MY STORY'
                  ? 'bg-black text-white shadow-md scale-105'
                  : 'text-neutral-700 hover:text-black'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>DEVLOGS &amp; STORY</span>
            </button>
          </div>
        </div>

        {/* Bespoke Exhibition Stage: Interactive Project Index (Left) + Visual Stage (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Project Index Table (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="text-[0.65rem] font-black tracking-[0.25em] text-neutral-600 uppercase mb-1 font-sans">
              SELECT PROJECT TO EXHIBIT
            </span>

            {projects.map((item, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedIndex(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col gap-2 ${
                    isSelected
                      ? 'bg-black text-white border-black shadow-xl translate-x-2'
                      : 'bg-white/80 text-[#0f0f0f] border-black/5 hover:bg-white hover:border-black/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-black ${isSelected ? 'text-amber-400' : 'text-neutral-500'}`}>
                      0{idx + 1}
                    </span>
                    <span className={`text-[0.65rem] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-stone-200 text-stone-800'
                    }`}>
                      {item.date}
                    </span>
                  </div>

                  <h3 className={`text-base font-black font-sans leading-snug ${isSelected ? 'text-white' : 'text-[#0f0f0f]'}`}>
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between pt-1">
                    <span className={`text-[0.7rem] font-bold ${isSelected ? 'text-stone-300' : 'text-neutral-600'}`}>
                      {item.subtitle}
                    </span>
                    <ArrowUpRight className={`w-4 h-4 transition-transform ${isSelected ? 'opacity-100 translate-x-0.5 text-amber-400' : 'opacity-40'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Exhibition Stage Card (7 Cols) */}
          {selectedProject && (
            <div className="lg:col-span-7 bg-white/95 backdrop-blur-sm rounded-3xl border border-black/10 p-6 sm:p-8 shadow-xl flex flex-col justify-between gap-6 transition-all duration-500">
              
              {/* Media Preview Header */}
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-stone-900 shadow-md group">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Live Model / Repo Badge */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[0.65rem] font-extrabold tracking-widest text-white border border-white/10 flex items-center gap-2 uppercase">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>VERIFIED GITHUB REPOSITORIES</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[0.65rem] font-extrabold uppercase tracking-widest text-amber-400 mb-1 block">
                    {selectedProject.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black font-sans leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Description & Performance Metrics Drawer */}
              <div className="flex flex-col gap-4">
                <p className="text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed font-sans">
                  {selectedProject.description}
                </p>

                {/* Key Technical Highlights */}
                {selectedProject.highlights && (
                  <div className="bg-[#eae8e3]/70 rounded-2xl p-4 border border-black/5 flex flex-col gap-2">
                    <span className="text-[0.65rem] font-black uppercase tracking-widest text-neutral-600 font-sans flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-black" />
                      SYSTEM HIGHLIGHTS &amp; PERFORMANCE
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {selectedProject.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs font-bold text-neutral-900 font-sans">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-[0.65rem] font-extrabold uppercase tracking-wider bg-black text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="pt-4 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-xs font-extrabold tracking-widest uppercase hover:bg-neutral-800 hover:scale-105 transition-all shadow-md"
                >
                  <Github className="w-4 h-4 text-amber-400" />
                  <span>EXPLORE REPOSITORY</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </a>

                {selectedProject.liveUrl && selectedProject.liveUrl !== selectedProject.githubUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-stone-200 text-neutral-900 text-xs font-extrabold tracking-widest uppercase hover:bg-stone-300 transition-all"
                  >
                    <span>VIEW LIVE DEMO</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
