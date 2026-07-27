import React, { useState } from 'react';
import { BootPreloader } from './components/BootPreloader';
import { CustomCursor } from './components/CustomCursor';
import { GridOverlay } from './components/GridOverlay';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CoreStackSection } from './components/CoreStackSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CodingProfilesSection } from './components/CodingProfilesSection';
import { ContactFooter } from './components/ContactFooter';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-amber-400 selection:text-black">
      {/* Boot Preloader */}
      {isLoading && <BootPreloader onComplete={() => setIsLoading(false)} />}

      {/* Custom Follower Cursor */}
      <CustomCursor />

      {/* Background Cyber Grid */}
      <GridOverlay />

      {/* Floating Glass Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Layer */}
      <main className="relative z-10">
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
        <AboutSection onOpenResume={() => setIsResumeOpen(true)} />
        <CoreStackSection />
        <ProjectsSection />
        <CodingProfilesSection />
        <ContactFooter />
      </main>

      {/* Interactive Official Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};
