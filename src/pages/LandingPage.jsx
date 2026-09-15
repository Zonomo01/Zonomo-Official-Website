import React from 'react';
import Scene from '../webgl/Scene';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Work from '../components/Work';
import HowItWorks from '../components/HowItWorks';
import Studio from '../components/Studio';
import Countdown from '../components/Countdown';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <>
      <div className="canvas-container">
        <Scene />
      </div>
      
      <main className="main-content">
        <Navigation />
        <Hero />
        <Work />
        <HowItWorks />
        <Studio />
        <Countdown />
        <Footer />
      </main>
    </>
  );
};

export default LandingPage;
