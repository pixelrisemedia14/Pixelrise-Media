import { ServiceDetail } from '../types';

export const servicesData: ServiceDetail[] = [
  {
    id: 'seo-services',
    slug: 'seo',
    title: 'Strategic Search Engine Optimization (SEO)',
    shortTitle: 'SEO Services',
    tagline: 'Improve search visibility and attract high-intent organic traffic that converts.',
    description: 'Improve your search visibility and attract relevant organic traffic with strategic, ethical, and ROI-driven SEO solutions.',
    heroHeadline: 'Get Found by the Right Customers When They Search',
    heroSubheadline: 'We build sustainable search engine rankings through rigorous technical optimization, deep keyword intent analysis, on-page refinement, and high-impact content architecture.',
    iconName: 'Search',
    deliverables: [
      'Keyword Research & Competitive Search Gap Analysis',
      'Full Technical SEO Crawl & Core Web Vitals Audit',
      'On-Page Optimization (Titles, Meta, Hierarchy, Internal Linking)',
      'High-Intent Content Strategy & Search Briefs',
      'Local SEO & Google Business Profile Optimization',
      'Monthly Transparent Ranking & Traffic Reporting'
    ],
    keyFeatures: [
      {
        title: 'Comprehensive SEO Audit',
        description: 'Deep dive into site architecture, indexability, crawl errors, structured data, page speed, and backlink health.',
        icon: 'FileSearch'
      },
      {
        title: 'High-Intent Keyword Discovery',
        description: 'Identify search terms with clear commercial intent used by ready-to-buy decision-makers in your target industry.',
        icon: 'Target'
      },
      {
        title: 'On-Page & Content Architecture',
        description: 'Optimize existing copy, meta descriptions, image alts, URL structures, schema markup, and content flow.',
        icon: 'Layout'
      },
      {
        title: 'Technical Infrastructure Fixes',
        description: 'Resolve redirect chains, canonical anomalies, mobile usability obstacles, and server response delays.',
        icon: 'Cpu'
      },
      {
        title: 'Local SEO & Geo-Targeting',
        description: 'Dominate local map packs, optimize Google Business Profile, build local citations, and drive in-store or regional leads.',
        icon: 'MapPin'
      },
      {
        title: 'Search Performance Reporting',
        description: 'Clear, jargon-free monthly reports tracking keyword rankings, search impressions, organic clicks, and conversions.',
        icon: 'BarChart3'
      }
    ],
    processSteps: [
      {
        stepNumber: '01',
        title: 'Audit & Baseline Analysis',
        description: 'We run deep crawls to identify technical bottlenecks, ranking drop-offs, competitor positions, and immediate win opportunities.'
      },
      {
        stepNumber: '02',
        title: 'Keyword & Content Roadmap',
        description: 'We map out transactional and informational keyword clusters tailored to your revenue-generating services.'
      },
      {
        stepNumber: '03',
        title: 'Technical & On-Page Execution',
        description: 'We deploy code fixes, metadata refinements, internal linking structures, and optimize existing landing pages.'
      },
      {
        stepNumber: '04',
        title: 'Monitoring, Iteration & Growth',
        description: 'We monitor indexation via Google Search Console, adjust ranking tactics based on algorithm updates, and expand content depth.'
      }
    ],
    idealFor: [
      'B2B Companies seeking organic pipeline growth',
      'Local service businesses wanting map pack dominance',
      'E-commerce brands striving for product category rank',
      'Professional service firms (Legal, Healthcare, Finance, Consulting)'
    ],
    deliverableSummary: 'Full-suite organic search optimization designed to turn Google search queries into qualified inbound revenue pipelines.',
    bannerImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'from-blue-500 to-cyan-500',
    faqList: [
      {
        question: 'How long does SEO take to produce measurable results?',
        answer: 'SEO is a sustainable growth channel. Initial technical and indexation improvements often reflect within 4 to 8 weeks, while competitive keyword ranking climbs and compounding organic traffic typically mature over 3 to 6 months of continuous execution.'
      },
      {
        question: 'Do you offer guaranteed #1 Google rankings?',
        answer: 'No ethical agency can guarantee specific #1 positions because Google search algorithms update continuously. However, we follow proven search engineering methodologies that systematically build domain authority and ranking trajectory for high-value terms.'
      },
      {
        question: 'What is the difference between On-Page and Technical SEO?',
        answer: 'Technical SEO ensures search engine spiders can efficiently discover, crawl, and index your website (speed, schema, sitemaps, mobile readiness). On-Page SEO focuses on user-visible elements (content quality, keyword targeting, headers, and UX).'
      }
    ]
  },
  {
    id: 'google-ads-management',
    slug: 'google-ads',
    title: 'Google Ads & Performance PPC Management',
    shortTitle: 'Google Ads',
    tagline: 'Reach ready-to-buy customers when they are actively searching for your solutions.',
    description: 'Reach potential customers when they are actively searching for your products or services with laser-targeted, conversion-optimized Google Ads campaigns.',
    heroHeadline: 'Reach Customers When They Are Ready to Buy',
    heroSubheadline: 'Stop burning ad budget on irrelevant clicks. We design high-converting Search, Display, Remarketing, and Performance Max campaigns with strict negative keyword filters and conversion tracking.',
    iconName: 'TrendingUp',
    deliverables: [
      'Account Structuring & Negative Keyword Fortification',
      'Search & Performance Max Campaign Setup',
      'High-CTR Ad Copywriting & Responsive Search Ads',
      'Server-Side Conversion Tracking & Google Tag Manager Setup',
      'Bid Strategy Optimization (tCPA, tROAS, Maximize Conversions)',
      'Transparent Weekly & Monthly Budget Dashboards'
    ],
    keyFeatures: [
      {
        title: 'Search Intent Campaigns',
        description: 'Capture high-intent searches with tightly themed ad groups and precise match type curation.',
        icon: 'MousePointerClick'
      },
      {
        title: 'Negative Keyword Filtering',
        description: 'Aggressively filter out waste clicks, job seekers, DIY queries, and off-topic searches to protect your budget.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Precision Conversion Tracking',
        description: 'Track form submissions, phone calls, and revenue events accurately via Google Tag Manager and GA4.',
        icon: 'Crosshair'
      },
      {
        title: 'Dynamic Ad Copy Testing',
        description: 'A/B test emotional triggers, distinct value propositions, and dynamic keyword insertion to elevate Quality Score.',
        icon: 'Layers'
      },
      {
        title: 'Retargeting & Remarketing',
        description: 'Re-engage previous website visitors across Google Display and YouTube networks to bring them back to convert.',
        icon: 'Repeat'
      },
      {
        title: 'Bid & Budget Optimization',
        description: 'Manage automated and manual bidding strategies to reduce Cost-Per-Acquisition (CPA) and boost Return-On-Ad-Spend.',
        icon: 'DollarSign'
      }
    ],
    processSteps: [
      {
        stepNumber: '01',
        title: 'Audience & Keyword Analysis',
        description: 'We uncover high-intent commercial keywords, evaluate competitor ad strategies, and calculate estimated CPC.'
      },
      {
        stepNumber: '02',
        title: 'Campaign Architecture & Tracking',
        description: 'We construct clean ad groups, craft compelling copy, integrate ad extensions, and verify end-to-end conversion tracking.'
      },
      {
        stepNumber: '03',
        title: 'Controlled Launch & Calibration',
        description: 'We initiate campaigns under disciplined budget constraints, monitoring search terms report daily for immediate refinement.'
      },
      {
        stepNumber: '04',
        title: 'Scaling & Optimization',
        description: 'We reallocate budget towards top-converting keywords, refine landing page alignment, and test advanced smart bidding models.'
      }
    ],
    idealFor: [
      'Businesses wanting immediate customer inquiries',
      'High-ticket service providers (Medical, Law, Real Estate, Home Services)',
      'SaaS platforms needing qualified demo bookings',
      'E-commerce businesses seeking profitable ROAS'
    ],
    deliverableSummary: 'Engineered Pay-Per-Click campaigns designed to deliver predictable, trackable inquiries and lower cost-per-lead.',
    bannerImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'from-amber-500 to-orange-500',
    faqList: [
      {
        question: 'What Google Ads budget do we need to start?',
        answer: 'We tailor campaign setups to your business stage. For local service businesses, monthly ad spends from ₹20,000–₹50,000+ can gather sufficient data for optimization, while regional and national campaigns scale higher based on market volume.'
      },
      {
        question: 'How do you prevent wasted ad spend?',
        answer: 'We build extensive negative keyword lists prior to launch, avoid overly broad match types, audit search query reports continuously, and optimize landing pages to maximize Quality Scores.'
      },
      {
        question: 'Will we have direct access to our Google Ads account?',
        answer: 'Yes, 100%. You retain full administrative ownership of your Google Ads account, data, and payment settings. We manage the campaigns through our agency manager link.'
      }
    ]
  },
  {
    id: 'website-creation',
    slug: 'website-creation',
    title: 'Custom Website Creation & Web Design',
    shortTitle: 'Website Creation',
    tagline: 'Build a high-converting, lightning-fast digital storefront that converts visitors into customers.',
    description: 'Build a professional, modern website designed to represent your brand, load in milliseconds, and convert visitors into qualified business leads.',
    heroHeadline: 'Websites Engineered to Represent Your Brand & Drive Inquiries',
    heroSubheadline: 'Your website is your 24/7 sales representative. We build custom, responsive, SEO-ready web applications and landing pages that look stunning, load fast, and turn clicks into customers.',
    iconName: 'Globe',
    deliverables: [
      'Modern, Bespoke UI/UX Design & Interactive Prototypes',
      '100% Mobile Responsive & Tablet Optimized Layouts',
      'Lightning-Fast Core Web Vitals & Clean Code Architecture',
      'Built-In Technical SEO Structure & Schema Integration',
      'Lead Capture Forms, WhatsApp Widgets & CRM Webhooks',
      'WordPress CMS or Custom Modern Tech Stack'
    ],
    keyFeatures: [
      {
        title: 'Conversion-Focused Architecture',
        description: 'Structured user journeys with frictionless call-to-actions, clear benefit hierarchies, and trust triggers.',
        icon: 'CheckCircle2'
      },
      {
        title: 'Modern Responsive Layouts',
        description: 'Flawless visual presentation across smartphones, tablets, laptops, and ultra-wide desktop monitors.',
        icon: 'Smartphone'
      },
      {
        title: 'Speed & Core Web Vitals',
        description: 'Optimized asset delivery, modern image formats, clean code stripping, and sub-second page rendering.',
        icon: 'Zap'
      },
      {
        title: 'SEO-Ready Semantic Foundation',
        description: 'Proper heading hierarchy, metadata configuration, schema structured data, and clean XML sitemaps built-in.',
        icon: 'Search'
      },
      {
        title: 'Lead Capture & CRM Integrations',
        description: 'Custom inquiry forms, booking calendar integrations, automated email notifications, and CRM sync.',
        icon: 'Inbox'
      },
      {
        title: 'Easy Content Management',
        description: 'Intuitive administrative controls allowing your team to update text, post case studies, and add services easily.',
        icon: 'Edit3'
      }
    ],
    processSteps: [
      {
        stepNumber: '01',
        title: 'Discovery & Wireframing',
        description: 'We analyze your target audience, competitors, and conversion goals to map out wireframes and page structure.'
      },
      {
        stepNumber: '02',
        title: 'UI/UX Visual Design',
        description: 'We craft high-fidelity modern mockups with typography, color palettes, micro-interactions, and brand imagery.'
      },
      {
        stepNumber: '03',
        title: 'Development & Optimization',
        description: 'We code responsive pages with clean markup, integrate analytics, connect contact endpoints, and test across devices.'
      },
      {
        stepNumber: '04',
        title: 'Testing & Public Launch',
        description: 'We perform cross-browser testing, SEO checklist verification, security hardening, and deploy to production.'
      }
    ],
    idealFor: [
      'Companies needing a complete website revamp',
      'Startups launching their first professional web presence',
      'Service providers needing dedicated high-converting landing pages',
      'Businesses experiencing poor mobile conversion rates'
    ],
    deliverableSummary: 'High-performance, beautifully styled web applications that reinforce credibility and capture customer demand.',
    bannerImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'from-violet-500 to-indigo-500',
    faqList: [
      {
        question: 'How long does a website project take from start to launch?',
        answer: 'A standard custom business website typically takes 2 to 4 weeks depending on page count, custom features, and asset readiness. We maintain a structured milestone roadmap so you are always updated.'
      },
      {
        question: 'Will our website work seamlessly on mobile phones?',
        answer: 'Yes! Over 60% of web traffic is mobile. We design mobile-first with touch-friendly navigation, rapid mobile load speeds, and adaptive layouts.'
      },
      {
        question: 'Can we edit text and content ourselves after launch?',
        answer: 'Absolutely. We provide intuitive content management and clean documentation so you can update text, images, and blog posts without coding.'
      }
    ]
  },
  {
    id: 'video-editing',
    slug: 'video-editing',
    title: 'High-Impact Video Editing & Motion Graphics',
    shortTitle: 'Video Editing',
    tagline: 'Turn raw footage into thumb-stopping social content, ads, and brand stories.',
    description: 'Turn raw footage into engaging, cinematic content for social media, YouTube, advertising campaigns, and corporate business communication.',
    heroHeadline: 'Turn Your Footage Into Content People Stop to Watch',
    heroSubheadline: 'In an attention-scarce digital world, video is king. We transform your raw phone or camera recordings into polished Reels, Shorts, corporate spotlights, motion graphics, and high-converting video ads.',
    iconName: 'Video',
    deliverables: [
      'Instagram Reels & YouTube Shorts with Dynamic Captions',
      'High-Converting Social Media Video Ads (Meta, TikTok, YouTube)',
      'Corporate Overviews & Client Case Study Spotlights',
      'Pacing, Color Grading & Cinematic Audio Mastering',
      'Custom Motion Graphics, Lower Thirds & Title Cards',
      'Multi-Format Exports (9:16 vertical, 16:9 widescreen, 1:1 square)'
    ],
    keyFeatures: [
      {
        title: 'Short-Form Reels & Shorts',
        description: 'Paced for high retention with animated subtitles, sound effects, B-roll overlays, and hook optimization.',
        icon: 'Play'
      },
      {
        title: 'Performance Video Ads',
        description: 'Structured with strong 3-second visual hooks, problem-solution storytelling, and clear calls-to-action.',
        icon: 'Sparkles'
      },
      {
        title: 'Color Grading & Audio Polish',
        description: 'Professional color balancing, vocal denoising, loudness normalization, and curated royalty-free music beds.',
        icon: 'Sliders'
      },
      {
        title: 'Motion Graphics & Titles',
        description: 'Eye-catching animated intros, kinetic typography, stat callouts, and branded lower thirds.',
        icon: 'Film'
      },
      {
        title: 'Podcast & Long-Form Repurposing',
        description: 'Chop long webinars, podcasts, and interviews into bite-sized highlight reels for omnichannel distribution.',
        icon: 'Scissors'
      },
      {
        title: 'Fast Turnaround Pipelines',
        description: 'Structured workflows with revision cycles designed to keep your content calendar consistently full.',
        icon: 'Clock'
      }
    ],
    processSteps: [
      {
        stepNumber: '01',
        title: 'Footage Upload & Creative Brief',
        description: 'You share raw video files, brand guidelines, reference styles, and target platform requirements.'
      },
      {
        stepNumber: '02',
        title: 'Rough Cut & Story Pacing',
        description: 'We edit out filler, curate the best takes, structure the narrative arc, and align with retention benchmarks.'
      },
      {
        stepNumber: '03',
        title: 'Motion, Color & Sound Polish',
        description: 'We add animated subtitles, B-roll inserts, sound design, color correction, and brand graphics.'
      },
      {
        stepNumber: '04',
        title: 'Review & Final Delivery',
        description: 'You review via interactive feedback, we apply revisions, and deliver finalized high-resolution assets.'
      }
    ],
    idealFor: [
      'Content creators & personal brands needing consistent Reels/Shorts',
      'E-commerce brands running video ads on Meta & Instagram',
      'Corporate leaders publishing thought leadership videos',
      'Real estate and service professionals showing projects'
    ],
    deliverableSummary: 'Cinematic, retention-optimized video editing that commands attention and drives customer engagement.',
    bannerImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'from-rose-500 to-pink-500',
    faqList: [
      {
        question: 'What video formats and aspect ratios do you provide?',
        answer: 'We deliver in 9:16 (Instagram Reels, YouTube Shorts, TikTok), 16:9 (YouTube, website hero, presentations), and 1:1 / 4:5 (LinkedIn and Facebook feeds).'
      },
      {
        question: 'How do I send my raw footage to Pixelrise Media?',
        answer: 'We provide secure Google Drive / cloud upload links where you can drag and drop raw camera or smartphone footage easily.'
      },
      {
        question: 'Do you provide background music and sound effects?',
        answer: 'Yes! We include licensed, royalty-free audio tracks, dynamic SFX, and clean audio mixing with every video project.'
      }
    ]
  },
  {
    id: 'video-shooting',
    slug: 'video-shooting',
    title: 'Professional On-Site Video & Photo Production',
    shortTitle: 'Video Shooting',
    tagline: 'Showcase your brand, products, facility, and team with cinematic production.',
    description: 'Create professional visual content that showcases your products, services, team, facilities, and brand identity with commercial-grade cameras and lighting.',
    heroHeadline: 'Show Your Business Through Powerful, High-Definition Visuals',
    heroSubheadline: 'Nothing builds client trust faster than authentic, high-quality visuals of your actual business, products, customer testimonials, and workplace. We handle end-to-end production from script to final shot.',
    iconName: 'Camera',
    deliverables: [
      'Commercial 4K Video Production & Cinema Camera Setup',
      'Professional Studio & On-Location Lighting and Multi-Mic Audio',
      'Corporate Brand Stories & Office / Facility Walkthroughs',
      'Client Testimonial Video Capture & Executive Interviews',
      'Product Videography & Lifestyle Demonstration Shoots',
      'Social Media Content Batches (15-30 videos in single shoot)'
    ],
    keyFeatures: [
      {
        title: 'Brand & Corporate Shoots',
        description: 'Cinematic corporate documentaries, team spotlights, founder stories, and company culture videos.',
        icon: 'Briefcase'
      },
      {
        title: 'Product Demonstration Videos',
        description: 'Crisp macro details, 360-degree turntable shots, feature walk-throughs, and unboxing visuals.',
        icon: 'Package'
      },
      {
        title: 'Client Video Testimonials',
        description: 'High-trust customer interview capture with studio lighting, pro audio, and guided questioning.',
        icon: 'MessageSquare'
      },
      {
        title: 'Social Content Batch Shoots',
        description: 'Shoot an entire month of Instagram Reels or educational videos in a single half-day or full-day session.',
        icon: 'Calendar'
      },
      {
        title: 'Drone & Aerial Cinematography',
        description: 'Sweeping 4K aerial shots of commercial properties, facilities, outdoor events, and real estate.',
        icon: 'Plane'
      },
      {
        title: 'Complete Production Gear',
        description: 'Cinema cameras, wireless lavalier microphones, gimbal stabilizers, softbox studio lighting, and pro teleprompters.',
        icon: 'Aperture'
      }
    ],
    processSteps: [
      {
        stepNumber: '01',
        title: 'Pre-Production & Storyboarding',
        description: 'We define the shoot objectives, write the interview prompts/scripts, and organize the shot list.'
      },
      {
        stepNumber: '02',
        title: 'On-Location Shoot Day',
        description: 'Our crew arrives with lighting, cinema cameras, and sound gear to capture clean, cinematic footage.'
      },
      {
        stepNumber: '03',
        title: 'Data Ingestion & Post-Production',
        description: 'We back up the raw 4K media and transition straight into editing, color grading, and graphics.'
      },
      {
        stepNumber: '04',
        title: 'Master Asset Handover',
        description: 'You receive finalized high-resolution master files and optimized compressed social versions.'
      }
    ],
    idealFor: [
      'Companies wanting to build authentic credibility online',
      'Manufacturers and facility owners showcasing physical operations',
      'Clinics, salons, restaurants, and hospitality businesses',
      'Founders wanting high-production talking head content'
    ],
    deliverableSummary: 'Turnkey on-location video shooting with high-grade lighting, audio, and cinematic camera equipment.',
    bannerImage: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'from-emerald-500 to-teal-500',
    faqList: [
      {
        question: 'Do you bring all the necessary cameras and lighting?',
        answer: 'Yes. Our production team arrives fully equipped with cinema-grade 4K cameras, wireless audio setups, diffused soft lighting, gimbal stabilizers, and teleprompters.'
      },
      {
        question: 'What should we do to prepare for shoot day?',
        answer: 'We provide a simple pre-shoot checklist covering wardrobe suggestions, facility readiness, and talking-point outlines so your team feels confident and relaxed.'
      },
      {
        question: 'Can we batch-shoot multiple social videos in one day?',
        answer: 'Yes! Our social batch package lets you record 10–25+ short-form videos in a single half-day session with teleprompter assistance.'
      }
    ]
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'Full-Funnel Digital Marketing & Growth Strategy',
    shortTitle: 'Digital Marketing',
    tagline: 'Omnichannel digital growth strategies designed around your revenue targets.',
    description: 'Build a stronger online presence with customized digital marketing strategies designed around your business goals, target audience, and customer acquisition economics.',
    heroHeadline: 'Integrated Growth Strategies That Connect Marketing to Revenue',
    heroSubheadline: 'Stop relying on disconnected marketing tactics. We integrate SEO, paid acquisition, high-converting landing pages, and creative content into a cohesive digital growth engine.',
    iconName: 'Compass',
    deliverables: [
      'Full-Funnel Customer Acquisition Strategy & Roadmap',
      'Multi-Channel Advertising & Search Integration',
      'Content Marketing Architecture & Brand Positioning',
      'Conversion Rate Optimization (CRO) & User Funnels',
      'Email Retargeting & Automated Lead Nurturing',
      'Executive Analytics Dashboard & KPI Attribution'
    ],
    keyFeatures: [
      {
        title: 'Holistic Funnel Strategy',
        description: 'Align Top-of-Funnel brand awareness, Middle-of-Funnel trust building, and Bottom-of-Funnel lead capture.',
        icon: 'Layers'
      },
      {
        title: 'Conversion Rate Optimization',
        description: 'Optimize landing pages, CTA placements, form friction, and user flow to extract more revenue from existing traffic.',
        icon: 'Percent'
      },
      {
        title: 'Content Marketing & Authority',
        description: 'Position your business as the undisputed industry leader through insightful content and thought leadership.',
        icon: 'FileText'
      },
      {
        title: 'Omnichannel Synergy',
        description: 'Synchronize organic search, Google Ads, social video content, and direct email channels seamlessly.',
        icon: 'Share2'
      },
      {
        title: 'Lead Nurture Automation',
        description: 'Build automated email and WhatsApp response workflows that keep prospects engaged until they buy.',
        icon: 'Mail'
      },
      {
        title: 'Transparent Growth Metrics',
        description: 'Measure Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), and lead quality with clear reporting.',
        icon: 'PieChart'
      }
    ],
    processSteps: [
      {
        stepNumber: '01',
        title: 'Market & Funnel Audit',
        description: 'We evaluate your current customer journey, identify conversion leaks, and analyze competitor positioning.'
      },
      {
        stepNumber: '02',
        title: 'Growth Architecture Blueprint',
        description: 'We define the channel mix, messaging hierarchy, advertising budget allocation, and target milestones.'
      },
      {
        stepNumber: '03',
        title: 'Multi-Channel Execution',
        description: 'We launch campaigns, deploy landing pages, publish SEO assets, and distribute video creative in sync.'
      },
      {
        stepNumber: '04',
        title: 'Data-Driven Optimization',
        description: 'We continuously test offers, optimize CPA, reallocate capital to winning channels, and scale top funnels.'
      }
    ],
    idealFor: [
      'Growing businesses seeking a dedicated digital growth partner',
      'Established firms wanting to modernize legacy marketing channels',
      'Companies needing cross-channel synchronization and attribution',
      'Brands ready to scale customer acquisition predictably'
    ],
    deliverableSummary: 'Full-spectrum digital marketing solutions tailored to your unique market positioning and revenue milestones.',
    bannerImage: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'from-teal-500 to-emerald-500',
    faqList: [
      {
        question: 'How do you determine which marketing channels are best for us?',
        answer: 'We evaluate where your target buyers naturally look for solutions (search intent vs. passive discovery) and balance fast customer acquisition (Google Ads) with compounding long-term equity (SEO & Content).'
      },
      {
        question: 'How do we measure return on investment (ROI)?',
        answer: 'We establish unified conversion tracking for every lead form, phone call, and consultation, providing transparent attribution reports showing exactly which channels generate pipeline.'
      },
      {
        question: 'Do you work with in-house marketing teams?',
        answer: 'Yes! We frequently collaborate with internal marketing directors and founders, providing specialized execution, creative assets, and technical search capability.'
      }
    ]
  }
];
