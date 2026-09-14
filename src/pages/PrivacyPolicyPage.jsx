import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './PoliciesPage.css';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page-wrapper">
      <Navigation />
      
      <div className="policy-hero">
        <h1>Privacy Policy</h1>
        <p className="policy-meta">Effective as of September 2026</p>
      </div>

      <div className="policy-container">
        <div className="policy-card">
          <div className="policy-content">
            <p className="policy-intro">
              Zonomo Technologies Private Limited ("Zonomo", "Company", "we", "us", or "our") operates a technology-enabled marketplace that connects customers with independent service professionals. This Privacy Policy explains how Zonomo collects, uses, stores, processes, shares and protects personal information when you use our website, application, platform or services.
            </p>

            <div className="policy-section">
              <h2>1.1 Information We Collect</h2>
              
              <h3>Customer Information</h3>
              <ul>
                <li>Name</li>
                <li>Mobile number</li>
                <li>Email address</li>
                <li>Account/login information</li>
                <li>Service address</li>
                <li>Location information where necessary for providing a service</li>
                <li>Booking history</li>
                <li>Service preferences</li>
                <li>Payment and transaction information</li>
                <li>Ratings and reviews</li>
                <li>Communications with Zonomo or professionals</li>
                <li>Customer support records</li>
              </ul>

              <h3>Professional Information</h3>
              <ul>
                <li>Name, photograph, mobile number and email address</li>
                <li>Address and verification information</li>
                <li>Professional qualifications, licences/certifications and work experience</li>
                <li>Service categories, service area and availability</li>
                <li>Bank/payment information</li>
                <li>Ratings and reviews</li>
                <li>Background-verification information where applicable</li>
              </ul>

              <h3>Healthcare Information</h3>
              <p>
                For healthcare-related services, customers may voluntarily provide information necessary for arranging or delivering the requested service, including medical or care requirements, patient information and care instructions. Zonomo will seek to limit collection of such information to what is reasonably necessary for the requested service. Zonomo does not provide medical diagnosis or treatment merely by operating its marketplace. Healthcare professionals remain responsible for professional medical decisions, advice and treatment within the scope of their qualifications and applicable law.
              </p>
            </div>

            <div className="policy-section">
              <h2>1.2 How We Use Information</h2>
              <ul>
                <li>Create and maintain accounts</li>
                <li>Process service requests and bookings</li>
                <li>Match customers with professionals</li>
                <li>Facilitate communication</li>
                <li>Verify professionals</li>
                <li>Process payments</li>
                <li>Provide customer support and handle complaints</li>
                <li>Improve platform functionality</li>
                <li>Prevent fraud, misuse and unsafe activity</li>
                <li>Maintain platform security</li>
                <li>Send service-related communications</li>
                <li>Send permitted marketing communications</li>
                <li>Analyse platform performance</li>
                <li>Comply with legal and regulatory obligations</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>1.3 AI and Automated Matching</h2>
              <p>
                Zonomo may use automated systems or AI-assisted tools to help match customers with professionals, recommend services, improve scheduling, detect suspicious activity and improve customer experience. Automated recommendations do not constitute a guarantee that a professional is suitable for a particular service.
              </p>
            </div>

            <div className="policy-section">
              <h2>1.4 Sharing of Information</h2>
              <p>
                Information may be shared with relevant service professionals, customers where necessary to facilitate a booking, payment processors, technology/cloud providers, verification providers, customer support providers, analytics/security providers, government authorities where legally required, and professional advisers where necessary. Zonomo will not sell personal information as a commercial product.
              </p>
            </div>

            <div className="policy-section">
              <h2>1.5 Data Security</h2>
              <p>
                Zonomo uses reasonable technical and organisational measures designed to protect personal information from unauthorised access, loss, misuse, alteration, disclosure or destruction. No internet-based system can be guaranteed to be completely secure.
              </p>
            </div>

            <div className="policy-section">
              <h2>1.6 Data Retention</h2>
              <p>
                Zonomo retains personal information only for as long as reasonably necessary for providing services, maintaining accounts, resolving disputes, preventing fraud, meeting contractual obligations and meeting legal, tax, accounting and regulatory requirements.
              </p>
            </div>

            <div className="policy-section">
              <h2>1.7 Your Rights</h2>
              <p>
                Subject to applicable law, users may have rights concerning their personal data, including rights relating to access, correction, updating information, withdrawal of consent where applicable, deletion/erasure where applicable and grievance redressal.
              </p>
            </div>

            <div className="policy-section">
              <h2>1.8 Children's Privacy</h2>
              <p>
                Zonomo is not intended to be independently used by children where applicable law requires parental or guardian involvement. Where services concern minors, booking and information-sharing should be undertaken by a parent or lawful guardian where required.
              </p>
            </div>

            <div className="policy-section">
              <h2>1.9 Cookies</h2>
              <p>
                Zonomo may use cookies and similar technologies for authentication, security, preferences, analytics, platform functionality, performance and permitted marketing. Users may manage cookie preferences through available browser or platform settings.
              </p>
            </div>

            <div className="policy-section">
              <h2>1.10 Policy Changes</h2>
              <p>
                Zonomo may update this Privacy Policy periodically. Material changes may be communicated through the platform or other appropriate means.
              </p>
            </div>

            <div className="policy-section">
              <h2>1.11 Contact</h2>
              <p>
                Zonomo Technologies Private Limited Privacy<br />
                Email: privacy@zonomo.in<br />
                Address: [Registered Office Address]
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
