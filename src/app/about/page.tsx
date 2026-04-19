"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiCpu,
  FiGlobe,
  FiUsers,
  FiZap,
  FiShield,
  FiTrendingUp,
  FiTarget,
  FiMaximize,
  FiStar,
  FiLayers,
} from "react-icons/fi";

// --- New Component: Modern Value Card ---
const ValueCard = ({ icon: Icon, title, content, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="group relative p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
      <Icon size={120} />
    </div>
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-6 group-hover:bg-[#FF7E00] transition-colors duration-500">
        <Icon size={24} />
      </div>
      <h4 className="text-xl font-black text-slate-900 mb-3 tracking-tight">
        {title}
      </h4>
      <p className="text-slate-500 leading-relaxed font-medium">{content}</p>
    </div>
  </motion.div>
);

// --- Split-Shift Narrative Component ---
const NarrativeRow = ({
  title,
  subtitle,
  desc,
  image,
  isReversed,
  tags,
}: any) => (
  <div className="py-24 border-b border-slate-100 last:border-0">
    <div
      className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 items-start`}
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full lg:w-5/12 sticky top-32"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="h-[2px] w-12 bg-[#FF7E00]" />
          <span className="text-[#FF7E00] font-black uppercase tracking-widest text-xs">
            {subtitle}
          </span>
        </div>
        <h3 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter">
          {title}
        </h3>
        <p className="text-slate-500 text-xl font-medium leading-relaxed mb-8">
          {desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag: string, i: number) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-tight"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Image Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-full lg:w-7/12"
      >
        <div className="relative group overflow-hidden rounded-[2rem] bg-slate-100 shadow-2xl">
          <img
            src={image}
            alt={title}
            className="w-full aspect-[16/10] object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />
          <div className="absolute bottom-10 left-10 text-white">
            <div className="flex items-center gap-2 mb-2">
              <FiStar className="text-orange-400 fill-orange-400" />
              <span className="text-xs font-black uppercase tracking-widest">
                Industry Standard
              </span>
            </div>
            <p className="text-2xl font-bold tracking-tight">
              Delivering Excellence Since 2012
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen selection:bg-[#044DB6] selection:text-white">
      {/* --- HERO SECTION (Untouched) --- */}
      <section className="pt-40 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Pioneering the <br />
              <span className="text-[#FF7E00]">VVSPL Tech</span> Era.
            </h1>
            <p className="mt-8 text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
              We aren't just building software; we're architecting the digital
              backbone for tomorrow's industry leaders. Driven by precision,
              fueled by innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Narrative Section --- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <NarrativeRow
          subtitle="The Blueprint"
          title="Architecting Bold Futures"
          desc="We specialize in deep-tech integration where performance meets aesthetic. Our approach is surgical: we identify bottlenecks and deploy high-velocity code that scales without friction."
          image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
          isReversed={false}
          tags={["Scalability", "Next-Gen UI", "Secure Ops"]}
        />
      </section>

      {/* --- Redesigned Values Grid --- */}
      <section className="py-32 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
              Our <span className="text-[#FF7E00]">North Star</span> Principles
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl font-medium">
              We operate under a strict set of internal mandates that ensure
              every partner receives world-class delivery without compromise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard
              index={0}
              icon={FiShield}
              title="Integrity First"
              content="Radical transparency in every line of code and business decision."
            />
            <ValueCard
              index={1}
              icon={FiGlobe}
              title="Global Scale"
              content="Built for performance across borders, cultures, and time zones."
            />
            <ValueCard
              index={2}
              icon={FiTrendingUp}
              title="Continuous Growth"
              content="Heavy investment in R&D to stay ahead of the digital curve."
            />
            <ValueCard
              index={3}
              icon={FiLayers}
              title="Unified Systems"
              content="Seamless integration between your legacy data and future tech."
            />
          </div>
        </div>
      </section>

      {/* --- Final Modern CTA --- */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter mb-12">
              Let's <span className="text-slate-300">Build</span> The Next.
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button className="h-20 px-12 bg-slate-900 text-white rounded-full font-black text-lg hover:bg-[#FF7E00] transition-colors duration-300 flex items-center gap-4">
                Discuss Strategy <FiArrowRight />
              </button>
              <button className="h-20 px-12 bg-white border-2 border-slate-900 text-slate-900 rounded-full font-black text-lg hover:bg-slate-50 transition-colors">
                Explore Careers
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
