"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiArrowUpRight,
  FiClock,
  FiGlobe,
} from "react-icons/fi";
import {
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiMessageCircle,
} from "react-icons/fi";
import Link from "next/link";

const SocialTile = ({ icon, label, href, color }: any) => (
  <a
    href={href}
    className={`flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-transparent transition-all duration-300 hover:bg-white hover:border-slate-100 hover:shadow-md group ${color}`}
  >
    <span className="text-xl text-slate-400 group-hover:text-inherit transition-colors">
      {icon}
    </span>
    <span className="text-xs font-black uppercase tracking-wider text-slate-900">
      {label}
    </span>
  </a>
);

const QuickContactCard = ({
  icon,
  title,
  detail,
  subtext,
  href,
  color,
}: any) => (
  <motion.a
    href={href}
    whileHover={{ y: -10 }}
    className="relative overflow-hidden group bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.07)] transition-all duration-500"
  >
    {/* Animated Background Blob */}
    <div
      className={`absolute -right-10 -top-10 w-32 h-32 ${color} opacity-[0.03] rounded-full group-hover:scale-[3] transition-transform duration-700`}
    />

    <div className="relative z-10">
      <div
        className={`w-16 h-16 rounded-2xl ${color} text-white flex items-center justify-center mb-8 shadow-lg shadow-inherit`}
      >
        {icon}
      </div>
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 mb-2">
        {title}
      </p>
      <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-[#FF7E00] transition-colors">
        {detail}
      </h3>
      <p className="text-sm text-slate-500 font-medium italic">{subtext}</p>
    </div>

    <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
      <FiArrowRight className="text-[#FF7E00] text-xl" />
    </div>
  </motion.a>
);

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-orange-100">
      {/* --- HERO SECTION (Preserved) --- */}
      <section className="pt-32 pb-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
              Get In Touch<span className="text-[#FF7E00]">.</span>
            </h1>
            <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
              Whether it's a project, a partnership, or just a conversation —
              we'd love to hear from you. We respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- NEW SECTION: QUICK CONNECT GRID --- */}
      <section className="pt-20 -mb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <QuickContactCard
              icon={<FiMail className="text-3xl" />}
              title="Email Us"
              detail="info@vvspltech.com"
              subtext="For general inquiries and press"
              href="mailto:info@vvspltech.com"
              color="bg-blue-500"
            />
            <QuickContactCard
              icon={<FiPhone className="text-3xl" />}
              title="Call Us"
              detail="+91 7894689818"
              subtext="Mon-Sat, 9:30am - 6: 45pm IST"
              href="tel:+917894689818"
              color="bg-[#FF7E00]"
            />
            <QuickContactCard
              icon={<FiMapPin className="text-3xl" />}
              title="Location"
              detail="Block-309/310, ODYSSA Business Center, Rasulgarh, Bhubaneswar, 751010"
              subtext="Odisha"
              href="https://www.google.com/maps?q=Block-309/310,+ODYSSA+Business+Center,+Rasulgarh,+Bhubaneswar,+751010&output=embed"
              color="bg-slate-900"
            />
          </div>
        </div>
      </section>

      {/* --- SECTION 1: CONVERSATION HUB --- */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -z-10 skew-x-12 translate-x-20" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            {/* LEFT: Branding & Social Connectivity */}
            <div className="lg:col-span-6 lg:sticky lg:top-32 space-y-12">
              <div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "3rem" }}
                  className="h-1.5 bg-[#FF7E00] mb-8 rounded-full"
                />
                <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-6 leading-[0.9]">
                  Let’s start the <br />
                  <span className="text-[#FF7E00]">evolution.</span>
                </h2>
                <p className="text-slate-500 font-medium leading-relaxed">
                  Skip the formal gatekeepers. Connect with our culture, see our
                  latest drops, or start a direct thread with the team.
                </p>
              </div>

              {/* Social Grid */}
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">
                  Social Connectivity
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <SocialTile
                    icon={<FiLinkedin />}
                    label="LinkedIn"
                    href="#"
                    color="hover:text-[#0077B5]"
                  />
                  <SocialTile
                    icon={<FiMessageCircle />}
                    label="WhatsApp"
                    href="#"
                    color="hover:text-[#25D366]"
                  />
                  <SocialTile
                    icon={<FiInstagram />}
                    label="Instagram"
                    href="#"
                    color="hover:text-[#E4405F]"
                  />
                  <SocialTile
                    icon={<FiFacebook />}
                    label="Facebook"
                    href="#"
                    color="hover:text-[#1877F2]"
                  />
                </div>
              </div>

              {/* Quick Availability Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-slate-100 rounded-full shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-tight">
                  Active for new projects
                </span>
              </div>
            </div>

            {/* RIGHT: Minimalist Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 relative"
            >
              {/* Soft brand glow */}
              <div className="absolute -inset-2 rounded-[3rem] bg-gradient-to-r from-[#044DB6]/10 via-blue-400/10 to-orange-400/10 blur-2xl" />

              <div className="relative bg-white border border-slate-200 rounded-[2.5rem] p-4 md:p-8 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)]">
                {/* Header */}
                {/* <div className="mb-12">
                  <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">
                    Let’s Work Together
                  </h2>
                  <p className="text-slate-500 mt-2">
                    Tell us about your idea — we’ll take it from there.
                  </p>
                </div> */}

                <form className="space-y-8">
                  {/* Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2 group">
                      <label className="text-sm font-medium text-slate-700 group-focus-within:text-[#044DB6] transition">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900
            focus:border-[#044DB6] focus:ring-2 focus:ring-[#044DB6]/10
            transition-all outline-none hover:shadow-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2 group">
                      <label className="text-sm font-medium text-slate-700 group-focus-within:text-[#044DB6] transition">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900
            focus:border-[#044DB6] focus:ring-2 focus:ring-[#044DB6]/10
            transition-all outline-none hover:shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2 group">
                    <label className="text-sm font-medium text-slate-700 group-focus-within:text-[#044DB6] transition">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900
          focus:border-[#044DB6] focus:ring-2 focus:ring-[#044DB6]/10
          transition-all outline-none hover:shadow-sm"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2 group">
                    <label className="text-sm font-medium text-slate-700 group-focus-within:text-[#044DB6] transition">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900
          focus:border-[#044DB6] focus:ring-2 focus:ring-[#044DB6]/10
          transition-all outline-none resize-none hover:shadow-sm"
                    />
                  </div>

                  {/* CTA */}
                  <div className="pt-6">
                    <button className="relative w-full py-4 rounded-xl font-semibold tracking-wide text-white overflow-hidden group">
                      {/* Base gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#044DB6] to-blue-500" />

                      {/* Orange hover sweep */}
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />

                      <span className="relative flex items-center justify-center gap-3 z-10">
                        Send Message
                        <FiSend className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: GLOBAL FOOTPRINT (The Map Section) --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#FF7E00] text-[10px] font-black uppercase tracking-[0.3em]">
              Visit Our Workspace
            </span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter mt-4">
              Global presence, local focus.
            </h2>
          </div>

          <div className="relative h-[500px] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white group">
            {/* The Map */}
            <iframe
              title="Location Map"
              src="https://www.google.com/maps?q=Block-309/310,+ODYSSA+Business+Center,+Rasulgarh,+Bhubaneswar,+751010&output=embed"
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
                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  Veterans Ventures and Services Pvt. Ltd.
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  Block-309/310, ODYSSA Business Center,
                  <br />
                  Rasulgarh, Bhubaneswar – 751010
                </p>
                <div className="pt-6 border-t border-slate-200/50 flex items-center justify-between">
                  {/* <div>
                    <p className="text-[10px] font-black uppercase text-slate-400">
                      Local Time
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      09:42 AM PST
                    </p>
                  </div> */}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Block-309/310,+ODYSSA+Business+Center,+Rasulgarh,+Bhubaneswar,+751010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF7E00] font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
                  >
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
                Ready to build the <br />{" "}
                <span className="text-[#FF7E00]">future of digital?</span>
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="tel:+917894689818" className="px-12 py-5 bg-[#FF7E00] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:scale-105           transition-all shadow-xl shadow-orange-500/20">
                  Call Now
                </Link>
                <Link href="/services" className="px-12 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all flex items-center gap-3">
                  Our Services <FiArrowUpRight />
                </Link>
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
