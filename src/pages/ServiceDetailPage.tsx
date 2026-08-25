import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { ServiceCategory } from '../types';
import { 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  TrendingUp, 
  Globe, 
  Video, 
  Camera, 
  Compass, 
  Sparkles, 
  Check, 
  Play, 
  Sliders, 
  PhoneCall, 
  BarChart3, 
  ShieldCheck, 
  Layers, 
  FileText, 
  HelpCircle,
  Cpu,
  MapPin,
  FileSearch,
  Target,
  Layout,
  MousePointerClick,
  Crosshair,
  Repeat,
  Smartphone,
  Zap,
  Inbox,
  Clock,
  Film,
  Package,
  Calendar,
  Briefcase
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { SectionHeader } from '../components/ui/SectionHeader';

interface ServiceDetailPageProps {
  slug: ServiceCategory;
  navigate: (path: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug, navigate }) => {
  const service = servicesData.find(s => s.slug === slug) || servicesData[0];
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeVideoTab, setActiveVideoTab] = useState<'reels' | 'corporate' | 'promotional'>('reels');

  // Helper icons
  const getFeatureIcon = (icon: string) => {
    switch (icon) {
      case 'FileSearch': return <FileSearch className="w-5 h-5 text-cyan-400" />;
      case 'Target': return <Target className="w-5 h-5 text-amber-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-violet-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-rose-400" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-sky-400" />;
      case 'MousePointerClick': return <MousePointerClick className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Crosshair': return <Crosshair className="w-5 h-5 text-cyan-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-violet-400" />;
      case 'Repeat': return <Repeat className="w-5 h-5 text-pink-400" />;
      case 'DollarSign': return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-violet-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Search': return <Search className="w-5 h-5 text-cyan-400" />;
      case 'Inbox': return <Inbox className="w-5 h-5 text-teal-400" />;
      case 'Play': return <Play className="w-5 h-5 text-rose-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'Sliders': return <Sliders className="w-5 h-5 text-cyan-400" />;
      case 'Film': return <Film className="w-5 h-5 text-pink-400" />;
      case 'Clock': return <Clock className="w-5 h-5 text-emerald-400" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-blue-400" />;
      case 'Package': return <Package className="w-5 h-5 text-amber-400" />;
      case 'Calendar': return <Calendar className="w-5 h-5 text-violet-400" />;
      default: return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="pt-28 pb-20 bg-slate-950 min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-grid-pattern border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 mb-4">
                <Badge variant="cyan" dot size="md">
                  Pixelrise {service.shortTitle}
                </Badge>
                <span className="text-xs text-slate-400">{service.tagline}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight leading-[1.15]">
                {service.heroHeadline}
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {service.heroSubheadline}
              </p>

              {/* Service-Specific Primary CTA */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {slug === 'seo' && (
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => navigate('/consultation')}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Get an SEO Consultation
                  </Button>
                )}

                {slug === 'google-ads' && (
                  <Button
                    variant="glow"
                    size="lg"
                    onClick={() => navigate('/quote')}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Start Your Google Ads Campaign
                  </Button>
                )}

                {slug === 'website-creation' && (
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => navigate('/quote')}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Create My Website
                  </Button>
                )}

                {slug === 'video-editing' && (
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => navigate('/quote')}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Send Your Project
                  </Button>
                )}

                {slug === 'video-shooting' && (
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => navigate('/consultation')}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Plan a Video Shoot
                  </Button>
                )}

                {slug === 'digital-marketing' && (
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => navigate('/quote')}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Explore Digital Marketing
                  </Button>
                )}

                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => navigate('/quote')}
                >
                  Request a Quote
                </Button>
              </div>

              {/* Trust highlights */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Transparent Deliverables</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>No Lock-In Long Term Contracts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Dedicated Senior Strategist</span>
                </div>
              </div>
            </div>

            {/* Right Banner Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                <img
                  src={service.bannerImage}
                  alt={service.title}
                  className="w-full h-80 sm:h-[420px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-slate-800">
                  <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    Core Outcome
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {service.deliverableSummary}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SEO-SPECIFIC DEEP DIVE (Audit, Keywords, On-Page, Technical, Local, Content) */}
      {slug === 'seo' && (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-900">
          <SectionHeader
            badgeText="SEO Architecture"
            title="The Six Pillars of"
            highlightedTitle="Search Dominance"
            subtitle="How we turn organic Google searches into qualified commercial revenue pipelines."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="default" className="p-6 bg-slate-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-4">
                <FileSearch className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">SEO Audit</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Identify technical errors, indexing blocks, duplicate content penalties, broken backlinks, and crawl bottlenecks preventing Google from ranking your site.
              </p>
            </Card>

            <Card variant="default" className="p-6 bg-slate-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">Keyword Research</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Discover high-intent commercial and informational search queries used by active buyers with high purchase intent in your target location.
              </p>
            </Card>

            <Card variant="default" className="p-6 bg-slate-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-4">
                <Layout className="w-5 h-5 text-violet-400" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">On-Page SEO</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Optimize page titles, meta descriptions, H1/H2/H3 header hierarchy, clean URL structures, internal linking pathways, and image ALT tags.
              </p>
            </Card>

            <Card variant="default" className="p-6 bg-slate-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">Technical SEO</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Enhance crawlability, sitemap indexation, structured schema markup (Organization, LocalBusiness, FAQ), mobile usability, and Core Web Vitals.
              </p>
            </Card>

            <Card variant="default" className="p-6 bg-slate-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-rose-400" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">Local SEO & Map Pack</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Optimize your Google Business Profile (GBP), standardize NAP citations across directories, and rank in the top 3 Google local map results.
              </p>
            </Card>

            <Card variant="default" className="p-6 bg-slate-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-teal-400" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">SEO Content Engine</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Create comprehensive, helpful, search-focused service pages and guides that address customer pain points and establish topical authority.
              </p>
            </Card>
          </div>
        </section>
      )}

      {/* 3. GOOGLE ADS SPECIFIC DEEP DIVE (Search, Display, Remarketing, 6-Step Process, Live Mockup) */}
      {slug === 'google-ads' && (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-900">
          <SectionHeader
            badgeText="Pay-Per-Click Precision"
            title="Google Ads"
            highlightedTitle="Campaign Engine"
            subtitle="Engineered PPC campaigns that capture active demand without wasting budget on irrelevant clicks."
          />

          {/* Campaign Types Grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">Search Campaigns</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Appear at the very top of Google when prospective clients search for commercial keywords with high purchase intent.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                <Repeat className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">Remarketing & Retargeting</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Re-engage past website visitors across Google Display network and YouTube, reminding them to complete their inquiry.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <Crosshair className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">Performance Max & Display</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Omnichannel AI-driven placements across Gmail, YouTube, Maps, and Discover tuned with strict audience signal guards.
              </p>
            </div>
          </div>

          {/* 6-Step Google Ads Process */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800">
            <h3 className="text-xl font-bold text-white font-display text-center mb-8">
              Our 6-Step Google Ads Management Process
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { step: '01', title: 'Understand Business & Audience', desc: 'Identify target customer profiles, high-margin services, and economics.' },
                { step: '02', title: 'Research Commercial Keywords', desc: 'Isolate exact-match commercial terms and build robust negative keyword lists.' },
                { step: '03', title: 'Build Campaigns & Copy', desc: 'Write high-CTR responsive search ads and configure ad extensions.' },
                { step: '04', title: 'Launch With Strict Tracking', desc: 'Verify GA4 and GTM conversion event firing before budget goes live.' },
                { step: '05', title: 'Monitor Search Terms Daily', desc: 'Continuously add negative keywords to prune waste clicks.' },
                { step: '06', title: 'Optimize Bids & Scale ROAS', desc: 'Deploy Target CPA / tROAS smart bidding models to maximize pipeline.' }
              ].map((p, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
                  <div className="text-sm font-black text-amber-400 font-display mb-1">{p.step}</div>
                  <h4 className="text-sm font-bold text-white">{p.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. WEBSITE CREATION SPECIFIC DEEP DIVE (6 Requirements, 6 Website Types, 7-Step Process) */}
      {slug === 'website-creation' && (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-900">
          <SectionHeader
            badgeText="Web Architecture"
            title="What A Modern Business"
            highlightedTitle="Website Must Deliver"
            subtitle="Your website is not just a digital brochure—it is your primary sales conversion engine."
          />

          {/* 6 Essential Website Requirements */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Build Instant Credibility', desc: 'Establish professional authority and trust within the first 3 seconds of a visitor landing.', icon: <ShieldCheck className="w-5 h-5 text-cyan-400" /> },
              { title: 'Generate Qualified Enquiries', desc: 'Frictionless quote builders, consultation schedulers, and direct contact touchpoints.', icon: <Inbox className="w-5 h-5 text-amber-400" /> },
              { title: 'Showcase Services & Proof', desc: 'Present your portfolio, deliverables, and client outcomes with crystal clarity.', icon: <Layout className="w-5 h-5 text-violet-400" /> },
              { title: 'Support Organic SEO', desc: 'Clean semantic HTML5 structure, schema markup, and rapid crawl pathways built-in.', icon: <Search className="w-5 h-5 text-emerald-400" /> },
              { title: 'Flawless Mobile Experience', desc: 'Responsive touch interfaces engineered specifically for smartphone visitors.', icon: <Smartphone className="w-5 h-5 text-rose-400" /> },
              { title: 'Convert Visitors Into Buyers', desc: 'Strategic copy hierarchy, psychological trust triggers, and clear call-to-actions.', icon: <Zap className="w-5 h-5 text-sky-400" /> }
            ].map((req, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-4">
                  {req.icon}
                </div>
                <h3 className="text-base font-bold text-white font-display">{req.title}</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{req.desc}</p>
              </div>
            ))}
          </div>

          {/* 6 Website Types */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-white font-display text-center mb-8">
              Website Solutions We Build
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                'Business Websites',
                'Service Websites',
                'Landing Pages',
                'Portfolio Websites',
                'WordPress Websites',
                'Marketing Websites'
              ].map((type, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-center flex items-center justify-center">
                  <span className="text-xs font-bold text-slate-200">{type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 7-Step Website Creation Process */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800">
            <h3 className="text-xl font-bold text-white font-display text-center mb-8">
              Our 7-Step Website Creation Roadmap
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', title: 'Requirements', desc: 'Target audience, competitors & conversion milestones.' },
                { step: '02', title: 'Planning', desc: 'Information architecture & wireframe blueprints.' },
                { step: '03', title: 'UI/UX Design', desc: 'High-fidelity mockups, typography & branding.' },
                { step: '04', title: 'Development', desc: 'Clean, lightning-fast code & responsive layout.' },
                { step: '05', title: 'Content Integration', desc: 'Copywriting, image optimization & schema setup.' },
                { step: '06', title: 'Testing & QA', desc: 'Cross-browser, mobile speed & form validation checks.' },
                { step: '07', title: 'Public Launch', desc: 'Domain DNS migration, SSL & Google Search Console sync.' }
              ].map((p, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
                  <div className="text-xs font-black text-cyan-400 font-display mb-1">{p.step}</div>
                  <h4 className="text-xs font-bold text-white">{p.title}</h4>
                  <p className="text-[11px] text-slate-400 mt-1">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. VIDEO EDITING SPECIFIC DEEP DIVE (Reels, Shorts, Video Ads, Dynamic Portfolio) */}
      {slug === 'video-editing' && (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-900">
          <SectionHeader
            badgeText="Attention Engineering"
            title="Video Formats Designed For"
            highlightedTitle="Maximum Watch Time"
            subtitle="We edit content paced for thumb-stopping retention and authentic viewer connection."
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Instagram Reels & Shorts', desc: 'High-retention 9:16 vertical cuts with kinetic typography, sound effects, and 3-second visual hooks.' },
              { title: 'High-Converting Video Ads', desc: 'Problem-solution video structures designed for Meta, YouTube, and TikTok paid ads.' },
              { title: 'Promotional Brand Videos', desc: 'Showcase your company story, facility, and core offerings with cinematic flair.' },
              { title: 'Corporate & Business Videos', desc: 'Executive interviews, company culture spotlights, and investor presentations.' },
              { title: 'Social Media Content Engines', desc: 'Batch editing workflows that keep your content calendar consistently active.' },
              { title: 'Motion Graphics & Subtitles', desc: 'Dynamic animated lower thirds, branded color overlays, and clean logo reveals.' }
            ].map((v, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-4">
                  <Film className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white font-display">{v.title}</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Interactive Video Portfolio Showcase */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  Featured Video Editing Showcases
                </h3>
                <p className="text-xs text-slate-400 mt-1">Samples of short-form, ad, and corporate video editing styles.</p>
              </div>

              <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
                {(['reels', 'corporate', 'promotional'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveVideoTab(tab)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                      activeVideoTab === tab
                        ? 'bg-rose-500 text-slate-950 font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Video Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Fitness Brand Short-Form Reel', time: '0:35s', ratio: '9:16 Vertical', img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80' },
                { title: 'SaaS Platform Commercial Ad', time: '0:45s', ratio: '16:9 Widescreen', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80' },
                { title: 'Specialty Coffee Brand Story', time: '1:20s', ratio: 'Cinematic 4K', img: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=600&q=80' }
              ].map((item, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 group">
                  <div className="relative h-48 overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-rose-500/90 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-slate-950/80 text-[10px] text-slate-300 font-mono">
                      {item.time}
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="text-[10px] text-rose-400 font-semibold uppercase tracking-wider">{item.ratio}</div>
                    <h4 className="text-sm font-bold text-white mt-1">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. VIDEO SHOOTING SPECIFIC DEEP DIVE (4K Cameras, Lighting, Batch Shoots) */}
      {slug === 'video-shooting' && (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-900">
          <SectionHeader
            badgeText="On-Location Cinematography"
            title="Commercial 4K Video Production"
            highlightedTitle="For Real Businesses"
            subtitle="We bring cinema-grade cameras, broadcast audio, softbox lighting, and gimbals directly to your location."
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Corporate Brand Stories', desc: 'Cinematic company profiles, founder journeys, and employee culture features.' },
              { title: 'Product Videography', desc: 'Macro close-ups, 360-degree turntable shots, and unboxing sequences.' },
              { title: 'Service & Facility Walkthroughs', desc: 'Showcase your clinic, factory, office, cafe, or real estate property.' },
              { title: 'Client Video Testimonials', desc: 'Guided interview setups that capture authentic, persuasive client endorsements.' },
              { title: 'Batch Social Video Shoots', desc: 'Record an entire month of educational talking-head Reels in a single half-day session.' },
              { title: 'Promotional Commercials', desc: 'Scripted commercial shoots ready for YouTube and television distribution.' }
            ].map((s, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                  <Camera className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white font-display">{s.title}</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 7. Key Features / Capabilities Grid for all services */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Capabilities Breakdown"
          title="What We"
          highlightedTitle="Deliver"
          subtitle="Detailed technical and creative deliverables included in our execution scope."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.keyFeatures.map((feat, idx) => (
            <Card
              key={idx}
              variant="default"
              hoverEffect
              className="p-6 bg-slate-900/50 border border-slate-800 flex flex-col justify-start"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-4">
                {getFeatureIcon(feat.icon)}
              </div>
              <h3 className="text-base font-bold text-white font-display mb-2">
                {feat.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {feat.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* 8. Process Steps */}
      <section className="py-20 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badgeText="Step-by-Step Delivery"
            title="Our"
            highlightedTitle="Execution Process"
            subtitle="How we take your requirements from initial audit to live deployment."
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-black text-cyan-400 font-display mb-3">
                    {step.stepNumber}
                  </div>
                  <h3 className="text-base font-bold text-white font-display mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Service FAQ Accordion */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Service FAQ"
          title="Questions About"
          highlightedTitle={service.shortTitle}
        />

        <div className="mt-10 space-y-3.5">
          {service.faqList.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900 border-cyan-500/40 shadow-lg'
                    : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-display font-bold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-slate-900 text-slate-400 ${isOpen ? 'text-cyan-400 rotate-180' : ''}`}>
                    <HelpCircle className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/60 pt-3">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. Bottom CTA */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display">
            Ready to Start Your {service.shortTitle} Project?
          </h2>
          <p className="mt-3 text-slate-300 text-sm max-w-xl mx-auto">
            Contact Pixelrise Media today to discuss your project scope, timeline, and custom quotation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
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

    </div>
  );
};
