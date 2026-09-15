import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HowItWorks.css';

import mockup1 from '../assets/images/1-portrait.png';
import mockup2 from '../assets/images/2-portrait.png';
import mockup3 from '../assets/images/3-portrait.png';

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
        
        {/* Step 1 */}
        <div className="hiw-step" ref={el => stepsRef.current[0] = el}>
          <div className="mockup-container">
            <img src={mockup1} alt="Pick from trusted services" className="mockup-image" />
          </div>
          <div className="hiw-text">
            <h4>STEP 1</h4>
            <h3>Pick from 12 trusted services</h3>
            <p>Browse 12 services in the Zonomo app - from home repairs to wellness treatments.</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="hiw-step" ref={el => stepsRef.current[1] = el}>
          <div className="mockup-container">
            <img src={mockup2} alt="Select your professional" className="mockup-image" />
          </div>
          <div className="hiw-text">
            <h4>STEP 2</h4>
            <h3>Select your professional</h3>
            <p>Compare ratings, reviews, and transparent pricing in Rupees. Book the perfect Pro for your needs.</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="hiw-step" ref={el => stepsRef.current[2] = el}>
          <div className="mockup-container">
            <img src={mockup3} alt="Schedule and relax" className="mockup-image" />
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
