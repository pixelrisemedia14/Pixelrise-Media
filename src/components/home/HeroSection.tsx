import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Search, 
  TrendingUp, 
  Play, 
  Globe, 
  CheckCircle2, 
  BarChart2, 
  Zap,
  Star
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

interface HeroSectionProps {
  navigate: (path: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ navigate }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-grid-pattern bg-[#050505]">
      {/* Dynamic ambient gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] bg-gradient-to-tr from-[#F27D26]/15 via-[#F27D26]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#F27D26]/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Messaging & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 mb-6">
              <Badge variant="accent" dot size="md">
                Digital Marketing & Creative Services Agency
              </Badge>
              <span className="hidden sm:inline-flex items-center gap-1 text-xs text-white/50">
                <Star className="w-3.5 h-3.5 text-[#F27D26] fill-[#F27D26]" />
                <span className="font-semibold text-[#EDEDED]">5.0</span> Client Satisfaction
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#EDEDED] font-display tracking-tight leading-[1.1]">
              Grow Your Business With{' '}
              <span className="bg-gradient-to-r from-[#F27D26] via-[#f9954a] to-[#ffb680] bg-clip-text text-transparent italic font-serif">
                Smarter Digital Marketing
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl font-normal">
              Pixelrise Media helps businesses build stronger digital visibility through <span className="text-[#EDEDED] font-medium">SEO</span>, <span className="text-[#EDEDED] font-medium">Google Ads</span>, <span className="text-[#EDEDED] font-medium">website creation</span>, <span className="text-[#EDEDED] font-medium">video editing</span>, <span className="text-[#EDEDED] font-medium">video shooting</span>, and creative digital marketing solutions.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/quote')}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Get Started
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate('/services')}
              >
                Explore Our Services
              </Button>
            </div>

            {/* Trust points micro-row */}
            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full text-white/70 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F27D26] shrink-0" />
                <span>Zero Vanity Metrics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F27D26] shrink-0" />
                <span>Dedicated Strategy</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#F27D26] shrink-0" />
                <span>Transparent Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Interactive Digital Agency Mockup */}
          <div className="lg:col-span-5 relative">
            {/* Main agency console card */}
            <div className="relative rounded-3xl bg-[#0c0c0c]/90 border border-white/10 p-5 sm:p-6 shadow-2xl shadow-black/80 backdrop-blur-xl">
              
              {/* Card top bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-[#F27D26]/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-semibold text-white/50">Pixelrise Growth Engine</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#F27D26] bg-[#F27D26]/10 px-2 py-0.5 rounded-full border border-[#F27D26]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26] animate-ping" />
                  Live Campaign Active
                </span>
              </div>

              {/* Console Body: Digital Marketing Modules */}
              <div className="mt-4 space-y-3.5">
                
                {/* Module 1: SEO Search Trajectory */}
                <div className="p-3.5 rounded-2xl bg-[#050505]/80 border border-white/10 flex items-center justify-between hover:border-[#F27D26]/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#F27D26]/10 text-[#F27D26] border border-[#F27D26]/20">
                      <Search className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#EDEDED]">Organic Search & SEO</div>
                      <div className="text-[11px] text-white/50">High-Intent Commercial Keywords</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-[#F27D26]">Top 3 Rank</div>
                    <div className="text-[10px] text-emerald-400">+142% Inbound Leads</div>
                  </div>
                </div>

                {/* Module 2: Google Ads Performance */}
                <div className="p-3.5 rounded-2xl bg-[#050505]/80 border border-white/10 flex items-center justify-between hover:border-[#F27D26]/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#F27D26]/10 text-[#F27D26] border border-[#F27D26]/20">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#EDEDED]">Google Ads Management</div>
                      <div className="text-[11px] text-white/50">Target CPA & ROAS Optimization</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-[#F27D26]">4.6x ROAS</div>
                    <div className="text-[10px] text-white/50">Filtered Negative Keywords</div>
                  </div>
                </div>

                {/* Module 3: High-Converting Web Platform */}
                <div className="p-3.5 rounded-2xl bg-[#050505]/80 border border-white/10 flex items-center justify-between hover:border-[#F27D26]/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#F27D26]/10 text-[#F27D26] border border-[#F27D26]/20">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#EDEDED]">Custom Web Architecture</div>
                      <div className="text-[11px] text-white/50">Sub-Second Load Speed</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-[#EDEDED]">100/100</div>
                    <div className="text-[10px] text-emerald-400">Core Web Vitals</div>
                  </div>
                </div>

                {/* Module 4: Video Editing & Production */}
                <div className="p-3.5 rounded-2xl bg-[#050505]/80 border border-white/10 flex items-center justify-between hover:border-[#F27D26]/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#F27D26]/10 text-[#F27D26] border border-[#F27D26]/20">
                      <Play className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#EDEDED]">Video Editing & Shooting</div>
                      <div className="text-[11px] text-white/50">Reels, Shorts & 4K Shoots</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-[#F27D26]">82% Retention</div>
                    <div className="text-[10px] text-white/50">Motion Graphics & Audio</div>
                  </div>
                </div>

              </div>

              {/* Interactive Floating Micro-Card */}
              <div className="mt-4 p-3 rounded-xl bg-[#050505] border border-[#F27D26]/30 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-[#EDEDED]">
                  <Zap className="w-4 h-4 text-[#F27D26] shrink-0" />
                  <span>Ready to elevate your digital presence?</span>
                </div>
                <button
                  onClick={() => navigate('/consultation')}
                  className="text-xs font-semibold text-[#F27D26] hover:text-[#ff9c54] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  Book Call <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
