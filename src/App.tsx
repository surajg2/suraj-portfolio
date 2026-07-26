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

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#FF3D00] selection:text-white">
      {/* Boot Preloader */}
      {isLoading && <BootPreloader onComplete={() => setIsLoading(false)} />}

      {/* Custom Follower Cursor */}
      <CustomCursor />

      {/* Background Cyber Grid */}
      <GridOverlay />

      {/* Floating Glass Navbar (Hidden as requested) */}
      {/* <Navbar /> */}

      {/* Main Content Layer */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <CoreStackSection />
        <ProjectsSection />
        <CodingProfilesSection />
        <ContactFooter />
      </main>
    </div>
  );
};
