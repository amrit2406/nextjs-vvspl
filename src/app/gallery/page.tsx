"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMaximize2,
  FiExternalLink,
  FiCamera,
  FiLayout,
} from "react-icons/fi";
import Link from "next/link";

// --- Sub-Component: Gallery Card ---
const GalleryCard = ({ image, title, category, size }: any) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.4, ease: "circOut" }}
    className={`group relative rounded-[2.5rem] overflow-hidden border border-slate-200 bg-slate-100 ${
      size === "large" ? "md:col-span-2 md:row-span-2" : "col-span-1"
    }`}
  >
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3 py-1 bg-[#FF7E00] text-white text-[10px] font-black uppercase tracking-widest rounded-full">
          {category}
        </span>
      </div>
      <h3 className="text-2xl font-black text-white leading-tight">{title}</h3>
      <div className="mt-4 flex gap-3">
        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-colors">
          <FiMaximize2 size={18} />
        </button>
      </div>
    </div>
  </motion.div>
);

const GalleryPage = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Workspaces", "Squad Life", "Events", "Products"];

  const items = [
    {
      id: 1,
      category: "Workspaces",
      title: "The Innovation Hub",
      size: "large",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    },
    {
      id: 2,
      category: "Squad Life",
      title: "Collaborative Sprints",
      size: "small",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      category: "Events",
      title: "Global Summit 2025",
      size: "small",
      image:
        "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 4,
      category: "Products",
      title: "Proprietary Hardware",
      size: "small",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 5,
      category: "Workspaces",
      title: "The Zen Zone",
      size: "large",
      image:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 6,
      category: "Squad Life",
      title: "Remote Culture",
      size: "small",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const filteredItems =
    filter === "All" ? items : items.filter((i) => i.category === filter);

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
              Behind the Pixels<span className="text-[#FF7E00]">.</span>
            </h1>

            <p className="mt-6 text-xl text-slate-500 font-medium leading-relaxed">
              Memories behind the pixels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Gallery Grid --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <GalleryCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  category={item.category}
                  size={item.size}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More Mockup */}
          {/* <div className="mt-20 text-center">
            <button className="group flex flex-col items-center gap-4 mx-auto">
              <div className="w-16 h-16 rounded-full border-2 border-slate-100 flex items-center justify-center group-hover:border-[#FF7E00] group-hover:bg-[#FF7E00]/5 transition-all">
                <FiLayout
                  className="text-slate-300 group-hover:text-[#FF7E00]"
                  size={24}
                />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 group-hover:text-slate-900">
                View Full Archive
              </span>
            </button>
          </div> */}
        </div>
      </section>

      {/* --- Stats Banner --- */}
      {/* <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 border-y border-slate-100 py-16">
            <div className="px-8 border-r border-slate-100 text-center md:text-left py-8 md:py-0">
              <h4 className="text-4xl font-black text-slate-900">1.2k+</h4>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">
                Moments Captured
              </p>
            </div>
            <div className="px-8 border-r border-slate-100 text-center md:text-left py-8 md:py-0">
              <h4 className="text-4xl font-black text-[#FF7E00]">12</h4>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">
                Global Studios
              </p>
            </div>
            <div className="px-8 text-center md:text-left py-8 md:py-0">
              <h4 className="text-4xl font-black text-slate-900">100%</h4>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">
                Unfiltered Culture
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* --- Footer CTA --- */}
      <section className="py-18">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-[3rem] bg-slate-50 p-12 md:p-24 border border-slate-100 overflow-hidden text-center flex flex-col items-center justify-center">
            {/* Content */}
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-8">
                Ready to be in the{" "}
                <span className="text-[#FF7E00]">next shot?</span>
              </h2>

              <Link href="/careers" className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-2xl font-black hover:bg-[#FF7E00] transition-colors">
                Join the Team <FiExternalLink />
              </Link>
            </div>

            {/* Background Accent */}
            <div className="absolute right-0 bottom-0 w-1/3 h-full bg-[radial-gradient(circle_at_bottom_right,rgba(255,126,0,0.1)_0%,transparent_70%)]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
