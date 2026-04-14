"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiPython, SiPostgresql, SiDocker,  SiGooglecloud, SiKubernetes, SiMongodb,
  SiSpringboot, SiFlutter, SiOpenai, SiRust, SiGo, 
  SiTerraform, SiFigma, SiKotlin, SiSwift
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

// --- Tech Data ---
const techData = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Building immersive, high-performance user interfaces with modern reactivity.",
    items: [
      { icon: SiReact, name: "React JS", color: "text-[#61DAFB]" },
      { icon: SiNextdotjs, name: "Next.js", color: "text-black" },
      { icon: SiTypescript, name: "TypeScript", color: "text-[#3178C6]" },
      { icon: SiTailwindcss, name: "Tailwind", color: "text-[#06B6D4]" },
      { icon: SiFigma, name: "Figma", color: "text-[#F24E1E]" },
    ]
  },
  {
    id: "backend",
    label: "Backend",
    description: "Robust, distributed server-side logic designed for maximum uptime and security.",
    items: [
      { icon: SiNodedotjs, name: "Node.js", color: "text-[#339933]" },
      { icon: SiPython, name: "Python", color: "text-[#3776AB]" },
      { icon: SiSpringboot, name: "Java Spring", color: "text-[#6DB33F]" },
      { icon: SiRust, name: "Rust", color: "text-black" },
      { icon: SiGo, name: "Golang", color: "text-[#00ADD8]" },
    ]
  },
  {
    id: "mobile",
    label: "Mobile",
    description: "Native and cross-platform mobile ecosystems for iOS and Android.",
    items: [
      { icon: SiFlutter, name: "Flutter", color: "text-[#02569B]" },
      { icon: SiReact, name: "React Native", color: "text-[#61DAFB]" },
      { icon: SiKotlin, name: "Kotlin", color: "text-[#7F52FF]" },
      { icon: SiSwift, name: "Swift", color: "text-[#F05138]" },
    ]
  },
  {
    id: "infra",
    label: "Infra & AI",
    description: "Cloud-native scaling and intelligent automation for modern enterprises.",
    items: [
      { icon: FaAws, name: "AWS", color: "text-[#FF9900]" },
      { icon: SiDocker, name: "Docker", color: "text-[#2496ED]" },
      { icon: SiKubernetes, name: "K8s", color: "text-[#326CE5]" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "text-[#4169E1]" },
      { icon: SiOpenai, name: "OpenAI/LLM", color: "text-[#412991]" },
    ]
  }
];

const InteractiveStack = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">
            Our Technical <span className="text-[#FF7E00]">DNA.</span>
          </h2>
          <p className="text-slate-500 font-medium max-w-xl mx-auto">
            Click through our specialized tech pillars to see the tools we use to solve complex engineering challenges.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 p-2 bg-slate-50 rounded-[2.5rem] border border-slate-100 w-fit mx-auto">
          {techData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all relative ${
                activeTab === tab.id ? "text-white" : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-[#044DB6] to-[#2A6BFF] rounded-full z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Display Area */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {techData.map((tab) => tab.id === activeTab && (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-12 gap-6 items-center"
              >
                {/* Text Content */}
                {/* <div className="lg:col-span-5">
                  <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">{tab.label} Excellence</h3>
                  <p className="text-slate-600 font-medium text-lg leading-relaxed mb-8">
                    {tab.description}
                  </p>
                  <div className="flex items-center gap-4 py-6 border-t border-slate-100">
                    <div className="w-12 h-12 rounded-full bg-[#FF7E00]/10 flex items-center justify-center text-[#FF7E00]">
                        <span className="font-black">0{techData.indexOf(tab) + 1}</span>
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">Pillar Specialization</span>
                  </div>
                </div> */}

                {/* Icons Grid */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {tab.items.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] flex flex-col items-center justify-center gap-4 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
                      >
                        <item.icon className={`text-4xl ${item.color} transition-transform group-hover:scale-110`} />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">
                          {item.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default InteractiveStack;