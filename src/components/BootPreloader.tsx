import React, { useEffect, useState } from 'react';

interface BootPreloaderProps {
  onComplete: () => void;
}

export const BootPreloader: React.FC<BootPreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const duration = 1800; // ms
    const interval = 20;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 700);
          }, 300);
          return 100;
        }
        return Math.min(100, Math.floor(prev + increment + Math.random() * 2));
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`preloader-modern fixed inset-0 w-full h-full bg-[#050505] z-[10000] flex flex-col items-center justify-center text-white overflow-hidden ${
        isFinished ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        clipPath: isFinished ? 'inset(0 0 100% 0)' : 'inset(0 0 0 0)',
      }}
    >
      {/* Sci-fi helmet/loader visual container */}
      <div className="w-[180px] h-[180px] flex items-center justify-center relative mb-4">
        <div className="absolute inset-0 rounded-full border border-white/10 animate-spin-slow" />
        <div className="absolute inset-3 rounded-full border border-dashed border-[#FF3D00]/30 animate-pulse-slow" />
        
        {/* Futuristic SVG Helmet Icon */}
        <svg
          className="w-24 h-24 text-white filter drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] animate-pulse"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 3.87 2.2 7.23 5.4 8.87.5.25.6.5.6.8v.33c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-.33c0-.3.1-.55.6-.8 3.2-1.64 5.4-5 5.4-8.87 0-5.52-4.48-10-10-10z" />
          <path d="M9 10h6" />
          <path d="M9 14h6" />
          <circle cx="12" cy="12" r="9" strokeOpacity="0.3" />
        </svg>
      </div>

      {/* Progress Bar Container */}
      <div className="w-[200px] h-[2px] bg-white/10 relative overflow-hidden mt-4 rounded-full">
        <div
          className="h-full bg-white transition-all duration-75 ease-out shadow-[0_0_12px_#ffffff]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Counter Percentage */}
      <div className="mt-4 text-[0.7rem] uppercase tracking-[0.3em] font-mono opacity-50 font-bold">
        {progress}%
      </div>
    </div>
  );
};
