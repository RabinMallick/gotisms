import React, { useCallback, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import PhoneUI from "../ui/PhoneUI";

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 60, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 60, damping: 30 });

  const blobX = useTransform(mouseX, [-500, 500], [50, -50]);
  const blobY = useTransform(mouseY, [-500, 500], [50, -50]);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }, [x, y]);

  // Mobile gyro parallax
  useEffect(() => {
    const handleOrientation = (e) => {
      if (e.gamma && e.beta) {
        x.set(e.gamma * 5);
        y.set(e.beta * 5);
      }
    };

    window.addEventListener("deviceorientation", handleOrientation);
    return () =>
      window.removeEventListener("deviceorientation", handleOrientation);
  }, [x, y]);

  return (
    <>
      <section
        onMouseMove={handleMouseMove}
        className="relative min-h-screen flex items-center   px-4 md:px-6 
                   bg-[#f8fafc] overflow-hidden text-slate-900"
      >
        {/* ================= BACKGROUND ================= */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] 
                          bg-blue-100/50 blur-[120px] rounded-full" />
          <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] 
                          bg-indigo-50/60 blur-[100px] rounded-full" />

          {!shouldReduceMotion && (
            <motion.div
              style={{ x: blobX, y: blobY }}
              className="absolute top-[15%] left-[25%] w-[30%] h-[30%] 
                         bg-blue-200 blur-[80px] rounded-full"
            />
          )}

          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
              backgroundSize: "10px 10px",
              maskImage: "linear-gradient(to bottom, black, transparent)",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* ================= LEFT ================= */}
            <div className="lg:col-span-7">
              {/* Live status */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full 
                              bg-emerald-50 border border-emerald-100 
                              text-emerald-700 text-xs font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full 
                                   rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                All systems operational · 99.99% uptime
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 
                              rounded-full bg-blue-50 text-blue-600 
                              text-xs font-semibold">
                🚀 Enterprise Messaging Platform
              </div>

              <h1 className="text-2xl md:text-5xl font-extrabold tracking-tight 
                             leading-[1.05] mb-6">
                Scale faster with intelligent messaging <br />
                <span className="relative inline-block text-transparent bg-clip-text 
                                 bg-linear-to-r from-blue-600 to-indigo-500">
                  powered by GotisMS
                  <span className="absolute inset-x-0 -bottom-1 h-3 
                                   bg-blue-500/20 blur-lg -z-10" />
                </span>
              </h1>

              <div className="h-0.5 w-32 bg-linear-to-r from-blue-500 
                              to-indigo-500 rounded-full mb-6 animate-pulse" />

              <p className="flex flex-wrap items-center gap-3 mb-6 text-sm md:text-base text-slate-600">
                <span className="font-medium">Built for:</span>
                {["OTP", "Marketing", "Notifications", "Transactional SMS"].map(
                  (item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-slate-100 
                                 text-slate-700 font-medium"
                    >
                      {item}
                    </span>
                  )
                )}
              </p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-slate-600 text-md md:text-base max-w-lg mb-10 leading-relaxed"
              >
                A modern SMS gateway with global reach, real-time delivery insights,
                and enterprise-grade reliability. Trusted by fast-growing companies.
              </motion.p>

              {/* Message Flow */}
              <div className="flex items-center gap-3 text-xs text-slate-500 mb-8">
                <span className="px-2 py-1 bg-slate-100 rounded-md">App</span>
                <motion.span animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  →
                </motion.span>
                <span className="px-2 py-1 bg-slate-100 rounded-md">GotisMS</span>
                <motion.span animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}>
                  →
                </motion.span>
                <span className="px-2 py-1 bg-slate-100 rounded-md">User</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3 rounded-xl bg-blue-600 text-white 
                             font-semibold shadow-lg shadow-blue-500/30 
                             hover:bg-blue-700 transition"
                >
                  Get Started Free
                </motion.button>

                <button className="px-6 py-3 rounded-xl border border-slate-200 
                                   text-slate-700 font-semibold hover:bg-slate-50">
                  View API Docs
                </button>
              </div>

            </div>

            {/* ================= RIGHT ================= */}
            <div className="lg:col-span-5 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 
                              -translate-y-1/2 w-[80%] h-[80%] 
                              bg-blue-400/10 blur-[100px]" />

              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 flex justify-center lg:justify-end"
              >
                <div className="drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                  <PhoneUI />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
