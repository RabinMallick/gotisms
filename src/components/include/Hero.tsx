import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-[#0B1E33]">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Direct Operator Connectivity
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
              Deliver messages <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400">
                without borders.
              </span>
            </h1>

            <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience the next generation of bulk messaging. High-throughput
              routes for OTPs and marketing campaigns with real-time analytics.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="px-8 py-4 bg-white text-[#0B1E33] font-bold rounded-2xl hover:bg-cyan-50 transition-all shadow-xl shadow-white/5">
                Start Sending Now
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/5 transition-all">
                Documentation
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-slate-900/40 backdrop-blur-2xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full"></div>
              <div className="grid grid-cols-2 gap-6 relative z-10">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/5 group hover:border-cyan-500/30 transition-colors">
                  <p className="text-(--secondary) text-xs uppercase font-bold mb-2">
                    Total Packets
                  </p>
                  <p className="text-3xl font-black text-white tracking-tight">
                    2.9B+
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                  <p className="text-(--secondary) text-xs uppercase font-bold mb-2">
                    Avg Latency
                  </p>
                  <p className="text-3xl font-black text-white tracking-tight">
                    180<span className="text-sm text-cyan-400 ml-1">ms</span>
                  </p>
                </div>
              </div>

              <div className="mt-6 p-6 bg-linear-to-br from-blue-600/10 to-transparent rounded-3xl border border-white/5">
                <div className="flex justify-between items-end h-20 gap-1">
                  {[30, 60, 45, 90, 65, 80, 40, 95].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: h + "%" }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex-1 bg-linear-to-t from-cyan-600 to-cyan-400 rounded-t-sm"
                    />
                  ))}
                </div>
                <div className="mt-4 flex justify-between text-[10px] font-bold text-(--secondary) uppercase tracking-tighter">
                  <span>Live Traffic Stream</span>
                  <span className="text-green-500">System Healthy</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
