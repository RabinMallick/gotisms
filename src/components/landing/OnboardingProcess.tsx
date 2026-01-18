import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    number: "01",
    title: "Create your account",
    description: "Sign up, verify your details and login to the GotisMS control panel.",
    gradient: "from-(--from) to-cyan-500",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Choose route & KYC",
    description: "Decide Masking or Non-Masking, share required documents and get routes activated.",
    gradient: "from-indigo-600 to-(--from)",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Top-up & integrate",
    description: "Purchase SMS credit, configure templates, and integrate the API or use the web panel.",
    gradient: "from-violet-600 to-indigo-500",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    number: "04",
    title: "Send & monitor",
    description: "Launch campaigns or OTP traffic and watch live delivery stats, DLR and logs.",
    gradient: "from-fuchsia-600 to-purple-500",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

export default function OnboardingProcess() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="relative bg-slate-50 py-16 md:py-24 px-3 md:px-6  overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-(--from) rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-(--to) rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="md:text-center md:mb-16">
          <div className="md:text-center mb-10 md:mb-12">
            <span className="text-[12px]  md:text-sm text-transparent bg-linear-to-r from-(--from) to-(--to) bg-clip-text font-bold tracking-widest text-shadow-2xs uppercase">Onboarding Process</span>
            <h2 className="text-xl md:text-3xl font-extrabold text-(--primary) mt-3">Ready to scale in minutes</h2>
            <p className="text-sm md:text-base text-(--secondary) mt-2 md:mt-4 max-w-2xl mx-auto ">
              Our streamlined process ensures you can start sending SMS to your customers without technical hurdles.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Main Connector Track */}
          <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-slate-200 lg:left-0 lg:right-0 lg:top-12 lg:w-full lg:h-0.5 lg:bottom-auto" />

          {/* Animated "Progress" Line based on hover */}
          <motion.div
            className="hidden lg:block absolute top-12 left-0 h-0.5 bg-linear-to-r from-(--from) to-(--to) z-0"
            initial={{ width: "0%" }}
            animate={{ width: hoveredStep !== null ? `${(hoveredStep + 1) * 25}%` : "0%" }}
          // transition={{ type: "spring", stiffness: 50, damping: 15 }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredStep(idx)}
                onMouseLeave={() => setHoveredStep(null)}
                className="relative group cursor-default"
              >
                <div className="flex lg:flex-col items-start lg:items-center gap-6 lg:gap-5 md:p-8">

                  {/* Icon Hexagon/Box */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`relative z-20 shrink-0 w-12 h-12 lg:w-24 lg:h-24 flex items-center justify-center rounded-2xl lg:rounded-[2.5rem] bg-white border-2 transition-all duration-500 shadow-lg shadow-slate-200/50 
                      ${hoveredStep === idx ? 'border-(--from) scale-110' : 'border-transparent'}`}
                  >
                    <div className={`transition-colors duration-500 ${hoveredStep === idx ? 'text-(--from)' : 'text-slate-400'}`}>
                      {step.icon}
                    </div>

                    {/* Floating Step Number */}
                    <div className="absolute -top-3 -right-3 w-6 h-6 md:w-8 md:h-8 rounded-full bg-(--primary) text-white text-[8px] md:text-[10px] font-bold flex items-center justify-center border-4 border-white">
                      {step.number}
                    </div>
                  </motion.div>

                  {/* Content Area */}
                  <div className="lg:text-center">
                    <h3 className={`text-md md:text-xl font-bold mb-2 md:mb-3 transition-colors duration-300 ${hoveredStep === idx ? 'text-(--from)' : 'text-(--primary)'}`}>
                      {step.title}
                    </h3>
                    <p className="text-(--secondary) text-sm md:text-base leading-relaxed md:max-w-65 md:mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Footer Interaction */}
        <div className="mt-12 md:mt-16 pt-5 md:pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} width={40} height={40} alt="User" />
              </div>
            ))}
            <div className="px-4 py-2 bg-white rounded-full border border-slate-200 text-[10px] md:text-xs font-medium text-slate-600 flex items-center">
              Joined by 2,000+ businesses this month
            </div>
          </div>
          <button className="text-sm px-8 py-2 bg-(--primary) hover:bg-(--from) cursor-pointer text-white rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-slate-200">
            Start Free Integration
          </button>
        </div>
      </div>
    </section>
  );
}