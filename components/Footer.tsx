
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center">
            <img 
              src="https://i.imgur.com/2dtmrDx.png" 
              alt="PLANPIA" 
              className="h-10 w-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-blue-600 text-sm font-medium">서비스소개</a>
            <a href="#" className="text-slate-500 hover:text-blue-600 text-sm font-medium">이용약관</a>
            <a href="#" className="text-slate-500 hover:text-blue-600 text-sm font-medium">개인정보처리방침</a>
            <a href="#" className="text-slate-500 hover:text-blue-600 text-sm font-medium">오시는길</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 pt-8 border-t border-slate-50">
          <div className="text-slate-400 text-sm leading-loose">
            <p>주식회사 플랜피아 | 사업자등록번호: 120-88-10116 | 법인등록번호: 110111-5270006</p>
            <p>설립일자: 2015년 03월 17일 | TEL: 070-5030-3368 | 이메일: master@planpia.net</p>
            <p>서울특별시 영등포구 영등포로3길 3 C타워 1003호</p>
            <p className="mt-4">© Copyright PLANPIA Inc. All Rights Reserved.</p>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">B</div>
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">I</div>
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">F</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
