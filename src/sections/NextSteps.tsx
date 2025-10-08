import React from 'react';
import { motion } from "framer-motion";

interface NextStepsSectionProps {
  logo: string;
}

export default function NextStepsSection({ logo }: NextStepsSectionProps) {
  const nextSteps = [
    {
      title: "An Idea Yet Untold",
      description: "Share your voice, every untold idea shapes tomorrow's story.",
      status: "current"
    },
    {
      title: "An Idea Yet Unseen",
      description: "Your perspective might reveal what others have yet to notice.",
      status: "upcoming"
    },
    {
      title: "An Idea Yet to Grow",
      description: "Plant your thought here, and together we'll let it flourish.",
      status: "upcoming"
    },
    {
      title: "An Idea Yet to Shine",
      description: "Even the smallest spark can light the path ahead.",
      status: "upcoming"
    }
  ];

  return (
    <section id="next" dir="ltr" className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-8">
        <motion.h2 
          className="text-5xl md:text-7xl font-bold mb-20 text-white text-center font-[Noto Sans Arabic]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          الخطوات القادمة
        </motion.h2>
        
        {/* Simple Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="relative h-2 bg-gray-700 rounded-full mb-12">
          </div>

          {/* Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nextSteps.map((step, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-xl border-2 bg-gray-800/50 border-gray-600 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-center mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm text-center leading-relaxed">
                  {step.description}
                </p>
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
