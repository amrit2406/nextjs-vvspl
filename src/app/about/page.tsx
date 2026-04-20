"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiCpu,
  FiGlobe,
  FiUsers,
  FiZap,
  FiShield,
  FiTrendingUp,
  FiTarget,
  FiMaximize,
  FiStar,
  FiLayers,
} from "react-icons/fi";
import Leaders from "@/components/home/Leaders";



const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen selection:bg-[#044DB6] selection:text-white">
      {/* --- HERO SECTION (Untouched) --- */}
      <section className="pt-40 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
              We Build What <br />
              <span className="text-[#FF7E00]">Matters</span> .
            </h1>
            <p className="mt-8 text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
              We aren't just building software; we're architecting the digital
              backbone for tomorrow's industry leaders. Driven by precision,
              fueled by innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- overview Section --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-[2px] w-12 bg-orange-500" />
              <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">
                The Blueprint
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tighter">
              Architecting <br /> Bold Futures
            </h2>
            <p className="text-slate-600 text-lg lg:text-xl leading-relaxed mb-10">
              We specialize in deep-tech integration where performance meets aesthetic. 
              Our approach is surgical: we identify bottlenecks and deploy high-velocity 
              code that scales without friction.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Scalability", val: "Enterprise Ready" },
                { label: "Security", val: "Military Grade" },
              ].map((item, i) => (
                <div key={i} className="p-4 border-l-2 border-slate-100 bg-slate-50/50">
                  <p className="text-[10px] font-black uppercase text-orange-600 tracking-widest mb-1">{item.label}</p>
                  <p className="font-bold text-slate-800">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-orange-500/5 rounded-[2.5rem] blur-2xl group-hover:bg-orange-500/10 transition duration-700" />
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
              alt="Workspace"
              className="relative rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      <Leaders />

      {/* --- Values Grid --- */}
      <section className="py-32 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
                Our Core <span className="text-orange-500">Mandates</span>
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                Standardization is our strength. We follow a strict internal 
                framework to ensure consistent delivery across every project.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            {[
              {
                icon: FiShield,
                title: "Total Integrity",
                desc: "We prioritize radical transparency and ethical code above all else."
              },
              {
                icon: FiGlobe,
                title: "Global Standards",
                desc: "Every system is built to comply with international performance benchmarks."
              },
              {
                icon: FiTarget,
                title: "Obsessive Precision",
                desc: "Details aren't just details; they are the core of our technical DNA."
              },
              {
                icon: FiLayers,
                title: "Future Proofing",
                desc: "Architecting systems that adapt to the next decade of tech evolution."
              }
            ].map((val, i) => (
              <div key={i} className="bg-white p-10 hover:bg-slate-50 transition-colors group">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 mb-8 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <val.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{val.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Final Modern CTA --- */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
              Let's Build The <span className="text-orange-500">Next</span> .
            </h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
              Join industry leaders who trust VVSPL for their most critical 
              digital infrastructure and software engineering needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-lg font-bold text-lg hover:bg-orange-500 transition-colors flex items-center justify-center gap-2">
                Get Started <FiArrowRight />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-lg font-bold text-lg hover:bg-slate-50 transition-colors">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
