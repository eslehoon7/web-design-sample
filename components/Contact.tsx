
import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Check } from 'lucide-react';
import { motion } from 'motion/react';

const WEBHOOK_URL = 'https://eslehoon.app.n8n.cloud/webhook/planpia-inquiry';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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
    setIsSuccess(false);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          company: '',
          manager: '',
          service: '이벤트 경품 대행',
          message: ''
        });
        
        // Reset success state after 5 seconds to allow new submissions
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        const errorText = await response.text();
        console.error('Server response error:', errorText);
        throw new Error(`서버 응답 오류 (상태 코드: ${response.status})`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        alert('❌ 연결 오류: n8n 서버에 접속할 수 없습니다. Webhook URL이 활성화되어 있는지, 혹은 브라우저의 광고 차단 확장 프로그램이 작동 중인지 확인해주세요.');
      } else {
        alert(`❌ 오류가 발생했습니다: ${error instanceof Error ? error.message : '알 수 없는 오류'}`);
      }
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
                  disabled={isSubmitting || isSuccess}
                  className={`w-full font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-xl transition-all disabled:cursor-not-allowed ${
                    isSuccess 
                      ? 'bg-emerald-500 text-white shadow-emerald-500/20' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20'
                  }`}
                >
                  {isSubmitting ? (
                    '전송 중...'
                  ) : isSuccess ? (
                    <>
                      <Check className="w-5 h-5" />
                      접수 완료되었습니다. 감사합니다.
                    </>
                  ) : (
                    <>
                      상담 신청하기
                      <Send className="w-5 h-5" />
                    </>
                  )}
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
