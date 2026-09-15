
import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaXTwitter, FaFacebookF } from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <h2 className="footer-logo">ZONOMO</h2>
      </div>

      <div className="footer-columns">
        <div className="footer-col">
          <h4 className="footer-col-title">ZONOMO</h4>
          <a href="#" className="footer-link">About Us</a>
          <a href="#" className="footer-link">Careers</a>
          <a href="#" className="footer-link">Blog</a>
          <Link to="/contact" className="footer-link">Contact Us</Link>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">For Customers</h4>
          <a href="/#work" className="footer-link">Book a Service</a>
          <a href="#" className="footer-link">ZONOMO Safety</a>
          <a href="#" className="footer-link">Customer Support</a>
          <Link to="/faq" className="footer-link">FAQs</Link>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">For Professionals</h4>
          <Link to="/partner-with-us" className="footer-link">Partner With Us</Link>
          <Link to="/professional-guidelines" className="footer-link">Professional Guidelines</Link>
          <Link to="/training-center" className="footer-link">Training Center</Link>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Learn More</h4>
          <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
          <Link to="/terms-of-service" className="footer-link">Terms of Service</Link>
          <Link to="/trust-and-safety" className="footer-link">Trust & Safety</Link>
        </div>

        <div className="footer-col footer-col-social">
          <h4 className="footer-col-title">Social Links</h4>
          <div className="footer-social-icons">
            <a href="https://www.linkedin.com/company/zonomo/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={16} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={16} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter size={16} /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF size={16} /></a>
          </div>

          <div className="footer-app-buttons">
            <a href="#" className="app-btn-footer">
              <svg viewBox="0 0 384 512" width="22" height="22" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
              <div className="btn-text-footer">
                <span className="btn-small-footer">Download on the</span>
                <span className="btn-large-footer">App Store</span>
              </div>
            </a>
            <a href="#" className="app-btn-footer">
              <svg viewBox="0 0 512 512" width="22" height="22" fill="currentColor"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" /></svg>
              <div className="btn-text-footer">
                <span className="btn-small-footer">GET IT ON</span>
                <span className="btn-large-footer">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners.</p>
        <p>2008-2026 © ZONOMO™ Ltd. All rights reserved.</p>
      </div>

      <div className="footer-watermark">
        <h1>ZONOMO</h1>
      </div>
    </footer>
  );
};

export default Footer;
