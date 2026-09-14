import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './FoundersPage.css';

import shantanuImg from '../assets/images/shantunu.jpeg';
import sparshImg from '../assets/images/Sprash.jpeg';

const FoundersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main className="founders-page">
        <div className="founders-header">
          <h1 className="founders-title">MEET THE FOUNDERS</h1>
          <p className="founders-subtitle">The visionaries behind ZONOMO.</p>
        </div>
        
        <div className="founders-grid">
          <div className="founder-card">
            <div className="founder-image-wrapper">
              <img 
                src={shantanuImg} 
                alt="Shantanu Sharma" 
                className="founder-img" 
              />
            </div>
            <div className="founder-info">
              <h2 className="founder-name">SHANTANU SHARMA</h2>
              <h3 className="founder-role">CO-FOUNDER & CEO</h3>
              <p className="founder-bio">
                Shantanu brings deep expertise and vision to Zonomo. He started the company with a simple mission: to organize the highly fragmented home and healthcare services market in India and deliver unparalleled quality, reliability, and trust to everyday consumers through a tech-driven platform.
              </p>
            </div>
          </div>
          
          <div className="founder-card">
            <div className="founder-image-wrapper">
              <img 
                src={sparshImg} 
                alt="Sparsh Saria" 
                className="founder-img" 
              />
            </div>
            <div className="founder-info">
              <h2 className="founder-name">SPARSH SARIA</h2>
              <h3 className="founder-role">CO-FOUNDER & COO</h3>
              <p className="founder-bio">
                With a robust background in operations and logistics at scale, Sparsh is the architect behind Zonomo's lightning-fast service delivery and stringent professional verification processes. He ensures that every service booked is executed flawlessly and meets the highest standards.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FoundersPage;
