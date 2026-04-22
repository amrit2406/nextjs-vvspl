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
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVS5wOrF1fXHLGU-HDaTvt1LZG0ZF2aRmIEw&s", name: "Html" },
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa7ECW4xHgJyeIQexegqGhxgHGknkobmD0xA&s", name: "React JS" },
      { src: "https://img.icons8.com/color/1200/nextjs.jpg", name: "Next.js" },
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4FpjNSdg6ar1qS69pBn7f8Hq5IAeYX3eSYw&s", name: "Angular" },
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaSLSz1LCP-tQvV7GISoSczS3cmt3vRBr-ZQ&s", name: "Vue.js" },
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0MqB2Rz3qYFo5tItauvtVjo2y2DvoHH37Vw&s", name: "Svelte" },
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7WzMXdCh8eU-8m1Xz9-XGXFxJ6LuEV0_yA&s", name: "TypeScript" },
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxUqrDjcsIvW63BHgQpfAOQLwzsYjAmgFF5A&s", name: "Bootstrap" },
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png", name: "Tailwind" },
      // { src: "/tech/figma.png", name: "Figma" },
    ]
  },
  {
    id: "backend",
    label: "Backend",
    description: "Robust, distributed server-side logic designed for maximum uptime and security.",
    items: [
      { src: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-icon-svg-download-png-1174937.png", name: "Node.js" },
      { src: "https://image.similarpng.com/file/similarpng/very-thumbnail/2021/12/Python-programming-logo-on-transparent-background-PNG.png", name: "Python" },
      { src: "https://cdn.iconscout.com/icon/free/png-256/free-java-logo-icon-svg-download-png-1720088.png?f=webp", name: "Java Spring" },
      { src: "https://alex-bezverkhniy.github.io/images/spring-boot/spring-boot-logo.png", name: "Java Spring" },
      { src: "https://e7.pngegg.com/pngimages/515/403/png-clipart-rust-unturned-survival-game-computer-servers-kurma-game-angle-thumbnail.png", name: "Rust" },
      { src: "https://img.icons8.com/color/1200/golang.jpg", name: "Golang" },
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTjaR2SA-XnbFfkyjHVeuyj0ugg8Yrv4NeWQ&s", name: "Ruby on rail" },
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcqTkFDyu6mpbV-XH1T-VXCNq2c_1HvDMInA&s", name: "Golang" },
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczZI3ghLdEmTkBPVz8LQS064LMt4gz0q61Q&s", name: "Php" },
    ]
  },
  {
    id: "mobile",
    label: "Mobile",
    description: "Native and cross-platform mobile ecosystems for iOS and Android.",
    items: [
      { src: "https://img.icons8.com/color/1200/flutter.jpg", name: "Flutter" },
      { src: "https://img.icons8.com/color/1200/android-studio--v2.jpg", name: "Flutter" },
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHR_P-7OxbDx2-EpUFbKc24Ee2jKJYms_gUw&s", name: "React Native" },
      { src: "https://download.logo.wine/logo/Kotlin_(programming_language)/Kotlin_(programming_language)-Logo.wine.png", name: "Kotlin" },
      { src: "https://cdn.iconscout.com/icon/free/png-256/free-swift-logo-icon-svg-download-png-1720082.png", name: "Swift" },
    ]
  },
  {
    id: "infra",
    label: "Infra & AI",
    description: "Cloud-native scaling and intelligent automation for modern enterprises.",
    items: [
      { src: "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png", name: "AWS" },
      { src: "https://cdn.iconscout.com/icon/free/png-256/free-docker-icon-svg-download-png-1175230.png", name: "Docker" },
      { src: "https://img.icons8.com/color/1200/kubernetes.jpg", name: "K8s" },
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToErbo5Q_2GWHB1oKv2mwUYZvvkwzhxrMlsg&s", name: "PostgreSQL" },
      { src: "https://img.icons8.com/color/1200/chatgpt.jpg", name: "OpenAI/LLM" },
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
        <div className="flex flex-wrap justify-center gap-2 mb-8 p-2 bg-slate-50 rounded-[2.5rem] border border-slate-100 w-fit mx-auto">
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
        <div className="min-h-[300px]">
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
                      <div className="w-18 h-18 flex items-center justify-center">
                        <img 
                          src={item.src} 
                          alt={item.name} 
                          className="max-w-full max-h-full object-contain transition-all duration-300 transform group-hover:scale-110"
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