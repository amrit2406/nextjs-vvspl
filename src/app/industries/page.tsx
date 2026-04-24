"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";
import { 
  FiArrowRight, FiCheck, FiBookOpen, FiMap, 
  FiBriefcase, FiTruck, FiActivity, FiShield 
} from "react-icons/fi";
import Link from "next/link";

// Enhanced DetailedBlock with mobile-safe animations
const DetailedBlock = ({ title, desc, points, image, isReversed, color, icon: Icon }: any) => {
  // Animation variants to handle responsiveness gracefully
  const imageVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: isReversed ? 20 : -20, // Reduced offset to prevent massive overflow
      y: 20 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 py-12 items-center border-b border-slate-100 last:border-0 overflow-hidden`}>
      {/* IMAGE SIDE */}
      <motion.div 
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full lg:w-1/2"
      >
        <div className="relative group">
          <div className={`absolute -inset-4 bg-gradient-to-r ${color} opacity-5 blur-2xl group-hover:opacity-15 transition duration-700`} />
          <div className="relative aspect-[4/3] rounded-[2rem] md:rounded-[1.5rem] overflow-hidden border border-slate-200 shadow-xl bg-slate-50">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </div>
        </div>
      </motion.div>

      {/* TEXT SIDE */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full lg:w-1/2 px-2"
      >
        <h4 className="text-2xl md:text-3xl font-black text-slate-900 mb-5 tracking-tight">
          {title}
        </h4>
        <p className="text-slate-600 mb-8 leading-relaxed text-base text-lg">
          {desc}
        </p>
        
        {/* Optional: Restored Points logic if you want them back later */}
        {/* {points && points.length > 0 && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
            {points.map((p: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-slate-700">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[#FF7E00]">
                  <FiCheck size={12} strokeWidth={3} />
                </span>
                <span className="text-xs font-bold uppercase tracking-tight text-slate-600">{p}</span>
              </li>
            ))}
          </ul>
        )} */}
      </motion.div>
    </div>
  );
};

const IndustryPage = () => {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden"> {/* Critical: overflow-x-hidden on wrapper */}
      
      {/* --- Page Hero --- */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight">
              Industries<span className="text-[#FF7E00]">.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
              Tailored digital ecosystems designed for the unique challenges of global sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 1: LIFESTYLE & ESSENTIALS --- */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <DetailedBlock 
            icon={FiBookOpen}
            title="Education – Introducing EddVa"
            desc="EDDVA is an all-in-one education platform streamlining administration, learning, communication, and performance tracking. Driven by AI-powered features and a focus on student advancement, it offers live and recorded lectures, interactive battle arenas for engaging learning, and automates attendance, exams, and parent engagement enhancing efficiency and transparency."
            points={["LMS Development", "Student Portals", "Exam Systems", "Content Digitization"]}
            image="/assets/product2.png"
            isReversed={false}
            color="from-[#FF7E00] to-orange-400"
          />

          <DetailedBlock 
            icon={FiMap}
            title="Defence – AI-Driven Tactical Surveillance & Drone Intelligence"
            desc="Built for mission-critical operations, this advanced solution integrates drones and LORROS
with data-driven automation. Powered by AI-led DIATP—detect, identify, analyze, track, and
plot—with intelligent prioritization of targets, it strengthens national security with precision,
awareness, and operational readiness."
            points={["Booking Engines", "Travel CRM", "Itinerary Planners", "Payment Gateways"]}
            image="https://t4.ftcdn.net/jpg/08/81/63/37/360_F_881633751_L67MxhHEpdWCwGlLNs621ZEoVbDELCa4.jpg"
            isReversed={true}
            color="from-[#FF7E00] to-orange-400"
          />

          <DetailedBlock 
            icon={FiMap}
            title="Logistics – Smart Transport & Fleet Management"
            desc="Drive efficiency with all-in-one fleet, trip, and logistics management powered by real-time
tracking & insights. Monitor vehicle, driver, trip, fuel, maintenance, billing, and ledgers while
optimizing routes, reducing costs, and improving operational efficiency through advanced
analytics and complete visibility."
            points={["Booking Engines", "Travel CRM", "Itinerary Planners", "Payment Gateways"]}
            image="https://img.freepik.com/premium-photo/smart-fleet-management-system-visualized-with-connected-trucks-digital-network_867452-38824.jpg"
            isReversed={false}
            color="from-[#FF7E00] to-orange-400"
          />
        </div>
      </section>

      {/* --- SECTION 2: INFRASTRUCTURE & SERVICE --- */}
      <section className="py-12 md:py-24 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <DetailedBlock 
            icon={FiBriefcase}
            title="Hospitality & Hotel Management"
            desc="Elevate guest experiences with VVSPL’s complete hotel management solution; from
managing bookings, room service, banquets to events like weddings or corporate meetings
and beyond. Gain real-time insights with sales tracking, conversion analytics, and guest data
ensuring seamless operations, happier customers, stronger sales, and efficient management."
            points={["Property Management", "Guest Experiences", "Room Automation", "Loyalty Programs"]}
            image="https://img.freepik.com/free-vector/hotel-icons-background-design_1284-908.jpg?semt=ais_hybrid&w=740&q=80"
            isReversed={true}
            color="from-[#044DB6] to-blue-500"
          />

          <DetailedBlock 
            icon={FiTruck}
            title="Tourism – Smart Travel & Experience Management"
            desc="A comprehensive solution for managing travel bookings, itineraries, and customer
experiences. Coordinate vendors, track demand, and deliver personalized journeys while
using analytics to enhance offerings, boost conversions, and ensure seamless travel
operations."
            points={["Fleet Tracking", "Route Optimization", "Warehouse Tech", "Last-mile Delivery"]}
            image="https://img.freepik.com/free-vector/travel-landmarks-concept-poster_1284-9278.jpg?semt=ais_hybrid&w=740&q=80"
            isReversed={false}
            color="from-[#044DB6] to-blue-500"
          />
        </div>
      </section>

      {/* --- SECTION 3: HEALTH & PUBLIC SECTOR --- */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <DetailedBlock 
            icon={FiActivity}
            title="Mines – Smart Mining Operations Management"
            desc="A comprehensive platform designed to streamline mining operations from resource planning
and equipment tracking to workforce and safety management. Monitor production, manage
inventory, track vehicle movement, and ensure compliance; driving efficiency, safety, and
data-driven decision-making across mining operations."
            points={["Telemedicine Hubs", "EHR/EMR Systems", "Patient Portals", "Health Analytics"]}
            image="https://t4.ftcdn.net/jpg/02/93/63/43/360_F_293634342_BDm8TQmRmQFceP97O2Td9ITKkwCeKnvL.jpg"
            isReversed={true}
            color="from-[#FF7E00] to-orange-400"
          />

          <DetailedBlock 
            icon={FiShield}
            title="Hospitals – AI-Powered CCTV Surveillance"
            desc="VVSPL has introduced an intelligent surveillance system designed for hospitals, leveraging
AI to monitor premises, detect anomalies, and enhance patient and staff safety. From real-
time alerts to activity tracking and compliance monitoring, ensure secure, efficient, and well-
managed healthcare environments."
            points={["E-Gov Portals", "Secure Databases", "Public Portals", "Regulatory Tech"]}
            image="https://img.freepik.com/premium-photo/ai-driven-home-security-analytics-cctv-systems-analyzing-suspicious-activity-detection_937679-61663.jpg"
            isReversed={false}
            color="from-[#FF7E00] to-orange-400"
          />
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 md:py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FF7E00] rounded-full blur-[120px]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-10 leading-tight">
            Ready to disrupt your <br /> 
            <span className="text-[#FF7E00]">industry landscape?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="px-10 py-4 bg-[#FF7E00] text-white rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-[#FF7E00]/20 text-sm md:text-base">
              Explore Services
            </Link>
            <Link href="tel:+917894689818" className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-black hover:bg-white/20 transition-all text-sm md:text-base">
              Call Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryPage;
