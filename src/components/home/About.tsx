"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { FiCheckCircle, FiArrowUpRight, FiAward } from "react-icons/fi";
import Link from "next/link";

const About = () => {
  const containerRef = useRef(null);

  const stats = [
    { label: "Years of Mastery", value: "10+", color: "text-[#FF7E00]" },
    { label: "Elite Engineers", value: "50+", color: "text-[#044DB6]" },
    { label: "Global Deployments", value: "100+", color: "text-orange-500" },
  ];

  return (
    <section
      ref={containerRef}
      className="py-24 bg-white overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* LEFT: Visual & Stats */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Main Image Container - Match Hero Border Radius */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 rounded-[2.5rem] overflow-hidden"
              >
                <img
                  src="/assets/about2.png"
                  alt="Team collaboration"
                  className="w-full h-[480px] object-contain"
                />
              </motion.div>

              {/* Decorative Blobs - Match Hero logic */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-orange-100 rounded-full blur-[100px] opacity-60" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-[100px] opacity-60" />
            </div>
          </div>

          {/* RIGHT: Content & Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            {/* Status Badge Style Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-[1px] bg-[#FF7E00]" />
              <span className="text-[#FF7E00] font-bold uppercase tracking-[0.3em] text-[10px]">
                About Us
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter"
            >
             We don't just use technology <span></span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] via-orange-500 to-[#e67300] italic pr-2">
                :
              </span>
              <br />
              We make it work for you
            </motion.h2>

            <div className="space-y-6 text-slate-600 leading-relaxed max-w-2xl font-medium">
              <p className="text-md text-xl">
                "Innovation means nothing without impact — we deliver both."
              </p>
              <p className="text-md">
                We believe innovation should be practical, scalable, and purposeful. From AI-driven systems and intelligent automation to secure, resilient digital infrastructures, we engineer solutions that simplify complexity. Our approach is the simple way to solve complete digital problems.
              </p>
            </div>

            {/* CTA Action Group - Matching Hero Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mt-12">
              {/* <Link href="/contact">
                <motion.span
                  whileHover={{ y: 2 }}
                  whileTap={{ y: 6 }}
                  className="inline-flex items-center justify-center space-x-3 px-6 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-[#FF7E00] via-orange-500 to-[#e67300] shadow-[0_6px_0_#cc6600] transition-all duration-150 group cursor-pointer"
                >
                  <span>Start Your Project</span>
                  <FiArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
                </motion.span>
              </Link> */}
              <Link
                href="/about"
                className="relative flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#044DB6] to-blue-500 shadow-[0_6px_0_#033a8c] transition-all duration-150 hover:translate-y-[2px] hover:shadow-[0_4px_0_#033a8c] active:translate-y-[6px] active:shadow-[0_0px_0_#033a8c]"
              >
                <span>Know more</span>
              </Link>

              <a href="tel:+917894689818">
                <motion.span
                  whileHover={{ y: 2 }}
                  whileTap={{ y: 6 }}
                  className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-semibold text-[#044DB6] bg-white border border-[#044DB6]/25 shadow-[0_6px_0_#cbd5e1] transition-all duration-150 cursor-pointer hover:border-[#044DB6] hover:shadow-[0_4px_0_#033a8c]"
                >
                  <span>Call us now</span>
                </motion.span>
              </a>
            </div>
          </div>
        </div>

        {/* Scrolling Feature Ribbon - Match Hero Palette */}
        <div className="mt-14 py-6 border-y border-slate-100 overflow-hidden relative group bg-slate-50/50">
          <div className="flex animate-marquee whitespace-nowrap space-x-16 items-center">
            {[
              "AI Integration",
              "Cloud Architecture",
              "Cyber Security",
              "Custom ERP",
              "Blockchain",
              "Big Data",
            ].map((tech, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                {/* <FiCheckCircle className="text-[#FF7E00] text-xl" /> */}
                <span className="text-slate-900 font-black tracking-tighter text-lg">
                  {tech}
                </span>
              </div>
            ))}
            {/* Repeat for seamless loop */}
            {[
              "AI Integration",
              "Cloud Architecture",
              "Cyber Security",
              "Custom ERP",
              "Blockchain",
              "Big Data",
            ].map((tech, idx) => (
              <div key={idx + "-2"} className="flex items-center space-x-4">
                {/* <FiCheckCircle className="text-[#FF7E00] text-xl" /> */}
                <span className="text-slate-900 font-black tracking-tighter text-lg">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
