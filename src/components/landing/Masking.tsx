import React from "react";
const routesOptions = [
  {
    type: "Masking SMS",
    title: "Branded, high-trust messages",
    description:
      "Ideal when the SMS should clearly show your company name to the customer.",
    items: [
      "Sender ID: Your brand name (e.g. GOTISMS)",
      "Higher trust & open rate",
      "Perfect for offers, reminders, official notice",
      "Requires one-time sender ID approval",
    ],
    badge: "blue",
  },
  {
    type: "Non-Masking SMS",
    title: "Fast & affordable delivery",
    description:
      "Optimized for OTP and system alerts where speed & cost are key.",
    items: [
      "Sender ID: Generic numeric ID",
      "Lower cost per SMS",
      "Instant route activation",
      "Best for OTP, system alerts, internal use",
    ],
    badge: "green",
  },
];
export default function Masking() {
  return (
    <section className="text-center space-y-4">
      <p className="text-blue-500 text-sm uppercase">Routes & Options</p>
      <h2 className="text-3xl font-bold">
        Masking vs Non-Masking – choose both
      </h2>
      <p className="text-gray-600">
        Use premium Masking for your brand and cost-effective Non-Masking for
        high-volume transactional traffic.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {routesOptions.map((route) => (
          <div key={route.type} className="p-6 border rounded-lg text-left">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                route.badge === "blue"
                  ? "bg-blue-100 text-blue-500"
                  : "bg-green-100 text-green-500"
              }`}
            >
              {route.type}
            </span>
            <h3 className="font-bold text-lg mt-2">{route.title}</h3>
            <p className="text-gray-600 mt-1">{route.description}</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              {route.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
