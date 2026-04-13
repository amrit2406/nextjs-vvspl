"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus, FiMessageSquare, FiArrowRight, FiZap } from "react-icons/fi";

interface FAQData {
  question: string;
  answer: string;
}

const faqs: FAQData[] = [
  {
    question: "What industries does VVSPL TECH specialize in?",
    answer: "We primarily focus on FinTech, HealthTech, and Enterprise SaaS. Our architectural expertise in AI/ML and Cloud Infrastructure allows us to scale solutions across any data-driven industry."
  },
  {
    question: "How long does a typical software project take?",
    answer: "Project timelines vary based on complexity. A standard MVP typically takes 8-12 weeks, while complex enterprise systems with AI integration may span 6+ months."
  },
  {
    question: "Do you provide post-launch technical support?",
    answer: "Absolutely. We offer various maintenance tiers, including 24/7 monitoring, security patches, and scaling assistance to ensure your platform grows seamlessly."
  },
  {
    question: "Can you integrate AI into legacy systems?",
    answer: "Yes. We build custom API bridges and microservices to inject modern AI capabilities into your existing infrastructure without total downtime."
  }
];

const FAQItem = ({ faq, isOpen, toggle, index }: { faq: FAQData; isOpen: boolean; toggle: () => void; index: number }) => {
  return (
    <div className={`group border-b border-slate-100 transition-all duration-500`}>
      <button
        onClick={toggle}
        className="w-full py-10 flex items-start justify-between text-left focus:outline-none"
      >
        <div className="flex gap-6 md:gap-10">
          <span className={`text-sm font-black transition-colors duration-300 mt-2 ${isOpen ? 'text-[#FF7E00]' : 'text-slate-300'}`}>
            {index < 9 ? `0${index + 1}` : index + 1}
          </span>
          <span className={`text-xl md:text-2xl font-black tracking-tighter transition-all duration-300 ${isOpen ? 'text-[#044DB6]' : 'text-slate-900 group-hover:text-[#FF7E00]'}`}>
            {faq.question}
          </span>
        </div>
        
        <div className={`mt-1 flex-shrink-0 ml-4 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 shadow-sm ${isOpen ? 'bg-[#FF7E00] text-white rotate-180 shadow-orange-200' : 'bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-[#044DB6]'}`}>
          {isOpen ? <FiMinus size={20} strokeWidth={3} /> : <FiPlus size={20} strokeWidth={3} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="pl-6 md:pl-14 pb-8 max-w-3xl">
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                {faq.answer}
              </p>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "60px" }}
                className="mt-8 h-1.5 rounded-full bg-gradient-to-r from-[#FF7E00] to-orange-400"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Blob - Matching Hero */}
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-blue-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Side: Sticky Branding Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-40 h-fit">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
              >
                <div className="w-10 h-[1px] bg-[#FF7E00]" />
                <span className="text-[#FF7E00] font-bold uppercase tracking-[0.3em] text-[10px]">
                  Support & FAQs
                </span>
              </motion.div>

              <h2 className="text-5xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter">
                Your questions, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#044DB6] to-blue-500">
                  Answered.
                </span>
              </h2>
              
              {/* Modern Contact Card - Glassmorphism match with Hero */}
              <div className="p-6 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl shadow-slate-200 relative overflow-hidden group border border-slate-800">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">Team is Online</span>
                  </div>

                  <h4 className="text-2xl font-bold mb-3 tracking-tight">Still need clarity?</h4>
                  <p className="text-slate-400 text-lg mb-8 leading-relaxed font-medium">
                    Our technical architects are ready to discuss your specific infrastructure needs.
                  </p>

                  <button className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-[#FF7E00] to-[#e67300] text-white rounded-2xl font-black hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300">
                    <span>Talk to an Expert</span>
                    <FiArrowRight size={18} />
                  </button>
                </div>

                {/* Decorative Pattern inside card */}
                <FiMessageSquare className="absolute -bottom-6 -right-6 text-white/5 size-40 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
              </div>
            </motion.div>
          </div>

          {/* Right Side: FAQ List */}
          <div className="lg:col-span-7 border-t-2 border-slate-900/5">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                index={index}
                faq={faq}
                isOpen={openIndex === index}
                toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;