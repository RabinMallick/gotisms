import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, ShoppingCart, GraduationCap, Gavel, ArrowRight, Globe, Cpu, Activity } from "lucide-react";

const useCases = [
  {
    title: "Bank & Fintech",
    items: ["OTP and 2FA for login", "Transaction notifications", "Fraud alerts"],
    icon: <ShieldCheck size={20} />, // Slightly larger icon to match text
    uptime: "99.999%",
  },
  {
    title: "E-commerce",
    items: ["Order tracking", "Flash sale alerts", "Re-engagement"],
    icon: <ShoppingCart size={20} />,
    uptime: "99.99%",
  },
  {
    title: "Education",
    items: ["Result notices", "Schedule reminders", "Event alerts"],
    icon: <GraduationCap size={20} />,
    uptime: "99.95%",
  },
  {
    title: "Government",
    items: ["Public awareness", "Emergency info", "Field communication"],
    icon: <Gavel size={20} />,
    uptime: "100%",
  },
];

export default function LinearUseCases() {
  return (
    <section id="use-cases" className="bg-white  py-8 md:py-16 px-3 md:px-6  relative overflow-hidden font-sans border-t border-slate-100">
      {/* Background Linear Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20">
          <div className="max-w-3xl"> {/* Increased max-width for bigger text */}
            <div className="flex items-center gap-2 mb-6">
              <div className="px-3 py-1.5 rounded-md bg-slate-50 border border-slate-200 text-cyan-700 font-mono text-[11px] uppercase tracking-widest font-bold">
                Infrastructure / Use Cases
              </div>
            </div>
            {/* Increased text size: text-4xl -> text-5xl | lg:text-6xl -> lg:text-7xl */}
            <h2 className="text-xl md:text-3xl font-extrabold text-(--primary) tracking-tight leading-[1.05] mb-8">
              Industry Specific Solutions.
            </h2>
            {/* Increased text size: text-lg -> text-xl */}
            <p className="text-slate-500 text-xl max-w-2xl leading-relaxed">
              Specialized routing protocols optimized for different traffic profiles to ensure industry-leading delivery success.
            </p>
          </div>

          <Link
            href="/signup"
            className="group flex items-center gap-2 text-base font-bold text-slate-900 border-b-2 border-cyan-500 pb-1 hover:text-cyan-600 hover:border-cyan-600 transition-all"
          >
            Documentation Overview
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Linear Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className="group relative p-10 bg-white hover:bg-slate-50 transition-colors duration-300 flex flex-col h-full"
            >
              {/* Header: Icon & Metrics */}
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 group-hover:text-cyan-600 group-hover:border-cyan-200 transition-colors">
                  {uc.icon}
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-tighter">Availability</p>
                  <p className="text-cyan-600 font-mono text-sm font-bold">{uc.uptime}</p>
                </div>
              </div>

              {/* Body */}
              <div className="flex-grow">
                {/* Increased text size: text-lg -> text-xl */}
                <h4 className="text-xl font-bold mb-6 text-slate-900">{uc.title}</h4>
                <ul className="space-y-5">
                  {uc.items.map((item, idx) => (
                    /* Increased text size: text-[13px] -> text-[15px] */
                    <li key={idx} className="text-[15px] text-slate-500 flex items-center gap-3 leading-snug">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-cyan-500 transition-colors shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Minimal Activity Sparkline */}
              <div className="mt-12 pt-6 border-t border-slate-100 opacity-40 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-1.5 h-5 items-end">
                  {[...Array(10)].map((_, bar) => (
                    <motion.div
                      key={bar}
                      animate={{ height: [4, Math.random() * 16 + 4, 4] }}
                      transition={{ duration: 2, repeat: Infinity, delay: bar * 0.1 }}
                      className="flex-1 bg-slate-200 group-hover:bg-cyan-200 rounded-t-[1px]"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* System Footer Status */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-10 py-6 border-y border-slate-100">
          <div className="flex items-center gap-2">
            <Globe size={16} className="text-slate-400" />
            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">
              Nodes: <span className="text-slate-900">241 Global</span>
            </p>
          </div>
          <div className="w-1 h-1 rounded-full bg-slate-200" />
          <div className="flex items-center gap-2">
            <Cpu size={16} className="text-slate-400" />
            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">
              Engine: <span className="text-slate-900">V3-Edge</span>
            </p>
          </div>
          <div className="w-1 h-1 rounded-full bg-slate-200" />
          <div className="flex items-center gap-2">
            <Activity size={16} className="text-cyan-500" />
            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">
              Network Status: <span className="text-emerald-600">Operational</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}