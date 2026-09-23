import React, { useState } from 'react';
import { 
  ArrowRight, 
  Bot, 
  Sparkles, 
  GraduationCap, 
  BookOpenCheck, 
  TrendingUp, 
  CheckCircle2, 
  Users, 
  Clock, 
  DollarSign,
  ShieldCheck,
  ChevronRight,
  Play
} from 'lucide-react';
import { INSTITUTION_LOGOS } from '../data/content';

interface HeroProps {
  onOpenDemoModal: () => void;
  onOpenChatbotModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemoModal, onOpenChatbotModal }) => {
  const [activeDashboardTab, setActiveDashboardTab] = useState<'erp' | 'lms' | 'chatbot'>('erp');

  return (
    <section id="hero-section" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/10 blur-[130px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600/10 blur-[90px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <div 
            id="hero-badge"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium shadow-inner shadow-indigo-500/20 hover:border-indigo-400/50 transition-colors cursor-default"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="font-semibold text-white">Omni Cat 3.0:</span>
            <span>Next-Gen Unified Campus OS & AI Admissions Engine</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          </div>
        </div>

        {/* Hero Headlines */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] font-['Space_Grotesk',sans-serif]">
            The All-in-One AI Ecosystem for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
              Modern Education.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Transform campus administration, elevate learning, and boost student enrollment with Omni Cat&apos;s enterprise ERPs, adaptive LMS, and 24/7 AI Admissions Sales Chatbot.
          </p>

          {/* High-Impact CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="hero-contact-sales-btn"
              onClick={onOpenDemoModal}
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:to-purple-500 rounded-2xl shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all flex items-center justify-center gap-3 active:scale-98 group"
            >
              <span>Contact for Sales</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-try-chatbot-btn"
              onClick={onOpenChatbotModal}
              className="w-full sm:w-auto px-7 py-4 text-base font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-indigo-500/50 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg group"
            >
              <Bot className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>Test Drive AI Admissions Bot</span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                Live
              </span>
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-10 pt-6 border-t border-slate-800/60 max-w-2xl mx-auto grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk',sans-serif]">+42%</div>
              <div className="text-xs text-slate-400 mt-0.5">Admissions Yield</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-['Space_Grotesk',sans-serif]">65%</div>
              <div className="text-xs text-slate-400 mt-0.5">Admin Time Saved</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-['Space_Grotesk',sans-serif]">2.4M+</div>
              <div className="text-xs text-slate-400 mt-0.5">Active Learners</div>
            </div>
          </div>
        </div>

        {/* Social Proof Banner */}
        <div className="mt-14 pt-8 pb-4">
          <p className="text-center text-xs uppercase tracking-widest font-semibold text-slate-400 mb-6">
            Trusted by 500+ forward-thinking universities, colleges &amp; school districts worldwide
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {INSTITUTION_LOGOS.map((inst, idx) => (
              <div
                key={idx}
                id={`hero-logo-${idx}`}
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold font-mono">
                    {inst.initials}
                  </div>
                  <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors truncate max-w-[120px]">
                    {inst.name.split(' ')[0]}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 mt-1">{inst.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Dashboard Preview Illustration */}
        <div className="mt-12 relative max-w-5xl mx-auto">
          {/* Ambient Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-cyan-500/30 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 -z-10" />

          {/* Main Dashboard Container */}
          <div 
            id="hero-dashboard-mockup"
            className="bg-[#0f172a] border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden"
          >
            {/* Window Topbar */}
            <div className="px-4 py-3 bg-[#0a0f1d] border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs text-slate-400 font-mono pl-2 border-l border-slate-800">
                  omnicat-cloud.campus.net/control-center
                </span>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs">
                <button
                  id="tab-view-erp"
                  onClick={() => setActiveDashboardTab('erp')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                    activeDashboardTab === 'erp' 
                      ? 'bg-indigo-600 text-white shadow' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>ERP Intelligence</span>
                </button>

                <button
                  id="tab-view-lms"
                  onClick={() => setActiveDashboardTab('lms')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                    activeDashboardTab === 'lms' 
                      ? 'bg-indigo-600 text-white shadow' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <BookOpenCheck className="w-3.5 h-3.5" />
                  <span>Adaptive LMS</span>
                </button>

                <button
                  id="tab-view-chatbot"
                  onClick={() => setActiveDashboardTab('chatbot')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                    activeDashboardTab === 'chatbot' 
                      ? 'bg-amber-600 text-white shadow' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Bot className="w-3.5 h-3.5" />
                  <span>Admissions Bot Live</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </button>
              </div>

              <div className="hidden md:flex items-center gap-2 text-xs text-emerald-400 font-medium bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                System Live • Multi-Campus Sync
              </div>
            </div>

            {/* Dashboard Content Panes */}
            <div className="p-4 sm:p-6 bg-gradient-to-b from-[#0f172a] to-[#090d16]">
              {/* TAB 1: ERP INTELLIGENCE */}
              {activeDashboardTab === 'erp' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  {/* KPI Row */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Total Enrolled</span>
                        <Users className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="text-2xl font-bold text-white mt-2 font-['Space_Grotesk',sans-serif]">18,420</div>
                      <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> +12.4% vs last academic year
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Term Fee Realization</span>
                        <span className="text-emerald-400 font-bold text-sm">₹</span>
                      </div>
                      <div className="text-2xl font-bold text-white mt-2 font-['Space_Grotesk',sans-serif]">₹48.6 Cr</div>
                      <div className="text-xs text-emerald-400 mt-1">99.4% on-schedule UPI collections</div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Campus Attendance</span>
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div className="text-2xl font-bold text-white mt-2 font-['Space_Grotesk',sans-serif]">94.8%</div>
                      <div className="text-xs text-slate-400 mt-1">Biometric &amp; App Check-in</div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Timetable Clashes</span>
                        <Clock className="w-4 h-4 text-purple-400" />
                      </div>
                      <div className="text-2xl font-bold text-emerald-400 mt-2 font-['Space_Grotesk',sans-serif]">0</div>
                      <div className="text-xs text-slate-400 mt-1">AI automated scheduling</div>
                    </div>
                  </div>

                  {/* Main Grid: Enrollment Flow & Department Status */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-2 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                        <div>
                          <h4 className="text-sm font-semibold text-white">Enrollment &amp; Admissions Conversion Pipeline</h4>
                          <p className="text-xs text-slate-400">Real-time sync between Website Bot &amp; Registrar records</p>
                        </div>
                        <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded">Fall Term</span>
                      </div>

                      <div className="mt-4 space-y-3">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-slate-300">Website Inquiries &amp; Bot Leads</span>
                            <span className="text-white font-semibold">14,280 applicants (100%)</span>
                          </div>
                          <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-slate-300">AI Qualified &amp; Tour Booked</span>
                            <span className="text-white font-semibold">8,450 candidates (59.2%)</span>
                          </div>
                          <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                            <div className="w-[59%] h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-slate-300">Formal Applications Submitted</span>
                            <span className="text-white font-semibold">4,120 completed (28.8%)</span>
                          </div>
                          <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                            <div className="w-[29%] h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-slate-300">Accepted &amp; Fees Settled</span>
                            <span className="text-emerald-400 font-semibold">2,480 enrolled (17.4% final yield)</span>
                          </div>
                          <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                            <div className="w-[17.4%] h-full bg-gradient-to-r from-pink-500 to-emerald-400 rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Department Quick List */}
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                      <div className="text-sm font-semibold text-white">Active Campuses</div>
                      <div className="space-y-2">
                        {[
                          { name: 'Bengaluru Tech Campus', students: '8,400', health: '99%' },
                          { name: 'Pune Engineering Autonomous', students: '6,200', health: '99%' },
                          { name: 'Delhi NCR Business & Law', students: '5,100', health: '98%' },
                          { name: 'Hyderabad Science Hub', students: '3,800', health: '96%' },
                        ].map((dept, i) => (
                          <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-slate-800/40 text-xs">
                            <span className="text-slate-300 truncate max-w-[140px]">{dept.name}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-slate-400">{dept.students}</span>
                              <span className="text-emerald-400 font-medium">{dept.health}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="pt-2 text-center">
                        <button 
                          onClick={onOpenDemoModal}
                          className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center justify-center gap-1 w-full"
                        >
                          Launch Multi-Campus Cockpit &rarr;
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: ADAPTIVE LMS */}
              {activeDashboardTab === 'lms' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="text-xs text-slate-400">AI Grading Queue</div>
                      <div className="text-2xl font-bold text-white mt-1">342 Submissions</div>
                      <div className="text-xs text-purple-400 mt-1">AI Rubric analysis: 4.8s avg</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="text-xs text-slate-400">Course Completion Rate</div>
                      <div className="text-2xl font-bold text-emerald-400 mt-1">88.5%</div>
                      <div className="text-xs text-slate-400 mt-1">+16% higher than legacy LMS</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="text-xs text-slate-400">Proctored Exams Today</div>
                      <div className="text-2xl font-bold text-cyan-400 mt-1">18 Sessions</div>
                      <div className="text-xs text-emerald-400 mt-1">Zero security flags detected</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                        <h4 className="text-sm font-semibold text-white">Live AI Grading Assistant in Action</h4>
                      </div>
                      <span className="text-xs text-purple-300 bg-purple-500/20 px-2.5 py-1 rounded-full border border-purple-500/30">
                        Rubric Match: 96%
                      </span>
                    </div>

                    <div className="mt-4 p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-xs space-y-2">
                      <div className="flex justify-between text-slate-400">
                        <span>Assignment: Neural Architectures (CS402)</span>
                        <span className="text-slate-300 font-mono">Student: Maya Lin</span>
                      </div>
                      <div className="p-3 bg-slate-900/80 rounded border-l-2 border-purple-500 text-slate-200 leading-relaxed font-sans">
                        <span className="text-purple-300 font-semibold">AI Grading Co-Pilot Note: </span>
                        &quot;Strong mathematical formulation of the transformer attention layer. Evidence of empirical benchmarking in section 3.2 exceeds expectations. Suggested mark: 94/100.&quot;
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[11px] text-slate-400">Awaiting Professor Approval</span>
                        <div className="flex gap-2">
                          <button 
                            onClick={onOpenDemoModal}
                            className="px-2.5 py-1 bg-purple-600 hover:bg-purple-500 text-white rounded text-[11px] font-semibold"
                          >
                            Approve &amp; Post Grade
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: ADMISSIONS CHATBOT LIVE */}
              {activeDashboardTab === 'chatbot' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="text-xs text-slate-400">Today&apos;s Web &amp; WhatsApp Inquiries</div>
                      <div className="text-2xl font-bold text-amber-400 mt-1">1,248</div>
                      <div className="text-xs text-emerald-400 mt-1">91% resolved autonomously</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="text-xs text-slate-400">Campus Tours Booked</div>
                      <div className="text-2xl font-bold text-white mt-1">84 Visits</div>
                      <div className="text-xs text-slate-400 mt-1">Direct calendar sync to staff</div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="text-xs text-slate-400">Average Response Time</div>
                      <div className="text-2xl font-bold text-cyan-400 mt-1">1.8 Seconds</div>
                      <div className="text-xs text-emerald-400 mt-1">24/7/365 active coverage</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        <h4 className="text-sm font-semibold text-white">Live Admissions Bot Conversation Stream</h4>
                      </div>
                      <button 
                        onClick={onOpenChatbotModal}
                        className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
                      >
                        Open Full Live Simulator &rarr;
                      </button>
                    </div>

                    <div className="mt-3 space-y-2.5">
                      <div className="flex items-start gap-2.5">
                        <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-[10px] text-slate-300">
                          User
                        </div>
                        <div className="bg-slate-800/80 rounded-xl rounded-tl-none p-2.5 text-xs text-slate-200 max-w-md">
                          &quot;Does your college provide fee concessions for 90%+ marks in 12th Board for B.Tech CS?&quot;
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] text-white">
                          <Bot className="w-3.5 h-3.5" />
                        </div>
                        <div className="bg-indigo-950/70 border border-indigo-500/30 rounded-xl rounded-tl-none p-2.5 text-xs text-slate-100 max-w-md space-y-2">
                          <p>
                            &quot;Yes! Candidates scoring 90%+ in 12th Board or 95+ percentile in JEE Mains receive an instant 50% Tuition Fee Concession (₹72,500/year scholarship).&quot;
                          </p>
                          <div className="p-2 bg-slate-900/80 rounded border border-indigo-500/20 text-[11px] text-indigo-300 flex items-center justify-between">
                            <span>⚡ Lead captured via WhatsApp &amp; tagged High-Intent</span>
                            <span className="font-semibold text-emerald-400">Synced to ERP</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Cockpit Bar */}
            <div className="px-6 py-3 bg-[#0a0f1d] border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  NEP 2020 &amp; Indian DPDP Act 2023 Compliant Cloud
                </span>
                <span className="hidden sm:inline text-slate-600">•</span>
                <span className="hidden sm:inline">Zero-downtime data migration for ongoing sessions</span>
              </div>
              <button
                onClick={onOpenDemoModal}
                className="text-indigo-400 hover:text-white font-semibold flex items-center gap-1 transition-colors"
              >
                <span>Contact for Sales Architecture Plan</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
