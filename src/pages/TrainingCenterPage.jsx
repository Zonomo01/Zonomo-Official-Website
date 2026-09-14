import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './PoliciesPage.css';

const TrainingCenterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page-wrapper">
      <Navigation />
      
      <div className="policy-hero">
        <h1>Training Centre</h1>
        <p className="policy-meta">Empowering our professionals</p>
      </div>

      <div className="policy-container">
        <div className="policy-card">
          <div className="policy-content">
            <p className="policy-intro">
              Zonomo's Training Centre is intended to help professionals improve technical, customer-service and safety capabilities.
            </p>

            <div className="policy-section">
              <h2>Technical Skills</h2>
              <ul>
                <li>Service-specific best practices</li>
                <li>Equipment handling</li>
                <li>Troubleshooting</li>
                <li>Hygiene</li>
                <li>Workplace safety</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>Customer Experience</h2>
              <ul>
                <li>Communication</li>
                <li>Professional etiquette</li>
                <li>Time management</li>
                <li>Customer expectations</li>
                <li>Complaint handling</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>Safety</h2>
              <ul>
                <li>Workplace safety</li>
                <li>Personal protective equipment</li>
                <li>Electrical safety</li>
                <li>Chemical handling</li>
                <li>Infection-control principles where applicable</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>Digital Skills</h2>
              <ul>
                <li>Managing bookings</li>
                <li>Using the Zonomo platform</li>
                <li>Updating availability</li>
                <li>Accepting service requests</li>
                <li>Managing customer communication</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TrainingCenterPage;
