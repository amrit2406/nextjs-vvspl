"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiMail,
  FiMapPin,
  FiGlobe,
  FiPhone,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";
import { FaLinkedinIn, FaWhatsapp, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-24 bg-[#FCFCFD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* --- Left Column: Narrative --- */}
          <div className="flex flex-col h-full justify-between py-2">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-10 h-[1px] bg-[#FF7E00]" />
                <span className="text-[#FF7E00] font-bold uppercase tracking-[0.3em] text-[10px]">
                  Contact Us
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.1] mb-4">
                Let's build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] via-orange-500 to-[#e67300] italic">
                  future
                </span>{" "}
                together.
              </h2>

              <p className="text-lg text-slate-800 max-w-md leading-relaxed mb-4">
                Whether you have a fully-baked brief or just the spark of an
                idea, our engineering team is ready to help you architect the
                next step.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 pt-6">
              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="flex items-start gap-4 group"
              >
                <FiPhone
                  className="text-[#054EB7] mt-1 group-hover:text-[#FF7E00] transition"
                  size={20}
                />
                <h4 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-[#FF7E00] transition">
                  +91 78946 89818
                </h4>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@vvspltech.com"
                className="flex items-start gap-4 group"
              >
                <FiMail
                  className="text-[#054EB7] mt-1 group-hover:text-[#FF7E00] transition"
                  size={20}
                />
                <h4 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-[#FF7E00] transition">
                  info@vvspltech.com
                </h4>
              </a>

              {/* Address */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=ODYSSA+Business+Center+Bhubaneswar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <FiMapPin
                  className="text-[#054EB7] mt-1 group-hover:text-[#FF7E00] transition"
                  size={20}
                />
                <h4 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-[#FF7E00] transition leading-snug">
                  Block-309/310, ODYSSA Business Center, <br />
                  Rasulgarh, Bhubaneswar, 751010
                </h4>
              </a>

              {/* Social Links */}
              <div className="sm:col-span-2">
                <h4 className="text-sm text-slate-900 uppercase tracking-tight mb-3">
                  Social Links
                </h4>

                <div className="flex items-center gap-4">
                  {[
                    {
                      icon: <FaLinkedinIn />,
                      link: "https://www.linkedin.com/company/112707331/admin/dashboard/",
                      color: "hover:bg-[#0077B5] hover:text-white", // LinkedIn
                    },
                    {
                      icon: <FaWhatsapp />,
                      link: "https://wa.me/917894689818",
                      color: "hover:bg-[#25D366] hover:text-white", // WhatsApp
                    },
                    {
                      icon: <FiInstagram />,
                      link: "https://www.instagram.com/vvspltech?igsh=cjcyczloZWNuaGZx",
                      color: "hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:text-white", // Instagram
                    },
                    {
                      icon: <FaFacebook />,
                      link: "https://www.facebook.com/share/1D4x5YWeff/",
                      color: "hover:bg-[#1877F2] hover:text-white", // Facebook
                    },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      className={`w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 
      transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${social.color}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Column: The Modern Form --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-12 rounded-3xl border border-orange-500 shadow-[0_20px_50px_rgba(0,0,0,0.02)]"
          >
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="group relative">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 transition-colors group-focus-within:text-orange-500">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-orange-500 transition-all text-slate-900 font-medium"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="group relative">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 transition-colors group-focus-within:text-orange-500">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-orange-500 transition-all text-slate-900 font-medium"
                    placeholder="Enter you mail"
                  />
                </div>
              </div>

              <div className="group relative">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 transition-colors group-focus-within:text-orange-500">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-orange-500 transition-all text-slate-900 font-medium"
                  placeholder="Enter you mobile number"
                />
              </div>

              <div className="group relative">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 transition-colors group-focus-within:text-orange-500">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-orange-500 transition-all text-slate-900 font-medium resize-none"
                  placeholder="Tell us about your project"
                />
              </div>

              <button className="relative group w-full py-5 bg-gradient-to-r from-[#044DB6] to-blue-500 overflow-hidden rounded-xl">
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#FF7E00] via-orange-500 to-[#e67300] transition-all duration-[400ms] ease-out group-hover:w-full" />
                <span className="relative flex items-center justify-center gap-2 text-white font-bold text-sm tracking-widest uppercase transition-colors group-hover:text-white">
                  Submit Inquiry{" "}
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
