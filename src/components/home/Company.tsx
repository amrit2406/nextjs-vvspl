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
    <section
      ref={containerRef}
      className="relative py-20 bg-white overflow-hidden"
    >
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
              <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-[1px] bg-[#FF7E00]" />
              <span className="text-[#FF7E00] font-bold uppercase tracking-[0.3em] text-[10px]">
                Our Sister Company
              </span>
            </motion.div>
              <h3 className="mt-4 text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] via-orange-500 to-[#e67300]">
                  Software Intelligence
                </span>{" "}
                <br />
                <span className="text-slate-400 font-medium">
                  meets Physical Scale.
                </span>
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 border-l-2 border-slate-100 hover:border-[#FF7E00] transition-colors group">
                <FiActivity
                  className="text-[#FF7E00] mb-4 group-hover:scale-110 transition-transform"
                  size={24}
                />
                <h4 className="font-bold text-slate-900 uppercase tracking-tight text-sm">
                  VVSPL Tech
                </h4>
                <p className="text-slate-500 text-sm mt-2">
                  Digital Orchestration & AI-Driven Analytics.
                </p>
              </div>
              <div className="p-6 border-l-2 border-slate-100 hover:border-[#FF7E00] transition-colors group">
                <FiAnchor
                  className="text-[#FF7E00] mb-4 group-hover:scale-110 transition-transform"
                  size={24}
                />
                <h4 className="font-bold text-slate-900 uppercase tracking-tight text-sm">
                  PTL Logistics
                </h4>
                <p className="text-slate-500 text-sm mt-2">
                  Global Infrastructure & Asset Management.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: The "Sister" (PTL Card) */}
          <motion.div style={{ y }} className="w-full lg:w-1/2 relative">
            <img
              src="https://img.freepik.com/free-vector/global-shipping-trade-illustration_1308-179317.jpg?semt=ais_hybrid&w=740&q=80"
              alt="PTL Partnership"
              className="w-full h-full object-cover rounded-[3rem] shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SisterCompany;
