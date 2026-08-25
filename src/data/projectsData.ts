import { ProjectCaseStudy } from '../types';

export const projectsData: ProjectCaseStudy[] = [
  {
    id: 'proj-1',
    slug: 'apex-dental-clinic-local-seo',
    title: 'Apex Dental Care: Local SEO & Google Business Profile Architecture',
    clientName: 'Apex Multi-Specialty Dental Clinic',
    industry: 'Healthcare / Medical Practice',
    category: 'seo',
    categoryLabel: 'SEO Services',
    summary: 'Restructured local search signals, resolved duplicate listings, and optimized high-intent dental service pages to establish local map pack visibility.',
    challenge: 'Apex Dental Care operated in a highly competitive metro area with three locations. Despite having modern dental facilities, their website suffered from unoptimized title structures, thin service descriptions, and unverified local citations, resulting in low organic search visibility for high-intent queries like "emergency root canal" and "dental implants".',
    objective: 'Establish a dominant local search presence for all three branch locations, ensure accurate NAP (Name, Address, Phone) consistency across directories, and optimize individual treatment service pages for qualified patient inquiries.',
    strategy: 'We implemented a location-specific SEO architecture with dedicated landing pages for each clinic branch. We rebuilt Google Business Profiles with accurate categories and high-definition photography, conducted extensive technical fixes, and created comprehensive patient treatment guides.',
    workCompleted: [
      'Comprehensive Technical SEO Crawl and Schema Markup (MedicalBusiness / Dentist)',
      'Creation of 14 high-intent treatment service pages with FAQs',
      'Location page restructuring with Google Maps embeds and direct appointment CTA',
      'Local citation cleanup across 45+ healthcare and business directories',
      'Review generation system setup and staff training for verified patient feedback'
    ],
    outcome: [
      {
        title: 'Local Map Pack Visibility',
        description: 'Achieved top-tier positioning across primary geographic radius for target dental treatment keywords.'
      },
      {
        title: 'Organic Inbound Appointment Requests',
        description: 'Substantial increase in direct online appointment bookings and verified phone calls from mobile searchers.'
      },
      {
        title: 'Search Index Health',
        description: 'Zero crawl errors, rich review snippets in SERPs, and 100% mobile index compliance.'
      }
    ],
    visualShowcase: [
      {
        url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
        caption: 'Modern clinical photography integrated across optimized local landing pages.',
        tag: 'On-Page Architecture'
      },
      {
        url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80',
        caption: 'Treatment guide layout featuring clear pricing transparently and structured FAQs.',
        tag: 'Content Strategy'
      }
    ],
    keyLearnings: [
      'Local schema markup and verified Google Business Profile categories are foundational for healthcare search visibility.',
      'Answering patient questions directly on treatment pages significantly increases on-page dwell time and inquiry rates.'
    ],
    testimonial: {
      quote: 'Pixelrise Media transformed our online presence. Our clinics now receive steady patient inquiries directly from Google searches in our local area.',
      author: 'Dr. R. Sharma',
      role: 'Clinical Director',
      company: 'Apex Multi-Specialty Dental Clinic'
    },
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    timeline: '3 Months Execution'
  },
  {
    id: 'proj-2',
    slug: 'lumina-architects-brand-website',
    title: 'Lumina Architecture: High-Performance Portfolio Web Platform',
    clientName: 'Lumina Architecture & Urban Design',
    industry: 'Architecture & Construction',
    category: 'website-creation',
    categoryLabel: 'Website Creation',
    summary: 'Custom design and development of an ultra-minimal, high-resolution architectural portfolio website with lightning-fast load times.',
    challenge: 'Lumina’s legacy website was sluggish, cluttered with uncompressed image files, and poorly organized on mobile screens. High-net-worth commercial clients and developers were leaving the website before viewing their signature project portfolio.',
    objective: 'Create an editorial-grade, minimalist website that highlights architectural photography, loads instantaneously on any device, and features frictionless contact workflows for project tenders.',
    strategy: 'We designed a bespoke, typography-focused visual system using Next-Gen responsive image loading (WebP/AVIF with blur placeholders). We implemented custom filtering by project typology (Residential, Commercial, Civic) and built an inquiry modal accessible from every project page.',
    workCompleted: [
      'Bespoke UI/UX design with custom layout grid and refined typography',
      'Next-generation responsive image optimization and lazy-loading pipeline',
      'Dynamic project filter system (Typology, Year, Location, Scale)',
      'Sub-second page transitions and 100/100 Core Web Vitals score on desktop',
      'Integrated project tender inquiry form with automatic team notification'
    ],
    outcome: [
      {
        title: 'Editorial Visual Impact',
        description: 'Immaculate presentation of high-resolution architectural photography without performance lag.'
      },
      {
        title: 'Mobile Usability Overhaul',
        description: 'Seamless swiping gallery and touch-optimized navigation for clients viewing on iPads and mobile phones.'
      },
      {
        title: 'Inquiry Flow Efficiency',
        description: 'Prospective clients can now request proposals directly from specific portfolio projects with contextual data.'
      }
    ],
    visualShowcase: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
        caption: 'Full-bleed project showcase highlighting contemporary residential structures.',
        tag: 'Visual Showcase'
      },
      {
        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
        caption: 'Minimalist blueprint and case study breakdown view.',
        tag: 'UX Design'
      }
    ],
    keyLearnings: [
      'Image optimization without compromising visual fidelity is essential for design and architectural firms.',
      'Direct project-contextual inquiry buttons yield higher inquiry intent than generic contact forms.'
    ],
    testimonial: {
      quote: 'The website Pixelrise Media built reflects the exact precision and aesthetic standard we uphold in our architectural work. It has elevated our brand positioning.',
      author: 'Vikram Mehta',
      role: 'Principal Architect',
      company: 'Lumina Architecture'
    },
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    timeline: '4 Weeks'
  },
  {
    id: 'proj-3',
    slug: 'zenith-logistics-google-ads',
    title: 'Zenith Logistics: Commercial B2B Google Ads Campaign Restructure',
    clientName: 'Zenith Freight & Supply Chain Logistics',
    industry: 'B2B Logistics & Freight Forwarding',
    category: 'google-ads',
    categoryLabel: 'Google Ads',
    summary: 'Eliminated wasted spend through aggressive negative keyword filtering and built dedicated high-intent search ad groups for commercial freight quotes.',
    challenge: 'Zenith Logistics was spending heavily on Google Ads but receiving mostly retail inquiries, package tracking searches, and irrelevant DIY mover queries. Their budget was draining daily with very few genuine commercial freight contracts.',
    objective: 'Rebuild the Google Ads account from scratch to target commercial fleet contracts, B2B freight forwarding, and warehouse leasing inquiries while eliminating retail consumer click waste.',
    strategy: 'We performed deep negative keyword isolation (blocking retail, tracking, personal mover, and job seeker terms). We restructured ad groups into tightly themed commercial categories and paired each ad group with tailored landing pages featuring quotation calculators.',
    workCompleted: [
      'Account restructuring into 6 tightly themed commercial B2B ad groups',
      'Integration of over 400+ negative keywords and shared negative lists',
      'Custom landing page deployment with corporate quote request forms',
      'Setup of verified conversion tracking via GTM with server-side validation',
      'Implementation of Target CPA bidding once conversion baselines were stabilized'
    ],
    outcome: [
      {
        title: 'Budget Efficiency',
        description: 'Dramatically decreased off-target click spend by filtering out non-commercial queries.'
      },
      {
        title: 'High-Value Inquiries',
        description: 'Shifted incoming lead profile exclusively to corporate logistics managers and industrial shippers.'
      },
      {
        title: 'Transparency',
        description: 'Complete visibility into search terms, cost per qualified quote, and lead pipeline value.'
      }
    ],
    visualShowcase: [
      {
        url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
        caption: 'Targeted logistics campaign focusing on enterprise freight forwarding.',
        tag: 'B2B Strategy'
      }
    ],
    keyLearnings: [
      'For B2B service companies, negative keyword discipline is just as critical as selecting targeted keywords.',
      'Explicit corporate messaging in ad copy filters out consumer clicks before money is spent.'
    ],
    testimonial: {
      quote: 'Our sales team stopped wasting hours answering retail package questions. Every lead we get now is a business looking for freight contracts.',
      author: 'Anil Kulkarni',
      role: 'Head of Business Development',
      company: 'Zenith Logistics'
    },
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    timeline: 'Ongoing Management'
  },
  {
    id: 'proj-4',
    slug: 'pulse-nutrition-social-reels',
    title: 'Pulse Nutrition: High-Retention Video Editing & Social Content Engine',
    clientName: 'Pulse Organic Nutrition',
    industry: 'Health & Consumer Goods',
    category: 'video-editing',
    categoryLabel: 'Video Editing',
    summary: 'Transformed founder podcasts and raw product demonstration footage into a high-frequency short-form video content pipeline.',
    challenge: 'Pulse Nutrition had great wellness products and hours of long-form video footage from founder podcasts and customer unboxings, but lacked the editing capacity to produce fast-paced, retention-optimized short-form content for Instagram and YouTube.',
    objective: 'Establish a systematic video editing workflow delivering 20 engaging Reels and Shorts per month with custom animated captions, sound design, and retention hooks.',
    strategy: 'We established an agile content pipeline: parsing long-form recordings for high-emotion and educational soundbites, adding dynamic kinetic subtitles, integrating product B-roll, and applying brand-consistent color grading.',
    workCompleted: [
      'Production of 20 short-form video edits per month (9:16 vertical format)',
      'Dynamic animated captions with keyword highlights and custom typography',
      'Pacing optimization with sound effects, audio ducking, and licensed music',
      'Thumbnail design and high-CTR opening frame creation',
      'Format adaptations for Instagram Reels, YouTube Shorts, and TikTok'
    ],
    outcome: [
      {
        title: 'Audience Retention',
        description: 'Significant uplift in average watch duration and completion rate across vertical video formats.'
      },
      {
        title: 'Content Velocity',
        description: 'Enabled the brand to post consistently every single weekday without production burnout.'
      },
      {
        title: 'Community Engagement',
        description: 'Spurred genuine comments, saves, and direct product inquiries through organic social reach.'
      }
    ],
    visualShowcase: [
      {
        url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
        caption: 'High-energy fitness and wellness short-form video edit.',
        tag: 'Vertical Video'
      }
    ],
    keyLearnings: [
      'The first 3 seconds and dynamic visual movement determine over 80% of short-form video retention.',
      'Consistent subtitle styling reinforces brand recognition across social feeds.'
    ],
    testimonial: {
      quote: 'Pixelrise Media gives our brand a fresh, energetic visual identity. Their editing turnaround is fast and always on-point with our style.',
      author: 'Pooja Varma',
      role: 'Brand Manager',
      company: 'Pulse Organic Nutrition'
    },
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    timeline: 'Monthly Content Retainer'
  },
  {
    id: 'proj-5',
    slug: 'artisan-roastery-commercial-shoot',
    title: 'Artisan Roastmasters: On-Location Brand & Product Cinematography',
    clientName: 'Artisan Roastmasters Coffee Co.',
    industry: 'Food & Beverage / Hospitality',
    category: 'video-shooting',
    categoryLabel: 'Video Shooting',
    summary: 'Full-day on-location cinema shoot capturing coffee roasting craftsmanship, barista technique, cafe ambiance, and customer experience.',
    challenge: 'Artisan Roastmasters was relying on low-resolution smartphone photos that failed to convey the premium craftsmanship of their single-origin coffee roasting process and flagship cafe spaces.',
    objective: 'Produce a comprehensive library of commercial-grade 4K video assets and high-resolution still photography for their website, social media campaigns, and brand documentary.',
    strategy: 'We conducted a structured 1-day shoot with cinema cameras, gimbal stabilizers, macro lenses, and soft lighting kits. We captured the bean roasting process, latte art, founder interviews, and ambient cafe life.',
    workCompleted: [
      '1-Day on-location commercial 4K video production and lighting setup',
      'Macro product videography of coffee beans, grinding, and espresso extraction',
      'Founder story interview with pro audio and diffused studio lighting',
      'Drone aerial shots of the roasting facility and exterior cafe seating',
      'Delivery of brand story master video plus 15 ready-to-post short video assets'
    ],
    outcome: [
      {
        title: 'Authentic Visual Library',
        description: 'Provided the brand with over 80+ processed high-res assets and 16 finalized video deliverables.'
      },
      {
        title: 'Brand Equity Elevation',
        description: 'Positioned the company as a premier specialty roaster across digital touchpoints.'
      },
      {
        title: 'Multi-Channel Asset Utility',
        description: 'Assets utilized across website hero, e-commerce product pages, and social advertising.'
      }
    ],
    visualShowcase: [
      {
        url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1000&q=80',
        caption: 'Macro cinema capture of single-origin coffee roasting process.',
        tag: 'Product Cinematography'
      },
      {
        url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80',
        caption: 'Atmospheric cafe cinematography capturing barista craft.',
        tag: 'On-Location'
      }
    ],
    keyLearnings: [
      'High-grade lighting and macro lenses make sensory products like food and beverage visually unforgettable.',
      'Pre-production shot lists ensure maximum capture efficiency during on-location shoot days.'
    ],
    testimonial: {
      quote: 'The footage captured by Pixelrise Media was breathtaking. Seeing our roasting process in 4K cinema quality gave our customers a whole new appreciation for our craft.',
      author: 'Sameer Sen',
      role: 'Founder & Master Roaster',
      company: 'Artisan Roastmasters'
    },
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80',
    timeline: '1 Shoot Day + 1 Week Post-Production'
  },
  {
    id: 'proj-6',
    slug: 'elevate-saas-growth-strategy',
    title: 'Elevate HR Tech: Integrated Full-Funnel Digital Growth Strategy',
    clientName: 'Elevate HR Software Solutions',
    industry: 'Enterprise SaaS / B2B Technology',
    category: 'digital-marketing',
    categoryLabel: 'Digital Marketing',
    summary: 'Combined technical SEO, targeted Google Ads, conversion-optimized demo landing pages, and lead nurture automation to accelerate pipeline.',
    challenge: 'Elevate HR had developed a powerful enterprise payroll and HR management tool, but had disconnected marketing efforts. Search traffic wasn’t converting, and paid ads were sending traffic to a confusing homepage without a clear demo booking path.',
    objective: 'Design and execute a synchronized digital marketing engine that captures demand across search and paid channels and guides HR leaders smoothly into demo bookings.',
    strategy: 'We mapped the entire buyer journey: high-intent Google Search campaigns for commercial payroll software queries, SEO topic clusters addressing HR compliance, high-converting interactive demo landing pages, and automated confirmation workflows.',
    workCompleted: [
      'Full-funnel customer journey mapping and buyer persona segmentation',
      'Targeted Google Search & Remarketing ad campaigns with high-intent copy',
      'SEO content architecture with 10 comprehensive HR compliance guides',
      'Custom interactive product demo landing page with calendar booking',
      'Automated email lead sequence for prospects who view demo pages'
    ],
    outcome: [
      {
        title: 'Unified Customer Journey',
        description: 'Eliminated channel fragmentation and provided clear attribution across all marketing touchpoints.'
      },
      {
        title: 'Demo Booking Velocity',
        description: 'Accelerated qualified enterprise demo requests with streamlined single-step booking UX.'
      },
      {
        title: 'Organic Domain Authority',
        description: 'Built compounding topical authority in human resources and payroll compliance search queries.'
      }
    ],
    visualShowcase: [
      {
        url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
        caption: 'Enterprise software demo workflow and interactive interface.',
        tag: 'Funnel Architecture'
      }
    ],
    keyLearnings: [
      'In B2B SaaS, sending paid traffic directly to friction-free interactive demo pages converts substantially better than sending to generic homepages.',
      'Combining organic compliance guides with targeted search ads builds institutional trust.'
    ],
    testimonial: {
      quote: 'Pixelrise Media helped us connect all our growth pieces together. We now have a predictable inbound demo pipeline for our sales reps.',
      author: 'Aditya Nair',
      role: 'Chief Marketing Officer',
      company: 'Elevate HR Software Solutions'
    },
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    timeline: '6 Months Retainer'
  }
];
