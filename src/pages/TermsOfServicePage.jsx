import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './PoliciesPage.css';

const TermsOfServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page-wrapper">
      <Navigation />
      
      <div className="policy-hero">
        <h1>Terms of Service</h1>
        <p className="policy-meta">Effective as of September 2026</p>
      </div>

      <div className="policy-container">
        <div className="policy-card">
          <div className="policy-content">
            <p className="policy-intro">
              Please read these Terms of Service carefully as they contain important information about your legal rights, remedies and obligations.
            </p>

            <div className="policy-section">
              <h2>2.1 About Zonomo</h2>
              <p>
                Zonomo is a technology-enabled marketplace connecting customers with independent service professionals. Zonomo may facilitate discovery, search, matching, booking, communication, payments, reviews and customer support. Zonomo is generally not the employer, agent, partner, contractor or service provider of the professionals listed on the platform unless expressly stated otherwise in writing. Professionals operate independently and are responsible for delivering their services in accordance with applicable law and their professional obligations.
              </p>
            </div>

            <div className="policy-section">
              <h2>2.2 Eligibility</h2>
              <p>
                Users must provide accurate information, have authority to use their account, comply with applicable law and not misuse the platform.
              </p>
            </div>

            <div className="policy-section">
              <h2>2.3 Booking Services</h2>
              <p>
                A customer may request a service through Zonomo. A booking is considered confirmed only when the platform or relevant professional confirms it. Availability is not guaranteed until confirmation.
              </p>
            </div>

            <div className="policy-section">
              <h2>2.4 Pricing</h2>
              <p>
                Zonomo may display professional service charges, platform fees, taxes, convenience charges and other applicable charges. Where professionals are permitted to negotiate prices, the final price may be agreed between the customer and professional through the platform.
              </p>
            </div>

            <div className="policy-section">
              <h2>2.5 Payments</h2>
              <p>
                Payments may be processed through third-party payment providers. Users must not use fraudulent payment methods or attempt to circumvent platform payment mechanisms.
              </p>
            </div>

            <div className="policy-section">
              <h2>2.6 Cancellations and Refunds</h2>
              <p>
                Cancellation and refund terms may vary depending on service category, professional, timing of cancellation, payment method, nature of service and applicable law. The cancellation/refund policy displayed at the time of booking shall govern where applicable.
              </p>
            </div>

            <div className="policy-section">
              <h2>2.7 Professional Responsibility</h2>
              <ul>
                <li>Providing accurate information</li>
                <li>Maintaining applicable qualifications and licences</li>
                <li>Delivering services professionally</li>
                <li>Following applicable laws</li>
                <li>Maintaining safety standards</li>
                <li>Protecting customer information</li>
                <li>Providing appropriate invoices/receipts where applicable</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>2.8 Healthcare Services</h2>
              <p>
                Zonomo acts primarily as a platform facilitating access to professionals. Professionals are solely responsible for clinical decisions, diagnosis, treatment, medication recommendations, patient care, professional conduct and maintaining required qualifications/licences. Nothing on Zonomo should be interpreted as a substitute for emergency medical care.
              </p>
            </div>

            <div className="policy-section">
              <h2>2.9 Reviews and Ratings</h2>
              <p>
                Reviews must be truthful, relate to an actual experience, and not contain unlawful, threatening, discriminatory, abusive or unnecessarily private information. Zonomo may remove reviews violating these requirements.
              </p>
            </div>

            <div className="policy-section">
              <h2>2.10 Prohibited Conduct</h2>
              <ul>
                <li>Harassing or threatening professionals or customers</li>
                <li>Submitting false information</li>
                <li>Creating fraudulent accounts</li>
                <li>Manipulating reviews</li>
                <li>Circumventing payments</li>
                <li>Stealing or misusing another person's information</li>
                <li>Using the platform for unlawful activities</li>
                <li>Attempting unauthorised access</li>
                <li>Misrepresenting professional qualifications</li>
                <li>Engaging in discrimination or sexual harassment</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>2.11 Suspension and Termination</h2>
              <p>
                Zonomo may suspend, restrict or terminate an account where it reasonably believes the user violated these Terms, fraud occurred, safety is at risk, false information was provided, the platform was misused or applicable law requires action.
              </p>
            </div>

            <div className="policy-section">
              <h2>2.12 Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, Zonomo shall not be responsible for independent acts or omissions of professionals beyond the scope of services expressly undertaken by Zonomo. Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited.
              </p>
            </div>

            <div className="policy-section">
              <h2>2.13 Dispute Resolution</h2>
              <p>
                Users are encouraged to first contact Zonomo customer support. Where a dispute cannot be resolved through support, parties may pursue remedies available under applicable Indian law. Nothing in these Terms is intended to unlawfully restrict statutory consumer rights.
              </p>
            </div>

            <div className="policy-section">
              <h2>2.14 Governing Law</h2>
              <p>
                These Terms shall be governed by the laws of India. Subject to applicable consumer and statutory jurisdiction, courts having appropriate jurisdiction over Zonomo's registered office shall have jurisdiction.
              </p>
            </div>
            
            <div className="policy-section">
              <h2>9. Customer Responsibilities</h2>
              <ul>
                <li>Provide accurate booking information</li>
                <li>Maintain a reasonably safe environment</li>
                <li>Treat professionals respectfully</li>
                <li>Pay agreed charges</li>
                <li>Avoid harassment</li>
                <li>Avoid requesting unlawful services</li>
                <li>Avoid pressuring professionals to perform unsafe work</li>
                <li>Respect professional boundaries</li>
              </ul>
            </div>
            
            <div className="policy-section">
              <h2>10. Zonomo's Marketplace Position</h2>
              <p>
                Zonomo is a technology-enabled marketplace that connects customers with independent service professionals. Unless expressly stated otherwise, Zonomo does not directly employ or provide the underlying professional service. Professionals remain independently responsible for the services they provide, their qualifications, licences, conduct and compliance with applicable laws.
              </p>
            </div>
            
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
