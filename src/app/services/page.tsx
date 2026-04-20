"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import TechStackSection from "@/components/layout/TechStack";

// --- Types ---
interface ServiceItem {
  slug: string;
  title: string;
  desc: string;
  image: string;
  color: string;
}

// --- Data Objects for easy management ---
const SOFTWARE_SOLUTIONS: ServiceItem[] = [
  {
    slug: "eddva",
    title: "Edu tech",
    desc: "Building proprietary digital assets that scale. We engineer SaaS platforms and ERPs designed for high concurrency.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    color: "from-[#FF7E00] to-orange-400",
  },
  {
    slug: "hrms",
    title: "HRMS & Workforce",
    desc: "Streamlined workforce management solutions for modern enterprises to handle scaling human capital.",
    image:
      "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=2070&auto=format&fit=crop",
    color: "from-[#FF7E00] to-orange-400",
  },
  {
    slug: "erp",
    title: "ERP Systems",
    desc: "Integrated resource planning that unifies your back-office and frontline operations.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    color: "from-[#FF7E00] to-orange-400",
  },
  {
    slug: "crm",
    title: "CRM",
    desc: "Deep customer relationship management logic to drive sales and retention through data.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    color: "from-[#FF7E00] to-orange-400",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    desc: "Human-centric design systems that bridge the gap between complex engineering and usability.",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop",
    color: "from-[#FF7E00] to-orange-400",
  },
  {
    slug: "back-office-automation",
    title: "Back Office Automation",
    desc: "Modernizing legacy systems with cloud-native backends and deep-tech logic.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    color: "from-[#FF7E00] to-orange-400",
  },
];

const CONSULTING_SERVICES: ServiceItem[] = [
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    desc: "Data-driven conversion engines ranging from technical SEO to high-impact performance marketing.",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c26d?q=80&w=2074&auto=format&fit=crop",
    color: "from-[#044DB6] to-blue-500",
  },
  {
    slug: "it-staffing",
    title: "IT Staffing",
    desc: "Project-ready, vetted technical talent that integrates seamlessly into your company culture.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    color: "from-indigo-600 to-[#044DB6]",
  },
];

const TABS = [
  {
    key: "software",
    label: "Software Solutions",
    count: SOFTWARE_SOLUTIONS.length,
    pillar: "Pillar 01",
    data: SOFTWARE_SOLUTIONS,
  },
  {
    key: "consulting",
    label: "Consulting & Allied",
    count: CONSULTING_SERVICES.length,
    pillar: "Pillar 02",
    data: CONSULTING_SERVICES,
  },
] as const;

type TabKey = (typeof TABS)[number]["key"];

// --- Sub-Component: Grid Card ---
const ServiceCard = ({ title, desc, slug, image, color }: ServiceItem) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative flex flex-col h-full justify-between bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
  >
    {/* Image Container - Simplified and cleaner */}
    <div className="relative h-44 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
    </div>

    {/* Content Section */}
    <div className="p-4 flex flex-col flex-grow">
      {/* Accent Line */}
      <div className={`w-12 h-1.5 rounded-full mb-2 bg-gradient-to-r ${color}`} />
      
      <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-[#FF7E00] transition-colors duration-300">
        {title}
      </h4>
      
      <p className="text-slate-700 text-md leading-relaxed  mb-6 flex-grow">
        {desc}
      </p>

      {/* Moved CTA Button - Integrated at the bottom */}
      <Link
        href={`/services/${slug}`}
        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900 group/btn"
      >
        <span className="relative">
          Explore Service
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF7E00] transition-all duration-300 group-hover/btn:w-full" />
        </span>
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 group-hover/btn:bg-[#FF7E00] group-hover/btn:text-white transition-all duration-300">
          <FiArrowRight className="transition-transform group-hover/btn:translate-x-0.5" />
        </div>
      </Link>
    </div>
  </motion.div>
);

const ServicePage = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("software");
  const current = TABS.find((t) => t.key === activeTab)!;
  return (
    <div className="bg-white min-h-screen">
      {/* --- Page Hero --- */}
      <section className="pt-40 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
              Services<span className="text-[#FF7E00]">.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
              We bridge the gap between complex engineering and human-centric
              design across specialized pillars.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabbed Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Tab Bar */}
          <div className="flex justify-center mb-16">
            <div className="flex items-center gap-1 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl p-2 shadow-xl shadow-slate-200/50">
              {TABS.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative px-8 py-3 rounded-2xl text-sm font-semibold transition-all duration-500 flex items-center gap-2 group overflow-hidden ${
                    activeTab === tab.key
                      ? "text-white shadow-lg"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {/* Background with Orange Gradient */}
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      activeTab === tab.key
                        ? "bg-gradient-to-r from-orange-500 to-[#FF7E00] scale-100 opacity-100"
                        : "bg-transparent scale-95 opacity-0 group-hover:bg-slate-100 group-hover:scale-100 group-hover:opacity-100"
                    }`}
                  />

                  {/* Content */}
                  <span className="relative z-10 flex items-center gap-2">
                    {tab.label}

                    {/* Badge / Indicator */}
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full transition-all duration-300 ${
                        activeTab === tab.key
                          ? "bg-white/30 text-white backdrop-blur-sm"
                          : "bg-slate-200 text-slate-500 group-hover:bg-slate-300"
                      }`}
                    >
                      {/* You can put a number or label here if needed */}
                    </span>
                  </span>

                  {/* Subtle shine effect on active tab */}
                  {activeTab === tab.key && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-[shimmer_2s_infinite]" />
                  )}
                </button>
              ))}
            </div>
          </div>


          {/* Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {current.data.map((service) => (
                <ServiceCard key={service.slug} {...service} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <TechStackSection />

      {/* --- Final CTA --- */}
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
