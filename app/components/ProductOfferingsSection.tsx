import React, { useState } from 'react';
import { 
  GraduationCap, 
  Building2, 
  School, 
  BookOpenCheck, 
  Bot, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Table,
  Zap
} from 'lucide-react';
import { ProductId } from './types';

interface ProductOfferingsSectionProps {
  onSelectProduct: (id: ProductId) => void;
  onOpenDemoModal: () => void;
  onOpenChatbotModal: () => void;
}

export const ProductOfferingsSection: React.FC<ProductOfferingsSectionProps> = ({
  onSelectProduct,
  onOpenDemoModal,
  onOpenChatbotModal,
}) => {
  const [showMatrix, setShowMatrix] = useState(false);

  const offerings = [
    {
      id: 'university-erp' as ProductId,
      number: '01',
      name: 'University ERP',
      target: 'Multi-Campus Universities & Research Institutions',
      badge: 'Enterprise Tier',
      badgeColor: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
      gradient: 'from-blue-600 via-indigo-600 to-blue-700',
      icon: GraduationCap,
      headline: 'Comprehensive Governance & Research Grant Administration',
      description: 'End-to-end multi-campus academic governance, sponsored research tracking, automated degree auditing, and faculty tenure portfolios for institutions with 10,000+ students.',
      capabilities: [
        'Multi-campus roll-up analytics & federated governance',
        'IRB compliance, research grants & funding allocations',
        'Automated prerequisite validation & degree audit rules',
        'Faculty tenure portfolios & teaching load balancing',
      ],
      metric: '100K+ Concurrent Concurrency',
      metricLabel: 'High-volume reliability',
      ctaText: 'Explore University Suite',
    },
    {
      id: 'college-erp' as ProductId,
      number: '02',
      name: 'College ERP',
      target: 'Autonomous & Affiliated Degree Colleges',
      badge: 'Fast Implementation',
      badgeColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
      gradient: 'from-cyan-600 via-blue-600 to-indigo-700',
      icon: Building2,
      headline: 'Streamlined Department Management & Semester Operations',
      description: 'Eliminates departmental silos, automates semester schedules with zero lecture hall conflicts, coordinates corporate placement drives, and tracks tuition reconciliation in real time.',
      capabilities: [
        'AI dynamic timetable & zero-conflict lecture hall allocation',
        'Campus placement cell with recruiter portals & analytics',
        'Multi-bank semester fee reconciliation & scholarship quotas',
        'Automated hall tickets, barcoded grading & GPA calculation',
      ],
      metric: '99.4% Fee Realization',
      metricLabel: 'Automated collections',
      ctaText: 'Explore College Suite',
    },
    {
      id: 'school-erp' as ProductId,
      number: '03',
      name: 'School ERP',
      target: 'K-12 Schools, Academies & School Districts',
      badge: 'Parent & Safety Favorite',
      badgeColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
      gradient: 'from-emerald-600 via-teal-600 to-cyan-700',
      icon: School,
      headline: 'Connected, Safe & Transparent K-12 Campus Operations',
      description: 'A unified mobile and web platform connecting school heads, teachers, and parents. Real-time GPS bus tracking, instant homework push alerts, digital report cards, and biometric tap attendance.',
      capabilities: [
        'Live GPS school bus tracking with parent arrival geofencing',
        'Digital gradebook with continuous evaluation & skills remarks',
        'Instant parent-teacher chat, notices & digital leave requests',
        'Biometric / RFID student tap-in attendance with SMS alerts',
      ],
      metric: '96.2% Parent Satisfaction',
      metricLabel: 'Active mobile daily use',
      ctaText: 'Explore School Suite',
    },
    {
      id: 'lms' as ProductId,
      number: '04',
      name: 'Learning Management System (LMS)',
      target: 'K-12, Higher Ed & Hybrid Campuses',
      badge: 'AI-Enhanced',
      badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
      gradient: 'from-purple-600 via-indigo-600 to-pink-700',
      icon: BookOpenCheck,
      headline: 'Interactive Course Delivery, AI Grading & Mastery Analytics',
      description: 'Transforms passive instruction into active mastery. Faculty leverage AI co-pilots to auto-grade written submissions against detailed rubrics, run locked-down online exams, and track student intervention markers.',
      capabilities: [
        'Generative AI grading co-pilot with rubric-aligned feedback',
        'Anti-cheat proctored examination environment & browser locks',
        'SCORM/xAPI compliant multimedia modules & interactive quizzes',
        'Adaptive student mastery radar & early intervention triggers',
      ],
      metric: '75% Grading Time Saved',
      metricLabel: 'Faster feedback loops',
      ctaText: 'Explore LMS Suite',
    },
    {
      id: 'admissions-chatbot' as ProductId,
      number: '05',
      name: 'Admissions & Sales AI Bot',
      target: 'Admissions Offices, Marketing & Recruitment Teams',
      badge: 'High Conversion Engine',
      badgeColor: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
      gradient: 'from-amber-500 via-rose-600 to-purple-700',
      icon: Bot,
      headline: '24/7 Student Inquiry Qualification, Tour Bookings & ERP Sync',
      description: 'Trained on your institutional prospectus, fee policies, and campus life FAQs. Operates 24/7 across Web, WhatsApp, and social media, converting prospective student traffic into enrolled applicants.',
      capabilities: [
        '24/7 instant response across Web, WhatsApp Business & SMS',
        'Dynamic scholarship, GPA eligibility & tuition fee calculator',
        'Automated campus tour bookings synced to admissions calendars',
        'Zero-latency student lead injection into ERP Student Information System',
      ],
      metric: '+42% Admissions Yield',
      metricLabel: 'Completed applications',
      ctaText: 'Try AI Bot Live',
    },
  ];

  const matrixRows = [
    { feature: 'Multi-Campus Roll-up & Central Governance', uni: true, col: false, sch: false, lms: false, bot: false },
    { feature: 'Sponsored Research & Grant Tracking', uni: true, col: false, sch: false, lms: false, bot: false },
    { feature: 'Dynamic AI Timetable & Lecture Hall Scheduler', uni: true, col: true, sch: false, lms: false, bot: false },
    { feature: 'Corporate Placement Cell & Recruiter Portal', uni: true, col: true, sch: false, lms: false, bot: false },
    { feature: 'Live School Bus GPS Tracking & Geofencing', uni: false, col: false, sch: true, lms: false, bot: false },
    { feature: 'Parent-Teacher Communication & Mobile Diary', uni: false, col: false, sch: true, lms: false, bot: false },
    { feature: 'AI-Assisted Essay & Rubric Grading Co-Pilot', uni: false, col: false, sch: false, lms: true, bot: false },
    { feature: 'Anti-Cheat Proctored Exams & Safe Browser', uni: false, col: false, sch: false, lms: true, bot: false },
    { feature: '24/7 Admissions Inquiries & Lead Qualification', uni: false, col: false, sch: false, lms: false, bot: true },
    { feature: 'Automated Campus Tour & Interview Booking', uni: false, col: false, sch: false, lms: false, bot: true },
    { feature: 'Direct Zero-Latency ERP/SIS Data Sync', uni: true, col: true, sch: true, lms: true, bot: true },
    { feature: 'NEP 2020 & Academic Bank of Credits (ABC)', uni: true, col: true, sch: false, lms: false, bot: false },
    { feature: 'NAAC A++ & NBA Outcome Dossier Generator', uni: true, col: true, sch: false, lms: true, bot: false },
    { feature: 'Indian DPDP Act 2023 & ISO 27001 Security', uni: true, col: true, sch: true, lms: true, bot: true },
  ];

  const handleAction = (id: ProductId) => {
    onSelectProduct(id);
    const target = document.getElementById('products-showcase');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="product-offerings-section" className="py-20 md:py-28 relative bg-[#090d16] border-y border-slate-800/80">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Omni Cat Product Suite</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk',sans-serif]">
              5 Core Product Offerings
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore our comprehensive institutional portfolio. Deploy modules independently or unify your entire campus ecosystem under a single AI-powered cloud.
            </p>
          </div>

          {/* Toggle Feature Matrix Button */}
          <div className="flex items-center gap-3">
            <button
              id="toggle-matrix-btn"
              onClick={() => setShowMatrix(!showMatrix)}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 border border-slate-700/80 hover:border-indigo-500/50 transition-all flex items-center gap-2 shadow-md"
            >
              <Table className="w-4 h-4 text-indigo-400" />
              <span>{showMatrix ? 'Hide Comparison Matrix' : 'Compare All 5 Offerings'}</span>
            </button>
            <button
              onClick={onOpenDemoModal}
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30"
            >
              Contact for Sales
            </button>
          </div>
        </div>

        {/* 5 Product Offerings Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((item) => {
            const Icon = item.icon;
            const isBot = item.id === 'admissions-chatbot';
            return (
              <div
                key={item.id}
                id={`offering-card-${item.id}`}
                className="bg-[#0f172a] border border-slate-800 hover:border-slate-700 rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 group hover:shadow-2xl hover:shadow-indigo-500/10 relative overflow-hidden"
              >
                {/* Subtle top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />

                <div className="space-y-4">
                  {/* Top Bar with Number & Badge */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-slate-600 group-hover:text-indigo-400 transition-colors">
                      {item.number}
                    </span>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div>
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-md group-hover:scale-105 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white font-['Space_Grotesk',sans-serif] group-hover:text-indigo-300 transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-[11px] text-slate-400 font-medium block">
                          {item.target}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Headline & Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Key Capabilities Bullet Points */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                      Core Workflows
                    </span>
                    {item.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <Check className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metric Box */}
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400">{item.metricLabel}</div>
                      <div className="text-base font-extrabold text-white font-['Space_Grotesk',sans-serif]">
                        {item.metric}
                      </div>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>

                {/* Card Bottom CTA Actions */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => handleAction(item.id)}
                    className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 group/btn"
                  >
                    <span>Detailed Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={isBot ? onOpenChatbotModal : () => handleAction(item.id)}
                    className={`text-xs font-bold px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                      isBot
                        ? 'bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/30'
                        : 'bg-indigo-600/80 text-white hover:bg-indigo-600'
                    }`}
                  >
                    <span>{item.ctaText}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* COMPARISON MATRIX (Expandable) */}
        {showMatrix && (
          <div className="mt-14 bg-[#0f172a] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk',sans-serif]">
                  Institutional Offerings Capability Matrix
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Side-by-side feature comparison across all 5 Omni Cat product modules.
                </p>
              </div>
              <button
                onClick={onOpenDemoModal}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl self-start sm:self-auto"
              >
                Contact Sales Architecture Team
              </button>
            </div>

            <div className="overflow-x-auto mt-4">
              <table className="w-full text-left text-xs text-slate-300 min-w-[650px]">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 uppercase text-[11px] tracking-wider">
                    <th className="py-3 px-4 font-bold text-white">Platform Capability</th>
                    <th className="py-3 px-3 text-center">University ERP</th>
                    <th className="py-3 px-3 text-center">College ERP</th>
                    <th className="py-3 px-3 text-center">School ERP</th>
                    <th className="py-3 px-3 text-center">Adaptive LMS</th>
                    <th className="py-3 px-3 text-center">Admissions Bot</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-medium">
                  {matrixRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                      <td className="py-3 px-4 font-medium text-slate-200 flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                        <span>{row.feature}</span>
                      </td>
                      <td className="py-3 px-3 text-center">
                        {row.uni ? (
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 font-bold">✓</span>
                        ) : (
                          <span className="text-slate-600">—</span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-center">
                        {row.col ? (
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 font-bold">✓</span>
                        ) : (
                          <span className="text-slate-600">—</span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-center">
                        {row.sch ? (
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold">✓</span>
                        ) : (
                          <span className="text-slate-600">—</span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-center">
                        {row.lms ? (
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 font-bold">✓</span>
                        ) : (
                          <span className="text-slate-600">—</span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-center">
                        {row.bot ? (
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold">✓</span>
                        ) : (
                          <span className="text-slate-600">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
