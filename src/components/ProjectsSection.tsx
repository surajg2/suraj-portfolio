import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Github, FolderGit2, BookOpen, X, Sparkles, ChevronRight, Layers } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [expandedPanel, setExpandedPanel] = useState<'none' | 'projects' | 'devlogs'>('none');
  const [hasScrolledIn, setHasScrolledIn] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection observer to reveal text titles after scrolling to the section
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
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projectItems = PORTFOLIO_DATA.projects.filter(p => p.category === 'SIDE PROJECTS');
  const devlogItems = PORTFOLIO_DATA.projects.filter(p => p.category === 'DEVLOGS & MY STORY');

  return (
    <section id="projects" ref={sectionRef} className="relative w-full py-8 px-3 sm:px-6 md:px-8">
      {/* Editorial Light Container Card Matching Hero Card Theme */}
      <div className="relative w-full max-w-7xl mx-auto bg-[#eae8e3] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden shadow-2xl border border-black/5 flex flex-col gap-8">
        
        {/* Top Header & Reset Controller */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black/10 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#111111] animate-pulse" />
              <p className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#111111] uppercase font-sans">
                DUAL EXHIBITION • WORK &amp; INSIGHTS
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

        {/* 1. INITIAL DUAL-PANEL SPLIT VIEW (Visual Image Covers -> Scroll Reveals Text -> Click Expands) */}
        {expandedPanel === 'none' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[420px] transition-all duration-700">
            
            {/* LEFT PANEL: PROJECTS */}
            <div
              onClick={() => setExpandedPanel('projects')}
              className="group relative rounded-3xl overflow-hidden cursor-pointer border border-black/10 shadow-lg min-h-[380px] sm:min-h-[440px] flex flex-col justify-between p-6 sm:p-8 transition-all duration-700 hover:scale-[1.01] hover:shadow-2xl bg-stone-900"
            >
              {/* Pure High-Definition Background Image Cover */}
              <img
                src={projectItems[0]?.image || "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80"}
                alt="Projects Cover"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

              {/* Top Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="bg-black/80 backdrop-blur-md px-3.5 py-1 rounded-full text-[0.65rem] font-mono font-black text-amber-400 border border-white/10 uppercase tracking-widest">
                  01 / PROJECTS
                </span>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>

              {/* Text Content: Revealed ONLY AFTER Scrolling into View */}
              <div
                className={`relative z-10 text-white transition-all duration-700 transform ${
                  hasScrolledIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <div className="flex items-center gap-2 text-xs font-mono font-extrabold uppercase tracking-widest text-amber-400 mb-2">
                  <FolderGit2 className="w-4 h-4" />
                  <span>REAL-WORLD REPOS</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black uppercase font-display leading-tight mb-2 group-hover:text-amber-400 transition-colors">
                  EXPLORE PROJECTS
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed max-w-sm mb-4">
                  Computer vision dumbbell detection, India's Medicine Bank, and IBM machine learning analytics.
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase text-white group-hover:underline">
                  <span>CLICK TO UNLOCK CATALOG</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* RIGHT PANEL: DEVLOGS & MY STORY */}
            <div
              onClick={() => setExpandedPanel('devlogs')}
              className="group relative rounded-3xl overflow-hidden cursor-pointer border border-black/10 shadow-lg min-h-[380px] sm:min-h-[440px] flex flex-col justify-between p-6 sm:p-8 transition-all duration-700 hover:scale-[1.01] hover:shadow-2xl bg-stone-900"
            >
              {/* Pure High-Definition Background Image Cover */}
              <img
                src={devlogItems[0]?.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80"}
                alt="Devlogs Cover"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

              {/* Top Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="bg-black/80 backdrop-blur-md px-3.5 py-1 rounded-full text-[0.65rem] font-mono font-black text-amber-400 border border-white/10 uppercase tracking-widest">
                  02 / DEVLOGS
                </span>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>

              {/* Text Content: Revealed ONLY AFTER Scrolling into View */}
              <div
                className={`relative z-10 text-white transition-all duration-700 transform ${
                  hasScrolledIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <div className="flex items-center gap-2 text-xs font-mono font-extrabold uppercase tracking-widest text-amber-400 mb-2">
                  <BookOpen className="w-4 h-4" />
                  <span>DEVLOGS &amp; ARCHITECTURE</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black uppercase font-display leading-tight mb-2 group-hover:text-amber-400 transition-colors">
                  DEVLOGS &amp; STORY
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed max-w-sm mb-4">
                  Deep engineering breakdowns on OpenCV pose pipelines, SQLite healthcare schemas, and model deployment.
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase text-white group-hover:underline">
                  <span>CLICK TO READ INSIGHTS</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>

          </div>
        )}

        {/* 2. EXPANDED PROJECTS VIEW */}
        {expandedPanel === 'projects' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-black/10 pb-4">
              <span className="text-xs font-mono font-black uppercase tracking-widest text-neutral-600">
                EXHIBITING: REAL-WORLD REPOS ({projectItems.length})
              </span>
              <button
                onClick={() => setExpandedPanel('devlogs')}
                className="text-xs font-extrabold uppercase tracking-wider text-black hover:underline flex items-center gap-1"
              >
                <span>SWITCH TO DEVLOGS</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projectItems.map((project: ProjectItem, idx: number) => (
                <div
                  key={project.id}
                  className="bg-[#f3f1ea]/95 border border-black/10 rounded-3xl p-5 hover:border-black/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-44 w-full rounded-2xl overflow-hidden shadow-sm border border-black/10 bg-stone-900 mb-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                      <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-0.5 rounded-full text-[0.65rem] font-mono font-black text-amber-400 border border-white/10">
                        0{idx + 1}
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 text-white text-[0.65rem] font-extrabold uppercase tracking-wider font-sans">
                        {project.subtitle}
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-black text-[#0f0f0f] tracking-tight font-sans">
                        {project.title}
                      </h3>
                      <span className="text-[0.65rem] font-extrabold uppercase text-neutral-500 font-sans">
                        {project.date}
                      </span>
                    </div>

                    <p className="text-xs text-neutral-700 font-medium leading-relaxed font-sans mb-4 line-clamp-3">
                      {project.description}
                    </p>

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

                  <div className="pt-3 border-t border-black/10">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-black text-white rounded-full py-2.5 px-4 text-xs font-extrabold tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all shadow-sm"
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
        )}

        {/* 3. EXPANDED DEVLOGS VIEW */}
        {expandedPanel === 'devlogs' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-black/10 pb-4">
              <span className="text-xs font-mono font-black uppercase tracking-widest text-neutral-600">
                EXHIBITING: DEVLOGS &amp; STORY ({devlogItems.length})
              </span>
              <button
                onClick={() => setExpandedPanel('projects')}
                className="text-xs font-extrabold uppercase tracking-wider text-black hover:underline flex items-center gap-1"
              >
                <span>SWITCH TO PROJECTS</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {devlogItems.map((devlog: ProjectItem, idx: number) => (
                <div
                  key={devlog.id}
                  className="bg-[#f3f1ea]/95 border border-black/10 rounded-3xl p-6 hover:border-black/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-52 w-full rounded-2xl overflow-hidden shadow-sm border border-black/10 bg-stone-900 mb-4">
                      <img
                        src={devlog.image}
                        alt={devlog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                      <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-0.5 rounded-full text-[0.65rem] font-mono font-black text-amber-400 border border-white/10">
                        DEVLOG 0{idx + 1}
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 text-white text-[0.65rem] font-extrabold uppercase tracking-wider font-sans">
                        {devlog.subtitle}
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-black text-[#0f0f0f] tracking-tight font-sans">
                        {devlog.title}
                      </h3>
                      <span className="text-[0.65rem] font-extrabold uppercase text-neutral-500 font-sans">
                        {devlog.date}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed font-sans mb-4">
                      {devlog.description}
                    </p>

                    {devlog.highlights && (
                      <div className="space-y-1 mb-4 bg-white/60 p-3 rounded-xl border border-black/5">
                        {devlog.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-1.5 text-xs font-bold text-neutral-900">
                            <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {devlog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-[0.6rem] font-extrabold uppercase tracking-wider bg-white/90 border border-black/10 text-neutral-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-black/10">
                    <a
                      href={devlog.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-black text-white rounded-full py-2.5 px-4 text-xs font-extrabold tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all shadow-sm"
                    >
                      <Github className="w-3.5 h-3.5 text-amber-400" />
                      <span>READ DEVLOG ON GITHUB</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
