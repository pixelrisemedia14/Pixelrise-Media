export type ServiceCategory = 
  | 'seo'
  | 'google-ads'
  | 'website-creation'
  | 'video-editing'
  | 'video-shooting'
  | 'digital-marketing';

export interface ServiceDetail {
  id: string;
  slug: ServiceCategory;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  heroHeadline: string;
  heroSubheadline: string;
  iconName: string;
  deliverables: string[];
  keyFeatures: {
    title: string;
    description: string;
    icon: string;
  }[];
  processSteps: {
    stepNumber: string;
    title: string;
    description: string;
  }[];
  idealFor: string[];
  deliverableSummary: string;
  faqList: {
    question: string;
    answer: string;
  }[];
  bannerImage: string;
  accentColor: string;
}

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  clientName: string;
  industry: string;
  category: ServiceCategory | 'all';
  categoryLabel: string;
  summary: string;
  challenge: string;
  objective: string;
  strategy: string;
  workCompleted: string[];
  outcome: {
    title: string;
    description: string;
  }[];
  visualShowcase: {
    url: string;
    caption: string;
    tag?: string;
  }[];
  keyLearnings: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  featured: boolean;
  coverImage: string;
  timeline: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  role: string;
  review: string;
  rating: number;
  avatarUrl?: string;
  serviceCategory: ServiceCategory;
  serviceLabel: string;
  date: string;
  isDemo?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'seo' | 'ads' | 'web' | 'video' | 'pricing';
}

export interface LeadSubmission {
  id: string;
  name: string;
  businessName: string;
  email: string;
  phone: string;
  website?: string;
  service: string;
  budget: string;
  message: string;
  preferredContact: 'email' | 'phone' | 'whatsapp';
  status: 'new' | 'contacted' | 'proposal_sent' | 'closed' | 'archived';
  createdAt: string;
  adminNotes?: string;
}

export interface ConsultationRequest {
  id: string;
  name: string;
  businessName: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
  adminNotes?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'unread' | 'replied' | 'archived';
}
