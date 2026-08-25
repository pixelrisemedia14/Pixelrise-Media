import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Users, 
  Layers, 
  TrendingUp,
  Award
} from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionHeader } from '../ui/SectionHeader';

interface AboutSectionProps {
  navigate: (path: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ navigate }) => {
  const highlights = [
    'Digital marketing',
    'Strategic SEO',
    'Paid advertising (Google Ads)',
    'Website creation & UI/UX',
    'Video production & 4K shoots',
    'Creative content & Reels',
    'Brand visibility & authority',
    'High-intent lead generation'
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#080808] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Brand Mosaic */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                  alt="Pixelrise Media digital marketing team collaborating on client strategy"
                  className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/40 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="p-4 rounded-2xl bg-[#0c0c0c]/90 backdrop-blur-md border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#F27D26]/20 text-[#F27D26] flex items-center justify-center font-bold">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#EDEDED]">Full-Funnel Digital Partner</div>
                        <div className="text-xs text-white/50">Strategy + Creative + Technical Execution</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -top-6 -right-6 p-4 rounded-2xl bg-[#0c0c0c] border border-white/10 shadow-xl hidden sm:block">
                <div className="text-xs text-white/50 uppercase font-semibold tracking-wider">Methodology</div>
                <div className="text-lg font-bold text-[#F27D26] font-display">Data & Intent Driven</div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Scope */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-1 lg:order-2">
            <SectionHeader
              align="left"
              badgeText="Agency Overview"
              title="Who"
              highlightedTitle="We Are"
              subtitle="Pixelrise Media is a digital marketing and creative services agency helping businesses strengthen their online presence through strategy, technology, advertising, content, websites, and creative solutions."
            />

            <div className="mt-6 space-y-4 text-white/70 text-base leading-relaxed">
              <p>
                We do not believe in superficial vanity metrics or one-size-fits-all templates. Our team bridges the critical gap between <strong className="text-[#EDEDED]">creative storytelling</strong> (cinema-grade video shooting, motion graphics, bespoke web design) and <strong className="text-[#EDEDED]">precision engineering</strong> (technical SEO, negative-keyword Google Ads, conversion-rate optimization).
              </p>
              <p>
                Whether you are an established brand aiming to optimize your customer acquisition economics or a fast-growing business building your digital authority, we position your business to win online.
              </p>
            </div>

            {/* Core Capability Badges Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#0c0c0c] border border-white/10 text-xs sm:text-sm text-white/80"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#F27D26] shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => navigate('/about')}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Learn More About Us
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={() => navigate('/projects')}
              >
                View Case Studies
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
