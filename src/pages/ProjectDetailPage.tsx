import React from 'react';
import { projectsData } from '../data/projectsData';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  AlertTriangle, 
  Compass, 
  Zap, 
  Trophy, 
  Lightbulb, 
  Layers,
  Calendar,
  Building2,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { SectionHeader } from '../components/ui/SectionHeader';

interface ProjectDetailPageProps {
  slug: string;
  navigate: (path: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ slug, navigate }) => {
  const project = projectsData.find(p => p.slug === slug) || projectsData[0];

  return (
    <div className="pt-28 pb-20 bg-slate-950 min-h-screen">
      
      {/* 1. Top Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={() => navigate('/projects')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Case Studies</span>
        </button>
      </div>

      {/* 2. Project Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900">
          
          <div className="relative h-72 sm:h-96 lg:h-[450px] w-full">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
            
            <div className="absolute bottom-8 left-6 sm:left-10 right-6 sm:right-10">
              <div className="inline-flex items-center gap-2 mb-3">
                <Badge variant="cyan" size="md">
                  {project.categoryLabel}
                </Badge>
                <span className="text-xs text-slate-300 font-medium">{project.industry}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-tight max-w-4xl">
                {project.title}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-cyan-400" />
                  <span>Client: <strong>{project.clientName}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>Industry: <strong>{project.industry}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Status: <strong>Completed & Deployed</strong></span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Case Study Structured Breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Body Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1. Project Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white font-display flex items-center gap-3">
                <span className="w-2 h-6 bg-cyan-400 rounded-full" />
                Project Overview
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.summary}
              </p>
            </section>

            {/* 2. Challenge & Obstacle */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2.5 text-amber-400">
                <AlertTriangle className="w-5 h-5" />
                <h3 className="text-lg font-bold font-display">The Core Challenge</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.challenge}
              </p>
            </section>

            {/* 3. Project Goal / Objective */}
            <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2.5 text-cyan-400">
                <Target className="w-5 h-5" />
                <h3 className="text-lg font-bold font-display">Target Objectives & Goals</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.objective}
              </p>
            </section>

            {/* 4. Strategy & Methodological Approach */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white font-display flex items-center gap-3">
                <Compass className="w-6 h-6 text-cyan-400" />
                Strategic Approach
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.strategy}
              </p>
            </section>

            {/* 5. Work Completed Deliverables Checklist */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white font-display flex items-center gap-3">
                <Zap className="w-6 h-6 text-amber-400" />
                Key Deliverables Executed
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {project.workCompleted.map((work, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{work}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Visual Gallery Showcase */}
            {project.visualShowcase && project.visualShowcase.length > 0 && (
              <section className="space-y-4 pt-4">
                <h2 className="text-2xl font-bold text-white font-display">
                  Visual Execution Showcase
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.visualShowcase.map((item, idx) => (
                    <div key={idx} className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 flex flex-col">
                      <div className="h-52 sm:h-60 overflow-hidden">
                        <img
                          src={item.url}
                          alt={item.caption}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-3.5 bg-slate-900/90 border-t border-slate-800/80 flex items-center justify-between text-xs">
                        <span className="text-slate-300">{item.caption}</span>
                        {item.tag && (
                          <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 text-[10px] font-semibold">
                            {item.tag}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 7. Outcome & Business Impact */}
            <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-emerald-950/30 border border-emerald-500/30 space-y-5">
              <div className="flex items-center gap-2.5 text-emerald-400">
                <Trophy className="w-6 h-6" />
                <h3 className="text-xl font-bold font-display">Measurable Business Outcomes</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                {project.outcome.map((out, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950/70 border border-emerald-500/20">
                    <h4 className="text-xs font-bold text-emerald-400 mb-1">{out.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{out.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 8. Key Learnings */}
            {project.keyLearnings && project.keyLearnings.length > 0 && (
              <section className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Lightbulb className="w-5 h-5" />
                  <h3 className="text-base font-bold font-display">Key Growth Takeaways</h3>
                </div>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  {project.keyLearnings.map((learning, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

          </div>

          {/* Right Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Metadata Box */}
            <Card variant="default" className="p-6 bg-slate-900/90 border border-slate-800 sticky top-28">
              <h3 className="text-base font-bold text-white font-display pb-4 border-b border-slate-800">
                Project Summary
              </h3>

              <div className="mt-4 space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5">Client</span>
                  <span className="font-semibold text-white">{project.clientName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Service Category</span>
                  <span className="font-semibold text-cyan-400">{project.categoryLabel}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Industry Segment</span>
                  <span className="font-semibold text-white">{project.industry}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800">
                <h4 className="text-xs font-bold text-white mb-2">Need Similar Execution?</h4>
                <p className="text-[11px] text-slate-400 mb-4">
                  We can customize this exact strategy and creative framework for your business.
                </p>
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={() => navigate('/quote')}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Start Your Project
                </Button>
                <div className="mt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    onClick={() => navigate('/consultation')}
                  >
                    Book Free Consultation
                  </Button>
                </div>
              </div>
            </Card>

          </div>

        </div>
      </div>

    </div>
  );
};
