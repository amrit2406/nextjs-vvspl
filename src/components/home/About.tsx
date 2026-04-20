"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import {
  FiCheckCircle,
  FiArrowUpRight,
  FiAward
} from "react-icons/fi";

const About = () => {
  const containerRef = useRef(null);

  const stats = [
    { label: "Years of Mastery", value: "10+", color: "text-[#FF7E00]" },
    { label: "Elite Engineers", value: "50+", color: "text-[#044DB6]" },
    { label: "Global Deployments", value: "100+", color: "text-orange-500" },
  ];

  return (
    <section
      ref={containerRef}
      className="py-24 bg-white overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: Visual & Stats */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Main Image Container - Match Hero Border Radius */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 rounded-[2.5rem] overflow-hidden"
              >
                <img
                  src="/assets/about2.png"
                  alt="Team collaboration"
                  className="w-full h-[480px] object-contain"
                />

              </motion.div>

              {/* Decorative Blobs - Match Hero logic */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-orange-100 rounded-full blur-[100px] opacity-60" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-[100px] opacity-60" />
            </div>
          </div>

          {/* RIGHT: Content & Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            {/* Status Badge Style Label */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-[1px] bg-[#FF7E00]" />
              <span className="text-[#FF7E00] font-bold uppercase tracking-[0.3em] text-[10px]">
                About Us
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter"
            >
              Architecting <span></span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] via-orange-500 to-[#e67300] italic">
                Futures, 
              </span><br />
              Not Just Features.
            </motion.h2>

            <div className="space-y-6 text-xl text-slate-600 leading-relaxed max-w-2xl font-medium">
              <p>
                At{" "}
                <span className="text-slate-900 font-bold underline decoration-[#FF7E00] decoration-4 underline-offset-4">
                  VVSPL TECH
                </span>
                , we serve as the critical bridge between legacy infrastructure and the AI-driven future.
              </p>
              <p>
                We operate on a philosophy of <span className="text-[#044DB6] font-bold">Precision Architecture</span>. Every line of code is deployed to turn technical debt into a competitive engine.
              </p>
            </div>

            {/* CTA Action Group - Matching Hero Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mt-12">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center space-x-3 px-6 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-[#FF7E00] to-[#e67300] shadow-lg shadow-orange-500/20 group"
              >
                <span>Start Your Project</span>
                <FiArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-semibold text-[#044DB6] border border-[#044DB6]/25 bg-white hover:bg-gradient-to-r hover:from-[#044DB6] hover:to-[#2A6BFF] hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <span>More About Us</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Scrolling Feature Ribbon - Match Hero Palette */}
        <div className="mt-14 py-6 border-y border-slate-100 overflow-hidden relative group bg-slate-50/50">
          <div className="flex animate-marquee whitespace-nowrap space-x-16 items-center">
            {[
              "AI Integration",
              "Cloud Architecture",
              "Cyber Security",
              "Custom ERP",
              "Blockchain",
              "Big Data",
            ].map((tech, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                {/* <FiCheckCircle className="text-[#FF7E00] text-xl" /> */}
                <span className="text-slate-900 font-black tracking-tighter text-lg">
                  {tech}
                </span>
              </div>
            ))}
            {/* Repeat for seamless loop */}
            {[
              "AI Integration",
              "Cloud Architecture",
              "Cyber Security",
              "Custom ERP",
              "Blockchain",
              "Big Data",
            ].map((tech, idx) => (
              <div key={idx + "-2"} className="flex items-center space-x-4">
                {/* <FiCheckCircle className="text-[#FF7E00] text-xl" /> */}
                <span className="text-slate-900 font-black tracking-tighter text-lg">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;