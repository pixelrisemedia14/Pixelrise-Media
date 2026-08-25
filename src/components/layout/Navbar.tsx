import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Search, 
  TrendingUp, 
  Globe, 
  Video, 
  Camera, 
  Compass, 
  ArrowRight,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { Button } from '../ui/Button';
import { PixelriseLogo } from '../ui/PixelriseLogo';

interface NavbarProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on path change
  const handleNav = (path: string) => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    navigate(path);
  };

  const serviceItems = [
    {
      title: 'SEO Services',
      desc: 'Rank on Google & generate organic traffic',
      path: '/services/seo',
      icon: <Search className="w-5 h-5 text-[#F27D26]" />,
      tag: 'Compounding ROI'
    },
    {
      title: 'Google Ads',
      desc: 'Target ready-to-buy customers instantly',
      path: '/services/google-ads',
      icon: <TrendingUp className="w-5 h-5 text-[#ff9e54]" />,
      tag: 'Fast Inbound'
    },
    {
      title: 'Website Creation',
      desc: 'Modern, high-converting responsive sites',
      path: '/services/website-creation',
      icon: <Globe className="w-5 h-5 text-[#F27D26]" />,
      tag: 'Core Digital Hub'
    },
    {
      title: 'Video Editing',
      desc: 'High-retention Reels, Shorts & social ads',
      path: '/services/video-editing',
      icon: <Video className="w-5 h-5 text-[#ffaa6b]" />,
      tag: 'Viral Retention'
    },
    {
      title: 'Video Shooting',
      desc: '4K commercial shoots, brand stories & gear',
      path: '/services/video-shooting',
      icon: <Camera className="w-5 h-5 text-[#F27D26]" />,
      tag: 'On-Location'
    },
    {
      title: 'Digital Marketing',
      desc: 'Integrated full-funnel growth strategies',
      path: '/services/digital-marketing',
      icon: <Compass className="w-5 h-5 text-[#ff9e54]" />,
      tag: 'Full Funnel'
    }
  ];

  const isCurrentActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/92 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div
            onClick={() => handleNav('/')}
            className="flex items-center gap-3 cursor-pointer group select-none"
            id="brand-logo"
          >
            <div className="relative w-11 h-11 rounded-xl bg-[#0c0c0c] border border-white/15 p-1.5 flex items-center justify-center shadow-lg shadow-black/60 group-hover:border-[#F27D26]/60 group-hover:shadow-[#F27D26]/20 transition-all duration-300 group-hover:scale-105">
              <PixelriseLogo className="w-full h-full" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-[#F27D26] transition-colors">
                Pixelrise Media<span className="text-[#F27D26]">.</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-neutral-400 -mt-1">
                Digital & Creative Agency
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              onClick={() => handleNav('/')}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                isCurrentActive('/')
                  ? 'text-[#F27D26] bg-[#F27D26]/10 font-semibold'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNav('/about')}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                isCurrentActive('/about')
                  ? 'text-[#F27D26] bg-[#F27D26]/10 font-semibold'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              About
            </button>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                  currentPath.startsWith('/services')
                    ? 'text-[#F27D26] bg-[#F27D26]/10 font-semibold'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesDropdownOpen ? 'rotate-180 text-[#F27D26]' : 'text-neutral-400'
                  }`}
                />
              </button>

              {/* Mega Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[580px] bg-[#0c0c0c]/98 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                >
                  <div className="col-span-2 px-3 py-2 border-b border-white/10 flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Our Core Specialized Services
                    </span>
                    <button
                      onClick={() => handleNav('/services')}
                      className="text-xs text-[#F27D26] hover:text-[#ff9e54] font-medium flex items-center gap-1 cursor-pointer"
                    >
                      View All Services <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  {serviceItems.map((item) => (
                    <div
                      key={item.path}
                      onClick={() => handleNav(item.path)}
                      className={`p-3 rounded-xl cursor-pointer transition-all duration-200 border ${
                        currentPath === item.path
                          ? 'bg-[#F27D26]/10 border-[#F27D26]/40'
                          : 'bg-[#080808] border-white/5 hover:bg-[#141414] hover:border-white/15'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-[#111111] border border-white/10 shrink-0">
                          {item.icon}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <h4 className="text-sm font-semibold text-white truncate group-hover:text-[#F27D26]">
                              {item.title}
                            </h4>
                          </div>
                          <p className="text-xs text-neutral-400 mt-0.5 line-clamp-1">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNav('/projects')}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                isCurrentActive('/projects')
                  ? 'text-[#F27D26] bg-[#F27D26]/10 font-semibold'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Projects
            </button>

            <button
              onClick={() => handleNav('/testimonials')}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                isCurrentActive('/testimonials')
                  ? 'text-[#F27D26] bg-[#F27D26]/10 font-semibold'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Testimonials
            </button>

            <button
              onClick={() => handleNav('/faq')}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                isCurrentActive('/faq')
                  ? 'text-[#F27D26] bg-[#F27D26]/10 font-semibold'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              FAQ
            </button>

            <button
              onClick={() => handleNav('/contact')}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                isCurrentActive('/contact')
                  ? 'text-[#F27D26] bg-[#F27D26]/10 font-semibold'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNav('/consultation')}
              className="text-xs font-semibold text-neutral-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-1.5 cursor-pointer border border-transparent hover:border-white/10"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#F27D26]" />
              <span>Book Consultation</span>
            </button>

            <Button
              variant="primary"
              size="sm"
              icon={<Sparkles className="w-3.5 h-3.5" />}
              onClick={() => handleNav('/quote')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleNav('/quote')}
              className="text-xs px-3 py-1.5"
            >
              Get Started
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-neutral-300 hover:text-white bg-[#0e0e0e] border border-white/10 hover:bg-[#171717] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#050505]/98 border-b border-white/10 shadow-2xl backdrop-blur-2xl max-h-[calc(100vh-60px)] overflow-y-auto px-4 py-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleNav('/')}
              className={`text-left px-4 py-3 rounded-xl font-medium text-base transition-colors ${
                isCurrentActive('/') ? 'bg-[#F27D26]/10 text-[#F27D26] font-semibold' : 'text-neutral-200 hover:bg-white/5'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNav('/about')}
              className={`text-left px-4 py-3 rounded-xl font-medium text-base transition-colors ${
                isCurrentActive('/about') ? 'bg-[#F27D26]/10 text-[#F27D26] font-semibold' : 'text-neutral-200 hover:bg-white/5'
              }`}
            >
              About
            </button>

            {/* Mobile Services Accordion */}
            <div className="rounded-xl overflow-hidden bg-[#0d0d0d] border border-white/10">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-left font-medium text-base text-neutral-200"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-400 transition-transform ${
                    isMobileServicesOpen ? 'rotate-180 text-[#F27D26]' : ''
                  }`}
                />
              </button>

              {isMobileServicesOpen && (
                <div className="p-2 pt-0 flex flex-col gap-1 border-t border-white/10 bg-[#050505]">
                  <button
                    onClick={() => handleNav('/services')}
                    className="text-left px-3 py-2 text-xs font-semibold text-[#F27D26] hover:text-[#ff9e54] flex items-center gap-1.5"
                  >
                    <span>All Services Overview</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  {serviceItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => handleNav(item.path)}
                      className={`text-left px-3 py-2.5 rounded-lg text-sm flex items-center gap-2.5 transition-colors ${
                        currentPath === item.path
                          ? 'bg-[#F27D26]/10 text-[#ff9e54] font-medium'
                          : 'text-neutral-300 hover:bg-white/5'
                      }`}
                    >
                      <span className="shrink-0">{item.icon}</span>
                      <span className="truncate">{item.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNav('/projects')}
              className={`text-left px-4 py-3 rounded-xl font-medium text-base transition-colors ${
                isCurrentActive('/projects') ? 'bg-[#F27D26]/10 text-[#F27D26] font-semibold' : 'text-neutral-200 hover:bg-white/5'
              }`}
            >
              Projects & Case Studies
            </button>

            <button
              onClick={() => handleNav('/testimonials')}
              className={`text-left px-4 py-3 rounded-xl font-medium text-base transition-colors ${
                isCurrentActive('/testimonials') ? 'bg-[#F27D26]/10 text-[#F27D26] font-semibold' : 'text-neutral-200 hover:bg-white/5'
              }`}
            >
              Client Testimonials
            </button>

            <button
              onClick={() => handleNav('/faq')}
              className={`text-left px-4 py-3 rounded-xl font-medium text-base transition-colors ${
                isCurrentActive('/faq') ? 'bg-[#F27D26]/10 text-[#F27D26] font-semibold' : 'text-neutral-200 hover:bg-white/5'
              }`}
            >
              FAQ
            </button>

            <button
              onClick={() => handleNav('/contact')}
              className={`text-left px-4 py-3 rounded-xl font-medium text-base transition-colors ${
                isCurrentActive('/contact') ? 'bg-[#F27D26]/10 text-[#F27D26] font-semibold' : 'text-neutral-200 hover:bg-white/5'
              }`}
            >
              Contact Us
            </button>

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2.5">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => handleNav('/quote')}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request a Custom Quote
              </Button>
              <Button
                variant="secondary"
                size="lg"
                fullWidth
                onClick={() => handleNav('/consultation')}
                icon={<PhoneCall className="w-4 h-4 text-[#F27D26]" />}
                iconPosition="left"
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
