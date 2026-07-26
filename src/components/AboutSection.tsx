import React from 'react';
import { MapPin, Sparkles, BookOpen, BrainCircuit, BarChart3, Database, GraduationCap, Cloud, LineChart, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const stats = [
    { label: 'Datasets & Models', value: '50+' },
    { label: 'Location', value: 'Mumbai' },
    { label: 'B.Tech CSE-DS', value: '3rd Year' },
    { label: 'SQL & Algo Solved', value: '350+' },
  ];

  const coreFocus = [
    {
      icon: <BarChart3 className="w-5 h-5 text-[#111111]" />,
      title: "Data Analytics & Insights",
      desc: "Transforming raw data streams into actionable executive stories, statistical metrics, and interactive decision dashboards."
    },
    {
      icon: <BrainCircuit className="w-5 h-5 text-[#111111]" />,
      title: "Machine Learning (ML)",
      desc: "Building predictive ML models, trend classification pipelines, and statistical analysis using Scikit-Learn, Python & Pandas."
    },
    {
      icon: <Database className="w-5 h-5 text-[#111111]" />,
      title: "Data Engineering & SQL",
      desc: "Architecting high-throughput SQL databases, PostgreSQL/MongoDB schemas, and automated ETL data ingestion pipelines."
    }
  ];

  return (
    <section id="about" className="relative w-full py-8 px-3 sm:px-6 md:px-8">
      {/* Editorial Light Container Card Matching Hero Card */}
      <div className="relative w-full max-w-7xl mx-auto bg-[#eae8e3] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden shadow-2xl border border-black/5 flex flex-col gap-12">
        
        {/* Top Tagline / Meta Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#111111] animate-pulse" />
            <p className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#111111] uppercase font-sans">
              ABOUT ME • SURAJ GUPTA
            </p>
          </div>

          {/* Quick Info Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black text-white text-[0.7rem] font-extrabold tracking-wider uppercase">
              <MapPin className="w-3 h-3 text-amber-400" />
              MUMBAI, INDIA
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 text-stone-200 text-[0.7rem] font-extrabold tracking-wider uppercase">
              <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
              3RD YEAR B.TECH CSE-DS
            </span>
          </div>
        </div>

        {/* Hero-Harmonized Grid: Left Bio & Headline + Right Portrait Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headline, Bio & Stat Grid (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Display Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0f0f0f] leading-[1.05] tracking-tight font-display">
              BRIDGING <span className="font-serif italic font-normal text-[#111111]">DATA ANALYTICS</span>, <span className="font-serif italic font-normal text-[#111111]">MACHINE LEARNING</span> &amp; <span className="font-serif italic font-normal text-[#111111]">DATA ENGINEERING.</span>
            </h2>

            {/* Paragraph Bio */}
            <p className="text-sm sm:text-base text-neutral-800 font-medium leading-relaxed font-sans">
              Hi, I am <strong className="text-black font-extrabold">Suraj Gupta</strong>, a passionate <strong>Data Analyst &amp; Data Engineer</strong> based in <strong>Mumbai, India</strong>. Currently pursuing my <strong>3rd Year B.Tech in Computer Science (Data Science)</strong> at <em>St. John College of Engineering and Management (2024–2028)</em>.
            </p>

            <p className="text-xs sm:text-sm text-neutral-700 font-normal leading-relaxed font-sans">
              I specialize in analyzing complex datasets, engineering reliable SQL ETL data pipelines, and building predictive Machine Learning models. I thrive on translating multi-dimensional data into strategic business intelligence.
            </p>

            {/* Currently Learning Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-black/10 flex items-center gap-3.5 shadow-sm mt-1">
              <div className="p-2.5 rounded-xl bg-amber-100/80 border border-amber-300 shrink-0">
                <Sparkles className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <span className="text-[0.65rem] font-extrabold uppercase tracking-widest text-neutral-500 block">
                  CURRENTLY EXPANDING KNOWLEDGE IN
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-[#0f0f0f] font-sans">
                  {PORTFOLIO_DATA.profile.learning}
                </span>
              </div>
            </div>

            {/* Stat Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-3.5 border border-black/5 flex flex-col items-center text-center shadow-sm">
                  <span className="text-xl sm:text-2xl font-black text-[#0f0f0f] font-display">
                    {stat.value}
                  </span>
                  <span className="text-[0.65rem] font-extrabold text-neutral-600 uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Editorial Portrait Cutout Card (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-sm sm:max-w-md bg-stone-900 rounded-3xl p-6 overflow-hidden shadow-2xl border border-black/20 flex flex-col items-center justify-between min-h-[440px] group">
              
              {/* Card Ambient Glow */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

              {/* Top Card Badge */}
              <div className="w-full flex items-center justify-between z-20 pb-2">
                <span className="text-[0.65rem] font-extrabold tracking-[0.2em] text-stone-300 uppercase">
                  SURAJ GUPTA
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-stone-200 text-[0.6rem] font-extrabold uppercase tracking-wider backdrop-blur-md border border-white/10">
                  ML &amp; DATA ANALYST
                </span>
              </div>

              {/* Central Black Suit Cutout Image */}
              <div className="relative z-20 my-auto w-full flex justify-center items-end h-72">
                <img
                  src="/hero_portrait.png?v=rembg100"
                  alt="Suraj Gupta - Data Analyst & Data Engineer"
                  className="h-full w-auto object-contain object-bottom filter drop-shadow-2xl brightness-[1.02] contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                  style={{ imageRendering: 'crisp-edges' }}
                />
              </div>

              {/* Bottom Card Summary */}
              <div className="w-full z-20 pt-3 border-t border-white/10 flex items-center justify-between text-left">
                <div>
                  <h4 className="text-sm font-black text-white font-sans">
                    Data Analyst &amp; ML Engineer
                  </h4>
                  <p className="text-[0.65rem] text-stone-400 font-medium">
                    St. John College of Eng. &amp; Mgmt (2024–2028)
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10 text-amber-400 shrink-0">
                  <BrainCircuit className="w-4 h-4" />
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Core Pillars & Education Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-black/10 pt-10 mt-2">
          
          {/* Left: 3 Core Pillars (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <h3 className="text-xs font-extrabold tracking-[0.25em] text-[#111111] uppercase mb-1">
              CORE EXPERTISE &amp; SPECIALIZATION
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {coreFocus.map((pillar, idx) => (
                <div key={idx} className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-black/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div className="p-2 rounded-xl bg-[#eae8e3] border border-black/5 shrink-0 w-fit mb-3">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#0f0f0f] font-sans">
                      {pillar.title}
                    </h4>
                    <p className="text-[0.7rem] text-neutral-700 leading-relaxed mt-1.5 font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Academic Background (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-1">
              <GraduationCap className="w-4 h-4 text-[#111111]" />
              <h3 className="text-xs font-extrabold tracking-[0.25em] text-[#111111] uppercase">
                ACADEMIC EDUCATION
              </h3>
            </div>

            <div className="flex flex-col gap-3">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div key={idx} className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-black/5 shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-extrabold text-[#0f0f0f] font-sans">
                      {edu.degree}
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0f0f0f] text-white text-[0.6rem] font-extrabold tracking-widest uppercase shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-neutral-700 font-sans mt-1">
                    {edu.field}
                  </p>
                  <p className="text-[0.7rem] text-neutral-600 font-medium mt-2 pt-2 border-t border-black/5 font-sans">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
