"use client";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight, FiInstagram, FiTwitter } from "react-icons/fi";

const leaders = [
  {
    id: "01",
    name: "LT. Col. Anil Tripathi, Sena Medal (Retd.)",
    role: "Founder",
    bio: "Visionary in distributed systems and high-scale cloud infrastructure.",
    image: "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg", 
  },
  {
    id: "02",
    name: "Ankit Tripathi",
    role: "Founder",
    bio: "Specializing in minimalist industrial tech aesthetics and immersive UI.",
    image: "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
  },
  {
    id: "03",
    name: "Dattavi Jariwala Tripathi",
    role: "Founder",
    bio: "Expert in GSAP, Three.js, and creating high-end 3D web experiences.",
    image: "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
  },
  {
    id: "04",
    name: "Priyanka Tripathi Kriech",
    role: "Founder",
    bio: "Expert in GSAP, Three.js, and creating high-end 3D web experiences.",
    image: "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
  }
];

const Leaders = () => {
  return (
    <section className="py-18 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-[1px] bg-blue-600" />
              <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px]">
                The Minds Behind VVSPL
              </span>
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none"
            >
              Led by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-[#044DB6] italic">Innovation.</span>
            </motion.h3>
          </div>
          
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="lg:max-w-xs"
          >
            <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-slate-100 pl-6">
              Our founding team brings together decades of expertise to build the technical foundation of your future.
            </p>
          </motion.div>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-slate-100 mb-8">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
                />
                
                {/* Float Social Overlay */}
                <div className="absolute bottom-6 right-6 flex flex-col gap-3 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                   <a href="#" className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-900 shadow-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-[#044DB6] hover:text-white transition-all">
                      <FaLinkedinIn size={18} />
                   </a>
                   {/* <a href="#" className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-900 shadow-xl hover:bg-blue-600 hover:text-white transition-colors">
                      <FiArrowUpRight size={20} />
                   </a> */}
                </div>

                {/* Serial Number Overlay */}
                {/* <div className="absolute top-8 left-8">
                  <span className="text-white/30 font-black text-4xl italic">{leader.id}</span>
                </div> */}
              </div>

              {/* Info Section */}
              <div className="px-2">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {leader.name}
                  </h4>
                  <div className="h-[1px] flex-grow mx-4 bg-slate-100" />
                </div>
                <p className="text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-4">
                  {leader.role}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[260px]">
                  {leader.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal Footer Decor */}
        {/* <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          className="mt-32 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.4em]">
            VVSPL TECH — GLOBAL LEADERSHIP 2026
          </span>
          <div className="flex gap-8">
             {["Instagram", "Twitter", "LinkedIn"].map((social) => (
               <a key={social} href="#" className="text-slate-400 text-[10px] font-bold uppercase tracking-widest hover:text-blue-600 transition-colors">
                 {social}
               </a>
             ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Leaders;