import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Users, 
  ArrowRight, 
  Sparkles,
  Percent,
  CheckCircle2
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface RoiCalculatorProps {
  navigate: (path: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ navigate }) => {
  const [monthlyAdSpend, setMonthlyAdSpend] = useState<number>(30000);
  const [avgCustomerValue, setAvgCustomerValue] = useState<number>(15000);
  const [currentMonthlyTraffic, setCurrentMonthlyTraffic] = useState<number>(2500);
  const [activeTab, setActiveTab] = useState<'ads' | 'seo'>('ads');

  // Realistic estimates for Ads vs SEO growth
  // Ads: estimated CPL ~ 1200 INR, conv rate 15% to closed sale
  const estimatedAdLeads = Math.round(monthlyAdSpend / 850);
  const estimatedAdSales = Math.max(1, Math.round(estimatedAdLeads * 0.18));
  const estimatedAdRevenue = estimatedAdSales * avgCustomerValue;
  const estimatedAdRoas = (estimatedAdRevenue / monthlyAdSpend).toFixed(1);

  // SEO: traffic uplift ~ 180% over 6 months, organic lead rate ~ 2.8%, closing rate 20%
  const projectedSeoTraffic = Math.round(currentMonthlyTraffic * 2.8);
  const estimatedSeoLeads = Math.round(projectedSeoTraffic * 0.028);
  const estimatedSeoSales = Math.max(1, Math.round(estimatedSeoLeads * 0.20));
  const estimatedSeoMonthlyPipeline = estimatedSeoSales * avgCustomerValue;

  return (
    <section className="py-20 bg-[#080808] relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F27D26]/10 border border-[#F27D26]/30 text-[#F27D26] text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Growth Planner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#EDEDED] font-display">
            Estimate Your Growth Potential
          </h2>
          <p className="mt-3 text-sm text-white/60">
            Use our interactive growth model to see how optimized search acquisition or Google Ads restructuring impacts pipeline revenue.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="p-1.5 rounded-2xl bg-[#0c0c0c] border border-white/10 flex items-center gap-2">
            <button
              onClick={() => setActiveTab('ads')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'ads'
                  ? 'bg-[#F27D26] text-[#050505] shadow-md shadow-[#F27D26]/20'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              Google Ads ROAS Model
            </button>
            <button
              onClick={() => setActiveTab('seo')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'seo'
                  ? 'bg-[#F27D26] text-[#050505] shadow-md shadow-[#F27D26]/20'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              Organic SEO Compounding Model
            </button>
          </div>
        </div>

        {/* Calculator Grid */}
        <Card variant="elevated" className="p-6 sm:p-10 bg-[#0c0c0c] border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sliders on Left */}
            <div className="lg:col-span-6 space-y-6">
              
              {activeTab === 'ads' ? (
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold mb-2">
                    <span className="text-white/70">Target Monthly Ad Spend:</span>
                    <span className="text-[#F27D26] font-bold text-sm">₹{monthlyAdSpend.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min={10000}
                    max={250000}
                    step={5000}
                    value={monthlyAdSpend}
                    onChange={(e) => setMonthlyAdSpend(Number(e.target.value))}
                    className="w-full h-2 bg-[#1a1a1a] rounded-lg appearance-none cursor-pointer accent-[#F27D26]"
                  />
                  <div className="flex justify-between text-[10px] text-white/40 mt-1">
                    <span>₹10,000</span>
                    <span>₹1,00,000</span>
                    <span>₹2,50,000+</span>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold mb-2">
                    <span className="text-white/70">Current Monthly Website Visitors:</span>
                    <span className="text-[#F27D26] font-bold text-sm">{currentMonthlyTraffic.toLocaleString()} / mo</span>
                  </div>
                  <input
                    type="range"
                    min={500}
                    max={25000}
                    step={500}
                    value={currentMonthlyTraffic}
                    onChange={(e) => setCurrentMonthlyTraffic(Number(e.target.value))}
                    className="w-full h-2 bg-[#1a1a1a] rounded-lg appearance-none cursor-pointer accent-[#F27D26]"
                  />
                  <div className="flex justify-between text-[10px] text-white/40 mt-1">
                    <span>500</span>
                    <span>10,000</span>
                    <span>25,000+</span>
                  </div>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between text-xs font-semibold mb-2">
                  <span className="text-white/70">Average Customer / Deal Value:</span>
                  <span className="text-emerald-400 font-bold text-sm">₹{avgCustomerValue.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min={2000}
                  max={100000}
                  step={2000}
                  value={avgCustomerValue}
                  onChange={(e) => setAvgCustomerValue(Number(e.target.value))}
                  className="w-full h-2 bg-[#1a1a1a] rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[10px] text-white/40 mt-1">
                  <span>₹2,000</span>
                  <span>₹50,000</span>
                  <span>₹1,00,000+</span>
                </div>
              </div>

              {/* Quality assumptions */}
              <div className="p-4 rounded-xl bg-[#050505] border border-white/5 space-y-2 text-xs text-white/60">
                <div className="font-semibold text-white/90">Included in Pixelrise Execution:</div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F27D26] shrink-0" />
                  <span>Negative keyword filtering & conversion tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F27D26] shrink-0" />
                  <span>Sub-second loading landing page design</span>
                </div>
              </div>

            </div>

            {/* Results Display on Right */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#050505] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
                  Estimated Monthly Opportunity
                </div>

                {activeTab === 'ads' ? (
                  <div className="space-y-4">
                    <div className="flex items-baseline justify-between border-b border-white/10 pb-3">
                      <span className="text-xs text-white/70">Est. Qualified Inquiries:</span>
                      <span className="text-lg font-bold text-[#EDEDED] font-display">~{estimatedAdLeads} leads/mo</span>
                    </div>

                    <div className="flex items-baseline justify-between border-b border-white/10 pb-3">
                      <span className="text-xs text-white/70">Projected Closed Clients:</span>
                      <span className="text-lg font-bold text-[#F27D26] font-display">~{estimatedAdSales} clients</span>
                    </div>

                    <div className="flex items-baseline justify-between border-b border-white/10 pb-3">
                      <span className="text-xs text-white/70">Projected Monthly Revenue:</span>
                      <span className="text-xl font-black text-emerald-400 font-display">
                        ₹{estimatedAdRevenue.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs text-white/50">Estimated Target ROAS:</span>
                      <span className="px-2.5 py-1 rounded-md bg-[#F27D26]/10 text-[#F27D26] border border-[#F27D26]/30 text-xs font-bold">
                        {estimatedAdRoas}x Return
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-baseline justify-between border-b border-white/10 pb-3">
                      <span className="text-xs text-white/70">Projected Organic Search Traffic:</span>
                      <span className="text-lg font-bold text-[#F27D26] font-display">~{projectedSeoTraffic.toLocaleString()} visits/mo</span>
                    </div>

                    <div className="flex items-baseline justify-between border-b border-white/10 pb-3">
                      <span className="text-xs text-white/70">Est. High-Intent Inquiries:</span>
                      <span className="text-lg font-bold text-[#EDEDED] font-display">~{estimatedSeoLeads} leads/mo</span>
                    </div>

                    <div className="flex items-baseline justify-between border-b border-white/10 pb-3">
                      <span className="text-xs text-white/70">Projected Compounding Pipeline:</span>
                      <span className="text-xl font-black text-emerald-400 font-display">
                        ₹{estimatedSeoMonthlyPipeline.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs text-white/50">Channel Characteristic:</span>
                      <span className="px-2.5 py-1 rounded-md bg-[#F27D26]/10 text-[#F27D26] border border-[#F27D26]/30 text-xs font-bold">
                        Zero Per-Click Ad Cost
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="mt-8">
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={() => navigate('/consultation')}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Discuss This Growth Model For Your Brand
                </Button>
                <div className="text-[10px] text-white/40 text-center mt-2">
                  *Calculations are indicative model simulations based on commercial benchmarks.
                </div>
              </div>

            </div>

          </div>
        </Card>

      </div>
    </section>
  );
};
