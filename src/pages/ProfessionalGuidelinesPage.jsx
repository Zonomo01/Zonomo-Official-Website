import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './PoliciesPage.css';

const ProfessionalGuidelinesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page-wrapper">
      <Navigation />
      
      <div className="policy-hero">
        <h1>Professional Guidelines</h1>
        <p className="policy-meta">Standards for Zonomo Professionals</p>
      </div>

      <div className="policy-container">
        <div className="policy-card">
          <div className="policy-content">
            <p className="policy-intro">
              As a professional on the Zonomo platform, you are expected to maintain the highest standards of service, reliability, and conduct.
            </p>

            <div className="policy-section">
              <h2>5.1 Professionalism</h2>
              <ul>
                <li>Be punctual</li>
                <li>Communicate clearly</li>
                <li>Maintain appropriate appearance</li>
                <li>Treat customers respectfully</li>
                <li>Respect customer property</li>
                <li>Complete agreed services professionally</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>5.2 Honesty</h2>
              <ul>
                <li>Do not misrepresent qualifications</li>
                <li>Do not claim certifications not held</li>
                <li>Do not provide fake documents</li>
                <li>Do not manipulate ratings</li>
                <li>Do not misrepresent prices</li>
                <li>Do not demand unauthorised payments</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>5.3 Pricing</h2>
              <p>
                Professionals must clearly communicate service price, additional charges, material costs, applicable taxes and cancellation-related charges before they become payable.
              </p>
            </div>

            <div className="policy-section">
              <h2>5.4 Customer Privacy</h2>
              <p>
                Professionals must keep customer information confidential and must not sell, share, publish or use it for unrelated marketing or improper contact.
              </p>
            </div>

            <div className="policy-section">
              <h2>5.5 Healthcare Professionals</h2>
              <ul>
                <li>Maintain valid qualifications</li>
                <li>Hold applicable registrations/licences</li>
                <li>Work within professional scope</li>
                <li>Follow applicable clinical standards</li>
                <li>Maintain patient confidentiality</li>
                <li>Obtain appropriate consent</li>
                <li>Maintain appropriate records</li>
                <li>Escalate emergencies appropriately</li>
              </ul>
              <p>
                Zonomo may request evidence of qualifications and registrations.
              </p>
            </div>

            <div className="policy-section">
              <h2>7. Professional Performance</h2>
              <p>
                Zonomo may evaluate professional performance using customer ratings, reviews, cancellation rate, complaints, response time, reliability, policy violations and verification status. Performance measures may be used to improve platform quality and customer experience.
              </p>
            </div>

            <div className="policy-section">
              <h2>8. Professional Suspension</h2>
              <p>
                A professional may be temporarily suspended while Zonomo investigates serious complaints, safety incidents, fraud, misrepresentation, harassment, repeated cancellations, poor service quality, qualification concerns or breaches of professional guidelines. Permanent removal may occur for serious or repeated violations.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProfessionalGuidelinesPage;
