"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiPlus,
  FiMinus,
  FiMessageSquare,
  FiArrowRight,
  FiZap,
} from "react-icons/fi";

interface FAQData {
  question: string;
  answer: string;
}

const faqs: FAQData[] = [
  {
    question: "What industries does VVSPL TECH specialize in?",
    answer:
      "We primarily focus on FinTech, HealthTech, and Enterprise SaaS. Our architectural expertise in AI/ML and Cloud Infrastructure allows us to scale solutions across any data-driven industry.",
  },
  {
    question: "How long does a typical software project take?",
    answer:
      "Project timelines vary based on complexity. A standard MVP typically takes 8-12 weeks, while complex enterprise systems with AI integration may span 6+ months.",
  },
  {
    question: "Do you provide post-launch technical support?",
    answer:
      "Absolutely. We offer various maintenance tiers, including 24/7 monitoring, security patches, and scaling assistance to ensure your platform grows seamlessly.",
  },
  {
    question: "Can you integrate AI into legacy systems?",
    answer:
      "Yes. We build custom API bridges and microservices to inject modern AI capabilities into your existing infrastructure without total downtime.",
  },
];

const FAQItem = ({
  faq,
  isOpen,
  toggle,
  index,
}: {
  faq: FAQData;
  isOpen: boolean;
  toggle: () => void;
  index: number;
}) => {
  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className={`relative rounded-3xl mb-4 border transition-colors duration-500 overflow-hidden ${
        isOpen
          ? "bg-white border-[#FF7E00]/30 shadow-xl shadow-orange-100/50"
          : "bg-slate-50 border-transparent hover:border-slate-200"
      }`}
    >
      {/* Background Glow */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-br from-[#FF7E00]/5 via-transparent to-transparent pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Left Accent Bar */}
      <motion.div
        layout
        className="absolute left-0 top-0 h-full w-1 bg-[#FF7E00]"
        initial={false}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          scaleY: isOpen ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
      />

      <button
        onClick={toggle}
        className="relative w-full px-4 py-4 flex items-center justify-between text-left focus:outline-none z-10"
      >
        <div className="flex items-start gap-5">
          <span
            className={`text-sm font-black mt-1.5 transition-colors duration-300 ${
              isOpen ? "text-[#FF7E00]" : "text-slate-400"
            }`}
          >
            {index < 9 ? `0${index + 1}` : index + 1}
          </span>

          <h4
            className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
              isOpen ? "text-[#044DB6]" : "text-slate-900"
            }`}
          >
            {faq.question}
          </h4>
        </div>

        <motion.div
          animate={{
            rotate: isOpen ? 90 : 0,
            backgroundColor: isOpen ? "#FF7E00" : "transparent",
            color: isOpen ? "#ffffff" : "#94a3b8",
          }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
          className="ml-4 flex-shrink-0 w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center"
        >
          <FiArrowRight size={18} strokeWidth={2.5} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: { 
                height: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
                opacity: { duration: 0.25, delay: 0.1 } 
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: { 
                height: { duration: 0.3 },
                opacity: { duration: 0.2 } 
              }
            }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-[60px] pb-8 relative z-10">
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {faq.answer}
              </p>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 60 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-6 h-1.5 rounded-full bg-gradient-to-r from-[#FF7E00] to-orange-400"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
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
          <div className="lg:col-span-5 lg:sticky h-fit">
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] via-orange-500 to-[#e67300] italic">
                  Answered.
                </span>
              </h2>

              {/* Modern Contact Card - Glassmorphism match with Hero */}
              <div className="p-1 bg-gradient-to-r from-[#044DB6] to-blue-500 rounded-2xl text-white shadow-2xl shadow-slate-200 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src="https://img.freepik.com/free-vector/tiny-business-people-with-giant-faq-letters-gadget-users-searching-instructions-useful-information-flat-vector-illustration-customer-support-solution-concept-banner-landing-web-page_74855-23409.jpg"
                      alt="Team"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Decorative Pattern inside card */}
                <FiMessageSquare className="absolute -bottom-6 -right-6 text-white/5 size-40 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
              </div>
            </motion.div>
          </div>

          {/* Right Side: FAQ List */}
          <div className="lg:col-span-7 ">
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
