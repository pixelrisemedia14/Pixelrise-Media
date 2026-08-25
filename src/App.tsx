import React, { useState, useEffect } from 'react';
import { DataProvider } from './context/DataContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ToastContainer } from './components/ui/ToastContainer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ContactPage } from './pages/ContactPage';
import { QuotePage } from './pages/QuotePage';
import { ConsultationPage } from './pages/ConsultationPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { FAQPage } from './pages/FAQPage';
import { AdminPage } from './pages/AdminPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ServiceCategory } from './types';
import { MessageSquare, PhoneCall, ArrowUp } from 'lucide-react';

export const App: React.FC = () => {
  // Simple, robust client-side routing based on window.location
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Monitor scroll for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Programmatic navigate helper
  const navigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route Dispatcher
  const renderCurrentRoute = () => {
    // 1. Home
    if (currentPath === '/' || currentPath === '') {
      return <HomePage navigate={navigate} />;
    }

    // 2. About
    if (currentPath === '/about') {
      return <AboutPage navigate={navigate} />;
    }

    // 3. Services Overview
    if (currentPath === '/services') {
      return <ServicesPage navigate={navigate} />;
    }

    // 4. Specific Service Pages
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '') as ServiceCategory;
      const validSlugs: ServiceCategory[] = [
        'seo',
        'google-ads',
        'website-creation',
        'video-editing',
        'video-shooting',
        'digital-marketing'
      ];
      if (validSlugs.includes(slug)) {
        return <ServiceDetailPage slug={slug} navigate={navigate} />;
      }
    }

    // 5. Projects / Portfolio
    if (currentPath === '/projects') {
      return <ProjectsPage navigate={navigate} />;
    }

    // 6. Project Detail Page
    if (currentPath.startsWith('/projects/')) {
      const slug = currentPath.replace('/projects/', '');
      return <ProjectDetailPage slug={slug} navigate={navigate} />;
    }

    // 7. Contact
    if (currentPath === '/contact') {
      return <ContactPage navigate={navigate} />;
    }

    // 8. Quote Builder
    if (currentPath === '/quote') {
      return <QuotePage navigate={navigate} />;
    }

    // 9. Consultation Request
    if (currentPath === '/consultation') {
      return <ConsultationPage navigate={navigate} />;
    }

    // 10. Testimonials / Reviews
    if (currentPath === '/testimonials') {
      return <TestimonialsPage navigate={navigate} />;
    }

    // 11. FAQs
    if (currentPath === '/faq') {
      return <FAQPage navigate={navigate} />;
    }

    // 12. Admin Portal
    if (currentPath === '/admin') {
      return <AdminPage />;
    }

    // 13. Legal
    if (currentPath === '/privacy-policy') {
      return <PrivacyPolicyPage />;
    }
    if (currentPath === '/terms') {
      return <TermsPage />;
    }

    // 14. 404 Fallback
    return <NotFoundPage navigate={navigate} />;
  };

  return (
    <DataProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950 font-sans antialiased">
        
        {/* Global Navigation Bar */}
        <Navbar currentPath={currentPath} navigate={navigate} />

        {/* Dynamic Route Content */}
        <main className="flex-grow">
          {renderCurrentRoute()}
        </main>

        {/* Global Footer */}
        <Footer navigate={navigate} />

        {/* Global Toast Alert Overlay */}
        <ToastContainer />

        {/* Floating Quick Action & Scroll to Top buttons */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
          
          {/* Quick Quote Float Button */}
          <button
            onClick={() => navigate('/quote')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-xs font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-200 cursor-pointer border border-cyan-300"
            title="Request a Quote"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="hidden sm:inline">Get a Quote</span>
          </button>

          {/* Scroll to top */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700/80 shadow-lg hover:border-cyan-400 transition-all cursor-pointer backdrop-blur-md"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </DataProvider>
  );
};

export default App;
