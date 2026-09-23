import React, { useState, useId } from 'react';
import { Calculator, ArrowRight, IndianRupee, Clock, TrendingUp, Users2, Sparkles } from 'lucide-react';
import { InstitutionType } from './types';

interface RoiCalculatorProps {
  onOpenDemoModal: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenDemoModal }) => {
  const [instType, setInstType] = useState<InstitutionType>('university');
  const [studentCount, setStudentCount] = useState<number>(12000);
  const [includeErp, setIncludeErp] = useState<boolean>(true);
  const [includeLms, setIncludeLms] = useState<boolean>(true);
  const [includeBot, setIncludeBot] = useState<boolean>(true);

  // Accessible unique ID for the slider input
  const studentSliderId = useId();

  // Dynamic calculations based on Indian institutional parameters
  const moduleMultiplier = (includeErp ? 1 : 0) + (includeLms ? 0.7 : 0) + (includeBot ? 0.8 : 0);
  const baseAdminHoursPerStudent = instType === 'university' ? 4.2 : instType === 'college' ? 3.5 : 2.8;
  const hoursSavedYear = Math.round(studentCount * baseAdminHoursPerStudent * 0.55 * (moduleMultiplier / 2.5));
  
  // Savings calculated in Indian Rupees (₹)
  const estimatedCostSavings = Math.round(hoursSavedYear * 420 + (includeBot ? studentCount * 320 : 0));
  const admissionsLiftPct = includeBot ? (instType === 'university' ? 38 : instType === 'college' ? 42 : 28) : 12;
  const staffHoursPerMonth = Math.round(hoursSavedYear / 12);

  // Indian Rupee formatting (Lakhs / Crores)
  const formatINR = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(1)} Lakhs`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <section id="roi-calculator" className="py-20 md:py-28 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Institutional Impact Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk',sans-serif]">
            Calculate Your Campus ROI &amp; Time Reclaimed
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            See the quantifiable financial and operational impact Omni Cat delivers to your registrar, faculty, and admissions teams.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-[#0f172a] border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Inputs */}
            <div className="lg:col-span-6 space-y-6">
              {/* Institution Type Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  1. Select Institution Profile
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['school', 'college', 'university'] as InstitutionType[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => {
                        setInstType(t);
                        if (t === 'school' && studentCount > 5000) setStudentCount(2400);
                        if (t === 'college' && (studentCount < 1000 || studentCount > 20000)) setStudentCount(6500);
                        if (t === 'university' && studentCount < 5000) setStudentCount(16000);
                      }}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold capitalize transition-all border ${
                        instType === t
                          ? 'bg-indigo-600 text-white border-indigo-500 shadow-md'
                          : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      {t === 'school' ? 'K-12 School' : t === 'college' ? 'Degree College' : 'University'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Student Enrollment Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor={studentSliderId} className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    2. Total Active Student Body
                  </label>
                  <span className="text-base font-extrabold text-white font-mono bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                    {studentCount.toLocaleString()} Students
                  </span>
                </div>
                <input
                  id={studentSliderId}
                  type="range"
                  min="500"
                  max="45000"
                  step="500"
                  value={studentCount}
                  onChange={(e) => setStudentCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  aria-label="Total Active Student Body"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span>500 (Single Campus)</span>
                  <span>20,000</span>
                  <span>45,000+ (Multi-Campus)</span>
                </div>
              </div>

              {/* Modules Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  3. Planned Technology Suite
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer hover:border-slate-700">
                    <input
                      type="checkbox"
                      checked={includeErp}
                      onChange={(e) => setIncludeErp(e.target.checked)}
                      className="w-4 h-4 rounded text-indigo-600 accent-indigo-500"
                    />
                    <span className="text-sm font-semibold text-white">Campus ERP Suite</span>
                    <span className="text-xs text-slate-400 ml-auto">Admissions, Fees, Governance</span>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer hover:border-slate-700">
                    <input
                      type="checkbox"
                      checked={includeLms}
                      onChange={(e) => setIncludeLms(e.target.checked)}
                      className="w-4 h-4 rounded text-indigo-600 accent-indigo-500"
                    />
                    <span className="text-sm font-semibold text-white">Adaptive AI LMS</span>
                    <span className="text-xs text-slate-400 ml-auto">Grading Co-Pilot &amp; Testing</span>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer hover:border-slate-700">
                    <input
                      type="checkbox"
                      checked={includeBot}
                      onChange={(e) => setIncludeBot(e.target.checked)}
                      className="w-4 h-4 rounded text-indigo-600 accent-indigo-500"
                    />
                    <span className="text-sm font-semibold text-amber-300">24/7 AI Admissions Bot</span>
                    <span className="text-xs text-amber-400 ml-auto font-medium">+High Conversion</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Column: Computed ROI Outputs */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#0c1222] to-[#070a14] p-6 sm:p-8 rounded-2xl border border-indigo-500/30 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  Projected Annual Returns
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                  Model v3.4
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5">
                    <IndianRupee className="w-3.5 h-3.5 text-emerald-400" />
                    Estimated Savings
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1 font-['Space_Grotesk',sans-serif]">
                    {formatINR(estimatedCostSavings)}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Admin &amp; operational costs/yr</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                    Enrollment Boost
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 mt-1 font-['Space_Grotesk',sans-serif]">
                    +{admissionsLiftPct}%
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Qualified applicant yield</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    Admin Hours Saved
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-['Space_Grotesk',sans-serif]">
                    {hoursSavedYear.toLocaleString()} hrs
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Reclaimed per academic year</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Users2 className="w-3.5 h-3.5 text-purple-400" />
                    Monthly Faculty Relief
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 mt-1 font-['Space_Grotesk',sans-serif]">
                    {staffHoursPerMonth.toLocaleString()} hrs
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Shifted to student mentoring</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenDemoModal}
                  className="w-full py-3.5 text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Contact for Sales: Request Institutional Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
