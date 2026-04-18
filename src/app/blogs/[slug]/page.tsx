"use client";
import React, { use } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FiTwitter, FiLinkedin, FiLink, FiArrowLeft, FiArrowRight, FiClock } from "react-icons/fi";

// --- Mock Data (Should ideally come from a shared lib or CMS) ---
const posts = [
  {
    slug: "rust-migration-throughput",
    category: "Engineering",
    title: "Why we migrated our core engine to Rust for 10x throughput",
    date: "Oct 12, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100",
    author: "Marcus Thorne",
    authorRole: "Lead Architect",
    figCaption: "Fig 1.0 — Distributed System Architecture and Rust Integration",
    intro: "Legacy systems are often held together by hope and technical debt. At VVSPL, we realized that our high-scale Node.js infrastructure was hitting a performance ceiling at 100k+ concurrent requests, necessitating a shift to a more memory-safe and performant language.",
    sections: [
      {
        title: "The Memory Bottleneck",
        content: "The primary challenge was Garbage Collection (GC) pauses. In high-throughput environments, even a 50ms pause can lead to significant latency spikes. We needed a language that offered memory safety without a garbage collector to ensure deterministic performance."
      }
    ],
    quote: "Predictability is a feature. In the world of high-scale backend, deterministic execution is the difference between a stable system and a cascade failure.",
    conclusionTitle: "Outcome & Metrics",
    conclusion: "After six months of incremental migration, the results were undeniable. Not only did throughput increase by 10x, but our operational overhead and infrastructure costs dropped significantly."
  },
  {
    slug: "proprietary-ai-security-risk",
    category: "Future",
    title: "Proprietary AI: Why third-party LLMs are a security risk",
    date: "Sep 28, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
    author: "Sarah Chen",
    authorRole: "AI Security Lead",
    figCaption: "Fig 2.0 — Potential attack vectors in third-party LLM integrations",
    intro: "As organizations rush to integrate generative AI, many are overlooking the fundamental security risks associated with sending sensitive proprietary data to third-party providers.",
    sections: [
      {
        title: "The Data Leakage Reality",
        content: "Every prompt sent to a public LLM potentially becomes training data for future iterations. For enterprises with trade secrets or sensitive PII, this represents an unacceptable risk to intellectual property and regulatory compliance."
      }
    ],
    quote: "If you don't control the weights, you don't control the security. Localized, private AI models are the only path forward for secure enterprise intelligence.",
    conclusionTitle: "Building a Private AI Moat",
    conclusion: "Transitioning to self-hosted or VPC-isolated models allows businesses to leverage AI's power while maintaining 100% data sovereignty and reducing reliance on external black-box providers."
  },
  {
    slug: "scaling-nationalities-culture",
    category: "Culture",
    title: "Scaling to 20 nationalities without losing our soul",
    date: "Sep 15, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100",
    author: "Elena Rodriguez",
    authorRole: "Head of People",
    figCaption: "Fig 3.0 — Our distributed team across 4 continents",
    intro: "Hyper-growth is often the enemy of culture. At VVSPL, we've scaled our team to over 20 nationalities while intentionally protecting the values that made us successful from day one.",
    sections: [
      {
        title: "Async-First Communication",
        content: "When your team spans 12 time zones, synchronous meetings become a bottleneck. We shifted our entire workflow to documentation-first, ensuring that knowledge is accessible regardless of when a team member logs in."
      }
    ],
    quote: "Culture isn't about office perks or happy hours; it's about the systems and behaviors that empower people to do their best work, regardless of where they were born.",
    conclusionTitle: "The Resulting Synergy",
    conclusion: "By embracing diversity as a technical asset rather than just a HR metric, we've built a more resilient organization capable of solving global problems with local insights."
  },
];

const ProfessionalBlog = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params);
  const post = posts.find((p) => p.slug === slug);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 150, damping: 30 });

  if (!post) return <div className="min-h-screen flex items-center justify-center font-bold">Post Not Found</div>;

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans antialiased">
      {/* Subtle Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-indigo-600 origin-left z-50" 
        style={{ scaleX }} 
      />

      {/* --- Article Hero --- */}
      <header className="pt-24 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase px-3 py-1 bg-slate-100 rounded text-slate-600">
              {post.category}
            </span>
            <span className="text-sm text-slate-400">{post.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
            {post.title}
          </h1>

          <div className="flex items-center justify-between py-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <img 
                src={post.authorImage} 
                className="w-10 h-10 rounded-full grayscale" 
                alt={post.author} 
              />
              <div>
                <span className="text-sm font-bold block">{post.author}</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest">{post.date}</span>
              </div>
            </div>
            <div className="flex gap-4 text-slate-400">
              <FiTwitter className="hover:text-indigo-600 cursor-pointer transition-colors" />
              <FiLinkedin className="hover:text-indigo-600 cursor-pointer transition-colors" />
              <FiLink className="hover:text-indigo-600 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </header>

      {/* --- Main Content --- */}
      <main className="max-w-3xl mx-auto px-6 pb-32">
        <figure className="mb-12">
          <img 
            src={post.image} 
            alt={post.title}
            className="rounded-2xl w-full object-cover aspect-video shadow-2xl shadow-slate-200"
          />
          <figcaption className="text-center text-xs text-slate-400 mt-4 font-medium uppercase tracking-widest">
            {post.figCaption}
          </figcaption>
        </figure>

        <article className="prose prose-slate prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-slate-700">
            {post.intro}
          </p>

          {post.sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-bold mt-12 mb-4">{section.title}</h3>
              <p>{section.content}</p>
            </div>
          ))}

          <blockquote className="border-l-4 border-indigo-600 pl-6 py-2 my-10 not-italic">
            <p className="text-2xl font-serif text-slate-800 italic">
              "{post.quote}"
            </p>
          </blockquote>

          <h3 className="text-2xl font-bold mt-12 mb-4">{post.conclusionTitle}</h3>
          <p>{post.conclusion}</p>
        </article>

        {/* --- Post-Article Navigation --- */}
        {/* <div className="mt-24 pt-12 border-t border-slate-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <button className="flex items-center gap-3 text-slate-400 hover:text-slate-900 transition-colors font-semibold group">
              <div className="p-2 rounded-full bg-slate-50 group-hover:bg-slate-100">
                <FiArrowLeft />
              </div>
              Back to all articles
            </button>

            <div className="flex flex-col items-end text-right">
              <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1">Next Article</span>
              <a href="#" className="text-lg font-bold hover:underline flex items-center gap-2">
                Neo-Brutalist UI Trends <FiArrowRight />
              </a>
            </div>
          </div>
        </div> */}
      </main>

      {/* --- Professional Newsletter Footer --- */}
      <footer className="bg-slate-50 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h4 className="text-2xl font-bold mb-4">Deep dives, delivered.</h4>
          <p className="text-slate-500 mb-8 text-sm">Join 5,000+ engineers receiving our monthly technical briefs.</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Work email" 
              className="flex-1 px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
            <button className="px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-black transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfessionalBlog;