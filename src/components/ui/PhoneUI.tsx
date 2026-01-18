
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
const PhoneUI = () => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 50, damping: 20 });
    const time = new Date();

    const formatted = time.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });

    // Expanded SMS Data
    const smsMessages = [
        {
            sender: 'STRIPE',
            text: 'Payment of $420.00 confirmed for Order #991.',
            type: 'system',
        },
        {
            sender: 'AIRBNB',
            text: 'Your host has accepted the booking! View details in app.',
            type: 'promo',
        },
        {
            sender: 'BINANCE',
            text: 'Withdrawal request for 0.45 BTC. Code: 882190.',
            type: 'system',
        },
        {
            sender: 'FEDEX',
            text: 'Package is 2 stops away. Be ready to sign.',
            type: 'promo',
        },
        {
            sender: 'HEALTH-ID',
            text: 'Your PCR result is Negative. Stay safe!',
            type: 'system',
        },
        {
            sender: 'UBER',
            text: 'Your ride is arriving in a White Tesla (JKL-901).',
            type: 'promo',
        },
        {
            sender: 'AMAZON',
            text: 'OTP to complete your login: 441092.',
            type: 'system',
        },
    ];
    return (
        <motion.div
            style={{
                rotateY: useTransform(mouseX, [-500, 500], [-10, 10]),
                rotateX: useTransform(mouseY, [-500, 500], [10, -10]),
            }}
            className="w-72 h-140 aspect-[9/18.5] bg-slate-900 rounded-[3rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-b-[6px] border-slate-950"
        >
            <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden flex flex-col relative">
                {/* Phone Header */}
                <div className="px-5 pt-6 pb-3 border-b border-slate-50 bg-white">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-bold">{formatted}</span>
                        <div className="w-16 h-4 bg-slate-100 rounded-full" />{' '}
                        {/* Speaker */}
                        <div className="flex gap-1">
                            <div className="w-3 h-3 bg-slate-100 rounded-sm" />
                            <div className="w-3 h-3 bg-slate-100 rounded-sm" />
                        </div>
                    </div>
                    <h3 className="text-lg font-black text-slate-800">
                        Messages
                    </h3>
                </div>

                {/* Scrolling SMS Feed */}
                <div className="flex-1 overflow-hidden relative bg-slate-50/50">
                    <motion.div
                        animate={{ y: [0, -600] }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                        className="p-3 space-y-3"
                    >
                        {[...smsMessages, ...smsMessages].map((msg, idx) => (
                            <div key={idx} className="space-y-1">
                                <div className="flex justify-between items-end px-1">
                                    <span
                                        className={`text-[7px] font-black uppercase ${msg.type === 'system'
                                            ? 'text-(--from)'
                                            : 'text-slate-400'
                                            }`}
                                    >
                                        {msg.sender}
                                    </span>
                                    <span className="text-[6px] text-slate-300 font-bold">
                                        JUST NOW
                                    </span>
                                </div>
                                <div
                                    className={`p-3 rounded-2xl text-[10px] leading-snug shadow-sm border ${msg.type === 'system'
                                        ? 'bg-(--from) text-white border-(--from) rounded-tr-none'
                                        : 'bg-white text-slate-600 border-slate-100 rounded-tl-none'
                                        }`}
                                >
                                    {msg.text}
                                    <div
                                        className={`mt-1 flex justify-end ${msg.type === 'system'
                                            ? 'text-blue-200'
                                            : 'text-green-500'
                                            }`}
                                    >
                                        <svg
                                            className="w-3 h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="3"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Gradient Mask to hide scroll edges */}
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-kinear-to-t from-white to-transparent pointer-events-none" />
                </div>

                {/* Input Simulation */}
                <div className="p-3 bg-white border-t border-slate-100">
                    <div className="w-full h-8 bg-slate-50 rounded-full border border-slate-100 px-3 flex items-center">
                        <div className="w-24 h-2 bg-slate-200 rounded-full" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default PhoneUI