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
      {/* Data Analytics Brand Loader Visual Container */}
      <div className="w-[180px] h-[180px] flex items-center justify-center relative mb-4">
        <div className="absolute inset-0 rounded-full border border-white/10 animate-spin-slow" />
        <div className="absolute inset-3 rounded-full border border-dashed border-amber-400/30 animate-pulse-slow" />
        
        {/* Sleek Professional Data & Code Monogram Logo */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <svg
            className="w-20 h-20 text-white filter drop-shadow-[0_0_18px_rgba(251,191,36,0.5)] transition-transform duration-500"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Hexagonal Tech Node Frame */}
            <polygon
              points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
              stroke="#FBBF24"
              strokeWidth="2.5"
              strokeDasharray="4 4"
              className="animate-pulse"
            />
            {/* Inner Core Data Nodes */}
            <circle cx="50" cy="50" r="32" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" />
            <path
              d="M32 38 C32 32, 68 32, 68 38 C68 44, 32 46, 32 54 C32 64, 68 64, 68 58"
              stroke="#FBBF24"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M42 66 L58 34"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Data Pipeline Connection Dots */}
            <circle cx="50" cy="5" r="3" fill="#FBBF24" />
            <circle cx="90" cy="27.5" r="3" fill="#FBBF24" />
            <circle cx="90" cy="72.5" r="3" fill="#FBBF24" />
            <circle cx="50" cy="95" r="3" fill="#FBBF24" />
            <circle cx="10" cy="72.5" r="3" fill="#FBBF24" />
            <circle cx="10" cy="27.5" r="3" fill="#FBBF24" />
          </svg>
        </div>
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
