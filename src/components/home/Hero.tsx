"use client";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiLayers } from "react-icons/fi";

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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          suppressHydrationWarning={true}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-blue-100 px-4 py-2 rounded-full mb-8 shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
            </span>
            <span className="text-blue-900 text-xs font-bold tracking-widest">
              AI solutions for the future, today
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter">
            Build Fast.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-[#044DB6]">
              Scale Smarter.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
            VVSPL TECH engineers high-performance <span className="text-slate-900 font-bold">AI architectures</span> and 
            cloud-native software that turns operational bottlenecks into competitive advantages.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Primary (Blue Gradient) */}
            <button className="flex items-center justify-center space-x-3 px-10 py-5 rounded-2xl font-bold text-white bg-gradient-to-r from-blue-600 to-[#044DB6] hover:from-blue-700 hover:to-[#0863e7] transition-all duration-300 shadow-lg shadow-blue-500/20 group">
              <span>Start Your Project</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary (Minimal) */}
            <button className="flex items-center justify-center space-x-2 px-10 py-5 rounded-2xl font-bold bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300">
              <span>Our Work</span>
            </button>
          </div>

          {/* Trust Badges */}
          {/* <div className="mt-12 flex items-center space-x-6 text-slate-400">
             <div className="flex items-center space-x-2">
                <FiCheckCircle className="text-blue-500" />
                <span className="text-sm font-semibold uppercase tracking-wider">ISO Certified</span>
             </div>
             <div className="flex items-center space-x-2">
                <FiCheckCircle className="text-blue-500" />
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
                src="https://img.freepik.com/free-vector/teem-discussing-project-kanban-board_1262-19963.jpg?semt=ais_hybrid&w=740&q=80" 
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
            <div className="bg-blue-500 p-3 rounded-xl text-white">
              <FiLayers size={24} />
            </div>
            <div>
              <p className="text-xs text-blue-300 font-mono tracking-widest uppercase">Microservices</p>
              <p className="text-xl font-bold">Architecture Optimized</p>
              <p className="text-xs text-slate-400 mt-1">v3.1 Stable Release</p>
            </div>
          </motion.div> */}

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;