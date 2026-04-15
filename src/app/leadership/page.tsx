"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiLinkedin, FiTwitter, FiGithub, FiCommand } from "react-icons/fi";

// --- Updated Sub-Component: Horizontal Leader Card ---
const LeaderCard = ({ name, role, image, bio, links }: any) => (
  <div className="group bg-white border border-slate-100 rounded-[2.5rem] p-4 lg:p-6 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
    <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
      {/* Left Section: Image */}
      <div className="relative w-full lg:w-1/3 aspect-square lg:aspect-[4/5] shrink-0 rounded-[2rem] overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Right Section: Content */}
      <div className="flex flex-col flex-grow pr-4">
        <div className="mb-4">
          <p className="text-[#FF7E00] font-black uppercase tracking-[0.2em] text-[10px] mb-1">
            {role}
          </p>
          <h3 className="text-3xl font-black text-slate-900 tracking-tight">
            {name}
          </h3>
        </div>

        <p className="text-slate-500 font-medium leading-relaxed text-lg mb-8">
          {bio}
        </p>

        {/* Social Links - Now consistently at the bottom right */}
        <div className="flex gap-3 mt-auto">
          {links.linkedin && (
            <a
              href={links.linkedin}
              className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#FF7E00] hover:text-white transition-all"
            >
              <FiLinkedin size={18} />
            </a>
          )}
          {links.twitter && (
            <a
              href={links.twitter}
              className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#FF7E00] hover:text-white transition-all"
            >
              <FiTwitter size={18} />
            </a>
          )}
          {links.github && (
            <a
              href={links.github}
              className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#FF7E00] hover:text-white transition-all"
            >
              <FiGithub size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

const LeadershipPage = () => {
  const leaders = [
    {
      name: "Marcus Thorne",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      bio: "Former lead architect at two FAANG giants. Marcus started the Squad with a mission to decentralize high-performance engineering for the enterprise sector. He believes that the best code is written in environments of absolute trust.",
      links: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Elena Rodriguez",
      role: "Chief Product Officer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
      bio: "Specializing in human-centric design for complex systems. Elena ensures that our proprietary tech remains intuitive and high-impact, bridging the gap between high-level logic and user experience.",
      links: { linkedin: "#", github: "#" },
    },
    {
      name: "David Chen",
      role: "VP of Engineering",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
      bio: "A systems enthusiast with a focus on Rust and distributed databases. David manages our global engineering nodes and security protocols, ensuring our infrastructure is as robust as it is scalable.",
      links: { linkedin: "#", github: "#", twitter: "#" },
    },
    {
      name: "Sarah Jenkins",
      role: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
      bio: "The engine behind the machine. Sarah optimizes our remote-first culture, ensuring the squad scales efficiently across 20+ nationalities while maintaining our core high-performance values.",
      links: { linkedin: "#" },
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* --- Page Hero --- */}
      <section className="pt-40 pb-20 bg-slate-50 border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
              Leadership <span className="text-[#FF7E00]">.</span>
            </h1>

            <p className="mt-8 text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
              Our leadership team is made up of engineers and creators who still
              push code and design systems every single day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Leadership Grid (Now 2 columns for wider cards) --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {leaders.map((leader, index) => (
              <LeaderCard key={index} {...leader} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Join the Leadership --- */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="p-1 border border-slate-200 rounded-[3.5rem]">
            <div className="bg-slate-50 rounded-[3rem] py-20 px-10">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
                Think you can lead <br /> a{" "}
                <span className="text-[#FF7E00]">Squad?</span>
              </h2>
              <p className="text-slate-500 font-medium text-lg max-w-xl mx-auto mb-10">
                We are always looking for visionary Technical Leads and Growth
                Strategists.
              </p>
              <button className="px-12 py-5 bg-[#FF7E00] text-white rounded-2xl font-black hover:scale-105 transition-transform shadow-[0_20px_50px_rgba(255,126,0,0.2)]">
                View Executive Roles
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadershipPage;
