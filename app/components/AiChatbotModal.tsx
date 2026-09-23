import React, { useState } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  RefreshCw, 
  MessageSquare,
  ChevronDown
} from 'lucide-react';
import { DEMO_CHAT_SIMULATION } from '../data/content';
import { ChatMessage } from './types';

interface AiChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDemoModal: () => void;
}

export const AiChatbotModal: React.FC<AiChatbotModalProps> = ({ 
  isOpen, 
  onClose,
  onOpenDemoModal 
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm-init',
      sender: 'bot',
      text: "🎓 Welcome to Omni Cat Admissions AI! I am an interactive demo of the student recruitment bot that sits on your campus website. Try asking me about tuition, degrees, or booking a campus tour.",
      timestamp: 'Just now',
      quickReplies: [
        "What are the application deadlines for Fall 2025?",
        "How much is tuition and do you offer merit scholarships?",
        "Can I schedule an in-person campus tour this Saturday?",
        "Tell me about the Computer Science & AI program"
      ]
    }
  ]);

  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [erpSyncNotice, setErpSyncNotice] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputVal).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = DEMO_CHAT_SIMULATION[text];
      let dataPayload: ChatMessage['dataPayload'] = undefined;

      if (!reply) {
        if (text.toLowerCase().includes('tour') || text.toLowerCase().includes('visit')) {
          reply = "I've reserved your slot for this Saturday's Student Ambassador Campus Tour at 10:30 AM! A digital visitor badge has been generated.";
          dataPayload = {
            type: 'tour_schedule',
            title: 'Campus Tour Reserved',
            details: {
              Slot: 'Saturday, 10:30 AM',
              CheckIn: 'Main Quad Center',
              PassCode: '#OMNI-VISIT-829',
            }
          };
        } else if (text.toLowerCase().includes('fee') || text.toLowerCase().includes('cost') || text.toLowerCase().includes('scholarship')) {
          reply = "Base tuition is $14,200/semester. Applicants with a 3.6+ GPA receive automatic consideration for our 50% President's STEM Fellowship.";
          dataPayload = {
            type: 'fee_breakdown',
            title: 'Institutional Aid Calculator',
            details: {
              'Gross Tuition': '$14,200',
              'Presidential Award': '-$7,100',
              'Net Tuition': '$7,100/sem',
            }
          };
        } else {
          reply = `I have recorded your interest in "${text}". Omni Cat automatically qualifies prospective student questions and routes them directly to admissions staff.`;
          dataPayload = {
            type: 'lead_captured',
            title: 'Lead Profile Synchronized',
            details: {
              'Intent Score': '96 / 100',
              'Lead Route': 'Admissions Officer Queue',
              'Status': 'CRM Record Created',
            }
          };
        }
      } else {
        dataPayload = {
          type: 'lead_captured',
          title: 'Admissions Inquiry Captured',
          details: {
            'Source': 'Web AI Chatbot',
            'ERP Sync': 'Active (Lead #294)',
          }
        };
      }

      const botMsg: ChatMessage = {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: reply,
        timestamp: 'Just now',
        dataPayload,
        quickReplies: [
          "Book a personalized campus tour",
          "What are the GPA requirements?",
          "How does Omni Cat sync with our ERP?"
        ]
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
      setErpSyncNotice("Instant ERP Push • SIS Record #ADM-" + Math.floor(1000 + Math.random() * 9000));
    }, 700);
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'm-init',
        sender: 'bot',
        text: "🎓 Welcome to Omni Cat Admissions AI! I am an interactive demo of the student recruitment bot that sits on your campus website. Try asking me about tuition, degrees, or booking a campus tour.",
        timestamp: 'Just now',
        quickReplies: [
          "What are the application deadlines for Fall 2025?",
          "How much is tuition and do you offer merit scholarships?",
          "Can I schedule an in-person campus tour this Saturday?",
          "Tell me about the Computer Science & AI program"
        ]
      }
    ]);
    setErpSyncNotice(null);
  };

  return (
    <div 
      id="ai-chatbot-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div 
        id="ai-chatbot-modal-container"
        className="w-full max-w-2xl bg-[#0c1222] border border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[640px] max-h-[92vh] animate-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="p-4 sm:px-6 bg-[#080d1a] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-rose-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white">Omni Cat Admissions AI</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                  Live Preview
                </span>
              </div>
              <p className="text-xs text-slate-400">Interactive Student Acquisition Assistant</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              title="Reset Conversation"
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Message Feed */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-gradient-to-b from-[#0c1222] to-[#070b14]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] p-3.5 sm:p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-indigo-600 text-white rounded-tr-none shadow-md'
                    : 'bg-slate-800/90 text-slate-100 rounded-tl-none border border-slate-700/60 shadow-md'
                }`}
              >
                <p>{msg.text}</p>

                {msg.dataPayload && (
                  <div className="mt-3 p-3 rounded-xl bg-slate-900/90 border border-amber-500/30 text-xs space-y-2">
                    <div className="flex items-center justify-between text-amber-300 font-bold border-b border-slate-800 pb-1">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        {msg.dataPayload.title}
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono">ERP Real-Time Push</span>
                    </div>
                    {msg.dataPayload.details && (
                      <div className="grid grid-cols-1 gap-1 text-[11px]">
                        {Object.entries(msg.dataPayload.details).map(([k, v]) => (
                          <div key={k} className="flex justify-between">
                            <span className="text-slate-400">{k}:</span>
                            <span className="font-semibold text-white">{v}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {msg.quickReplies && msg.id === messages[messages.length - 1]?.id && (
                <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[90%]">
                  {msg.quickReplies.map((qr, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(qr)}
                      className="text-[11px] px-3 py-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-indigo-300 hover:text-white border border-slate-700 transition-colors text-left"
                    >
                      {qr}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 p-3 bg-slate-800/60 rounded-2xl rounded-tl-none max-w-[120px] text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce [animation-delay:0.4s]" />
            </div>
          )}
        </div>

        {/* Real-time ERP sync banner */}
        <div className="px-4 py-2 bg-[#090d18] border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {erpSyncNotice || 'Admissions SIS Live Integration Enabled'}
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenDemoModal();
            }}
            className="text-xs text-indigo-400 hover:text-white underline font-semibold"
          >
            Deploy on Your Site &rarr;
          </button>
        </div>

        {/* Input area */}
        <div className="p-3 sm:p-4 bg-[#080d1a] border-t border-slate-800 flex items-center gap-2">
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your admissions question here..."
            className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-500"
          />
          <button
            onClick={() => handleSend()}
            disabled={!inputVal.trim() || isTyping}
            className="p-3 rounded-xl bg-amber-600 hover:bg-amber-500 disabled:opacity-40 text-white transition-all shadow-md"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
