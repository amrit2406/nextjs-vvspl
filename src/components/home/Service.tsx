"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowRight,
  FiCode,
  FiServer,
  FiSmartphone,
  FiShield,
  FiBarChart,
  FiShoppingCart,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

// 1. Import Navigation module
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode, Navigation } from "swiper/modules";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/free-mode";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  theme: string;
  slug: string;
}

export const serviceData: ServiceItem[] = [
  {
    title: "AI Solutions",
    description:
      "Transforming raw data into actionable insights through advanced Machine Learning models.",
    image:
      "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800&auto=format&fit=crop",
    icon: <FiBarChart />,
    theme: "from-purple-600 to-[#FF7E00]",
    slug: "ai-solutions",
  },
  {
    title: "Web Apps",
    description:
      "Tailor-made web solutions designed to scale with your business logic and enterprise needs.",
    image:
      "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=800&auto=format&fit=crop",
    icon: <FiCode />,
    theme: "from-[#FF7E00] to-indigo-600",
    slug: "web-apps",
  },
  {
    title: "Mobile Apps",
    description:
      "High-performance native and cross-platform mobile applications for iOS and Android.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    icon: <FiSmartphone />,
    theme: "from-[#FF7E00] to-cyan-500",
    slug: "mobile-apps",
  },
  {
    title: "E-Comm",
    description:
      "Scalable e-commerce platforms focused on user experience and maximizing conversions.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    icon: <FiShoppingCart />,
    theme: "from-emerald-500 to-teal-600",
    slug: "e-comm",
  },
  {
    title: "Cyber Security",
    description:
      "Proactive threat detection and robust security protocols to protect your digital assets.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    icon: <FiShield />,
    theme: "from-slate-700 to-slate-900",
    slug: "cyber-security",
  },
  {
    title: "Cloud Services",
    description:
      "Secure, scalable, and highly available cloud architectures using AWS, Azure, and GCP.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    icon: <FiServer />,
    theme: "from-orange-500 to-rose-500",
    slug: "cloud-services",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-orange-50/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-[1px] bg-[#FF7E00]" />
              <span className="text-[#FF7E00] font-bold uppercase tracking-[0.3em] text-[10px]">
                Our Expertise
              </span>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-slate-900 mt-2 tracking-tighter"
            >
              Solutions that drive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] via-orange-500 to-[#e67300]">
                innovation.
              </span>
            </motion.h3>
          </div>

          {/* Custom Navigation Buttons Container */}
          <div className="flex gap-3 mb-2">
            <button className="swiper-prev-btn w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#FF7E00] hover:border-[#FF7E00] hover:text-white transition-all duration-300">
              <FiChevronLeft size={24} />
            </button>
            <button className="swiper-next-btn w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#FF7E00] hover:border-[#FF7E00] hover:text-white transition-all duration-300">
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="pb-10 relative">
          <Swiper
            modules={[Pagination, Autoplay, FreeMode, Navigation]}
            spaceBetween={26}
            slidesPerView={1}
            loop={true} // Infinite looping
            navigation={{
              prevEl: ".swiper-prev-btn",
              nextEl: ".swiper-next-btn",
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            freeMode={true}
            breakpoints={{
              1024: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              450: { slidesPerView: 1 },
            }}
            className="services-swiper !pb-14"
          >
            {serviceData.map((service: ServiceItem) => (
              <SwiperSlide key={service.slug}>
                <div className="group flex flex-col h-full bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* 1. Fixed Aspect Ratio Image Container */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Subtle gradient overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* 2. Content Wrapper with flex-grow */}
                  <div className="flex flex-col flex-grow p-8">
                    <h4 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                      {service.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-4 flex-grow">
                      {service.description}
                    </p>
                    <div className="mt-8 pt-6 border-t border-slate-50">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-[#FF7E00] font-bold group/link"
                      >
                        <span className="relative">
                          Explore Service
                          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FF7E00] transition-all duration-300 group-hover/link:w-full" />
                        </span>
                        <FiArrowRight className="transition-transform duration-300 group-hover/link:translate-x-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Global CTA */}
        <div className="mt-12 relative flex justify-center">
          {/* Background subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-transparent rounded-[2rem]" />

          {/* Card Stack */}
          <div className="relative w-full max-w-7xl">
            {/* Back Card */}
            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[2.5rem] bg-blue-100/60" />

            {/* Middle Card */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2.5rem] bg-blue-50/80 border border-blue-100" />

            {/* Main Card */}
            <div className="relative rounded-[2rem] bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Content */}
              <div className="max-w-lg text-center md:text-left">
                <h4 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                  Let’s turn your idea into a{" "}
                  <span className="text-[#FF7E00]">powerful product</span>
                </h4>

                <p className="mt-3 text-slate-600">
                  We design scalable systems that actually perform.
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col items-center gap-2">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#FF7E00] text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 hover:scale-105"
                >
                  <span>Start a Project</span>
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>

                <span className="text-xs text-slate-400">
                  Free consultation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .services-swiper .swiper-pagination-bullet-active {
          background: #ff7e00 !important;
          width: 24px;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default Services;
