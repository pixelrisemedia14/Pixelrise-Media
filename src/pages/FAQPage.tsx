import React from 'react';
import { FAQAccordion } from '../components/home/FAQAccordion';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ArrowRight, HelpCircle, PhoneCall } from 'lucide-react';

interface FAQPageProps {
  navigate: (path: string) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ navigate }) => {
  return (
    <div className="pt-28 pb-20 bg-slate-950 min-h-screen">
      
      {/* Hero */}
      <section className="py-16 sm:py-20 relative overflow-hidden bg-grid-pattern border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex justify-center mb-4">
            <Badge variant="cyan" dot size="md">
              Knowledge & Answers
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight max-w-4xl mx-auto leading-tight">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Find immediate answers regarding our service deliverables, project management workflows, contract terms, and expected timelines.
          </p>
        </div>
      </section>

      {/* Accordion Component */}
      <div className="py-8">
        <FAQAccordion navigate={navigate} showCategoryFilters={true} />
      </div>

      {/* Direct Contact Banner */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
            Still Have Questions?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
            We are always happy to clarify technical scopes, provide custom proposals, or review your current website.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={() => navigate('/contact')}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Contact Support & Sales
            </Button>
            <Button
              variant="secondary"
              size="md"
              onClick={() => navigate('/consultation')}
            >
              Schedule a Discovery Call
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};
