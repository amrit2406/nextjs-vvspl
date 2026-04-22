"use client";
import { motion } from "framer-motion";
import { FiArrowRight, FiLayers } from "react-icons/fi";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full flex items-center justify-center bg-slate-50 overflow-hidden py-10">
      
      {/* --- BACKGROUND DECORATIONS (LEFT SIDE) --- */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 z-0 pointer-events-none overflow-hidden">
        {/* Base Logo: 60% transparent (40% visible) */}
        <motion.img 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.2, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          src="/assets/vvslogo.png" 
          alt="" 
          className="absolute top-1/2 left-[-1%] -translate-y-1/2 w-[45%] max-w-xl object-contain grayscale"
        />
        
        {/* Overlay Image: Small Accent, 40% transparent (60% visible) */}
        <motion.img 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "backOut" }}
          src="/assets/img11.png" 
          alt="" 
          /* Changed width to 20% and max-width to 150px for a "small" look */
          className="absolute top-[75%] left-[4%] -translate-y-1/2 w-[20%] max-w-[150px] object-contain mix-blend-multiply"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 mb-8">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          suppressHydrationWarning={true}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-orange-100 px-4 py-2 rounded-full mb-8 shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF7E00]"></span>
            </span>
            <span className="text-orange-900 text-xs font-bold tracking-widest">
              AI solutions for the future, today
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter">
            Power your future with
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] via-orange-500 to-[#e67300] italic pr-1">
              intelligent technology
            </span>.
          </h1>

          {/* Subheadline */}
          <p className="text-md text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
            Innovation is not just about writing code — {" "}
            <span className="text-[#044DB6] font-bold">it’s about engineering impact.</span>{" "}
            We are a software company built on systems thinking, architectural precision, and disciplined execution.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="relative flex items-center justify-center space-x-3 px-6 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-[#FF7E00] via-orange-500 to-[#e67300] shadow-[0_6px_0_#cc6600] transition-all duration-150 hover:translate-y-[2px] hover:shadow-[0_4px_0_#cc6600] active:translate-y-[6px] active:shadow-[0_0px_0_#cc6600]"
            >
              <span>Start Your Project</span>
              <FiArrowRight />
            </Link>

            <Link
              href="/services"
              className="relative flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#044DB6] to-blue-500 shadow-[0_6px_0_#033a8c] transition-all duration-150 hover:translate-y-[2px] hover:shadow-[0_4px_0_#033a8c] active:translate-y-[6px] active:shadow-[0_0px_0_#033a8c]"
            >
              <span>Our Offerings</span>
            </Link>
          </div>
        </motion.div>

        {/* Right Content - IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:pl-10"
          suppressHydrationWarning={true}
        >
          <div className="relative overflow-hidden group">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem]">
              <img
                src="/assets/hero2.png"
                alt="Tech engineer working on advanced systems"
                className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Wave Bottom Decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[80px] lg:h-[140px]"
        >
          <defs>
            <filter id="waveShadow" x="-10%" y="-10%" width="120%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
              <feOffset in="blur" dy="4" result="offsetBlur" />
              <feMerge>
                <feMergeNode in="offsetBlur" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M0,120V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V120Z"
            className="fill-white"
          />
          <path
            d="M0,7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23"
            fill="none"
            stroke="orange"
            strokeWidth="1"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;