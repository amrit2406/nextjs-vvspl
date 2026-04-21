"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const CompactCTA = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative group rounded-[2rem] border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-500"
        >
          {/* subtle glow */}
          <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 bg-orange-500/5 pointer-events-none" />

          <div className="relative px-8 py-12 md:px-14 flex flex-col md:flex-row items-center justify-between gap-10">
            
            {/* TEXT */}
            <div className="max-w-lg text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Let’s build something{" "}
                <span className="text-[#FF7E00] italic">
                  meaningful.
                </span>
              </h2>

              <p className="text-slate-500 mt-3 text-sm md:text-base leading-relaxed">
                We help teams design and scale systems that actually last.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              
              {/* Primary */}
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#FF7E00] text-white font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
              >
                Get Started
                <FiArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Secondary */}
              <Link
                href="/about"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase text-slate-500 hover:text-slate-900 transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompactCTA;