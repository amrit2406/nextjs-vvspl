"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiArrowRight, FiCheck, FiMail, FiMapPin, FiPhone, 
  FiClock, FiSend, FiMessageCircle, FiGlobe, FiUsers,
  FiAward, FiHeart, FiSmile, FiTrendingUp
} from "react-icons/fi";

// Using your existing DetailedBlock component logic (adapted for contact sections)
const ContactDetailBlock = ({ title, desc, points, image, isReversed, color, icon: Icon }: any) => (
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
        Start Conversation <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  </div>
);

// Contact form component
const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-black uppercase tracking-wider text-slate-700 mb-2">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formState.name}
            onChange={handleChange}
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-[#FF7E00] focus:ring-2 focus:ring-[#FF7E00]/20 transition-all text-slate-900 font-medium"
            placeholder="John Carter"
          />
        </div>
        <div>
          <label className="block text-sm font-black uppercase tracking-wider text-slate-700 mb-2">Email Address *</label>
          <input
            type="email"
            name="email"
            required
            value={formState.email}
            onChange={handleChange}
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-[#FF7E00] focus:ring-2 focus:ring-[#FF7E00]/20 transition-all text-slate-900 font-medium"
            placeholder="john@company.com"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-black uppercase tracking-wider text-slate-700 mb-2">Company / Organization</label>
        <input
          type="text"
          name="company"
          value={formState.company}
          onChange={handleChange}
          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-[#FF7E00] focus:ring-2 focus:ring-[#FF7E00]/20 transition-all text-slate-900 font-medium"
          placeholder="Your Company Name"
        />
      </div>
      <div>
        <label className="block text-sm font-black uppercase tracking-wider text-slate-700 mb-2">How can we help? *</label>
        <textarea
          name="message"
          required
          rows={5}
          value={formState.message}
          onChange={handleChange}
          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-[#FF7E00] focus:ring-2 focus:ring-[#FF7E00]/20 transition-all text-slate-900 font-medium resize-none"
          placeholder="Tell us about your project, goals, or how we can support your digital transformation..."
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full py-5 bg-gradient-to-r from-[#FF7E00] to-orange-500 text-white rounded-2xl font-black text-lg uppercase tracking-wider shadow-xl shadow-[#FF7E00]/20 hover:shadow-2xl transition-all flex items-center justify-center gap-3 group"
      >
        {isSubmitted ? (
          <>Message Sent! <FiCheck className="text-xl" /></>
        ) : (
          <>Send Message <FiSend className="group-hover:translate-x-1 transition-transform" /></>
        )}
      </motion.button>
    </form>
  );
};

// Contact info card component
const ContactInfoCard = ({ icon: Icon, title, content, link, color }: any) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg hover:shadow-xl transition-all"
  >
    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white mb-6 shadow-lg`}>
      <Icon size={28} />
    </div>
    <h4 className="text-xl font-black text-slate-900 mb-3">{title}</h4>
    {link ? (
      <a href={link} className="text-slate-600 font-medium hover:text-[#FF7E00] transition-colors block">
        {content}
      </a>
    ) : (
      <p className="text-slate-600 font-medium leading-relaxed">{content}</p>
    )}
  </motion.div>
);

// Stats counter component
const StatCard = ({ value, label, color }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center"
  >
    <div className={`text-4xl md:text-5xl font-black ${color} mb-2`}>{value}</div>
    <div className="text-slate-500 font-bold uppercase tracking-wider text-sm">{label}</div>
  </motion.div>
);

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* --- Page Hero --- */}
      <section className="pt-40 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
              Let's Connect<span className="text-[#FF7E00]">.</span>
            </h1>
            <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
              Ready to transform your digital ecosystem? Reach out and let's build something extraordinary together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 1: CONTACT FORM & INFO --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left side - Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="sticky top-32">
                <div className="flex items-center gap-3 text-[#FF7E00] font-black mb-6">
                  <div className="w-8 h-[2px] bg-[#FF7E00]" />
                  <span className="uppercase tracking-[0.3em] text-[10px]">Get In Touch</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter mb-4">
                  Start your <span className="text-[#FF7E00]">digital journey</span> today
                </h2>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  Fill out the form and our team will reach out within 24 hours. We're excited to hear about your vision.
                </p>
                <ContactForm />
              </div>
            </motion.div>

            {/* Right side - Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="flex items-center gap-3 text-[#044DB6] font-black mb-6">
                <div className="w-8 h-[2px] bg-[#044DB6]" />
                <span className="uppercase tracking-[0.3em] text-[10px]">Reach Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter mb-8">
                Global presence,<br />local expertise
              </h2>
              
              <div className="space-y-6">
                <ContactInfoCard 
                  icon={FiMapPin}
                  title="Our Headquarters"
                  content="123 Innovation Boulevard, Silicon Valley, CA 94025, United States"
                  color="from-[#FF7E00] to-orange-400"
                />
                <ContactInfoCard 
                  icon={FiPhone}
                  title="Phone & Support"
                  content="+1 (555) 123-4567"
                  link="tel:+15551234567"
                  color="from-[#044DB6] to-blue-500"
                />
                <ContactInfoCard 
                  icon={FiMail}
                  title="Email Us"
                  content="hello@digitalecosystem.com"
                  link="mailto:hello@digitalecosystem.com"
                  color="from-indigo-600 to-[#044DB6]"
                />
                <ContactInfoCard 
                  icon={FiClock}
                  title="Business Hours"
                  content="Monday - Friday: 9:00 AM - 6:00 PM PST"
                  color="from-[#FF7E00] to-orange-400"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* --- FINAL CTA --- */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FF7E00] rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#044DB6] rounded-full blur-[120px]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[#FF7E00]/20 flex items-center justify-center">
                <FiMessageCircle className="text-[#FF7E00] text-3xl" />
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
              Ready to build the <br /> 
              <span className="text-[#FF7E00]">digital future?</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              Join 150+ businesses that trusted us to transform their digital ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-12 py-5 bg-[#FF7E00] text-white rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-[#FF7E00]/20 flex items-center gap-2 group">
                Start a Project <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-12 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-black hover:bg-white/20 transition-all">
                +1 (555) 123-4567
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;