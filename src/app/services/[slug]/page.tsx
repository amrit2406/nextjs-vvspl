import { notFound } from "next/navigation";
import { FiArrowLeft, FiCode, FiServer, FiSmartphone, FiShield, FiBarChart, FiShoppingCart, FiCheck, FiArrowRight, FiLayers } from "react-icons/fi";
import Link from "next/link";

const servicesData = [
    { title: "AI Solutions", icon: <FiBarChart />, theme: "from-purple-600 to-blue-600", slug: "ai-solutions" },
    { title: "Web Apps", icon: <FiCode />, theme: "from-blue-600 to-indigo-600", slug: "web-apps" },
    { title: "Mobile Apps", icon: <FiSmartphone />, theme: "from-blue-500 to-cyan-500", slug: "mobile-apps" },
    { title: "E-Comm", icon: <FiShoppingCart />, theme: "from-emerald-500 to-teal-600", slug: "e-comm" },
    { title: "Cyber Security", icon: <FiShield />, theme: "from-slate-700 to-slate-900", slug: "cyber-security" },
    { title: "Cloud Services", icon: <FiServer />, theme: "from-orange-500 to-rose-500", slug: "cloud-services" },
];

const serviceDetails: Record<string, {
    tagline: string;
    overviewHeader: string;
    longDescription: string;
    benefits: string[];
    capabilities: { title: string, desc: string }[]
}> = {
    "ai-solutions": {
        tagline: "Cognitive Intelligence",
        overviewHeader: "Transforming dormant data into intelligent action.",
        longDescription: "Our AI Solutions span the full spectrum of modern artificial intelligence. We do not just implement APIs; we engineer robust, low-latency machine learning pipelines that continuously evolve within your ecosystem. From predictive analytics that anticipate market shifts to seamless LLM integration for cognitive enterprise automation, we convert your dormant data lakes into active engines of intelligence.",
        benefits: ["Scales automated workflows by up to 50%", "Drives 3x faster metric-based decision making", "Zero-hallucination, secure VPC deployments"],
        capabilities: [
            { title: "Generative AI & LLMs", desc: "Custom fine-tuned language models deployed securely within your infrastructure." },
            { title: "Predictive Analytics", desc: "Forecasting market trends and operational bottlenecks with extreme precision." },
            { title: "Computer Vision", desc: "Automated optical character recognition and real-time video stream analysis." },
            { title: "NLP Engines", desc: "Context-aware sentiment analysis and conversational intelligence systems." }
        ]
    },
    "web-apps": {
        tagline: "Enterprise Web Architecture",
        overviewHeader: "High-octane web applications capable of massive concurrency.",
        longDescription: "We engineer enterprise-grade web platforms that serve as the digital backbone of your operations. Utilizing cutting-edge frameworks like Next.js, React, and Node, our systems are built from the ground up for infinite scalability, bulletproof security, and seamless user experiences under peak traffic loads.",
        benefits: ["Optimized Core Web Vitals for SEO dominance", "Server-Side Rendering (SSR) for blazing performance", "Micro-frontend modularity for isolated updates"],
        capabilities: [
            { title: "Modern SPA/PWA", desc: "Lightning-fast Single Page and Progressive Web Applications." },
            { title: "B2B Portals", desc: "Secure, highly regulated dashboard portals for enterprise clients." },
            { title: "Real-time Interfaces", desc: "WebSockets and Server-Sent Events for live data streaming." },
            { title: "Headless Architectures", desc: "Decoupled front-ends integrating with multiple microservices." }
        ]
    },
    "mobile-apps": {
        tagline: "Native & Cross-Platform",
        overviewHeader: "Command the mobile screen with uncompromising performance.",
        longDescription: "We build intuitive, high-performance mobile experiences meticulously optimized for iOS and Android. Whether leveraging native Swift and Kotlin for raw hardware performance, or deploying cross-platform React Native engines for rapid iteration, we ensure your mobile presence is deeply engaging and fundamentally stable.",
        benefits: ["Sub-second interaction response times", "Seamless offline capabilities", "Direct hardware acceleration access"],
        capabilities: [
            { title: "Native iOS Development", desc: "Swift/Objective-C crafted specifically for the Apple ecosystem." },
            { title: "Native Android Development", desc: "Kotlin architectures built for vast Android fragmentation." },
            { title: "Cross-Platform Frameworks", desc: "React Native and Flutter pipelines for unified codebases." },
            { title: "Wearable Integrations", desc: "Expanding logic into WatchOS, WearOS, and IoT devices." }
        ]
    },
    "e-comm": {
        tagline: "Scalable Commerce",
        overviewHeader: "Optimized infrastructures designed for maximum conversion.",
        longDescription: "We craft advanced e-commerce infrastructures designed for sub-second load times and high-frequency transaction stability. Rejecting rigid monolithic systems, we implement headless commerce APIs, custom checkout flows, and secure gateway integrations to dramatically reduce cart abandonment.",
        benefits: ["Handles high-load flash-sale traffic events", "Omnichannel inventory synchronization", "PCI-DSS compliant payment pipelines"],
        capabilities: [
            { title: "Headless Commerce", desc: "Decoupled front-ends utilizing Shopify Plus or Swell endpoints." },
            { title: "Custom Checkouts", desc: "Frictionless conversion tunnels optimized via A/B testing." },
            { title: "Global Gateways", desc: "Stripe, PayPal, and multi-currency blockchain integrations." },
            { title: "ERP Syncing", desc: "Real-time bidirectional inventory feeds with legacy systems." }
        ]
    },
    "cyber-security": {
        tagline: "Zero-Trust Infrastructure",
        overviewHeader: "An impenetrable fortress around your digital assets.",
        longDescription: "In an era of relentless digital threats, our Cyber Security protocols prioritize proactive mitigation over reactive panic. We integrate zero-trust network architectures, execute rigorous vulnerability assessments, and implement robust encryption workflows to secure data at rest and in transit.",
        benefits: ["Complete GDPR, HIPAA, and SOC2 complaince", "Real-time threat disruption", "Mitigation of zero-day vulnerabilities"],
        capabilities: [
            { title: "Penetration Testing", desc: "Simulated attacks (VAPT) to expose and patch logical flaws." },
            { title: "Zero-Trust Networks", desc: "Strict identity verification mapping for lateral movement defense." },
            { title: "Data Encryption", desc: "Military-grade AES-256 protocols securing sensitive datasets." },
            { title: "Cloud Security Audits", desc: "AWS/GCP configuration reviews to close exposed buckets." }
        ]
    },
    "cloud-services": {
        tagline: "Distributed Systems",
        overviewHeader: "Resilient environments engineered for global scale.",
        longDescription: "We architect hyper-resilient cloud environments across AWS, Google Cloud, and Azure. Our DevOps engineers ensure zero-downtime microservice deployments, intricate Kubernetes cluster management, and highly optimized serverless pipelines that scale automatically with your demand.",
        benefits: ["Minimizes idle server cost through serverless", "99.999% Service Level Availability (SLA)", "Automated CI/CD for rapid releases"],
        capabilities: [
            { title: "Kubernetes Orchestration", desc: "Automated container scaling, rolling updates, and self-healing." },
            { title: "Serverless Architecture", desc: "Event-driven Lambda/Functions reducing operational overhead." },
            { title: "Cloud Migrations", desc: "Seamless transition of legacy monoliths to the modern cloud." },
            { title: "Database Sharding", desc: "Horizontal scaling of data layers for read/write heavy apps." }
        ]
    }
};

type Props = {
    params: Promise<{ slug: string }>
}

export default async function ServiceDetailsPage(props: Props) {
    const params = await props.params;
    const slug = params.slug;

    const genericService = servicesData.find((s) => s.slug === slug);
    const detailedService = serviceDetails[slug as string];

    if (!genericService || !detailedService) {
        notFound();
    }

    return (
        <main className="bg-white min-h-screen">
            {/* HERO SECTION - SLEEK & PREMIUM */}
            <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-slate-100">
                {/* Abstract Premium Gradient */}
                <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br ${genericService.theme} rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-20 pointer-events-none`} />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <Link href="/services" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors mb-12">
                        <FiArrowLeft className="mr-2 text-lg" /> All Services
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
                        <div>
                            <div className="inline-flex items-center space-x-3 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 mb-8 shadow-sm">
                                <div className={`text-xl bg-clip-text text-transparent bg-gradient-to-r ${genericService.theme}`}>
                                    {genericService.icon}
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-700">{detailedService.tagline}</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-6">
                                {genericService.title}
                            </h1>
                        </div>
                        <div className="pb-4">
                            <p className="text-xl md:text-2xl font-medium text-slate-500 leading-relaxed border-l-2 border-slate-200 pl-6">
                                {detailedService.overviewHeader}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SPLIT SECTION */}
            <section className="py-24 lg:py-32 bg-slate-50 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* Left Sticky Sidebar */}
                        <div className="lg:col-span-4 relative">
                            <div className="sticky top-32">
                                <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Execution Strategy</h3>
                                <p className="text-slate-600 font-medium leading-relaxed mb-10 text-lg">
                                    {detailedService.longDescription}
                                </p>

                                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-100 pb-4">Key Outcomes</p>
                                    <ul className="space-y-5">
                                        {detailedService.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start text-sm font-bold text-slate-700">
                                                <FiCheck className="text-emerald-500 mr-4 text-xl flex-shrink-0" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Capabilities Grid */}
                        <div className="lg:col-span-8">
                            <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-10 border-b border-slate-200 pb-6">Core Capabilities</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {detailedService.capabilities.map((cap, i) => (
                                    <div key={i} className="group bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-transparent transition-all duration-500">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${genericService.theme} text-white flex items-center justify-center text-2xl mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                                            <FiLayers />
                                        </div>
                                        <h4 className="text-xl font-black text-slate-900 mb-4">{cap.title}</h4>
                                        <p className="text-slate-500 leading-relaxed font-medium">{cap.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Architecture Callout */}
                            <div className="mt-20 bg-slate-900 rounded-[3rem] p-10 md:p-14 relative overflow-hidden text-white shadow-2xl">
                                <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${genericService.theme} blur-[120px] opacity-40`} />
                                <h3 className="text-3xl lg:text-4xl font-black mb-5 relative z-10">Initialize {genericService.title}</h3>
                                <p className="text-slate-400 font-medium mb-10 max-w-md relative z-10 text-lg leading-relaxed">
                                    Partner with our lead technical architects to map out a precise, risk-mitigated execution blueprint.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center px-10 py-5 bg-white text-slate-900 font-black rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:scale-105 uppercase tracking-widest text-xs relative z-10"
                                >
                                    Consult our team <FiArrowRight className="ml-3 text-lg text-blue-600" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
