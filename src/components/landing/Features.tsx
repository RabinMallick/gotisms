export default function Features() {
  const featureList = [
    {
      title: "Masking & Non-Masking Routes",
      desc: "Use your brand name as sender ID with Masking, or cost-effective Non-Masking for OTP and system alerts – all from one panel.",
      icon: "ID",
    },
    {
      title: "Lightning-fast Delivery",
      desc: "Operator-grade connectivity, optimized routes and auto-retry to keep your important messages moving within seconds.",
      icon: "⚡",
    },
    {
      title: "Developer-friendly API",
      desc: "REST API, JSON, callback URL, IP whitelist and simple documentation for quick integration with any language or framework.",
      icon: "API",
    },
    {
      title: "Real-time Analytics",
      desc: "See campaign performance, route wise stats, delivery heatmap, and exportable reports for your audit and BI tools.",
      icon: "📊",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 text-center space-y-8">
        <p className="text-sm text-blue-500 font-semibold tracking-wide">PLATFORM FEATURES</p>
        <h2 className="text-3xl font-bold">Bright, powerful SMS gateway for your business</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From one-time campaign to always-on OTP traffic – GotisMS keeps your messages fast, reliable and measurable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {featureList.map((f, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
              <div className="text-2xl font-bold mb-4">{f.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
