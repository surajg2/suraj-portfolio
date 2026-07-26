import React, { useState, useRef } from 'react';
import { ArrowUpRight, Github, FolderGit2, BookOpen, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'SIDE PROJECTS' | 'DEVLOGS & MY STORY'>('SIDE PROJECTS');
  const carouselRef = useRef<HTMLDivElement>(null);

  const projects = PORTFOLIO_DATA.projects.filter(
    (p) => p.category === activeCategory
  );

  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="relative w-full py-8 px-3 sm:px-6 md:px-8">
      {/* Editorial Light Container Card Matching Hero Card Theme */}
      <div className="relative w-full max-w-7xl mx-auto bg-[#eae8e3] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden shadow-2xl border border-black/5 flex flex-col gap-8">
        
        {/* Top Header Row, Switcher & Carousel Scroll Arrows */}
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

          <div className="flex flex-wrap items-center gap-3">
            {/* Editorial Category Switcher */}
            <div className="flex items-center gap-1.5 bg-[#f3f1ea] p-1.5 rounded-full border border-black/10 shadow-sm">
              <button
                onClick={() => setActiveCategory('SIDE PROJECTS')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === 'SIDE PROJECTS'
                    ? 'bg-black text-white shadow-md'
                    : 'text-neutral-700 hover:text-black'
                }`}
              >
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>REPOSITORIES</span>
              </button>
              <button
                onClick={() => setActiveCategory('DEVLOGS & MY STORY')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === 'DEVLOGS & MY STORY'
                    ? 'bg-black text-white shadow-md'
                    : 'text-neutral-700 hover:text-black'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>DEVLOGS</span>
              </button>
            </div>

            {/* Carousel Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleScroll('left')}
                className="w-10 h-10 rounded-full bg-white/90 border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-sm hover:scale-105"
                aria-label="Previous Project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="w-10 h-10 rounded-full bg-white/90 border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-sm hover:scale-105"
                aria-label="Next Project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Animated Horizontal Scroll Carousel Track */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-3 px-1 transition-all duration-500"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project: ProjectItem, idx: number) => (
            <div
              key={project.id}
              className="snap-start flex-none w-[310px] sm:w-[360px] md:w-[380px] bg-[#f3f1ea]/95 border border-black/10 rounded-3xl p-5 hover:border-black/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col justify-between group"
            >
              <div>
                {/* Top Image Preview Container with Zoom & Shimmer */}
                <div className="relative h-48 w-full rounded-2xl overflow-hidden shadow-sm border border-black/10 bg-stone-900 mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-90" />
                  
                  {/* Glowing Index Badge */}
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[0.65rem] font-mono font-black text-amber-400 border border-white/15 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span>0{idx + 1}</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white text-[0.65rem] font-extrabold uppercase tracking-wider font-sans">
                    {project.subtitle}
                  </div>
                </div>

                {/* Short Punchy Title & Subtitle */}
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

                {/* Highlights Bullet Tag */}
                {project.highlights && project.highlights[0] && (
                  <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-900 font-sans mb-4 bg-white/60 p-2 rounded-xl border border-black/5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="truncate">{project.highlights[0]}</span>
                  </div>
                )}

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
