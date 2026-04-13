"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  FiArrowRight, FiCheck, FiBookOpen, FiMap, 
  FiBriefcase, FiTruck, FiActivity, FiShield 
} from "react-icons/fi";

// Using your existing DetailedBlock component logic
const DetailedBlock = ({ title, desc, points, image, isReversed, color, icon: Icon }: any) => (
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
      <button className="flex items-center gap-2 font-black text-sm uppercase tracking-widest text-slate-900 group hover:text-[#FF7E00] transition-colors">
        View Industry Case Study <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  </div>
);

const IndustryPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* --- Page Hero --- */}
      <section className="pt-40 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
              Industries<span className="text-[#FF7E00]">.</span>
            </h1>
            <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
              Tailored digital ecosystems designed for the unique challenges of global sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 1: LIFESTYLE & ESSENTIALS --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center mb-10 gap-4 border-b border-slate-100 pb-10">
            <div className="flex items-center justify-center gap-3 text-[#FF7E00] font-black mb-4">
              <div className="w-8 h-[2px] bg-[#FF7E00]" />
              <span className="uppercase tracking-[0.3em] text-[10px]">Pillar 01</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              Education & Tourism
            </h2>
          </div>

          <DetailedBlock 
            icon={FiBookOpen}
            title="Education & EdTech"
            desc="Modernizing the learning experience through LMS platforms, student performance tracking, and virtual classrooms that prioritize engagement."
            points={["LMS Development", "Student Portals", "Exam Systems", "Content Digitization"]}
            image="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop"
            isReversed={false}
            color="from-[#FF7E00] to-orange-400"
          />

          <DetailedBlock 
            icon={FiMap}
            title="Tourism & Travel"
            desc="Transforming travel with seamless booking engines, itinerary management, and immersive digital guides for the modern traveler."
            points={["Booking Engines", "Travel CRM", "Itinerary Planners", "Payment Gateways"]}
            image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
            isReversed={true}
            color="from-[#FF7E00] to-orange-400"
          />
        </div>
      </section>

      {/* --- SECTION 2: INFRASTRUCTURE & SERVICE --- */}
      <section className="py-24 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center mb-10 gap-6 border-b border-slate-200 pb-10">
            <div className="flex items-center justify-center gap-3 text-[#044DB6] font-black mb-4">
              <div className="w-8 h-[2px] bg-[#044DB6]" />
              <span className="uppercase tracking-[0.3em] text-[10px]">Pillar 02</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              Hospitality & Logistics
            </h2>
          </div>

          <DetailedBlock 
            icon={FiBriefcase}
            title="Hospitality Management"
            desc="End-to-end solutions for hotels and resorts, from front-desk automation to personalized guest experience apps."
            points={["Property Management", "Guest Experiences", "Room Automation", "Loyalty Programs"]}
            image="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
            isReversed={false}
            color="from-[#044DB6] to-blue-500"
          />

          <DetailedBlock 
            icon={FiTruck}
            title="Logistics & Supply Chain"
            desc="Optimizing the flow of goods with real-time tracking, fleet management, and automated warehousing systems."
            points={["Fleet Tracking", "Route Optimization", "Warehouse Tech", "Last-mile Delivery"]}
            image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
            isReversed={true}
            color="from-indigo-600 to-[#044DB6]"
          />
        </div>
      </section>

      {/* --- SECTION 3: HEALTH & PUBLIC SECTOR --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center mb-10 gap-4 border-b border-slate-100 pb-10">
            <div className="flex items-center justify-center gap-3 text-[#FF7E00] font-black mb-4">
              <div className="w-8 h-[2px] bg-[#FF7E00]" />
              <span className="uppercase tracking-[0.3em] text-[10px]">Pillar 03</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              Healthcare & Governance
            </h2>
          </div>

          <DetailedBlock 
            icon={FiActivity}
            title="Healthcare Systems"
            desc="HIPAA-compliant software that improves patient outcomes through telemedicine, EHR, and intelligent diagnostic tools."
            points={["Telemedicine Hubs", "EHR/EMR Systems", "Patient Portals", "Health Analytics"]}
            image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
            isReversed={false}
            color="from-[#FF7E00] to-orange-400"
          />

          <DetailedBlock 
            icon={FiShield}
            title="Governance & Public Services"
            desc="Digitizing public infrastructure for transparency, efficiency, and citizen-centric accessibility."
            points={["E-Gov Portals", "Secure Databases", "Public Portals", "Regulatory Tech"]}
            image="https://images.unsplash.com/photo-1521791136366-39853759d256?q=80&w=2070&auto=format&fit=crop"
            isReversed={true}
            color="from-[#FF7E00] to-orange-400"
          />
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FF7E00] rounded-full blur-[120px]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-10">
            Ready to disrupt your <br /> 
            <span className="text-[#FF7E00]">industry landscape?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-12 py-5 bg-[#FF7E00] text-white rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-[#FF7E00]/20">
              Get Industry Insights
            </button>
            <button className="px-12 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-black hover:bg-white/20 transition-all">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryPage;