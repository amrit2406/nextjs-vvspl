"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Tech Data with Image Paths ---
const techData = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Building immersive, high-performance user interfaces with modern reactivity.",
    items: [
      { src: "/tech/react.png", name: "React JS" },
      { src: "/tech/nextjs.png", name: "Next.js" },
      { src: "/tech/typescript.png", name: "TypeScript" },
      { src: "/tech/tailwind.png", name: "Tailwind" },
      { src: "/tech/figma.png", name: "Figma" },
    ]
  },
  {
    id: "backend",
    label: "Backend",
    description: "Robust, distributed server-side logic designed for maximum uptime and security.",
    items: [
      { src: "/tech/node.png", name: "Node.js" },
      { src: "/tech/python.png", name: "Python" },
      { src: "/tech/springboot.png", name: "Java Spring" },
      { src: "/tech/rust.png", name: "Rust" },
      { src: "/tech/go.png", name: "Golang" },
    ]
  },
  {
    id: "mobile",
    label: "Mobile",
    description: "Native and cross-platform mobile ecosystems for iOS and Android.",
    items: [
      { src: "/tech/flutter.png", name: "Flutter" },
      { src: "/tech/react-native.png", name: "React Native" },
      { src: "/tech/kotlin.png", name: "Kotlin" },
      { src: "/tech/swift.png", name: "Swift" },
    ]
  },
  {
    id: "infra",
    label: "Infra & AI",
    description: "Cloud-native scaling and intelligent automation for modern enterprises.",
    items: [
      { src: "/tech/aws.png", name: "AWS" },
      { src: "/tech/docker.png", name: "Docker" },
      { src: "/tech/k8s.png", name: "K8s" },
      { src: "/tech/postgres.png", name: "PostgreSQL" },
      { src: "/tech/openai.png", name: "OpenAI/LLM" },
    ]
  }
];

const InteractiveStack = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section className="py-18 bg-white">
      {/* Increased max-width to 7xl to cover more screen width properly */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
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
                className="w-full"
              >
                {/* Updated Grid: 2 columns mobile, 3 tablet, 4/5 desktop to balance width */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                  {tab.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-slate-50 border border-slate-100 p-4 rounded-[2.5rem] flex flex-col items-center justify-center gap-4 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
                    >
                      {/* Image replacement for Icon */}
                      <div className="w-10 h-10 flex items-center justify-center">
                        <img 
                          src={item.src} 
                          alt={item.name} 
                          className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
                        />
                      </div>
                      
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
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