
import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';

const WEBHOOK_URL = 'https://eslehoon.app.n8n.cloud/webhook-test/planpia-inquiry';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    manager: '',
    service: '이벤트 경품 대행',
    message: ''
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.company || !formData.manager || !formData.service || !formData.message) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('✅ 문의가 접수되었습니다!\nPlanpia 담당자가 24시간 내에 연락드리겠습니다 😊');
        setFormData({
          company: '',
          manager: '',
          service: '이벤트 경품 대행',
          message: ''
        });
      } else {
        throw new Error('서버 오류');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('❌ 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <motion.div 
              className="p-12 lg:p-20 text-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={headerVariants}
            >
              <motion.h2 variants={itemVariants} className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Partnership</motion.h2>
              <motion.h3 variants={itemVariants} className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                귀사의 마케팅을<br />한 단계 더 업그레이드 하세요
              </motion.h3>
              <motion.p variants={itemVariants} className="text-slate-400 text-lg mb-12">
                플랜피아의 전문가들과 함께 비즈니스 목표를 달성하기 위한 구체적인 로드맵을 그려보세요. 24시간 이내에 담당자가 연락드립니다.
              </motion.p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-slate-300">서울특별시 영등포구 영등포로3길 3 C타워 1003호</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-slate-300">070-5030-3368</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-slate-300">master@planpia.net</span>
                </div>
              </div>
            </motion.div>

            <div className="bg-slate-800/50 p-12 lg:p-20 border-l border-slate-700">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-400 mb-2">업체명</label>
                    <input 
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" 
                      placeholder="플랜피아" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-400 mb-2">담당자 성함</label>
                    <input 
                      type="text" 
                      name="manager"
                      value={formData.manager}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" 
                      placeholder="홍길동" 
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-2">관심 서비스</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option>이벤트 경품 대행</option>
                    <option>문화 혜택 서비스</option>
                    <option>베베하우스 마케팅</option>
                    <option>기타 제휴 문의</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-2">문의 내용</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white h-32 focus:outline-none focus:border-blue-500 transition-colors" 
                    placeholder="진행하고자 하시는 마케팅이나 궁금한 점을 적어주세요."
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '전송 중...' : '상담 신청하기'}
                  {!isSubmitting && <Send className="w-5 h-5" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
