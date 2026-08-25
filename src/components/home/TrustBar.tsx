import React from 'react';
import { 
  Search, 
  TrendingUp, 
  Globe, 
  Video, 
  Camera, 
  Compass, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

interface TrustBarProps {
  navigate: (path: string) => void;
}

export const TrustBar: React.FC<TrustBarProps> = ({ navigate }) => {
  const highlights = [
    {
      title: 'SEO',
      desc: 'Rank for high-intent search queries & drive organic traffic.',
      icon: <Search className="w-5 h-5 text-[#F27D26]" />,
      path: '/services/seo'
    },
    {
      title: 'Google Ads',
      desc: 'Target ready-to-buy customers with conversion-focused PPC.',
      icon: <TrendingUp className="w-5 h-5 text-[#F27D26]" />,
      path: '/services/google-ads'
    },
    {
      title: 'Website Creation',
      desc: 'Fast, mobile-friendly websites designed to convert visitors.',
      icon: <Globe className="w-5 h-5 text-[#F27D26]" />,
      path: '/services/website-creation'
    },
    {
      title: 'Video Editing',
      desc: 'High-retention Reels, Shorts, dynamic subtitles & video ads.',
      icon: <Video className="w-5 h-5 text-[#F27D26]" />,
      path: '/services/video-editing'
    },
    {
      title: 'Video Shooting',
      desc: '4K cinema cameras, pro lighting & on-location brand footage.',
      icon: <Camera className="w-5 h-5 text-[#F27D26]" />,
      path: '/services/video-shooting'
    },
    {
      title: 'Digital Marketing',
      desc: 'Omnichannel customer acquisition & revenue-driven strategy.',
      icon: <Compass className="w-5 h-5 text-[#F27D26]" />,
      path: '/services/digital-marketing'
    },
    {
      title: 'Creative Content',
      desc: 'Compelling brand messaging, visuals & high-converting ad copy.',
      icon: <Sparkles className="w-5 h-5 text-[#F27D26]" />,
      path: '/quote'
    }
  ];

  return (
    <section className="py-16 bg-[#080808] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionHeader
            badgeText="Comprehensive Growth Capabilities"
            title="Everything You Need to"
            highlightedTitle="Grow Online"
            subtitle="Seven core digital pillars engineered to help your business build visibility, attract qualified leads, and establish authority."
          />
        </div>

        {/* 7 Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              onClick={() => navigate(item.path)}
              className="group p-5 rounded-2xl bg-[#0c0c0c] border border-white/10 hover:border-[#F27D26]/40 hover:bg-[#121212] transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 shadow-sm"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-[#F27D26]/30 transition-all">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-[#EDEDED] group-hover:text-[#F27D26] transition-colors font-display">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-white/50 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold text-white/40 group-hover:text-[#F27D26] transition-colors">
                <span>Explore</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
