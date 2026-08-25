import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { TrustBar } from '../components/home/TrustBar';
import { AboutSection } from '../components/home/AboutSection';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ProcessSection } from '../components/home/ProcessSection';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { TestimonialCarousel } from '../components/home/TestimonialCarousel';
import { RoiCalculator } from '../components/home/RoiCalculator';
import { FAQAccordion } from '../components/home/FAQAccordion';
import { CTASection } from '../components/home/CTASection';

interface HomePageProps {
  navigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection navigate={navigate} />

      {/* 2. Trust / Service Introduction (Everything You Need to Grow Online) */}
      <TrustBar navigate={navigate} />

      {/* 3. About Section (Who We Are) */}
      <AboutSection navigate={navigate} />

      {/* 4. Services Grid (What We Do) */}
      <ServicesGrid navigate={navigate} />

      {/* 5. Why Choose Us */}
      <WhyChooseUs />

      {/* 6. Process Section (How We Work - 01 Discover, 02 Plan, 03 Execute, 04 Improve) */}
      <ProcessSection navigate={navigate} />

      {/* 7. Interactive Growth / ROI Simulator */}
      <RoiCalculator navigate={navigate} />

      {/* 8. Projects & Case Studies */}
      <FeaturedProjects navigate={navigate} />

      {/* 9. Testimonials Carousel */}
      <TestimonialCarousel />

      {/* 10. Accordion FAQ */}
      <FAQAccordion navigate={navigate} />

      {/* 11. Final High-Converting CTA */}
      <CTASection navigate={navigate} />
    </div>
  );
};
