import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { 
  GraduationCap, 
  Building2, 
  School, 
  BookOpenCheck, 
  Bot, 
  ChevronDown, 
  Menu, 
  X, 
  Sparkles, 
  ArrowRight,
  Layers,
  Calculator
} from 'lucide-react';
import { ProductId } from './types';

interface NavbarProps {
  onSelectProduct: (id: ProductId) => void;
  onOpenDemoModal: () => void;
  onOpenChatbotModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onSelectProduct, 
  onOpenDemoModal, 
  onOpenChatbotModal 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    {
      id: 'university-erp' as ProductId,
      name: 'University ERP',
      desc: 'Multi-campus governance, research grants & faculty lifecycle',
      icon: GraduationCap,
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    },
    {
      id: 'college-erp' as ProductId,
      name: 'College ERP',
      desc: 'Department management, timetable AI, placement portal & fee tracker',
      icon: Building2,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    },
    {
      id: 'school-erp' as ProductId,
      name: 'School ERP',
      desc: 'K-12 student tracking, parent mobile app, bus GPS & digital gradebook',
      icon: School,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      id: 'lms' as ProductId,
      name: 'Next-Gen LMS',
      desc: 'AI-assisted essay grading, proctored exams & adaptive mastery',
      icon: BookOpenCheck,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    },
    {
      id: 'admissions-chatbot' as ProductId,
      name: 'AI Admissions & Sales Bot',
      desc: '24/7 student inquiry conversion, campus tour bookings & ERP sync',
      icon: Bot,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      badge: 'Popular',
    },
  ];

  const handleProductClick = (id: ProductId) => {
    onSelectProduct(id);
    setSolutionsOpen(false);
    setMobileMenuOpen(false);
    const element = document.getElementById('products-showcase');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-7xl transition-all duration-300 rounded-2xl border ${
        isScrolled 
          ? 'bg-[#0b0f19]/85 border-slate-700/80 backdrop-blur-xl shadow-2xl shadow-black/80 py-2.5 px-3' 
          : 'bg-[#0b0f19]/40 border-slate-800/60 backdrop-blur-md shadow-lg shadow-black/40 py-3.5 px-4'
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Brand Logo */}
        <Logo size="md" />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* Solutions Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              id="solutions-dropdown-btn"
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-xl transition-colors ${
                solutionsOpen ? 'text-white bg-slate-800/60' : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
              }`}
              aria-expanded={solutionsOpen}
            >
              Solutions
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180 text-indigo-400' : ''}`} />
            </button>

            {/* Mega Dropdown Menu */}
            {solutionsOpen && (
              <div 
                id="solutions-mega-menu"
                className="absolute top-full -left-4 w-[520px] pt-3 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
              >
                <div className="bg-[#0f172a] border border-slate-700/80 rounded-2xl p-4 shadow-2xl shadow-black/90 backdrop-blur-2xl grid grid-cols-1 gap-2">
                  <div className="px-3 py-1.5 border-b border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Institutional Offerings</span>
                    <span className="text-[11px] text-indigo-400 font-medium">Modular or Unified</span>
                  </div>

                  <div className="grid grid-cols-1 gap-1.5 pt-1">
                    {solutions.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          id={`nav-solution-${item.id}`}
                          onClick={() => handleProductClick(item.id)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/70 transition-all text-left group"
                        >
                          <div className={`p-2 rounded-lg border ${item.color} mt-0.5 group-hover:scale-105 transition-transform`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors">
                                {item.name}
                              </span>
                              {item.badge && (
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-medium">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between px-3 text-xs text-slate-400 bg-slate-900/40 rounded-lg py-2">
                    <div className="flex items-center gap-1.5 text-indigo-300">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Enterprise Unified API & Single Sign-On</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a 
            href="#product-offerings-section" 
            id="nav-link-offerings"
            className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/40 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <Layers className="w-4 h-4 text-indigo-400" />
            Products Offering
          </a>

          <a 
            href="#ai-chatbot-deepdive" 
            id="nav-link-chatbot"
            className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/40 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <Bot className="w-4 h-4 text-amber-400" />
            AI Admissions Bot
          </a>

          {/* <a 
            href="#features-section" 
            id="nav-link-features"
            className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/40 rounded-xl transition-colors"
          >
            Capabilities
          </a>

          <a 
            href="#roi-calculator" 
            id="nav-link-roi"
            className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/40 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <Calculator className="w-4 h-4 text-emerald-400" />
            ROI Calculator
          </a>

          <a 
            href="#faq-section" 
            id="nav-link-faq"
            className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/40 rounded-xl transition-colors"
          >
            FAQ
          </a> */}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Secondary CTA: Try AI Chatbot */}
          <button
            id="navbar-try-chatbot-btn"
            onClick={onOpenChatbotModal}
            className="relative px-3.5 py-2 text-xs font-semibold text-indigo-300 bg-indigo-950/60 hover:bg-indigo-900/80 border border-indigo-500/30 hover:border-indigo-400/60 rounded-xl transition-all flex items-center gap-2 group shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span>Try AI Chatbot</span>
            <Bot className="w-3.5 h-3.5 text-indigo-400 group-hover:scale-110 transition-transform" />
          </button>

          {/* Primary CTA: Contact for Sales */}
          <button
            id="navbar-contact-sales-btn"
            onClick={onOpenDemoModal}
            className="px-4 py-2 text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:to-purple-500 rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all flex items-center gap-2 active:scale-95"
          >
            <span>Contact for Sales</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          id="mobile-menu-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden mt-3 pt-3 border-t border-slate-800 space-y-3 animate-in fade-in slide-in-from-top-2">
          <div className="space-y-1">
            <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">Institutional Products</div>
            {solutions.map((item) => (
              <button
                key={item.id}
                onClick={() => handleProductClick(item.id)}
                className="w-full flex items-center justify-between p-2.5 rounded-lg text-slate-200 hover:bg-slate-800/60 text-sm font-medium text-left"
              >
                <span>{item.name}</span>
                <span className="text-xs text-indigo-400">Explore &rarr;</span>
              </button>
            ))}
          </div>

          <div className="border-t border-slate-800 pt-3 space-y-1">
            <a 
              href="#product-offerings-section" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-indigo-300 font-semibold hover:text-white"
            >
              Product Offerings
            </a>
            <a 
              href="#ai-chatbot-deepdive" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-300 hover:text-white"
            >
              AI Admissions Bot Spotlight
            </a>
            {/* <a 
              href="#features-section" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-300 hover:text-white"
            >
              Capabilities
            </a>
            <a 
              href="#roi-calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-300 hover:text-white"
            >
              ROI Calculator
            </a> */}
            {/* <a 
              href="#faq-section" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-300 hover:text-white"
            >
              FAQ
            </a> */}
          </div>

          <div className="pt-2 grid grid-cols-2 gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenChatbotModal(); }}
              className="w-full py-2.5 text-xs font-semibold text-indigo-300 bg-indigo-950/60 border border-indigo-500/30 rounded-xl"
            >
              Try AI Chatbot
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDemoModal(); }}
              className="w-full py-2.5 text-xs font-semibold text-white bg-indigo-600 rounded-xl"
            >
              Contact for Sales
            </button>
          </div>
        </div>
      )}
    </header>
  );
};