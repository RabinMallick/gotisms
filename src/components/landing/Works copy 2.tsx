import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Building2, ShoppingBag, Plane, Landmark, Code2, ShieldCheck, Zap, ArrowUpRight, Cpu, Globe, Lock, Check } from 'lucide-react';

const industryData = {
  "Banking": { 
    icon: <Landmark />, 
    quote: "Redefining security for 15M+ monthly transaction alerts with zero-fail MFA protocols.",
    metric: "99.999%",
    label: "Delivery SLA",
    latency: "140ms",
    region: "Global Edge",
    color: "blue"
  },
  "Retail": { 
    icon: <ShoppingBag />, 
    quote: "The surge capacity during Black Friday was flawless. 2M messages sent in a 4-hour window.",
    metric: "400k",
    label: "Peak TPM",
    latency: "210ms",
    region: "North America",
    color: "indigo"
  },
  "Aviation": { 
    icon: <Plane />, 
    quote: "Critical flight updates delivered to passengers across 180 airports in real-time.",
    metric: "2.4s",
    label: "Avg Handover",
    latency: "185ms",
    region: "Asia-Pacific",
    color: "sky"
  },
  "DevOps": { 
    icon: <Code2 />, 
    quote: "Our engineers integrated the API in under 20 minutes. The webhooks are exceptionally fast.",
    metric: "100%",
    label: "API Uptime",
    latency: "45ms",
    region: "EU-West-1",
    color: "violet"
  }
};

export default function MissionControlWorks() {
  const [active, setActive] = useState("Banking");
  const [progress, setProgress] = useState(0);
  const industries = Object.keys(industryData);

  // Auto-progress logic
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          const nextIndex = (industries.indexOf(active) + 1) % industries.length;
          setActive(industries[nextIndex]);
          return 0;
        }
        return prev + 0.5;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [active]);

  return (
    <section className="bg-slate-950 py-32 px-6 relative overflow-hidden font-sans selection:bg-blue-500/30">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1)_0%,rgba(2,6,23,1)_100%)]" />
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header HUD */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-12 bg-blue-500" />
              <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase">Enterprise Infrastructure</span>
            </div>
            <h2 className="text-5xl lg:text-8xl font-bold text-white tracking-tight">
              Powering <br />
              <span className="text-slate-700">The 1%.</span>
            </h2>
          </div>

          {/* Industrial Selection Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-white/5 p-1.5 rounded-2xl backdrop-blur-xl border border-white/10">
            {industries.map((item) => (
              <button
                key={item}
                onClick={() => { setActive(item); setProgress(0); }}
                className={`relative px-6 py-3 rounded-xl text-xs font-bold transition-all uppercase tracking-widest ${
                  active === item ? "text-white" : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {active === item && (
                  <motion.div layoutId="activeTab" className="absolute inset-0 bg-blue-600 rounded-xl -z-10 shadow-lg shadow-blue-600/20" />
                )}
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Main Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Tactical Data (The "Stats") */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900/50 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
              <p className="text-slate-500 font-mono text-[10px] uppercase mb-8 flex items-center gap-2">
                <Cpu size={12} className="text-blue-500" /> System Diagnostics
              </p>
              
              <div className="space-y-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-slate-400 text-sm font-medium">{industryData[active].label}</span>
                      <span className="text-white font-mono text-2xl font-bold">{industryData[active].metric}</span>
                    </div>
                    <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1 }}
                        className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" 
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Latency</p>
                    <p className="text-white font-mono">{industryData[active].latency}</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Region</p>
                    <p className="text-white font-mono">{industryData[active].region}</p>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full h-24 bg-blue-600 hover:bg-blue-500 transition-colors rounded-3xl flex items-center justify-between px-8 text-white group">
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase opacity-60">Next Step</p>
                <p className="text-xl font-bold">Request Access</p>
              </div>
              <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
            </button>
          </div>

          {/* Right: The Viewport (Testimonial & Visualizer) */}
          <div className="lg:col-span-8 group">
            <div className="h-full bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-[3rem] p-10 lg:p-16 relative overflow-hidden flex flex-col justify-between shadow-2xl">
              
              {/* Progress Bar (Auto-switch indicator) */}
              <div className="absolute top-0 left-0 h-1 bg-white/10 w-full">
                <motion.div 
                  className="h-full bg-blue-500" 
                  style={{ width: `${progress}%` }} 
                />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-blue-500 border border-white/10">
                    {industryData[active].icon}
                  </div>
                  <div className="h-4 w-px bg-slate-800" />
                  <div className="flex items-center gap-2 text-emerald-500 text-[10px] font-mono tracking-tighter">
                    <Lock size={12} /> ENCRYPTED_TUNNEL_ESTABLISHED
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.h3
                    key={active}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    className="text-2xl lg:text-5xl font-medium text-white leading-tight mb-12"
                  >
                    “{industryData[active].quote}”
                  </motion.h3>
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-between pt-12 border-t border-white/5 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center font-bold text-white border border-white/10">
                    {active[0]}
                  </div>
                  <div>
                    <p className="text-white font-bold leading-none mb-1">{active} Division Lead</p>
                    <p className="text-slate-500 text-xs font-mono">Infrastructure Verified ✓</p>
                  </div>
                </div>
                
                <Globe className="text-white/5 absolute right-0 bottom-0 w-64 h-64 -mb-12 -mr-12 group-hover:text-blue-500/10 transition-colors duration-1000" />
              </div>

              {/* Decorative Scanline */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}