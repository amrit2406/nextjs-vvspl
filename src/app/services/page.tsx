import Services from "@/components/home/Service";

export const metadata = {
    title: "Our Expertise | VVSPL Tech",
    description: "Explore our expansive suite of industry-leading technical services.",
};

export default function ServicesPage() {
    return (
        <div className="pt-24 bg-slate-50 min-h-screen">
            <div className="text-center pt-16 pb-2">
                <span className="inline-block text-blue-600 font-bold tracking-[0.3em] text-xs mb-6 bg-white border border-blue-100 px-4 py-1.5 rounded-full">
                    CAPABILITIES
                </span>
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6 relative z-10 px-4">
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Ecosystem</span> of Value.
                </h1>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed z-10 relative px-6">
                    Explore our expansive suite of industry-leading technical services engineered specifically for scale, security, and velocity.
                </p>
            </div>

            {/* Decorative Background for Hero Area */}
            <div className="absolute top-0 inset-x-0 h-[400px] overflow-hidden pointer-events-none mix-blend-multiply z-0 opacity-50">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="relative z-10 -mt-10">
                <Services />
            </div>
        </div>
    );
}
