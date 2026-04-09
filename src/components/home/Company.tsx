"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight, FiActivity, FiGlobe, FiAnchor } from "react-icons/fi";

const SisterCompany = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="relative py-32 bg-white overflow-hidden">
      {/* Background Large Text Label */}
      <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none select-none">
        <h2 className="text-[20vw] font-black text-slate-50 leading-none whitespace-nowrap opacity-50">
          STRATEGIC ALLIANCE
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: The "Core" (Your Company) */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs">
                The Ecosystem
              </span>
              <h3 className="mt-4 text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-[#044DB6]">
                  Software Intelligence
                </span> <br /> 
                <span className="text-slate-400 font-medium">meets Physical Scale.</span>
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 border-l-2 border-slate-100 hover:border-blue-600 transition-colors group">
                <FiActivity className="text-blue-600 mb-4 group-hover:scale-110 transition-transform" size={24} />
                <h4 className="font-bold text-slate-900 uppercase tracking-tight text-sm">VVSPL Tech</h4>
                <p className="text-slate-500 text-sm mt-2">Digital Orchestration & AI-Driven Analytics.</p>
              </div>
              <div className="p-6 border-l-2 border-slate-100 hover:border-blue-600 transition-colors group">
                <FiAnchor className="text-blue-600 mb-4 group-hover:scale-110 transition-transform" size={24} />
                <h4 className="font-bold text-slate-900 uppercase tracking-tight text-sm">PTL Logistics</h4>
                <p className="text-slate-500 text-sm mt-2">Global Infrastructure & Asset Management.</p>
              </div>
            </div>
          </div>

          {/* Right Side: The "Sister" (PTL Card) */}
          <motion.div 
            style={{ y }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Main Interactive Card */}
            <div className="relative z-20 aspect-[4/5] rounded-[3rem] bg-slate-950 p-10 md:p-16 flex flex-col justify-between overflow-hidden group shadow-2xl">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start">
                  <div className="h-16 w-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center">
                    <FiGlobe className="text-white" size={30} />
                  </div>
                  <div className="text-right">
                    <span className="block text-white/40 text-[10px] uppercase tracking-widest font-bold">Est. Partnership</span>
                    <span className="text-white font-mono">2024—Present</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <h4 className="text-white/50 text-xl font-medium mb-2 italic">Introducing our sister firm</h4>
                <h3 className="text-7xl md:text-8xl font-black text-white tracking-tighter mb-10">
                  PTL<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-[#044DB6]">.</span>
                </h3>
                
                <a 
                  href="#" 
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-[#044DB6] 
                  hover:from-blue-700 hover:to-[#0863e7] text-white rounded-2xl font-bold transition-all duration-300 
                  shadow-xl shadow-blue-500/20 group/btn"
                >
                  Explore PTL
                  <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Texture Overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            </div>

            {/* Floating "Bridge" Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -left-8 top-1/2 -translate-y-1/2 z-30 hidden md:block"
            >
              <div className="bg-white/80 backdrop-blur-md border border-slate-200 p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-white" />
                    <div className="w-10 h-10 rounded-full bg-blue-600 border-2 border-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-400 leading-none">Status</p>
                    <p className="text-sm font-bold text-slate-900">Deeply Integrated</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SisterCompany;