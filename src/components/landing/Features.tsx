import { ShieldCheck, Zap, Code2, BarChart3, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Features() {
  const featureList = [
    {
      title: "Masking & Non-Masking",
      desc: "Use your brand name as sender ID with Masking, or cost-effective Non-Masking for OTP and system alerts – all from one panel.",
      icon: <ShieldCheck className="w-6 h-6" />,
      tag: "Sender ID"
    },
    {
      title: "Lightning-fast Delivery",
      desc: "Operator-grade connectivity, optimized routes and auto-retry to keep your important messages moving within seconds.",
      icon: <Zap className="w-6 h-6" />,
      tag: "Low Latency"
    },
    {
      title: "Developer-first API",
      desc: "REST API, JSON, callback URL, and simple documentation for quick integration with any modern language or framework.",
      icon: <Code2 className="w-6 h-6" />,
      tag: "SDK/API"
    },
    {
      title: "Real-time Analytics",
      desc: "See campaign performance, route stats, delivery heatmaps, and exportable reports for your audit and BI tools.",
      icon: <BarChart3 className="w-6 h-6" />,
      tag: "Insights"
    },
  ];

  return (
    <section id="features" className="py-8 md:py-16 px-3 md:px-6 bg-[#fafafa] relative overflow-hidden">

      {/* Mesh Gradient & Texture (Matching Use Cases) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-cyan-50/40 rounded-full blur-[120px]" />
      </div>

      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px), radial-gradient(#000 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Section - Larger Text */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em]">Platform Core</span>
          </div>

          <h2 className="text-xl md:text-3xl font-extrabold text-(--primary) tracking-tight leading-[1.05] mb-8">
            Bright, powerful SMS gateway for your business.
          </h2>

          <p className="text-sm md:text-md  text-(--secondary) max-w-2xl leading-relaxed">
            From one-time campaigns to always-on OTP traffic – GotiSMS keeps your messages fast, reliable, and measurable.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureList.map((f, idx) => (
            <div
              key={idx}
              className="group relative bg-white border border-slate-200 p-8 rounded-3xl hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:text-cyan-600 group-hover:bg-cyan-50 group-hover:border-cyan-100 transition-all mb-8">
                {f.icon}
              </div>

              <div className="mb-4">
                <span className="text-[10px] font-bold text-cyan-600 uppercase tracking-widest">{f.tag}</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">{f.title}</h3>
              </div>

              <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
                {f.desc}
              </p>

              <button className="flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-slate-900 transition-colors">
                Learn more <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}