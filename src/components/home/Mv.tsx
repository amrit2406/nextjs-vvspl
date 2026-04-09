"use client";
import { motion } from "framer-motion";
import {
  FiEye,
  FiTarget,
  FiShield,
  FiTrendingUp,
  FiGlobe,
} from "react-icons/fi";

const MissionVision = () => {
  const data = [
    {
      title: "Our Mission",
      icon: <FiTarget size={24} />,
      color: "from-blue-600 to-indigo-600",
      description:
        "To empower global enterprises by delivering high-precision technical solutions. We simplify complexity through innovative AI and robust cloud architectures.",
      stats: ["Technical Integrity", "Scalable Excellence"],
    },
    {
      title: "Our Vision",
      icon: <FiEye size={24} />,
      color: "from-indigo-600 to-blue-500",
      description:
        "To become the world's most trusted architectural partner, setting the gold standard for how deep technology serves humanity.",
      stats: ["Global Leadership", "Future-Ready Tech"],
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0' 0' 60' 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-12 gap-4">
          <div className="max-w-xl">
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none mb-4">
              Purpose Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-[#044DB6] italic">Code.</span>
            </h3>
            <p className="text-slate-500 font-medium">
              Engineering the digital backbone of tomorrow.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-50/50 border border-slate-100 p-8 rounded-[2.5rem] hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`p-3 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg shadow-blue-200`}
                >
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black text-slate-900 tracking-tight">
                  {item.title}
                </h4>
              </div>

              {/* Text */}
              <p className="text-slate-600 leading-relaxed mb-8 font-medium">
                {item.description}
              </p>

              {/* Simplified Badges */}
              {/* <div className="flex flex-wrap gap-2">
                {item.stats.map((text, i) => (
                  <span 
                    key={i} 
                    className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100/50"
                  >
                    {text}
                  </span>
                ))}
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
