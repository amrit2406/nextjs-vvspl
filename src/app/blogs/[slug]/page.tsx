"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  FiArrowLeft, FiShare2, FiTwitter, FiLinkedin, 
  FiClock, FiUser, FiChevronRight, FiCopy 
} from "react-icons/fi";

const BlogDetailsPage = () => {
  // Reading Progress Bar logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#FF7E00] origin-left z-50"
        style={{ scaleX }}
      />

      {/* --- Navigation Bar (Simplified for Reading) --- */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-40 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button className="flex items-center gap-2 font-black text-xs uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">
            <FiArrowLeft /> Back to Journal
          </button>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#FF7E00] transition-all">
              <FiShare2 size={16} />
            </button>
          </div>
        </div>
      </nav>

      {/* --- Article Header --- */}
      <header className="pt-40 pb-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="px-4 py-1.5 bg-[#FF7E00]/10 text-[#FF7E00] text-[10px] font-black uppercase tracking-widest rounded-full border border-[#FF7E00]/20">
              Engineering
            </span>
            <h1 className="mt-8 text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
              Why we migrated our core engine to Rust for 10x throughput.
            </h1>
            
            <div className="mt-10 flex flex-wrap items-center gap-8 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&fit=crop" alt="Author" />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900">Marcus Thorne</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Founder & CEO</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex items-center gap-2 text-slate-400">
                  <FiClock size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">8 Min Read</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <FiUser size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">Oct 12, 2025</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* --- Main Content Section --- */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 py-20">
        
        {/* Sidebar Left: Socials */}
        <aside className="hidden lg:block lg:col-span-1 sticky top-32 h-fit">
          <div className="flex flex-col gap-4">
            <button className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all shadow-sm">
              <FiTwitter size={20} />
            </button>
            <button className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#044DB6] hover:text-white transition-all shadow-sm">
              <FiLinkedin size={20} />
            </button>
            <button className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#FF7E00] hover:text-white transition-all shadow-sm">
              <FiCopy size={20} />
            </button>
          </div>
        </aside>

        {/* Center: Article Content */}
        <main className="lg:col-span-8">
          <article className="prose prose-slate prose-lg max-w-none">
            <div className="rounded-[3rem] overflow-hidden mb-12 border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                alt="Main Article"
                className="w-full" 
              />
            </div>

            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
              Legacy systems are often held together by hope and technical debt. At the Squad, we realized that our Node.js infrastructure, while efficient for the early stages, was hitting a wall as we scaled to handle 100k+ concurrent requests per second.
            </p>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-12 mb-6">The Memory Bottleneck</h2>
            <p className="text-slate-600 mb-6">
              The primary challenge was Garbage Collection (GC) pauses. In high-throughput environments, even a 50ms pause can lead to significant latency spikes. We needed a language that offered <strong>memory safety without a garbage collector</strong>.
            </p>

            <blockquote className="border-l-4 border-[#FF7E00] bg-slate-50 p-8 rounded-r-3xl my-10">
              <p className="text-2xl font-black text-slate-900 tracking-tight italic">
                "We didn't just want faster code; we wanted predictable performance. Rust provided the deterministic execution our enterprise clients demand."
              </p>
            </blockquote>

            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-12 mb-6">Key Performance Gains</h2>
            <ul className="list-none space-y-4 p-0">
              {[
                "85% reduction in tail latency (p99)",
                "Zero data races thanks to the Borrow Checker",
                "Reduced server costs by 40% due to memory efficiency"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-700 font-bold">
                  <span className="w-2 h-2 bg-[#FF7E00] rounded-full" /> {item}
                </li>
              ))}
            </ul>

            <div className="my-16 p-10 bg-slate-900 rounded-[2.5rem] text-white">
              <h4 className="text-[#FF7E00] font-black uppercase tracking-[0.2em] text-xs mb-4">Pro Tip</h4>
              <p className="text-slate-300 font-medium leading-relaxed">
                When migrating from TypeScript to Rust, start by offloading your most compute-intensive functions via WebAssembly or FFI rather than rewriting the entire codebase at once.
              </p>
            </div>
          </article>

          {/* Tags */}
          <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap gap-2">
            {["Rust", "Performance", "Backend", "Scalability"].map(tag => (
              <span key={tag} className="px-4 py-2 bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-lg">
                #{tag}
              </span>
            ))}
          </div>
        </main>

        {/* Sidebar Right: TOC or Related */}
        <div className="lg:col-span-3 hidden lg:block sticky top-32 h-fit">
          <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-900 mb-6">In this article</h4>
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-sm font-bold text-[#FF7E00]">01. Introduction</a>
              <a href="#" className="text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors">02. Memory Management</a>
              <a href="#" className="text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors">03. The Result</a>
              <a href="#" className="text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors">04. Conclusion</a>
            </nav>
          </div>
        </div>
      </div>

      {/* --- Next Article Footer --- */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <p className="text-[10px] font-black text-[#FF7E00] uppercase tracking-[0.3em] mb-2">Next up</p>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter max-w-sm">
              The psychology of 'Neo-Brutalist' UI in enterprise software.
            </h3>
          </div>
          <button className="group w-20 h-20 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-[#FF7E00] hover:text-white transition-all hover:scale-110">
            <FiChevronRight size={32} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailsPage;