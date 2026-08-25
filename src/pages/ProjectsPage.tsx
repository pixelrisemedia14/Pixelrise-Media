import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { ServiceCategory } from '../types';
import { 
  Search, 
  Layers, 
  ArrowRight, 
  Filter, 
  ExternalLink, 
  Sparkles,
  TrendingUp,
  BarChart2
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { SectionHeader } from '../components/ui/SectionHeader';

interface ProjectsPageProps {
  navigate: (path: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ navigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filterTabs = [
    { label: 'All Projects', value: 'all' },
    { label: 'SEO', value: 'seo' },
    { label: 'Google Ads', value: 'google-ads' },
    { label: 'Websites', value: 'website-creation' },
    { label: 'Video Editing', value: 'video-editing' },
    { label: 'Video Shooting', value: 'video-shooting' },
    { label: 'Digital Marketing', value: 'digital-marketing' }
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.industry.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 bg-slate-950 min-h-screen">
      
      {/* 1. Hero */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-grid-pattern border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex justify-center mb-4">
            <Badge variant="cyan" dot size="md">
              Client Case Studies
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight max-w-4xl mx-auto leading-tight">
            Our Portfolio &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Client Results
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover how Pixelrise Media has engineered top Google search rankings, high-converting paid search campaigns, responsive web platforms, and cinema-quality video productions.
          </p>

          {/* Quick stats counter bar */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-display">150+</div>
              <div className="text-xs text-slate-400 mt-0.5">Projects Delivered</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-display">4.9/5</div>
              <div className="text-xs text-slate-400 mt-0.5">Client Satisfaction</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-display">3.4x</div>
              <div className="text-xs text-slate-400 mt-0.5">Average ROAS Target</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-violet-400 font-display">85%</div>
              <div className="text-xs text-slate-400 mt-0.5">Organic Search Uplift</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Portfolio Showcase & Filters */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search & Category Filter bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-none no-scrollbar">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveCategory(tab.value)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === tab.value
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search case studies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              variant="default"
              hoverEffect
              className="flex flex-col justify-between overflow-hidden bg-slate-900/80 border border-slate-800/90 group"
            >
              <div>
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden bg-slate-950">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 text-cyan-300 border border-slate-700/80 backdrop-blur-md">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Industry tag */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] font-medium text-slate-300">
                      Industry: {project.industry}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white font-display line-clamp-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Results preview tag */}
                  <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Client: <strong className="text-slate-200">{project.clientName}</strong></span>
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-500/20">
                      Verified Case Study
                    </span>
                  </div>
                </div>
              </div>

              {/* View Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-cyan-500 hover:text-slate-950 text-xs font-semibold text-slate-200 border border-slate-800 hover:border-cyan-400 flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 p-8 rounded-3xl bg-slate-900/40 border border-slate-800 max-w-md mx-auto">
            <Layers className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h4 className="text-base font-bold text-white">No Case Studies Found</h4>
            <p className="text-xs text-slate-400 mt-1">Try adjusting your search terms or selecting a different category.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchTerm(''); }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-cyan-400 bg-cyan-950/60 rounded-xl border border-cyan-500/30"
            >
              Reset Filters
            </button>
          </div>
        )}

      </section>

      {/* 3. Bottom Proposal Prompt */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 to-cyan-950/40 border border-slate-800 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Want Similar Results For Your Business?
          </h2>
          <p className="mt-3 text-slate-300 text-sm max-w-xl mx-auto">
            Share your current challenges with our team, and we will formulate a structured roadmap to accelerate your inbound pipeline.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={() => navigate('/quote')}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request a Custom Proposal
            </Button>
            <Button
              variant="secondary"
              size="md"
              onClick={() => navigate('/consultation')}
            >
              Schedule Discovery Call
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};
