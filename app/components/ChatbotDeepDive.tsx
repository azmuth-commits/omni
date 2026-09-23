import React, { useState } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  Zap, 
  Database, 
  Globe2, 
  Clock, 
  UserCheck, 
  ArrowRight,
  RefreshCw,
  Award
} from 'lucide-react';
import { DEMO_CHAT_SIMULATION } from '../data/content';
import { ChatMessage } from './types';

interface ChatbotDeepDiveProps {
  onOpenDemoModal: () => void;
}

export const ChatbotDeepDive: React.FC<ChatbotDeepDiveProps> = ({ onOpenDemoModal }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'bot',
      text: "👋 Welcome to Admissions! I'm Omni Cat AI, your 24/7 campus advisor. Ask me anything about degree programs, application deadlines, tuition aid, or booking a campus tour.",
      timestamp: 'Just now',
      quickReplies: [
        "What are the application deadlines for Fall 2025?",
        "How much is tuition and do you offer merit scholarships?",
        "Can I schedule an in-person campus tour this Saturday?",
        "Tell me about the Computer Science & AI program"
      ]
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [leadCounter, setLeadCounter] = useState(148);
  const [lastSyncStatus, setLastSyncStatus] = useState<string | null>(null);

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    // Append user message
    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Dynamic response lookup or intelligent generative fallback
    setTimeout(() => {
      let botResponseText = DEMO_CHAT_SIMULATION[query];
      let dataPayload: ChatMessage['dataPayload'] = undefined;

      if (!botResponseText) {
        if (query.toLowerCase().includes('tour') || query.toLowerCase().includes('visit')) {
          botResponseText = "I have confirmed an open VIP campus walking tour slot with our student guides for this Saturday at 10:30 AM. Would you like me to reserve your name on the guest register?";
          dataPayload = {
            type: 'tour_schedule',
            title: 'Campus Tour VIP Ticket',
            details: {
              Date: 'Saturday, 10:30 AM',
              Location: 'Admissions Welcome Hall',
              Host: 'Student Ambassador Society',
            }
          };
        } else if (query.toLowerCase().includes('scholarship') || query.toLowerCase().includes('cost') || query.toLowerCase().includes('fee')) {
          botResponseText = "Omni Cat institutions provide automatic merit scholarships starting at a 3.5 GPA, offsetting up to 50% of annual tuition. Need-based institutional grants are also available.";
          dataPayload = {
            type: 'fee_breakdown',
            title: 'Estimated Financial Aid Profile',
            details: {
              'Base Tuition': '$14,200/sem',
              'Merit Grant (Est.)': '-$5,680',
              'Net Payable': '$8,520/sem',
            }
          };
        } else {
          botResponseText = `Thank you for inquiring about "${query}". Omni Cat AI has indexed our full university prospectus. I have logged your profile and will notify the admissions team immediately.`;
          dataPayload = {
            type: 'lead_captured',
            title: 'Applicant Lead Qualified',
            details: {
              'Intent Score': '94 / 100 (High)',
              'Routing': 'Senior Admissions Counselor',
              'ERP Sync': 'Student Information System #ADM-984',
            }
          };
        }
      } else {
        // Known preset response payload
        dataPayload = {
          type: 'lead_captured',
          title: 'Admissions Inquiry Captured',
          details: {
            'Source': 'Website Conversational Bot',
            'Lead Status': 'Verified Qualified Prospect',
            'ERP CRM Status': 'In Review Queue'
          }
        };
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botResponseText,
        timestamp: 'Just now',
        dataPayload,
        quickReplies: [
          "Book my campus tour",
          "Speak with an admissions advisor",
          "Check scholarship eligibility"
        ]
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
      setLeadCounter((c) => c + 1);
      setLastSyncStatus(`ERP Synced • Lead #${leadCounter + 1}`);
    }, 850);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'init-1',
        sender: 'bot',
        text: "👋 Welcome to Admissions! I'm Omni Cat AI, your 24/7 campus advisor. Ask me anything about degree programs, application deadlines, tuition aid, or booking a campus tour.",
        timestamp: 'Just now',
        quickReplies: [
          "What are the application deadlines for Fall 2025?",
          "How much is tuition and do you offer merit scholarships?",
          "Can I schedule an in-person campus tour this Saturday?",
          "Tell me about the Computer Science & AI program"
        ]
      }
    ]);
  };

  return (
    <section id="ai-chatbot-deepdive" className="py-20 md:py-28 relative bg-[#090d16] border-y border-slate-800/80">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Bot className="w-4 h-4 text-amber-400" />
            <span>Product Deep Dive</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk',sans-serif]">
            Turn Website Traffic into Enrolled Students 24/7
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            68% of prospective student research happens after 6:00 PM when admissions offices are closed. Omni Cat&apos;s AI Admissions &amp; Sales Bot instantly captures, qualifies, and guides every applicant through the enrollment funnel.
          </p>
        </div>

        {/* Two-Column Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: 4 Strategic Superpowers */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:scale-105 transition-transform">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    Zero Lost Opportunities &amp; 3-Second Response
                  </h3>
                  <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                    Instantly resolves 90%+ of repetitive admission questions on fees, eligibility, and visa requirements without keeping prospective students waiting on hold.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/30 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-105 transition-transform">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    Automated Campus Tour &amp; Interview Booking
                  </h3>
                  <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                    Syncs two-way with admissions officers&apos; calendars. Sends automated SMS and WhatsApp confirmation passes with QR tickets for campus arrival.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-105 transition-transform">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    Direct Zero-Latency ERP &amp; CRM Synchronization
                  </h3>
                  <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                    No manual CSV exports. Captured contact info, high-school grades, and target programs flow directly into Omni Cat&apos;s Student Information System.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-105 transition-transform">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    Multilingual International Recruitment
                  </h3>
                  <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                    Supports 40+ native languages automatically. International students and parents can ask questions in their mother tongue while admissions staff review translated summaries.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDemoModal}
                className="px-7 py-3.5 text-sm font-bold text-white bg-amber-600 hover:bg-amber-500 rounded-xl shadow-lg shadow-amber-600/30 transition-all flex items-center gap-2"
              >
                <span>Deploy AI Bot on Your Campus Website</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Live Simulated Chatbot Console */}
          <div className="lg:col-span-6">
            <div 
              id="live-chatbot-simulator-card"
              className="bg-[#0c1222] border border-slate-700/90 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[580px] relative"
            >
              {/* Simulator Header */}
              <div className="p-4 bg-[#080d1a] border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-rose-600 flex items-center justify-center text-white shadow-md">
                      <Bot className="w-5 h-5" />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#080d1a]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-white">Omni Cat Admissions AI</h4>
                      <span className="text-[10px] px-2 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                        Online
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400">Live Campus Prospect Simulator</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleResetChat}
                    title="Reset Simulator"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Message Feed Area */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-gradient-to-b from-[#0c1222] to-[#070b14]">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-indigo-600 text-white rounded-tr-none shadow-md'
                          : 'bg-slate-800/90 text-slate-100 rounded-tl-none border border-slate-700/60 shadow-md'
                      }`}
                    >
                      <p>{msg.text}</p>

                      {/* Structured Lead or Ticket Payload Card */}
                      {msg.dataPayload && (
                        <div className="mt-3 p-2.5 rounded-xl bg-slate-900/90 border border-amber-500/30 text-xs space-y-1.5">
                          <div className="flex items-center justify-between text-amber-300 font-semibold border-b border-slate-800 pb-1">
                            <span className="flex items-center gap-1.5">
                              <Sparkles className="w-3 h-3 text-amber-400" />
                              {msg.dataPayload.title}
                            </span>
                            <span className="text-[10px] text-emerald-400 font-mono">Verified</span>
                          </div>
                          {msg.dataPayload.details && (
                            <div className="grid grid-cols-1 gap-1 text-[11px] text-slate-300">
                              {Object.entries(msg.dataPayload.details).map(([k, v]) => (
                                <div key={k} className="flex justify-between">
                                  <span className="text-slate-400">{k}:</span>
                                  <span className="font-medium text-white">{v}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Quick Reply Pills on latest bot response */}
                    {msg.quickReplies && msg.id === messages[messages.length - 1]?.id && (
                      <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[90%]">
                        {msg.quickReplies.map((qr, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSendMessage(qr)}
                            className="text-[11px] px-3 py-1 rounded-full bg-slate-800/80 hover:bg-slate-700 text-indigo-300 hover:text-white border border-slate-700 transition-colors text-left"
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
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                )}
              </div>

              {/* Bottom Sync Status Bar */}
              <div className="px-4 py-2 bg-[#090d18] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {lastSyncStatus || 'ERP Admissions Pipeline Ready'}
                </span>
                <span className="font-mono text-slate-400">{leadCounter} leads captured today</span>
              </div>

              {/* Input Box */}
              <div className="p-3 bg-[#080d1a] border-t border-slate-800 flex items-center gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type an admissions inquiry (e.g., 'MBA tuition?')..."
                  className="flex-1 bg-slate-900 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-500/60"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputText.trim() || isTyping}
                  className="p-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 disabled:opacity-40 text-white transition-all shadow-md"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
