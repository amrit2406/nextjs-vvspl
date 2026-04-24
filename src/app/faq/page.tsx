"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiPlus, FiMinus, FiSearch, FiMessageCircle, 
  FiMail, FiHelpCircle ,FiBookOpen, FiArrowRight
} from "react-icons/fi";
import Link from "next/link";

// --- Sub-Component: Accordion Item ---
const FAQItem = ({ question, answer, isOpen, onClick }: any) => (
  <motion.div 
    layout
    className={`mb-4 rounded-3xl border transition-all duration-300 overflow-hidden ${
      isOpen ? "bg-white border-[#0751BC]/60 shadow-lg shadow-blue-500/10" : "bg-white border-blue-100 hover:border-slate-200"
    }`}
  >
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-6 text-left outline-none group"
    >
      <span className={`text-lg font-bold tracking-tight transition-colors ${isOpen ? "text-[#FF7E00]" : "text-slate-900 group-hover:text-[#FF7E00]"}`}>
        {question}
      </span>
      <div className={`flex-shrink-0 ml-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#0751BC] text-white rotate-180" : "bg-slate-50 text-slate-400 group-hover:bg-slate-100"}`}>
        {isOpen ? <FiMinus size={20} /> : <FiPlus size={20} />}
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="px-8 pb-8 pt-0">
            <p className="text-slate-600 text-md font-medium leading-relaxed max-w-3xl border-t border-slate-100 pt-6">
              {answer}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState("All");

  const categories = ['All', 'Product', 'Process', 'Security'];
  
  const faqs = [
    { 
      category: "Product", 
      question: "How can your technology solutions help grow my business?",
      answer: "Our solutions are designed to improve efficiency, reduce manual effort, and create scalable systems that support long-term business growth." 
    },
    { 
      category: "Process", 
      question: "What is the typical project timeline for enterprise clients?",
      answer: "While every build is unique, our agile infrastructure allows us to move from blueprint to deployment in 45-60 days. We prioritize high-velocity shipping without compromising code integrity." 
    },
    { 
      category: "Security", 
      question: "Do you customize solutions based on specific business needs?", 
      answer: "Yes, every business is different. We build tailored solutions that align with your goals, operations, and future expansion plans." 
    },
    { 
      category: "General", 
      question: "How long does it take to complete a project?", 
      answer: "Project timelines vary depending on complexity and scope, but we ensure a structured approach with clear milestones and timely delivery." 
    },
    { 
      category: "General", 
      question: "Can you help businesses transition from traditional systems to digital platforms?", 
      answer: "Absolutely. We assist in seamless digital transformation, helping businesses move from outdated processes to modern, efficient systems." 
    },
    { 
      category: "General", 
      question: "Is your pricing flexible for different business sizes?", 
      answer: "Yes, we offer scalable solutions and flexible pricing models to suit startups, growing businesses, and larger enterprises." 
    },
    { 
      category: "General", 
      question: "How do I get started with your services?", 
      answer: "Digital marketing uses targeted strategies and data-driven campaigns to reach the right audience, attract potential customers, and convert them into qualified leads." 
    },
    { 
      category: "General", 
      question: "Can you help improve my brand’s online presence?", 
      answer: "Absolutely. We focus on building a strong digital presence through consistent branding, engaging content, and strategic campaign execution." 
    },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900">
      {/* --- Page Hero --- */}
      <section className="pt-40 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {/* <div className="flex justify-center mb-6">
               <span className="px-4 py-2 bg-white rounded-full border border-slate-200 text-xs font-black uppercase tracking-widest text-slate-400">
                 FAQ
               </span>
            </div> */}
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
              Got Questions<span className="text-[#FF7E00]">?</span>
            </h1>
            <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
              Find answers to common inquiries about our tech, process, and how we're reshaping the digital landscape.
            </p>
          </motion.div>

        </div>
      </section>

      {/* --- FAQ Accordion Section --- */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* <div className="mb-12 flex flex-wrap gap-3 justify-center">
            {categories.map((tab) => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full border text-sm font-bold transition-all ${
                  activeTab === tab 
                  ? "bg-slate-900 text-white border-slate-900" 
                  : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div> */}

          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW Help Cards Section --- */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: FiMessageCircle, title: "Live Chat", desc: "Instantly connect with our engineering team.", action: "Start Chat", color: "blue" },
              { icon: FiMail, title: "Email Support", desc: "Preferred for detailed technical inquiries.", action: "Send Email", color: "orange" },
              { icon: FiBookOpen, title: "Documentation", desc: "Explore our API logs and integration guides.", action: "View Docs", color: "slate" },
            ].map((card, i) => (
              <motion.div 
                whileHover={{ y: -8 }}
                key={i} 
                className="group p-1 bg-gradient-to-b from-slate-100 to-transparent rounded-[2.5rem] transition-all hover:shadow-2xl hover:shadow-slate-200/50"
              >
                <div className="bg-white p-10 rounded-[2.4rem] h-full flex flex-col items-start border border-slate-50">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-500 bg-slate-50 text-slate-900 group-hover:bg-[#FF7E00] group-hover:text-white`}>
                    <card.icon size={26} />
                  </div>
                  <h4 className="text-2xl font-bold mb-3 text-slate-900">{card.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8">{card.desc}</p>
                  <button className="mt-auto flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-[#044DB6] group-hover:text-[#FF7E00] transition-colors">
                    {card.action} <FiArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* --- NEW Professional CTA Section --- */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-xl overflow-hidden bg-black">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[50%] h-full bg-[#044DB6]/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[30%] h-full bg-[#FF7E00]/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />
            
            <div className="relative z-10 px-8 py-16 md:p-16 flex flex-col items-center text-center">
              <h2 className="text-5xl font-black text-white tracking-tighter leading-tight max-w-4xl">
                Ready to build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#FF7E00] pr-2">next big thing?</span>
              </h2>
              <p className="text-slate-400 mt-6 text-lg md:text-xl font-medium max-w-xl">
                Our support squad is standing by. Let’s discuss your architecture and scale your vision.
              </p>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Link href="/contact"
                  // whileHover={{ scale: 1.05 }}
                  // whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-[#FF7E00] text-white rounded-2xl font-black text-lg shadow-xl shadow-orange-500/20 hover:bg-[#ff912b] transition-colors"
                >
                  Contact Us
                </Link>
                <Link href="/services" 
                  // whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-lg transition-colors backdrop-blur-md"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;