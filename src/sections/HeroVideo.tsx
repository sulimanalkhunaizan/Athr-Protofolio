import { useEffect, useRef, useState } from "react";
import { useScroll, motion, useTransform, AnimatePresence } from "framer-motion";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Fade video slightly near the end
  const opacity = useTransform(scrollYProgress, [0, 0.95], [1, 0.8]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const unsub = scrollYProgress.on("change", (progress) => {
      if (video.duration) {
        video.currentTime = progress * video.duration;
      }

      // Control staged text based on scroll progress
      if (progress > 0.95) setStage(4); // Athr
      else if (progress > 0.9) setStage(3); // Experience
      else if (progress > 0.85) setStage(2); // Preserve
      else if (progress > 0.8) setStage(1); // Discover
      else setStage(0);
    });

    return () => unsub();
  }, [scrollYProgress]);

  const words = ["Discover.", "Preserve.", "Experience.", "Athr"];

  return (
    <section ref={containerRef} id="hero-video" className="relative h-[300vh] bg-black">
      {/* Sticky video */}
      <motion.video
        ref={videoRef}
        src="/intro.mp4" // ✅ place in /public/intro.mp4
        className="sticky top-0 h-screen w-screen object-cover"
        muted
        playsInline
        preload="auto"
        style={{ opacity }}
      />

      {/* Overlay Sequential Text */}
      <div className="sticky top-0 h-screen flex items-center justify-center z-10">
        <AnimatePresence mode="wait">
          {stage > 0 && (
            <motion.h1
              key={stage}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8 }}
              className={`text-5xl md:text-7xl font-bold text-center ${
                stage === 4
                  ? "text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.8)]"
                  : "text-white"
              }`}
            >
              {words[stage - 1]}
            </motion.h1>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
