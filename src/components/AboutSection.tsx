import React from 'react';
import { Database, BarChart3, Cpu, GraduationCap, Award, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const stats = [
    { label: 'Datasets Analyzed', value: '50+' },
    { label: 'ETL Pipeline Uptime', value: '99.9%' },
    { label: 'SQL & Algo Solved', value: '350+' },
    { label: 'Analytics Reports', value: '100+' },
  ];

  const pillars = [
    {
      icon: <BarChart3 className="w-6 h-6 text-[#111111]" />,
      title: "Data Analytics & Storytelling",
      desc: "Transforming complex data metrics into executive dashboards, churn predictions, and clear business intelligence using SQL, Python, and Streamlit."
    },
    {
      icon: <Database className="w-6 h-6 text-[#111111]" />,
      title: "Data Engineering & ETL",
      desc: "Building scalable ingestion pipelines, PostgreSQL / MongoDB schemas, containerized Docker microservices, and automated data aggregation workflows."
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#111111]" />,
      title: "Quantitative Problem Solving",
      desc: "Applying rigorous statistical validation, anomaly detection, query optimization, and structured algorithmic logic to solve real-world data problems."
    }
  ];

  return (
    <section id="about" className="relative w-full py-12 px-3 sm:px-6 md:px-8">
      {/* Editorial Light Container Card */}
      <div className="relative w-full max-w-7xl mx-auto bg-[#eae8e3] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden shadow-2xl border border-black/5 flex flex-col gap-12">
        
        {/* Top Tagline */}
        <div className="flex items-center justify-between border-b border-black/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
            <p className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#111111] uppercase font-sans">
              ABOUT ME • PROFILE &amp; EXPERTISE
            </p>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#111111]/60">
            SURAJ GUPTA
          </span>
        </div>

        {/* Main Display Headline */}
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0f0f0f] leading-[1.05] tracking-tight font-display">
            BRIDGING THE GAP BETWEEN <span className="font-serif italic font-normal text-[#111111]">RAW DATA PIPELINES</span> AND <span className="font-serif italic font-normal text-[#111111]">STRATEGIC BUSINESS INSIGHTS.</span>
          </h2>
        </div>

        {/* Bio & Stats Grid (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Comprehensive Bio & Key Stats (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <p className="text-base sm:text-lg text-neutral-800 font-medium leading-relaxed font-sans">
              I am a dedicated <strong className="text-black font-extrabold">Data Analyst &amp; Data Engineer</strong> specializing in designing end-to-end data architecture, executing complex SQL analytics, and building robust streaming ETL pipelines.
            </p>
            <p className="text-sm sm:text-base text-neutral-700 font-normal leading-relaxed font-sans">
              My approach focuses on data integrity, scalable database optimization, and high-impact visual storytelling. Whether it is engineering automated streaming workflows with Python and PostgreSQL or constructing predictive churn analytics dashboards, I transform raw numbers into measurable growth drivers.
            </p>

            {/* Stat Counters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-black/5 flex flex-col items-center text-center shadow-sm">
                  <span className="text-2xl sm:text-3xl font-black text-[#0f0f0f] font-display">
                    {stat.value}
                  </span>
                  <span className="text-[0.65rem] sm:text-xs font-bold text-neutral-600 uppercase tracking-wider mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Expertise Pillars (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-xs font-extrabold tracking-[0.25em] text-[#111111] uppercase mb-1">
              CORE PILLARS
            </h3>
            {pillars.map((pillar, idx) => (
              <div key={idx} className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-black/5 shadow-sm flex items-start gap-4 transform transition-all duration-300 hover:shadow-md">
                <div className="p-2.5 rounded-xl bg-[#eae8e3] border border-black/5 shrink-0">
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-[#0f0f0f] font-sans">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-neutral-700 leading-relaxed mt-1 font-sans">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Education Timeline Bar */}
        <div className="border-t border-black/10 pt-8 mt-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#111111]" />
              <h3 className="text-xs sm:text-sm font-extrabold tracking-[0.2em] text-[#111111] uppercase">
                EDUCATION &amp; ACADEMICS
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-black/5 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#0f0f0f] text-white text-[0.65rem] font-extrabold tracking-widest uppercase mb-3">
                    {edu.period}
                  </span>
                  <h4 className="text-base font-extrabold text-[#0f0f0f] font-sans">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-semibold text-neutral-600 font-sans mt-0.5">
                    {edu.field}
                  </p>
                </div>
                <p className="text-xs text-neutral-800 font-medium mt-4 font-sans border-t border-black/5 pt-3">
                  {edu.institution}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
