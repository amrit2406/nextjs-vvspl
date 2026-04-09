"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX, HiChevronDown } from "react-icons/hi";
import { FiArrowRight, FiCpu, FiGlobe, FiSmartphone, FiShoppingCart, FiShield, FiCloud } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "AI Solutions", href: "/services/ai", icon: <FiCpu />, desc: "LLMs & Neural Networks" },
    { name: "Web Apps", href: "/services/web", icon: <FiGlobe />, desc: "React & Next.js Platforms" },
    { name: "Mobile Apps", href: "/services/mobile", icon: <FiSmartphone />, desc: "iOS & Android Apps" },
    { name: "E-Commerce", href: "/services/ecom", icon: <FiShoppingCart />, desc: "Digital Storefronts" },
    { name: "Cyber Security", href: "/services/security", icon: <FiShield />, desc: "Enterprise Protection" },
    { name: "Cloud Services", href: "/services/cloud", icon: <FiCloud />, desc: "AWS & Infrastructure" },
  ];

  return (
    <>
      {/* 1. THE SPACER: This pushes the Hero down so nothing overlaps */}
      <div className="h-20 lg:h-24 bg-white w-full" />

      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-100 py-3 shadow-sm" : "bg-white py-6"
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link href="/" className="group relative z-[101]">
              <span className="text-2xl font-black tracking-tighter text-slate-900">
                VVSPL <span className="text-blue-600 group-hover:text-indigo-600 transition-colors">TECH</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex space-x-10 items-center">
              <Link href="/" className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600 hover:text-blue-600 transition-colors">Home</Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center space-x-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-600 hover:text-blue-600 transition-colors outline-none">
                  <span>Services</span>
                  <HiChevronDown className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 mt-4 w-[650px] bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-50 p-8 grid grid-cols-2 gap-4 z-[110]"
                    >
                      {services.map((s) => (
                        <Link key={s.name} href={s.href} className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-slate-50 transition-all group/item">
                          <div className="mt-1 bg-blue-50 text-blue-600 p-3 rounded-xl group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-300">
                            {s.icon}
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 text-sm">{s.name}</p>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">{s.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/about" className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/portfolio" className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600 hover:text-blue-600 transition-colors">Portfolio</Link>
              
              <Link
                href="/contact"
                className="flex items-center space-x-2 px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest text-white bg-gradient-to-r from-blue-600 to-[#044DB6] hover:from-blue-700 hover:to-[#0863e7] transition-all duration-300 shadow-xl shadow-blue-500/20"
              >
                <span>Contact</span>
                <FiArrowRight />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden relative z-[101] p-2 text-slate-900">
              {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden fixed inset-0 bg-white z-[100] px-6 pt-32 pb-10 flex flex-col justify-between"
            >
              <div className="flex flex-col space-y-8">
                <Link href="/" onClick={() => setIsOpen(false)} className="text-4xl font-black text-slate-900">Home</Link>
                <div className="space-y-4">
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Our Expertise</p>
                  <div className="grid grid-cols-1 gap-6">
                    {services.map((s) => (
                      <Link key={s.name} href={s.href} onClick={() => setIsOpen(false)} className="flex items-center space-x-4">
                        <span className="text-slate-400">{s.icon}</span>
                        <span className="text-xl font-bold text-slate-800">{s.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/contact" onClick={() => setIsOpen(false)} className="w-full text-center py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg">
                Start a Project
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;