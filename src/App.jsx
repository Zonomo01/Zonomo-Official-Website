import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import LandingPage from './pages/LandingPage';
import FoundersPage from './pages/FoundersPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import TrustSafetyPage from './pages/TrustSafetyPage';
import PartnerWithUsPage from './pages/PartnerWithUsPage';
import ProfessionalGuidelinesPage from './pages/ProfessionalGuidelinesPage';
import TrainingCenterPage from './pages/TrainingCenterPage';
import FAQPage from './pages/FAQPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-founders" element={<FoundersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/trust-and-safety" element={<TrustSafetyPage />} />
        <Route path="/partner-with-us" element={<PartnerWithUsPage />} />
        <Route path="/professional-guidelines" element={<ProfessionalGuidelinesPage />} />
        <Route path="/training-center" element={<TrainingCenterPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/service/:slug" element={<ServiceDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
