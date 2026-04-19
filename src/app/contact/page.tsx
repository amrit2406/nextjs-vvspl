"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  FiArrowRight, FiMail, FiMapPin, FiPhone, 
  FiSend, FiArrowUpRight, FiClock, FiGlobe
} from "react-icons/fi";

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-orange-100">
      
      {/* --- HERO SECTION (Preserved) --- */}
      <section className="pt-32 pb-16 bg-slate-50 border-b border-slate-100">
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

      {/* --- SECTION 1: CONVERSATION HUB --- */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* LEFT: Branding & Links */}
            <div className="lg:col-span-4 space-y-10">
              <div>
                <div className="w-12 h-1 bg-[#FF7E00] mb-6 rounded-full" />
                <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-6">
                  Direct lines to our <span className="text-[#FF7E00]">experts.</span>
                </h2>
                <p className="text-slate-500 font-medium leading-relaxed mb-8">
                  No gatekeepers. Just direct access to the strategy and engineering talent you need.
                </p>
              </div>

              <div className="space-y-6">
                <ContactLink icon={<FiMail />} label="Email Us" value="hello@ecosystem.com" href="mailto:hello@ecosystem.com" />
                <ContactLink icon={<FiPhone />} label="Call Us" value="+1 (555) 012-3456" href="tel:+15550123456" />
                <ContactLink icon={<FiGlobe />} label="Support" value="help.ecosystem.com" href="#" />
              </div>
            </div>

            {/* RIGHT: Minimalist Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 bg-white border border-slate-100 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] rounded-[3rem] p-8 md:p-14"
            >
              <form className="space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <FloatingInput label="Full Name" placeholder="John Doe" type="text" />
                  <FloatingInput label="Email Address" placeholder="john@company.com" type="email" />
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                  <FloatingInput label="Company" placeholder="Your Org" type="text" />
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Project Budget</label>
                    <select className="bg-transparent border-b border-slate-200 py-3 focus:border-[#FF7E00] outline-none text-slate-900 font-bold transition-all appearance-none cursor-pointer">
                      <option>$10k - $50k</option>
                      <option>$50k - $150k</option>
                      <option>$150k+</option>
                    </select>
                  </div>
                </div>
                <FloatingInput label="Message" placeholder="What are we building?" isTextArea />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-4">
                  <div className="flex items-center gap-2 text-slate-400">
                    <FiClock className="text-[#FF7E00]" />
                    <span className="text-[11px] font-bold uppercase tracking-widest">Typical response: 4 hours</span>
                  </div>
                  <button className="w-full sm:w-auto px-12 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#FF7E00] transition-all shadow-lg shadow-slate-200 flex items-center justify-center gap-3">
                    Send Inquiry <FiSend />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: GLOBAL FOOTPRINT (The Map Section) --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#FF7E00] text-[10px] font-black uppercase tracking-[0.3em]">Visit Our Workspace</span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter mt-4">Global presence, local focus.</h2>
          </div>

          <div className="relative h-[500px] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white group">
            {/* The Map */}
            <iframe 
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639290622367!2d-122.0837468!3d37.4219999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbba130d71f6d%3A0x63390c502b48e65!2sGoogleplex!5e0!3m2!1sen!2sus!4v1634567890123"
              className="w-full h-full grayscale contrast-[1.1] opacity-90 group-hover:grayscale-0 transition-all duration-1000"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            />

            {/* Overlapping Glass Card */}
            <div className="absolute top-10 left-10 max-w-sm hidden md:block">
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/50 shadow-2xl"
              >
                <div className="w-12 h-12 bg-[#FF7E00] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-orange-500/30">
                  <FiMapPin size={24} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Silicon Valley HQ</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  123 Innovation Boulevard,<br />
                  Suite 400, CA 94025
                </p>
                <div className="pt-6 border-t border-slate-200/50 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-400">Local Time</p>
                    <p className="text-sm font-bold text-slate-900">09:42 AM PST</p>
                  </div>
                  <a href="#" className="text-[#FF7E00] font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                    Directions <FiArrowRight />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-slate-900 rounded-[4rem] p-16 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,126,0,0.1),transparent)]" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">
                Ready to build the <br /> <span className="text-[#FF7E00]">future of digital?</span>
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="px-12 py-5 bg-[#FF7E00] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-xl shadow-orange-500/20">
                  Start Your Project
                </button>
                <button className="px-12 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all flex items-center gap-3">
                  Our Method <FiArrowUpRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- SUB COMPONENTS ---

const ContactLink = ({ icon, label, value, href }: any) => (
  <a href={href} className="flex items-center gap-6 group">
    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#FF7E00] group-hover:bg-orange-50 group-hover:border-orange-100 transition-all duration-300">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1 transition-colors group-hover:text-[#FF7E00]">
        {label}
      </p>
      <p className="text-sm font-bold text-slate-900">{value}</p>
    </div>
  </a>
);

const FloatingInput = ({ label, placeholder, type, isTextArea }: any) => (
  <div className="flex flex-col gap-3 group">
    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-[#FF7E00] transition-colors">
      {label}
    </label>
    {isTextArea ? (
      <textarea 
        placeholder={placeholder}
        rows={2}
        className="bg-transparent border-b-2 border-slate-100 py-2 focus:border-[#FF7E00] outline-none text-slate-900 font-bold placeholder:text-slate-200 transition-all resize-none"
      />
    ) : (
      <input 
        type={type}
        placeholder={placeholder}
        className="bg-transparent border-b-2 border-slate-100 py-2 focus:border-[#FF7E00] outline-none text-slate-900 font-bold placeholder:text-slate-200 transition-all"
      />
    )}
  </div>
);

export default ContactPage;