import React from 'react';
import { motion } from "framer-motion";

interface NextStepsSectionProps {
  logo: string;
}

export default function NextStepsSection({ logo }: NextStepsSectionProps) {
  const nextSteps = [
    {
      title: "Step 1",
      description: "",
      status: "current"
    },
    {
      title: "Step 2", 
      description: "",
      status: "upcoming"
    },
    {
      title: "Step 3",
      description: "",
      status: "upcoming"
    },
    {
      title: "Step 4",
      description: "",
      status: "upcoming"
    },
    {
      title: "Step 5",
      description: "",
      status: "upcoming"
    },
    {
      title: "Step 6",
      description: "",
      status: "upcoming"
    }
  ];

  const currentIndex = nextSteps.findIndex(step => step.status === "current");
  const doneCount = nextSteps.filter(step => step.status === "done").length;
  const progress = ((doneCount + (currentIndex !== -1 ? 1 : 0)) / nextSteps.length) * 100;

  return (
    <section id="next" dir="ltr" className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-8">
        <motion.h2 
          className="text-5xl md:text-7xl font-bold mb-20 text-white text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Next Steps
        </motion.h2>
        
        {/* Simple Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="relative h-2 bg-gray-700 rounded-full">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: `${progress}%` }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
          </div>

          {/* Timeline Dots */}
          <div className="relative -mt-1">
            {nextSteps.map((step, index) => (
              <div
                key={index}
                className="absolute w-4 h-4 bg-gray-600 rounded-full transform -translate-x-1/2 border-2 border-gray-800"
                style={{ left: `${(index / (nextSteps.length - 1)) * 100}%` }}
              />
            ))}
          </div>

          {/* Camel */}
          <motion.div
            className="absolute -top-8 z-30"
            style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className="text-4xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              🐪
            </motion.div>
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-amber-400 text-black px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap">
              Current Phase
            </div>
          </motion.div>

          {/* Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mt-16">
            {nextSteps.map((step, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl border-2 backdrop-blur-sm ${
                  step.status === "current"
                    ? "bg-amber-400/10 border-amber-400 shadow-lg shadow-amber-400/20"
                    : step.status === "done"
                      ? "bg-green-500/10 border-green-500 shadow-lg shadow-green-500/20"
                      : "bg-gray-800/50 border-gray-600"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-center mb-4">
                  <div className={`text-sm font-semibold ${
                    step.status === "current" ? "text-amber-400" : 
                    step.status === "done" ? "text-green-400" : "text-gray-400"
                  }`}>
                    {step.title}
                  </div>
                </div>
                
                <h3 className={`text-lg font-bold text-center mb-3 ${
                  step.status === "current" ? "text-amber-300" : 
                  step.status === "done" ? "text-green-300" : "text-white"
                }`}>
                  {step.title}
                </h3>
                
                <p className="text-gray-300 text-sm text-center leading-relaxed mb-4">
                  {step.description}
                </p>

                <div className="flex justify-center">
                  {step.status === "current" && (
                    <span className="inline-block bg-amber-400 text-black px-3 py-1 rounded-full text-sm font-bold text-center">
                      Current Phase
                    </span>
                  )}
                  {step.status === "done" && (
                    <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold text-center">
                      Completed
                    </span>
                  )}
                  {step.status === "upcoming" && (
                    <span className="inline-block bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-bold text-center">
                      Upcoming
                    </span>
                  )}
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
