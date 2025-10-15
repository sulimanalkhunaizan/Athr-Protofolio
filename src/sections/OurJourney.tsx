import React from 'react';
import { motion } from "framer-motion";

interface OurJourneySectionProps {
  logo: string;
}

export default function OurJourneySection({ logo }: OurJourneySectionProps) {
  const milestones = [
    {
      date: "",
      title: "The Spark Appears",
      description: "An idea comes like a whisper, drifts away, circles back — until it finds its voice with us here.",
      status: "start"
    },
    {
      date: "",
      title: "Market Research",
      description: "Comprehensive analysis of target markets and customer segments",
      status: "done"
    },
    {
      date: "",
      title: "Prototype Development",
      description: "Build and test initial product prototypes",
      status: "current"
    },
    {
      date: "",
      title: "Non-Financial Seed",
      description: "Secure initial investment to scale operations and team",
      status: "upcoming"
    },
    {
      date: "",
      title: "Beta Launch",
      description: "Public beta release with early adopter program",
      status: "upcoming"
    },
    {
      date: "",
      title: "Full Platform Launch",
      description: "Official public launch across all target markets",
      status: "upcoming"
    }
  ];

  const currentIndex = milestones.findIndex(milestone => milestone.status === "current");
  const doneCount = milestones.filter(milestone => milestone.status === "done" || milestone.status === "start").length;
  const progress = ((doneCount + (currentIndex !== -1 ? 1 : 0)) / milestones.length) * 100;

  return (
    <section id="journey" dir="ltr" className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-8">
        <motion.h2 
          className="text-5xl md:text-7xl font-bold mb-20 text-white text-center font-[Noto Sans Arabic]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          رحلتنا
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
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`absolute w-4 h-4 rounded-full transform -translate-x-1/2 border-2 border-gray-800 ${
                  milestone.status === "start" ? "bg-purple-500" :
                  milestone.status === "done" ? "bg-green-500" :
                  milestone.status === "current" ? "bg-amber-400" :
                  "bg-gray-600"
                }`}
                style={{ left: `${(index / (milestones.length - 1)) * 100}%` }}
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

          {/* Milestone Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mt-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl border-2 backdrop-blur-sm ${
                  milestone.status === "start"
                    ? "bg-purple-500/10 border-purple-400 shadow-lg shadow-purple-400/20"
                    : milestone.status === "current"
                      ? "bg-amber-400/10 border-amber-400 shadow-lg shadow-amber-400/20"
                      : milestone.status === "done"
                        ? "bg-green-500/10 border-green-500 shadow-lg shadow-green-500/20"
                        : "bg-gray-800/50 border-gray-600"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {milestone.date && (
                  <div className="text-center mb-4">
                    <div className={`text-sm font-semibold ${
                      milestone.status === "start" ? "text-purple-400" :
                      milestone.status === "current" ? "text-amber-400" : 
                      milestone.status === "done" ? "text-green-400" : "text-gray-400"
                    }`}>
                      {milestone.date}
                    </div>
                  </div>
                )}
                
                <h3 className={`text-lg font-bold text-center mb-3 font-[Noto Sans Arabic] ${
                  milestone.status === "start" ? "text-purple-300" :
                  milestone.status === "current" ? "text-amber-300" : 
                  milestone.status === "done" ? "text-green-300" : "text-white"
                }`}>
                  {milestone.title}
                </h3>
                
                <p className="text-gray-300 text-sm text-center leading-relaxed mb-4 font-[Noto Sans Arabic]">
                  {milestone.description}
                </p>

                <div className="flex justify-center">
                  {milestone.status === "start" && (
                    <span className="inline-block bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold text-center">
                      A Chapter Start
                    </span>
                  )}
                  {milestone.status === "current" && (
                    <span className="inline-block bg-amber-400 text-black px-3 py-1 rounded-full text-sm font-bold text-center">
                      Current Phase
                    </span>
                  )}
                  {milestone.status === "done" && (
                    <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold text-center">
                      Completed
                    </span>
                  )}
                  {milestone.status === "upcoming" && (
                    <span className="inline-block bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-bold text-center">
                      Upcoming
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
