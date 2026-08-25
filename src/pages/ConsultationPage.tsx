import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { ServiceCategory } from '../types';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Video, 
  PhoneCall, 
  ShieldCheck, 
  Sparkles, 
  Send, 
  ArrowRight,
  Download
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { SectionHeader } from '../components/ui/SectionHeader';

interface ConsultationPageProps {
  navigate: (path: string) => void;
}

export const ConsultationPage: React.FC<ConsultationPageProps> = ({ navigate }) => {
  const { submitConsultationRequest } = useData();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    serviceRequired: 'seo' as ServiceCategory,
    preferredDate: '',
    preferredTime: '11:00 AM - 11:30 AM',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = [
    '10:30 AM - 11:00 AM',
    '11:30 AM - 12:00 PM',
    '02:30 PM - 03:00 PM',
    '04:00 PM - 04:30 PM',
    '05:30 PM - 06:00 PM'
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) errs.phone = 'Please provide a valid contact number.';
    if (!formData.businessName.trim()) errs.businessName = 'Please specify your company or business name.';
    if (!formData.preferredDate) errs.preferredDate = 'Please select a preferred date for the call.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await submitConsultationRequest(formData);
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate an .ics calendar file for the client
  const downloadIcs = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Pixelrise Media//Consultation//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:Pixelrise Media - Growth Strategy Session with ${formData.name}
DESCRIPTION:30-Minute Digital Marketing & Strategy Consultation for ${formData.businessName}. We will review your SEO, PPC, Website, or Video production goals.
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Pixelrise-Consultation-${formData.businessName || 'Session'}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-28 pb-20 bg-slate-950 min-h-screen">
      
      {/* 1. Hero */}
      <section className="py-16 sm:py-20 relative overflow-hidden bg-grid-pattern border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex justify-center mb-4">
            <Badge variant="cyan" dot size="md">
              Free 30-Minute Growth Strategy Session
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight max-w-4xl mx-auto leading-tight">
            Schedule a Free{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Strategy Consultation
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discuss your online visibility, customer acquisition goals, and technical requirements directly with a senior strategist from Pixelrise Media.
          </p>
        </div>
      </section>

      {/* 2. Form & Agenda Details */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Booking Form */}
          <div className="lg:col-span-7">
            <Card variant="elevated" className="p-8 sm:p-10 bg-slate-900/90 border border-slate-800 shadow-2xl">
              
              {isSubmitted ? (
                <div className="py-14 text-center space-y-6">
                  <div className="w-18 h-18 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                      Consultation Request Confirmed!
                    </h2>
                    <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      We have reserved your slot for <strong>{formData.preferredDate}</strong> at <strong>{formData.preferredTime}</strong>. A calendar invite and Google Meet link have been dispatched to <strong>{formData.email}</strong>.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={downloadIcs}
                      icon={<Download className="w-4 h-4" />}
                    >
                      Download Calendar (.ics)
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => navigate('/')}
                    >
                      Back to Home
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <h2 className="text-xl font-bold text-white font-display">
                      Select Date & Time Slot
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                      Choose when you'd like to meet with our strategy team.
                    </p>
                  </div>

                  {/* Name & Business */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.name ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Business Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your Company Name"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.businessName ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                        }`}
                      />
                      {errors.businessName && <p className="text-[11px] text-rose-400 mt-1">{errors.businessName}</p>}
                    </div>
                  </div>

                  {/* Email & Phone */}
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
                          errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone / WhatsApp <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.phone ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Service Focus */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Primary Topic For Consultation
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value as any })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option value="seo">SEO Audit & Search Visibility</option>
                      <option value="google-ads">Google Ads & PPC Optimization</option>
                      <option value="website-creation">Website Redesign & Conversion UX</option>
                      <option value="video-editing">Social Video Editing & Reels Strategy</option>
                      <option value="video-shooting">4K Commercial Video Shooting</option>
                      <option value="digital-marketing">Full-Funnel Digital Marketing Strategy</option>
                    </select>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Preferred Date <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white focus:outline-none transition-colors ${
                          errors.preferredDate ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                        }`}
                      />
                      {errors.preferredDate && <p className="text-[11px] text-rose-400 mt-1">{errors.preferredDate}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Preferred Time Slot (IST)
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Anything specific you'd like us to prepare? (optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Website URL, current ad spend, or specific questions..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      disabled={isSubmitting}
                      icon={<Calendar className="w-4 h-4" />}
                    >
                      {isSubmitting ? 'Reserving Your Slot...' : 'Confirm Free 30-Min Strategy Call'}
                    </Button>
                  </div>

                </form>
              )}

            </Card>
          </div>

          {/* Right Column: Session Agenda & What To Expect */}
          <div className="lg:col-span-5 space-y-6">
            
            <Card variant="default" className="p-6 bg-slate-900/80 border border-slate-800 space-y-6">
              <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
                <Video className="w-5 h-5 text-cyan-400" />
                What Happens on the Call?
              </h3>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center shrink-0">1</div>
                  <div>
                    <strong className="text-white block">Audit & Current Baseline (10 Mins)</strong>
                    <span>We review your current website, search rankings, or ad spend to identify low-hanging opportunities.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center shrink-0">2</div>
                  <div>
                    <strong className="text-white block">Strategy & Channel Fit (10 Mins)</strong>
                    <span>We evaluate whether SEO, Google Ads, a new website, or video creative will yield the fastest return on effort.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center shrink-0">3</div>
                  <div>
                    <strong className="text-white block">Actionable Roadmap & Q&A (10 Mins)</strong>
                    <span>You walk away with specific next steps, whether you decide to partner with Pixelrise Media or execute internally.</span>
                  </div>
                </div>
              </div>
            </Card>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Pressure Guarantee</span>
              </div>
              <p>
                This is a genuine technical and strategic consultation with an experienced marketer, not a high-pressure sales pitch.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
