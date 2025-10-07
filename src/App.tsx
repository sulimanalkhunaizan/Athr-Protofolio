import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import sections
import Overview from "./sections/Overview";
import Agenda from "./sections/Agenda";
import Vision from "./sections/Vision";
import Product from "./sections/Product";
import Audience from "./sections/Audience";
import Intro from "./sections/Intro";
import Technology from "./sections/Technology";
import UIScreens from "./sections/UIScreens";
import NextSteps from "./sections/NextSteps";
import OurJourney from "./sections/OurJourney";
import Features from "./sections/Features";
import Dive from "./sections/Dive";
import Dashboard from "./sections/Dashboard";

// Import assets
import logo from "./assets/logo.png";
import worldmap from "./assets/worldmap.png";
import cloud1 from "./assets/cloud.png";
import heritageBg from "./assets/intro_image.jpeg";
import architectureBg from "./assets/Background/section3.jpeg";
import najdImg from "./assets/Background/section1.jpeg";
import traditionalBg from "./assets/Background/section2.jpeg";
import natureBg from "./assets/najd.jpg";

// Import region images
import hijazImg from "./assets/region/west3.jpg";
import aljanoubImg from "./assets/region/south.jpg";
import easternImg from "./assets/region/east.jpg";
import northernImg from "./assets/region/north.jpg";

//import Naqsh
import hijazBg from "./assets/hijaz_rochan.jpg"
import aljanoubBg from "./assets/qat_asiri.jpg"
import northBg from "./assets/north_sodo.jpg"
import alhasawiBg from "./assets/alhasawi_jus.jpg"
import najdIBg from "./assets/najd_naqsh.jpg";

const sections = [
  { id: "overview", label: "نظرة عامة" },
  { id: "vision", label: "رؤيتنا ورسالتنا" },
  { id: "product", label: " تطبيق أثر" },
  { id: "audience", label: "جمهورنا" },
  { id: "divein", label: "استكشف المناطق" },
  { id: "technology", label: "التقنيات المستخدمة" },
  { id: "ui-screens", label: "واجهة التطبيق" },
  { id: "features", label: "المميزات" },
  { id: "journey", label: "رحلتنا" },
  { id: "next", label: "الخطوات القادمة" },
  { id: "statistics", label: "إحصائيات السياحة" },
];

// Regions data for Dive section
const diveRegions = [
  { 
    name: "المنطقة الوسطى", 
    img: najdImg, 
    bg: najdIBg, 
    color: "#8B4513",
    terrain: "هضاب وصحارى", 
    sites: 180, 
    feature: "تتميز بسهولها الواسعة ونقوشها التراثية", 
    size: "554,000 كم²" 
  },
  { 
    name: "المنطقة الغربية", 
    img: hijazImg, 
    bg: hijazBg, 
    color: "#CE1126",
    terrain: "جبال ووديان", 
    sites: 220, 
    feature: "مزيج من التاريخ الإسلامي والعمارة الفريدة", 
    size: "390,000 كم²" 
  },
  { 
    name: "المنطقة الجنوبية", 
    img: aljanoubImg, 
    bg: aljanoubBg, 
    color: "#FFD700",
    terrain: "جبال وسهول", 
    sites: 140, 
    feature: "جبال شاهقة ومناظر طبيعية خلابة", 
    size: "280,000 كم²" 
  },
  { 
    name: "المنطقة الشرقية", 
    img: easternImg, 
    bg: alhasawiBg, 
    color: "#1E90FF",
    terrain: "سهول وسواحل", 
    sites: 160, 
    feature: "سواحل ممتدة وواحات غنية بالنخيل", 
    size: "672,000 كم²" 
  },
  { 
    name: "المنطقة الشمالية", 
    img: northernImg, 
    bg: northBg, 
    color: "#228B22",
    terrain: "صحارى وهضاب", 
    sites: 120, 
    feature: "آثار مدائن صالح وصحراء شاسعة", 
    size: "320,000 كم²" 
  },
];

// Regions for Overview section
const overviewRegions = [
  { name: "المنطقة الشمالية", img: northernImg },
  { name: "المنطقة الشرقية", img: easternImg },
  { name: "المنطقة الوسطى", img: najdImg },
  { name: "المنطقة الغربية", img: hijazImg },
  { name: "المنطقة الجنوبية", img: aljanoubImg },
];

export default function App() {
  const [activeId, setActiveId] = useState("overview");
  const [showPoem, setShowPoem] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPoem(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  // Track active section
  useEffect(() => {
    if (!isClient) return;

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
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClient]);

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isClient) {
    return (
      <div className="bg-[#1a1a1a] text-white min-h-screen flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <img src={logo} alt="أثر" className="mx-auto w-32 mb-4" />
          <p className="text-gray-300 font-[Noto Sans Arabic]">جارٍ التحميل...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1a1a1a] text-white" dir="rtl">
      {/* Poem Section */}
      <AnimatePresence>
        {showPoem && (
          <motion.section
            key="poem"
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Background video */}
            <video
              src="/Athr-Protofolio/poem_background.mp4"
              autoPlay
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Poem Content */}
            <motion.div
              className="relative z-10 text-center text-white px-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <motion.div className="text-3xl md:text-5xl lg:text-6xl font-light leading-relaxed mb-8 font-[Noto Sans Arabic]">
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                  className="mb-6 text-[#FFD700]"
                >
                  في كل أثر… حكاية
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 1.5 }}
                  className="mb-6 text-[#beb389]"
                >
                  في كل أثر… ذاكرة
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 3 }}
                  className="text-[#6a7d5a]"
                >
                  في كل أثر… حياة
                </motion.p>
              </motion.div>

              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 4.5 }}
                className="mt-12"
              >
                <img
                  src={logo}
                  alt="شعار أثر"
                  className="mx-auto w-24 md:w-32 opacity-90"
                />
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 5 }}
                  className="text-2xl md:text-4xl font-bold mt-4 text-[#a69f75] font-[Noto Sans Arabic]"
                >
                  أثر
                </motion.h2>
              </motion.div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Main App */}
      {!showPoem && (
        <>
          {/* Navigation Dots */}
          <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center space-y-4">
            {sections.map((sec) => {
              const active = sec.id === activeId;
              return (
                <button
                  key={sec.id}
                  onClick={() => jump(sec.id)}
                  aria-label={sec.label}
                  className={`h-3 w-3 rounded-full transition-all ${
                    active
                      ? "bg-[#006C35] scale-125 shadow-[0_0_6px_rgba(0,108,53,0.8)]"
                      : "bg-gray-400 hover:bg-gray-200"
                  }`}
                />
              );
            })}
          </nav>

          {/* Sections */}
          <Overview 
            logo={logo}
            worldmap={worldmap}
            cloud1={cloud1}
            regions={overviewRegions}
          />

          <Agenda 
            heritageBg={heritageBg}
            sections={sections}
            onJump={jump}
          />

          <Vision architectureBg={architectureBg} />

          <Product desertBg={najdImg} />

          <Audience traditionalBg={traditionalBg} />

          <Dive regions={diveRegions} />

          <Technology natureBg={natureBg} />

          <UIScreens />

          <Features logo={logo} />

          <OurJourney logo={logo} />

          <NextSteps logo={logo} />

          <Dashboard />
        </>
      )}
    </div>
  );
}