import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  Award, 
  ShieldCheck, 
  Users, 
  Layers, 
  Sparkles,
  Zap,
  Globe,
  TrendingUp,
  Compass
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { SectionHeader } from '../components/ui/SectionHeader';

interface AboutPageProps {
  navigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  const pillars = [
    {
      title: 'Data-Backed Strategy',
      desc: 'Every campaign starts with audience research, competitor gap analysis, and conversion path modeling.',
      icon: <Compass className="w-5 h-5 text-cyan-400" />
    },
    {
      title: 'Creative Excellence',
      desc: 'We combine cinema 4K shooting, dynamic motion editing, and editorial web design to make brands memorable.',
      icon: <Sparkles className="w-5 h-5 text-amber-400" />
    },
    {
      title: 'Zero Vanity Metrics',
      desc: 'We measure true commercial impact: qualified inbound inquiries, reduced cost-per-lead, and organic search rank.',
      icon: <Target className="w-5 h-5 text-emerald-400" />
    },
    {
      title: 'Full Ownership & Transparency',
      desc: 'You maintain 100% administrative control over your ad accounts, web domains, and creative assets.',
      icon: <ShieldCheck className="w-5 h-5 text-violet-400" />
    }
  ];

  const teamValues = [
    {
      role: 'Organic Search & Technical SEO',
      focus: 'Architecting search authority, schema optimization, and keyword clustering to capture high-intent buyers.',
      icon: <TrendingUp className="w-5 h-5 text-cyan-400" />
    },
    {
      role: 'PPC & Google Ads Performance',
      focus: 'Protecting client budgets with negative keyword curation and conversion-rate optimization.',
      icon: <Zap className="w-5 h-5 text-amber-400" />
    },
    {
      role: 'Web Engineering & UI/UX',
      focus: 'Building sub-second responsive websites with clean semantic code and conversion workflows.',
      icon: <Globe className="w-5 h-5 text-violet-400" />
    },
    {
      role: 'Video Production & Cinema Crew',
      focus: 'Producing 4K commercial videos, Reels, and high-retention motion graphics that build deep consumer trust.',
      icon: <Award className="w-5 h-5 text-rose-400" />
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-950 min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-grid-pattern border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex justify-center mb-4">
            <Badge variant="cyan" dot size="md">
              About Pixelrise Media
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight max-w-4xl mx-auto leading-tight">
            Your Dedicated Partner For{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Digital Visibility & Growth
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Pixelrise Media is a digital marketing and creative services agency helping ambitious businesses strengthen their online presence through strategy, technology, advertising, content, websites, and creative solutions.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/quote')}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start a Project With Us
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
      </section>

      {/* 2. Agency Story & Vision */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-5 text-slate-300 text-base leading-relaxed">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Our Foundational Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              Bridging High-Impact Creativity With Analytical Precision
            </h2>

            <p>
              In today’s crowded digital landscape, businesses often face a frustrating dilemma: traditional creative agencies produce pretty visuals that don't generate leads, while rigid analytical agencies run generic ads with lackluster creative.
            </p>

            <p>
              <strong>Pixelrise Media was founded to solve this divide.</strong> We believe that sustainable digital growth requires both world-class creative assets (cinema-grade video, engaging motion graphics, bespoke UI/UX) and disciplined technical execution (clean SEO code, keyword intent targeting, and conversion rate optimization).
            </p>

            <p>
              We don’t treat clients as numbers on a spreadsheet. We operate as an extension of your leadership team, aligning every marketing initiative with tangible business objectives.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-2xl font-bold text-cyan-400 font-display">100%</div>
                <div className="text-xs text-slate-400 mt-1">Direct Account Ownership & Transparency</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-2xl font-bold text-amber-400 font-display">6 Core</div>
                <div className="text-xs text-slate-400 mt-1">Specialized Growth Disciplines</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Pixelrise Media creative strategy session"
                className="w-full h-96 sm:h-[450px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-slate-800">
                <div className="text-sm font-bold text-white">Our Mission</div>
                <p className="text-xs text-slate-300 mt-1">
                  To empower businesses of all sizes with sustainable digital visibility, predictable customer acquisition pipelines, and high-trust brand authority.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Core Principles Grid */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badgeText="How We Operate"
            title="Our Core"
            highlightedTitle="Operating Principles"
            subtitle="The fundamental standards that guide every campaign, website build, and creative production at Pixelrise Media."
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <Card
                key={idx}
                variant="default"
                hoverEffect
                className="p-6 bg-slate-950 border border-slate-800/80 flex flex-col justify-start"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-white font-display mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Discipline Specializations */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Integrated Capabilities"
          title="Specialized"
          highlightedTitle="Growth Disciplines"
          subtitle="Our multidisciplinary team unites diverse expertise into a synchronized digital growth engine."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamValues.map((val, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                {val.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-display">
                  {val.role}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {val.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Bottom Conversion CTA */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 to-cyan-950/40 border border-slate-800 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Ready to Build a Better Online Presence?
          </h2>
          <p className="mt-3 text-slate-300 text-sm max-w-xl mx-auto">
            Contact us today for a straightforward discussion about your growth objectives and how we can assist you.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={() => navigate('/quote')}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request a Project Quote
            </Button>
            <Button
              variant="secondary"
              size="md"
              onClick={() => navigate('/consultation')}
            >
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};
