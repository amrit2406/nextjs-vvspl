"use client";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiLayers } from "react-icons/fi";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full flex items-center justify-center bg-slate-50 overflow-hidden py-10">
      {/* 1. Subtle Grid Background */}
      {/* <div className="absolute inset-0 z-0 opacity-20 [mask-image:linear-gradient(to_bottom,white,transparent)]" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0\' 0\' 60\' 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} 
      /> */}

      {/* 2. Animated Blobs */}
      {/* <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000" /> */}

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
             We are a software company built on systems thinking, architectural precision, and disciplined execution. We don’t chase trends or build disposable products.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Primary (Orange Gradient) */}
            <Link
              href="/contact"
              className="relative flex items-center justify-center space-x-3 px-6 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-[#FF7E00] via-orange-500 to-[#e67300] shadow-[0_6px_0_#cc6600] transition-all duration-150 hover:translate-y-[2px] hover:shadow-[0_4px_0_#cc6600] active:translate-y-[6px] active:shadow-[0_0px_0_#cc6600]"
            >
              <span>Start Your Project</span>
              <FiArrowRight />
            </Link>

            {/* Secondary (Minimal) */}
            <Link
              href="/services"
              className="relative flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#044DB6] to-blue-500 shadow-[0_6px_0_#033a8c] transition-all duration-150 hover:translate-y-[2px] hover:shadow-[0_4px_0_#033a8c] active:translate-y-[6px] active:shadow-[0_0px_0_#033a8c]"
            >
              <span>Our Offerings</span>
            </Link>
          </div>

          {/* Trust Badges */}
          {/* <div className="mt-12 flex items-center space-x-6 text-slate-400">
             <div className="flex items-center space-x-2">
                <FiCheckCircle className="text-[#FF7E00]" />
                <span className="text-sm font-semibold uppercase tracking-wider">ISO Certified</span>
             </div>
             <div className="flex items-center space-x-2">
                <FiCheckCircle className="text-[#FF7E00]" />
                <span className="text-sm font-semibold uppercase tracking-wider">AWS Partner</span>
             </div>
          </div> */}
        </motion.div>

        {/* Right Content - IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:pl-10"
          suppressHydrationWarning={true}
        >
          {/* Image Container with depth effects */}
          <div className="relative overflow-hidden group">
            {/* Aspect Ratio Box (prevents layout shift and forces image shape) */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem]">
              {/* REPLACE THIS PLACEHOLDER URL WITH YOUR ACTUAL IMAGE */}
              <img
                src="/assets/hero2.png"
                alt="Tech engineer working on advanced systems"
                className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />

              {/* Subtle gradient overlay on image */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" /> */}
            </div>
          </div>

          {/* Floating Floating Microservices Tag (Modern visual anchor) */}
          {/* <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute bottom-10 -left-12 bg-slate-900 text-white p-6 rounded-3xl shadow-2xl z-20 flex items-center space-x-4 border-4 border-white"
          >
            <div className="bg-[#FF7E00] p-3 rounded-xl text-white">
              <FiLayers size={24} />
            </div>
            <div>
              <p className="text-xs text-orange-300 font-mono tracking-widest uppercase">Microservices</p>
              <p className="text-xl font-bold">Architecture Optimized</p>
              <p className="text-xs text-slate-400 mt-1">v3.1 Stable Release</p>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
      {/* original */}
      {/* <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[80px] lg:h-[150px]"
        >
          <defs>
            <linearGradient
              id="wave-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#0478fd" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ff9810" stopOpacity="1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          <motion.path
            initial={{ d: "M0,0 C360,120 1080,120 1440,0 L1440,120 L0,120 Z" }}
            animate={{
              d: [
                "M0,20 C360,100 1080,140 1440,20 L1440,120 L0,120 Z",
                "M0,0 C400,150 1000,80 1440,0 L1440,120 L0,120 Z",
                "M0,20 C360,100 1080,140 1440,20 L1440,120 L0,120 Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            fill="url(#wave-gradient)"
          />

          <path
            d="M0,30 C360,130 1080,130 1440,30 L1440,120 L0,120 Z"
            fill="#ffffff"
            opacity="0.5"
          />
        </svg>
      </div> */}
      {/* random */}
      {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[50px] lg:h-[80px] rotate-180"
        >
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF7E00" />
              <stop offset="100%" stopColor="#044DB6" />
            </linearGradient>
          </defs>

          <rect width="100%" height="100%" fill="url(#bgGradient)" />

          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            fill="white"
          />
        </svg>
      </div> */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[80px] lg:h-[140px]"
        >
          <defs>
            <filter
              id="waveShadow"
              x="-10%"
              y="-10%"
              width="120%"
              height="140%"
            >
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="3"
                result="blur"
              />

              <feOffset in="blur" dy="4" result="offsetBlur" />

              <feMerge>
                <feMergeNode in="offsetBlur" />
              </feMerge>
            </filter>
          </defs>

          {/* Background */}
          <path
            d="M0,120V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V120Z"
            className="fill-white"
          />

          {/* Shadow (blurred stroke behind) */}
          <path
            d="M0,7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23"
            fill="none"
            stroke="rgba(255, 166, 0, 0.28)"
            strokeWidth="4"
            filter="url(#waveShadow)"
          />

          {/* Base line */}
          <path
            d="M0,7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23"
            fill="none"
            stroke="orange"
            strokeWidth="1"
          />

          {/* Animated darker segment */}
          <path
            d="M0,7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23"
            fill="none"
            stroke="darkorange"
            strokeWidth="2"
            strokeDasharray="150 1000"
            className="animate-wave"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
