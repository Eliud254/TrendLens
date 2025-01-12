import React from 'react';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import CTA from '../components/landing/CTA';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <Hero />
      {/* Features Section */}
      <Features />
      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default LandingPage;
