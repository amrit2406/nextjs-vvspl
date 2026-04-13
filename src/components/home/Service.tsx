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
  FiChevronRight
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
    description: "Transforming raw data into actionable insights through advanced Machine Learning models.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800&auto=format&fit=crop",
    icon: <FiBarChart />,
    theme: "from-purple-600 to-[#FF7E00]",
    slug: "ai-solutions"
  },
  {
    title: "Web Apps",
    description: "Tailor-made web solutions designed to scale with your business logic and enterprise needs.",
    image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=800&auto=format&fit=crop",
    icon: <FiCode />,
    theme: "from-[#FF7E00] to-indigo-600",
    slug: "web-apps"
  },
  {
    title: "Mobile Apps",
    description: "High-performance native and cross-platform mobile applications for iOS and Android.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    icon: <FiSmartphone />,
    theme: "from-[#FF7E00] to-cyan-500",
    slug: "mobile-apps"
  },
  {
    title: "E-Comm",
    description: "Scalable e-commerce platforms focused on exceptional user experience and maximizing conversions.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    icon: <FiShoppingCart />,
    theme: "from-emerald-500 to-teal-600",
    slug: "e-comm"
  },
  {
    title: "Cyber Security",
    description: "Proactive threat detection and robust security protocols to protect your digital assets.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    icon: <FiShield />,
    theme: "from-slate-700 to-slate-900",
    slug: "cyber-security"
  },
  {
    title: "Cloud Services",
    description: "Secure, scalable, and highly available cloud architectures using AWS, Azure, and GCP.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    icon: <FiServer />,
    theme: "from-orange-500 to-rose-500",
    slug: "cloud-services"
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
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
              Solutions that drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] via-orange-500 to-[#e67300]">innovation.</span>
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
            spaceBetween={30}
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
            }}
            className="services-swiper !pb-14"
          >
            {serviceData.map((service: ServiceItem) => (
              <SwiperSlide key={service.slug}>
                <div className="group relative h-[420px] w-full rounded-[2.5rem] overflow-hidden bg-white shadow-lg cursor-pointer">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.theme} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                  <div className="absolute bottom-0 inset-x-0 p-8">
                    <div className="translate-y-[100px] group-hover:translate-y-0 transition-transform duration-500 ease-out relative z-10">
                      <h4 className="text-3xl font-bold text-white mb-2 tracking-tight">
                        {service.title}
                      </h4>
                      
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 pt-3">
                        <p className="text-slate-200 text-sm leading-relaxed line-clamp-2 mb-6">
                          {service.description}
                        </p>

                        <Link 
                          href={`/services/${service.slug}`} 
                          className="inline-flex items-center space-x-3 bg-white text-slate-900 px-7 py-3.5 rounded-2xl font-bold hover:bg-[#FF7E00] hover:text-white transition-colors duration-300 shadow-lg"
                        >
                          <span>Explore Service</span>
                          <FiArrowRight />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className={`absolute top-0 inset-x-0 h-2 bg-gradient-to-r ${service.theme} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Global CTA */}
        <div className="mt-8 relative p-12 rounded-[3rem] bg-slate-900 overflow-hidden text-center md:text-left md:flex items-center justify-between">
          <div className="relative z-10">
            <h4 className="text-3xl font-bold text-white mb-2">Ready to architect your future?</h4>
            <p className="text-slate-400">Consult with our veterans to design your next technical ecosystem.</p>
          </div>
          <Link href="/contact" className="mt-8 md:mt-0 relative z-10 bg-gradient-to-r from-[#FF7E00] to-[#e67300] text-white px-10 py-5 rounded-2xl font-black transition-all hover:scale-105 flex items-center justify-center space-x-3 shadow-xl">
            <span>Book a Strategy Call</span>
            <FiArrowRight />
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .services-swiper .swiper-pagination-bullet-active {
          background: #FF7E00 !important;
          width: 24px;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default Services;