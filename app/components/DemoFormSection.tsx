import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Sparkles, 
  ShieldCheck, 
  Clock,
  Building,
  GraduationCap
} from 'lucide-react';
import { DemoFormData, InstitutionType } from './types';

interface DemoFormSectionProps {
  onOpenChatbotModal: () => void;
}

export const DemoFormSection: React.FC<DemoFormSectionProps> = ({ onOpenChatbotModal }) => {
  const [formData, setFormData] = useState<DemoFormData>({
    fullName: '',
    workEmail: '',
    phone: '',
    institutionName: '',
    institutionType: 'university',
    studentCount: '5,000 - 15,000',
    selectedModules: ['Campus ERP', 'Admissions AI Chatbot'],
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const availableModules = [
    'University / College / School ERP',
    'Next-Gen Adaptive LMS',
    'Admissions & Sales AI Bot',
    'Biometric / GPS Fleet Tracking',
    'Automated Timetable & Exam Cell',
  ];

  const handleModuleToggle = (moduleName: string) => {
    setFormData((prev) => {
      const exists = prev.selectedModules.includes(moduleName);
      return {
        ...prev,
        selectedModules: exists 
          ? prev.selectedModules.filter((m) => m !== moduleName)
          : [...prev.selectedModules, moduleName]
      };
    });
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Please enter your full name';
    if (!formData.workEmail.trim() || !formData.workEmail.includes('@')) errors.workEmail = 'Please provide a valid institutional email';
    if (!formData.institutionName.trim()) errors.institutionName = 'Institution name is required';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required for scheduling';
    if (formData.selectedModules.length === 0) errors.selectedModules = 'Select at least one module of interest';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact-demo-section" className="py-20 md:py-28 relative bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                Institutional Sales &amp; Consultation
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 font-['Space_Grotesk',sans-serif]">
                Contact Sales for an Executive Walkthrough
              </h2>
              <p className="mt-4 text-slate-300 text-base leading-relaxed">
                Experience how Omni Cat replaces disparate software silos with a single unified operating system. Our solutions engineers will prepare a live sandbox customized to your campus size, NEP 2020 framework, and UGC/AICTE bylaws.
              </p>
            </div>

            {/* Direct Contact Points */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <div className="p-2.5 rounded-xl bg-slate-800 text-indigo-400 border border-slate-700">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Institutional Sales Desk</div>
                  <div className="text-white font-semibold">omnicatprivatelimited@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-300">
                <div className="p-2.5 rounded-xl bg-slate-800 text-emerald-400 border border-slate-700">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Direct Sales &amp; Advisory Hotline</div>
                  <div className="text-white font-semibold">+91 9003702299 (chennai HQ)</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-300">
                <div className="p-2.5 rounded-xl bg-slate-800 text-cyan-400 border border-slate-700">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">India Tech Centers</div>
                  <div className="text-white font-semibold">chennai (HQ) • coimbatore  </div>
                </div>
              </div>
            </div>

            {/* SLA Guarantee Box */}
            <div className="p-5 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Executive Guarantee</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                All inquiries receive a prompt consultation callback and tailored migration proposal within 2 hours during Indian business hours. Dedicated data confidentiality under Indian DPDP Act 2023.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div 
              id="demo-form-card"
              className="bg-[#0f172a] border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative"
            >
              {isSubmitted ? (
                <div className="text-center py-12 space-y-5 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-['Space_Grotesk',sans-serif]">
                    Sales Inquiry Submitted Successfully!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. An institutional sales specialist has been assigned, and a meeting calendar invite has been sent to <span className="text-indigo-300 font-mono">{formData.workEmail}</span>.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-left text-xs text-slate-300 space-y-1.5 max-w-md mx-auto">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Institution:</span>
                      <span className="font-semibold text-white">{formData.institutionName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Target Modules:</span>
                      <span className="font-semibold text-indigo-300">{formData.selectedModules.length} selected</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Assigned Solutions Architect:</span>
                      <span className="font-semibold text-emerald-400">Mr karthikeyan (EdTech Specialist)</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 text-xs font-semibold text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white font-['Space_Grotesk',sans-serif]">
                        Contact Omni Cat Sales
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Get institutional pricing (₹), NEP 2020 mapping, and a custom product walkthrough.
                      </p>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      Response within 2 Hours
                    </span>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Dr. Rajesh Sharma"
                        className={`w-full bg-slate-900 border rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-400 focus:outline-none ${
                          formErrors.fullName ? 'border-rose-500' : 'border-slate-700 focus:border-indigo-500'
                        }`}
                      />
                      {formErrors.fullName && <p className="text-rose-400 text-[11px] mt-1">{formErrors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Official Institutional Email *
                      </label>
                      <input
                        type="email"
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="registrar@bit-bangalore.edu.in"
                        className={`w-full bg-slate-900 border rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-400 focus:outline-none ${
                          formErrors.workEmail ? 'border-rose-500' : 'border-slate-700 focus:border-indigo-500'
                        }`}
                      />
                      {formErrors.workEmail && <p className="text-rose-400 text-[11px] mt-1">{formErrors.workEmail}</p>}
                    </div>
                  </div>

                  {/* Phone & Institution Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Institution Name *
                      </label>
                      <input
                        type="text"
                        value={formData.institutionName}
                        onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                        placeholder="Bengaluru Institute of Technology"
                        className={`w-full bg-slate-900 border rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-400 focus:outline-none ${
                          formErrors.institutionName ? 'border-rose-500' : 'border-slate-700 focus:border-indigo-500'
                        }`}
                      />
                      {formErrors.institutionName && <p className="text-rose-400 text-[11px] mt-1">{formErrors.institutionName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full bg-slate-900 border rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-400 focus:outline-none ${
                          formErrors.phone ? 'border-rose-500' : 'border-slate-700 focus:border-indigo-500'
                        }`}
                      />
                      {formErrors.phone && <p className="text-rose-400 text-[11px] mt-1">{formErrors.phone}</p>}
                    </div>
                  </div>

                  {/* Institution Type & Student Body Count */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Institution Type
                      </label>
                      <select
                        value={formData.institutionType}
                        onChange={(e) => setFormData({ ...formData, institutionType: e.target.value as InstitutionType })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                      >
                        <option value="university">University (Multi-Campus / Research)</option>
                        <option value="college">Degree / Autonomous College</option>
                        <option value="school">K-12 School / School District</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Student Body Size
                      </label>
                      <select
                        value={formData.studentCount}
                        onChange={(e) => setFormData({ ...formData, studentCount: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                      >
                        <option value="Under 1,000">Under 1,000 Students</option>
                        <option value="1,000 - 5,000">1,000 - 5,000 Students</option>
                        <option value="5,000 - 15,000">5,000 - 15,000 Students</option>
                        <option value="15,000 - 30,000">15,000 - 30,000 Students</option>
                        <option value="30,000+">30,000+ Students (System-wide)</option>
                      </select>
                    </div>
                  </div>

                  {/* Modules Interested In */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Modules Interested In *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {availableModules.map((mod) => {
                        const isChecked = formData.selectedModules.includes(mod);
                        return (
                          <button
                            type="button"
                            key={mod}
                            onClick={() => handleModuleToggle(mod)}
                            className={`p-2.5 rounded-xl border text-xs text-left font-medium transition-all flex items-center justify-between ${
                              isChecked
                                ? 'bg-indigo-600/20 border-indigo-500 text-white'
                                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                            }`}
                          >
                            <span>{mod}</span>
                            <span className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] ${isChecked ? 'bg-indigo-600 text-white' : 'border border-slate-700'}`}>
                              {isChecked ? '✓' : ''}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    {formErrors.selectedModules && <p className="text-rose-400 text-[11px] mt-1">{formErrors.selectedModules}</p>}
                  </div>

                  {/* Additional notes */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Specific Needs or Target Timeline (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g., Planning NEP 2020 transition for upcoming academic year, need UPI fee integration and WhatsApp admissions bot..."
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:to-purple-500 rounded-xl shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Connecting with Sales Team...</span>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4" />
                          <span>Contact for Sales Consultation</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2.5">
                      No commitment required. Includes complimentary Indian university/college ERP migration assessment.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
