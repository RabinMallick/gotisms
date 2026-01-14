import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, ShoppingBag, Plane, Landmark, GraduationCap, Code2, TrendingUp, ShieldCheck, MousePointer2, Zap, ArrowRight, BarChart3, CheckCircle2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const industryData = {
    "Bank / NBFI": { icon: <Landmark />, quote: "GotisMS provides the low-latency infrastructure we need for critical transaction alerts and MFA.", author: "Head of Infra, Global Bank", stat: "99.99%", label: "Uptime Stability", tag: "Enterprise Security", color: "#2563eb" },
    "E-commerce": { icon: <ShoppingBag />, quote: "Automating our delivery notifications reduced our customer support tickets by 40%. The API is a breeze.", author: "Ops Manager, ShopGlobal", stat: "1.2M", label: "Messages/Mo", tag: "High Velocity", color: "#6366f1" },
    "Travel & OTA": { icon: <Plane />, quote: "Booking confirmations reach our customers instantly across 200+ countries. Most reliable partner.", author: "CTO, FlyNext Travel", stat: "< 2s", label: "Global Latency", tag: "Global Scale", color: "#0ea5e9" },
    "Govt & NGO": { icon: <Building2 />, quote: "Disseminating emergency alerts requires massive scale. GotisMS handles our surges without delay.", author: "Director, Public Safety", stat: "100k+", label: "TPS Capacity", tag: "Public Infrastructure", color: "#64748b" },
    "Education": { icon: <GraduationCap />, quote: "From attendance alerts to exam results, GotisMS keeps parents and students informed in real-time.", author: "Dean, EduHeights", stat: "98%", label: "Open Rate", tag: "Mass Communication", color: "#8b5cf6" },
    "Software & IT": { icon: <Code2 />, quote: "The developer documentation is the best we've seen. Up and running in our Node.js environment in minutes.", author: "Lead Dev, SaaS Cloud", stat: "24/7", label: "Dev Support", tag: "Developer First", color: "#4f46e5" }
};

export default function AdvancedWorks() {
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
            className="relative bg-[#F8FAFC] py-24 px-6 overflow-hidden font-sans"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Smart Background: Grid + Radial Glow */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-100/50 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                            <ShieldCheck className="w-3 h-3" /> Tier-1 Infrastructure
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
                            Built for the <br />
                            <span className="text-slate-400">Communication Era.</span>
                        </h2>
                    </div>

                    <div className="flex gap-8 border-l border-slate-200 pl-8">
                        <div>
                            <p className="text-2xl font-bold text-slate-900">500+</p>
                            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Clients</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-slate-900">99.9%</p>
                            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Success</p>
                        </div>
                    </div>
                </div>

                {/* Industry Selector - Sleeker Swiper */}
                <div className="mb-12">
                    <Swiper slidesPerView="auto" spaceBetween={10} freeMode modules={[FreeMode]} className="!overflow-visible">
                        {industries.map((item) => (
                            <SwiperSlide key={item} style={{ width: 'auto' }}>
                                <button
                                    onClick={() => { setActiveTab(item); setIsPaused(true); }}
                                    className={`flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 border ${activeTab === item
                                        ? "bg-white border-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] text-blue-600 scale-105"
                                        : "bg-transparent border-transparent text-slate-500 hover:text-slate-800"
                                        }`}
                                >
                                    <span className={activeTab === item ? "text-blue-600" : "text-slate-400"}>
                                        {React.cloneElement(industryData[item].icon, { size: 18, strokeWidth: 2.5 })}
                                    </span>
                                    {item}
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
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: "circOut" }}
                                className="group relative h-full bg-white rounded-[2.5rem] p-10 md:p-16 border border-slate-100 shadow-sm overflow-hidden"
                            >
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-center gap-3 mb-10">
                                        <div className="px-3 py-1 rounded-lg bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-widest border border-slate-100">
                                            {industryData[activeTab].tag}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl md:text-4xl font-medium text-slate-800 leading-snug mb-12 flex-grow">
                                        “{industryData[activeTab].quote}”
                                    </h3>

                                    <div className="flex items-center justify-between mt-auto pt-8 border-t border-slate-50">
                                        <div className="flex items-center gap-4">
                                            <div className="relative">
                                                <img className="w-12 h-12 rounded-full object-cover" src={`https://i.pravatar.cc/150?u=${activeTab}`} alt="User" />
                                                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
                                                    <CheckCircle2 className="text-white w-3 h-3" />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900 leading-none mb-1">{industryData[activeTab].author}</p>
                                                <p className="text-xs text-slate-400 font-medium tracking-wide">Verified Customer</p>
                                            </div>
                                        </div>
                                        <ArrowRight className="text-slate-200 group-hover:text-blue-500 group-hover:translate-x-2 transition-all" />
                                    </div>
                                </div>

                                {/* Subtle Geometric Decor */}
                                <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                                    {React.cloneElement(industryData[activeTab].icon, { size: 200 })}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Metrics & CTA Column */}
                    <div className="lg:col-span-4 flex flex-col gap-6">

                        {/* Stat Card */}
                        <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden flex-1 shadow-2xl shadow-blue-900/20">
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                                        <BarChart3 size={20} />
                                    </div>
                                    <div className="flex items-center gap-1 text-[10px] font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded-md">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" /> LIVE
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
                                        <h4 className="text-5xl font-bold tracking-tighter mb-6">
                                            {industryData[activeTab].stat}
                                        </h4>
                                    </motion.div>
                                </AnimatePresence>

                                <div className="space-y-4">
                                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                        <motion.div
                                            animate={{ width: ["20%", "85%", "40%", "100%"] }}
                                            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                                            className="h-full bg-blue-500"
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
                        <button className="group relative overflow-hidden py-8 rounded-[2rem] bg-blue-600 text-white font-bold text-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300">
                            <div className="relative z-10 flex items-center justify-center gap-3">
                                Request API Access <MousePointer2 className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
}