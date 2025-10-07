import React from 'react';
import { motion } from "framer-motion";

interface FeaturesSectionProps {
  logo: string;
}

export default function FeaturesSection({ logo }: FeaturesSectionProps) {
  const currentFeatures = [
    {
      title: "AI-Powered Heritage Guide",
      description: "Intelligent assistant that provides contextual information about heritage sites",
      icon: "🤖",
      status: "current"
    },
    {
      title: "Multilingual Support",
      description: "Support for Arabic, English, and other languages",
      icon: "🌐",
      status: "current"
    },
    {
      title: "Interactive Maps",
      description: "Detailed maps with heritage site locations and information",
      icon: "🗺️",
      status: "current"
    }
  ];

  const upcomingFeatures = [
    {
      title: "AR Heritage Experience",
      description: "Augmented reality features to bring heritage sites to life",
      icon: "🥽",
      status: "upcoming"
    },
    {
      title: "Voice Navigation",
      description: "Voice-guided tours in multiple languages",
      icon: "🎤",
      status: "upcoming"
    },
    {
      title: "Social Sharing",
      description: "Share your heritage journey with friends and family",
      icon: "📱",
      status: "upcoming"
    },
    {
      title: "Offline Mode",
      description: "Access heritage information without internet connection",
      icon: "📶",
      status: "upcoming"
    },
    {
      title: "Gamification",
      description: "Earn badges and achievements for exploring heritage sites",
      icon: "🏆",
      status: "upcoming"
    },
    {
      title: "Community Features",
      description: "Connect with other heritage enthusiasts and share experiences",
      icon: "👥",
      status: "upcoming"
    }
  ];

  return (
    <section id="features" className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-8">
        <motion.h2 
          className="text-5xl md:text-7xl font-bold mb-20 text-white text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Features
        </motion.h2>
        
        {/* Current Features */}
        <div className="mb-20">
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-12 text-amber-400 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Current Features
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-xl border-2 bg-amber-400/10 border-amber-400 shadow-lg shadow-amber-400/20 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{feature.icon}</div>
                  <h4 className="text-2xl font-bold text-amber-300 mb-4">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <span className="inline-block bg-amber-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                    Available Now
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming Features */}
        <div>
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-12 text-green-400 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Upcoming Features
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-xl border-2 bg-gray-800/50 border-gray-600 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 opacity-70">{feature.icon}</div>
                  <h4 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <span className="inline-block bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Coming Soon
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <motion.div 
          className="mt-20 pt-8 border-t border-white/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <img src={logo} alt="Athr Logo" className="mx-auto w-16 mb-4 opacity-80" />
          <p className="text-gray-400">© 2025 Athr. Preserving Heritage, Inspiring Futures.</p>
          <p className="text-gray-500 text-sm mt-2">Contact: hello@athr.com | +966 123 456 789</p>
        </motion.div>
      </div>
    </section>
  );
}
