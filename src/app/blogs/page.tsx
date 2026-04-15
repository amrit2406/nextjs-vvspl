"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiBookOpen,
  FiClock,
  FiHash,
  FiChevronRight,
} from "react-icons/fi";

// --- Sub-Component: Blog Card ---
const BlogCard = ({ category, title, date, readTime, image }: any) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="group cursor-pointer bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
  >
    {/* Image */}
    <div className="relative aspect-[16/10] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Category Badge */}
      <div className="absolute top-4 left-4">
        <span className="px-4 py-1 bg-white/95 backdrop-blur-sm rounded-full text-[11px] font-semibold text-slate-700 border border-slate-200">
          {category}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      {/* Meta */}
      <div className="flex items-center gap-3 text-slate-500 text-sm mb-3">
        <span className="flex items-center gap-1">
          <FiClock className="text-slate-400" />
          {readTime}
        </span>
        <span>•</span>
        <span>{date}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-slate-900 leading-snug group-hover:text-[#FF7E00] transition-colors">
        {title}
      </h3>

      {/* CTA */}
      <div className="mt-4 flex items-center text-sm font-medium text-slate-700 group-hover:text-[#FF7E00]">
        Read more
        <FiChevronRight className="ml-1 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  </motion.div>
);

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const posts = [
    {
      category: "Engineering",
      title: "Why we migrated our core engine to Rust for 10x throughput",
      date: "Oct 12, 2025",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    },
    // {
    //   category: "Design",
    //   title: "The psychology of 'Neo-Brutalist' UI in enterprise software",
    //   date: "Oct 08, 2025",
    //   readTime: "5 min read",
    //   image:
    //     "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
    // },
    {
      category: "Future",
      title: "Proprietary AI: Why third-party LLMs are a security risk",
      date: "Sep 28, 2025",
      readTime: "12 min read",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop",
    },
    {
      category: "Culture",
      title: "Scaling to 20 nationalities without losing our soul",
      date: "Sep 15, 2025",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
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
              Latest Blogs <span className="text-[#FF7E00]">.</span>
            </h1>
            <p className="mt-8 text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
              See the latest update about tech from vvspltech.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Category Filter & Grid --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Newsletter --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter mb-4">
              Get the <span className="text-[#FF7E00]">unfiltered</span> logs.
            </h3>
            <p className="text-slate-500 font-medium mb-10">
              No marketing fluff. Just technical breakdowns and cultural
              insights delivered once a month.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="engineering@company.com"
                className="flex-grow px-8 py-5 rounded-2xl bg-white border border-slate-200 font-bold focus:outline-none focus:border-[#FF7E00] transition-colors"
              />
              <button className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black hover:bg-[#FF7E00] transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
