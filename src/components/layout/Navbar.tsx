"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt4, HiOutlineX, HiChevronDown } from "react-icons/hi";
import {
  FiArrowUpRight,
  FiLayers,
  FiCode,
  FiSmartphone,
  FiActivity,
  FiLock,
  FiZap,
  FiHelpCircle,
  FiUsers,
  FiImage,
  FiEdit3,
} from "react-icons/fi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const moreLinks = [
    { name: "FAQ", href: "/faq", icon: <FiHelpCircle />, desc: "Common questions" },
    { name: "Leadership", href: "/leadership", icon: <FiUsers />, desc: "Meet the team" },
    { name: "Gallery", href: "/gallery", icon: <FiImage />, desc: "Our workspace" },
    { name: "Blogs", href: "/blogs", icon: <FiEdit3 />, desc: "Latest insights" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-[100] flex justify-center p-4 lg:p-6 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          relative pointer-events-auto flex items-center justify-between px-6 py-3 rounded-2xl
          transition-all duration-500 border
          ${
            isScrolled
              ? "w-full max-w-6xl bg-white/80 backdrop-blur-xl border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
              : "w-full max-w-7xl bg-transparent border-transparent"
          }
        `}
      >
        {/* Brand */}
        <Link href="/" className="relative flex items-center gap-2 group z-10">
          <div className="w-8 h-8 bg-gradient-to-tr from-[#FF7E00] to-[#FFB800] rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500 shadow-md" />
          <span className="text-xl font-black tracking-tighter text-black">
            VVSPLTECH<span className="opacity-50">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2 z-10">
          {["About", "Services", "Industries", "Careers"].map((item) => (
          // {["Home", "About", "Services", "Industries", "Careers"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="px-4 py-2 text-sm font-medium text-slate-900 hover:text-black transition-colors"
            >
              {item}
            </Link>
          ))}

          {/* Services Dropdown */}
          {/* <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                isServicesOpen ? "text-black" : "text-slate-700"
              }`}
            >
              Solutions
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[600px]"
                >
                  <div className="bg-white border border-black/10 rounded-3xl p-6 grid grid-cols-2 gap-2 shadow-2xl">
                    {services.map((s, i) => (
                      <Link
                        key={i}
                        href="/"
                        onMouseEnter={() => setHoveredService(i)}
                        className="p-4 rounded-2xl hover:bg-black/5 transition-all group relative overflow-hidden"
                      >
                        <div className="relative z-10 flex items-center gap-4">
                          <div className="text-2xl" style={{ color: s.color }}>
                            {s.icon}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-black">
                              {s.name}
                            </div>
                            <div className="text-xs text-slate-500 line-clamp-1">
                              {s.desc}
                            </div>
                          </div>
                        </div>

                        {hoveredService === i && (
                          <motion.div
                            layoutId="hoverBg"
                            className="absolute inset-0 bg-black/5 z-0"
                            transition={{
                              type: "spring",
                              bounce: 0.2,
                              duration: 0.6,
                            }}
                          />
                        )}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div> */}

          {/* More Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsMoreOpen(true)}
            onMouseLeave={() => setIsMoreOpen(false)}
          >
            <button
              className={`px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                isMoreOpen ? "text-black" : "text-slate-700"
              }`}
            >
              More
              <HiChevronDown className={`transition-transform duration-300 ${isMoreOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {isMoreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-64"
                >
                  <div className="bg-white border border-black/10 rounded-2xl p-2 shadow-2xl overflow-hidden">
                    {moreLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-black/5 transition-colors group"
                      >
                        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 text-slate-600 group-hover:bg-[#FF7E00] group-hover:text-white transition-colors">
                          {link.icon}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-black">{link.name}</div>
                          <div className="text-[10px] text-slate-500">{link.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4 z-10">
          <Link
            href="/contact"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black text-white text-sm font-bold hover:bg-[#FF7E00] transition-all group"
          >
            Start Project
            <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-black/10 text-black"
          >
            {isMenuOpen ? <HiOutlineX size={20} /> : <HiMenuAlt4 size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[90] p-8 flex flex-col justify-center items-center pointer-events-auto"
          >
            <div className="flex flex-col space-y-4 text-center">
              {["Home", "About", "Services", "Industries", "Careers", ...moreLinks.map(l => l.name), "Contact"].map(
                (link, i) => (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    key={link}
                  >
                    <Link
                      href="#"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-3xl font-black text-black hover:text-[#FF7E00] transition-colors"
                    >
                      {link}
                    </Link>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;