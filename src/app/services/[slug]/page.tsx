"use client";
import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiHexagon,
  FiGlobe,
  FiShield,
  FiCpu,
  FiZap,
  FiCheck,
  FiActivity,
  FiServer,
  FiCode,
} from "react-icons/fi";
import Link from "next/link";

// --- DATA OBJECT ---
const SERVICES_CONTENT: any = {
  edtech: {
    title: "EduTech Systems",
    tagline: "Modern Learning Infrastructure",
    overview:
      "We engineer proprietary digital assets that scale. Our solutions are built for high concurrency and seamless global deployment, ensuring your infrastructure is structural rather than reactive.",
    detailedDesc:
      "VVSPL Tech creates AI-driven and cloud-native learning solutions that help educational institutions scale, adapt, and lead. We don't just build apps; we architect ecosystems that turn technical hurdles into growth opportunities through disciplined execution and system-thinking.",
    techStack: [
      {
        category: "Frontend",
        tools: "Next.js 14, Tailwind CSS, Framer Motion",
        icon: <FiCode />,
      },
      {
        category: "Backend",
        tools: "Node.js, GraphQL, PostgreSQL",
        icon: <FiServer />,
      },
      {
        category: "Infrastructure",
        tools: "AWS (EKS), Docker, Terraform",
        icon: <FiActivity />,
      },
    ],
    features: [
      {
        title: "High Concurrency",
        desc: "Engineered to handle millions of simultaneous users without latency.",
        letter: "H",
      },
      {
        title: "AI-Personalization",
        desc: "Adaptive learning paths driven by proprietary machine learning models.",
        letter: "A",
      },
      {
        title: "Secure Compliance",
        desc: "Strict adherence to global data privacy and student safety standards.",
        letter: "S",
      },
      {
        title: "Modular Growth",
        desc: "Microservices architecture that allows features to be added without downtime.",
        letter: "M",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070",
  },
  defence: {
    title: "Defence Grade Systems",
    tagline: "Mission-Critical Infrastructure",
    overview:
      "We design ultra-reliable, fault-tolerant systems engineered for high-security environments. Built with precision and redundancy, our platforms operate seamlessly under extreme conditions.",
    detailedDesc:
      "VVSPL Tech develops defence-grade digital systems that prioritize resilience, security, and deterministic performance. Our solutions are engineered with zero-failure tolerance, incorporating advanced encryption, real-time monitoring, and hardened infrastructure to support critical operations at scale.",
    techStack: [
      {
        category: "Frontend",
        tools: "Next.js, Secure UI Systems, Tailwind CSS",
        icon: <FiCode />,
      },
      {
        category: "Backend",
        tools: "Node.js, Go, PostgreSQL, Event-Driven Systems",
        icon: <FiServer />,
      },
      {
        category: "Infrastructure",
        tools: "AWS GovCloud, Kubernetes, Docker, Zero-Trust Security",
        icon: <FiActivity />,
      },
    ],
    features: [
      {
        title: "Zero Downtime",
        desc: "Highly redundant systems ensuring uninterrupted operations.",
        letter: "Z",
      },
      {
        title: "Advanced Security",
        desc: "End-to-end encryption and zero-trust architecture.",
        letter: "A",
      },
      {
        title: "Real-Time Monitoring",
        desc: "Continuous system intelligence and threat detection.",
        letter: "R",
      },
      {
        title: "Fail-Safe Design",
        desc: "Engineered to operate reliably under critical conditions.",
        letter: "F",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1581090700227-1e8a5b1b8e6b?q=80&w=2070",
  },
  hrms: {
    title: "HRMS & Workforce Systems",
    tagline: "Intelligent Workforce Management",
    overview:
      "We build scalable workforce platforms that streamline operations, enhance productivity, and provide real-time organizational insights.",
    detailedDesc:
      "VVSPL Tech engineers modern HRMS ecosystems that automate workforce processes and enable data-driven decision-making. From recruitment to payroll and performance analytics, our systems unify operations into a single intelligent platform.",
    techStack: [
      {
        category: "Frontend",
        tools: "Next.js, Tailwind CSS, Dashboard UI Systems",
        icon: <FiCode />,
      },
      {
        category: "Backend",
        tools: "Node.js, GraphQL, PostgreSQL",
        icon: <FiServer />,
      },
      {
        category: "Infrastructure",
        tools: "AWS, Docker, CI/CD Pipelines",
        icon: <FiActivity />,
      },
    ],
    features: [
      {
        title: "Process Automation",
        desc: "Automates payroll, attendance, and HR workflows.",
        letter: "P",
      },
      {
        title: "Employee Insights",
        desc: "Advanced analytics for workforce performance.",
        letter: "E",
      },
      {
        title: "Scalable Systems",
        desc: "Designed to grow with organizational expansion.",
        letter: "S",
      },
      {
        title: "Secure Data",
        desc: "Ensures confidentiality and compliance of HR data.",
        letter: "S",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070",
  },
  erp: {
    title: "ERP Systems",
    tagline: "Unified Business Architecture",
    overview:
      "We create integrated ERP platforms that centralize operations, optimize workflows, and enable seamless enterprise management.",
    detailedDesc:
      "VVSPL Tech builds robust ERP systems that unify finance, operations, inventory, and supply chain into a single cohesive ecosystem. Our solutions eliminate silos and empower organizations with real-time visibility and control.",
    techStack: [
      {
        category: "Frontend",
        tools: "Next.js, Enterprise UI Systems",
        icon: <FiCode />,
      },
      {
        category: "Backend",
        tools: "Node.js, Microservices, PostgreSQL",
        icon: <FiServer />,
      },
      {
        category: "Infrastructure",
        tools: "AWS, Kubernetes, Docker",
        icon: <FiActivity />,
      },
    ],
    features: [
      {
        title: "Centralized Control",
        desc: "All business processes unified in one system.",
        letter: "C",
      },
      {
        title: "Real-Time Data",
        desc: "Instant insights across departments.",
        letter: "R",
      },
      {
        title: "Process Optimization",
        desc: "Improves efficiency and reduces redundancy.",
        letter: "P",
      },
      {
        title: "Scalable Modules",
        desc: "Add features without disrupting operations.",
        letter: "S",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
  },
  crm: {
    title: "CRM Systems",
    tagline: "Customer-Centric Intelligence",
    overview:
      "We build CRM platforms that transform customer data into actionable insights and long-term engagement strategies.",
    detailedDesc:
      "VVSPL Tech develops intelligent CRM systems that help businesses manage leads, automate sales pipelines, and enhance customer relationships. Our platforms are designed to drive retention, personalization, and revenue growth.",
    techStack: [
      {
        category: "Frontend",
        tools: "Next.js, Tailwind CSS",
        icon: <FiCode />,
      },
      {
        category: "Backend",
        tools: "Node.js, GraphQL, PostgreSQL",
        icon: <FiServer />,
      },
      {
        category: "Infrastructure",
        tools: "AWS, Docker, Scalable APIs",
        icon: <FiActivity />,
      },
    ],
    features: [
      {
        title: "Lead Automation",
        desc: "Streamlines lead capture and nurturing.",
        letter: "L",
      },
      {
        title: "Sales Insights",
        desc: "Advanced analytics for decision-making.",
        letter: "S",
      },
      {
        title: "Customer Tracking",
        desc: "360° view of customer interactions.",
        letter: "C",
      },
      {
        title: "Scalable Pipelines",
        desc: "Flexible systems for growing businesses.",
        letter: "S",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070",
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    tagline: "Design That Performs",
    overview:
      "We craft intuitive, high-performance interfaces that balance aesthetics with usability and conversion.",
    detailedDesc:
      "VVSPL Tech designs user-centric digital experiences grounded in research, usability, and modern design systems. Our approach ensures every interface is visually compelling, functionally efficient, and optimized for engagement.",
    techStack: [
      {
        category: "Design",
        tools: "Figma, Design Systems, Prototyping",
        icon: <FiCode />,
      },
      {
        category: "Frontend",
        tools: "Next.js, Tailwind CSS",
        icon: <FiServer />,
      },
      {
        category: "Animation",
        tools: "Framer Motion, Microinteractions",
        icon: <FiActivity />,
      },
    ],
    features: [
      {
        title: "User-Centric Design",
        desc: "Focused on usability and accessibility.",
        letter: "U",
      },
      {
        title: "Modern Aesthetics",
        desc: "Clean and scalable design systems.",
        letter: "M",
      },
      {
        title: "Performance Driven",
        desc: "Optimized for speed and engagement.",
        letter: "P",
      },
      {
        title: "Conversion Focus",
        desc: "Designed to maximize user actions.",
        letter: "C",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2070",
  },
  "back-office-automation": {
    title: "Back Office Automation",
    tagline: "Operational Efficiency Engine",
    overview:
      "We automate repetitive processes to improve efficiency, reduce errors, and free up valuable human resources.",
    detailedDesc:
      "VVSPL Tech builds automation systems that streamline internal operations, from data processing to reporting workflows. Our solutions minimize manual intervention and enhance operational accuracy at scale.",
    techStack: [
      {
        category: "Automation",
        tools: "Node.js, Workflow Engines, APIs",
        icon: <FiCode />,
      },
      {
        category: "Backend",
        tools: "PostgreSQL, Event Systems",
        icon: <FiServer />,
      },
      {
        category: "Infrastructure",
        tools: "AWS, Docker",
        icon: <FiActivity />,
      },
    ],
    features: [
      {
        title: "Process Automation",
        desc: "Eliminates repetitive manual tasks.",
        letter: "P",
      },
      {
        title: "Error Reduction",
        desc: "Improves accuracy and consistency.",
        letter: "E",
      },
      {
        title: "Scalable Workflows",
        desc: "Handles growing operational demands.",
        letter: "S",
      },
      {
        title: "Real-Time Reporting",
        desc: "Instant insights into operations.",
        letter: "R",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
  },
  "digital-marketing": {
    title: "Digital Marketing",
    tagline: "Growth Through Strategy",
    overview:
      "We design data-driven marketing strategies that maximize reach, engagement, and ROI.",
    detailedDesc:
      "VVSPL Tech delivers performance-focused digital marketing solutions that combine analytics, creativity, and automation. From SEO to paid campaigns, we help brands scale visibility and drive measurable growth.",
    techStack: [
      {
        category: "SEO",
        tools: "Technical SEO, Content Optimization",
        icon: <FiCode />,
      },
      { category: "Ads", tools: "Google Ads, Meta Ads", icon: <FiServer /> },
      {
        category: "Analytics",
        tools: "GA4, Data Tracking, Funnels",
        icon: <FiActivity />,
      },
    ],
    features: [
      {
        title: "Data-Driven Strategy",
        desc: "Decisions backed by analytics.",
        letter: "D",
      },
      {
        title: "Performance Marketing",
        desc: "Optimized campaigns for ROI.",
        letter: "P",
      },
      {
        title: "SEO Optimization",
        desc: "Improves organic visibility.",
        letter: "S",
      },
      {
        title: "Scalable Growth",
        desc: "Strategies that grow with your business.",
        letter: "S",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070",
  },
  "it-staffing": {
    title: "IT Staffing",
    tagline: "Talent That Delivers",
    overview:
      "We connect businesses with highly skilled tech professionals tailored to their project needs.",
    detailedDesc:
      "VVSPL Tech provides flexible IT staffing solutions that help organizations scale teams quickly and efficiently. Our talent pool is curated to ensure technical excellence, cultural fit, and immediate productivity.",
    techStack: [
      {
        category: "Domains",
        tools: "Frontend, Backend, DevOps, AI/ML",
        icon: <FiCode />,
      },
      {
        category: "Process",
        tools: "Screening, Technical Evaluation",
        icon: <FiServer />,
      },
      {
        category: "Engagement",
        tools: "Contract, Full-Time, Remote",
        icon: <FiActivity />,
      },
    ],
    features: [
      {
        title: "Skilled Talent",
        desc: "Access to top-tier professionals.",
        letter: "S",
      },
      {
        title: "Fast Hiring",
        desc: "Quick onboarding and deployment.",
        letter: "F",
      },
      {
        title: "Flexible Models",
        desc: "Adaptable hiring structures.",
        letter: "F",
      },
      {
        title: "Quality Assurance",
        desc: "Rigorous screening process.",
        letter: "Q",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070",
  },
};

const ServiceDetailPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const content = SERVICES_CONTENT[slug] || SERVICES_CONTENT["edtech"];

  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-[#044DB6] selection:text-white">
      {/* --- 1. HERO SECTION --- */}
      <section className="pt-40 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] uppercase">
              {content.title.split(" ")[0]} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] via-orange-500 to-[#e67300] italic">
                {content.title.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <p className="mt-8 text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
              {content.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 2. OVERVIEW SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-[2px] w-12 bg-orange-500" />
              <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">
                Overview
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter">
              The <span className="italic text-orange-500">Foundation</span> of
              Success.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6 italic font-medium">
              "{content.overview}"
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              {content.detailedDesc}
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-orange-500/5 rounded-[2.5rem] blur-2xl" />
            <img
              src={content.image}
              alt="Overview"
              className="relative rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* --- 3. TECH STACK SECTION (Distinct Minimalist Section) --- */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-12 bg-orange-500" />
                <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">
                  Technical DNA
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
                Built with{" "}
                <span className="italic text-orange-400">Precision</span>.
              </h2>
            </div>
            <p className="text-slate-400 max-w-xs text-sm">
              Standardized frameworks ensure consistent delivery across every
              service engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-800 border border-slate-800 rounded-2xl overflow-hidden">
            {content.techStack.map((tech: any, i: number) => (
              <div
                key={i}
                className="bg-slate-900 p-10 hover:bg-slate-800/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-orange-500 mb-8 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  {tech.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 tracking-tight uppercase">
                  {tech.category}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  {tech.tools}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. SERVICE FEATURES (Matched I.M.P.A.C.T Style) --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[2px] w-12 bg-orange-500" />
            <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">
              Core Features
            </span>
            <span className="h-[2px] w-12 bg-orange-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6 uppercase">
            Service{" "}
            <span className="text-orange-500 italic underline decoration-slate-200 underline-offset-8">
              Capabilities
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {content.features.map((feature: any, i: number) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-xl transition duration-300"
            >
              <div className="absolute -top-5 left-6 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#FF7E00] to-orange-500 text-white font-black text-xl shadow-lg">
                {feature.letter}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-6 mb-4 group-hover:text-orange-500 transition uppercase">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. FINAL CTA --- */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
            Let's Build The <span className="text-orange-500 italic">Next</span>{" "}
            .
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-lg font-bold text-lg hover:bg-orange-500 transition-colors flex items-center justify-center gap-2"
            >
              Get Started <FiArrowRight />
            </Link>

            <Link
              href="tel:+917894689818"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-lg font-bold text-lg hover:bg-slate-50 transition-colors text-center"
            >
              Call Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
