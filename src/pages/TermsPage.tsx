import React from 'react';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <Badge variant="cyan" size="md">Terms of Engagement</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-display mt-3">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-400 mt-1">Last updated: January 2026</p>
        </div>

        <Card variant="default" className="p-8 sm:p-12 bg-slate-900/80 border border-slate-800 space-y-8 text-sm text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-display">1. Engagement Scope & Quotations</h2>
            <p>
              Pixelrise Media provides digital marketing, SEO, Google Ads management, website creation, video editing, and video shooting services. All project timelines, deliverables, payment milestones, and scopes are formalized in written proposals and Service Agreements signed prior to kickoff.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-display">2. Client Ownership of Deliverables</h2>
            <p>
              Upon receipt of final agreed payments, clients retain 100% full administrative ownership of their website code, domain assets, advertising accounts, video footage, and edited master files created during the engagement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-display">3. Realistic Growth Principles & Guarantees</h2>
            <p>
              Pixelrise Media applies verified white-hat methodologies, technical SEO best practices, and disciplined PPC management. Because search algorithms and market auctions are controlled by third parties (such as Google and Meta), we do not guarantee arbitrary overnight rankings or specific sales conversions, but commit to continuous optimization toward agreed KPIs.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-display">4. Inquiries & Legal Notices</h2>
            <p>
              For legal inquiries or questions regarding our terms of service, please write to <a href="mailto:contact@pixelrisemedia.com" className="text-cyan-400 underline">contact@pixelrisemedia.com</a>.
            </p>
          </section>
        </Card>

      </div>
    </div>
  );
};
