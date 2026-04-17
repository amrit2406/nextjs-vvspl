"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiEye, FiTarget, FiArrowRight } from "react-icons/fi";

// --- The Interactive Warp Field ---
// This creates a mesh grid that reacts to mouse movement with a magnetic pull
const WarpField = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the movement
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-90">
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="warp-grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-blue-900"
            />
          </pattern>
        </defs>
        <motion.rect
          width="120%"
          height="120%"
          fill="url(#warp-grid)"
          style={{
            x: useTransform(springX, (v) => -v * 0.05),
            y: useTransform(springY, (v) => -v * 0.05),
            skewX: useTransform(springX, (v) => (v - 1000) * 0.01),
            skewY: useTransform(springY, (v) => (v - 500) * 0.01),
          }}
        />
      </svg>
      {/* Radial Gradient Overlay to fade edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_90%)]" />
    </div>
  );
};

const MissionVision = () => {
  const data = [
    {
      title: "Our Mission",
      icon: <FiTarget size={24} />,
      color: "from-[#FF7E00] to-[#e67300]",
      accent: "bg-orange-50 text-[#FF7E00]",
      description:
        "To design and deploy defence-grade, AI-enabled digital architectures that enhance national capability and enterprise competitiveness — delivered with precision engineering and globally competitive cost discipline.",
      features: ["Technical Integrity", "Scalable Excellence"],
    },
    {
      title: "Our Vision",
      icon: <FiEye size={24} />,
      color: "from-[#044DB6] to-[#2A6BFF]",
      accent: "bg-blue-50 text-[#044DB6]",
      description:
        "We envision a digitally sovereign ecosystem where national infrastructure is intelligent, industries operate autonomously, governance is decisively data-driven, and security is structural rather than reactive.",
      features: ["Global Leadership", "Future-Ready Tech"],
    },
  ];

  return (
    <section className="relative py-24 bg-slate-50/30 overflow-hidden">
      {/* --- The Background Layer --- */}
      <WarpField />

      {/* Subtle Grid - Kept from original */}
      <div
        className="absolute inset-0 z-0 opacity-20 [mask-image:linear-gradient(to_bottom,white,transparent)]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0' 0' 60' 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Blobs - Kept from original */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-200/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-[1px] bg-[#FF7E00]" />
            <span className="text-[#FF7E00] font-bold uppercase tracking-[0.3em] text-[10px]">
              Our Core
            </span>
          </motion.div>

          <h3 className="text-5xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-6">
            Purpose Beyond <span></span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] via-orange-500 to-[#e67300] pr-2">
              Code
            </span>
            .
          </h3>
          <p className="text-xl text-slate-600 font-medium max-w-2xl leading-relaxed">
            Engineering the digital backbone of tomorrow with precision,
            passion, and a focus on long-term scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto px-6">
          {data.map((item, index) => {
            const isVision = item.title.toLowerCase().includes("vision");
            const themeColor = isVision ? "text-orange-600" : "text-blue-700";
            const bgColor = isVision ? "bg-orange-500" : "bg-blue-600";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                // Using flex-row-reverse for Vision to put color on the right
                className={`group relative flex flex-col md:flex-row ${
                  isVision ? "md:flex-row-reverse" : "md:flex-row"
                } bg-white rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 min-h-[350px]`}
              >
                {/* 1. THE COLOR ACCENT BLOCK */}
                <div
                  className={`relative w-full md:w-2/5 ${bgColor} p-10 flex flex-col justify-between overflow-hidden`}
                >
                  {/* Animated Glass Pattern */}
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-700"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                      backgroundSize: "24px 24px",
                    }}
                  />

                  <div className="relative z-10 self-start bg-white/10 backdrop-blur-xl p-4 rounded-2xl text-white border border-white/20 shadow-2xl group-hover:rotate-6 transition-transform">
                    {item.icon}
                  </div>

                  <div className="relative z-10">
                    {/* <span className="text-white/50 text-[10px] font-black uppercase tracking-[0.4em] block mb-2">
                      {isVision ? "Objective 02" : "Objective 01"}
                    </span> */}
                    <h4 className="text-3xl font-black text-white leading-[0.8] uppercase tracking-tighter">
                      {isVision ? "Vision" : "Mission"}
                    </h4>
                  </div>
                </div>

                {/* 2. THE READABLE CONTENT BLOCK */}
                <div
                  className={`w-full md:w-3/5 p-10 md:p-12 flex flex-col justify-center bg-white ${isVision ? "text-right items-end" : "text-left items-start"}`}
                >
                  <div className="relative z-10 max-w-sm">
                    {/* The "Anchor" Line */}
                    <div
                      className={`w-16 h-1.5 ${bgColor} mb-8 rounded-full ${isVision ? "ml-auto" : "mr-auto"}`}
                    />

                    {/* <h3
                      className={`text-[11px] font-black uppercase tracking-[0.25em] ${themeColor} mb-4`}
                    >
                      {isVision ? "Global Aspiration" : "Technical Execution"}
                    </h3> */}

                    <p className="text-lg text-slate-700 font-semibold leading-relaxed tracking-tight">
                      {item.description}
                    </p>

                    {/* <div
                      className={`mt-8 flex items-center gap-3 font-bold text-[10px] uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors cursor-pointer ${isVision ? "flex-row-reverse" : ""}`}
                    >
                      <span className="h-[1px] w-8 bg-slate-200 group-hover:w-12 transition-all group-hover:bg-slate-900" />
                      View Standards
                    </div> */}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
