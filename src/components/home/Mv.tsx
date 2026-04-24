"use client";
import { motion } from "framer-motion";
import { FiEye, FiTarget } from "react-icons/fi";

const MissionVision = () => {
  const data = [
    {
      title: "Our Mission",
      icon: <FiTarget size={24} />,
      bgColor: "bg-blue-600",
      description:
        "To design AI-enabled digital architectures that enhance national capability and enterprise competitiveness — to bring in AI revolution in Ed-tech and to design a defence grade solution by delivering with precision engineering and globally competitive cost discipline.",
      isVision: false,
    },
    {
      title: "Our Vision",
      icon: <FiEye size={24} />,
      bgColor: "bg-orange-500",
      description:
        "We envision a digitally sovereign ecosystem where national infrastructure is intelligent, industries operate autonomously, governance is decisively data-driven, and security is structural rather than reactive.",
      isVision: true,
    },
  ];

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      {/* --- The Video Background Layer --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90 grayscale-[40%]"
        >
          <source src="/assets/mv-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.6)_70%,rgba(0,0,0,0.85)_100%)]" />
      </div>

      {/* Subtle Blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-200/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-[1px] bg-[#FF7E00]" />
            <span className="text-[#FF7E00] font-bold uppercase tracking-[0.3em] text-[10px]">
              Our Core
            </span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-[0.95] mb-6"
          >
            Purpose Beyond{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] via-orange-500 to-[#e67300] pr-2 italic">
              Code
            </span>
            .
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-100 font-small max-w-2xl leading-relaxed"
          >
            Engineering the digital backbone of tomorrow with precision,
            passion, and a focus on long-term scalability.
          </motion.p>
        </div>

        {/* --- GRID LAYOUT: 1 Col on Mobile, 3 Cols on Large Screens --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center max-w-full">
          
          {/* 1. MISSION CARD */}
          <Card item={data[0]} />

          {/* 2. MIDDLE IMAGE ELEMENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center py-10 lg:py-0"
          >
            {/* Spinning decorative ring */}
            <div className="absolute w-64 h-64 border-2 border-dashed border-orange-500/40 rounded-full animate-[spin_15s_linear_infinite]" />
            <div className="absolute w-48 h-48 border border-blue-400/20 rounded-full animate-[spin_10s_linear_infinite_reverse]" />
            
            <img
              src="/assets/img111.png" // Replace with your actual image
              alt="Core Engineering"
              className="relative z-10 w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-[0_0_35px_rgba(255,126,0,0.4)]"
            />
          </motion.div>

          {/* 3. VISION CARD */}
          <Card item={data[1]} />
        </div>
      </div>
    </section>
  );
};

// Internal Card Component for clean code
const Card = ({ item }: { item: any }) => {
  const { isVision, bgColor, icon, title, description } = item;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isVision ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`group relative flex flex-col shadow-[0_0_25px_rgba(255,246,235,0.4)] 
        bg-white backdrop-blur-md rounded-[2.5rem] overflow-hidden min-h-[400px] w-full`}
    >
      {/* COLOR ACCENT BLOCK */}
      <div className={`relative w-full h-1/3 ${bgColor} p-8 flex flex-col justify-between overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-700"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10 self-start bg-white/10 backdrop-blur-xl p-3 rounded-xl text-white border border-white/20 shadow-2xl group-hover:rotate-6 transition-transform">
          {icon}
        </div>
        <h4 className="relative z-10 text-2xl font-black text-white uppercase tracking-tighter">
          {isVision ? "Vision" : "Mission"}
        </h4>
      </div>

      {/* CONTENT BLOCK */}
      <div className="w-full h-2/3 p-8 flex flex-col justify-start">
        <div className={`w-12 h-1.5 ${bgColor} mb-6 rounded-full`} />
        <p className="text-md text-slate-700 font-semibold leading-relaxed tracking-tight">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default MissionVision;