'use client';

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductOfferingsSection } from './components/ProductOfferingsSection';
import { ProductShowcase } from './components/ProductShowcase';
import { ChatbotDeepDive } from './components/ChatbotDeepDive';
import { FeaturesGrid } from './components/FeaturesGrid';
import { RoiCalculator } from './components/RoiCalculator';
import { Testimonials } from './components/Testimonials';
import { DemoFormSection } from './components/DemoFormSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { AiChatbotModal } from './components/AiChatbotModal';
import { DemoModal } from './components/DemoModal';
import { FloatingChatTrigger } from './components/FloatingChatTrigger';
import { ProductId } from './types';

export default function Home() {
  const [selectedProductId, setSelectedProductId] = useState<ProductId>('university-erp');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isChatbotModalOpen, setIsChatbotModalOpen] = useState(false);

  const handleSelectProduct = (id: ProductId) => {
    setSelectedProductId(id);
  };

  const handleOpenDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  const handleOpenChatbotModal = () => {
    setIsChatbotModalOpen(true);
  };

  const handleCloseChatbotModal = () => {
    setIsChatbotModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 selection:bg-indigo-500 selection:text-white relative overflow-x-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Sticky Navigation */}
      <Navbar
        onSelectProduct={handleSelectProduct}
        onOpenDemoModal={handleOpenDemoModal}
        onOpenChatbotModal={handleOpenChatbotModal}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Section with Unified Cockpit Preview */}
        <Hero
          onOpenDemoModal={handleOpenDemoModal}
          onOpenChatbotModal={handleOpenChatbotModal}
        />

        {/* Dedicated 5 Product Offerings Section & Capability Matrix */}
        <ProductOfferingsSection
          onSelectProduct={handleSelectProduct}
          onOpenDemoModal={handleOpenDemoModal}
          onOpenChatbotModal={handleOpenChatbotModal}
        />

        {/* 5 Core Offerings Modular Deep-Dive (Tabs & Grid) */}
        <ProductShowcase
          selectedProductId={selectedProductId}
          onSelectProduct={handleSelectProduct}
          onOpenDemoModal={handleOpenDemoModal}
          onOpenChatbotModal={handleOpenChatbotModal}
        />

        {/* Spotlight Deep Dive: Admissions & Sales AI Chatbot with Live Simulator */}
        <ChatbotDeepDive onOpenDemoModal={handleOpenDemoModal} />

        {/* Core Capabilities & Enterprise Compliance Grid */}
        <FeaturesGrid />

        {/* Interactive Institutional ROI & Hours Saved Estimator */}
        <RoiCalculator onOpenDemoModal={handleOpenDemoModal} />

        {/* Testimonials & Case Studies from University Deans & Principals */}
        <Testimonials onOpenDemoModal={handleOpenDemoModal} />

        {/* Lead Generation & Interactive Demo Booking Section */}
        <DemoFormSection onOpenChatbotModal={handleOpenChatbotModal} />

        {/* Frequently Asked Questions Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onSelectProduct={handleSelectProduct}
        onOpenDemoModal={handleOpenDemoModal}
        onOpenChatbotModal={handleOpenChatbotModal}
      />

      {/* Floating Admissions AI Chatbot Trigger */}
      <FloatingChatTrigger
        isOpen={isChatbotModalOpen}
        onOpen={handleOpenChatbotModal}
      />

      {/* Interactive AI Chatbot Testing Modal */}
      <AiChatbotModal
        isOpen={isChatbotModalOpen}
        onClose={handleCloseChatbotModal}
        onOpenDemoModal={handleOpenDemoModal}
      />

      {/* Quick Demo Reservation Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemoModal}
      />
    </div>
  );
}