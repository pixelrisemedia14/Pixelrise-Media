import React from 'react';
import { 
  Search, 
  TrendingUp, 
  Globe, 
  Video, 
  Camera, 
  Compass, 
  ArrowRight, 
  Check, 
  Sparkles
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

interface ServicesGridProps {
  navigate: (path: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ navigate }) => {
  const services = [
    {
      title: 'SEO Services',
      slug: '/services/seo',
      desc: 'Improve your search visibility and attract relevant organic traffic with strategic SEO.',
      icon: <Search className="w-6 h-6 text-[#F27D26]" />,
      tag: 'Compounding Search Growth',
      color: 'from-[#F27D26]/20 to-transparent border-[#F27D26]/30',
      items: [
        'Keyword Research & Search Gap Analysis',
        'On-Page SEO & Content Hierarchy',
        'Technical SEO & Core Web Vitals',
        'Local SEO & Google Business Profile',
        'Search-Driven Content Optimization',
        'In-Depth SEO Audits'
      ],
      ctaText: 'Explore SEO',
      accent: 'text-[#F27D26]'
    },
    {
      title: 'Google Ads Management',
      slug: '/services/google-ads',
      desc: 'Reach potential customers when they are actively searching for your products or services.',
      icon: <TrendingUp className="w-6 h-6 text-[#F27D26]" />,
      tag: 'Direct Intent PPC',
      color: 'from-[#F27D26]/20 to-transparent border-[#F27D26]/30',
      items: [
        'Campaign Setup & Structuring',
        'Commercial Keyword Research',
        'Persuasive Ad Copy Creation',
        'Conversion Tracking & GTM Setup',
        'Continuous Campaign Optimization',
        'Budget & Performance Monitoring'
      ],
      ctaText: 'Explore Google Ads',
      accent: 'text-[#F27D26]'
    },
    {
      title: 'Website Creation',
      slug: '/services/website-creation',
      desc: 'Build a professional website designed to represent your brand and convert visitors into potential customers.',
      icon: <Globe className="w-6 h-6 text-[#F27D26]" />,
      tag: 'Conversion Web Platform',
      color: 'from-[#F27D26]/20 to-transparent border-[#F27D26]/30',
      items: [
        'Modern Business Websites',
        'High-Converting Landing Pages',
        'WordPress & Custom Modern Stacks',
        '100% Responsive Mobile Design',
        'SEO-Friendly Technical Structure',
        'Conversion-Focused UI/UX'
      ],
      ctaText: 'Create Your Website',
      accent: 'text-[#F27D26]'
    },
    {
      title: 'Video Editing',
      slug: '/services/video-editing',
      desc: 'Turn raw footage into engaging content for social media, advertising, and business communication.',
      icon: <Video className="w-6 h-6 text-[#F27D26]" />,
      tag: 'Social & Ad Retention',
      color: 'from-[#F27D26]/20 to-transparent border-[#F27D26]/30',
      items: [
        'Instagram Reels & YouTube Shorts',
        'High-Converting Video Ads',
        'Promotional & Brand Story Cuts',
        'Social Media Video Pipelines',
        'Corporate & Business Videos',
        'Motion Graphics & Subtitles'
      ],
      ctaText: 'Explore Video Editing',
      accent: 'text-[#F27D26]'
    },
    {
      title: 'Video Shooting',
      slug: '/services/video-shooting',
      desc: 'Create professional visual content that showcases your products, services, team, and brand.',
      icon: <Camera className="w-6 h-6 text-[#F27D26]" />,
      tag: 'On-Location 4K Production',
      color: 'from-[#F27D26]/20 to-transparent border-[#F27D26]/30',
      items: [
        'Corporate & Business Shoots',
        'Product & Turntable Videography',
        'Promotional Brand Videos',
        'Service & Facility Walkthroughs',
        'Batch Social Media Content Shoots',
        'Client Video Testimonials'
      ],
      ctaText: 'Plan a Video Shoot',
      accent: 'text-[#F27D26]'
    },
    {
      title: 'Digital Marketing',
      slug: '/services/digital-marketing',
      desc: 'Build a stronger online presence with customized digital marketing strategies designed around your business goals.',
      icon: <Compass className="w-6 h-6 text-[#F27D26]" />,
      tag: 'Full-Funnel Growth',
      color: 'from-[#F27D26]/20 to-transparent border-[#F27D26]/30',
      items: [
        'Full-Funnel Customer Acquisition',
        'Omnichannel Marketing Strategy',
        'Conversion Rate Optimization (CRO)',
        'Content Marketing & Brand Authority',
        'Lead Nurturing & Email Workflows',
        'Executive Attribution Dashboards'
      ],
      ctaText: 'Explore Digital Marketing',
      accent: 'text-[#F27D26]'
    }
  ];

  return (
    <section className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <SectionHeader
            badgeText="Our Specialized Services"
            title="What"
            highlightedTitle="We Do"
            subtitle="Tailored digital marketing and creative production services engineered to produce measurable business growth."
          />
        </div>

        {/* 6 Core Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card
              key={idx}
              variant="default"
              hoverEffect
              className="flex flex-col justify-between p-8 bg-[#0c0c0c] border border-white/10 relative overflow-hidden group"
            >
              {/* Subtle background ambient gradient on hover */}
              <div className={`absolute -right-16 -top-16 w-48 h-48 rounded-full bg-gradient-to-br ${service.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div>
                {/* Header with Icon and Category Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#050505] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#F27D26]/40 transition-all duration-300 shadow-md">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-white/60 bg-[#050505] px-3 py-1 rounded-full border border-white/10">
                    {service.tag}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-[#EDEDED] font-display tracking-tight group-hover:text-[#F27D26] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                  {service.desc}
                </p>

                {/* Deliverables checklist */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3">
                    What's Included:
                  </h4>
                  <ul className="space-y-2.5">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-xs text-white/70">
                        <Check className="w-4 h-4 text-[#F27D26] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <button
                  onClick={() => navigate(service.slug)}
                  className="w-full py-3 px-4 rounded-xl bg-[#050505] hover:bg-[#F27D26] hover:text-[#050505] border border-white/10 text-sm font-semibold text-[#EDEDED] flex items-center justify-center gap-2 transition-all duration-200 group-hover:border-[#F27D26]/40 cursor-pointer"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4 text-[#F27D26] group-hover:text-[#050505] group-hover:translate-x-1 transition-all" />
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom prompt */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0c0c0c] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#F27D26]/10 text-[#F27D26]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#EDEDED]">Need a multi-service integrated growth package?</div>
              <div className="text-xs text-white/50">We bundle SEO, Google Ads, Web Development, and Video Production for custom requirements.</div>
            </div>
          </div>
          <button
            onClick={() => navigate('/quote')}
            className="text-xs font-bold text-[#050505] bg-[#F27D26] hover:bg-[#ff9c54] px-5 py-2.5 rounded-xl transition-colors shrink-0 cursor-pointer shadow-lg shadow-[#F27D26]/20"
          >
            Custom Growth Package
          </button>
        </div>

      </div>
    </section>
  );
};
