import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './PoliciesPage.css';

const DeleteAccountPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page-wrapper">
      <Navigation />

      <div className="policy-hero">
        <h1>Delete Your Zonomo Account</h1>
        <p className="policy-meta">Zonomo Technologies Private Limited · Account &amp; data deletion</p>
      </div>

      <div className="policy-container">
        <div className="policy-card">
          <div className="policy-content">
            <p className="policy-intro">
              This page explains how to delete your <strong>Zonomo</strong> account and what happens to your data. Zonomo is operated by Zonomo Technologies Private Limited (the developer shown on the Google Play Store listing for the Zonomo app).
            </p>

            <div className="policy-section">
              <h2>How to delete your account</h2>
              <p>
                You can delete your account in either of the following ways. Deletion is permanent and cannot be undone.
              </p>

              <h3>Option 1 — In the Zonomo app (fastest)</h3>
              <ol>
                <li>Open the <strong>Zonomo</strong> app and sign in.</li>
                <li>Go to <strong>Profile</strong>.</li>
                <li>Tap <strong>Delete Account</strong>.</li>
                <li>Confirm deletion when prompted.</li>
              </ol>
              <p>
                Before deletion can complete, cancel or finish any upcoming or in-progress bookings. If you are a provider with an active subscription, billing through Google Play or the Apple App Store should be cancelled in the store’s subscription settings as well.
              </p>

              <h3>Option 2 — Request by email</h3>
              <ol>
                <li>
                  Email us from the <strong>email address or phone number linked to your Zonomo account</strong>.
                </li>
                <li>
                  Send your request to{' '}
                  <a href="mailto:grievance@zonomo.in?subject=Zonomo%20Account%20Deletion%20Request">
                    grievance@zonomo.in
                  </a>
                  {' '}(or{' '}
                  <a href="mailto:support@zonomo.com?subject=Zonomo%20Account%20Deletion%20Request">
                    support@zonomo.com
                  </a>
                  ).
                </li>
                <li>
                  Use the subject line <strong>“Zonomo Account Deletion Request”</strong> and include your full name, registered phone number, and whether you are a customer or a service professional.
                </li>
                <li>
                  We will verify that the request comes from the account holder and process deletion. You should receive confirmation once it is complete.
                </li>
              </ol>
            </div>

            <div className="policy-section">
              <h2>Data that is deleted</h2>
              <p>
                When your account is deleted, we remove or anonymise the following personal data associated with your account:
              </p>
              <ul>
                <li>Name, phone number, email address, date of birth and gender</li>
                <li>Profile photograph</li>
                <li>Saved service addresses and account preferences</li>
                <li>Authentication / login identifiers (including linked Google sign-in where applicable)</li>
                <li>
                  For service professionals: business profile details and uploaded government ID and professional licence documents (including copies stored for verification)
                </li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>Data that may be kept</h2>
              <p>
                Some information may be retained after account deletion where necessary for the reasons below. Retained records are limited to what is reasonably required and are not used to restore your account.
              </p>
              <ul>
                <li>
                  <strong>Booking history shown to the other party:</strong> past bookings may remain in the other party’s history with your personal details removed or anonymised.
                </li>
                <li>
                  <strong>Chat messages:</strong> messages you already sent may remain visible to the person you sent them to.
                </li>
                <li>
                  <strong>Legal, tax and accounting records:</strong> transaction or subscription references we must keep under applicable law.
                </li>
                <li>
                  <strong>Fraud prevention, security and disputes:</strong> limited records needed to investigate abuse, defend legal claims or comply with lawful requests.
                </li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>Retention period</h2>
              <ul>
                <li>
                  Personal profile data listed under “Data that is deleted” is removed or anonymised when deletion is processed (typically within a short period after a verified request; in-app deletion is immediate once confirmed).
                </li>
                <li>
                  Records kept for legal, tax, accounting, fraud-prevention or dispute reasons are retained only as long as reasonably necessary for that purpose (generally up to the period required by applicable Indian law, and then deleted or anonymised).
                </li>
                <li>
                  Backups containing residual copies are purged on our normal backup rotation schedule and are not used for active processing after deletion.
                </li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>Contact</h2>
              <p>
                <strong>App / developer:</strong> Zonomo · Zonomo Technologies Private Limited<br />
                <strong>Privacy / Grievance Officer:</strong> Shantanu Sharma<br />
                <strong>Email:</strong>{' '}
                <a href="mailto:grievance@zonomo.in">grievance@zonomo.in</a>
                <br />
                <strong>Phone:</strong> <a href="tel:+919217554080">+91 9217554080</a>
              </p>
              <p>
                For more detail, see our{' '}
                <a href="/privacy-policy">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DeleteAccountPage;
