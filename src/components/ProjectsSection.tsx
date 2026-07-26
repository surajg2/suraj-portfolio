import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Github, FolderGit2, BookOpen, X, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [expandedPanel, setExpandedPanel] = useState<'none' | 'projects' | 'devlogs'>('none');
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const [hasScrolledIn, setHasScrolledIn] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          setHasScrolledIn(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projectItems = PORTFOLIO_DATA.projects.filter(p => p.category === 'SIDE PROJECTS');
  const devlogItems = PORTFOLIO_DATA.projects.filter(p => p.category === 'DEVLOGS & MY STORY');

  const currentItems = expandedPanel === 'projects' ? projectItems : devlogItems;
  const activeItem: ProjectItem = currentItems[activeProjectIndex] || currentItems[0];

  const handleNextProject = () => {
    setActiveProjectIndex((prev) => (prev + 1) % currentItems.length);
  };

  const handlePrevProject = () => {
    setActiveProjectIndex((prev) => (prev - 1 + currentItems.length) % currentItems.length);
  };

  return (
    <section id="projects" ref={sectionRef} className="relative w-full py-8 px-3 sm:px-6 md:px-8">
      {/* Container Card */}
      <div className="relative w-full max-w-7xl mx-auto bg-[#eae8e3] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden shadow-2xl border border-black/5 flex flex-col gap-8">
        
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black/10 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#111111] animate-pulse" />
              <p className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#111111] uppercase font-sans">
                WORK &amp; INSIGHTS • DUAL EXHIBITION
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0f0f0f] leading-none font-display">
              DATA PROJECTS &amp; <br />
              <span className="font-serif italic font-normal text-[#111111]">DEVLOG INSIGHTS</span>
            </h2>
          </div>

          {expandedPanel !== 'none' && (
            <button
              onClick={() => setExpandedPanel('none')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-xs font-extrabold tracking-widest uppercase hover:bg-neutral-800 transition-all shadow-md self-start sm:self-auto"
            >
              <X className="w-4 h-4 text-amber-400" />
              <span>SPLIT DUAL VIEW</span>
            </button>
          )}
        </div>

        {/* 1. INITIAL DUAL-PANEL SPLIT VIEW */}
        {expandedPanel === 'none' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[400px] transition-all duration-700">
            
            {/* LEFT PANEL: EXPLORE PROJECTS */}
            <div
              onClick={() => {
                setExpandedPanel('projects');
                setActiveProjectIndex(0);
              }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer border border-black/10 shadow-lg min-h-[360px] sm:min-h-[420px] flex flex-col justify-between p-6 sm:p-8 transition-all duration-700 hover:scale-[1.01] hover:shadow-2xl bg-stone-900"
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                alt="Explore Projects"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="bg-black/80 backdrop-blur-md px-3.5 py-1 rounded-full text-[0.65rem] font-mono font-black text-amber-400 border border-white/10 uppercase tracking-widest flex items-center gap-1.5">
                  <FolderGit2 className="w-3.5 h-3.5" />
                  <span>01 / REPOSITORIES</span>
                </span>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>

              <div
                className={`relative z-10 text-white transition-all duration-700 transform ${
                  hasScrolledIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <h3 className="text-3xl sm:text-5xl font-black uppercase font-display leading-none group-hover:text-amber-400 transition-colors flex items-center gap-3">
                  <span>EXPLORE PROJECTS</span>
                  <ChevronRight className="w-6 h-6 text-amber-400 group-hover:translate-x-2 transition-transform" />
                </h3>
              </div>
            </div>

            {/* RIGHT PANEL: DEVLOGS & STORY */}
            <div
              onClick={() => {
                setExpandedPanel('devlogs');
                setActiveProjectIndex(0);
              }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer border border-black/10 shadow-lg min-h-[360px] sm:min-h-[420px] flex flex-col justify-between p-6 sm:p-8 transition-all duration-700 hover:scale-[1.01] hover:shadow-2xl bg-stone-900"
            >
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
                alt="Devlogs & Story"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="bg-black/80 backdrop-blur-md px-3.5 py-1 rounded-full text-[0.65rem] font-mono font-black text-amber-400 border border-white/10 uppercase tracking-widest flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>02 / DEVLOGS</span>
                </span>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>

              <div
                className={`relative z-10 text-white transition-all duration-700 transform ${
                  hasScrolledIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <h3 className="text-3xl sm:text-5xl font-black uppercase font-display leading-none group-hover:text-amber-400 transition-colors flex items-center gap-3">
                  <span>DEVLOGS &amp; STORY</span>
                  <ChevronRight className="w-6 h-6 text-amber-400 group-hover:translate-x-2 transition-transform" />
                </h3>
              </div>
            </div>

          </div>
        )}

        {/* 2. EXPANDED LUXURY CRIMSON MODAL SHOWCASE (Matching Reference Image) */}
        {expandedPanel !== 'none' && activeItem && (
          <div className="relative w-full bg-[#800a0a] rounded-[2.5rem] p-6 sm:p-10 md:p-12 text-white overflow-hidden shadow-2xl border border-white/10 transition-all duration-700 animate-fadeIn min-h-[500px] flex flex-col justify-between">
            
            {/* Background Typography Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 font-black text-7xl sm:text-9xl md:text-[14rem] uppercase tracking-widest pointer-events-none select-none font-display whitespace-nowrap">
              {activeItem.title.split(' ')[0]}
            </div>

            {/* Top Close Controller & Title Switcher */}
            <div className="relative z-20 flex items-center justify-between w-full border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-black/60 text-amber-400 font-mono text-xs font-black uppercase tracking-widest border border-white/10">
                  EXHIBIT 0{activeProjectIndex + 1} / 0{currentItems.length}
                </span>
                <span className="text-xs font-mono text-white/70 uppercase tracking-widest hidden sm:inline">
                  {expandedPanel === 'projects' ? 'REAL-WORLD REPOS' : 'DEVLOGS & STORY'}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setExpandedPanel(expandedPanel === 'projects' ? 'devlogs' : 'projects')}
                  className="text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-white transition-colors underline"
                >
                  SWITCH TO {expandedPanel === 'projects' ? 'DEVLOGS' : 'PROJECTS'}
                </button>
                
                <button
                  onClick={() => setExpandedPanel('none')}
                  className="w-10 h-10 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-lg"
                  aria-label="Close Showcase"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Stage Grid (Left Hero Cutout + Middle Details + Right Floating Glass Card) */}
            <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Floating Character Cutout / Graphic Artwork (3 Cols) */}
              <div className="lg:col-span-3 flex justify-center items-center">
                <div className="relative w-48 h-64 sm:w-56 sm:h-72 rounded-3xl overflow-hidden shadow-2xl border border-white/20 transform -rotate-3 hover:rotate-0 transition-transform duration-500 bg-black/40 group">
                  <img
                    src="/hero_portrait.png?v=rembg100"
                    alt="Suraj Hero Cutout"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-center text-[0.65rem] font-mono font-bold text-amber-400 tracking-widest uppercase">
                    DATA ENGINEER • SURAJ GUPTA
                  </div>
                </div>
              </div>

              {/* Middle Column: Detailed Project Specs & Description (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div>
                  <span className="text-xs font-mono font-extrabold uppercase tracking-[0.25em] text-amber-400 mb-1 block">
                    PROJECT 0{activeProjectIndex + 1}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight font-sans leading-tight mb-3">
                    {activeItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-200 font-sans leading-relaxed">
                    {activeItem.description}
                  </p>
                </div>

                {/* Tech & Creator Spec Footer */}
                <div className="pt-3 border-t border-white/15 flex flex-col gap-3 font-sans">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-mono font-black text-white/60 uppercase tracking-widest">TECH:</span>
                    {activeItem.tags.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full bg-black/50 text-white font-extrabold text-[0.65rem] uppercase border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-black text-amber-400 font-bold text-[0.6rem] uppercase tracking-wider">
                      CREATOR:
                    </span>
                    <span className="font-extrabold text-white">Suraj Gupta (surajg2)</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Floating Tilted Glassmorphic Preview Card + Vertical Controls (4 Cols) */}
              <div className="lg:col-span-4 flex items-center gap-4">
                
                {/* Floating Slanted Glass Card */}
                <div className="flex-1 bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl p-5 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 flex flex-col gap-4 group">
                  <div className="relative h-44 w-full rounded-2xl overflow-hidden shadow-md border border-white/10 bg-stone-900">
                    <img
                      src={activeItem.image}
                      alt={activeItem.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight font-sans">
                      {activeItem.title}
                    </h4>

                    <a
                      href={activeItem.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white text-black hover:bg-amber-400 hover:text-black rounded-full py-3 px-5 text-xs font-extrabold tracking-widest uppercase flex items-center justify-center gap-2 transition-all shadow-lg"
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Vertical Pagination Dots & Scroll Controls (Exact Reference) */}
                <div className="flex flex-col items-center gap-3 shrink-0">
                  <button
                    onClick={handlePrevProject}
                    className="w-8 h-8 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
                    aria-label="Previous"
                  >
                    <ChevronUp className="w-4 h-4" />
                  </button>

                  <div className="flex flex-col items-center gap-2">
                    {currentItems.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveProjectIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          activeProjectIndex === i ? 'bg-amber-400 scale-125 h-4' : 'bg-white/40 hover:bg-white'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNextProject}
                    className="w-8 h-8 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
                    aria-label="Next"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
