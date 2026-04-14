"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // Added for navigation
import { 
  FiArrowRight, FiCheck, FiGrid, 
  FiUsers, FiDatabase, FiTarget 
} from "react-icons/fi";
import TechStackSection from "@/components/layout/TechStack";

// --- Sub-Component: Service Block ---
// Added 'slug' to props to handle navigation
const DetailedBlock = ({ title, desc, points, image, isReversed, color, icon: Icon, slug }: any) => (
  <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 py-18 items-center border-b border-slate-100 last:border-0`}>
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
      {/* <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white mb-6 shadow-lg`}>
        <Icon size={24} />
      </div> */}
      <h4 className="text-3xl font-black mb-5 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#044DB6] to-[#2A6BFF]">{title}</h4>
      <p className="text-slate-600 mb-8 leading-relaxed text-md font-medium">{desc}</p>
      {/* <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
        {points.map((p: string, i: number) => (
          <li key={i} className="flex items-start gap-3 text-slate-700">
            <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[#FF7E00] text-[10px]">
              <FiCheck strokeWidth={3} />
            </span>
            <span className="text-sm font-bold uppercase tracking-tight text-slate-600">{p}</span>
          </li>
        ))}
      </ul> */}
      
      {/* Changed button to Link for dynamic routing */}
      <Link href={`/services/${slug}`} 
        className="group relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-orange-400 to-orange-500 
                   rounded-full overflow-hidden shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
      >
        <span className="relative z-10 flex items-center gap-2">
          Explore Service 
          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
        </span>

        {/* Glow effect */}
        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></span>
      </Link>
    </motion.div>
  </div>
);

const ServicePage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* --- Page Hero --- */}
      <section className="pt-40 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
              Services<span className="text-[#FF7E00]">.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
              We bridge the gap between complex engineering and human-centric design across specialized pillars.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. SECTION: SOFTWARE SOLUTIONS */}
      <section className="py-18">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center mb-10 gap-4 border-b border-slate-100 pb-10">
            <div>
              <div className="flex items-center justify-center gap-3 text-[#FF7E00] font-black mb-2">
                <div className="w-8 h-[2px] bg-[#FF7E00]" />
                <span className="uppercase tracking-[0.3em] text-[10px]">Pillar 01</span>
              </div>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter">
                Software Solutions
              </h2>
            </div>
          </div>

          <DetailedBlock 
            slug="eddva" // Unique slug for navigation
            icon={FiGrid}
            title="Eddva"
            desc="Building proprietary digital assets that scale. We engineer SaaS platforms and ERPs designed for high user concurrency and data integrity."
            points={["SaaS Architecture", "Enterprise ERP", "Inventory Systems", "Financial Tech"]}
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
            isReversed={false}
            color="from-[#FF7E00] to-orange-400"
          />
          <DetailedBlock 
            slug="hrms" // Unique slug for navigation
            icon={FiGrid}
            title="HRMS & Workforce Management"
            desc="Building proprietary digital assets that scale. We engineer SaaS platforms and ERPs designed for high user concurrency and data integrity."
            points={["SaaS Architecture", "Enterprise ERP", "Inventory Systems", "Financial Tech"]}
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
            isReversed={true}
            color="from-[#FF7E00] to-orange-400"
          />
          <DetailedBlock 
            slug="erp" // Unique slug for navigation
            icon={FiGrid}
            title="ERP"
            desc="Building proprietary digital assets that scale. We engineer SaaS platforms and ERPs designed for high user concurrency and data integrity."
            points={["SaaS Architecture", "Enterprise ERP", "Inventory Systems", "Financial Tech"]}
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
            isReversed={false}
            color="from-[#FF7E00] to-orange-400"
          />
          <DetailedBlock 
            slug="crm" // Unique slug for navigation
            icon={FiGrid}
            title="CRM"
            desc="Building proprietary digital assets that scale. We engineer SaaS platforms and ERPs designed for high user concurrency and data integrity."
            points={["SaaS Architecture", "Enterprise ERP", "Inventory Systems", "Financial Tech"]}
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
            isReversed={true}
            color="from-[#FF7E00] to-orange-400"
          />
          <DetailedBlock 
            slug="ui-ux-design" // Unique slug for navigation
            icon={FiGrid}
            title="UI/UX Design"
            desc="Building proprietary digital assets that scale. We engineer SaaS platforms and ERPs designed for high user concurrency and data integrity."
            points={["SaaS Architecture", "Enterprise ERP", "Inventory Systems", "Financial Tech"]}
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
            isReversed={false}
            color="from-[#FF7E00] to-orange-400"
          />

          <DetailedBlock 
            slug="back-office-automation" // Unique slug for navigation
            icon={FiDatabase}
            title="Back Office Automation"
            desc="Deep-tech logic for complex operations. We modernize legacy systems and build cloud-native backends that power global enterprises."
            points={["Microservices", "Cloud Migration", "DevOps Pipelines", "API Ecosystems"]}
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
            isReversed={true}
            color="from-[#FF7E00] to-orange-400"
          />
        </div>
      </section>

      {/* 3. SECTION: CONSULTING & ALLIED */}
      <section className="py-18 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center mb-10 gap-6 border-b border-slate-200 pb-10">
            <div>
              <div className="flex items-center justify-center gap-3 text-[#FF7E00] font-black mb-2">
                <div className="w-8 h-[2px] bg-[#FF7E00]" />
                <span className="uppercase tracking-[0.3em] text-[10px]">Pillar 02</span>
              </div>
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter">
                Consulting & Allied Services
              </h2>
            </div>
          </div>

          <DetailedBlock 
            slug="digital-marketing" // Unique slug for navigation
            icon={FiTarget}
            title="Digital Marketing"
            desc="More than just ads—we build data-driven conversion engines. From technical SEO to high-impact performance marketing, we drive measurable ROI."
            points={["Performance Marketing", "Technical SEO", "Conversion Optimization", "Brand Scaling"]}
            image="https://images.unsplash.com/photo-1432888622747-4eb9a8f2c26d?q=80&w=2074&auto=format&fit=crop"
            isReversed={false}
            color="from-[#044DB6] to-blue-500"
          />

          <DetailedBlock 
            slug="it-staffing" // Unique slug for navigation
            icon={FiUsers}
            title="It Staffing & Bodyshopping"
            desc="Eliminate the friction of hiring. We provide project-ready, vetted technical talent that integrates into your culture as easily as your tech stack."
            points={["Managed Bodyshopping", "Tech Talent Vetting", "Dedicated Sprints", "On-demand Devs"]}
            image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            isReversed={true}
            color="from-indigo-600 to-[#044DB6]"
          />
        </div>
      </section>

      <TechStackSection />

      {/* 4. FINAL CTA */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-10">
            Let's build your <br /> 
            <span className="text-[#FF7E00]">competitive edge.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-12 py-5 bg-black text-white rounded-2xl font-black hover:bg-[#FF7E00] transition-all shadow-xl hover:shadow-[#FF7E00]/20">
              Consult an Expert
            </button>
            <button className="px-12 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl font-black hover:bg-slate-50 transition-all">
              See Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;