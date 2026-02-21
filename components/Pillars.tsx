
import React from 'react';
import { PILLARS } from '../constants';
import { motion } from 'motion/react';

const Pillars: React.FC = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="pillars" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Core Pillars</motion.h2>
          <motion.h3 variants={itemVariants} className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            플랜피아의 마케팅을 지탱하는<br />3가지 결정적 솔루션
          </motion.h3>
          <motion.p variants={itemVariants} className="text-slate-500 text-lg">
            각 분야의 전문가들이 모여 유기적으로 연결된 마케팅 생태계를 구축합니다.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {PILLARS.map((pillar, idx) => (
            <div key={idx} className="group relative bg-slate-50 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 hover:-translate-y-2 border border-slate-100">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={pillar.imageUrl} 
                  alt={pillar.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              </div>
              
              <div className="p-8 relative">
                {/* 
                  The icon container below uses group-hover:bg-blue-600 to turn blue when the card is hovered.
                  By removing the fixed color from the icon in constants.tsx and using the 'pillar.iconColor' class here,
                  'group-hover:text-white' now correctly overrides the default icon color, making the icon white on hover.
                */}
                <div className={`absolute -top-12 right-8 bg-white p-4 rounded-2xl shadow-xl shadow-slate-200 ${pillar.iconColor} group-hover:bg-blue-600 group-hover:text-white transition-all duration-300`}>
                  {pillar.icon}
                </div>
                
                <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{pillar.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {pillar.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {pillar.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-1 rounded border border-slate-200 text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
