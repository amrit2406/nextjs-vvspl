"use client";
import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { 
  FiArrowRight, FiCheck, FiLayers, FiCpu, 
  FiCode, FiShield, FiTrendingUp, FiSettings 
} from "react-icons/fi";

// --- 1. DATA OBJECT (Content for each service) ---
const SERVICES_CONTENT: any = {
  "saas-architecture": {
    title: "Enterprise",
    highlight: "SaaS Architecture.",
    desc: "We engineer proprietary digital assets that scale. Our SaaS solutions are built for high concurrency, multi-tenant security, and seamless global deployment.",
    tags: ["Microservices", "Kubernetes", "Next.js", "GraphQL"],
    image: "https://images.unsplash.com/photo-1551288049-bbda48658a71?q=80&w=2070",
    pillar: "Pillar 01 / Software"
  },
  "custom-engineering": {
    title: "Deep-Tech",
    highlight: "Custom Engineering.",
    desc: "Modernizing legacy systems with cloud-native backends. We build the invisible logic that powers global enterprise operations with 99.9% uptime.",
    tags: ["Python", "AWS", "Docker", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070",
    pillar: "Pillar 01 / Software"
  },
  "digital-marketing": {
    title: "Data-Driven",
    highlight: "Growth Marketing.",
    desc: "More than just ads—we build conversion engines. We combine technical SEO with performance marketing to ensure your tech product finds its market.",
    tags: ["Performance", "SEO", "Analytics", "Automation"],
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c26d?q=80&w=2074",
    pillar: "Pillar 02 / Consulting"
  },
  "it-staffing": {
    title: "On-Demand",
    highlight: "Tech Talent.",
    desc: "Skip the 3-month hiring cycle. We provide vetted, project-ready engineers who integrate into your workflow and culture immediately.",
    tags: ["Staff Augmentation", "Vetted Devs", "Agile Teams", "Scaling"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070",
    pillar: "Pillar 02 / Consulting"
  }
};

// --- Sub-Component: Process Step ---
const ProcessStep = ({ number, title, desc }: any) => (
  <div className="relative p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-sm">
      {number}
    </div>
    <h4 className="text-xl font-black text-slate-900 mb-3 mt-2">{title}</h4>
    <p className="text-slate-600 text-sm font-medium leading-relaxed">{desc}</p>
  </div>
);

const ServiceDetailPage = () => {
  const params = useParams();
  const slug = params.slug as string;

  // Find the content based on the URL slug, or default to saas if not found
  const content = SERVICES_CONTENT[slug] || SERVICES_CONTENT["saas-architecture"];

  return (
    <div className="bg-white min-h-screen">
      
      {/* --- 1. TECHNICAL HERO SECTION --- */}
      <section className="pt-48 pb-24 bg-slate-50 relative overflow-hidden">
  <div className="absolute inset-0 z-0 opacity-10">
    <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#FF7E00] rounded-full blur-[120px]" />
  </div>

  <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      className="lg:w-2/3"
    >
      <div className="flex items-center gap-3 text-[#FF7E00] font-black mb-6">
        <div className="w-10 h-[2px] bg-[#FF7E00]" />
        <span className="uppercase tracking-[0.4em] text-[10px]">
          {content.pillar}
        </span>
      </div>

      <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-8">
        {content.title} <br />
        <span className="text-[#FF7E00]">{content.highlight}</span>
      </h1>

      <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
        {content.desc}
      </p>

      <div className="flex flex-wrap gap-4">
        {content.tags.map((tag: string) => (
          <span 
            key={tag} 
            className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-[10px] font-black uppercase tracking-widest shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  </div>
</section>

      {/* --- 2. CORE CAPABILITIES --- */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
               <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-6">
                 Engineered for <br/>Unlimited Scale.
               </h2>
               <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10">
                 Our approach to {content.highlight} is not just about a service; it is about building a scalable ecosystem. We focus on performance, security, and long-term resilience.
               </p>
               <div className="space-y-6">
                  {[
                    { title: "Strategic Planning", desc: "Detailed roadmapping to align technical execution with business goals." },
                    { title: "Dynamic Scaling", desc: "Automated systems that grow as your user base or workload increases." },
                    { title: "Integrated Security", desc: "Security is baked into the foundation, not added as an afterthought." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[#FF7E00] flex-shrink-0">
                        <FiCheck size={12} strokeWidth={4} />
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 uppercase tracking-tight text-sm">{item.title}</h4>
                        <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="relative">
               <div className="absolute -inset-4 bg-[#FF7E00]/5 rounded-[3rem] blur-2xl" />
               <img 
                 src={content.image} 
                 alt={content.highlight} 
                 className="relative rounded-[2.5rem] border border-slate-200 shadow-2xl object-cover aspect-video"
               />
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. THE ENGINEERING PROCESS --- */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Execution Framework</h2>
            <p className="text-slate-500 font-medium mt-4 uppercase tracking-[0.2em] text-xs">From Logic to Launch</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProcessStep number="01" title="Logic Mapping" desc="Audit of business logic and user requirements before any work begins." />
            <ProcessStep number="02" title="Development" desc="Agile sprints focusing on building robust, scalable infrastructure." />
            <ProcessStep number="03" title="Stress Testing" desc="Rigorous testing to ensure peak performance under high load." />
            <ProcessStep number="04" title="Deployment" desc="Zero-downtime strategies with automated CI/CD pipelines." />
          </div>
        </div>
      </section>

      {/* --- 4. FEATURE GRID --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-4">
                    <FiLayers className="text-[#FF7E00]" size={32} />
                    <h4 className="text-2xl font-black text-slate-900">Precision UI/UX</h4>
                    <p className="text-slate-600 font-medium leading-relaxed">Interfaces designed for efficiency and high-speed data interaction.</p>
                </div>
                <div className="space-y-4">
                    <FiShield className="text-[#044DB6]" size={32} />
                    <h4 className="text-2xl font-black text-slate-900">Ironclad Security</h4>
                    <p className="text-slate-600 font-medium leading-relaxed">Built-in RBAC and end-to-end encryption by default on every project.</p>
                </div>
                <div className="space-y-4">
                    <FiCpu className="text-slate-900" size={32} />
                    <h4 className="text-2xl font-black text-slate-900">Modern Stack</h4>
                    <p className="text-slate-600 font-medium leading-relaxed">We use only the most reliable and cutting-edge technologies available.</p>
                </div>
            </div>
        </div>
      </section>

      {/* --- 5. FINAL CASE STUDY CTA --- */}
      <section className="py-24 bg-slate-900 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[3rem] p-12 md:p-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8">
              See this in <span className="text-[#FF7E00]">Action.</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto mb-10">
              Ready to build your competitive edge? Let's discuss how our {content.highlight} can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-12 py-5 bg-[#FF7E00] text-white rounded-2xl font-black hover:scale-105 transition-all">
                  Read Case Study
                </button>
                <button className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black hover:bg-slate-100 transition-all">
                  Contact Us
                </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;