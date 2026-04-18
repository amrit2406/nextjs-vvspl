"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight, FiInstagram, FiTwitter } from "react-icons/fi";

const leaders = [
  {
    id: "01",
    name: "LT. Col. Anil Tripathi, Sena Medal (Retd.)",
    role: "Chairman cum Founder Director",
    bio: "Visionary in distributed systems and high-scale cloud infrastructure.",
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    linkedin: "https://in.linkedin.com/in/anil-tripathi-13887819?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile",
  },
  {
    id: "02",
    name: "Ankit Tripathi",
    role: "Additional Director",
    bio: "Specializing in minimalist industrial tech aesthetics and immersive UI.",
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    linkedin: "#",
  },
  {
    id: "03",
    name: "Dattavi Jariwala Tripathi",
    role: "Founder Director",
    bio: "Expert in GSAP, Three.js, and creating high-end 3D web experiences.",
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    linkedin: "https://in.linkedin.com/in/dattavii?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile",
  },
  {
    id: "04",
    name: "Priyanka Tripathi Kriech",
    role: "Executive Director",
    bio: "Expert in GSAP, Three.js, and creating high-end 3D web experiences.",
    image:
      "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
    linkedin: "https://ch.linkedin.com/in/priyankatripathi91?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile",
  },
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
              <div className="w-10 h-[1px] bg-[#FF7E00]" />
              <span className="text-[#FF7E00] font-bold uppercase tracking-[0.3em] text-[10px]">
                The Minds Behind VVSPL
              </span>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className=" text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none"
            >
              Led by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] via-orange-500 to-[#e67300] italic">
                Innovation.
              </span>
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
              Our founding team brings together decades of expertise to build
              the technical foundation of your future.
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
              <div className="relative aspect-[4/4] p-2 overflow-hidden rounded-[2rem] bg-slate-100 mb-4">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-contain group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700 ease-out"
                />

                {/* Float Social Overlay */}
                <div className="absolute bottom-6 right-6 flex flex-col gap-3 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-900 shadow-xl hover:bg-gradient-to-r hover:from-[#FF7E00] hover:to-[#e67300] hover:text-white transition-all"
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                </div>
              </div>

              {/* Info Section */}
              <div className="px-2">
                <div className="flex items-start justify-between mb-3 min-h-[60px]">
                  <h4 className="text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                    {leader.name}
                  </h4>
                  <div className="h-[1px] flex-grow mx-4 bg-slate-100 self-center" />
                </div>

                <p className="text-[#FF7E00] font-bold uppercase tracking-widest text-[10px]">
                  {leader.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/leadership"
            className="flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl font-black text-white bg-gradient-to-r from-[#FF7E00] to-[#e67300] hover:shadow-orange-500/20 hover:shadow-2xl transition-all duration-300 group"
          >
            <span>More About Them</span>
            <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={20} />
          </Link>
        </motion.div>

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
               <a key={social} href="#" className="text-slate-400 text-[10px] font-bold uppercase tracking-widest hover:text-[#FF7E00] transition-colors">
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
