import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { servicesData } from '../data/servicesData';
import './ServiceDetailsPage.css';

const ServiceDetailsPage = () => {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="service-details-page">
        <Navigation />
        <main className="service-not-found">
          <h1>Service not found</h1>
          <Link to="/">Return to Home</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="service-details-page">
      <Navigation />
      
      <main className="service-main">
        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <Link to="/">Home</Link> / <Link to="/#services">Services</Link> / <span>{service.title}</span>
        </div>

        {/* Hero Section */}
        <section className="service-hero">
          <div className="service-hero-content">
            <h1 className="service-title-large">{service.title}</h1>
            <p className="service-description">{service.description}</p>
            
            <div className="service-actions">
              <div className="app-buttons">
                {/* Fallback styling for App Store buttons since we don't have images */}
                <button className="store-btn play-store">
                  <div className="store-btn-icon">▶</div>
                  <div className="store-btn-text">
                    <span>GET IT ON</span>
                    <strong>Google Play</strong>
                  </div>
                </button>
                <button className="store-btn app-store">
                  <div className="store-btn-icon"></div>
                  <div className="store-btn-text">
                    <span>Download on the</span>
                    <strong>App Store</strong>
                  </div>
                </button>
              </div>
              <Link to="/#services" className="all-services-btn">All 12 Zonomo services</Link>
            </div>
          </div>
          
          <div className="service-hero-image-wrapper">
            <img src={service.img} alt={service.title} className="service-hero-image" />
          </div>
        </section>

        {/* Details Section */}
        <section className="service-details-content">
          <div className="details-column included">
            <h2 className="details-heading">
              <span className="icon-check">✔</span> What's included
            </h2>
            <ul className="details-list">
              {service.included.map((item, index) => (
                <li key={index}>
                  <span className="list-dot check-dot"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="details-column not-included">
            <h2 className="details-heading">
              <span className="icon-cross">✖</span> Not included
            </h2>
            <ul className="details-list">
              {service.notIncluded.map((item, index) => (
                <li key={index}>
                  <span className="list-dot cross-dot"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetailsPage;
