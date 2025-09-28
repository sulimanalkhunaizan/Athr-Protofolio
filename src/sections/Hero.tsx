import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  // A tall wrapper gives us scroll room; sticky child stays centered
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // when wrapper ends at top of viewport
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 20]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative h-[150vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center bg-black">
        <motion.h1
          style={{ scale, opacity }}
          className="text-white text-7xl md:text-9xl font-extrabold tracking-widest drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
        >
          Athr
        </motion.h1>
      </div>
    </section>
  );
}
