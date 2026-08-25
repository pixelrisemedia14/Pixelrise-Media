import React, { useState } from 'react';
import { faqsData } from '../../data/faqsData';
import { 
  ChevronDown, 
  HelpCircle, 
  Search, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

interface FAQAccordionProps {
  navigate?: (path: string) => void;
  showCategoryFilters?: boolean;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ 
  navigate,
  showCategoryFilters = true 
}) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { label: 'All Questions', value: 'all' },
    { label: 'General', value: 'general' },
    { label: 'SEO', value: 'seo' },
    { label: 'Google Ads', value: 'ads' },
    { label: 'Web Development', value: 'web' },
    { label: 'Video Production', value: 'video' }
  ];

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-[#080808] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <SectionHeader
            badgeText="Clear Answers"
            title="Frequently Asked"
            highlightedTitle="Questions"
            subtitle="Everything you need to know about partnering with Pixelrise Media, our service scopes, project turnaround times, and delivery standards."
          />
        </div>

        {/* Search & Category Filter Controls */}
        {showCategoryFilters && (
          <div className="mb-8 space-y-4">
            {/* Search Input */}
            <div className="relative max-w-md mx-auto">
              <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search questions (e.g. SEO, Google Ads, pricing)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#050505] border border-white/10 text-sm text-[#EDEDED] placeholder-white/40 focus:outline-none focus:border-[#F27D26]"
              />
            </div>

            {/* Category pills */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    activeCategory === cat.value
                      ? 'bg-[#F27D26] text-[#050505] font-bold shadow-md shadow-[#F27D26]/20'
                      : 'bg-[#0c0c0c] text-white/60 hover:text-white border border-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0c0c0c] border-[#F27D26]/40 shadow-lg shadow-black/40'
                    : 'bg-[#0c0c0c]/70 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-sm sm:text-base text-[#EDEDED]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#F27D26]/20 text-[#F27D26]' : 'bg-[#050505] text-white/50 border border-white/10'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-white/70 text-xs sm:text-sm leading-relaxed border-t border-white/10 pt-4 animate-in fade-in-50 duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* If no match */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-10 text-white/40 text-sm">
            No questions found matching "{searchTerm}".
          </div>
        )}

        {/* Have more questions CTA */}
        {navigate && (
          <div className="mt-12 p-6 rounded-2xl bg-[#0c0c0c] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#F27D26]/10 text-[#F27D26]">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#EDEDED]">Have a specific question about your project?</h4>
                <p className="text-xs text-white/50">Our senior strategists are happy to review your technical requirements.</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="text-xs font-semibold text-[#050505] bg-[#F27D26] hover:bg-[#ff9c54] px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer shadow-md shadow-[#F27D26]/20"
            >
              <span>Speak With Our Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
