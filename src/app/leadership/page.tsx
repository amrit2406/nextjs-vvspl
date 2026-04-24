"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiLinkedin, FiTwitter, FiGithub, FiCommand } from "react-icons/fi";
import Link from "next/link";

// --- Updated Sub-Component: Horizontal Leader Card ---
const LeaderCard = ({ name, role, image, bio, links }: any) => (
  <div className="group bg-white border border-blue-200 rounded-[2.5rem] p-4 lg:p-6 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
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

        <p className="text-slate-600 font-medium leading-relaxed text-lg mb-8">
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
          {/* {links.twitter && (
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
          )} */}
        </div>
      </div>
    </div>
  </div>
);

const LeadershipPage = () => {
  const leaders = [
    {
      name: "LT. Col. Anil Tripathi, Sena Medal (Retd.)",
      role: "Chairman cum Founder Director",
      image: "/assets/img11.png",
      bio: "A decorated Army veteran and Sena Medal awardee, Anil Tripathi is a mission-driven leader with over two decades of operational excellence in the Army Service Corps and an alumni of IIM Bangalore, India Institute of Financial Management Faridabad, National Institute of Mass Communication (JNU) New Delhi and Executive MBA in operations from Mumbai. An expert in defence logistics, strategic supply chains, crisis response, and large-scale administration, he successfully built and led a high-performing logistics enterprise in the port and integrated supply chain sector. Today, he is charting a new course — transitioning from physical logistics to digital force multiplication. Through Veteran Ventures Pvt Ltd, he is spearheading next-generation IT solutions designed to address real-world defence and civil challenges. His vision is clear: leverage technology as a strategic enabler to enhance national capability, operational efficiency, and secure digital ecosystems. With disciplined execution and a future-ready mindset, he is positioning the company at the intersection of defence expertise and digital innovation.",
      links: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Ankit Tripathi",
      role: "Additional Director",
      image: "/assets/img22.png",
      bio: "An MBA and BCom graduate from PDPU Gandhinagar, Ankit brings structured business strategy and growth-oriented leadership to the organization. Having actively managed operations and expansion initiatives, he now drives digital transformation efforts, ensuring scalable systems, strong governance, and technology-led value creation. Ankit Tripathi has expertised himself in futurestic digital revolution and financial growth. He is deeply immersed in AI and ML innovation, leveraging emerging technologies to optimize decision-making, enhance operational intelligence, and unlock next-generation business opportunities.",
      links: { linkedin: "#", github: "#" },
    },
    {
      name: "Dattavi Jariwala Tripathi",
      role: "Founder Director",
      image: "/assets/img33.png",
      bio: "With a BA and MA in Clinical Psychology, Dattavi contributes a human-centric dimension to leadership, organizational design, and stakeholder engagement. Strengthening the technology backbone in support with her life partner who is MTech – Computer Science, BTech – Electronics), whose technical expertise supports the company’s ambition to build secure, intelligent, and impact-driven digital solutions. Dattavi herself is involved in Network Security domain to extend her expertise to clients and giants of digital world",
      links: { linkedin: "#", github: "#", twitter: "#" },
    },
    {
      name: "Priyanka Tripathi Kriech",
      role: "Executive Director",
      image: "/assets/img44.png",
      bio: "Based in Horgan, Zurich, Switzerland, and educated at London School of Economics and Political Science (LSE), she combines global financial acumen with a refined understanding of international economic and political dynamics. With over four years of entrepreneurial leadership, she leverages specialized knowledge of off-market digital assets to deliver exclusive investment opportunities to a discerning clientele. Drawing on a strong foundation in Salesforce B2B commerce and experience across asset management and sales, she provides tailored, trust-driven solutions. She has multilingual cultural insight, enabling seamless navigation of complex international markets.",
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
              The Leadership <span className="text-[#FF7E00]">.</span>
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
              <Link href="/caresrs" className="px-12 py-5 bg-[#FF7E00] text-white rounded-2xl font-black hover:scale-105 transition-transform shadow-[0_20px_50px_rgba(255,126,0,0.2)]">
                View Executive Roles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadershipPage;
