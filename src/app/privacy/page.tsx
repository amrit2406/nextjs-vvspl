"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiShield, FiLock, FiEye, FiFileText, FiGlobe } from "react-icons/fi";

// --- Sub-Component: Policy Section ---
const PolicySection = ({ title, icon: Icon, children }: any) => (
  <div className="py-12 border-b border-slate-100 last:border-0">
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
      <div className="lg:w-1/3">
        <div className="flex items-center gap-3 text-[#FF7E00] font-black mb-4">
          <div className="w-8 h-[2px] bg-[#FF7E00]" />
          <Icon size={18} />
        </div>
        <h3 className="text-2xl font-black text-slate-900 tracking-tight">
          {title}
        </h3>
      </div>
      <div className="lg:w-2/3 prose prose-slate max-w-none">
        <div className="text-slate-600 font-medium leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </div>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* --- 1. HERO BANNER --- */}
      <section className="pt-48 pb-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FF7E00] rounded-full blur-[120px]" />
        </div>
      
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
              Privacy Policy<span className="text-[#FF7E00]">.</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              Last Updated: April 2026. We believe in radical transparency—both in our code and in how we handle your data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 2. MAIN CONTENT AREA --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-2xl shadow-slate-200/50">
            
            <PolicySection title="Data Collection" icon={FiEye}>
              <p>
                We collect information that you provide directly to us when you request a consultation, apply for a career, or engage with our software products. This includes your name, email address, company details, and any project-specific information.
              </p>
              <p>
                We also automatically collect technical data such as IP addresses, browser types, and usage patterns via cookies to optimize our "Next-Gen" digital experiences.
              </p>
            </PolicySection>

            <PolicySection title="How We Use Data" icon={FiGlobe}>
              <p>Your data is used to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Deliver tailored Software Solutions and Industry insights.</li>
                <li>Process career applications and vetting for Staffing services.</li>
                <li>Communicate technical updates and project milestones.</li>
                <li>Ensure the security and integrity of our proprietary ERP and SaaS platforms.</li>
              </ul>
            </PolicySection>

            <PolicySection title="Data Security" icon={FiLock}>
              <p>
                Security is at the core of our engineering philosophy. We implement enterprise-grade encryption and cloud-native security protocols to protect your data from unauthorized access, alteration, or disclosure.
              </p>
              <p>
                Access to sensitive information is strictly restricted to authorized personnel who require the data to perform specific project tasks.
              </p>
            </PolicySection>

            <PolicySection title="Your Rights" icon={FiShield}>
              <p>
                Regardless of your location, we respect your right to privacy. You have the right to request access to the data we hold, ask for corrections, or request the total deletion of your information from our active ecosystems.
              </p>
              <p>
                For any data-related inquiries, you can reach our compliance team directly at <span className="text-slate-900 font-black">privacy@yourbrand.com</span>.
              </p>
            </PolicySection>

            <PolicySection title="Policy Updates" icon={FiFileText}>
              <p>
                As we continue to evolve our technology pillars, this policy may be updated. We will notify you of any significant changes by posting the new policy on this page and updating the "Last Updated" timestamp.
              </p>
            </PolicySection>

          </div>
        </div>
      </section>

      {/* --- 3. FINAL TRUST CTA --- */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-[2.5rem] p-10 text-center border border-slate-100">
          <h4 className="text-2xl font-black text-slate-900 mb-4">Questions about our protocols?</h4>
          <p className="text-slate-600 font-medium mb-8">
            If you need a more detailed technical breakdown of our data handling for enterprise compliance, let’s talk.
          </p>
          <button className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black hover:bg-[#FF7E00] transition-all shadow-lg">
            Contact Compliance Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;