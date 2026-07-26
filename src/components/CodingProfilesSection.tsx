import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CodingProfilesSection: React.FC = () => {
  const { codingProfiles } = PORTFOLIO_DATA;

  return (
    <section id="profiles" className="relative w-full py-24 px-6 md:px-16 bg-[#080808] text-white z-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-white/10">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-[#FF3D00] mb-2 block">
              Competitive Programming
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Coding Profiles
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/60 leading-relaxed md:text-right">
            My journey across various platforms, solving complex algorithmic challenges and data science problems.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {codingProfiles.map((profile) => (
            <a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between group relative overflow-hidden"
            >
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ backgroundColor: profile.color }}
              />

              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 p-2.5 flex items-center justify-center">
                  <img
                    src={profile.icon}
                    alt={profile.platform}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
                <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#FF3D00] transition-colors">
                  {profile.platform}
                </h3>
                <p className="text-xs font-mono text-white/50 mb-3">@{profile.username}</p>
                <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[0.7rem] font-medium text-white/80 flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-[#FF3D00]" />
                  <span>{profile.stats}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
