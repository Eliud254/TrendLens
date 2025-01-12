import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';

const CTA = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="rounded-2xl bg-gradient-to-r from-primary-500/20 to-secondary-500/20 p-8 md:p-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Boost Your Video Performance?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Join thousands of content creators who trust our AI predictions
        </p>
        <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 hover:opacity-90 transition-opacity font-medium inline-flex items-center">
          Start Predicting Now
          <ChevronRightIcon className="ml-2 h-5 w-5" />
        </button>
      </motion.div>
    </div>
  );
};

export default CTA;
