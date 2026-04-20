"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const SocialSidebar = () => {
  const socials = [
    { 
      icon: <FaWhatsapp />, 
      href: "https://wa.me/917894689818", 
      label: "WhatsApp", 
      color: "hover:bg-[#25D366]",
      shadow: "hover:shadow-[0_0_20px_rgba(37,211,102,0.5)]"
    },
    { 
      icon: <FaFacebookF />, 
      href: "https://www.facebook.com/share/1D4x5YWeff/", 
      label: "Facebook", 
      color: "hover:bg-[#1877F2]",
      shadow: "hover:shadow-[0_0_20px_rgba(24,119,242,0.5)]"
    },
    { 
      icon: <FaInstagram />, 
      href: "https://www.instagram.com/vvspltech?igsh=cjcyczloZWNuaGZx", 
      label: "Instagram", 
      color: "hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
      shadow: "hover:shadow-[0_0_20px_rgba(238,42,123,0.5)]"
    },
    { 
      icon: <FaLinkedinIn />, 
      href: "https://www.linkedin.com/company/112707331/admin/dashboard/", 
      label: "LinkedIn", 
      color: "hover:bg-[#0077B5]",
      shadow: "hover:shadow-[0_0_20px_rgba(0,119,181,0.5)]"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 }
  } as const;

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      // Added right-6 to give it space from the edge
      className="fixed right-6 top-1/2 -translate-y-1/2 z-[999] flex flex-col items-center"
    >
      {/* --- THE "AMAZING" HIGHLIGHT: Animated Glow Background --- */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-b from-blue-500 via-blue-400 to-orange-500 rounded-full z-[-1]"
      />

      {/* Main Container - Now fully rounded for a floating look */}
      <div className="relative flex flex-col gap-4 p-3 bg-white/40 backdrop-blur-2xl border border-white/50 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
        
        {socials.map((social, index) => (
          <motion.a
            key={index}
            variants={itemVariants}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              // scale: 1.2, 
              // rotate: 5,
              transition: { type: "spring", stiffness: 400, damping: 12 }
            }}
            whileTap={{ scale: 0.9 }}
            className={`
              relative group w-8 h-8 flex items-center justify-center rounded-full 
              bg-white/80 text-[#044DB6] shadow-md 
              transition-all duration-300 
              ${social.color} ${social.shadow} hover:text-white
            `}
          >
            <span className="sr-only">{social.label}</span>
            <div className="text-lg">
              {social.icon}
            </div>
            
            {/* Elegant Tooltip */}
            <span className="absolute right-16 px-3 py-1 rounded-lg bg-slate-900 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl">
              {social.label}
              {/* Tooltip Arrow */}
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45" />
            </span>
          </motion.a>
        ))}
      </div>

    </motion.div>
  );
};

export default SocialSidebar;