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
        <p className="policy-meta">Zonomo Technologies Private Limited · Version 2.0</p>
      </div>

      <div className="policy-container">
        <div className="policy-card">
          <div className="policy-content">
            <p className="policy-intro">
              Zonomo Technologies Private Limited ("Zonomo", "we", "us", "our") operates a technology-enabled marketplace through which customers can discover, compare, communicate with and request services from independent professionals. This Privacy Policy explains how Zonomo collects, uses, stores, shares, protects and deletes personal data in connection with its website, mobile applications, customer services, professional portal and related systems.
            </p>

            <div className="policy-section">
              <h2>1.2 Information Collected</h2>
              <ul>
                <li>
                  <strong>Customer account:</strong> name, mobile, email, authentication information, profile photograph and preferences.
                </li>
                <li>
                  <strong>Service/booking:</strong> requested service, category, address, appointment date/time, instructions, history, cancellations and transaction references.
                </li>
                <li>
                  <strong>Professional:</strong> identity/contact information, photograph, service categories, area, availability, qualifications, licences, certifications, experience and verification results.
                </li>
                <li>
                  <strong>Location:</strong> approximate or precise location only where reasonably necessary for discovery, matching, navigation or service delivery.
                </li>
                <li>
                  <strong>Payment:</strong> transaction reference, amount, status and payment method; full card credentials may be handled by payment processors.
                </li>
                <li>
                  <strong>Device:</strong> device type, operating system, app version, IP address, crash/diagnostic/security information and permitted identifiers.
                </li>
                <li>
                  <strong>Camera/photos:</strong> where a feature requires a profile image, verification document, service evidence or other user-initiated image.
                </li>
                <li>
                  <strong>Microphone/voice:</strong> only where a voice-enabled feature is actively used and permission is granted.
                </li>
                <li>
                  <strong>Healthcare/care:</strong> information voluntarily supplied for nursing, physiotherapy, elderly care, post-hospitalisation care or other health/care services, limited to what is reasonably necessary.
                </li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>1.3 Why Zonomo Uses Data</h2>
              <ul>
                <li>Account creation, authentication and security.</li>
                <li>Finding and matching customers with relevant professionals.</li>
                <li>Facilitating bookings, scheduling and service delivery.</li>
                <li>Sharing only booking information reasonably necessary with the selected professional.</li>
                <li>Processing payments and maintaining transaction records.</li>
                <li>Professional verification and quality/safety controls.</li>
                <li>Customer support, complaints, refunds and dispute handling.</li>
                <li>Fraud, abuse, spam and security prevention.</li>
                <li>Platform analytics, reliability, diagnostics and improvement.</li>
                <li>Service notifications, appointment reminders and security alerts.</li>
                <li>Marketing communications where legally permitted and appropriately consented to.</li>
                <li>Compliance with applicable laws, regulations, court orders and lawful requests.</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>1.4 AI and Automated Matching</h2>
              <p>
                Zonomo may use rules-based and AI-assisted systems to match service requests with professionals based on service category, location, availability, preferences, ratings, experience and other permitted factors. Automated recommendations are assistance tools and do not guarantee competence, suitability, future conduct, medical outcome or service quality.
              </p>
              <p>
                For healthcare-related services, automated matching must not be presented as medical diagnosis or clinical decision-making. Clinical decisions remain the responsibility of appropriately qualified healthcare professionals.
              </p>
            </div>

            <div className="policy-section">
              <h2>1.5 Sharing</h2>
              <p>
                When a customer requests a service, Zonomo may provide the selected professional with information reasonably necessary to fulfil that booking, such as name, service location, appointment information and relevant instructions. Sensitive information should be minimised.
              </p>
              <p>
                Zonomo may use third-party providers for payment processing, cloud hosting, authentication, communications, maps/location, analytics, crash reporting, customer support, identity verification, background verification and security. Access should be limited to legitimate purposes and protected by appropriate contractual and technical controls.
              </p>
            </div>

            <div className="policy-section">
              <h2>1.6 Health and Medical Data</h2>
              <ul>
                <li>No sale of health profiles as a standalone commercial product.</li>
                <li>No unrelated health-data advertising or marketing.</li>
                <li>No unnecessary disclosure of patient information.</li>
                <li>Role-based access to sensitive information.</li>
                <li>Healthcare professionals remain responsible for clinical decisions and professional obligations.</li>
                <li>Emergency medical care should be sought from appropriate emergency services.</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>1.7 Permissions</h2>
              <p>
                The app should give a clear, feature-specific explanation before requesting location, camera, microphone, photographs or other sensitive permissions. Users may refuse or revoke permissions, although some functionality may then be unavailable.
              </p>
            </div>

            <div className="policy-section">
              <h2>1.8 Security</h2>
              <ul>
                <li>HTTPS/TLS for network communications.</li>
                <li>Encryption of sensitive data at rest where appropriate.</li>
                <li>Role-based access control.</li>
                <li>Strong authentication and secure token handling.</li>
                <li>Restricted access to identity, qualification and health documents.</li>
                <li>Security logging and monitoring.</li>
                <li>Secure backup and recovery procedures.</li>
                <li>Incident-response and breach-management procedures.</li>
                <li>No private API keys or credentials exposed in client applications.</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>1.9 Retention</h2>
              <p>
                Zonomo retains information only as reasonably necessary for service delivery, security, fraud prevention, accounting, tax, dispute resolution and legal/regulatory obligations. Lawful retention exceptions should be documented and disclosed where required.
              </p>
            </div>

            <div className="policy-section">
              <h2>1.10 Account and Data Deletion</h2>
              <p>
                Users can initiate account deletion through a readily discoverable in-app path such as Profile → Delete Account. Zonomo also maintains a public web deletion page at{' '}
                <a href="/delete-account">zonomo.in/delete-account</a>.
              </p>
              <p>
                Deletion should be real deletion, not merely freezing or deactivating the account. Personal data should be deleted or anonymised unless retention is necessary for security, fraud prevention, legal compliance, accounting, dispute resolution or another lawful exception. The public policy should explain retained categories and reasons.
              </p>
            </div>

            <div className="policy-section">
              <h2>1.11 Children and Minors</h2>
              <p>
                Zonomo should not knowingly permit independent child account creation where prohibited by law. Services involving minors should be arranged or managed by a parent, guardian or authorised adult where required.
              </p>
            </div>

            <div className="policy-section">
              <h2>1.12 Reviews, Chat and User Content</h2>
              <p>
                Zonomo may allow reviews, ratings, photographs, messages and other user-generated content. Such content is subject to moderation, reporting and safety rules. The app should provide reporting and, where applicable, blocking mechanisms.
              </p>
            </div>

            <div className="policy-section">
              <h2>1.13 Rights and Contact</h2>
              <p>
                Subject to applicable law, users may exercise available rights relating to correction, updating, deletion/erasure, consent withdrawal and grievance redressal.
              </p>
              <p>
                <strong>Privacy / Grievance Officer:</strong> Shantanu Sharma<br />
                <strong>Designation:</strong> Founder &amp; Chief Executive Officer / Grievance Officer<br />
                <strong>Email:</strong> grievance@zonomo.in<br />
                <strong>Phone:</strong> 9217554080
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
