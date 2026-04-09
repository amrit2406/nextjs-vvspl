"use client";
import { motion } from "framer-motion";
import { 
  FiArrowRight, 
  FiCode, 
  FiServer, 
  FiSmartphone, 
  FiShield, 
  FiBarChart, 
  FiDatabase 
} from "react-icons/fi";

const services = [
  {
    title: "Custom Software",
    description: "Tailor-made solutions designed to scale with your business logic and enterprise needs.",
    image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=800&auto=format&fit=crop",
    icon: <FiCode />,
    theme: "from-blue-600 to-indigo-600"
  },
  {
    title: "Cloud Infrastructure",
    description: "Secure, scalable, and highly available cloud architectures using AWS, Azure, and GCP.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    icon: <FiServer />,
    theme: "from-orange-500 to-rose-500"
  },
  {
    title: "Mobile Solutions",
    description: "High-performance native and cross-platform mobile applications for iOS and Android.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    icon: <FiSmartphone />,
    theme: "from-blue-500 to-cyan-500"
  },
  {
    title: "Cyber Security",
    description: "Proactive threat detection and robust security protocols to protect your digital assets.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    icon: <FiShield />,
    theme: "from-slate-700 to-slate-900"
  },
  {
    title: "Data & AI",
    description: "Transforming raw data into actionable insights through advanced Machine Learning models.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800&auto=format&fit=crop",
    icon: <FiBarChart />,
    theme: "from-purple-600 to-blue-600"
  },
  {
    title: "Optimized DB",
    description: "Optimized data storage solutions ensuring integrity, speed, and seamless accessibility.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800&auto=format&fit=crop",
    icon: <FiDatabase />,
    theme: "from-emerald-500 to-teal-600"
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-blue-600 font-bold uppercase tracking-widest text-sm"
            >
              Our Expertise
            </motion.span>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-slate-900 mt-2 tracking-tighter"
            >
              Solutions that drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-[#044DB6]">innovation.</span>
            </motion.h3>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 max-w-xs font-medium"
          >
            We combine architectural excellence with cutting-edge engineering to build the future of tech.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col h-[520px] rounded-[2.5rem] bg-white overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-transparent transition-all duration-500"
            >
              {/* Top Section: Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors" />
                
                {/* Floating Icon Badge */}
                {/* <div className={`absolute bottom-4 left-6 p-4 rounded-2xl bg-white text-slate-900 shadow-xl flex items-center justify-center text-2xl group-hover:-translate-y-2 transition-transform duration-500`}>
                  {service.icon}
                </div> */}
              </div>

              {/* Bottom Section: Content */}
              <div className="flex flex-col flex-grow p-8">
                <h4 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                  {service.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {service.description}
                </p>

                {/* CTA Button */}
                <div className="mt-auto">
                  <button className="w-full flex items-center justify-between group/btn bg-slate-50 text-slate-900 hover:text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 ease-in-out
                    hover:bg-gradient-to-r hover:from-blue-600 hover:to-[#044DB6] shadow-sm hover:shadow-lg hover:scale-[1.02]">
                    <span>Explore Service</span>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-900 group-hover/btn:scale-110 transition-transform shadow-sm">
                      <FiArrowRight />
                    </div>
                  </button>
                </div>
              </div>

              {/* Top Accent Bar (Hover Effect) */}
              <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${service.theme} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="mt-20 relative p-12 rounded-[3rem] bg-slate-900 overflow-hidden text-center md:text-left md:flex items-center justify-between">
           <div className="relative z-10">
              <h4 className="text-3xl font-bold text-white mb-2">Ready to architect your future?</h4>
              <p className="text-slate-400">Consult with our veterans to design your next technical ecosystem.</p>
           </div>
           <button className="mt-8 md:mt-0 relative z-10 bg-gradient-to-r from-blue-600 to-[#044DB6] hover:from-blue-700 hover:to-[#0863e7] text-white px-10 py-5 rounded-2xl font-black transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl shadow-blue-500/20">
              <span>Book a Strategy Call</span>
              <FiArrowRight />
           </button>

           {/* Decorative Background for Global CTA */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px]" />
        </div>
      </div>
    </section>
  );
};

export default Services;