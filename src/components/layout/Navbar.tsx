// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { HiMenuAlt3, HiX, HiChevronDown } from "react-icons/hi";
// import { FiArrowRight, FiCpu, FiGlobe, FiSmartphone, FiShoppingCart, FiShield, FiCloud } from "react-icons/fi";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const services = [
//     { name: "AI Solutions", href: "/services/ai-solutions", icon: <FiCpu className="text-xl" />, desc: "LLMs & Neural Networks" },
//     { name: "Web Apps", href: "/services/web-apps", icon: <FiGlobe className="text-xl" />, desc: "React & Next.js Platforms" },
//     { name: "Mobile Apps", href: "/services/mobile-apps", icon: <FiSmartphone className="text-xl" />, desc: "iOS & Android Apps" },
//     { name: "E-Commerce", href: "/services/e-comm", icon: <FiShoppingCart className="text-xl" />, desc: "Digital Storefronts" },
//     { name: "Cyber Security", href: "/services/cyber-security", icon: <FiShield className="text-xl" />, desc: "Enterprise Protection" },
//     { name: "Cloud Services", href: "/services/cloud-services", icon: <FiCloud className="text-xl" />, desc: "AWS & Infrastructure" },
//   ];

//   return (
//     <>
//       {/* Premium spacer with gradient */}
//       <div className="h-20 lg:h-24 bg-gradient-to-b from-slate-50 to-transparent w-full" />

//       <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${scrolled ? "bg-white/95 backdrop-blur-xl border-b border-slate-100 py-3 shadow-lg" : "bg-white py-6"}`}>
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="flex justify-between items-center">

//             {/* Premium Logo with subtle animation */}
//             <Link href="/" className="group relative z-[101]">
//               <motion.span 
//                 className="text-2xl lg:text-3xl font-black tracking-tighter text-slate-900"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 10 }}
//               >
//                 VVSPL <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent group-hover:from-amber-600 group-hover:to-orange-600 transition-all duration-300">TECH</span>
//               </motion.span>
//             </Link>

//             {/* Desktop Nav */}
//             <div className="hidden lg:flex space-x-12 items-center">
//               <Link href="/" className="relative text-xs font-medium uppercase tracking-[0.15em] text-slate-600 hover:text-amber-600 transition-colors group">
//                 Home
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
//               </Link>

//               {/* Premium Services Dropdown */}
//               <div
//                 className="relative py-2"
//                 onMouseEnter={() => setIsServicesOpen(true)}
//                 onMouseLeave={() => setIsServicesOpen(false)}
//               >
//                 <Link href="/services" className="flex items-center space-x-1 text-xs font-medium uppercase tracking-[0.15em] text-slate-600 hover:text-amber-600 transition-colors outline-none group">
//                   <span>Services</span>
//                   <motion.div 
//                     animate={{ rotate: isServicesOpen ? 180 : 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <HiChevronDown className="text-xs" />
//                   </motion.div>
//                 </Link>

//                 <AnimatePresence>
//                   {isServicesOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 15, scale: 0.95 }}
//                       animate={{ opacity: 1, y: 0, scale: 1 }}
//                       exit={{ opacity: 0, y: 15, scale: 0.95 }}
//                       transition={{ duration: 0.3, ease: "easeOut" }}
//                       className="absolute left-1/2 -translate-x-1/2 mt-4 w-[700px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 grid grid-cols-2 gap-6 z-[110]"
//                     >
//                       {services.map((s, index) => (
//                         <motion.div
//                           key={s.name}
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: index * 0.05 }}
//                           whileHover={{ y: -5 }}
//                           className="group"
//                         >
//                           <Link href={s.href} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-50 transition-all group">
//                             <div className="mt-1 bg-gradient-to-br from-amber-50 to-orange-50 text-amber-600 p-3 rounded-xl group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-white transition-all duration-300 shadow-md">
//                               {s.icon}
//                             </div>
//                             <div>
//                               <p className="font-bold text-slate-900 text-sm">{s.name}</p>
//                               <p className="text-xs text-slate-500 mt-1 leading-relaxed">{s.desc}</p>
//                             </div>
//                           </Link>
//                         </motion.div>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               <Link href="/about" className="relative text-xs font-medium uppercase tracking-[0.15em] text-slate-600 hover:text-amber-600 transition-colors group">
//                 About
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
//               </Link>
//               <Link href="/portfolio" className="relative text-xs font-medium uppercase tracking-[0.15em] text-slate-600 hover:text-amber-600 transition-colors group">
//                 Portfolio
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
//               </Link>

//               {/* Premium Contact Button */}
//               <Link
//                 href="/contact"
//                 className="group relative flex items-center space-x-2 px-8 py-4 rounded-xl font-medium text-xs uppercase tracking-widest text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg shadow-amber-500/20 overflow-hidden"
//               >
//                 <span className="relative z-10">Contact</span>
//                 <FiArrowRight className="relative z-10" />
//                 <motion.div 
//                   className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600"
//                   initial={{ x: "100%" }}
//                   whileHover={{ x: 0 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </Link>
//             </div>

//             {/* Premium Mobile Toggle */}
//             <button 
//               onClick={() => setIsOpen(!isOpen)}
//               className="lg:hidden relative z-[101] p-3 text-slate-900 rounded-xl hover:bg-slate-100 transition-colors"
//             >
//               <motion.div 
//                 animate={{ rotate: isOpen ? 90 : 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
//               </motion.div>
//             </button>
//           </div>
//         </div>

//         {/* Premium Mobile Menu */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//               className="lg:hidden fixed inset-0 bg-white z-[100] px-6 pt-32 pb-10 flex flex-col justify-between overflow-hidden"
//             >
//               <div className="flex flex-col space-y-10">
//                 <Link href="/" onClick={() => setIsOpen(false)} className="text-4xl font-black text-slate-900">Home</Link>
//                 <div className="space-y-6">
//                   <div className="relative">
//                     <button 
//                       onClick={() => setIsServicesOpen(!isServicesOpen)}
//                       className="flex items-center justify-between w-full text-left text-xs font-bold text-amber-600 uppercase tracking-widest"
//                     >
//                       <span>Our Expertise</span>
//                       <motion.div 
//                         animate={{ rotate: isServicesOpen ? 180 : 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <HiChevronDown className="text-sm" />
//                       </motion.div>
//                     </button>
                    
//                     {isServicesOpen && (
//                       <motion.div 
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="mt-4 space-y-4 overflow-hidden"
//                       >
//                         {services.map((s) => (
//                           <Link 
//                             key={s.name} 
//                             href={s.href} 
//                             onClick={() => setIsOpen(false)} 
//                             className="flex items-center space-x-4 p-3 rounded-xl hover:bg-slate-50 transition-colors"
//                           >
//                             <span className="text-slate-400">{s.icon}</span>
//                             <span className="text-lg font-bold text-slate-800">{s.name}</span>
//                           </Link>
//                         ))}
//                       </motion.div>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <Link 
//                 href="/contact" 
//                 onClick={() => setIsOpen(false)} 
//                 className="w-full text-center py-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
//               >
//                 Start a Project
//               </Link>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

// /
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt4, HiOutlineX } from "react-icons/hi";
import {
  FiArrowUpRight,
  FiLayers,
  FiCode,
  FiSmartphone,
  FiActivity,
  FiLock,
  FiZap,
} from "react-icons/fi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Neural AI", icon: <FiZap />, color: "#6366f1", desc: "Custom LLM training and integration." },
    { name: "Web Systems", icon: <FiCode />, color: "#0ea5e9", desc: "High-performance Next.js architectures." },
    { name: "Mobile Core", icon: <FiSmartphone />, color: "#f59e0b", desc: "Native experiences for iOS & Android." },
    { name: "Cyber Armor", icon: <FiLock />, color: "#ef4444", desc: "Penetration testing & encryption." },
    { name: "Cloud Mesh", icon: <FiLayers />, color: "#8b5cf6", desc: "Scalable AWS/Azure infrastructure." },
    { name: "Analytics", icon: <FiActivity />, color: "#10b981", desc: "Real-time data visualization." },
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
              ? "w-full max-w-5xl bg-white/80 backdrop-blur-xl border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
              : "w-full max-w-7xl bg-transparent border-transparent"
          }
        `}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-white/40 opacity-0 hover:opacity-100 transition duration-500 blur-xl pointer-events-none" />

        {/* Brand */}
        <Link href="/" className="relative flex items-center gap-2 group z-10">
          <div className="w-8 h-8 bg-gradient-to-tr from-[#FF7E00] to-[#FFB800] rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500 shadow-md" />
          <span className="text-xl font-black tracking-tighter text-black">
            VVSPL<span className="opacity-50">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2 z-10">
          {["Home", "Portfolio", "Company"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-black transition-colors"
            >
              {item}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div
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
            <div className="flex flex-col space-y-6 text-center">
              {["Home", "Expertise", "Portfolio", "Company", "Contact"].map(
                (link, i) => (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    key={link}
                  >
                    <Link
                      href="#"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-5xl font-black text-black hover:text-[#FF7E00] transition-colors"
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