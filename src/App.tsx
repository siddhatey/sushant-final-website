import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AmbientBackdrop } from './components/AmbientBackdrop';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActionDock } from './components/FloatingActionDock';

const HomePage = lazy(() =>
  import('./pages/HomePage').then((m) => ({ default: m.HomePage }))
);
const PortfolioPage = lazy(() =>
  import('./pages/PortfolioPage').then((m) => ({ default: m.PortfolioPage }))
);
const AboutPage = lazy(() =>
  import('./pages/AboutPage').then((m) => ({ default: m.AboutPage }))
);
const ServicesPage = lazy(() =>
  import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage }))
);
const FaqPage = lazy(() =>
  import('./pages/FaqPage').then((m) => ({ default: m.FaqPage }))
);
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((m) => ({ default: m.ContactPage }))
);
const PrivacyPolicyPage = lazy(() =>
  import('./pages/PrivacyPolicyPage').then((m) => ({ default: m.PrivacyPolicyPage }))
);
const TermsPage = lazy(() =>
  import('./pages/TermsPage').then((m) => ({ default: m.TermsPage }))
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

function RouteFallback() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-[1200px] items-center justify-center px-4">
      <div className="apple-glass rounded-full px-6 py-3 text-xs font-medium text-[var(--text-secondary)]">
        Loading studio view…
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="relative flex min-h-screen flex-col">
          <AmbientBackdrop />
          <Header />
          <div className="flex-1">
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-and-conditions" element={<TermsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
          <FloatingActionDock />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
