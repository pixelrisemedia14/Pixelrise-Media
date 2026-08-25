import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { ServiceCategory } from '../types';
import { 
  CheckCircle2, 
  Send, 
  Sparkles, 
  DollarSign, 
  Globe, 
  Building2, 
  Mail, 
  Phone, 
  MessageSquare,
  ShieldCheck,
  ArrowRight,
  FileText,
  Clock
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { SectionHeader } from '../components/ui/SectionHeader';

interface QuotePageProps {
  navigate: (path: string) => void;
}

export const QuotePage: React.FC<QuotePageProps> = ({ navigate }) => {
  const { submitQuoteRequest } = useData();

  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    serviceRequired: 'seo' as ServiceCategory | 'other',
    budgetRange: '₹25,000–₹50,000',
    projectDetails: '',
    preferredContactMethod: 'Email' as 'Email' | 'Phone' | 'WhatsApp'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesList = [
    { value: 'seo', label: 'SEO Services' },
    { value: 'google-ads', label: 'Google Ads' },
    { value: 'website-creation', label: 'Website Creation' },
    { value: 'video-editing', label: 'Video Editing' },
    { value: 'video-shooting', label: 'Video Shooting' },
    { value: 'digital-marketing', label: 'Digital Marketing' },
    { value: 'other', label: 'Other / Integrated Growth Package' }
  ];

  const budgetOptions = [
    'Under ₹10,000',
    '₹10,000–₹25,000',
    '₹25,000–₹50,000',
    '₹50,000+',
    'Not Sure Yet'
  ];

  const contactMethods: Array<'Email' | 'Phone' | 'WhatsApp'> = ['Email', 'Phone', 'WhatsApp'];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name.';
    if (!formData.businessName.trim()) errs.businessName = 'Please enter your business or project name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) errs.phone = 'Please provide a contact phone number.';
    if (!formData.projectDetails.trim()) errs.projectDetails = 'Please provide a brief description of your project requirements.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await submitQuoteRequest(formData);
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-20 bg-slate-950 min-h-screen">
      
      {/* 1. Header Banner */}
      <section className="py-16 sm:py-20 relative overflow-hidden bg-grid-pattern border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex justify-center mb-4">
            <Badge variant="cyan" dot size="md">
              Custom Project Quotation
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight max-w-4xl mx-auto leading-tight">
            Tell Us About Your{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Project
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Fill out the form below to receive a customized, itemized proposal and execution timeline for your digital marketing or creative requirements.
          </p>
        </div>
      </section>

      {/* 2. Main Form Card */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card variant="elevated" className="p-8 sm:p-12 bg-slate-900/90 border border-slate-800 shadow-2xl">
          
          {isSubmitted ? (
            <div className="py-16 text-center space-y-6">
              <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  Enquiry Received!
                </h2>
                <p className="mt-3 text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
                  Thanks! Your enquiry has been received. We'll review your requirements and get back to you.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 max-w-md mx-auto text-left space-y-2 text-xs text-slate-400">
                <div className="font-semibold text-slate-200 mb-2">What Happens Next:</div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Requirement review by our technical strategists (within 24 hrs).</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Itemized quotation & scope breakdown delivered via {formData.preferredContactMethod}.</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => navigate('/')}
                >
                  Back to Home
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      businessName: '',
                      email: '',
                      phone: '',
                      website: '',
                      serviceRequired: 'seo',
                      budgetRange: '₹25,000–₹50,000',
                      projectDetails: '',
                      preferredContactMethod: 'Email'
                    });
                  }}
                >
                  Submit Another Request
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              
              {/* Section 1: Contact Details */}
              <div>
                <h3 className="text-base font-bold text-white font-display border-b border-slate-800 pb-3 mb-5 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center justify-center">1</span>
                  Your Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.fullName ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Business Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Health Clinic"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.businessName ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.businessName && <p className="text-[11px] text-rose-400 mt-1">{errors.businessName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address <span className="text-rose-400">*</span>
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
                      Phone Number <span className="text-rose-400">*</span>
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

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Current Website URL (optional)
                    </label>
                    <input
                      type="url"
                      placeholder="https://example.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Service Selection */}
              <div>
                <h3 className="text-base font-bold text-white font-display border-b border-slate-800 pb-3 mb-5 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center justify-center">2</span>
                  Service Required <span className="text-rose-400">*</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {servicesList.map((srv) => (
                    <label
                      key={srv.value}
                      className={`p-4 rounded-xl border flex items-center gap-3 cursor-pointer transition-all duration-200 ${
                        formData.serviceRequired === srv.value
                          ? 'bg-slate-900 border-cyan-400 text-white shadow-md shadow-cyan-950/40'
                          : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      <input
                        type="radio"
                        name="serviceRequired"
                        value={srv.value}
                        checked={formData.serviceRequired === srv.value}
                        onChange={() => setFormData({ ...formData, serviceRequired: srv.value as any })}
                        className="text-cyan-400 focus:ring-0 focus:outline-none"
                      />
                      <span className="text-xs font-semibold">{srv.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Section 3: Budget Range */}
              <div>
                <h3 className="text-base font-bold text-white font-display border-b border-slate-800 pb-3 mb-5 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center justify-center">3</span>
                  Estimated Budget Range <span className="text-rose-400">*</span>
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {budgetOptions.map((budget) => (
                    <button
                      type="button"
                      key={budget}
                      onClick={() => setFormData({ ...formData, budgetRange: budget })}
                      className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                        formData.budgetRange === budget
                          ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-md'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              {/* Section 4: Project Details & Notes */}
              <div>
                <h3 className="text-base font-bold text-white font-display border-b border-slate-800 pb-3 mb-5 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center justify-center">4</span>
                  Project Details <span className="text-rose-400">*</span>
                </h3>

                <textarea
                  rows={5}
                  placeholder="Describe what you want to accomplish, target audience, ideal timeline, or current marketing bottlenecks..."
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                    errors.projectDetails ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                  }`}
                />
                {errors.projectDetails && <p className="text-[11px] text-rose-400 mt-1">{errors.projectDetails}</p>}
              </div>

              {/* Section 5: Preferred Contact Method */}
              <div>
                <h3 className="text-base font-bold text-white font-display border-b border-slate-800 pb-3 mb-5 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center justify-center">5</span>
                  Preferred Contact Method
                </h3>

                <div className="flex items-center gap-4">
                  {contactMethods.map((method) => (
                    <label
                      key={method}
                      className={`px-5 py-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all ${
                        formData.preferredContactMethod === method
                          ? 'bg-cyan-950 border-cyan-400 text-cyan-300 font-bold'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <input
                        type="radio"
                        name="preferredContactMethod"
                        value={method}
                        checked={formData.preferredContactMethod === method}
                        onChange={() => setFormData({ ...formData, preferredContactMethod: method })}
                        className="text-cyan-400 focus:ring-0"
                      />
                      <span>{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                  icon={<Send className="w-4 h-4" />}
                >
                  {isSubmitting ? 'Processing Your Request...' : 'Submit Project Information for Quote'}
                </Button>

                <div className="flex items-center justify-center gap-2 mt-4 text-[11px] text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Strict Privacy Guaranteed • No Spam • 100% Free Initial Assessment</span>
                </div>
              </div>

            </form>
          )}

        </Card>
      </section>

    </div>
  );
};
