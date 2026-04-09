"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus, FiMessageSquare, FiArrowRight } from "react-icons/fi";

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
    <div className={`group border-b border-slate-100 transition-all duration-500 ${isOpen ? 'py-4' : 'py-0'}`}>
      <button
        onClick={toggle}
        className="w-full py-10 flex items-start justify-between text-left focus:outline-none"
      >
        <div className="flex gap-8">
          <span className={`text-sm font-mono font-bold transition-colors duration-300 ${isOpen ? 'text-blue-600' : 'text-slate-300'}`}>
            0{index + 1}
          </span>
          <span className={`text-xl md:text-2xl font-bold tracking-tight transition-all duration-300 ${isOpen ? 'text-slate-900 scale-105 origin-left' : 'text-slate-500 group-hover:text-slate-900'}`}>
            {faq.question}
          </span>
        </div>
        
        <div className={`mt-1 flex-shrink-0 ml-4 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-[#044DB6] text-white rotate-90' : 'bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600'}`}>
          {isOpen ? <FiMinus /> : <FiPlus />}
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
            <div className="pl-16 pb-12 max-w-2xl">
              <p className="text-slate-500 text-lg leading-relaxed">
                {faq.answer}
              </p>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "40px" }}
                className="mt-6 h-[2px] bg-blue-600"
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
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left Side: Static Content */}
          <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
                Support & Strategy
              </h2>
              <h3 className="text-5xl font-black text-slate-900 leading-tight mb-8">
                Your questions, <br />
                <span className="text-slate-400">answered.</span>
              </h3>
              
              {/* Floating Contact Card */}
              <div className="p-8 bg-slate-900 rounded-[2rem] text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4 text-emerald-400">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Team is Online</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Still need help?</h4>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    Our technical architects are ready to discuss your unique project requirements.
                  </p>
                  <button className="flex items-center justify-center gap-2 w-full py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-[#044DB6] hover:text-white transition-all duration-300">
                    <span>Contact Us</span>
                    <FiArrowRight />
                  </button>
                </div>
                {/* Decorative Background Icon */}
                <FiMessageSquare className="absolute -bottom-4 -right-4 text-white/5 size-32 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
              </div>
            </motion.div>
          </div>

          {/* Right Side: FAQ List */}
          <div className="lg:col-span-8 border-t border-slate-100">
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