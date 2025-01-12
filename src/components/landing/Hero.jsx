import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-secondary-500/30 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
            Predict Your Video's Success
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Use AI to analyze and predict your video's engagement before you publish
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 hover:opacity-90 transition-opacity font-medium">
              Get Started Free
            </button>
            <button className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition-colors">
              Watch Demo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
