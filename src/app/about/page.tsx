"use client";
import React from 'react';
import { motion } from 'framer-motion';
import About from '@/components/home/About';
import MissionVision from '@/components/home/Mv';
import Leaders from '@/components/home/Leaders';

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Custom Hero Header for About Page */}
            <section className="relative pt-32 pb-16 overflow-hidden bg-slate-50">
                {/* Abstract Background Elements */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50" />
                    <div className="absolute top-20 -left-20 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-3xl opacity-60" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <span className="inline-block text-blue-600 font-bold tracking-[0.3em] text-xs mb-8 bg-white border border-blue-100 shadow-sm px-5 py-2 rounded-full">
                            DISCOVER VVSPL
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-[1.1]">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Story</span> Behind <br className="hidden md:block" /> Our Architecture.
                        </h1>
                        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
                            We are a collective of visionary engineers and strategists dedicated to transforming technical complexities into competitive, scalable advantages.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Body Components from Landing Page */}
            <div className="relative z-10 -mt-10 md:-mt-20">
                <About />
            </div>
            <MissionVision />
            <Leaders />
        </div>
    );
}
