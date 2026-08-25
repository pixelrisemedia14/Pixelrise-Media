import React, { useState } from 'react';
import { testimonialsData } from '../../data/testimonialsData';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  CheckCircle2, 
  Sparkles,
  PlusCircle
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

interface TestimonialCarouselProps {
  onOpenReviewModal?: () => void;
}

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ onOpenReviewModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-24 bg-[#050505] relative border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#F27D26]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <SectionHeader
            badgeText="Client Feedback"
            title="Trusted by"
            highlightedTitle="Ambitious Businesses"
            subtitle="Read how our strategic digital marketing, SEO, web design, and video production teams have helped businesses establish market leadership."
          />
        </div>

        {/* Testimonial Spotlight Carousel */}
        <div className="max-w-4xl mx-auto">
          <Card
            variant="elevated"
            className="p-8 sm:p-12 bg-[#0c0c0c] border border-white/10 relative overflow-hidden shadow-2xl"
          >
            {/* Top quote icon */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#F27D26]/10 border border-[#F27D26]/30 flex items-center justify-center text-[#F27D26]">
                <Quote className="w-6 h-6" />
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#F27D26] fill-[#F27D26]" />
                ))}
                <span className="ml-2 text-xs font-bold text-white/90">5.0 / 5.0</span>
              </div>
            </div>

            {/* Testimonial Quote Text */}
            <blockquote className="text-lg sm:text-2xl text-[#EDEDED] font-medium leading-relaxed font-sans">
              "{current.review}"
            </blockquote>

            {/* Author Profile */}
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {current.avatarUrl && (
                  <img
                    src={current.avatarUrl}
                    alt={current.clientName}
                    className="w-13 h-13 rounded-full object-cover border-2 border-[#F27D26]/40"
                    loading="lazy"
                  />
                )}
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-[#EDEDED] font-display">
                      {current.clientName}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      <CheckCircle2 className="w-3 h-3" /> Verified Client
                    </span>
                  </div>
                  <div className="text-xs text-white/50 mt-0.5">
                    {current.role} • <span className="text-white/80 font-medium">{current.company}</span>
                  </div>
                </div>
              </div>

              {/* Service Tag */}
              <span className="text-xs font-semibold text-[#F27D26] bg-[#050505] px-3 py-1.5 rounded-xl border border-white/10">
                {current.serviceLabel}
              </span>
            </div>

            {/* Carousel Navigation Controls */}
            <div className="mt-8 flex items-center justify-between pt-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'w-8 bg-[#F27D26]' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-[#050505] hover:bg-[#1a1a1a] border border-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-[#050505] hover:bg-[#1a1a1a] border border-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </Card>
        </div>

        {/* All Reviews mini-grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#0c0c0c] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-[#F27D26] fill-[#F27D26]" />
                  ))}
                </div>
                <p className="text-xs text-white/70 leading-relaxed italic line-clamp-4">
                  "{item.review}"
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-[#EDEDED]">{item.clientName}</div>
                  <div className="text-[11px] text-white/50">{item.company}</div>
                </div>
                <span className="text-[10px] text-white/50 bg-[#050505] px-2 py-1 rounded-md border border-white/10">
                  {item.serviceLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
