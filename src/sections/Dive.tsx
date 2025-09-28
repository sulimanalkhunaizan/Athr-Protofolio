import { motion, useScroll, useTransform, useSpring, animate } from "framer-motion";
import { useMemo, useRef, useState, useEffect } from "react";

type Region = { name: string; img: string; color: string };

export default function Dive({ regions }: { regions: Region[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % regions.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, regions.length]);

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after manual interaction
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  // Handle swipe detection
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left - next slide
      goToSlide((currentIndex + 1) % regions.length);
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right - previous slide
      goToSlide((currentIndex - 1 + regions.length) % regions.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToSlide((currentIndex - 1 + regions.length) % regions.length);
      } else if (e.key === 'ArrowRight') {
        goToSlide((currentIndex + 1) % regions.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <section
      id="divein"
      className="relative w-screen h-screen overflow-hidden bg-black"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images with Smooth Transitions */}
      <div className="absolute inset-0 z-0">
        {regions.map((region, index) => (
          <motion.div
            key={region.name}
            className="absolute inset-0 w-full h-full"
            initial={false}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1 : 1.1,
            }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <img
              src={region.img}
              alt={region.name}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"
              style={{ 
                backgroundColor: `${region.color}10`,
                mixBlendMode: 'overlay'
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-8 md:px-20 lg:px-32">
        {/* Main Text */}
        <div className="mb-8">
          <motion.h2 
            key={`heading-${currentIndex}`}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dive into
          </motion.h2>
          
          <motion.h1
            key={`region-${currentIndex}`}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight"
            style={{ color: regions[currentIndex].color }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            {regions[currentIndex].name}
          </motion.h1>
        </div>

        {/* Navigation Dots */}
        <div className="flex space-x-4 mt-12">
          {regions.map((region, index) => (
            <button
              key={region.name}
              onClick={() => goToSlide(index)}
              className="relative group focus:outline-none"
            >
              <motion.div
                className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  index === currentIndex ? 'border-white' : 'border-white/40'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="w-full h-full rounded-full"
                  style={{ backgroundColor: region.color }}
                  initial={false}
                  animate={{
                    scale: index === currentIndex ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black/80 text-white text-sm px-3 py-1 rounded-full whitespace-nowrap">
                  {region.name}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-8">
          <motion.button
            onClick={() => goToSlide((currentIndex - 1 + regions.length) % regions.length)}
            className="text-white/70 hover:text-white transition-colors duration-300 focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          
          <motion.button
            onClick={() => goToSlide((currentIndex + 1) % regions.length)}
            className="text-white/70 hover:text-white transition-colors duration-300 focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        {/* Swipe Instructions */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Swipe</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <span className="text-white/40">|</span>
            <span>Click dots to explore</span>
          </div>
        </motion.div>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 z-20 bg-white/20">
        <motion.div
          className="h-full bg-white"
          initial={false}
          animate={{
            width: isAutoPlaying ? '100%' : '0%',
          }}
          transition={{
            duration: 4,
            ease: "linear",
          }}
          key={currentIndex}
          onAnimationComplete={() => {
            if (isAutoPlaying) {
              setCurrentIndex((prev) => (prev + 1) % regions.length);
            }
          }}
        />
      </div>
    </section>
  );
}