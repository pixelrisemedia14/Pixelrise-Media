import React from 'react';
import { 
  Compass, 
  Sliders, 
  Palette, 
  MessageSquare, 
  Crosshair, 
  TrendingUp,
  ShieldAlert
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      title: 'Strategy First',
      desc: 'We begin by understanding your business, target audience, revenue goals, and current digital presence before writing a single line of copy or launching an ad.',
      icon: <Compass className="w-6 h-6 text-[#F27D26]" />,
      color: 'border-[#F27D26]/30'
    },
    {
      title: 'Customized Solutions',
      desc: 'Every business operates in a unique competitive ecosystem. We reject generic cookie-cutter packages in favor of custom-tailored execution plans.',
      icon: <Sliders className="w-6 h-6 text-[#F27D26]" />,
      color: 'border-[#F27D26]/30'
    },
    {
      title: 'Creative + Marketing',
      desc: 'We combine analytical marketing precision with cinema-quality creative execution, ensuring your brand is both discoverable and memorable.',
      icon: <Palette className="w-6 h-6 text-[#F27D26]" />,
      color: 'border-[#F27D26]/30'
    },
    {
      title: 'Transparent Communication',
      desc: 'No black-box secrecy or confusing marketing jargon. We provide direct access to your ad accounts, regular progress check-ins, and clear KPI reports.',
      icon: <MessageSquare className="w-6 h-6 text-[#F27D26]" />,
      color: 'border-[#F27D26]/30'
    },
    {
      title: 'Conversion Focus',
      desc: 'Traffic is useless if it does not convert. We build every digital touchpoint around intentional customer actions—inquiries, calls, and qualified sales conversations.',
      icon: <Crosshair className="w-6 h-6 text-[#F27D26]" />,
      color: 'border-[#F27D26]/30'
    },
    {
      title: 'Long-Term Growth',
      desc: 'We focus on building compounding digital assets and sustainable organic search authority rather than unrealistic short-term vanity promises.',
      icon: <TrendingUp className="w-6 h-6 text-[#F27D26]" />,
      color: 'border-[#F27D26]/30'
    }
  ];

  return (
    <section className="py-24 bg-[#080808] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <SectionHeader
            badgeText="The Pixelrise Difference"
            title="Why Choose"
            highlightedTitle="Pixelrise Media?"
            subtitle="We operate as a true digital growth partner, combining strategic discipline with world-class creative production."
          />
        </div>

        {/* 6 Core Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <Card
              key={idx}
              variant="default"
              hoverEffect
              className="p-8 bg-[#0c0c0c] border border-white/10 rounded-2xl flex flex-col justify-start hover:border-[#F27D26]/40 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#050505] border border-white/10 flex items-center justify-center mb-6 shadow-md">
                {pillar.icon}
              </div>

              <h3 className="text-xl font-bold text-[#EDEDED] font-display tracking-tight">
                {pillar.title}
              </h3>

              <p className="mt-3 text-sm text-white/60 leading-relaxed">
                {pillar.desc}
              </p>
            </Card>
          ))}
        </div>

        {/* Ethical agency pledge banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0c0c0c] border border-white/10 flex items-start sm:items-center gap-4 text-xs text-white/60">
          <ShieldAlert className="w-5 h-5 text-[#F27D26] shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-[#EDEDED]">Our Honest Growth Principle:</strong> We do not make false guarantees like "Overnight #1 Google Ranking" or "Guaranteed Millions in 7 Days". We deliver verified technical methodologies, disciplined optimization, and compounding digital value.
          </p>
        </div>

      </div>
    </section>
  );
};
