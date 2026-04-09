"use client";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiCpu,
  FiBarChart2,
  FiShield,
} from "react-icons/fi";

const EddvaProduct = () => {
  const features = [
    {
      icon: <FiCpu />,
      title: "Adaptive Learning AI",
      desc: "Personalized study paths that evolve with you.",
    },
    {
      icon: <FiBarChart2 />,
      title: "Progress Insights",
      desc: "Track performance with smart analytics.",
    },
    {
      icon: <FiShield />,
      title: "Focused Study Mode",
      desc: "Distraction-free, secure learning environment.",
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Signature Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0' 0' 60' 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* The "Tech-Frame" Image Container */}
            <div className="relative rounded-[3rem] overflow-hidden bg-slate-100 p-4 border border-slate-100 shadow-2xl shadow-blue-500/10 group">
              <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-[2.2rem]">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1000&auto=format&fit=crop"
                  alt="EDDVA Interface"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Glass Overlay Tag */}
                <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-white/20">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">
                    Flagship Product
                  </p>
                  <p className="text-xl font-black text-slate-900 leading-none">
                    EDDVA v4.0
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Floating Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full blur-3xl opacity-20" />
          </motion.div>

          {/* Right: Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-slate-900 text-white px-4 py-2 rounded-full mb-8">
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Our Products
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
              Meet{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-[#044DB6] italic">
                EDDVA.
              </span>
            </h2>

            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10 max-w-lg">
              Your AI-powered learning companion designed to help students study
              smarter, stay consistent, and achieve more with personalized
              guidance.
            </p>

            {/* Feature Mini-Grid */}
            <div className="grid grid-cols-1 gap-6 mb-12">
              {features.map((f, i) => (
                <div key={i} className="flex items-start space-x-4 group">
                  <div className="mt-1 w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 tracking-tight">
                      {f.title}
                    </h4>
                    <p className="text-sm text-slate-500 font-medium">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Product CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center space-x-3 px-10 py-5 rounded-2xl font-black text-white bg-gradient-to-r from-blue-600 to-[#044DB6] hover:from-blue-700 hover:to-[#0863e7] transition-all duration-300 shadow-xl shadow-blue-500/20 group">
                <span>Request Demo</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center space-x-2 px-10 py-5 rounded-2xl font-black bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300">
                <span>Visit Site</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EddvaProduct;
