import React from 'react';
import { 
  ShieldCheck, 
  BarChart3, 
  Smartphone, 
  CreditCard, 
  CalendarClock, 
  CloudLightning,
  Lock,
  Eye,
  CheckCircle,
  FileSpreadsheet
} from 'lucide-react';
import { CORE_FEATURES } from '../data/content';

export const FeaturesGrid: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return ShieldCheck;
      case 'BarChart3': return BarChart3;
      case 'Smartphone': return Smartphone;
      case 'CreditCard': return CreditCard;
      case 'CalendarClock': return CalendarClock;
      case 'CloudLightning': return CloudLightning;
      default: return ShieldCheck;
    }
  };

  return (
    <section id="features-section" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-wider text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            Platform Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 font-['Space_Grotesk',sans-serif]">
            Enterprise-Grade Foundation Built for Reliability
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Engineered from day one to meet the stringent security, uptime, and auditing requirements of leading educational boards and accreditation committees.
          </p>
        </div>

        {/* Features 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_FEATURES.map((feature) => {
            const Icon = getFeatureIcon(feature.icon);
            return (
              <div
                key={feature.id}
                id={`feature-card-${feature.id}`}
                className="bg-[#0f172a] border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-indigo-500/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    {feature.metric && (
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-indigo-300 border border-indigo-500/20">
                        {feature.metric}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Audited &amp; Active
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                    {feature.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0f172a] to-slate-900 border border-slate-800 flex flex-wrap items-center justify-around gap-6">
          <div className="flex items-center gap-3">
            <Lock className="w-5 h-5 text-indigo-400" />
            <div>
              <div className="text-xs font-bold text-white">FERPA &amp; COPPA</div>
              <div className="text-[10px] text-slate-400">Student privacy guaranteed</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <div>
              <div className="text-xs font-bold text-white">SOC 2 Type II Certified</div>
              <div className="text-[10px] text-slate-400">Annual independent audit</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Eye className="w-5 h-5 text-cyan-400" />
            <div>
              <div className="text-xs font-bold text-white">GDPR &amp; ISO 27001</div>
              <div className="text-[10px] text-slate-400">Global data sovereignty</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FileSpreadsheet className="w-5 h-5 text-purple-400" />
            <div>
              <div className="text-xs font-bold text-white">Single Sign-On (SSO)</div>
              <div className="text-[10px] text-slate-400">Google, Microsoft &amp; SAML 2.0</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
