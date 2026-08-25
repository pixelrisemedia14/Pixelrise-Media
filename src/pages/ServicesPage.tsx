import React from 'react';
import { servicesData } from '../data/servicesData';
import { 
  ArrowRight, 
  Check, 
  Search, 
  TrendingUp, 
  Globe, 
  Video, 
  Camera, 
  Compass, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { SectionHeader } from '../components/ui/SectionHeader';

interface ServicesPageProps {
  navigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ navigate }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-6 h-6 text-cyan-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-amber-400" />;
      case 'Globe': return <Globe className="w-6 h-6 text-violet-400" />;
      case 'Video': return <Video className="w-6 h-6 text-rose-400" />;
      case 'Camera': return <Camera className="w-6 h-6 text-emerald-400" />;
      case 'Compass': return <Compass className="w-6 h-6 text-teal-400" />;
      default: return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div className="pt-28 pb-20 bg-slate-950 min-h-screen">
      
      {/* 1. Hero */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-grid-pattern border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex justify-center mb-4">
            <Badge variant="cyan" dot size="md">
              Specialized Service Capabilities
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight max-w-4xl mx-auto leading-tight">
            Integrated Digital Marketing &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Creative Production Services
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From technical SEO audits and high-converting Google Ads campaigns to custom website architecture and 4K cinema video shooting, explore our full spectrum of digital growth solutions.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/quote')}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request a Custom Quote
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate('/consultation')}
            >
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Detailed Service Offerings Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className={`p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800/90 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center transition-all duration-300 hover:border-slate-700`}
            >
              {/* Left Details */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                        Specialized Service 0{idx + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
                    {service.description}
                  </p>

                  {/* Deliverables checklist */}
                  <div className="mt-6 pt-6 border-t border-slate-800/80">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Core Deliverables & Inclusions:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="mt-6 pt-4 border-t border-slate-800/60">
                    <span className="text-xs font-semibold text-slate-400 mr-2">Best Suited For:</span>
                    <div className="inline-flex flex-wrap gap-1.5 mt-1 sm:mt-0">
                      {service.idealFor.map((aud, aIdx) => (
                        <span key={aIdx} className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-950 text-slate-300 border border-slate-800">
                          {aud}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => navigate(`/services/${service.slug}`)}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    View Dedicated {service.shortTitle} Page
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => navigate('/quote')}
                  >
                    Get a Quote
                  </Button>
                </div>
              </div>

              {/* Right Visual Banner */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
                  <img
                    src={service.bannerImage}
                    alt={service.title}
                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs text-slate-300">
                    <div className="font-semibold text-white mb-0.5">{service.tagline}</div>
                    <div className="text-[11px] text-slate-400">{service.deliverableSummary}</div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. Bottom Consultation Trigger */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Not Sure Which Services Match Your Goals?
          </h2>
          <p className="mt-3 text-slate-300 text-sm max-w-xl mx-auto">
            Book a complimentary 30-minute discovery consultation. We will analyze your website, current search rankings, and target market to recommend the exact right plan.
          </p>
          <div className="mt-6 flex justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/consultation')}
              icon={<PhoneCall className="w-4 h-4" />}
              iconPosition="left"
            >
              Book Free Strategy Session
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};
