import React, { useState } from 'react';
import { Logo } from './Logo';
import { 
  ShieldCheck, 
  Send, 
  CheckCircle, 
  Twitter, 
  Linkedin, 
  Github, 
  Globe, 
  Heart,
  ExternalLink
} from 'lucide-react';
import { ProductId } from './types';

interface FooterProps {
  onSelectProduct: (id: ProductId) => void;
  onOpenDemoModal: () => void;
  onOpenChatbotModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onSelectProduct, 
  onOpenDemoModal, 
  onOpenChatbotModal 
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2000);
  };

  return (
    <footer id="main-footer" className="bg-[#070b14] border-t border-slate-800/80 text-slate-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Omni Cat is the unified AI educational operating system empowering modern universities, colleges, and K-12 schools to streamline operations and maximize student admissions.
            </p>

            {/* Newsletter form */}
            <div className="pt-2">
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Join the Higher Ed Modernization Dispatch
              </span>
              {isSubscribed ? (
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Subscribed! Check your inbox for the quarterly benchmark report.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter academic email..."
                    className="flex-1 bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2 text-white placeholder:text-slate-400 text-xs focus:outline-none focus:border-indigo-500"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <span>Join</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Live Uptime Status Pill */}
            <div className="pt-2 flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-400 font-mono text-[11px]">
                Omni Cloud Status: 99.99% All Services Operational
              </span>
            </div>
          </div>

          {/* Solutions Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Space_Grotesk',sans-serif]">
              Solutions
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onSelectProduct('university-erp')}
                  className="hover:text-indigo-400 transition-colors text-left"
                >
                  University ERP
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectProduct('college-erp')}
                  className="hover:text-indigo-400 transition-colors text-left"
                >
                  College ERP
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectProduct('school-erp')}
                  className="hover:text-indigo-400 transition-colors text-left"
                >
                  School ERP
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectProduct('lms')}
                  className="hover:text-indigo-400 transition-colors text-left"
                >
                  Adaptive LMS &amp; AI Grading
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenChatbotModal}
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1 text-amber-300"
                >
                  <span>AI Admissions Bot</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">24/7</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Platform & Governance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Space_Grotesk',sans-serif]">
              Governance &amp; Trust
            </h4>
            <ul className="space-y-2">
              <li><a href="#features-section" className="hover:text-white transition-colors">NEP 2020 &amp; ABC Compliance</a></li>
              <li><a href="#features-section" className="hover:text-white transition-colors">NAAC A++ &amp; NIRF Alignment</a></li>
              <li><a href="#features-section" className="hover:text-white transition-colors">Indian DPDP Act 2023 &amp; ISO 27001</a></li>
              <li><a href="#roi-calculator" className="hover:text-white transition-colors">Campus ROI Calculator (INR ₹)</a></li>
              <li><a href="#faq-section" className="hover:text-white transition-colors">Legacy ERP Migration Guide</a></li>
              <li><a href="#contact-demo-section" className="hover:text-white transition-colors">Enterprise SLA Terms</a></li>
            </ul>
          </div>

          {/* Company & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Space_Grotesk',sans-serif]">
              Connect &amp; Support
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={onOpenDemoModal} className="hover:text-white transition-colors text-left font-semibold text-indigo-400">
                  Contact for Sales
                </button>
              </li>
              <li><a href="#contact-demo-section" className="hover:text-white transition-colors">Bengaluru HQ &amp; Tech Centers</a></li>
              <li><a href="#testimonials-section" className="hover:text-white transition-colors">Institutional Case Studies</a></li>
              <li><a href="#contact-demo-section" className="hover:text-white transition-colors">Faculty Training Academy</a></li>
              <li><a href="#contact-demo-section" className="hover:text-white transition-colors">Security Incident Disclosure</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-slate-400">
            <span>&copy; {new Date().getFullYear()} Omni Cat Technologies India Pvt. Ltd. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Built for accredited educational institutions across India.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">DPDP Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
