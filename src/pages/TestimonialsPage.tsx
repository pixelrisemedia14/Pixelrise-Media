import React, { useState } from 'react';
import { testimonialsData } from '../data/testimonialsData';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  MessageSquare, 
  Filter, 
  PlusCircle, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Modal } from '../components/ui/Modal';
import { SectionHeader } from '../components/ui/SectionHeader';

interface TestimonialsPageProps {
  navigate: (path: string) => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ navigate }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    company: '',
    role: '',
    service: 'SEO',
    rating: 5,
    review: ''
  });
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const filterTabs = [
    { label: 'All Reviews', value: 'all' },
    { label: 'SEO', value: 'SEO' },
    { label: 'Google Ads', value: 'Google Ads' },
    { label: 'Web Development', value: 'Web' },
    { label: 'Video Production', value: 'Video' }
  ];

  const filtered = testimonialsData.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.serviceLabel.toLowerCase().includes(activeFilter.toLowerCase());
  });

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.review) return;
    setReviewSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setReviewSubmitted(false);
      setNewReview({ name: '', company: '', role: '', service: 'SEO', rating: 5, review: '' });
    }, 2000);
  };

  return (
    <div className="pt-28 pb-20 bg-slate-950 min-h-screen">
      
      {/* 1. Hero */}
      <section className="py-16 sm:py-20 relative overflow-hidden bg-grid-pattern border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex justify-center mb-4">
            <Badge variant="cyan" dot size="md">
              Verified Client Feedback
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight max-w-4xl mx-auto leading-tight">
            What Our Clients Say About{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Pixelrise Media
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Read first-hand feedback from founders, marketing directors, and business owners who have scaled their search rankings, paid ads, and brand presence with us.
          </p>

          <div className="mt-8 flex justify-center gap-3">
            <Button
              variant="outline"
              size="md"
              onClick={() => setIsModalOpen(true)}
              icon={<PlusCircle className="w-4 h-4" />}
            >
              Submit Client Feedback
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Reviews Wall */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter bar */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === tab.value
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <Card
              key={item.id}
              variant="default"
              hoverEffect
              className="p-8 bg-slate-900/70 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-cyan-400 bg-slate-950 px-2.5 py-1 rounded-full border border-slate-800">
                    {item.serviceLabel}
                  </span>
                </div>

                <blockquote className="text-sm text-slate-200 leading-relaxed italic">
                  "{item.review}"
                </blockquote>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800/80 flex items-center gap-3.5">
                {item.avatarUrl && (
                  <img
                    src={item.avatarUrl}
                    alt={item.clientName}
                    className="w-11 h-11 rounded-full object-cover border border-slate-700"
                    loading="lazy"
                  />
                )}
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-white font-display">{item.clientName}</h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-xs text-slate-400">
                    {item.role} • <span className="text-slate-300 font-medium">{item.company}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </section>

      {/* 3. Review Submission Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Submit Client Review"
      >
        {reviewSubmitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-lg font-bold text-white">Thank You for Your Feedback!</h3>
            <p className="text-xs text-slate-300">Your review will be verified and published shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleReviewSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
              <input
                type="text"
                required
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400"
                placeholder="e.g. Rahul Sharma"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Company / Brand</label>
                <input
                  type="text"
                  value={newReview.company}
                  onChange={(e) => setNewReview({ ...newReview, company: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400"
                  placeholder="e.g. Apex Health"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Role / Title</label>
                <input
                  type="text"
                  value={newReview.role}
                  onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400"
                  placeholder="e.g. Founder / CMO"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Service Delivered</label>
              <select
                value={newReview.service}
                onChange={(e) => setNewReview({ ...newReview, service: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="SEO">SEO Strategy & Search Rankings</option>
                <option value="Google Ads">Google Ads Management</option>
                <option value="Website Creation">Website Creation & UI/UX</option>
                <option value="Video Editing">Video Editing & Reels</option>
                <option value="Video Shooting">4K Video Shooting</option>
                <option value="Digital Marketing">Digital Marketing</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Rating</label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setNewReview({ ...newReview, rating: star })}
                    className="p-1 text-amber-400 focus:outline-none cursor-pointer"
                  >
                    <Star className={`w-6 h-6 ${newReview.rating >= star ? 'fill-amber-400' : 'opacity-30'}`} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Your Review & Results</label>
              <textarea
                rows={4}
                required
                value={newReview.review}
                onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400 resize-none"
                placeholder="Describe the outcomes, communication quality, and results achieved with Pixelrise Media..."
              />
            </div>

            <div className="pt-2">
              <Button type="submit" variant="primary" size="md" fullWidth>
                Submit Review For Verification
              </Button>
            </div>
          </form>
        )}
      </Modal>

      {/* 4. Bottom CTA */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="mt-3 text-slate-300 text-sm max-w-xl mx-auto">
            Contact us today for a free consultation or custom project quotation.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={() => navigate('/quote')}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};
