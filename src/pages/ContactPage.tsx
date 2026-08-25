import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck,
  Building2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { SectionHeader } from '../components/ui/SectionHeader';

interface ContactPageProps {
  navigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ navigate }) => {
  const { submitContactMessage } = useData();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formData.message.trim()) errs.message = 'Please provide your message details.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await submitContactMessage(formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-20 bg-slate-950 min-h-screen">
      
      {/* 1. Header */}
      <section className="py-16 sm:py-20 relative overflow-hidden bg-grid-pattern border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex justify-center mb-4">
            <Badge variant="cyan" dot size="md">
              Connect With Pixelrise Media
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight max-w-4xl mx-auto leading-tight">
            Let's Talk About Your{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Business Goals
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have a question, need an urgent quotation, or want to discuss a customized digital marketing campaign? We’re here to assist.
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <Card variant="elevated" className="p-8 sm:p-10 bg-slate-900/90 border border-slate-800 shadow-2xl">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thanks for reaching out. A senior digital strategist from Pixelrise Media will review your inquiry and get back to you within 1 business day.
                  </p>
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="border-b border-slate-800 pb-4 mb-2">
                    <h2 className="text-xl font-bold text-white font-display">
                      Send Us a Direct Message
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill in the details below and we will get back to you promptly.
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Work Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Subject <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. SEO Audit Inquiry / Web Development"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.subject ? 'border-rose-500 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.subject && <p className="text-[11px] text-rose-400 mt-1">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Message & Project Context <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your business, current marketing challenges, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-rose-500 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      disabled={isSubmitting}
                      icon={<Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? 'Sending Message...' : 'Submit Message'}
                    </Button>
                  </div>

                </form>
              )}

            </Card>
          </div>

          {/* Right Column: Contact Details & Office Coverage */}
          <div className="lg:col-span-5 space-y-6">
            
            <Card variant="default" className="p-6 bg-slate-900/80 border border-slate-800 space-y-6">
              <h3 className="text-base font-bold text-white font-display">
                Agency Information
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Direct Inquiries Email</span>
                    <a href="mailto:contact@pixelrisemedia.com" className="text-white hover:text-cyan-400 font-semibold transition-colors">
                      contact@pixelrisemedia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Working Hours</span>
                    <span className="text-white font-semibold">Monday – Saturday: 9:30 AM – 6:30 PM IST</span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">Closed on Sundays & National Holidays</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Headquarters & Production Base</span>
                    <span className="text-white font-semibold">Delhi NCR / Bengaluru / Remote India</span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">Serving clients across India, UAE, UK, and Global Markets.</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Consultation Promo Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-cyan-950/40 border border-slate-800">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Prefer a Live Video Call?</span>
              </div>
              <h4 className="text-sm font-bold text-white mb-2">
                Schedule a 30-Minute Growth Strategy Session
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Pick a date and time that fits your calendar for a direct Google Meet / Zoom consultation.
              </p>
              <Button
                variant="outline"
                size="sm"
                fullWidth
                onClick={() => navigate('/consultation')}
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Book Consultation
              </Button>
            </div>

            {/* Quote Request Prompt */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-sm font-bold text-white mb-1">
                Need an Itemized Project Quotation?
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                Use our detailed multi-step quote builder to specify budget, deliverables, and service scopes.
              </p>
              <Button
                variant="secondary"
                size="sm"
                fullWidth
                onClick={() => navigate('/quote')}
              >
                Request a Custom Quote
              </Button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
