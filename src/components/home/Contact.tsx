"use client";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock, FiCheck } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Structural Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left Side: Branding & Context */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
              >
                <div className="w-10 h-[1px] bg-[#FF7E00]" />
                <span className="text-[#FF7E00] font-bold uppercase tracking-[0.3em] text-[10px]">
                  Contact us
                </span>
              </motion.div>
              
              <h3 className="text-5xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
                Let's build <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] via-orange-500 to-[#e67300] italic pr-2">future</span> together.
              </h3>
              
              <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                Have a vision? We have the architecture. Reach out for a specialized technical consultation with our lead engineers.
              </p>
            </motion.div>

            {/* Contact Information - Minimalist Aesthetic */}
            <div className="space-y-10">
              <div className="group flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-lg group-hover:bg-[#FF7E00] transition-colors duration-500">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Headquarters</p>
                  <p className="text-slate-900 font-bold text-lg">ODYSSA Business Center</p>
                  <p className="text-slate-500 text-sm">Bhubaneswar, Odisha, India</p>
                </div>
              </div>

              <div className="group flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center shrink-0 border border-slate-100 group-hover:border-orange-200 group-hover:text-[#FF7E00] transition-all duration-500">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Direct Line</p>
                  <p className="text-slate-900 font-bold text-lg">contact@vvspltech.com</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Avg response: 4h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The "Studio" Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white p-8 md:p-14 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] border border-slate-100"
          >
            <form className="space-y-8">
    
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
                <div className="relative">
                  <label className="text-xs font-bold text-slate-500 mb-2 block">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full border border-slate-200 rounded-xl px-5 py-4 
                    focus:border-[#FF7E00] focus:ring-2 focus:ring-orange-100 
                    outline-none text-slate-900 font-medium placeholder:text-slate-400 transition"
                  />
                </div>

                <div className="relative">
                  <label className="text-xs font-bold text-slate-500 mb-2 block">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    placeholder="john@email.com"
                    className="w-full border border-slate-200 rounded-xl px-5 py-4 
                    focus:border-[#FF7E00] focus:ring-2 focus:ring-orange-100 
                    outline-none text-slate-900 font-medium placeholder:text-slate-400 transition"
                  />
                </div>

              </div>

              {/* Phone */}
              <div>
                <label className="text-xs font-bold text-slate-500 mb-2 block">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  placeholder="+91 98765 43210"
                  className="w-full border border-slate-200 rounded-xl px-5 py-4 
                  focus:border-[#FF7E00] focus:ring-2 focus:ring-orange-100 
                  outline-none text-slate-900 font-medium placeholder:text-slate-400 transition"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="text-xs font-bold text-slate-500 mb-2 block">
                  Subject
                </label>
                <input 
                  type="text" 
                  placeholder="How can we help you?"
                  className="w-full border border-slate-200 rounded-xl px-5 py-4 
                  focus:border-[#FF7E00] focus:ring-2 focus:ring-orange-100 
                  outline-none text-slate-900 font-medium placeholder:text-slate-400 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-xs font-bold text-slate-500 mb-2 block">
                  Message
                </label>
                <textarea 
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full border border-slate-200 rounded-xl px-5 py-4 
                  focus:border-[#FF7E00] focus:ring-2 focus:ring-orange-100 
                  outline-none text-slate-900 font-medium resize-none placeholder:text-slate-400 transition"
                />
              </div>

              {/* Submit Button */}
              <button type="button" className="w-full bg-gradient-to-r from-[#FF7E00] to-[#e67300] 
                hover:from-[#e67300] hover:to-[#cc6600] 
                text-white font-bold py-5 rounded-xl 
                transition-all duration-300 
                shadow-lg hover:shadow-xl 
                flex items-center justify-center gap-2 group">
                
                <span>Send Message</span>
                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;