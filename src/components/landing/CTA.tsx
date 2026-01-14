import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-linear-to-br from-[#0B1E33] to-[#06121f] rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-linear(circle_at_top_right,rgba(6,182,212,0.15),transparent)]"></div>
        <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 relative z-10">
          Start sending in minutes.
        </h2>
        <p className="text-slate-400 mb-12 text-xl max-w-2xl mx-auto relative z-10 leading-relaxed">
          Join 2,900+ businesses using GotisMS to power their critical
          communications.
        </p>
        <div className="relative z-10">
          <button className="bg-white text-blue-900 px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl">
            Create Account Free
          </button>
          <p className="mt-6 text-(--secondary) text-sm font-medium italic">
            No credit card required to start
          </p>
        </div>
      </motion.div>
    </section>
  );
}
