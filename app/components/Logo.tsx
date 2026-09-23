import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const iconSize = size === 'sm' ? 'w-7 h-7' : size === 'lg' ? 'w-11 h-11' : 'w-9 h-9';
  const textSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';
  const badgeSize = size === 'sm' ? 'text-[9px] px-1.5' : 'text-[10px] px-2';

  return (
    <a href="#" className={`flex items-center gap-2.5 group select-none ${className}`} id="brand-logo-link">
      {/* Tech-Cat Brand Mark */}
      <div className={`relative ${iconSize} rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-cyan-400 p-[1.5px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300`}>
        <div className="w-full h-full bg-[#0d1322] rounded-[10px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle tech grid background */}
          <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:6px_6px] opacity-25" />
          
          {/* Geometric Tech-Cat Icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-5 h-5 text-indigo-400 relative z-10 transition-transform duration-300 group-hover:scale-110"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Cat Ears */}
            <path d="M4 14V6l4 3h8l4-3v8" />
            {/* Cat Jawline & Modern Chin */}
            <path d="M4 14a8 8 0 0 0 16 0" />
            {/* Tech Nodes (Eyes) */}
            <circle cx="8.5" cy="12.5" r="1.25" fill="#38bdf8" className="animate-pulse" />
            <circle cx="15.5" cy="12.5" r="1.25" fill="#818cf8" className="animate-pulse" />
            {/* AI Whiskers / Connection beams */}
            <path d="M9 16l-3 1" stroke="#818cf8" strokeWidth="1.5" />
            <path d="M15 16l3 1" stroke="#38bdf8" strokeWidth="1.5" />
            {/* Nose node */}
            <polygon points="12,14.5 11,16 13,16" fill="#a855f7" />
          </svg>
        </div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-extrabold tracking-tight text-white font-['Space_Grotesk',sans-serif] ${textSize}`}>
            Omni<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">Cat</span>
          </span>
          <span className={`rounded-full font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 ${badgeSize}`}>
            AI EdTech
          </span>
        </div>
      </div>
    </a>
  );
};
