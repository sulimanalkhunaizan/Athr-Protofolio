import { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Dive from "./sections/Dive";

// --- ASSETS ---
import skyImg from "./assets/sky.jpg";
import cloud1 from "./assets/cloud.png";
import logo from "./assets/logo.png";
import najdImg from "./assets/najd_naqsh.jpg";
import hijazImg from "./assets/hijaz_rochan.jpg";
import aljanoubImg from "./assets/qat_asiri.jpg";
import easternImg from "./assets/alhasawi_jus.jpg";
import northernImg from "./assets/north_sodo.jpg";

// Import region images for Dive section
import saudiImg from "./assets/saudi.jpg";
import najdDiveImg from "./assets/najd.jpg";

import center from "./assets/region/center.jpg"
import center2 from "./assets/region/center2.jpg"
import east from "./assets/region/east.jpg"
import north from './assets/region/north.jpg'
import south from "./assets/region/south.jpg"
import west2 from "./assets/region/west2.jpg"
import west3 from "./assets/region/west3.jpg"




const sections = [
  { id: "overview", label: "Overview" },
  { id: "intro", label: "Intro Video" },
  { id: "divein", label: "Dive In" },
  { id: "insights", label: "Insights" },
  { id: "screens", label: "UI Screens" },
  { id: "next", label: "Next" },
];

// Regions data for Dive section
const diveRegions = [
  { 
    name: "Saudi", 
    img: saudiImg, 
    color: "#F5C542" // gold
  },
  { 
    name: "Najd", 
    img: center2, 
    color: "#FF6B4A" // warm desert orange
  },
  { 
    name: "Hijaz", 
    img: west3, 
    color: "#19C5C5" // turquoise
  },
  { 
    name: "Aljanoub", 
    img: south, 
    color: "#34D399" // emerald green
  },
  { 
    name: "Eastern", 
    img: east, 
    color: "#60A5FA" // sky blue
  },
  { 
    name: "Northern", 
    img: north, 
    color: "#C084FC" // purple
  },
];

export default function App() {
  const [activeId, setActiveId] = useState("overview");
  const videoRef = useRef<HTMLVideoElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to text opacity (show only near end of video)
  const discoverOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const preserveOpacity = useTransform(scrollYProgress, [0.8, 0.85], [0, 1]);
  const experienceOpacity = useTransform(scrollYProgress, [0.85, 0.9], [0, 1]);
  const athrOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      let current = "overview";
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            current = sec.id;
            break;
          }
        }
      }
      setActiveId(current);

      // Scrub intro video
      const introEl = document.getElementById("intro");
      if (introEl && videoRef.current) {
        const rect = introEl.getBoundingClientRect();
        const totalHeight = introEl.offsetHeight - window.innerHeight;
        const progress = Math.min(Math.max(-rect.top / totalHeight, 0), 1);

        if (videoRef.current.duration) {
          videoRef.current.currentTime =
            videoRef.current.duration * progress;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const jump = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-black text-white">
      {/* Floating TOC dots */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center space-y-4">
        {sections.map((sec) => {
          const active = sec.id === activeId;
          return (
            <button
              key={sec.id}
              onClick={() => jump(sec.id)}
              aria-label={sec.label}
              className={[
                "h-3 w-3 rounded-full transition-all",
                active
                  ? "bg-amber-400 scale-125 shadow-[0_0_6px_rgba(251,191,36,0.8)]"
                  : "bg-gray-400 hover:bg-gray-200",
              ].join(" ")}
            />
          );
        })}
      </nav>

      {/* ---------------- OVERVIEW ---------------- */}
      <section
        id="overview"
        className="relative h-screen w-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Sky */}
        <img
          src={skyImg}
          alt="Sky background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Clouds */}
        <motion.img
          src={cloud1}
          alt="Cloud"
          className="absolute top-10 left-0 w-1/2 opacity-70"
          animate={{ x: ["0%", "100%"] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
        <motion.img
          src={cloud1}
          alt="Cloud"
          className="absolute bottom-20 right-0 w-1/3 opacity-60"
          animate={{ x: ["0%", "-120%"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />

        {/* Content */}
        <div className="relative z-10 text-center text-white drop-shadow-lg">
          <img src={logo} alt="Athr Logo" className="mx-auto w-32 mb-6" />
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Athr
          </h2>
          <p className="text-lg md:text-2xl text-gray-200">
            Your journey through Saudi Arabia's heritage begins here.
          </p>
        </div>

        {/* Region Buttons */}
        <div className="absolute bottom-10 w-full flex justify-center space-x-6 z-10">
          {[
            { name: "Najd", img: najdImg },
            { name: "Hijaz", img: hijazImg },
            { name: "Aljanoub", img: aljanoubImg },
            { name: "Eastern", img: easternImg },
            { name: "Northern", img: northernImg },
          ].map((region) => (
            <div
              key={region.name}
              className="relative w-36 h-20 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => jump("divein")}
            >
              <img
                src={region.img}
                alt={region.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              <span className="relative z-10 flex items-center justify-center h-full text-white font-semibold text-lg">
                {region.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- INTRO VIDEO ---------------- */}
      <section id="intro" ref={introRef} className="relative h-[400vh] w-screen">
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
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white font-serif">
            <motion.h2
              style={{ opacity: discoverOpacity }}
              className="text-4xl md:text-6xl font-light tracking-widest mb-4"
            >
              Discover.
            </motion.h2>
            <motion.h2
              style={{ opacity: preserveOpacity }}
              className="text-4xl md:text-6xl font-light tracking-widest mb-4"
            >
              Preserve.
            </motion.h2>
            <motion.h2
              style={{ opacity: experienceOpacity }}
              className="text-4xl md:text-6xl font-light tracking-widest mb-4"
            >
              Experience.
            </motion.h2>
            <motion.h1
              style={{ opacity: athrOpacity }}
              className="text-6xl md:text-8xl font-extrabold text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.8)]"
            >
              Athr
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ---------------- DIVE IN (HORIZONTAL SECTION) ---------------- */}
      <section id="divein" className="relative w-screen">
        <Dive regions={diveRegions} />
      </section>

      {/* ---------------- INSIGHTS SECTION ---------------- */}
      <section id="insights" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 to-emerald-800 relative overflow-hidden">
        <div className="container mx-auto px-8 py-20">
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Cultural Insights
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Traditional Arts",
                description: "Explore the rich heritage of Saudi craftsmanship and artistic traditions.",
                color: "from-amber-500 to-orange-500"
              },
              {
                title: "Historical Sites",
                description: "Discover ancient landmarks and archaeological wonders across regions.",
                color: "from-emerald-500 to-green-500"
              },
              {
                title: "Cultural Events",
                description: "Experience festivals and celebrations that define Saudi culture.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Local Cuisine",
                description: "Taste the diverse flavors and traditional dishes from each region.",
                color: "from-red-500 to-pink-500"
              },
              {
                title: "Architecture",
                description: "Marvel at the unique architectural styles and building techniques.",
                color: "from-purple-500 to-indigo-500"
              },
              {
                title: "Natural Wonders",
                description: "Visit breathtaking landscapes and natural attractions.",
                color: "from-teal-500 to-blue-500"
              }
            ].map((insight, index) => (
              <motion.div
                key={insight.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${insight.color} mb-4`}></div>
                <h3 className="text-xl font-bold text-white mb-3">{insight.title}</h3>
                <p className="text-gray-200">{insight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- UI SCREENS ---------------- */}
      <section id="screens" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-800 relative overflow-hidden">
        <div className="container mx-auto px-8 py-20">
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            App Experience
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-white mb-4">Seamless Exploration</h3>
              <div className="space-y-4">
                {[
                  "Interactive region maps with cultural hotspots",
                  "Augmented Reality historical reconstructions",
                  "Personalized cultural journey planning",
                  "Real-time translation for local dialects",
                  "Multi-sensory experience integration"
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center space-x-4 text-lg text-gray-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Mock phone frame */}
              <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[40px] p-4 border-[12px] border-gray-800 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-amber-400 to-orange-500 rounded-[28px] overflow-hidden relative">
                  {/* Mock app content */}
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-8 left-6 right-6">
                    <div className="h-4 bg-white/20 rounded-full mb-4"></div>
                    <div className="h-8 bg-white/30 rounded-lg mb-4"></div>
                  </div>
                  <div className="absolute bottom-8 left-6 right-6">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="aspect-square bg-white/20 rounded-lg"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- NEXT STEPS ---------------- */}
      <section id="next" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-pink-800 relative overflow-hidden">
        <div className="container mx-auto px-8 py-20 text-center">
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Continue the Journey
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join us in preserving and celebrating the rich cultural heritage of Saudi Arabia through innovative technology and immersive experiences.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="px-8 py-4 bg-amber-400 text-black font-bold rounded-full text-lg hover:bg-amber-300 transition-colors duration-300 shadow-lg">
              Download App
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white/10 transition-colors duration-300">
              Learn More
            </button>
          </motion.div>

          {/* Footer */}
          <motion.div 
            className="mt-20 pt-8 border-t border-white/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img src={logo} alt="Athr Logo" className="mx-auto w-16 mb-4 opacity-80" />
            <p className="text-gray-400">© 2024 Athr. Preserving Heritage, Inspiring Futures.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}