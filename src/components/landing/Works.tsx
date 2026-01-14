import React from 'react';


const industries = ["Bank / NBFI", "E-commerce", "Travel & OTA", "Govt & NGO", "Education", "Software & IT"];

export default function Works() {
    return (
        <section className="bg-white py-20 px-4 font-sans text-slate-800">
            <div className="max-w-7xl mx-auto">

                {/* --- CUSTOMERS SECTION --- */}
                <div className="text-center mb-12">
                    <p className="text-blue-500 uppercase tracking-widest text-xs font-bold mb-2">Customers</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-(--primary)">Trusted by growing brands</h2>
                </div>

                {/* Industry Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {industries.map((item) => (
                        <button key={item} className="px-6 py-3 border border-slate-100 rounded-xl text-sm text-(--secondary) hover:bg-slate-50 transition-colors shadow-sm">
                            {item}
                        </button>
                    ))}
                </div>

                {/* Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm">
                        <p className="text-slate-600 italic mb-6">
                            "After moving to GotisMS, our OTP delivery rate improved and we finally have a stable, bright control panel our team loves using."
                        </p>
                        <div>
                            <p className="font-bold text-(--primary)">CTO, Fintech Company</p>
                            <p className="text-xs text-slate-400">Enterprise API User</p>
                        </div>
                    </div>

                    <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm">
                        <p className="text-slate-600 italic mb-6">
                            "Scheduling promo SMS for thousands of customers takes minutes. Reports are clear and our campaigns feel more professional."
                        </p>
                        <div>
                            <p className="font-bold text-(--primary)">Head of Marketing, Retail Brand</p>
                            <p className="text-xs text-slate-400">Masking Campaign Client</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}