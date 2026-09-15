import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HowItWorks.css';

import iconRepair from '../assets/images/icon_repair.jpg';
import iconElectrician from '../assets/images/icon_electrician.jpg';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stepsRef.current.forEach((step, index) => {
        if (step) {
          gsap.fromTo(
            step,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: index * 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
              }
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="how-it-works-section" id="how-it-works" ref={sectionRef}>
      <div className="hiw-header">
        <span className="hiw-eyebrow">HOW IT WORKS</span>
        <h2 className="hiw-title">Simple steps to a<br/>seamless experience.</h2>
        <p className="hiw-desc">Follow these simple steps to get expert help in minutes.</p>
      </div>

      <div className="hiw-grid">
        
        {/* Step 1: Pick from 12 trusted services */}
        <div className="hiw-step" ref={el => stepsRef.current[0] = el}>
          <div className="mockup-container">
            <div className="phone-mockup">
              <div className="phone-notch"></div>
              <div className="phone-screen app-home">
                <header className="app-header">
                  <div className="app-logo-area">
                    <div className="avatar-small"></div>
                    <span className="app-logo-text">ZONOMO</span>
                  </div>
                  <span className="icon-bell">🔔</span>
                </header>
                <div className="app-greeting">
                  <h2>Hello, Arjun</h2>
                  <p>Find the best local services today.</p>
                </div>
                <div className="app-search">
                  <span>🔍 Search for 'Plumbing', 'Cleaning'...</span>
                </div>
                <div className="app-section">
                  <div className="app-section-header">
                    <h3>Explore Categories</h3>
                    <span>See all</span>
                  </div>
                  <div className="app-categories">
                    <div className="app-category-card">
                      <div className="app-cat-icon">🛠</div>
                      <strong>Home Repair</strong>
                      <small>• Plumbing<br/>• Electrical</small>
                    </div>
                    <div className="app-category-card">
                      <div className="app-cat-icon">⚕️</div>
                      <strong>Healthcare</strong>
                      <small>• Physiotherapy<br/>• Doctor</small>
                    </div>
                    <div className="app-category-card">
                      <div className="app-cat-icon">✨</div>
                      <strong>Cleaning</strong>
                      <small>• Home<br/>• Bathroom</small>
                    </div>
                    <div className="app-category-card">
                      <div className="app-cat-icon">📦</div>
                      <strong>Moving</strong>
                      <small>• Packers<br/>• Movers</small>
                    </div>
                  </div>
                </div>
                <div className="app-section">
                  <div className="app-section-header">
                    <h3>Nearby Top Rated</h3>
                    <span>📍 Downtown</span>
                  </div>
                  <div className="app-nearby-card">
                    <img src={iconRepair} alt="Elite Home Fixers" className="nearby-img" />
                    <div className="app-nearby-info">
                      <strong>Elite Home Fixers</strong>
                      <span>Home Repair • 1.2 km</span>
                      <button className="btn-small-solid">Book Now</button>
                    </div>
                  </div>
                </div>
                <div className="app-bottom-nav">
                  <div className="nav-item active">🏠</div>
                  <div className="nav-item">📋</div>
                  <div className="nav-item">💬</div>
                  <div className="nav-item">👤</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hiw-text">
            <h4>STEP 1</h4>
            <h3>Pick from 12 trusted services</h3>
            <p>Browse 12 services in the Zonomo app - from home repairs to wellness treatments.</p>
          </div>
        </div>

        {/* Step 2: Add it to your cart */}
        <div className="hiw-step" ref={el => stepsRef.current[1] = el}>
          <div className="mockup-container">
            <div className="phone-mockup">
              <div className="phone-notch"></div>
              <div className="phone-screen app-list">
                <header className="app-header-back">
                  <span className="back-arrow">←</span>
                  <h3>Plumbing</h3>
                  <div className="avatar-small"></div>
                </header>
                <div className="app-filters">
                  <button className="filter-btn active">Plumbing</button>
                  <button className="filter-btn">Top Rated</button>
                  <button className="filter-btn">Price ⌄</button>
                </div>
                <div className="app-list-header">
                  <span>24 Plumbers available</span>
                  <span>⚙️ Filters</span>
                </div>
                
                <div className="provider-card">
                  <div className="provider-top">
                    <div className="provider-avatar avatar-1">R</div>
                    <div className="provider-details">
                      <h4>Rahul Sharma <span className="verified">✔</span></h4>
                      <div className="provider-rating">★ 4.8 <small>(120 reviews)</small></div>
                      <div className="provider-loc">📍 2.5 km away • <strong>Starts at ₹150/hr</strong></div>
                    </div>
                  </div>
                  <div className="provider-actions">
                    <button className="btn-outline">View Profile</button>
                    <button className="btn-solid">Book Now</button>
                  </div>
                </div>

                <div className="provider-card">
                  <div className="provider-top">
                    <div className="provider-avatar avatar-2">P</div>
                    <div className="provider-details">
                      <h4>Priya Patel <span className="verified">✔</span></h4>
                      <div className="provider-rating">★ 4.9 <small>(84 reviews)</small></div>
                      <div className="provider-loc">📍 1.8 km away • <strong>Starts at ₹120/hr</strong></div>
                    </div>
                  </div>
                  <div className="provider-actions">
                    <button className="btn-outline">View Profile</button>
                    <button className="btn-solid">Book Now</button>
                  </div>
                </div>

                <div className="provider-card">
                  <div className="provider-top">
                    <div className="provider-avatar avatar-3">A</div>
                    <div className="provider-details">
                      <h4>Amit Singh <span className="verified">✔</span></h4>
                      <div className="provider-rating">★ 4.7 <small>(210 reviews)</small></div>
                      <div className="provider-loc">📍 3.2 km away • <strong>Starts at ₹100/hr</strong></div>
                    </div>
                  </div>
                  <div className="provider-actions">
                    <button className="btn-outline">View Profile</button>
                    <button className="btn-solid">Book Now</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="hiw-text">
            <h4>STEP 2</h4>
            <h3>Select your professional</h3>
            <p>Compare ratings, reviews, and transparent pricing in Rupees. Book the perfect Pro for your needs.</p>
          </div>
        </div>

        {/* Step 3: Choose instant, scheduled, or recurring. Pay & done! */}
        <div className="hiw-step" ref={el => stepsRef.current[2] = el}>
          <div className="mockup-container">
            <div className="phone-mockup">
              <div className="phone-notch"></div>
              <div className="phone-screen app-booking">
                <header className="app-header-back">
                  <span className="back-arrow">←</span>
                  <h3>Booking Confirmed</h3>
                  <div className="avatar-small"></div>
                </header>
                
                <div className="booking-success">
                  <div className="success-icon">✔</div>
                  <span className="ref-number">REFERENCE: ZON-84920</span>
                  <h2>Booking Confirmed!</h2>
                  <p>Your service slot has been successfully scheduled & securely reserved.</p>
                </div>

                <div className="booking-card">
                  <div className="booking-row">
                    <span className="icon">📅</span>
                    <div>
                      <small>Scheduled Date</small>
                      <strong>Thursday, October 26</strong>
                    </div>
                  </div>
                  <div className="booking-row">
                    <span className="icon">🕒</span>
                    <div>
                      <small>Arrival Time Window</small>
                      <strong>02:00 PM – 04:00 PM</strong>
                    </div>
                  </div>
                </div>

                <div className="booking-card">
                  <small className="card-label">SERVICE DETAILS</small>
                  <div className="service-info">
                    <div className="service-img-mini">
                      <img src={iconElectrician} alt="Plumbing" />
                    </div>
                    <div>
                      <strong>Plumbing Leak Repair</strong>
                      <small>Est. Duration: 60 mins</small>
                    </div>
                  </div>
                  <div className="booking-row location">
                    <span className="icon">📍</span>
                    <small>1234 Maple Street, New Delhi</small>
                  </div>
                </div>

                <div className="booking-card">
                  <small className="card-label">PAYMENT SUMMARY</small>
                  <div className="payment-row">
                    <span>Diagnostic & Labor</span>
                    <span>₹130.00</span>
                  </div>
                  <div className="payment-row">
                    <span>Platform Fee</span>
                    <span>₹20.00</span>
                  </div>
                  <div className="payment-divider"></div>
                  <div className="payment-row total">
                    <span>Total Reserved</span>
                    <strong>₹150.00</strong>
                  </div>
                </div>

                <div className="booking-btn-wrap">
                  <button className="btn-solid btn-large">View My Bookings</button>
                </div>
              </div>
            </div>
          </div>
          <div className="hiw-text">
            <h4>STEP 3</h4>
            <h3>Schedule & relax</h3>
            <p>Get a Pro in minutes, book for later, or set up a recurring slot. Fast, secure, and done!</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
