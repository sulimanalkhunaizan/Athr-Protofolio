import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function IntroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const introSectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  
  const discoverOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const preserveOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const experienceOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const athrOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const introEl = document.getElementById("intro");
      if (introEl && videoRef.current && videoRef.current.duration) {
        const rect = introEl.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const scrollPosition = -rect.top;
        const totalScrollDistance = introEl.scrollHeight - viewportHeight;
        const progress = Math.min(Math.max(scrollPosition / totalScrollDistance, 0), 1);
        
        videoRef.current.currentTime = videoRef.current.duration * progress;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="intro" ref={introSectionRef} className="relative h-[400vh] w-screen">
      <div className="sticky top-0 h-screen w-screen overflow-hidden">
        <video
          ref={videoRef}
          src="/intro.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay Sequential Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white font-[Noto Sans Arabic]">
          <motion.h2
            style={{ opacity: discoverOpacity }}
            className="text-4xl md:text-6xl font-light tracking-widest mb-4"
          >
            اكتشف.
          </motion.h2>
          <motion.h2
            style={{ opacity: preserveOpacity }}
            className="text-4xl md:text-6xl font-light tracking-widest mb-4"
          >
            احفظ.
          </motion.h2>
          <motion.h2
            style={{ opacity: experienceOpacity }}
            className="text-4xl md:text-6xl font-light tracking-widest mb-4"
          >
            جرب.
          </motion.h2>
          <motion.h1
            style={{ opacity: athrOpacity }}
            className="text-6xl md:text-8xl font-extrabold text-[#006C35] drop-shadow-[0_0_20px_rgba(0,108,53,0.8)]"
          >
            أثر
          </motion.h1>
        </div>
      </div>
    </section>
  );
}