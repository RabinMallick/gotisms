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

  const handleMouseMove = useCallback(
    (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      x.set(e.clientX - rect.left - rect.width / 2);
      y.set(e.clientY - rect.top - rect.height / 2);
    },
    [x, y]
  );

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

  // Multi-layer blobs
  const blobs = [
    { size: 30, xRange: [-500, 500], yRange: [-500, 500], color: "bg-blue-200", blur: 80 },
    { size: 25, xRange: [-400, 400], yRange: [-400, 400], color: "bg-indigo-200/70", blur: 100 },
    { size: 20, xRange: [-600, 600], yRange: [-600, 600], color: "bg-purple-200/50", blur: 120 },
  ];

  const blobX1 = useTransform(mouseX, blobs[0].xRange, [blobs[0].size, -blobs[0].size]);
  const blobY1 = useTransform(mouseY, blobs[0].yRange, [blobs[0].size, -blobs[0].size]);
  const blobX2 = useTransform(mouseX, blobs[1].xRange, [blobs[1].size, -blobs[1].size]);
  const blobY2 = useTransform(mouseY, blobs[1].yRange, [blobs[1].size, -blobs[1].size]);
  const blobX3 = useTransform(mouseX, blobs[2].xRange, [blobs[2].size, -blobs[2].size]);
  const blobY3 = useTransform(mouseY, blobs[2].yRange, [blobs[2].size, -blobs[2].size]);

  const blobTransforms = [
    { x: blobX1, y: blobY1 },
    { x: blobX2, y: blobY2 },
    { x: blobX3, y: blobY3 },
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative  flex items-center py-16 md:py-20 px-4 md:px-6 
                 bg-[#f8fafc] overflow-hidden text-slate-900"
    >
      {/* ---------------- BACKGROUND ---------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {blobs.map((b, i) => {
          return (
            !shouldReduceMotion && (
              <motion.div
                key={i}
                style={{ x: blobTransforms[i].x, y: blobTransforms[i].y }}
                className={`absolute w-[${b.size}%] h-[${b.size}%] ${b.color} blur-[${b.blur}px] rounded-full`}
              />
            )
          );
        })}

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

          {/* ---------------- LEFT CONTENT ---------------- */}
          <div className="lg:col-span-7">

            <div className="flex-wrap gap-2 mb-6 hidden md:flex">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
                         bg-blue-50 border border-blue-100 shadow-sm "
              >
                <span className="flex h-2 w-2 rounded-full bg-(--from) animate-pulse" />
                <span className="text-[10px] font-bold text-(--primary) uppercase tracking-widest">
                  Reliable Messaging Network
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
                         bg-blue-50 border border-blue-100 shadow-sm "
              >
                <span className="flex h-2 w-2 rounded-full bg-(--from) animate-pulse" />
                <span className="text-[10px] font-bold text-(--primary) uppercase tracking-widest">
                  Enterprise Messaging Platform
                </span>
              </motion.div>

            </div>
            <h1 className="text-2xl md:text-5xl font-extrabold tracking-tight  mb-3 relative">
              Scale faster with
              <br />
              <motion.span
                className="text-transparent bg-clip-text bg-linear-to-r from-(--from) to-indigo-500"
              >
                intelligent messaging
                <span className="absolute inset-x-0 -bottom-1 h-3 bg-blue-500/20 blur-lg -z-10" />
              </motion.span>
            </h1>

            <div className="h-0.5 w-32 bg-linear-to-r from-blue-500 to-indigo-500 rounded-full mb-6 animate-pulse" />

            <p className="text-slate-600 text-sm md:text-base max-w-lg mb-10 leading-relaxed">
              A smart, modern SMS gateway for Masking & Non-Masking SMS, OTP, and
              notifications. Global reach,{" "}
              <span className="font-semibold text-slate-900">99.9% delivery rate</span>,
              powerful APIs, and real-time reporting.
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-slate-600 mb-10">
              <div>
                <span className="block text-lg font-bold text-slate-900">99.9%</span>
                Delivery Rate
              </div>
              <div>
                <span className="block text-lg font-bold text-slate-900">Global</span>
                SMS Coverage
              </div>
              <div>
                <span className="block text-lg font-bold text-slate-900">API-First</span>
                Developer Friendly
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="text-xs p-2 px-3 rounded-xl bg-black text-white cursor-pointer
                           font-semibold  
                           hover:bg-(--from) transition"
              >
                Get Started Free
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="text-xs p-2 px-3 rounded-xl bg-transparent cursor-pointer  border border-gray-200
                           hover:bg-(--to) transition"
              >
                View API Docs
              </motion.button>

            </div>
            <small className="text-slate-500">
              No setup fee · Easy API integration · 24/7 NOC support
            </small>
          </div>

          {/* ---------------- RIGHT PHONE ---------------- */}
          <div className="lg:col-span-5 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-400/10 blur-[100px]" />

            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : { y: [0, -12, 0], rotate: [0, 2, -2, 0], scale: [1, 1.02, 0.98, 1] }
              }
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
  );
};

export default HeroSection;
