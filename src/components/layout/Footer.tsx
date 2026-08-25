import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  Sparkles, 
  ShieldCheck, 
  Lock
} from 'lucide-react';
import { Button } from '../ui/Button';
import { PixelriseLogo } from '../ui/PixelriseLogo';

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="bg-[#050505] border-t border-white/10 relative overflow-hidden text-neutral-400">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#F27D26]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top CTA Banner inside Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="relative rounded-3xl bg-[#0d0d0d] border border-white/10 p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F27D26]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F27D26]/10 border border-[#F27D26]/30 text-[#F27D26] text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ready to Accelerate Your Digital Growth?</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display tracking-tight">
                Let's Build Your High-Converting Digital Presence.
              </h3>
              <p className="mt-3 text-neutral-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Whether you need organic SEO rankings, targeted Google Ads campaigns, a modern custom website, or engaging video production, we are ready to help your business scale.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/quote')}
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Request a Custom Quote
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate('/consultation')}
              >
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mt-16 pt-12 border-t border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col">
            <div
              onClick={() => navigate('/')}
              className="flex items-center gap-3 cursor-pointer group select-none mb-4"
            >
              <div className="w-11 h-11 rounded-xl bg-[#0c0c0c] border border-white/15 p-1.5 flex items-center justify-center shadow-lg shadow-black/60 group-hover:border-[#F27D26]/60 transition-colors">
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

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm mb-6">
              Pixelrise Media is a digital marketing and creative services agency helping businesses build visibility, connect with active customers, and scale sustainable revenue.
            </p>

            <div className="flex flex-col gap-2.5 text-xs text-neutral-300">
              <a
                href="mailto:pixelrisemedia14@gmail.com"
                className="flex items-center gap-2 hover:text-[#F27D26] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#F27D26] shrink-0" />
                <span>pixelrisemedia14@gmail.com</span>
              </a>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F27D26] shrink-0" />
                <span>+91 98200 45678 / +91 98190 12345</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F27D26] shrink-0" />
                <span>Serving Clients Worldwide & Across India</span>
              </div>
            </div>
          </div>

          {/* Column 1: Company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navigate('/about')}
                  className="hover:text-[#F27D26] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/projects')}
                  className="hover:text-[#F27D26] transition-colors cursor-pointer"
                >
                  Our Work & Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/testimonials')}
                  className="hover:text-[#F27D26] transition-colors cursor-pointer"
                >
                  Client Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/contact')}
                  className="hover:text-[#F27D26] transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/admin')}
                  className="hover:text-[#F27D26] transition-colors cursor-pointer flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-300"
                >
                  <Lock className="w-3 h-3" />
                  <span>Admin Dashboard</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Specialized Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navigate('/services/seo')}
                  className="hover:text-[#F27D26] transition-colors cursor-pointer"
                >
                  SEO Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services/google-ads')}
                  className="hover:text-[#F27D26] transition-colors cursor-pointer"
                >
                  Google Ads Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services/website-creation')}
                  className="hover:text-[#F27D26] transition-colors cursor-pointer"
                >
                  Website Creation & Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services/video-editing')}
                  className="hover:text-[#F27D26] transition-colors cursor-pointer"
                >
                  Video Editing & Motion Graphics
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services/video-shooting')}
                  className="hover:text-[#F27D26] transition-colors cursor-pointer"
                >
                  Video Shooting & Production
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services/digital-marketing')}
                  className="hover:text-[#F27D26] transition-colors cursor-pointer"
                >
                  Full-Funnel Digital Marketing
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Actions */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Resources & Growth
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navigate('/quote')}
                  className="text-[#F27D26] font-semibold hover:text-[#ff9e54] transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Request a Custom Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/consultation')}
                  className="hover:text-[#F27D26] transition-colors cursor-pointer"
                >
                  Book Free Consultation
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/faq')}
                  className="hover:text-[#F27D26] transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/privacy-policy')}
                  className="hover:text-[#F27D26] transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/terms')}
                  className="hover:text-[#F27D26] transition-colors cursor-pointer"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Guarantee */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#F27D26]" />
            <span>© {new Date().getFullYear()} Pixelrise Media. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate('/privacy-policy')}
              className="hover:text-neutral-200 transition-colors"
            >
              Privacy
            </button>
            <button
              onClick={() => navigate('/terms')}
              className="hover:text-neutral-200 transition-colors"
            >
              Terms
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="hover:text-neutral-200 transition-colors"
            >
              Support
            </button>
            <span className="text-neutral-500">Official Brand: pixelrisemedia.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
