
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const Hero: React.FC = () => {
  const line1 = "브랜딩의 완성,";
  const line2 = "플랜피아가 설계합니다.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        // Increased delay to ensure it starts after the second line finishes
        // line1 (8 chars) + line2 (12 chars) = 20 chars. 20 * 0.05s = 1.0s.
        // Adding extra buffer (0.5s) to make the sequence feel intentional.
        delay: 1.5,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2.0, // Appears after the description
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Main Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=2000" 
          alt="Baby Marketing Strategy Background" 
          className="w-full h-full object-cover opacity-50 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 opacity-[0.15] bg-[size:40px_40px] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>
      </div>

      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[160px] -mr-96 -mt-96 animate-pulse duration-[12s]"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] -ml-64 -mb-64"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-4 py-1.5 rounded-full mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Premium Marketing Partner</span>
          </motion.div>
          
          <motion.h1 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight mb-8"
          >
            <span className="inline-block">
              {line1.split("").map((char, index) => (
                <motion.span key={index} variants={charVariants} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
            <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500 inline-block">
              {line2.split("").map((char, index) => (
                <motion.span key={index} variants={charVariants} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          
          <motion.p 
            variants={descriptionVariants}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 leading-relaxed"
          >
            이벤트 경품 대행의 정교함, 문화 혜택의 특별함, 베베하우스의 독보적 타겟 마케팅까지.<br />
            기업의 가치를 고객의 경험으로 전환하는 최상의 마케팅 전략을 만나보세요.
          </motion.p>
          
          <motion.div 
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#pillars" className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-600/40 hover:scale-105 active:scale-95">
              핵심 서비스 보기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#facts" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-xl font-bold text-center transition-all border border-white/20 hover:border-white/40">
              성공 사례 확인
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stats Card */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden lg:block absolute right-24 bottom-32 bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl shadow-2xl"
      >
        <div className="grid grid-cols-1 gap-8">
          <div className="group cursor-default">
            <div className="text-4xl font-black text-white group-hover:text-blue-400 transition-colors">20+</div>
            <div className="text-slate-400 text-xs font-bold uppercase tracking-tighter">History (Years)</div>
          </div>
          <div className="h-px bg-white/10 w-full"></div>
          <div className="group cursor-default">
            <div className="text-4xl font-black text-white group-hover:text-blue-400 transition-colors">500+</div>
            <div className="text-slate-400 text-xs font-bold uppercase tracking-tighter">Corporate Clients</div>
          </div>
          <div className="h-px bg-white/10 w-full"></div>
          <div className="group cursor-default">
            <div className="text-4xl font-black text-white group-hover:text-blue-400 transition-colors">1M+</div>
            <div className="text-slate-400 text-xs font-bold uppercase tracking-tighter">User Database</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
