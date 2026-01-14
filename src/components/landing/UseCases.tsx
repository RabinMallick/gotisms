import Link from "next/link";
import { motion } from "framer-motion";

const useCases = [
  {
    title: "Bank & Fintech",
    items: [
      "OTP and 2FA for login",
      "Transaction notifications",
      "Fraud alerts",
    ],
    color: "bg-blue-50 border-blue-100",
  },
  {
    title: "E-commerce",
    items: ["Order tracking", "Flash sale alerts", "Re-engagement"],
    color: "bg-emerald-50 border-emerald-100",
  },
  {
    title: "Education",
    items: ["Result notices", "Schedule reminders", "Event alerts"],
    color: "bg-indigo-50 border-indigo-100",
  },
  {
    title: "Government",
    items: ["Public awareness", "Emergency info", "Field communication"],
    color: "bg-teal-50 border-teal-100",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="bg-slate-900 py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Industry Specific Solutions
            </h2>
            <p className="text-slate-400 text-lg">
              We provide specialized routing for different traffic types to
              ensure the highest delivery rates possible.
            </p>
          </div>
          <Link
            href="/signup"
            className="text-cyan-400 font-bold flex items-center gap-2 group"
          >
            View all integrations{" "}
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((uc, i) => (
            <motion.div
              whileHover={{ y: -5 }}
              key={i}
              className="p-8 rounded-4xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500 transition-colors">
                <div className="w-5 h-5 border-2 border-cyan-400 group-hover:border-white rounded-md"></div>
              </div>
              <h4 className="text-xl font-bold mb-6 text-white">{uc.title}</h4>
              <ul className="space-y-4">
                {uc.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-slate-400 flex items-start leading-tight"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-500 mr-3 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
