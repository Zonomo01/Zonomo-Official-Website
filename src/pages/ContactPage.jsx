import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FaPhoneAlt, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';
import './ContactPage.css';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main className="contact-page">
        <div className="contact-header">
          <h1 className="contact-title">CONTACT US</h1>
          <p className="contact-subtitle">Get in touch with the ZONOMO team.</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-card">
            <h2>Point of Contact</h2>
            <p className="contact-description">
              Have questions or want to partner with us? Reach out directly.
            </p>
            
            <div className="contact-details-list">
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <FaPhoneAlt />
                </div>
                <div className="contact-info">
                  <h3>Phone</h3>
                  <a href="tel:+919217554080">+91 9217554080</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <FaEnvelope />
                </div>
                <div className="contact-info">
                  <h3>Email</h3>
                  <a href="mailto:2shantanusharma@gmail.com">2shantanusharma@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <FaLinkedinIn />
                </div>
                <div className="contact-info">
                  <h3>LinkedIn</h3>
                  <a href="https://www.linkedin.com/company/zonomo/" target="_blank" rel="noopener noreferrer">
                    Zonomo on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
