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
  Grid, 
  LayoutList,
  ChevronRight
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/content';
import { ProductId, ProductOffering } from './types';

interface ProductShowcaseProps {
  selectedProductId: ProductId;
  onSelectProduct: (id: ProductId) => void;
  onOpenDemoModal: () => void;
  onOpenChatbotModal: () => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  selectedProductId,
  onSelectProduct,
  onOpenDemoModal,
  onOpenChatbotModal,
}) => {
  const [viewMode, setViewMode] = useState<'tabs' | 'grid'>('tabs');
  const activeProduct = PRODUCTS_DATA.find((p) => p.id === selectedProductId) || PRODUCTS_DATA[0];

  const getProductIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return GraduationCap;
      case 'Building2': return Building2;
      case 'School': return School;
      case 'BookOpenCheck': return BookOpenCheck;
      case 'Bot': return Bot;
      default: return GraduationCap;
    }
  };

  return (
    <section id="products-showcase" className="py-20 md:py-28 relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Full-Spectrum Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk',sans-serif]">
              Engineered for Every Tier of Modern Education
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              Whether you oversee a multi-campus research university, an autonomous college, or a K-12 school district, Omni Cat scales precisely to your administrative and academic mandate.
            </p>
          </div>

          {/* Toggle Tabbed vs Grid View */}
          <div className="flex items-center bg-slate-900/80 p-1 rounded-xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setViewMode('tabs')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'tabs' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutList className="w-3.5 h-3.5" />
              <span>Deep-Dive Tabs</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'grid' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>All 5 Offerings</span>
            </button>
          </div>
        </div>

        {/* TABBED VIEW */}
        {viewMode === 'tabs' && (
          <div className="space-y-8">
            {/* Horizontal Product Selector Tabs */}
            <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-none border-b border-slate-800/80">
              {PRODUCTS_DATA.map((prod) => {
                const Icon = getProductIcon(prod.iconName);
                const isActive = prod.id === selectedProductId;
                return (
                  <button
                    key={prod.id}
                    id={`product-tab-${prod.id}`}
                    onClick={() => onSelectProduct(prod.id)}
                    className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                      isActive
                        ? 'bg-slate-800/90 text-white border border-indigo-500/50 shadow-lg shadow-indigo-500/10'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 border border-transparent'
                    }`}
                  >
                    <div className={`p-1.5 rounded-lg ${isActive ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{prod.name}</span>
                    {prod.id === 'admissions-chatbot' && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                        AI Bot
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Active Product Showcase Detail Pane */}
            <div 
              id="active-product-pane"
              className="bg-[#0f172a]/95 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column: Details & Capabilities */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase font-bold tracking-wider text-indigo-400">
                      {activeProduct.category}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 font-medium">
                      {activeProduct.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk',sans-serif]">
                    {activeProduct.headline}
                  </h3>

                  <p className="text-slate-300 text-base leading-relaxed">
                    {activeProduct.description}
                  </p>

                  {/* Impact Stats Grid */}
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                    {activeProduct.stats.map((s, idx) => (
                      <div key={idx} className="text-center sm:text-left">
                        <div className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk',sans-serif]">{s.value}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Key Capabilities Bullet Points */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Core Architecture &amp; Workflows</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeProduct.keyCapabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                          <div className="mt-0.5 w-4 h-4 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={onOpenDemoModal}
                      className="px-6 py-3 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2"
                    >
                      <span>Contact for Sales ({activeProduct.name})</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    {activeProduct.id === 'admissions-chatbot' ? (
                      <button
                        onClick={onOpenChatbotModal}
                        className="px-5 py-3 text-sm font-semibold text-amber-300 bg-amber-950/40 hover:bg-amber-900/60 border border-amber-500/40 rounded-xl transition-all flex items-center gap-2"
                      >
                        <Bot className="w-4 h-4" />
                        <span>Open Live Chatbot Test</span>
                      </button>
                    ) : (
                      <a
                        href="#roi-calculator"
                        className="px-5 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 rounded-xl transition-all"
                      >
                        Calculate Institutional ROI
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Interactive Modules Breakdown Cards */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
                    <span>Modular Sub-Systems</span>
                    <span className="text-indigo-400">Plug &amp; Play API</span>
                  </div>

                  {activeProduct.modules.map((mod, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all group"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                          {mod.title}
                        </h4>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                          {mod.tag}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {mod.description}
                      </p>
                    </div>
                  ))}

                  {/* Campus Integration Ribbon */}
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-indigo-950/40 to-purple-950/40 border border-indigo-500/20 flex items-center justify-between text-xs text-slate-300">
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      Cross-syncs with LMS, SIS &amp; Biometric Hardware
                    </span>
                    <button 
                      onClick={onOpenDemoModal}
                      className="text-indigo-300 hover:text-white font-semibold underline"
                    >
                      View Specs
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* GRID VIEW (All 5 Offerings at a glance) */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {PRODUCTS_DATA.map((prod) => {
              const Icon = getProductIcon(prod.iconName);
              const isChatbot = prod.id === 'admissions-chatbot';
              return (
                <div
                  key={prod.id}
                  id={`product-card-${prod.id}`}
                  className="bg-[#0f172a] border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-indigo-500/10"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${prod.color} text-white shadow-md`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {prod.badge}
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] uppercase font-bold tracking-wider text-indigo-400">
                        {prod.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1 group-hover:text-indigo-300 transition-colors">
                        {prod.name}
                      </h3>
                      <p className="text-xs text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                        {prod.shortDesc}
                      </p>
                    </div>

                    {/* Quick Stats Pill */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
                      {prod.stats.slice(0, 2).map((s, i) => (
                        <div key={i} className="text-left bg-slate-900/50 p-2 rounded-lg border border-slate-800">
                          <div className="text-sm font-bold text-white font-['Space_Grotesk',sans-serif]">{s.value}</div>
                          <div className="text-[10px] text-slate-400">{s.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Key features bullets */}
                    <div className="space-y-1.5 pt-1">
                      {prod.keyCapabilities.slice(0, 3).map((cap, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                          <span className="truncate">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => {
                        onSelectProduct(prod.id);
                        setViewMode('tabs');
                      }}
                      className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 group/btn"
                    >
                      <span>Explore Modules</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={isChatbot ? onOpenChatbotModal : onOpenDemoModal}
                      className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors ${
                        isChatbot
                          ? 'bg-amber-500/20 text-amber-300 hover:bg-amber-500/30'
                          : 'bg-indigo-600/80 text-white hover:bg-indigo-600'
                      }`}
                    >
                      {isChatbot ? 'Try Live' : 'Contact Sales'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
