"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  FiArrowRight, FiCheck, FiCpu, FiGlobe, FiUsers,
  FiAward, FiTarget, FiZap, FiShield, FiTrendingUp
} from "react-icons/fi";

// Reusable Detailed Section (Matching your Contact style)
const AboutDetailBlock = ({ title, desc, points, image, isReversed, color, icon: Icon }: any) => (
  <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 py-20 items-center border-b border-slate-100 last:border-0`}>
    <motion.div 
      initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="w-full lg:w-1/2"
    >
      <div className="relative group">
        <div className={`absolute -inset-4 bg-gradient-to-r ${color} opacity-5 blur-2xl group-hover:opacity-15 transition duration-700`} />
        <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl bg-slate-50">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
      </div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full lg:w-1/2"
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white mb-6 shadow-lg`}>
        <Icon size={24} />
      </div>
      <h4 className="text-3xl lg:text-4xl font-black text-slate-900 mb-5 tracking-tight">{title}</h4>
      <p className="text-slate-600 mb-8 leading-relaxed text-lg font-medium">{desc}</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
        {points.map((p: string, i: number) => (
          <li key={i} className="flex items-start gap-3 text-slate-700">
            <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[#FF7E00] text-[10px]">
              <FiCheck strokeWidth={3} />
            </span>
            <span className="text-sm font-bold uppercase tracking-tight text-slate-600">{p}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
);

// Values/Core Card
const ValueCard = ({ icon: Icon, title, content, color }: any) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg hover:shadow-xl transition-all"
  >
    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white mb-6 shadow-lg`}>
      <Icon size={28} />
    </div>
    <h4 className="text-xl font-black text-slate-900 mb-3">{title}</h4>
    <p className="text-slate-600 font-medium leading-relaxed">{content}</p>
  </motion.div>
);

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* --- Hero Section --- */}
      <section className="pt-40 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-[#FF7E00] text-xs font-black uppercase tracking-[0.2em] mb-8">
              <FiZap /> Our Legacy & Future
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Pioneering the <br /> 
              <span className="text-[#FF7E00]">VVSPL Tech</span> Era.
            </h1>
            <p className="mt-8 text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
              We aren't just building software; we're architecting the digital backbone for tomorrow's industry leaders. Driven by precision, fueled by innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Detailed Narrative Section --- */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AboutDetailBlock 
            title="The Visionary Blueprint"
            desc="Founded on the principle of 'Absolute Tech Integration,' VVSPL Tech bridges the gap between legacy operations and future-ready digital ecosystems."
            icon={FiTarget}
            color="from-[#FF7E00] to-orange-400"
            image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
            points={["Strategic Consulting", "Rapid Deployment", "Scalable Architecture", "UX Excellence"]}
            isReversed={false}
          />
          
          <AboutDetailBlock 
            title="Engineered for Impact"
            desc="Our team of developers and strategists work at the intersection of performance and aesthetics to ensure your brand stands out in a crowded market."
            icon={FiCpu}
            color="from-[#044DB6] to-blue-500"
            image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
            points={["Custom Development", "AI Integration", "Cloud Solutions", "24/7 Monitoring"]}
            isReversed={true}
          />
        </div>
      </section>

      {/* --- Core Values Section --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
              The <span className="text-[#044DB6]">Core Values</span> that drive us
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              icon={FiShield}
              title="Integrity First"
              content="We believe in radical transparency. Every line of code and every business decision is built on a foundation of trust."
              color="from-[#FF7E00] to-orange-400"
            />
            <ValueCard 
              icon={FiGlobe}
              title="Global Scale"
              content="Thinking locally, acting globally. We build solutions that are ready to perform across borders and time zones."
              color="from-[#044DB6] to-blue-500"
            />
            <ValueCard 
              icon={FiTrendingUp}
              title="Continuous Growth"
              content="The digital landscape never stops evolving, and neither do we. We invest heavily in R&D and team learning."
              color="from-indigo-600 to-[#044DB6]"
            />
          </div>
        </div>
      </section>

      {/* --- Stats / Milestone Section --- */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Projects Delivered", value: "250+", color: "text-[#FF7E00]" },
              { label: "Global Clients", value: "85+", color: "text-[#044DB6]" },
              { label: "Team Experts", value: "40+", color: "text-[#FF7E00]" },
              { label: "Years Experience", value: "12+", color: "text-[#044DB6]" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className={`text-4xl md:text-5xl font-black ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Final CTA (Matching your Contact page style) --- */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FF7E00] rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#044DB6] rounded-full blur-[120px]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[#FF7E00]/20 flex items-center justify-center">
                <FiUsers className="text-[#FF7E00] text-3xl" />
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
              Work with the <br /> 
              <span className="text-[#FF7E00]">Best in Tech.</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              Whether you're looking for a technology partner or your next career-defining role, VVSPL Tech is where the future happens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-12 py-5 bg-[#FF7E00] text-white rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-[#FF7E00]/20 flex items-center gap-2 group">
                Contact Our Team <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-12 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-black hover:bg-white/20 transition-all">
                View Career Openings
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;