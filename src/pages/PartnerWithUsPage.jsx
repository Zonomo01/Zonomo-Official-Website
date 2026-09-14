import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './PoliciesPage.css';

const PartnerWithUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page-wrapper">
      <Navigation />
      
      <div className="policy-hero">
        <h1>Partner With Us</h1>
        <p className="policy-meta">Join the Zonomo Professional Network</p>
      </div>

      <div className="policy-container">
        <div className="policy-card">
          <div className="policy-content">
            <p className="policy-intro">
              Zonomo enables independent professionals and service businesses to connect with customers seeking reliable services.
            </p>

            <div className="policy-section">
              <h2>4.1 Benefits</h2>
              <ul>
                <li>Create a professional profile</li>
                <li>Showcase skills</li>
                <li>Receive service requests</li>
                <li>Manage availability</li>
                <li>Connect with customers</li>
                <li>Receive ratings</li>
                <li>Build professional reputation</li>
                <li>Grow customer base</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>4.2 Who Can Partner With Zonomo?</h2>
              <ul>
                <li>Plumbers</li>
                <li>Electricians</li>
                <li>AC technicians</li>
                <li>Cleaners</li>
                <li>Carpenters</li>
                <li>Painters</li>
                <li>Appliance technicians</li>
                <li>Beauty professionals</li>
                <li>Fitness trainers</li>
                <li>Yoga instructors</li>
                <li>Pet-care professionals</li>
                <li>Caregivers</li>
                <li>Nurses</li>
                <li>Physiotherapists</li>
                <li>Other qualified service professionals</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>4.3 Professional Onboarding</h2>
              <p>
                Applicants may be required to submit identity proof, address proof, photograph, qualification certificates, professional licences, experience information, references, bank/payment details and other category-specific documentation. Zonomo reserves the right to reject an application without creating an obligation to onboard an applicant.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PartnerWithUsPage;
