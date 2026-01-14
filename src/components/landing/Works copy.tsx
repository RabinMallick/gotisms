import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, ShoppingBag, Plane, Landmark, GraduationCap, Code2, CheckCircle2, TrendingUp } from 'lucide-react';

const industryData = {
  "Bank / NBFI": {
    icon: <Landmark className="w-5 h-5" />,
    quote: "GotisMS provides the low-latency infrastructure we need for critical transaction alerts and MFA. Their routing is impeccably stable.",
    author: "Head of Infrastructure, Global Bank",
    stat: "99.99% Uptime",
    tag: "Security Focused"
  },
  "E-commerce": {
    icon: <ShoppingBag className="w-5 h-5" />,
    quote: "Automating our delivery notifications via GotisMS reduced our customer support tickets by 40%. The API integration was seamless.",
    author: "Operations Manager, ShopGlobal",
    stat: "1.2M Monthly SMS",
    tag: "High Volume"
  },
  "Travel & OTA": {
    icon: <Plane className="w-5 h-5" />,
    quote: "Booking confirmations reach our customers instantly across 200+ countries. GotisMS is our most reliable travel partner.",
    author: "CTO, FlyNext Travel",
    stat: "Instant Delivery",
    tag: "Global Reach"
  },
  "Software & IT": {
    icon: <Code2 className="w-5 h-5" />,
    quote: "The developer documentation is the best we've seen. We were up and running in our Node.js environment in under an hour.",
    author: "Lead Dev, SaaS Cloud",
    stat: "1-Line Integration",
    tag: "Dev Friendly"
  }
  // Add others similarly...
};

 
export default function AdvancedWorks() {
  const [activeTab, setActiveTab] = useState("Bank / NBFI");

  return (
    <section className="bg-slate-50/50 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3"
            >
              Industry Leaders
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Powering communications <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">for every sector.</span>
            </h2>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-slate-400">
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900">500+</p>
              <p className="text-xs uppercase tracking-tighter">Enterprises</p>
            </div>
            <div className="h-10 w-px bg-slate-200" />
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900">99.9%</p>
              <p className="text-xs uppercase tracking-tighter">Success Rate</p>
            </div>
          </div>
        </div>

        {/* Interactive Industry Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 p-2 bg-slate-100/50 rounded-2xl w-fit mx-auto lg:mx-0">
          {Object.keys(industryData).map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === item 
                ? "bg-white text-blue-600 shadow-md ring-1 ring-slate-200" 
                : "text-slate-500 hover:bg-white/50"
              }`}
            >
              {industryData[item].icon}
              {item}
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Testimonial Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-blue-900/5 border border-slate-100 relative"
              >
                <div className="absolute top-10 right-10 opacity-10">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9125 16 16.0171 16H19.0171V14H17.0171C15.3595 14 14.017 12.6576 14.017 11V7C14.017 5.34315 15.3602 4 17.0171 4H19.0171C20.674 4 22.017 5.34315 22.017 7V11C22.017 12.6576 20.6745 14 19.0171 14V16C20.1217 16 21.017 16.8954 21.017 18V21H14.017ZM2.01709 21L2.01709 18C2.01709 16.8954 2.91252 16 4.01709 16H7.01709V14H5.01709C3.35954 14 2.01709 12.6576 2.01709 11V7C2.01709 5.34315 3.36024 4 5.01709 4H7.01709C8.67404 4 10.0171 5.34315 10.0171 7V11C10.0171 12.6576 8.67464 14 7.01709 14V16C8.12166 16 9.01709 16.8954 9.01709 18V21H2.01709Z"/></svg>
                </div>
                
                <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-snug mb-10">
                  "{industryData[activeTab].quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${activeTab}`} alt="Author" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{industryData[activeTab].author}</p>
                    <p className="text-sm text-blue-600 font-medium">{activeTab} Leader</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Stats & Visuals */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="space-y-6"
              >
                {/* Result Tag */}
                <div className="bg-emerald-50 text-emerald-700 px-6 py-4 rounded-2xl flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="font-bold">{industryData[activeTab].tag}</span>
                </div>

                {/* Stat Box */}
                <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white overflow-hidden relative group">
                  <TrendingUp className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5 group-hover:text-blue-500/10 transition-colors duration-700" />
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">Performance</p>
                  <p className="text-5xl font-black">{industryData[activeTab].stat}</p>
                  <p className="text-slate-400 mt-4 text-sm leading-relaxed">
                    Customized routing logic specifically tuned for {activeTab} traffic patterns.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Global Clients Ribbon */}
        <div className="mt-24 pt-12 border-t border-slate-100">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">Trusted By Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale contrast-125">
             <span className="font-black text-2xl tracking-tighter">FINANCE.CO</span>
             <span className="font-black text-2xl tracking-tighter">GLOBAL_RETAIL</span>
             <span className="font-black text-2xl tracking-tighter">TECH_FLOW</span>
             <span className="font-black text-2xl tracking-tighter">NGO_ORG</span>
             <span className="font-black text-2xl tracking-tighter">EDU_SYSTEM</span>
          </div>
        </div>

      </div>
    </section>
  );
}