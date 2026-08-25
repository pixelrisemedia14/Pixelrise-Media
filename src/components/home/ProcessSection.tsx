import React, { useState } from 'react';
import { 
  Search, 
  Map, 
  Rocket, 
  Activity, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

interface ProcessSectionProps {
  navigate?: (path: string) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ navigate }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Discover',
      shortTitle: 'Business & Market Discovery',
      desc: 'Understand the business, audience, goals, current digital footprint, and exact project requirements.',
      icon: <Search className="w-5 h-5 text-[#F27D26]" />,
      details: [
        'Deep-dive consultation & stakeholder interviews',
        'Competitor gap analysis & search landscape audit',
        'Ideal customer profile (ICP) & intent mapping',
        'Technical infrastructure & asset inventory'
      ]
    },
    {
      number: '02',
      title: 'Plan',
      shortTitle: 'Tailored Growth Strategy',
      desc: 'Create a practical, milestone-driven strategy and execution roadmap based on your project objectives.',
      icon: <Map className="w-5 h-5 text-[#F27D26]" />,
      details: [
        'Channel prioritization (SEO vs. Ads vs. Video vs. Web)',
        'Keyword targeting & messaging architecture',
        'Wireframing, storyboard creation & production scheduling',
        'KPI definition & conversion tracking blueprint'
      ]
    },
    {
      number: '03',
      title: 'Execute',
      shortTitle: 'Agile Implementation',
      desc: 'Implement marketing, advertising, SEO, web development, or creative video solutions with precision.',
      icon: <Rocket className="w-5 h-5 text-[#F27D26]" />,
      details: [
        'On-page & technical SEO code deployment',
        'Google Ads campaign structuring with negative filters',
        'Responsive UI/UX development & speed optimization',
        '4K on-location shooting & high-retention video editing'
      ]
    },
    {
      number: '04',
      title: 'Improve',
      shortTitle: 'Continuous Optimization',
      desc: 'Monitor live performance, analyze conversion feedback, and continuously refine and scale the strategy.',
      icon: <Activity className="w-5 h-5 text-[#F27D26]" />,
      details: [
        'Search console indexation & ranking telemetry',
        'A/B testing ad copy, landing pages, and CTAs',
        'Bid strategy adjustments to decrease Cost-Per-Lead',
        'Transparent monthly executive growth reports'
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#F27D26]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <SectionHeader
            badgeText="Structured Execution"
            title="How"
            highlightedTitle="We Work"
            subtitle="A transparent, repeatable four-phase methodology designed to take your digital presence from initial audit to compounding momentum."
          />
        </div>

        {/* Desktop Horizontal Timeline / Step Cards */}
        <div className="hidden lg:grid grid-cols-4 gap-6 relative">
          {/* Connector bar across cards */}
          <div className="absolute top-8 left-12 right-12 h-0.5 bg-gradient-to-r from-[#F27D26]/30 via-[#F27D26]/10 to-[#F27D26]/30 z-0" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`relative z-10 p-6 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                activeStep === idx
                  ? 'bg-[#0c0c0c] border-[#F27D26]/60 shadow-xl shadow-black/40 -translate-y-2'
                  : 'bg-[#0c0c0c]/60 border-white/10 hover:border-white/20 hover:bg-[#0c0c0c]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className={`font-display text-2xl font-black ${
                    activeStep === idx ? 'text-[#F27D26]' : 'text-white/30'
                  }`}>
                    {step.number}
                  </span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                    activeStep === idx
                      ? 'bg-[#F27D26]/10 border-[#F27D26]/40 shadow-md'
                      : 'bg-[#050505] border-white/10'
                  }`}>
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#EDEDED] font-display mb-2">
                  {step.title}
                </h3>
                
                <p className="text-xs text-white/60 leading-relaxed mb-4">
                  {step.desc}
                </p>
              </div>

              {/* Details list for active card */}
              <div className="pt-4 border-t border-white/10">
                <ul className="space-y-1.5">
                  {step.details.slice(0, 2).map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-1.5 text-[11px] text-white/70">
                      <CheckCircle2 className="w-3 h-3 text-[#F27D26] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0c0c0c] border border-white/10 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold font-display text-[#F27D26]">
                    {step.number}
                  </span>
                  <h3 className="text-base font-bold text-[#EDEDED] font-display">
                    {step.title} — {step.shortTitle}
                  </h3>
                </div>
                <div className="p-2 rounded-lg bg-[#050505] border border-white/10">
                  {step.icon}
                </div>
              </div>

              <p className="text-xs text-white/70 leading-relaxed">
                {step.desc}
              </p>

              <div className="pt-3 border-t border-white/10">
                <ul className="space-y-1.5">
                  {step.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-xs text-white/60">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F27D26] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Action Prompt */}
        {navigate && (
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/consultation')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#F27D26] hover:text-[#ff9c54] px-4 py-2 rounded-xl bg-[#F27D26]/10 border border-[#F27D26]/30 hover:border-[#F27D26]/60 transition-all cursor-pointer"
            >
              <span>Schedule a Step 1 Discovery Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
