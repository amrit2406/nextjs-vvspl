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
    title: "Edu tech",
    description:
      "Innovative digital learning platforms, LMS solutions, and AI-driven tools designed to enhance education delivery and student engagement.",
    image: "/assets/product2.png",
    icon: <FiBarChart />,
    theme: "from-purple-600 to-[#FF7E00]",
    slug: "edtech",
  },
  {
    title: "HRMS & Workflow",
    description:
      "Comprehensive HR management systems with automated workflows to streamline recruitment, payroll, attendance, and employee lifecycle processes.",
    image:
      "https://static.vecteezy.com/system/resources/previews/054/696/791/non_2x/hrms-infographic-circles-flowchart-human-resource-management-system-employment-strategy-visualization-diagram-with-5-steps-circular-info-graphic-editable-vector.jpg",
    icon: <FiCode />,
    theme: "from-[#FF7E00] to-indigo-600",
    slug: "hrms",
  },
  {
    title: "ERP Systems",
    description:
      "Integrated enterprise resource planning solutions to manage operations, finance, inventory, and business processes in a unified platform.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzQSQ6veIW1vVJSYMv6Ke3sK9me2kqrkrmYg&s",
    icon: <FiSmartphone />,
    theme: "from-[#FF7E00] to-cyan-500",
    slug: "erp",
  },
  {
    title: "CRM",
    description:
      "Customer relationship management systems that help businesses track leads, manage sales pipelines, and improve customer engagement.",
    image:
      "https://img.freepik.com/free-vector/isometric-crm-illustration_52683-83950.jpg?semt=ais_hybrid&w=740&q=80",
    icon: <FiShoppingCart />,
    theme: "from-emerald-500 to-teal-600",
    slug: "crm",
  },
  {
    title: "UI/UX Design",
    description:
      "User-centric design solutions focused on creating intuitive, engaging, and visually appealing interfaces that enhance user experience.",
    image:
      "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?semt=ais_hybrid&w=740&q=80",
    icon: <FiShield />,
    theme: "from-slate-700 to-slate-900",
    slug: "ui-ux-design",
  },
  {
    title: "Back Office Automation",
    description:
      "Scalable and secure cloud solutions including deployment, migration, and management across AWS, Azure, and Google Cloud platforms.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/011/432/157/small/workforce-organization-and-management-workflow-processes-workflow-process-design-and-automation-boost-your-office-productivity-concept-flat-modern-illistration-vector.jpg",
    icon: <FiServer />,
    theme: "from-orange-500 to-rose-500",
    slug: "back-office-automation",
  },
  {
    title: "Digital marketing",
    description:
      "Data-driven digital marketing strategies including SEO, social media, content marketing, and paid campaigns to grow your online presence.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/015/881/035/small/isometric-flat-3d-illustration-social-media-strategy-concept-digital-marketing-startup-business-vector.jpg",
    icon: <FiServer />,
    theme: "from-orange-500 to-rose-500",
    slug: "digital-marketing",
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] via-orange-500 to-[#e67300] italic">
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
            // pagination={{ clickable: true, dynamicBullets: true }}
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
                  <div className="relative h-50 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Subtle gradient overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* 2. Content Wrapper with flex-grow */}
                  <div className="flex flex-col flex-grow p-6">
                    <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                      {service.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-4 flex-grow">
                      {service.description}
                    </p>
                    <div className="mt-6 pt-6 border-t border-slate-50">
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
            <div className="absolute -inset-4 rounded-[2.5rem] bg-blue-100/60" />

            {/* Middle Card */}
            <div className="absolute -inset-2 rounded-[2.5rem] bg-blue-50/80 border border-blue-100" />

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
