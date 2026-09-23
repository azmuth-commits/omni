import React, { useState } from 'react';
import { Bot, Sparkles, X } from 'lucide-react';

interface FloatingChatTriggerProps {
  onOpen: () => void;
  isOpen: boolean;
}

export const FloatingChatTrigger: React.FC<FloatingChatTriggerProps> = ({ onOpen, isOpen }) => {
  const [dismissedBubble, setDismissedBubble] = useState(false);

  if (isOpen) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 select-none">
      {/* Friendly Speech Bubble Callout */}
      {!dismissedBubble && (
        <div className="bg-[#0f172a] border border-amber-500/40 text-slate-100 px-4 py-2.5 rounded-2xl shadow-xl max-w-[260px] text-xs animate-in slide-in-from-bottom-2 fade-in relative group">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setDismissedBubble(true);
            }}
            className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-white text-[10px]"
            aria-label="Dismiss chat prompt"
          >
            <X className="w-2.5 h-2.5" />
          </button>
          <div className="flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-amber-300">Omni Cat Admissions AI:</span>
              <p className="text-slate-300 text-[11px] mt-0.5">
                Test how our bot converts prospective students 24/7. Click to ask a question!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        id="floating-ai-chatbot-btn"
        onClick={onOpen}
        aria-label="Open Admissions AI Chatbot"
        className="relative p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 text-white shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all group flex items-center gap-2.5"
      >
        <Bot className="w-6 h-6 animate-pulse group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline text-xs font-bold font-['Space_Grotesk',sans-serif]">
          Ask AI Admissions Bot
        </span>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
      </button>
    </div>
  );
};
