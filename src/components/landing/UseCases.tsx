import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, ShoppingCart, GraduationCap, Gavel, ArrowRight, Globe, Cpu, Activity } from "lucide-react";

const useCases = [
  {
    title: "Bank & Fintech",
    items: ["OTP and 2FA for login", "Transaction notifications", "Fraud alerts"],
    icon: <ShieldCheck size={20} />,
    uptime: "99.999%",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "E-commerce",
    items: ["Order tracking", "Flash sale alerts", "Re-engagement"],
    icon: <ShoppingCart size={20} />,
    uptime: "99.94%",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Education",
    items: ["Result notices", "Schedule reminders", "Event alerts"],
    icon: <GraduationCap size={20} />,
    uptime: "99.95%",
    color: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "Government",
    items: ["Public awareness", "Emergency info", "Field communication"],
    icon: <Gavel size={20} />,
    uptime: "100%",
    color: "from-emerald-500/20 to-teal-500/20",
  },
];

export default function LinearUseCases() {
  return (
    <section id="use-cases" className="bg-[#FCFCFD] py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Sophisticated Background Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03]"
          style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-100/40 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-10 md:mb-15">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
                System Infrastructure
              </span>
            </div>

            <h2 className="text-xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Industry Specific <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-blue-600">Solutions.</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-xl leading-relaxed">
              Specialized routing protocols optimized for different traffic profiles to ensure industry-leading delivery success.
            </p>
          </div>

          <Link
            href="/signup"
            className="group flex items-center gap-3 text-xs md:text-sm font-bold text-slate-900 hover:text-(--from) transition-all"
          >
            Documentation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform hover:text-(--from)" />
          </Link>
        </div>

        {/* Advanced Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className="group relative p-5 md:p-8 bg-white border border-slate-200 rounded-3xl transition-all duration-500 hover:border-cyan-200 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col h-full overflow-hidden"
            >
              {/* Subtle Gradient Hover Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br ${uc.color}`} />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon & Uptime */}
                <div className="flex justify-between items-start mb-5 md:mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:scale-110 group-hover:bg-white group-hover:text-cyan-600 group-hover:shadow-sm transition-all duration-300">
                    {uc.icon}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter mb-1">Uptime</span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-600 font-mono text-xs font-bold border border-emerald-100">
                      {uc.uptime}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="grow">
                  <h4 className="text-md md:text-lg font-bold mb-4 text-slate-900 group-hover:text-cyan-950 transition-colors">{uc.title}</h4>
                  <ul className="space-y-3">
                    {uc.items.map((item, idx) => (
                      <li key={idx} className="text-[15px] text-slate-500 flex items-start gap-3 leading-snug">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-cyan-500 transition-colors shrink-0" />
                        <span className="group-hover:text-slate-700 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Advanced Sparkline Section */}
                <div className="mt-10 pt-6 border-t border-slate-50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Real-time Load</span>
                    <div className="flex gap-0.5">
                      {[...Array(3)].map((_, i) => <div key={i} className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />)}
                    </div>
                  </div>
                  <div className="flex gap-1 h-6 items-end">
                    {[...Array(12)].map((_, bar) => (
                      <motion.div
                        key={bar}
                        animate={{ height: [6, Math.random() * 20 + 6, 6] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: bar * 0.1 }}
                        className="flex-1 bg-slate-100 group-hover:bg-cyan-200/50 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* System Footer Status */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 py-8 border-y border-slate-100/80">
          <StatusItem icon={<Globe size={14} />} label="Global Nodes" value="241 Active" />
          <StatusItem icon={<Cpu size={14} />} label="Compute Engine" value="V3-Edge" />
          <StatusItem
            icon={<Activity size={14} className="text-emerald-500" />}
            label="Network Status"
            value="Operational"
            valueClass="text-emerald-600"
          />
        </div>
      </div>
    </section>
  );
}

function StatusItem({ icon, label, value, valueClass = "text-slate-900" }: { icon: React.ReactNode; label: string; value: string; valueClass?: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-slate-50 text-slate-400 border border-slate-100">
        {icon}
      </div>
      <div>
        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.15em] mb-0.5">{label}</p>
        <p className={`text-[11px] font-bold uppercase tracking-wider ${valueClass}`}>{value}</p>
      </div>
    </div>
  );
}