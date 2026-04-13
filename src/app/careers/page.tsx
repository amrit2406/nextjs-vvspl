"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  FiArrowRight, FiCheck, FiCpu, FiCoffee, 
  FiGlobe, FiZap, FiStar, FiClock 
} from "react-icons/fi";

// --- Sub-Component: Benefit Card ---
const BenefitCard = ({ icon: Icon, title, desc }: any) => (
  <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-[#FF7E00]/30 transition-colors group">
    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#FF7E00] mb-6 group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <h4 className="text-xl font-black text-slate-900 mb-3">{title}</h4>
    <p className="text-slate-600 font-medium leading-relaxed">{desc}</p>
  </div>
);

// --- Sub-Component: Job Row ---
const JobRow = ({ title, type, location, link }: any) => (
  <div className="group flex flex-col md:flex-row md:items-center justify-between p-8 border-b border-slate-100 hover:bg-slate-50/50 transition-all cursor-pointer">
    <div className="mb-4 md:mb-0">
      <h4 className="text-2xl font-black text-slate-900 group-hover:text-[#FF7E00] transition-colors">{title}</h4>
      <div className="flex gap-4 mt-2">
        <span className="flex items-center gap-1 text-sm font-bold text-slate-400 uppercase tracking-widest">
          <FiClock size={14} /> {type}
        </span>
        <span className="flex items-center gap-1 text-sm font-bold text-slate-400 uppercase tracking-widest">
          <FiGlobe size={14} /> {location}
        </span>
      </div>
    </div>
    <button className="flex items-center gap-2 font-black text-sm uppercase tracking-widest text-slate-900 group-hover:translate-x-2 transition-transform">
      Apply Now <FiArrowRight className="text-[#FF7E00]" />
    </button>
  </div>
);

const CareerPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* --- Page Hero --- */}
      <section className="pt-40 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
              Join the Squad<span className="text-[#FF7E00]">.</span>
            </h1>
            <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
              We don’t just fill seats; we empower engineers, creators, and thinkers to build the future of digital infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 1: CULTURE & BENEFITS --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <BenefitCard 
              icon={FiCpu}
              title="Tech Sovereignty"
              desc="Work with the latest stacks (Next.js, Rust, AI/ML) and contribute to proprietary enterprise products."
            />
            <BenefitCard 
              icon={FiZap}
              title="Hyper Growth"
              desc="A meritocratic environment where your impact is measured by code quality and creative problem-solving."
            />
            <BenefitCard 
              icon={FiCoffee}
              title="Remote-First"
              desc="We value output over hours. Work from anywhere in the world with a flexible, high-trust schedule."
            />
          </div>

          {/* Featured Image/Culture Block */}
          <div className="relative rounded-[3rem] overflow-hidden aspect-[21/9] border border-slate-200">
             <img 
               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
               className="w-full h-full object-cover" 
               alt="Team Culture" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-12">
                <p className="text-white text-2xl font-black max-w-xl">"Innovation happens when we stop following best practices and start creating them."</p>
             </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: OPEN ROLES --- */}
      <section className="py-24 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-3 text-[#044DB6] font-black mb-4">
              <div className="w-8 h-[2px] bg-[#044DB6]" />
              <span className="uppercase tracking-[0.3em] text-[10px]">Current Openings</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              Build with us.
            </h2>
          </div>

          {/* Department: Engineering */}
          <div className="mb-12">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-6 px-8">Engineering</h3>
            <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
              <JobRow title="Senior Full-Stack Engineer" type="Full-Time" location="Remote / Global" />
              <JobRow title="DevOps Architect" type="Full-Time" location="Hybrid (NYC/London)" />
              <JobRow title="UI/UX Product Designer" type="Contract" location="Remote" />
            </div>
          </div>

          {/* Department: Growth & Consulting */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-6 px-8">Consulting & Growth</h3>
            <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
              <JobRow title="Technical Project Manager" type="Full-Time" location="Remote" />
              <JobRow title="Digital Strategy Lead" type="Full-Time" location="Remote" />
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-500 font-medium">
              Don’t see your role? <span className="text-slate-900 font-black cursor-pointer hover:text-[#FF7E00] underline decoration-[#FF7E00]/30 underline-offset-4">Send a speculative application</span>
            </p>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA: PERKS --- */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div>
              <p className="text-4xl font-black text-slate-900">20+</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">Nationalities</p>
            </div>
            <div>
              <p className="text-4xl font-black text-[#FF7E00]">4.9</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">Glassdoor Rating</p>
            </div>
            <div>
              <p className="text-4xl font-black text-slate-900">0%</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">Ego Policy</p>
            </div>
            <div>
              <p className="text-4xl font-black text-[#044DB6]">UNLIMITED</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">Learning Budget</p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[3rem] py-20 px-10 relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-8">
                  Become a part of the <br /> 
                  <span className="text-[#FF7E00]">proprietary revolution.</span>
                </h2>
                <button className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black hover:bg-[#FF7E00] hover:text-white transition-all">
                  View All Open Positions
                </button>
            </div>
            {/* Abstract Background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none">
                <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,126,0,0.15)_0%,transparent_70%)]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;