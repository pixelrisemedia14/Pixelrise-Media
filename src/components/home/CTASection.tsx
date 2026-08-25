import React from 'react';
import { 
  ArrowRight, 
  PhoneCall, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck,
  Zap
} from 'lucide-react';
import { Button } from '../ui/Button';

interface CTASectionProps {
  navigate: (path: string) => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ navigate }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background glow and subtle mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F27D26]/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#F27D26]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-[#0c0c0c] border border-white/10 p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-2xl overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F27D26]/10 border border-[#F27D26]/30 text-[#F27D26] text-xs font-semibold mb-6">
            <Zap className="w-3.5 h-3.5" />
            <span>Ready for Real Inbound Growth?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#EDEDED] font-display tracking-tight leading-tight">
            Transform Your Online Visibility into a{' '}
            <span className="text-[#F27D26] italic font-serif">
              Lead Generation Engine
            </span>
          </h2>

          <p className="mt-5 text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Stop losing potential customers to competitors on Google. Let our team engineer your search rankings, Google Ads campaigns, custom website, and video creative.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/quote')}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Get Started — Request a Quote
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate('/consultation')}
              icon={<PhoneCall className="w-4 h-4 text-[#F27D26]" />}
              iconPosition="left"
            >
              Book Free 30-Min Consultation
            </Button>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/50">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F27D26]" />
              <span>No Obligation Proposal</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F27D26]" />
              <span>Tailored Technical Strategy</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F27D26]" />
              <span>Direct Senior Strategist Access</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
