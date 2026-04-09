"use client";
import { motion } from "framer-motion";
import { FiCpu, FiShield, FiTrendingUp, FiUsers, FiArrowUpRight } from "react-icons/fi";

const reasons = [
  {
    icon: <FiCpu size={26} />,
    title: "Cutting-Edge Expertise",
    description: "Mastering advanced AI/ML models and complex Cloud architectures to keep your stack future-ready.",
    color: "from-blue-500 to-cyan-400",
    glow: "shadow-blue-500/10"
  },
  {
    icon: <FiShield size={26} />,
    title: "Enterprise-Grade Security",
    description: "Security is baked into our DNA. Every line of code follows the highest global safety standards.",
    color: "from-orange-500 to-red-400",
    glow: "shadow-orange-500/10"
  },
  {
    icon: <FiUsers size={26} />,
    title: "Veteran Leadership",
    description: "Decades of experience in software architecture ensures your project is in safe, expert hands.",
    color: "from-indigo-500 to-purple-400",
    glow: "shadow-indigo-500/10"
  },
  {
    icon: <FiTrendingUp size={26} />,
    title: "Scalable Growth",
    description: "Systems designed to handle 10x load, ensuring your tech grows alongside your business.",
    color: "from-emerald-500 to-teal-400",
    glow: "shadow-emerald-500/10"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-32 bg-[#030712] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Messaging */}
          <div className="lg:col-span-5 lg:sticky lg:top-40">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">The VVSPL Edge</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight">
                Why partner <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-100">
                  with us?
                </span>
              </h2>
              
              <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-md">
                We bridge the gap between complex engineering and business goals, delivering 
                high-performance ecosystems that scale.
              </p>

              {/* Stats/Quick Glance */}
              <div className="grid grid-cols-2 gap-8 border-t border-slate-800 pt-10">
                <div>
                  <p className="text-3xl font-bold text-white">99%</p>
                  <p className="text-sm text-slate-500 uppercase tracking-wide font-medium">Uptime Guarantee</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">10x</p>
                  <p className="text-sm text-slate-500 uppercase tracking-wide font-medium">Scalability Focus</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Bento Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`group relative p-8 bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-[2.5rem] hover:border-slate-700 transition-all duration-500 hover:${item.glow}`}
              >
                {/* Decorative Gradient Background on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 bg-gradient-to-br from-white to-transparent rounded-[2.5rem]" />

                {/* Icon Circle */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${item.color} text-white shadow-lg shadow-black/20`}>
                  {item.icon}
                </div>

                <h4 className="text-xl font-bold text-white mb-4 flex items-center justify-between">
                  {item.title}
                  <FiArrowUpRight className="text-slate-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h4>
                
                <p className="text-slate-400 leading-relaxed text-sm">
                  {item.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent group-hover:w-1/2 transition-all duration-700" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;