import { ShieldCheck, Zap, Code2, BarChart3, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const featureList = [
    {
      title: "Masking & Non-Masking",
      desc: "Use your brand name as sender ID with Masking, or cost-effective Non-Masking for OTP and system alerts – all from one panel.",
      icon: <ShieldCheck className="w-6 h-6" />,
      tag: "Sender ID",
      color: "group-hover:bg-blue-500"
    },
    {
      title: "Lightning-fast Delivery",
      desc: "Operator-grade connectivity, optimized routes and auto-retry to keep your important messages moving within seconds.",
      icon: <Zap className="w-6 h-6" />,
      tag: "Low Latency",
      color: "group-hover:bg-amber-500"
    },
    {
      title: "Developer-first API",
      desc: "REST API, JSON, callback URL, and simple documentation for quick integration with any modern language or framework.",
      icon: <Code2 className="w-6 h-6" />,
      tag: "SDK/API",
      color: "group-hover:bg-cyan-500"
    },
    {
      title: "Real-time Analytics",
      desc: "See campaign performance, route stats, delivery heatmaps, and exportable reports for your audit and BI tools.",
      icon: <BarChart3 className="w-6 h-6" />,
      tag: "Insights",
      color: "group-hover:bg-emerald-500"
    },
  ];

  return (
    <section id="features" className="py-8 md:py-16 px-3 md:px-6 bg-[#FCFCFD] relative overflow-hidden">

      {/* Advanced Masked Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '10px 10px' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-150 bg-blue-100/50 blur-[120px] rounded-full" />
      </div>

      {/* Mesh Gradient Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[10%] w-w-100 h-w-100 bg-indigo-100/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[10%] w-w-100 h-w-100 bg-cyan-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section */}

        <div className=" mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
              Platform Core
            </span>
          </div>

          <h2 className="flex flex-wrap gap-2 text-xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
            Bright, powerful SMS gateway
            <span className="text-slate-400">for your business.</span>
          </h2>

          <p className="text-sm md:text-base text-slate-500 max-w-xl leading-relaxed">
            From one-time campaigns to always-on OTP traffic – GotiSMS keeps your messages fast, reliable, and measurable.
          </p>
        </div>

        {/* Feature Grid with Layout Refinement */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featureList.map((f, idx) => (
            <div
              key={idx}
              className="group relative bg-white border border-slate-200/80 p-5 md:p-8 rounded-4xl transition-all duration-500 hover:border-slate-300 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.06)] flex flex-col items-start"
            >
              {/* Card Spotlight Effect (Visible on Hover) */}
              <div className="absolute inset-0 rounded-4xl bg-linear-to-b from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Icon Logic */}
              <div className="relative w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:text-white transition-all duration-500 mb-5 z-10 overflow-hidden">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${f.color}`} />
                <div className="relative z-20 group-hover:scale-110 transition-transform duration-500">
                  {f.icon}
                </div>
              </div>

              <div className="mb-3 relative z-10">
                <span className="inline-block px-2 py-0.5 rounded bg-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-widest group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                  {f.tag}
                </span>
                <h3 className="text-md md:text-lg font-bold text-slate-900 mt-3 group-hover:text-slate-950 transition-colors ">
                  {f.title}
                </h3>
              </div>

              <p className="text-slate-500 text-[15px] leading-relaxed mb-10 relative z-10">
                {f.desc}
              </p>

              <div className="mt-auto relative z-10">
                <button className="flex items-center gap-1.5 text-sm font-bold text-slate-400 group-hover:text-slate-900 transition-all">
                  Learn more
                  <ChevronRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}