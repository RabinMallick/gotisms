
const steps = [
  {
    number: "01",
    title: "Create your account",
    description: "Sign up, verify your details and login to the GotisMS control panel.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Choose route & KYC",
    description: "Decide Masking or Non-Masking, share required documents and get routes activated.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Top-up & integrate",
    description: "Purchase SMS credit, configure templates, and integrate the API or use the web panel.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    number: "04",
    title: "Send & monitor",
    description: "Launch campaigns or OTP traffic and watch live delivery stats, DLR and logs.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

export default function AdvancedSteps() {
  return (
    <section className="bg-slate-50 py-8 md:py-16 px-3 md:px-6 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="md:text-center mb-10 md:mb-12">
          <span className="text-[12px]  md:text-sm text-(--from) font-bold tracking-widest text-shadow-2xs uppercase">Onboarding Process</span>
          <h2 className="text-xl md:text-3xl font-extrabold text-(--primary) mt-3">Ready to scale in minutes</h2>
          <p className=" tex-sm md:text-md  text-(--secondary) mt-4 max-w-2xl mx-auto ">
            Our streamlined process ensures you can start sending SMS to your customers without technical hurdles.
          </p>
        </div>

        {/* --- MOBILE & TABLET VIEW (Vertical Timeline) --- */}
        <div className="block lg:hidden space-y-10 relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-slate-200 z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex gap-5">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-white shadow-lg border border-slate-100 flex items-center justify-center text-(--from)">
                {step.icon}
              </div>
              <div>
                <span className="text-(--from) font-bold text-sm">{step.number}</span>
                <h3 className="text-(--primary) text-md font-bold mb-2 ">{step.title}</h3>
                <p className="text-sm text-(--secondary)">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- DESKTOP VIEW (Horizontal Stepper) --- */}
        <div className="hidden lg:grid grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="group relative">
              {/* Connector Line (except for last item) */}
              {idx !== steps.length - 1 && (
                <div className="absolute top-12 left-1/2 w-full h-0.5 bg-slate-200 group-hover:bg-blue-200 transition-colors duration-500"></div>
              )}

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Number Badge */}
                <div className="w-20 h-20 mb-3 bg-white rounded-3xl shadow-xl shadow-slate-200/50 flex items-center justify-center text-(--from) group-hover:scale-110 group-hover:bg-(--from) group-hover:text-white transition-all duration-300 border border-slate-100">
                  {step.icon}
                </div>

                <div className="px-4">
                  <span className="block mb-4 text-xs font-bold uppercase tracking-tighter text-slate-400 group-hover:text-(--from) transition-colors">
                    Step {step.number}
                  </span>
                  <h3 className="text-xl font-extrabold text-(--primary) mb-3">{step.title}</h3>
                  <p className="text-(--secondary) text-sm ">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}