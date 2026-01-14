"use client";

import Navbar from "@/src/components/include/Navbar";
import Hero from "@/src/components/include/Hero";
import Pricing from "@/src/components/landing/Pricing";
import Footer from "@/src/components/include/Footer";
import CTA from "@/src/components/landing/CTA";
import UseCases from "@/src/components/landing/UseCases";
import SmartEnterpriseWorks from "@/src/components/landing/SmartEnterpriseWorks";
import Features from "@/src/components/landing/Features";
import OnboardingProcess from "@/src/components/landing/OnboardingProcess";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-cyan-100 selection:text-cyan-900">
      {/* --- NAVIGATION --- */}
      <Navbar />

      {/* --- HERO SECTION --- */}
      <Hero />
      <Features />
      {/* --- PRICING --- */}
      <Pricing />

      {/* --- USE CASES --- */}
      <UseCases />

      {/* --- Smart Enterprise Workss --- */}
      <SmartEnterpriseWorks />

      {/* --- Onboarding Process --- */}
      <OnboardingProcess />

      {/* --- CTA --- */}
      <CTA />

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
}
