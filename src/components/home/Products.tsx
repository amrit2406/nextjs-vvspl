"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FiArrowRight,
  FiCpu,
  FiBarChart2,
  FiShield,
  FiLayers,
} from "react-icons/fi";
import Link from "next/link";

const EddvaProduct = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax offsets for the creative UI elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  const features = [
    {
      icon: <FiCpu />,
      title: "Adaptive Learning AI",
      desc: "Personalized study paths that evolve with your unique learning pace.",
      color: "text-[#FF7E00]",
      bg: "bg-orange-50",
    },
    {
      icon: <FiBarChart2 />,
      title: "Progress Insights",
      desc: "Track performance with real-time smart analytics and forecasting.",
      color: "text-[#044DB6]",
      bg: "bg-blue-50",
    },
    {
      icon: <FiShield />,
      title: "Focused Study Mode",
      desc: "A distraction-free, high-security environment for deep work sessions.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* 1. Signature Grid Background - Restored from your original */}
      <div
        className="absolute inset-0 z-0 opacity-10 [mask-image:linear-gradient(to_bottom,white,transparent)]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0' 0' 60' 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Creative Parallax Image Section */}
          <div className="relative order-2 lg:order-1 flex justify-center">
            <motion.div
              // style={{ rotate }}
              className="relative rounded-[3rem] overflow-hidden bg-slate-50 p-4 border border-slate-100 shadow-2xl shadow-slate-200/50 group z-20"
            >
              <div className="relative aspect-square overflow-hidden rounded-[2.2rem] w-full max-w-[450px]">
                <img
                  src="/assets/product2.png"
                  alt="EDDVA Interface"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* AI Scanning Animation Line - Original Orange */}
                <motion.div
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-0 right-0 h-[2px] bg-[#FF7E00] z-30 shadow-[0_0_15px_#FF7E00] opacity-50"
                />
                {/* AI Scanning Animation Line - Original Orange */}
                <motion.div
                  animate={{ left: ["0%", "100%", "0%"] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 bottom-0 w-[2px] bg-blue-500 z-30 shadow-[0_0_15px_#3b82f6] opacity-50"
                />
              </div>
            </motion.div>

            {/* Floating Status Card - Original Blue theme */}
            <motion.div
              style={{ y: y1 }}
              className="absolute -top-4 -right-2 lg:-right-8 z-30 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-100 hidden sm:block"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF7E00] mb-1">
                Flagship Product
              </p>
              <p className="text-md font-black text-slate-900">
                <span className="text-[#044DB6]">Learn with AI</span>
              </p>
            </motion.div>

            {/* Floating Pulse Card - Original Orange theme */}
            <motion.div
              style={{ y: y2 }}
              className="absolute -bottom-6 -left-2 lg:-left-8 z-30 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF7E00] animate-ping" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF7E00]" />
                </div>
                <span className="text-xs font-bold text-slate-700">
                  AI Engine Active
                </span>
              </div>
            </motion.div>

            {/* Original Decorative Blobs */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full blur-[100px] opacity-40 z-0" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-orange-100 rounded-full blur-[100px] opacity-40 z-0" />
          </div>

          {/* Right: Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-[#FF7E00]" />
              <span className="text-[#FF7E00] font-bold uppercase tracking-[0.3em] text-[10px]">
                The Product
              </span>
            </div>

            <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
              Meet <span></span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] via-orange-500 to-[#e67300] italic">
                EDDVA.
              </span>
            </h2>

            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10 max-w-lg">
              The AI-powered learning companion engineered by{" "}
              <span className="text-[#044DB6] font-bold">VVSPL TECH</span> to
              help students study smarter, not harder.
            </p>

            {/* Feature Mini-Grid - Original Styling with hover-slide */}
            <div className="grid grid-cols-1 gap-6 mb-12">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-5 group cursor-default"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${f.bg} ${f.color} flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300`}
                  >
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
                </motion.div>
              ))}
            </div>

            {/* Product CTA - Match Original Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary CTA */}
              <a
                href="https://eddva.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl font-black text-white bg-gradient-to-r from-[#FF7E00] to-[#e67300] hover:shadow-orange-500/20 hover:shadow-2xl transition-all duration-300 group"
              >
                <span>Visit Us</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA */}
              <a
                href="/EDDVA.pdf"
                download
                className="flex items-center justify-center space-x-2 px-8 py-4 rounded-2xl font-semibold text-[#044DB6] border border-[#044DB6]/25 bg-white hover:bg-gradient-to-r hover:from-[#044DB6] hover:to-[#2A6BFF] hover:text-white hover:border-transparent transition-all duration-300 shadow-sm"
              >
                <span>Download Brochure</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EddvaProduct;
