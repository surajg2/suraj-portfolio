import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CoreStackSection: React.FC = () => {
  const { coreStack } = PORTFOLIO_DATA;

  // Group technologies into bespoke editorial clusters
  const analyticsAndML = coreStack.filter(t => ['SQL', 'Python', 'Pandas', 'NumPy', 'R', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'OpenCV'].includes(t.name));
  const dataEngAndCloud = coreStack.filter(t => ['PostgreSQL', 'MongoDB', 'Apache Spark', 'Apache Kafka', 'MySQL', 'AWS', 'GCP BigQuery', 'Docker'].includes(t.name));
  const vizAndTools = coreStack.filter(t => ['Streamlit', 'Power BI', 'Tableau', 'FastAPI', 'Jupyter', 'DBeaver', 'Git & GitHub'].includes(t.name));

  const clusters = [
    { title: "DATA ANALYTICS & MACHINE LEARNING", items: analyticsAndML },
    { title: "DATA ENGINEERING, DATABASES & CLOUD", items: dataEngAndCloud },
    { title: "VISUALIZATION, APIS & ANALYTICAL TOOLS", items: vizAndTools },
  ];

  return (
    <section id="stack" className="relative w-full py-8 px-3 sm:px-6 md:px-8">
      {/* Editorial Light Container Card Matching Hero Card */}
      <div className="relative w-full max-w-7xl mx-auto bg-[#eae8e3] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden shadow-2xl border border-black/5 flex flex-col gap-10">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-black/10 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
              <p className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#111111] uppercase font-sans">
                TECHNICAL ECOSYSTEM • STACK &amp; FRAMEWORKS
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0f0f0f] leading-none font-display">
              TECHNOLOGIES &amp; <br />
              <span className="font-serif italic font-normal text-[#111111]">ANALYTICAL TOOLKIT</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed font-sans md:text-right">
            A hand-picked selection of database engines, cloud services, and machine learning frameworks used in my data pipelines.
          </p>
        </div>

        {/* Bespoke Editorial Clusters (No generic grid boxes) */}
        <div className="flex flex-col gap-8 pt-2">
          {clusters.map((cluster, cIdx) => (
            <div key={cIdx} className="flex flex-col gap-4 border-b border-black/5 pb-6 last:border-0 last:pb-0">
              <span className="text-[0.65rem] font-black tracking-[0.25em] text-neutral-600 uppercase font-sans">
                {cluster.title}
              </span>
              
              {/* Fluid Pill Badges directly on editorial canvas */}
              <div className="flex flex-wrap gap-2.5">
                {cluster.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="group bg-[#0f0f0f] text-white px-4 sm:px-5 py-2.5 rounded-full text-xs font-black tracking-wider uppercase border border-black/10 hover:bg-black hover:scale-105 transition-all duration-300 shadow-sm flex items-center gap-2.5 cursor-default"
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-4 h-4 object-contain brightness-0 filter invert opacity-90 group-hover:opacity-100 transition-opacity"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <span className="font-sans font-extrabold text-white text-xs">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
