import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { InstitutionType } from './types';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [institution, setInstitution] = useState('');
  const [instType, setInstType] = useState<InstitutionType>('university');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !institution.trim()) return;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          institution,
          instType,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Failed to submit form');
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
    }
  };

  return (
    <div 
      id="quick-demo-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div 
        id="quick-demo-modal-container"
        className="w-full max-w-lg bg-[#0f172a] border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl relative animate-in zoom-in-95 duration-200"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white font-['Space_Grotesk',sans-serif]">
              Sales Inquiry Received!
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We have dispatched a private calendar link and institutional pricing documentation to <span className="text-indigo-300 font-mono">{email}</span>. An Indian education solutions lead will contact you shortly.
            </p>
            <div className="pt-3">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-indigo-400">
                Institutional Consultation
              </span>
              <h3 className="text-2xl font-extrabold text-white font-['Space_Grotesk',sans-serif] mt-1">
                Contact Omni Cat Sales
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Customized quote (₹), live architecture sandbox, and NEP 2020 alignment for your campus.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Dr. Arvind Rao"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Institutional Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="arvind.rao@dmu.ac.in"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Institution Name
                </label>
                <input
                  type="text"
                  required
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  placeholder="Delhi Metropolitan University"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Campus Tier
                </label>
                <select
                  value={instType}
                  onChange={(e) => setInstType(e.target.value as InstitutionType)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="university">University</option>
                  <option value="college">Degree / Autonomous College</option>
                  <option value="school">K-12 School</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Contact Sales Team</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1 text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>NEP 2020 &amp; DPDP Act 2023 compliant • 100% confidential campus consultation</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
