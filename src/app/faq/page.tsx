"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiPlus, FiMinus, FiSearch, FiMessageCircle, 
  FiArrowRight, FiZap, FiShield, FiGlobe, FiCode 
} from "react-icons/fi";

const faqs = [
  {
    category: "Services",
    icon: FiZap,
    questions: [
      {
        q: "What digital transformation services do you provide?",
        a: "VVSPL Tech specializes in full-stack custom software development, AI integration, cloud architecture, and UI/UX modernization. We don't just build apps; we architect scalable digital ecosystems."
      },
      {
        q: "Do you offer post-launch support?",
        a: "Absolutely. We provide 24/7 monitoring, security patching, and iterative updates through our Managed Evolution program to ensure your tech remains cutting-edge."
      }
    ]
  },
  {
    category: "Technical",
    icon: FiCode,
    questions: [
      {
        q: "Which technology stack do you specialize in?",
        a: "We are platform-agnostic but excel in high-performance stacks including React/Next.js, Node.js, Python for AI/ML, and AWS/Azure for cloud infrastructure."
      },
      {
        q: "How do you handle data security and compliance?",
        a: "Security is baked into our 'DevSecOps' workflow. We implement end-to-end encryption, SOC2 compliance standards, and regular penetration testing for all enterprise projects."
      }
    ]
  },
  {
    category: "Partnership",
    icon: FiShield,
    questions: [
      {
        q: "What is your typical project timeline?",
        a: "MVP (Minimum Viable Product) development typically spans 8-12 weeks, while full-scale enterprise digital transformations are scoped in phased sprints based on complexity."
      },
      {
        q: "How do you handle intellectual property (IP)?",
        a: "Upon project completion and final payment, 100% of the source code and IP rights are transferred to your organization. We believe in total client ownership."
      }
    ]
  }
];

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-black tracking-tight transition-colors ${isOpen ? 'text-[#FF7E00]' : 'text-slate-900'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-[#FF7E00] text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
          {isOpen ? <FiMinus /> : <FiPlus />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 font-medium leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* --- Header Section --- */}
      <section className="pt-40 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 text-[#FF7E00] font-black mb-6">
              <div className="w-8 h-[2px] bg-[#FF7E00]" />
              <span className="uppercase tracking-[0.3em] text-[10px]">Support Center</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-8">
              Frequently Asked <span className="text-[#FF7E00]">Questions.</span>
            </h1>
            <div className="relative max-w-xl">
              <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
              <input 
                type="text" 
                placeholder="Search for a topic (e.g. security, pricing, tech stack)"
                className="w-full pl-14 pr-6 py-5 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF7E00]/20 transition-all font-medium"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FAQ Content --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sidebar Categories */}
            <div className="lg:col-span-4 space-y-4">
              <div className="sticky top-32">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Categories</h3>
                {faqs.map((cat, i) => (
                  <button 
                    key={i}
                    className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all group border border-transparent hover:border-slate-100"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-slate-600 group-hover:text-[#FF7E00] transition-colors">
                      <cat.icon size={20} />
                    </div>
                    <span className="font-black text-slate-900 uppercase tracking-wider text-sm">{cat.category}</span>
                  </button>
                ))}
                
                {/* Contact Card */}
                <div className="mt-12 p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <FiMessageCircle className="text-[#FF7E00] size-10 mb-4" />
                    <h4 className="text-xl font-black mb-2">Still have questions?</h4>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">Can't find what you're looking for? Our team is ready to help.</p>
                    <button className="flex items-center gap-2 text-[#FF7E00] font-black uppercase text-xs tracking-widest hover:gap-3 transition-all">
                      Contact Support <FiArrowRight />
                    </button>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7E00] opacity-10 blur-[60px] rounded-full translate-x-10 -translate-y-10" />
                </div>
              </div>
            </div>

            {/* Questions Accordion */}
            <div className="lg:col-span-8">
              {faqs.map((category, idx) => (
                <div key={idx} className="mb-16 last:mb-0">
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">{category.category}</h2>
                    <div className="h-[1px] flex-grow bg-slate-100" />
                  </div>
                  <div className="bg-white rounded-3xl border border-slate-100 shadow-sm px-8">
                    {category.questions.map((item, qIdx) => (
                      <FAQItem key={qIdx} question={item.q} answer={item.a} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">
            Ready to start <br /> 
            <span className="text-[#FF7E00]">your transformation?</span>
          </h2>
          <button className="mt-4 px-12 py-5 bg-[#FF7E00] text-white rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-[#FF7E00]/20 flex items-center gap-2 mx-auto group">
            Start a Project <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;