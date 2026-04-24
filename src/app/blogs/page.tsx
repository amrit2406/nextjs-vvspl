"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiBookOpen,
  FiClock,
  FiHash,
  FiChevronRight,
} from "react-icons/fi";

// --- Sub-Component: Blog Card ---
const BlogCard = ({ category, title, date, readTime, image, slug }: any) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="group cursor-pointer bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
  >
    <Link href={`/blogs/${slug}`} className="block">
    {/* Image Container */}
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
    </Link>
  </motion.div>
);

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const posts = [
    {
      slug: "saas-ideas-2026",
      category: "Engineering",
      title: "Top 10 SaaS Ideas for 2026: The Future of Scalable Innovation",
      date: "Apr 12, 2026",
      readTime: "8 min read",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuYMV4nb0WaY6wN2w8FhNI2CF0M9Bu5AxIvA&s",
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
      slug: "how-ai-is-transforming-saas-products",
      category: "Future",
      title: "How AI is Transforming SaaS Products in 2026",
      date: "May 2, 2026",
      readTime: "12 min read",
      image: "https://img.freepik.com/free-vector/ai-futuristic-technology-background_53876-97391.jpg",
    },
    {
      slug: "digital-marketing-ai",
      category: "Culture",
      title: "AI is Changing Digital Marketing – Are You Ready?",
      date: "March 15, 2026",
      readTime: "5 min read",
      image: "https://img.freepik.com/free-vector/digital-marketing-landing-page_33099-1726.jpg?semt=ais_hybrid&w=740&q=80",
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
