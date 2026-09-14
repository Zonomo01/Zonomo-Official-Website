import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './FAQPage.css';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "What is Zonomo?",
      answer: "A technology-enabled marketplace helping customers discover and connect with service professionals for home, healthcare, personal care, wellness and everyday services."
    },
    {
      question: "Does Zonomo provide services directly?",
      answer: "Generally, no. Zonomo provides the technology platform connecting customers with independent professionals or service providers."
    },
    {
      question: "Are all professionals verified?",
      answer: "Verification checks may vary by professional and category and do not guarantee future conduct or service quality."
    },
    {
      question: "Can I negotiate pricing?",
      answer: "Where flexible pricing is enabled, customers and professionals may mutually agree on pricing before booking or service begins."
    },
    {
      question: "Does Zonomo provide emergency healthcare?",
      answer: "No. In a medical emergency, contact appropriate emergency services immediately."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="faq-page-wrapper">
      <Navigation />
      
      <div className="faq-hero">
        <h1>Frequently Asked Questions</h1>
        <p className="faq-meta">Everything you need to know about Zonomo</p>
      </div>

      <div className="faq-container">
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                {faq.question}
                <div className="faq-icon"></div>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQPage;
