"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// --- DATA CONFIGURATION ---
const featureList = [
  {
    title: "Masking & Non-Masking",
    desc: "Use your brand name as sender ID with Masking, or cost-effective Non-Masking for OTP and system alerts.",
    icon: "ID",
  },
  {
    title: "Lightning-fast Delivery",
    desc: "Operator-grade connectivity and auto-retry to keep your important messages moving within seconds.",
    icon: "⚡",
  },
  {
    title: "Developer-friendly API",
    desc: "REST API, JSON, callback URL, IP whitelist and simple documentation for quick integration.",
    icon: "API",
  },
  {
    title: "Real-time Analytics",
    desc: "See campaign performance, route wise stats, delivery heatmap, and exportable reports for BI tools.",
    icon: "📊",
  },
];

const pricing = [
  {
    title: "Non-Masking Starter",
    price: "0.18₮ - 0.25₮",
    minPurchase: "10,000 SMS",
    features: ["Local operators", "Instant KYC", "Live DLR panel", "REST API"],
    isPopular: false,
  },
  {
    title: "Masking Business",
    price: "0.40₮ - 0.60₮",
    minPurchase: "20,000 SMS",
    features: ["Brand Sender ID", "Advanced Dashboard", "Priority Support", "Role Management"],
    isPopular: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    minPurchase: "Volume Based",
    features: ["Dedicated IPs", "High TPS", "Custom SSO", "Migration Support"],
    isPopular: false,
  },
];

const useCases = [
  {
    title: "Bank & Fintech",
    items: ["OTP and 2FA for login", "Transaction notifications", "Fraud alerts"],
    icon: "🏦",
  },
  {
    title: "E-commerce",
    items: ["Order tracking", "Flash sale alerts", "Re-engagement"],
    icon: "🛒",
  },
  {
    title: "Education",
    items: ["Result notices", "Schedule reminders", "Event alerts"],
    icon: "🎓",
  },
  {
    title: "Government",
    items: ["Public awareness", "Emergency info", "Field communication"],
    icon: "🏛️",
  },
];

const steps = [
  {
    number: "01",
    title: "Create account",
    desc: "Sign up, verify your details and login to the GotisMS panel.",
  },
  {
    number: "02",
    title: "Verify KYC",
    desc: "Share required documents and get routes activated instantly.",
  },
  {
    number: "03",
    title: "Top-up & Integrate",
    desc: "Purchase credit and integrate our high-throughput REST API.",
  },
  {
    number: "04",
    title: "Send & Monitor",
    desc: "Launch campaigns and watch live delivery stats and logs.",
  },
];

const industries = ["Bank / NBFI", "E-commerce", "Travel & OTA", "Govt & NGO", "Education", "Software & IT"];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-[#32B5E8]/20">

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#0B1E33]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="relative w-36 h-10">
            <Image src="/gotisms-logo.png" alt="GotisMS Logo" fill className="object-contain" priority />
          </Link>

          <div className="hidden md:flex space-x-10 text-sm font-bold text-slate-300">
            {["Features", "Pricing", "Use Cases"].map((item) => (
              <Link key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="hover:text-[#32B5E8] transition-colors">
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/login" className="text-white text-sm font-bold hover:text-[#46D3B4] transition-all">Login</Link>
            <Link href="/signup" className="bg-gradient-to-r from-[#32B5E8] to-[#46D3B4] text-white px-7 py-3 rounded-full text-sm font-black shadow-xl shadow-[#32B5E8]/20 hover:scale-105 active:scale-95 transition-all">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-[#0B1E33]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#32B5E8]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#46D3B4]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#32B5E8] text-xs font-black uppercase tracking-widest mb-8">
                <span className="flex h-2 w-2 rounded-full bg-[#46D3B4] mr-3 animate-pulse" />
                Direct Operator Connectivity
              </div>
              <h1 className="text-6xl lg:text-8xl font-black text-white leading-[1.05] mb-8 tracking-tighter">
                Deliver messages <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#32B5E8] to-[#46D3B4]">
                  without borders.
                </span>
              </h1>
              <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                High-throughput routes for OTPs and marketing campaigns. Experience
                the next generation of bulk messaging with real-time analytics.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button className="px-10 py-5 bg-gradient-to-r from-[#32B5E8] to-[#46D3B4] text-white font-black rounded-2xl shadow-2xl shadow-cyan-500/30 hover:brightness-110 transition-all">
                  Start Sending Now
                </button>
                <button className="px-10 py-5 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/5 transition-all">
                  Documentation
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="lg:w-1/2 w-full">
              <div className="bg-[#0F172A]/80 backdrop-blur-3xl border border-white/5 p-8 rounded-[3rem] shadow-2xl">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                    <p className="text-(--secondary) text-[10px] font-black uppercase mb-2">Success Rate</p>
                    <p className="text-3xl font-black text-white tracking-tight">99.9%</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                    <p className="text-(--secondary) text-[10px] font-black uppercase mb-2">Avg Latency</p>
                    <p className="text-3xl font-black text-white tracking-tight">180<span className="text-sm text-[#32B5E8] ml-1">ms</span></p>
                  </div>
                </div>
                <div className="h-32 flex items-end gap-2 px-2">
                  {[30, 60, 45, 90, 65, 80, 40, 95, 70, 85].map((h, i) => (
                    <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} className="flex-1 bg-gradient-to-t from-[#32B5E8] to-[#46D3B4] rounded-t-lg" />
                  ))}
                </div>
                <div className="mt-6 flex justify-between text-[10px] font-black text-(--secondary) uppercase tracking-widest">
                  <span>Live Traffic Stream</span>
                  <span className="text-[#46D3B4]">System Healthy</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FEATURES --- */}
      <section id="features" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-[#0B1E33] mb-4">Platform Features</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#32B5E8] to-[#46D3B4] mx-auto rounded-full mb-20" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureList.map((f, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-[#32B5E8]/10 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#32B5E8] to-[#46D3B4] flex items-center justify-center text-white font-black text-xl mb-8 mx-auto shadow-lg shadow-[#32B5E8]/20">
                  {f.icon}
                </div>
                <h3 className="text-xl font-black text-[#0B1E33] mb-4">{f.title}</h3>
                <p className="text-(--secondary) text-sm leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- USE CASES --- */}
      <section id="use-cases" className="py-32 bg-[#0B1E33] text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Industry Specific Solutions</h2>
              <p className="text-slate-400 text-lg font-medium">We provide specialized routing for the highest delivery rates possible.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-[#32B5E8] transition-all group">
                <div className="text-3xl mb-6">{uc.icon}</div>
                <h4 className="text-xl font-black mb-6">{uc.title}</h4>
                <ul className="space-y-4">
                  {uc.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-slate-400 flex items-center font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#46D3B4] mr-3 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STEPS --- */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <p className="text-[#32B5E8] uppercase tracking-[0.2em] text-xs font-black mb-4">Onboarding</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0B1E33] tracking-tight">Go live in 4 steps</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-8xl font-black text-slate-100 absolute -top-12 -left-4 group-hover:text-[#32B5E8]/10 transition-colors z-0">
                  {step.number}
                </div>
                <div className="relative z-10 pt-4">
                  <h3 className="text-xl font-black text-[#0B1E33] mb-4">{step.title}</h3>
                  <p className="text-(--secondary) text-sm leading-relaxed font-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING --- */}
      <section id="pricing" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-[#0B1E33] mb-4">Scalable Pricing</h2>
            <p className="text-(--secondary) font-bold">No setup fees. Scale as you grow.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((p, i) => (
              <div key={i} className={`relative p-12 rounded-[3rem] bg-white border ${p.isPopular ? 'border-[#32B5E8] shadow-2xl scale-105 z-10' : 'border-slate-200'}`}>
                {p.isPopular && (
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#32B5E8] to-[#46D3B4] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
                    Best Preferred
                  </span>
                )}
                <h3 className="text-2xl font-black mb-6">{p.title}</h3>
                <div className="mb-8">
                  <span className="text-5xl font-black">{p.price}</span>
                  <span className="text-slate-400 font-bold text-sm ml-2">/ SMS</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center font-bold text-slate-600 text-sm">
                      <span className="w-5 h-5 rounded-full bg-[#46D3B4]/20 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-[#46D3B4]" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-5 rounded-2xl font-black transition-all ${p.isPopular ? 'bg-[#0B1E33] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0B1E33] py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="relative w-40 h-10 grayscale brightness-200 opacity-50">
            <Image src="/gotisms-logo.png" alt="GotisMS" fill className="object-contain" />
          </div>
          <div className="flex gap-10 text-(--secondary) font-bold text-sm">
            <Link href="#" className="hover:text-white transition-colors">API Docs</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
          </div>
          <p className="text-slate-600 text-xs font-bold">© 2026 GotisMS Gateway. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}