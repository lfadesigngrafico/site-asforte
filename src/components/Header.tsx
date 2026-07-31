import React, { useState, useEffect } from 'react';
import { LOGOS, NAV_LINKS, CONTACT_INFO } from '../constants/assets';
import { Phone, Menu, X, ArrowRight, ShieldAlert } from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: () => void;
  currentPage?: 'home' | 'empresa';
  onNavigate?: (page: 'home' | 'empresa', targetId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal, currentPage = 'home', onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLightHeader = currentPage !== 'home' || isScrolled;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#empresa') {
      if (onNavigate) {
        onNavigate('empresa');
      } else {
        window.location.hash = 'empresa';
      }
    } else if (href === '#hero' || href === '#') {
      if (onNavigate) {
        onNavigate('home');
      } else {
        window.location.hash = '';
      }
    } else {
      const targetId = href.startsWith('#') ? href.substring(1) : href;
      if (onNavigate) {
        onNavigate('home', targetId);
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLightHeader
          ? 'bg-white border-b border-slate-200 text-[#192F4D] shadow-md py-3'
          : 'bg-gradient-to-b from-[#102138]/90 via-[#102138]/40 to-transparent text-white py-0'
      }`}
    >
      <div className={`max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-stretch justify-between ${isLightHeader ? 'h-16 md:h-18' : 'h-24 lg:h-28'}`}>
        {/* Brand Logo Card */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className={`flex items-center transition-all duration-300 ${
            !isLightHeader
              ? 'bg-white px-6 sm:px-8 lg:px-10 py-4 lg:py-6 shadow-xl border-b-2 border-r-2 border-slate-200 text-[#1D2A3A] self-start'
              : 'py-1'
          }`}
        >
          <img
            src={LOGOS.asforteOriginal}
            alt="Asforte Concreto Asfáltico"
            className={`${!isLightHeader ? 'h-12 sm:h-14 lg:h-16' : 'h-10 md:h-12'} w-auto object-contain transition-all duration-200`}
          />
        </a>

        {/* Desktop Navigation Menu & Action Button */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <nav className="flex items-center space-x-6 xl:space-x-8 text-xs xl:text-sm font-extrabold tracking-wider uppercase font-condensed">
            {NAV_LINKS.map((link) => {
              const isActive =
                (link.href === '#empresa' && currentPage === 'empresa') ||
                (link.href === '#hero' && currentPage === 'home');

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`py-2 transition-colors duration-200 border-b-2 ${
                    isActive ? 'border-[#E3371E] font-black' : 'border-transparent hover:border-[#E3371E]'
                  } ${
                    isLightHeader
                      ? 'text-[#192F4D] hover:text-[#E3371E]'
                      : 'text-white hover:text-[#FF7A48]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Top Right SOLICITAR ORÇAMENTO Button */}
          <button
            onClick={onOpenQuoteModal}
            className="bg-[#E3371E] text-white text-xs xl:text-sm font-condensed font-extrabold tracking-wider uppercase px-6 py-3.5 h-[48px] flex items-center justify-center hover:bg-[#103778] transition-colors duration-200 rounded-none border-none shadow-md cursor-pointer ml-4"
          >
            <span>SOLICITAR ORÇAMENTO</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center pr-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2.5 rounded-none border ${
              isLightHeader
                ? 'border-slate-300 text-[#192F4D] bg-slate-50'
                : 'border-white/30 text-white bg-slate-900/60'
            }`}
            aria-label="Alternar Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu - Strict Rectangular Design */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[84px] bg-[#223A5E] text-white border-b-4 border-[#E3371E] shadow-2xl z-50">
          <div className="p-6 flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-semibold uppercase tracking-wider py-2 border-b border-white/10 text-white hover:text-[#E3371E] hover:pl-2 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 flex flex-col space-y-3">
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`}
                className="flex items-center justify-center gap-2 py-3 bg-white/10 text-white font-condensed uppercase tracking-wider text-sm font-semibold border border-white/20"
              >
                <Phone className="w-4 h-4 text-[#E3371E]" />
                <span>Atendimento: {CONTACT_INFO.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full bg-[#E3371E] text-white font-bold uppercase tracking-wider text-sm py-4 flex items-center justify-center gap-2 rounded-none hover:bg-[#103778]"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
