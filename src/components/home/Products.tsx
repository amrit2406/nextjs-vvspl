"use client";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCpu,
  FiBarChart2,
  FiShield,
  FiLayers
} from "react-icons/fi";

const EddvaProduct = () => {
  const features = [
    {
      icon: <FiCpu />,
      title: "Adaptive Learning AI",
      desc: "Personalized study paths that evolve with your unique learning pace.",
      color: "text-[#FF7E00]",
      bg: "bg-orange-50"
    },
    {
      icon: <FiBarChart2 />,
      title: "Progress Insights",
      desc: "Track performance with real-time smart analytics and forecasting.",
      color: "text-[#044DB6]",
      bg: "bg-blue-50"
    },
    {
      icon: <FiShield />,
      title: "Focused Study Mode",
      desc: "A distraction-free, high-security environment for deep work sessions.",
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* 1. Signature Grid Background - Matching Hero */}
      <div
        className="absolute inset-0 z-0 opacity-10 [mask-image:linear-gradient(to_bottom,white,transparent)]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0' 0' 60' 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Image Section - The "Tech-Frame" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main Image Frame - Match Hero Radius */}
            <div className="relative rounded-[3rem] overflow-hidden bg-slate-50 p-4 border border-slate-100 shadow-2xl shadow-slate-200/50 group">
              <div className="relative aspect-square overflow-hidden rounded-[2.2rem]">
                <img
                  src="https://img.freepik.com/free-vector/artificial-intelligence-abstract-concept-illustration-ai-machine-learning-artificial-intelligence-evolution-high-tech-cutting-edge-technology-cognitive-robotics_335657-483.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="EDDVA Interface"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating UI Tag - Matches Hero status vibe */}
                {/* <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/20">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF7E00] mb-1">
                    Flagship Product
                  </p>
                  <p className="text-2xl font-black text-slate-900 leading-none">
                    EDDVA <span className="text-[#044DB6]">v4.0</span>
                  </p>
                </div> */}
              </div>
            </div>

            {/* Decorative Floating Blobs */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full blur-[100px] opacity-40 z-[-1]" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-orange-100 rounded-full blur-[100px] opacity-40 z-[-1]" />
          </motion.div>

          {/* Right: Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            {/* Dark Badge - Matching Hero's secondary style */}
            {/* <div className="inline-flex items-center space-x-2 bg-slate-900 px-4 py-2 rounded-full mb-8">
               <FiLayers className="text-[#FF7E00]" size={14} />
               <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
                Proprietary SaaS
              </span>
            </div> */}

            <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
              Meet <span></span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] via-orange-500 to-[#e67300]">
                EDDVA.
              </span>
            </h2>

            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10 max-w-lg">
              The AI-powered learning companion engineered by <span className="text-[#044DB6] font-bold">VVSPL TECH</span> to help students study smarter, not harder.
            </p>

            {/* Feature Mini-Grid - High Contrast Styling */}
            <div className="grid grid-cols-1 gap-6 mb-12">
              {features.map((f, i) => (
                <div key={i} className="flex items-center space-x-5 group">
                  <div className={`w-14 h-14 rounded-2xl ${f.bg} ${f.color} flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-2xl">{f.icon}</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-slate-900 tracking-tight leading-none mb-1">
                      {f.title}
                    </h4>
                    <p className="text-sm text-slate-500 font-medium leading-snug">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Product CTA - Match Hero Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center space-x-3 px-6 py-4 rounded-2xl font-black text-white bg-gradient-to-r from-[#FF7E00] to-[#e67300] hover:shadow-orange-500/20 hover:shadow-2xl transition-all duration-300 group">
                <span>Request Demo</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-semibold text-[#044DB6] border border-[#044DB6]/25 bg-white hover:bg-gradient-to-r hover:from-[#044DB6] hover:to-[#2A6BFF] hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md">
  <span>Download Brochure</span>
</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EddvaProduct;