import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      title: "AI-Powered Analysis",
      description: "Advanced algorithms analyze your video metadata to predict engagement"
    },
    {
      title: "Real-time Predictions",
      description: "Get instant feedback on your video's potential performance"
    },
    {
      title: "Detailed Insights",
      description: "Understand what drives engagement in your content"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <div 
            key={index}
            className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Features;
