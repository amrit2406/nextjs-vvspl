"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiCpu,
  FiGlobe,
  FiUsers,
  FiZap,
  FiShield,
  FiTrendingUp,
  FiTarget,
  FiMaximize,
  FiStar,
  FiLayers,
} from "react-icons/fi";
import Leaders from "@/components/home/Leaders";

type ImpactItem = {
  letter: string;
  title: string;
  desc: string;
};

type EthicsItem = {
  title: string;
  desc: string;
};

const impactData: ImpactItem[] = [
  {
    letter: "I",
    title: "Integrity",
    desc: "We uphold unwavering honesty and strong moral principles in everything we do. Like the values instilled in veterans, integrity is the foundation of our decisions, ensuring trust, transparency, and respect in every engagement.",
  },
  {
    letter: "M",
    title: "Mastery",
    desc: "We pursue excellence with discipline and precision. Guided by a mindset of continuous improvement, we apply deep technical expertise to deliver solutions that are reliable, resilient, and built to perform under any challenge.",
  },
  {
    letter: "P",
    title: "Purpose",
    desc: "We are driven by a clear mission to create meaningful impact. Our solutions are designed to solve real world problems while reflecting a sense of service, responsibility, and commitment to those we support, including veteran communities.",
  },
  {
    letter: "A",
    title: "Accountability",
    desc: "We take ownership of our actions with a strong sense of duty. Every commitment is honored with responsibility, ensuring dependable outcomes and reinforcing the trust placed in us by our stakeholders.",
  },
  {
    letter: "C",
    title: "Collaboration",
    desc: "We work as one team with our stakeholders, built on mutual respect and trust. By fostering strong partnerships, we ensure shared success and solutions that truly align with real needs and goals.",
  },
  {
    letter: "T",
    title: "Transformation",
    desc: "We combine intelligence with innovation to drive progress. Through AI driven and automated solutions, we enable organizations to evolve, adapt, and grow while maintaining the reliability and discipline that define our approach.",
  },
];

const ethicsData: EthicsItem[] = [
  {
    title: "Integrity and Honesty",
    desc: "We act with honesty and fairness in all our interactions. Our decisions are guided by strong moral principles, ensuring transparency and trust with stakeholders.",
  },
  {
    title: "Trust and Reliability",
    desc: "We strive to be dependable in everything we do. Our stakeholders rely on us for consistent performance, secure solutions, and long term value.",
  },
  {
    title: "Accountability and Discipline",
    desc: "We take full ownership of our commitments and deliver with precision and responsibility. Discipline in execution ensures quality, timeliness, and excellence.",
  },
  {
    title: "Respect and Inclusivity",
    desc: "We value people, perspectives, and partnerships. We foster an environment of mutual respect, dignity, and equal opportunity for all.",
  },
  {
    title: "Data Privacy and Security",
    desc: "We safeguard information with the highest level of confidentiality and follow strict standards to ensure data protection and responsible use of technology.",
  },
  {
    title: "Innovation with Responsibility",
    desc: "We build AI driven and automated solutions that are intelligent, ethical, and aligned with real world needs, ensuring technology is used for positive impact.",
  },
  {
    title: "Commitment to Service",
    desc: "Inspired by values of service, we aim to create solutions that support communities, including veterans, with reliability, care, and purpose.",
  },
  {
    title: "Compliance and Fair Practices",
    desc: "We adhere to all applicable laws, regulations, and standards, maintaining fairness and professionalism in every engagement.",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen selection:bg-[#044DB6] selection:text-white">
      {/* --- HERO SECTION (Untouched) --- */}
      <section className="pt-40 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
              We Build What <br /> Matters
              <span className="text-[#FF7E00]">.</span>
            </h1>
            <p className="mt-8 text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
              A team of engineers, designers, and strategists who believe
              technology should create real-world impact — not just headlines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- overview Section --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-[2px] w-12 bg-orange-500" />
              <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">
                Who we are
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter">
              Crafting digital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] via-orange-500 to-[#e67300] italic">
                {" "}
                futures{" "}
              </span>{" "}
              that last.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Established in 2025, VVSPL has rapidly emerged as a trusted
              technology partner, delivering software solutions built on system
              thinking, architectural precision, and disciplined execution.
              VVSPL TECH creates AI driven and cloud native solutions that help
              organizations scale, adapt and lead by turning challenges into
              growth and improving efficiency.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              We are among the few in the industry delivering trusted solutions
              designed to serve and support veterans with reliability and care.
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-orange-500/5 rounded-[2.5rem] blur-2xl group-hover:bg-orange-500/10 transition duration-700" />
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
              alt="Workspace"
              className="relative rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* why */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[2px] w-12 bg-orange-500" />
            <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">
              Why Choose Us
            </span>
            <span className="h-[2px] w-12 bg-orange-500" />
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
            Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] via-orange-500 to-[#e67300] italic">
              impact
            </span>{" "}
            and scale
          </h2>
        </div>
        <div className="text-center max-w-6xl mx-auto mb-6">
          <p className="text-slate-600 text-lg leading-relaxed">
            We bring together strong engineering principles and practical
            innovation to deliver scalable and reliable solutions. Our focus on
            AI driven automation, domain expertise, and disciplined execution
            ensures technology that is efficient, future ready, and aligned with
            real world impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "System-Driven Approach",
              desc: "We design solutions with a deep understanding of systems, ensuring stability, scalability, and long-term efficiency.",
            },
            {
              title: "AI & Cloud Expertise",
              desc: "Leveraging modern AI and cloud-native technologies, we build intelligent and future-ready digital products.",
            },
            {
              title: "Precision Execution",
              desc: "From architecture to deployment, every step is handled with discipline, ensuring high-quality outcomes.",
            },
            {
              title: "Scalable Solutions",
              desc: "Our solutions grow with your business, adapting to new challenges without compromising performance.",
            },
            {
              title: "Trusted Partnership",
              desc: "We focus on long-term collaboration, providing transparency, reliability, and consistent support.",
            },
            {
              title: "Outcome-Focused",
              desc: "We prioritize results that matter—efficiency, performance, and measurable business impact.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl border border-slate-200 hover:border-orange-300 transition duration-300 bg-white hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-500 transition">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* I.M.P.A.C.T */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[2px] w-12 bg-orange-500" />
            <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">
              Our Philosophy
            </span>
            <span className="h-[2px] w-12 bg-orange-500" />
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] via-orange-500 to-[#e67300] italic">
              I.M.P.A.C.T
            </span>{" "}
            We Create
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            Our philosophy is built on six core principles that guide every
            decision, every solution, and every partnership we form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {impactData.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-xl transition duration-300"
            >
              {/* Letter Badge */}
              <div className="absolute -top-5 left-6 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#FF7E00] to-orange-500 text-white font-black text-xl shadow-lg">
                {item.letter}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mt-6 mb-4 group-hover:text-orange-500 transition">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Leaders />

      {/* code of ethics */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[2px] w-12 bg-orange-500" />
            <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">
              Code of Ethics
            </span>
            <span className="h-[2px] w-12 bg-orange-500" />
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
            Built on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] via-orange-500 to-[#e67300] italic">
              trust & discipline
            </span>
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            At VVSPL Tech, our foundation is inspired by discipline, service,
            and trust. We are committed to building technology with integrity,
            delivering reliable solutions, and upholding the highest ethical
            standards in everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ethicsData.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-xl hover:border-orange-300 transition duration-300"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-orange-500 transition">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Values Grid --- */}
      {/* <section className="py-32 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
                Our Core <span className="text-orange-500">Mandates</span>
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                Standardization is our strength. We follow a strict internal
                framework to ensure consistent delivery across every project.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            {[
              {
                icon: FiShield,
                title: "Total Integrity",
                desc: "We prioritize radical transparency and ethical code above all else.",
              },
              {
                icon: FiGlobe,
                title: "Global Standards",
                desc: "Every system is built to comply with international performance benchmarks.",
              },
              {
                icon: FiTarget,
                title: "Obsessive Precision",
                desc: "Details aren't just details; they are the core of our technical DNA.",
              },
              {
                icon: FiLayers,
                title: "Future Proofing",
                desc: "Architecting systems that adapt to the next decade of tech evolution.",
              },
            ].map((val, i) => (
              <div
                key={i}
                className="bg-white p-10 hover:bg-slate-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 mb-8 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <val.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                  {val.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* --- Final Modern CTA --- */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
              Let's Build The <span className="text-orange-500">Next</span> .
            </h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
              Join industry leaders who trust VVSPL for their most critical
              digital infrastructure and software engineering needs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-lg font-bold text-lg hover:bg-orange-500 transition-colors flex items-center justify-center gap-2">
                Get Started <FiArrowRight />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-lg font-bold text-lg hover:bg-slate-50 transition-colors">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
