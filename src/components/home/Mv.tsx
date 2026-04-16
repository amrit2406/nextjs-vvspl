"use client";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  FiEye,
  FiTarget,
  FiCheck
} from "react-icons/fi";

// --- The Interactive Particle Background ---
const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseX = useMotionValue(-1000); // Start far away
  const mouseY = useMotionValue(-1000);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 60; 
    const connectionDistance = 140; 

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    class Particle {
      x: number; y: number; baseX: number; baseY: number;
      vx: number; vy: number; size: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = 3.0;
      }

      update() {
        this.baseX += this.vx;
        this.baseY += this.vy;
        if (this.baseX > canvas!.width || this.baseX < 0) this.vx *= -1;
        if (this.baseY > canvas!.height || this.baseY < 0) this.vy *= -1;

        const dx = mouseX.get() - this.x;
        const dy = mouseY.get() - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Interaction: push/pull effect
        if (distance < 200) {
          this.x = this.baseX - dx * 0.05;
          this.y = this.baseY - dy * 0.05;
        } else {
          this.x = this.baseX;
          this.y = this.baseY;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgb(255, 126, 5)";
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) particles.push(new Particle());
    };

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(66, 145, 234, ${1 - distance / connectionDistance * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-99" />;
};

const MissionVision = () => {
  const data = [
    {
      title: "Our Mission",
      icon: <FiTarget size={24} />,
      color: "from-[#FF7E00] to-[#e67300]",
      accent: "bg-orange-50 text-[#FF7E00]",
      description: "To empower global enterprises by delivering high-precision technical solutions. We simplify complexity through innovative AI and robust cloud architectures.",
      features: ["Technical Integrity", "Scalable Excellence"],
    },
    {
      title: "Our Vision",
      icon: <FiEye size={24} />,
      color: "from-[#044DB6] to-[#2A6BFF]",
      accent: "bg-blue-50 text-[#044DB6]",
      description: "To become the world's most trusted architectural partner, setting the gold standard for how deep technology serves humanity.",
      features: ["Global Leadership", "Future-Ready Tech"],
    },
  ];

  return (
    <section className="relative py-24 bg-slate-50/30 overflow-hidden">
      {/* --- The Background Layer --- */}
      <ParticleNetwork />
      
      {/* Subtle Grid - Kept from original */}
      <div
        className="absolute inset-0 z-0 opacity-20 [mask-image:linear-gradient(to_bottom,white,transparent)]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0' 0' 60' 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Blobs - Kept from original */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-200/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-[1px] bg-[#FF7E00]" />
            <span className="text-[#FF7E00] font-bold uppercase tracking-[0.3em] text-[10px]">
              Our Core
            </span>
          </motion.div>

          <h3 className="text-5xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-6">
            Purpose Beyond <span></span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] via-orange-500 to-[#e67300] pr-2">
              Code
            </span>.
          </h3>
          <p className="text-xl text-slate-600 font-medium max-w-2xl leading-relaxed">
            Engineering the digital backbone of tomorrow with precision, 
            passion, and a focus on long-term scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-white/80 backdrop-blur-sm border border-slate-100 p-10 rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
            >
              {/* Re-integrated Icon Header for better visual weight */}
              {/* <div className="flex items-center justify-between mb-8">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <div className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${item.accent}`}>
                  Architectural Standard
                </div>
              </div> */}

              <h4 className="text-3xl font-black text-center text-slate-900 tracking-tighter mb-6">
                {item.title}
              </h4>
              <p className="text-lg text-slate-600 leading-relaxed mb-10 font-medium">
                {item.description}
              </p>

              {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {item.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className={`p-1 rounded-full ${item.accent}`}>
                      <FiCheck size={14} strokeWidth={3} />
                    </div>
                    <span className="text-sm font-bold text-slate-800 tracking-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;