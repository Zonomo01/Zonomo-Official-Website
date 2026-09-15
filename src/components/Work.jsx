import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { servicesData as services } from '../data/servicesData';
import './Work.css';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(
            item,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 90%",
              }
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleServiceClick = (service) => {
    navigate(`/service/${service.slug}`);
  };

  return (
    <section className="services-section" id="services" ref={containerRef}>
      <div className="services-header">
        <span className="services-eyebrow">OUR SERVICES</span>
        <h2 className="services-title">Book trusted house<br/>help.</h2>
        <p className="services-desc">
          From hourly bookings to express cleans to daily upkeep, Zonomo's got you<br/>
          covered. Verified professionals, transparent pricing.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            className="service-card" 
            key={service.id}
            ref={(el) => (itemsRef.current[index] = el)}
            onClick={() => handleServiceClick(service)}
          >
            <div className="service-card-image-wrapper">
              <img src={service.img} alt={service.title} className="service-card-image" />
            </div>
            <div className="service-card-footer">
              <h3 className="service-card-title">{service.title}</h3>
              <div className="service-card-arrow">➔</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
