import { motion } from "framer-motion";
import { Check, ChevronRight, Crown, Rocket, Building2 } from "lucide-react";

const pricing = [
  {
    title: "Non-Masking Starter",
    price: "0.18₮",
    range: "0.18₮ - 0.25₮",
    minPurchase: "Min. 10,000 SMS",
    features: ["Local operators", "Instant KYC", "Live DLR panel", "REST API"],
    isPopular: false,
    tag: "Economy",
    icon: <Rocket className="w-5 h-5" />,
    color: "group-hover:bg-blue-500"
  },
  {
    title: "Masking Business",
    price: "0.40₮",
    range: "0.40₮ - 0.60₮",
    minPurchase: "Min. 20,000 SMS",
    features: [
      "Brand Sender ID",
      "Advanced Dashboard",
      "Priority Support",
      "Role Management",
    ],
    isPopular: true,
    tag: "Most Preferred",
    icon: <Crown className="w-5 h-5" />,
    color: "group-hover:bg-cyan-500"
  },
  {
    title: "Enterprise",
    price: "Custom",
    range: "Volume Based",
    minPurchase: "Unlimited Scale",
    features: ["Dedicated IPs", "High TPS", "Custom SSO", "Migration Support"],
    isPopular: false,
    tag: "High Volume",
    icon: <Building2 className="w-5 h-5" />,
    color: "group-hover:bg-indigo-500"
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 md:py-24 px-4 md:px-6 bg-[#FCFCFD] relative overflow-hidden">

      {/* 1. Advanced Masked Grid Background (Same as Features) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(#e2e8f0 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 10%, transparent 100%)'
        }}
      />

      {/* 2. Mesh Gradient Glows (Same as Features) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section (Same Font Sizes & Spacing) */}
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
              Transparent Pricing
            </span>
          </div>

          <h2 className="flex flex-wrap gap-2 text-xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
            Simple, Scalable Pricing
            <span className="text-slate-400">for your business.</span>
          </h2>

          <p className="text-sm md:text-base text-slate-500 max-w-xl leading-relaxed">
            No setup fees or complex contracts. Choose a plan that matches your current volume and scale seamlessly.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricing.map((p, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              key={idx}
              className={`group relative bg-white/80 backdrop-blur-sm border ${p.isPopular ? "border-blue-400 shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)]" : "border-slate-200/80"
                } p-5 md:p-8 rounded-4xl transition-all duration-500 hover:border-slate-300 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.06)] flex flex-col items-start`}
            >
              {/* Card Spotlight Effect */}
              <div className="absolute inset-0 rounded-4xl bg-linear-to-b from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Icon Logic (Exact Match with Features) */}
              <div className="relative w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:text-white transition-all duration-500 mb-3 md:mb-5 z-10 overflow-hidden">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${p.color}`} />
                <div className="relative z-20 group-hover:scale-110 transition-transform duration-500">
                  {p.icon}
                </div>
              </div>

              <div className="mb-4 relative z-10 w-full">
                <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${p.isPopular ? "bg-(--from) text-white" : "bg-slate-100 text-slate-500 group-hover:bg-slate-900 group-hover:text-white"
                  }`}>
                  {p.tag}
                </span>
                <h3 className="text-md md:text-lg font-bold text-slate-900 mt-3 group-hover:text-slate-950 transition-colors">
                  {p.title}
                </h3>
              </div>

              <div className="flex items-baseline gap-1 mb-1 relative z-10">
                <span className="text-xl md:text-3xl font-black text-slate-900 tracking-tighter">
                  {p.price}
                </span>
                {p.price !== "Custom" && (
                  <span className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-tight">/ SMS</span>
                )}
              </div>
              <p className="text-slate-500 text-[13px] font-medium mb-10 relative z-10">
                {p.minPurchase}
              </p>

              {/* Feature Items */}
              <div className="space-y-4 mb-10 relative z-10 w-full">
                {p.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[14px] font-medium text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-cyan-50 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-cyan-600 stroke-3" />
                    </div>
                    {f}
                  </div>
                ))}
              </div>

              {/* Button Logic */}
              <div className="mt-auto w-full relative z-10">
                <button className={`w-full py-2 md:py-4 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${p.isPopular
                  ? "bg-slate-900 text-white hover:bg-(--from) hover:scale-[1.02] active:scale-95 shadow-lg"
                  : "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                  }`}>
                  Get Started
                  <ChevronRight size={16} className={`${p.isPopular ? "text-blue-400" : "text-slate-400"}`} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}