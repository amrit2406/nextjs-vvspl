"use client";
import { motion } from "framer-motion";
import { FiArrowRight, FiClock, FiCalendar } from "react-icons/fi";

const blogs = [
  {
    title: "Engineering Custom LLMs for Private Enterprise Data",
    category: "AI Solutions",
    date: "April 02, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Zero Trust Architecture: Securing Modern Cloud Nets",
    category: "Cyber Security",
    date: "March 28, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Optimizing Next.js for Global Scale Performance",
    category: "Web Apps",
    date: "March 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
];

const BlogSection = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Hero-matched Background Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0\' 0\' 60\' 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} 
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-[1px] bg-[#FF7E00]" />
              <span className="text-[#FF7E00] font-bold uppercase tracking-[0.3em] text-[10px]">
                Knowledge base
              </span>
            </motion.div>
            <h3 className="text-5xl font-black text-slate-900 tracking-tighter leading-[0.9]">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] via-orange-500 to-[#e67300] italic">Insights.</span>
            </h3>
          </div>
          
          <button className="mt-6 md:mt-0 flex items-center space-x-3 text-xs font-black uppercase tracking-widest text-slate-900 group">
            <span>View All Articles</span>
            <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
              <FiArrowRight />
            </div>
          </button>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col h-full bg-slate-50/50 border border-slate-100 rounded-[2.5rem] overflow-hidden hover:bg-white hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Header */}
              <div className="relative aspect-[16/11] overflow-hidden m-3 rounded-[2rem]">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm border border-white/20">
                    {post.category}
                  </span>
                </div> */}
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                {/* <div className="flex items-center space-x-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">
                  <div className="flex items-center space-x-1.5">
                    <FiCalendar className="text-[#FF7E00]" />
                    <span>{post.date}</span>
                  </div>
                  <span>/</span>
                  <div className="flex items-center space-x-1.5">
                    <FiClock className="text-[#FF7E00]" />
                    <span>{post.readTime}</span>
                  </div>
                </div> */}

                <h4 className="text-2xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-[#FF7E00] transition-colors mb-6">
                  {post.title}
                </h4>

                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-900">Read Full Story</span>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center group-hover:bg-[#FF7E00] group-hover:text-white transition-all transform group-hover:rotate-45">
                    <FiArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;