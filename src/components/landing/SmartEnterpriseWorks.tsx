import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, ShoppingBag, Plane, Landmark, GraduationCap, Code2, TrendingUp, ShieldCheck, MousePointer2, Zap, ArrowRight, BarChart3, CheckCircle2, Terminal } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import Image from 'next/image';


const industryData: Record<string, { icon: React.ReactNode; quote: string; author: string; stat: string; label: string; tag: string; color: string }> = {
    "Bank / NBFI": { icon: <Landmark />, quote: "GotisMS provides the low-latency infrastructure we need for critical transaction alerts and MFA.", author: "Head of Infra, Global Bank", stat: "99.99%", label: "Uptime Stability", tag: "Enterprise Security", color: "#2563eb" },
    "E-commerce": { icon: <ShoppingBag />, quote: "Automating our delivery notifications reduced our customer support tickets by 40%. The API is a breeze.", author: "Ops Manager, ShopGlobal", stat: "1.2M", label: "Messages/Mo", tag: "High Velocity", color: "#6366f1" },
    "Travel & OTA": { icon: <Plane />, quote: "Booking confirmations reach our customers instantly across 200+ countries. Most reliable partner.", author: "CTO, FlyNext Travel", stat: "< 2s", label: "Global Latency", tag: "Global Scale", color: "#0ea5e9" },
    "Govt & NGO": { icon: <Building2 />, quote: "Disseminating emergency alerts requires massive scale. GotisMS handles our surges without delay.", author: "Director, Public Safety", stat: "100k+", label: "TPS Capacity", tag: "Public Infrastructure", color: "#64748b" },
    "Education": { icon: <GraduationCap />, quote: "From attendance alerts to exam results, GotisMS keeps parents and students informed in real-time.", author: "Dean, EduHeights", stat: "98%", label: "Open Rate", tag: "Mass Communication", color: "#8b5cf6" },
    "Software & IT": { icon: <Code2 />, quote: "The developer documentation is the best we've seen. Up and running in our Node.js environment in minutes.", author: "Lead Dev, SaaS Cloud", stat: "24/7", label: "Dev Support", tag: "Developer First", color: "#4f46e5" }
};

export default function SmartEnterpriseWorks() {
    const industries = Object.keys(industryData);
    const [activeTab, setActiveTab] = useState(industries[0]);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setActiveTab((prev) => industries[(industries.indexOf(prev) + 1) % industries.length]);
        }, 5000);
        return () => clearInterval(interval);
    }, [isPaused, industries]);

    return (
        <section
            className="relative bg-[#F8FAFC] py-8 md:py-16 px-3 md:px-6  overflow-hidden font-sans"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Smart Background: Grid + Radial Glow */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-150 bg-blue-100/50 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8">
                    <div className=" ">
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--from) text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                            <ShieldCheck className="w-3 h-3" /> Tier-1 Infrastructure
                        </motion.div>
                        <h2 className="text-xl md:text-3xl font-extrabold text-(--primary) tracking-tight leading-[1.1]">
                            Built for the <span className="text-xl md:text-3xl text-slate-400">Communication Era.</span>
                        </h2>
                    </div>

                    <div className="relative">
                        {/* gradient glow */}
                        <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-(--from)/30 via-purple-400/20 to-cyan-400/30 blur-xl opacity-70" />

                        {/* card */}
                        <div className="relative rounded-2xl bg-sky-200/10 backdrop-blur-xl border border-white/40 md:shadow-xl px-4 p-4 md:p-4 md:px-5 pt-0">
                            <div className="flex items-center gap-10">

                                {/* Clients */}
                                <div className="group relative">
                                    <p className="text-sm md:text-xl font-black text-(--primary) tracking-tight
          transition-all duration-300 group-hover:text-(--from) group-hover:scale-105">
                                        500 <span className="text-(--from)">+</span>
                                    </p>
                                    <p className="mt-1 text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-[0.2em]">
                                        Clients
                                    </p>

                                    {/* accent bar */}
                                    <span className="absolute -bottom-3 left-0 h-0.75 w-8 rounded-full bg-(--from)
          transition-all duration-300 group-hover:w-full" />
                                </div>

                                {/* divider */}
                                <div className="h-14 w-px bg-linear-to-b from-transparent via-slate-300 to-transparent" />

                                {/* Success */}
                                <div className="group relative">
                                    <p className="text-sm md:text-xl font-black text-(--primary) tracking-tight
          transition-all duration-300 group-hover:text-(--to) group-hover:scale-105">
                                        99.9<span className="text-(--to)"> %</span>
                                    </p>
                                    <p className="mt-1 text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-[0.2em]">
                                        Success
                                    </p>

                                    {/* accent bar */}
                                    <span className="absolute -bottom-3 left-0 h-0.75 w-8 rounded-full bg-(--to)
          transition-all duration-300 group-hover:w-full" />
                                </div>

                            </div>
                        </div>
                    </div>


                </div>

                {/* Industry Selector - Sleeker Swiper */}
                <div className="mb-12">
                    <Swiper slidesPerView="auto" spaceBetween={10} freeMode modules={[FreeMode]} className="overflow-visible!">
                        {industries.map((item) => (
                            <SwiperSlide key={item} style={{ width: 'auto' }}>
                                <button
                                    onClick={() => { setActiveTab(item); setIsPaused(true); }}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-2xl text-sm font-semibold
    transition-all duration-300 border cursor-pointer
    ${activeTab === item
                                            ? "bg-white/50 border-(--from)/15 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] text-(--from) scale-105"
                                            : "bg-transparent border-(--from)/10 text-slate-500 hover:text-slate-800"
                                        }`}
                                >
                                    <span
                                        className={`inline-flex items-center justify-center
      ${activeTab === item ? "text-(--from)" : "text-slate-400"}
      w4-.5 h-4.5  shrink-0`}
                                    >
                                        {industryData[item].icon}
                                    </span>

                                    <span className="leading-none">
                                        {item}
                                    </span>
                                </button>

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Content Matrix */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Main Testimonial Card */}
                    <div className="lg:col-span-8">

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: "circOut" }}
                                className="h-full bg-(--primary)/2 border border-white/5 rounded-4xl md:rounded-[3rem] p-5  md:p-8 flex flex-col justify-between relative overflow-hidden group"
                            >
                                {/* Background Decor */}
                                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] -z-10 group-hover:bg-blue-600/20 transition-colors duration-1000" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-12">
                                        <div className=" rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-mono uppercase tracking-[0.2em]">
                                            {industryData[activeTab].tag}
                                        </div>
                                        <Terminal size={14} className="text-slate-600" />
                                    </div>

                                    <h3 className="
  relative
  text-xl md:text-3xl
  font-extrabold
  leading-[1.15]
  tracking-tight
  text-transparent bg-clip-text
  bg-linear-to-r from-(--from) via-(--primary) to-(--primary)/50
  mb-12
">
                                        “  {industryData[activeTab].quote}     ”


                                    </h3>

                                </div>

                                <div className="flex items-center justify-between pt-8 border-t border-white/5 relative z-10">
                                    <div className="flex items-center gap-5">
                                        <div className="relative">
                                            <div className=" w-10 md:w-14  h-10 md:h-14 rounded-2xl bg-linear-to-br from-slate-700 to-slate-800 flex items-center justify-center font-bold text-xl border border-white/10 shadow-xl text-white">
                                                {industryData[activeTab].author[0]}
                                            </div>
                                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 border-2 border-(--primary) rounded-full flex items-center justify-center">
                                                <Zap className="text-white w-3 h-3" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-bold text-(--primary) text-sm md:text-lg leading-none mb-1">{industryData[activeTab].author}</p>
                                            <p className="text-[10px] md:text-xs text-slate-500 font-medium tracking-wide">Enterprise Customer — {activeTab}</p>
                                        </div>
                                    </div>

                                    <div className="hidden md:flex items-center gap-2 text-slate-500 font-mono text-[10px] uppercase">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live Verified
                                    </div>
                                </div>

                                {/* Industry Icon Overlay */}
                                <div className="absolute -bottom-12 -right-12 p-8 opacity-[0.02] group-hover:opacity-[0.05] group-hover:scale-110 transition-all duration-1000">
                                    {React.cloneElement(industryData[activeTab].icon as React.ReactElement, { size: 320 } as any)}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Metrics & CTA Column */}
                    <div className="lg:col-span-4 flex flex-col gap-6">

                        {/* Stat Card */}
                        <div className="bg-(--primary) rounded-[2.5rem] p-8 text-white relative overflow-hidden flex-1 shadow-2xl shadow-blue-900/20">
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-(--from)">
                                        <BarChart3 size={20} />
                                    </div>
                                    <div className="flex items-center gap-1 text-[10px] font-bold text-(--from) bg-(--from)/10 px-2 py-1 rounded-md">
                                        <span className="w-1.5 h-1.5 rounded-full bg-(--from) animate-pulse" /> LIVE
                                    </div>
                                </div>

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                    >
                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
                                            {industryData[activeTab].label}
                                        </p>
                                        <h4 className="text-2xl md:text-5xl font-bold tracking-tighter mb-6">
                                            {industryData[activeTab].stat}
                                        </h4>
                                    </motion.div>
                                </AnimatePresence>

                                <div className="space-y-4">
                                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                        <motion.div
                                            animate={{ width: ["20%", "85%", "40%", "100%"] }}
                                            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                                            className="h-full bg-(--from)"
                                        />
                                    </div>
                                    <div className="flex justify-between text-[10px] font-mono text-slate-500 uppercase">
                                        <span>Processing</span>
                                        <span>Optimized</span>
                                    </div>
                                </div>
                            </div>
                            <TrendingUp className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5" />
                        </div>

                        {/* CTA Button */}
                        <button className="group relative overflow-hidden p-2 md:py-3 rounded-4xl bg-(--from) text-white font-bold text-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer">
                            <div className="text-sm md:text-lg relative z-10 flex items-center justify-center gap-3">
                                Request API Access <MousePointer2 className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                            <div className="absolute inset-0 bg-linear-to-r from-(--from) to-(--to) opacity-0 group-hover:opacity-100 transition-opacity " />
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
}