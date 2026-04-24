"use client";
import { motion } from "framer-motion";
import { FiEye, FiTarget } from "react-icons/fi";

const MissionVision = () => {
  const data = [
    {
      title: "Our Mission",
      icon: <FiTarget size={24} />,
      color: "from-[#FF7E00] to-[#e67300]",
      accent: "bg-orange-50 text-[#FF7E00]",
      description:
        "To design and deploy defence-grade, AI-enabled digital architectures that enhance national capability and enterprise competitiveness — delivered with precision engineering and globally competitive cost discipline.",
      features: ["Technical Integrity", "Scalable Excellence"],
    },
    {
      title: "Our Vision",
      icon: <FiEye size={24} />,
      color: "from-[#044DB6] to-[#2A6BFF]",
      accent: "bg-blue-50 text-[#044DB6]",
      description:
        "We envision a digitally sovereign ecosystem where national infrastructure is intelligent, industries operate autonomously, governance is decisively data-driven, and security is structural rather than reactive.",
      features: ["Global Leadership", "Future-Ready Tech"],
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
          {/* Replace this URL with your hosted video file */}
          <source src="/assets/mv-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Modern Overlay: Fades the video into the background color */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950" /> */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.6)_70%,rgba(0,0,0,0.85)_100%)]" />
      </div>

      {/* Subtle Blobs - Reduced opacity to avoid clashing with video */}
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
            Purpose Beyond <span></span>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto px-6">
          {data.map((item, index) => {
            const isVision = item.title.toLowerCase().includes("vision");
            const bgColor = isVision ? "bg-orange-500" : "bg-blue-600";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isVision ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`group relative flex flex-col md:flex-row shadow-[0_0_25px_rgba(255,246,235,0.6)] ${
                  isVision ? "md:flex-row-reverse" : "md:flex-row"
                } bg-white backdrop-blur-md rounded-[2.5rem] overflow-hidden min-h-[350px]`}
              >
                {/* 1. THE COLOR ACCENT BLOCK */}
                <div
                  className={`relative w-full md:w-2/5 ${bgColor} p-10 flex flex-col justify-between overflow-hidden`}
                >
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-700"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                      backgroundSize: "24px 24px",
                    }}
                  />

                  <div className="relative z-10 self-start bg-white/10 backdrop-blur-xl p-4 rounded-2xl text-white border border-white/20 shadow-2xl group-hover:rotate-6 transition-transform">
                    {item.icon}
                  </div>

                  <div className="relative z-10">
                    <h4 className="text-2xl font-black text-white leading-[0.8] uppercase tracking-tighter">
                      {isVision ? "Vision" : "Mission"}
                    </h4>
                  </div>
                </div>

                {/* 2. THE READABLE CONTENT BLOCK */}
                <div
                  className={`w-full md:w-3/5 p-10 flex flex-col justify-center ${isVision ? "text-right items-end" : "text-left items-start"}`}
                >
                  <div className="relative z-10 max-w-sm">
                    <div
                      className={`w-16 h-1.5 ${bgColor} mb-8 rounded-full ${isVision ? "ml-auto" : "mr-auto"}`}
                    />
                    <p className="text-md text-slate-700 font-semibold leading-relaxed tracking-tight">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
