"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FiCheckCircle,
  FiTarget,
  FiAward,
  FiZap,
  FiArrowUpRight,
} from "react-icons/fi";

const About = () => {
  const containerRef = useRef(null);

  const stats = [
    { label: "Years of Mastery", value: "10+", color: "text-blue-600" },
    { label: "Elite Engineers", value: "50+", color: "text-indigo-600" },
    { label: "Global Deployments", value: "100+", color: "text-orange-500" },
  ];

  return (
    <section
      ref={containerRef}
      className="py-24 bg-white overflow-hidden relative"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* LEFT: Visual & Stats */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Main Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white"
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-[500px] object-cover"
                />

                {/* Floating Stats Overlay */}
                {/* <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8 pt-20">
                  <div className="grid grid-cols-3 gap-4">
                    {stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <p className="text-white text-2xl font-black">
                          {stat.value}
                        </p>
                        <p className="text-slate-300 text-[10px] uppercase font-bold tracking-tighter">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div> */}
              </motion.div>

              {/* Decorative Geometric Elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-50" />
            </div>

            {/* Accreditation Badge */}
            {/* <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="mt-8 flex items-center p-5 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <div className="bg-blue-600 p-3 rounded-2xl text-white mr-4 shadow-lg shadow-blue-200">
                <FiAward size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">
                  Certified Excellence
                </h4>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-medium">
                  ISO 9001:2015 Industry Standard
                </p>
              </div>
              <FiArrowUpRight className="ml-auto text-slate-300" />
            </motion.div> */}
          </div>

          {/* RIGHT: Content & Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-block text-blue-600 font-bold tracking-[0.3em] text-xs mb-6 bg-blue-50 px-4 py-1.5 rounded-full"
            >
              About Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8 tracking-tighter"
            >
              Architecting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Futures
              </span>
              , Not Just Features.
            </motion.h2>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
              <p>
                At{" "}
                <span className="text-slate-900 font-bold underline decoration-orange-400 underline-offset-4">
                  VVSPL TECH
                </span>
                , we serve as the bridge between legacy infrastructure and the
                AI-driven future.
              </p>
              <p>
                We operate on a philosophy of{" "}
                <span className="text-slate-900 font-semibold">
                  Precision Architecture
                </span>
                . Every line of code and every cloud node is deployed with a
                singular goal: to turn your technical debt into a competitive
                engine.
              </p>
            </div>

            {/* CTA Action Group */}
            <div className="flex flex-wrap gap-5 mt-12">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-[#044DB6] hover:from-blue-700 hover:to-[#0863e7] text-white rounded-2xl font-bold overflow-hidden shadow-2xl shadow-blue-500/20 transition-all"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Project
                  <FiArrowUpRight className="text-xl group-hover:rotate-45 transition-transform duration-300" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center gap-3 group"
              >
                <span>More About Us</span>
                <div className="w-2 h-2 rounded-full bg-blue-600 group-hover:scale-150 transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Scrolling Feature Ribbon */}
        <div className="mt-24 py-8 border-y border-slate-200 overflow-hidden relative group">
          <div className="flex animate-marquee whitespace-nowrap space-x-12 items-center">
            {[
              "AI Integration",
              "Cloud Architecture",
              "Cyber Security",
              "Custom ERP",
              "Blockchain",
              "Big Data",
            ].map((tech) => (
              <div key={tech} className="flex items-center space-x-3">
                <FiCheckCircle className="text-blue-600" />
                <span className="text-slate-900 font-bold uppercase tracking-tighter text-lg">
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
            ].map((tech) => (
              <div key={tech + "-2"} className="flex items-center space-x-3">
                <FiCheckCircle className="text-blue-600" />
                <span className="text-slate-900 font-bold uppercase tracking-tighter text-lg">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
