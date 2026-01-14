import { motion } from "framer-motion";

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
    features: [
      "Brand Sender ID",
      "Advanced Dashboard",
      "Priority Support",
      "Role Management",
    ],
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

export default function Pricing() {
  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // --- Sub-Components ---
  const CheckIcon = () => (
    <svg
      className="w-5 h-5 text-cyan-500 mr-2 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );

  return (
    <section id="pricing" className="py-32 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
          Simple, Scalable Pricing
        </h2>
        <p className="text-(--secondary) text-lg leading-relaxed">
          No setup fees or complex contracts. Choose a plan that matches your
          current volume and scale seamlessly.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {pricing.map((p, i) => (
          <motion.div
            variants={itemVariants}
            key={i}
            className={`relative p-10 rounded-[2rem] border transition-all duration-500 ${p.isPopular
                ? "bg-white border-blue-500 shadow-[0_20px_50px_rgba(8,112,184,0.15)] scale-105 z-10"
                : "bg-slate-50 border-slate-200 hover:border-slate-300"
              }`}
          >
            {p.isPopular && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-linear-to-r from-blue-600 to-cyan-500 text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                Most Preferred
              </div>
            )}
            <h3 className="text-xl font-bold mb-4 text-slate-800">{p.title}</h3>
            <div className="flex items-baseline mb-2">
              <span className="text-4xl font-black text-slate-900">
                {p.price}
              </span>
              <span className="ml-2 text-(--secondary) font-medium text-sm">
                / SMS
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-10 font-medium">
              {p.minPurchase}
            </p>

            <div className="space-y-5 mb-12">
              {p.features.map((f) => (
                <div
                  key={f}
                  className="flex items-center text-sm font-medium text-slate-600"
                >
                  <CheckIcon /> {f}
                </div>
              ))}
            </div>

            <button
              className={`w-full py-4 rounded-2xl font-bold transition-all ${p.isPopular
                  ? "bg-[#0B1E33] text-white hover:bg-slate-800 shadow-xl shadow-slate-200"
                  : "bg-white text-slate-900 border border-slate-200 hover:bg-slate-100"
                }`}
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
