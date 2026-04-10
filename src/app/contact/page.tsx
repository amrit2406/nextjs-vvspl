"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

// --- Types & Interfaces ---
interface ContactMethodProps {
  icon: React.ReactNode;
  title: string;
  detail: string;
  subDetail: string;
}

const ContactPage = () => {
  return (
    <main className="bg-white">
      {/* 1. Hero Banner / Breadcrumb Section */}
      <section className="relative bg-slate-900 py-20 lg:py-32 overflow-hidden">
        {/* Subtle Background Pattern - Matching your Hero's Grid */}
        <div 
          className="absolute inset-0 opacity-10 [mask-image:linear-gradient(to_bottom,white,transparent)]" 
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0\' 0\' 60\' 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} 
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center items-center space-x-2 text-blue-400 mb-6 font-medium"
          >
            <span className="hover:text-blue-300 cursor-pointer transition-colors">Home</span>
            <span className="text-slate-600">/</span>
            <span className="text-white">Contact Us</span>
          </motion.nav>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter"
          >
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Touch.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto font-medium"
          >
            Engineering the next generation of AI solutions. Let's discuss how we can scale your infrastructure.
          </motion.p>
        </div>
      </section>

      {/* 2. Contact Form & Info Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Contact Information</h3>
              <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                Our team is ready to provide expert technical consultation for your next project.
              </p>
            </div>

            <div className="space-y-6">
              <ContactMethodIcon 
                icon={<FiPhone />} 
                title="Call Us" 
                detail="+1 (555) 123-4567" 
                subDetail="Mon-Fri, 9am - 6pm EST"
              />
              <ContactMethodIcon 
                icon={<FiMail />} 
                title="Email Support" 
                detail="solutions@vvspltech.com" 
                subDetail="Response within 24 hours"
              />
              <ContactMethodIcon 
                icon={<FiMapPin />} 
                title="Headquarters" 
                detail="101 Innovation Way" 
                subDetail="Tech District, NY 10001"
              />
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Steve Wozniak" 
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Work Email</label>
                <input 
                  type="email" 
                  placeholder="steve@company.com" 
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all" 
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="AI Architecture Consultation" 
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all" 
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">How can we help?</label>
                <textarea 
                  rows={5} 
                  placeholder="Describe your technical requirements..." 
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-2">
                <button className="flex items-center justify-center space-x-3 px-12 py-5 rounded-2xl font-bold text-white bg-gradient-to-r from-blue-600 to-[#044DB6] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-blue-500/20 group">
                  <span>Send Message</span>
                  <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 3. Map Section */}
      <section className="w-full h-[450px] bg-slate-100 relative overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-1000">
        <iframe 
          title="VVSPL Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093647!2d144.9537353153166!3d-37.81627977975124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d15f4b28808!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1614295325859!5m2!1sen!2sus" 
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy" 
        ></iframe>
      </section>
    </main>
  );
};

// --- Helper Component with TypeScript Props ---
const ContactMethodIcon = ({ icon, title, detail, subDetail }: ContactMethodProps) => (
  <div className="flex items-start space-x-5 group">
    <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-bold text-slate-900">{title}</h4>
      <p className="text-slate-600 font-semibold">{detail}</p>
      <p className="text-sm text-slate-400 mt-0.5">{subDetail}</p>
    </div>
  </div>
);

export default ContactPage;