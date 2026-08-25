import React, { useState } from 'react';
import { projectsData } from '../../data/projectsData';
import { ServiceCategory } from '../../types';
import { 
  ArrowRight, 
  ExternalLink, 
  Sparkles,
  Layers
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

interface FeaturedProjectsProps {
  navigate: (path: string) => void;
  showAll?: boolean;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ navigate, showAll = false }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { label: 'All Work', value: 'all' },
    { label: 'SEO', value: 'seo' },
    { label: 'Google Ads', value: 'google-ads' },
    { label: 'Websites', value: 'website-creation' },
    { label: 'Video Editing', value: 'video-editing' },
    { label: 'Video Shooting', value: 'video-shooting' },
    { label: 'Digital Marketing', value: 'digital-marketing' }
  ];

  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  const displayProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <SectionHeader
            badgeText="Verified Portfolio"
            title="Our"
            highlightedTitle="Work"
            subtitle="Explore how we have engineered organic search dominance, high-performance PPC ad structures, modern web architectures, and cinematic video assets for businesses."
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeFilter === tab.value
                  ? 'bg-[#F27D26] text-[#050505] font-semibold shadow-md shadow-[#F27D26]/20'
                  : 'bg-[#0c0c0c] text-white/70 hover:text-white hover:bg-[#151515] border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <Card
              key={project.id}
              variant="default"
              hoverEffect
              className="flex flex-col justify-between overflow-hidden bg-[#0c0c0c] border border-white/10 group hover:border-[#F27D26]/40"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-[#050505]">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/20 to-transparent" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#050505]/90 text-[#F27D26] border border-[#F27D26]/30 backdrop-blur-md">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Client name badge */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] font-medium text-white/80">
                      Client: {project.clientName}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#EDEDED] font-display line-clamp-2 group-hover:text-[#F27D26] transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-white/60 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Highlights snippet */}
                  <div className="mt-4 pt-4 border-t border-white/10 space-y-1.5">
                    <div className="text-[11px] font-semibold text-white/80">
                      Strategy Focus: <span className="text-white/50 font-normal">{project.industry}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* View Project Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#050505] hover:bg-[#F27D26] hover:text-[#050505] text-xs font-semibold text-[#EDEDED] border border-white/10 hover:border-[#F27D26] flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer group/btn"
                >
                  <span>View Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F27D26] group-hover/btn:text-[#050505]" />
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* If no projects in filter */}
        {displayProjects.length === 0 && (
          <div className="text-center py-16 p-8 rounded-3xl bg-[#0c0c0c] border border-white/10 max-w-lg mx-auto">
            <Layers className="w-10 h-10 text-white/40 mx-auto mb-3" />
            <h4 className="text-base font-bold text-[#EDEDED]">No Case Studies in This Category Yet</h4>
            <p className="text-xs text-white/50 mt-1">We are actively documenting our latest client work. Check back soon or request a custom portfolio preview.</p>
            <button
              onClick={() => setActiveFilter('all')}
              className="mt-4 px-4 py-2 text-xs font-semibold text-[#F27D26] bg-[#F27D26]/10 rounded-xl border border-[#F27D26]/30 hover:bg-[#F27D26]/20"
            >
              Reset to All Projects
            </button>
          </div>
        )}

        {/* View All Projects Button */}
        {!showAll && (
          <div className="mt-14 text-center">
            <button
              onClick={() => navigate('/projects')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0c0c0c] hover:bg-[#151515] text-sm font-semibold text-[#EDEDED] border border-white/10 hover:border-[#F27D26]/50 transition-colors cursor-pointer"
            >
              <span>Explore All Case Studies & Results</span>
              <ArrowRight className="w-4 h-4 text-[#F27D26]" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
