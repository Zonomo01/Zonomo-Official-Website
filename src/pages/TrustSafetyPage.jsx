import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './PoliciesPage.css';

const TrustSafetyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page-wrapper">
      <Navigation />
      
      <div className="policy-hero">
        <h1>Trust & Safety</h1>
        <p className="policy-meta">Effective as of September 2026</p>
      </div>

      <div className="policy-container">
        <div className="policy-card">
          <div className="policy-content">
            <p className="policy-intro">
              At Zonomo, trust and safety are fundamental to the platform. We aim to create an environment where customers can access professionals with greater confidence and professionals can work in a respectful environment.
            </p>

            <div className="policy-section">
              <h2>3.1 Professional Verification</h2>
              <p>
                Depending upon the category, Zonomo may verify identity, contact details, address, professional qualifications, licences, certifications, experience, references and background information. Verification requirements may vary by service category. Verification does not constitute an absolute guarantee of future conduct or service quality.
              </p>
            </div>

            <div className="policy-section">
              <h2>3.2 Safety Standards</h2>
              <ul>
                <li>Professionals must arrive in appropriate condition to perform the service</li>
                <li>Carry necessary equipment</li>
                <li>Follow applicable safety procedures</li>
                <li>Respect customer property</li>
                <li>Maintain professional behaviour</li>
                <li>Protect customer privacy</li>
                <li>Avoid unnecessary access to private areas/property</li>
                <li>Customers must similarly treat professionals respectfully and provide a reasonably safe working environment</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>3.3 Zero Tolerance for Harassment</h2>
              <p>
                Zonomo does not tolerate sexual harassment, physical threats, violence, intimidation, hate-based abuse, stalking, unwanted sexual conduct, exploitation or discriminatory behaviour. Serious incidents may result in immediate suspension and, where appropriate, reporting to authorities.
              </p>
            </div>

            <div className="policy-section">
              <h2>3.4 Reporting a Safety Issue</h2>
              <p>
                <strong>Emergency:</strong> Contact local emergency services/police where appropriate.<br />
                <strong>Zonomo Safety:</strong> safety@zonomo.in<br />
                <strong>Customer Support:</strong> support@zonomo.in<br />
                <strong>Phone:</strong> [Phone Number]
              </p>
            </div>

            <div className="policy-section">
              <h2>3.5 Emergency Situations</h2>
              <p>
                Zonomo is not an emergency response service. For immediate danger, serious injury, fire, crime or medical emergency, users should contact the appropriate emergency authority first.
              </p>
            </div>

            <div className="policy-section">
              <h2>3.6 Privacy and Personal Information</h2>
              <p>
                Users must not misuse, collect, publish or distribute another person's private information, including phone numbers, addresses, identification documents, medical information, photographs or private conversations, unless authorised or legally permitted.
              </p>
            </div>

            <div className="policy-section">
              <h2>3.7 Safety Investigations</h2>
              <p>
                Where necessary, Zonomo may temporarily suspend accounts, request additional information, review booking records and platform communications, contact relevant parties, cooperate with law enforcement and restrict future bookings.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TrustSafetyPage;
