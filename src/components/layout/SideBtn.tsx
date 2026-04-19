"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  FiGithub, 
  FiTwitter, 
  FiLinkedin, 
  FiInstagram, 
  FiYoutube,
  FiShare2 
} from "react-icons/fi";

const SocialSidebar = () => {
  const socials = [
    { icon: <FiLinkedin />, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: <FiGithub />, href: "#", label: "Github", color: "hover:bg-slate-800" },
    { icon: <FiTwitter />, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: <FiInstagram />, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
  ];

  return (
    <motion.div 
      initial={{ x: 80 }}
      animate={{ x: 0 }}
      transition={{ delay: 1, duration: 0.8, ease: "circOut" }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-[999] flex flex-col items-end group"
    >
      {/* Container with Glassmorphism */}
      <div className="flex flex-col gap-2 p-3 bg-white/80 backdrop-blur-xl border border-slate-200 border-r-0 rounded-l-3xl shadow-[-10px_0_30px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:pr-6">
        
        {/* Main Icon (Always Visible) */}
        <div className="w-10 h-10 flex items-center justify-center text-slate-400 group-hover:text-[#FF7E00] transition-colors duration-300">
          <FiShare2 size={20} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform" />
        </div>

        {/* Hidden Icons (Revealed on Hover) */}
        <div className="flex flex-col gap-2 h-0 opacity-0 scale-95 pointer-events-none group-hover:h-auto group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-500 ease-in-out overflow-hidden">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-600 transition-all duration-300 ${social.color} hover:text-white hover:shadow-lg shadow-slate-200`}
            >
              <span className="sr-only">{social.label}</span>
              {React.cloneElement(social.icon, { size: 18 })}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Subtle Vertical Label (Professional touch) */}
      <div className="absolute right-2 top-full mt-4 origin-bottom-right -rotate-90 pointer-events-none group-hover:opacity-0 transition-opacity">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 whitespace-nowrap">
          Connect With Us
        </span>
      </div>
    </motion.div>
  );
};

export default SocialSidebar;