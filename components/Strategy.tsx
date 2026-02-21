
import React from 'react';
import { STRATEGIES } from '../constants';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const Strategy: React.FC = () => {
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
    <section id="strategy" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Our Strategy</motion.h2>
            <motion.h3 variants={itemVariants} className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              팩트(Fact)로 증명하는<br />독보적 마케팅 시너지
            </motion.h3>
            
            <div className="space-y-8 mb-12">
              {STRATEGIES.map((s, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 text-blue-600">
                    {s.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <CheckCircle2 size={120} />
              </div>
              <p className="text-blue-200 mb-4 font-medium italic">"플랜피아는 단순히 업무를 대행하지 않습니다. 브랜드의 성공을 위한 최적의 경로를 설계합니다."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center font-bold text-blue-950">PP</div>
                <div>
                  <p className="font-bold">Planpia Strategy Team</p>
                  <p className="text-xs text-blue-300">Marketing Intelligence Group</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div id="facts" className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200 border border-slate-100">
                  <div className="text-blue-600 text-4xl font-black mb-2">98%</div>
                  <p className="text-slate-500 text-sm font-bold">Client Retention Rate</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200 border border-slate-100">
                  <div className="text-blue-600 text-4xl font-black mb-2">200K+</div>
                  <p className="text-slate-500 text-sm font-bold">Annual Rewards Processed</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-600 p-8 rounded-3xl shadow-xl shadow-blue-200 text-white">
                  <div className="text-4xl font-black mb-2">1,200+</div>
                  <p className="text-blue-100 text-sm font-bold">Partnership Brands</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200 border border-slate-100">
                  <div className="text-blue-600 text-4xl font-black mb-2">#1</div>
                  <p className="text-slate-500 text-sm font-bold">Mom Marketing Service</p>
                </div>
              </div>
            </div>
            
            {/* Decorative shapes */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
