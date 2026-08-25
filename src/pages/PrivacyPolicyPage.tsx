import React from 'react';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <Badge variant="cyan" size="md">Legal & Compliance</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-display mt-3">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400 mt-1">Last updated: January 2026</p>
        </div>

        <Card variant="default" className="p-8 sm:p-12 bg-slate-900/80 border border-slate-800 space-y-8 text-sm text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-display">1. Information We Collect</h2>
            <p>
              Pixelrise Media ("we", "our", or "us") respects your privacy. When you request a quote, book a consultation, or contact us through our website, we may collect information such as your name, business name, work email address, telephone number, website URL, and project requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-display">2. How We Use Your Information</h2>
            <p>
              The information collected is used exclusively for:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300 text-xs">
              <li>Preparing customized proposals and itemized quotes for requested services.</li>
              <li>Scheduling and conducting requested strategy consultations.</li>
              <li>Communicating project deliverables, timelines, and status reports.</li>
              <li>Complying with applicable legal and statutory requirements.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-display">3. Confidentiality & Data Security</h2>
            <p>
              We treat all client project details, business models, ad account data, and creative assets with strict confidentiality. We do not sell, rent, or trade your personal or business data to third-party brokers or advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-display">4. Contacting Us About Privacy</h2>
            <p>
              If you have any questions regarding our privacy practices or wish to request the deletion of your inquiry data, please contact us at <a href="mailto:privacy@pixelrisemedia.com" className="text-cyan-400 underline">privacy@pixelrisemedia.com</a>.
            </p>
          </section>
        </Card>

      </div>
    </div>
  );
};
