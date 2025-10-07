import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Add this interface at the top
// Update Region interface
type Region = {
  name: string;
  img: string;
  bg: string;
  color: string;
  terrain: string;
  sites: number;
  feature: string;
  size: string;
};

interface DiveProps {
  regions: Region[];
}

export default function Dive({ regions }: DiveProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Add null check for regions
  const currentRegion = regions[currentIndex] || { name: "", img: "", bg: "", color: "#ccc", terrain: "", sites: 0, feature: "", size: "" };

  const nextRegion = () => {
    if (isTransitioning || regions.length === 0) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % regions.length);
      setIsTransitioning(false);
    }, 600);
  };

  const prevRegion = () => {
    if (isTransitioning || regions.length === 0) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + regions.length) % regions.length);
      setIsTransitioning(false);
    }, 600);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextRegion();
      if (e.key === "ArrowLeft") prevRegion();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isTransitioning, regions.length]);

  // Auto-advance
  useEffect(() => {
    if (regions.length === 0) return;
    const interval = setInterval(nextRegion, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning, regions.length]);

  if (regions.length === 0) {
    return (
      <section id="divein" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4 font-[Noto Sans Arabic]">استكشف المناطق</h2>
          <p>No regions available</p>
        </div>
      </section>
    );
  }

  return (
    <section id="divein" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Background with blur effect */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentRegion.name}
            src={currentRegion.bg}
            alt={currentRegion.name}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 py-20 relative z-10">
        <motion.h2 
          className="text-5xl md:text-7xl font-bold text-center mb-16 text-white font-[Noto Sans Arabic]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          استكشف مناطق المملكة
        </motion.h2>

        <div ref={containerRef} className="max-w-4xl mx-auto relative">
          {/* Region Card */}
          <motion.div
            key={currentRegion.name}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center">
              {/* Region Name */}
              <motion.h3 
                className="text-4xl md:text-6xl font-bold text-white mb-6 font-[Noto Sans Arabic]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {currentRegion.name}
              </motion.h3>

              {/* Region Image */}
              <motion.div
                className="w-full max-w-md mx-auto mb-6 rounded-3xl overflow-hidden border-4 border-white/30 shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
              >
                <img
                  src={currentRegion.img}
                  alt={currentRegion.name}
                  className="w-full h-64 object-cover"
                />
              </motion.div>

              {/* Two separate circles for size and terrain with regional patterns */}
              <div className="flex justify-center gap-8 mb-6">
                {/* Terrain Circle (left) */}
                <motion.div
                  className="w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-lg font-[Noto Sans Arabic] relative overflow-hidden"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
                >
                  {/* Regional Pattern Background */}
                  <div 
                    className="absolute inset-0 rounded-full opacity-30"
                    style={{
                      backgroundImage: `url(${currentRegion.bg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'blur(1px)'
                    }}
                  />
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 rounded-full bg-black/40"></div>
                  <span className="relative z-10 text-lg font-bold text-white">{currentRegion.terrain}</span>
                </motion.div>
                
                {/* Size Circle (right) */}
                <motion.div
                  className="w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-lg font-[Noto Sans Arabic] relative overflow-hidden"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
                >
                  {/* Regional Pattern Background */}
                  <div 
                    className="absolute inset-0 rounded-full opacity-30"
                    style={{
                      backgroundImage: `url(${currentRegion.bg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'blur(1px)'
                    }}
                  />
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 rounded-full bg-black/40"></div>
                  <span className="relative z-10 text-lg font-bold text-white">{currentRegion.size}</span>
                </motion.div>
              </div>

              {/* Feature */}
              <motion.p
                className="text-xl text-gray-200 mb-4 font-[Noto Sans Arabic] leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {currentRegion.feature}
              </motion.p>

              <motion.p
                className="text-lg text-gray-200 font-[Noto Sans Arabic] leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                اكتشف التراث الغني والثقافة المتنوعة لـ {currentRegion.name}
              </motion.p>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={prevRegion}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all border border-white/30"
            disabled={isTransitioning}
          >
            ←
          </button>

          <button
            onClick={nextRegion}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all border border-white/30"
            disabled={isTransitioning}
          >
            →
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {regions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? "bg-white scale-125" 
                    : "bg-white/30 hover:bg-white/50"
                }`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}