
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img 
            src="https://i.imgur.com/2dtmrDx.png" 
            alt="PLANPIA" 
            className="h-10 md:h-12 w-auto transition-all"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className={`text-sm font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'}`}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-blue-500/20">
            제휴문의
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
          <button className="absolute top-6 right-6" onClick={() => setMobileMenuOpen(false)}>
            <X className="text-slate-900 w-8 h-8" />
          </button>
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="text-2xl font-bold text-slate-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-bold"
            onClick={() => setMobileMenuOpen(false)}
          >
            제휴문의
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
