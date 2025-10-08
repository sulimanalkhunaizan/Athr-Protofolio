import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";

// Import your UI screen images
// @ts-ignore 
import HomeScreen from "../assets/UI_screens/Mockups - Without BG/Home Screen.png";
import AIAssistant from "../assets/UI_screens/Mockups - Without BG/AI Assistant.png";
import GuideDetail from "../assets/UI_screens/Mockups - Without BG/Guide Detail.png";
import GuideList from "../assets/UI_screens/Mockups - Without BG/Guide List.png";
import Onboarding1 from "../assets/UI_screens/Mockups - Without BG/Onboarding Screen 1.png";
import Onboarding2 from "../assets/UI_screens/Mockups - Without BG/Onboarding Screen 2.png";
import Onboarding3 from "../assets/UI_screens/Mockups - Without BG/Onboarding Screen 3.png";
import Onboarding4 from "../assets/UI_screens/Mockups - Without BG/Onboarding Screen 4.png";
import PlaceDetail from "../assets/UI_screens/Mockups - Without BG/Place Detail.png";
import PlaceDetail2 from "../assets/UI_screens/Mockups - Without BG/Place Detail part 2.png";
import RegisterGuide from "../assets/UI_screens/Mockups - Without BG/Registration as a Guide.png";
import RegisterTraveler from "../assets/UI_screens/Mockups - Without BG/Registration as a Traveler.png";
import SignIn from "../assets/UI_screens/Mockups - Without BG/Sign in.png";
import Splash from "../assets/UI_screens/Mockups - Without BG/Splace Screen.png";


const screens = [
  {
    title: "الشاشة الترحيبية",
    arabicTitle: "شاشة البداية",
    description: "بداية رحلتك لاكتشاف التراث السعودي الغني",
    image: Splash,
    type: "main",
    layout: "right",
    features: []
  },
  {
    title: "تسجيل الدخول",
    arabicTitle: "تسجيل الدخول",
    description: "بوابة الدخول الآمنة إلى عالم التراث السعودي",
    image: SignIn,
    type: "auth",
    layout: "left",
    features: []
  },
  {
    title: "تسجيل كمرشد سياحي",
    arabicTitle: "تسجيل مرشد",
    description: "منصة متكاملة لتسجيل المرشدين السياحيين المعتمدين",
    image: RegisterGuide,
    type: "auth",
    layout: "center",
    features: []
  },
  {
    title: "تسجيل كمسافر",
    arabicTitle: "تسجيل مسافر",
    description: "انضم إلى منصة أثر لاكتشاف كنوز التراث السعودي",
    image: RegisterTraveler,
    type: "auth",
    layout: "split",
    features: []
  },
  {
    title: "التوعية والتعليم",
    arabicTitle: "التوعية والتعليم",
    description: "تقديم الهدف الثقافي والتعليمي للتطبيق مع إبراز التراث الثقافي والطبيعي",
    image: Onboarding1,
    type: "onboarding",
    layout: "left",
    features: []
  },
  {
    title: "الخرائط التفاعلية",
    arabicTitle: "الخرائط التفاعلية",
    description: "استكشف المواقع الثقافية باستخدام خرائط تفاعلية غنية بالمعلومات",
    image: Onboarding2,
    type: "onboarding",
    layout: "right",
    features: []
  },
  {
    title: "المساعد مجيب",
    arabicTitle: "مجيب",
    description: "مساعد مدعم بالذكاء الاصطناعي للإجابة على جميع التساؤلات والأستفسارات    ",
    image: Onboarding3,
    type: "onboarding",
    layout: "center",
    features: []
  },
  {
    title: "المرشدون المعتمدون",
    arabicTitle: "مرشدون معتمدون",
    description: "التواصل مع مرشدين موثوقين ومعتمدين يجعلون التاريخ ينبض بالحياة",
    image: Onboarding4,
    type: "onboarding",
    layout: "split",
    features: []
  },
  {
    title: "الشاشة الرئيسية",
    arabicTitle: "الشاشة الرئيسية",
    description: "واجهة تمكن من خوض تجربة واستكشاف التراث الثقافي والطبيعي في واجهة موحده",
    image: HomeScreen,
    type: "main",
    layout: "left",
    features: []
  },
  {
    title: "مساعد الذكاء الاصطناعي (مجيب)",
    arabicTitle: "مساعد مجيب",
    description: "مساعد شخصي يقدم تجربة مخصصة ورؤى مفيدة حول تطبيق اثر ويجيبك على استفساراتك",
    image: AIAssistant,
    type: "ai",
    layout: "right",
    features: []
  },
  {
    title: "تفاصيل المرشد السياحي",
    arabicTitle: "تفاصيل المرشد",
    description: "عرض شامل لملف المرشد مع كافة المعلومات والتفاصيل",
    image: GuideDetail,
    type: "guide",
    layout: "center",
    features: []
  },
  {
    title: "قائمة المرشدين",
    arabicTitle: "قائمة المرشدين",
    description: "تصفح المرشدين المعتمدين مع إمكانيات تصفية متقدمة",
    image: GuideList,
    type: "list",
    layout: "split",
    features: []
  },
  {
    title: "تفاصيل المكان",
    arabicTitle: "تفاصيل المكان",
    description: "عرض شامل للمكان مع الصور والمعلومات الثقافية والتقييمات",
    image: PlaceDetail,
    type: "place",
    layout: "left",
    features: []
  },
  {
    title: "تفاصيل المكان - 2",
    arabicTitle: "تفاصيل موسعة",
    description: "عرض موسع مع الوصف التفصيلي، التاريخ، الأهمية الثقافية",
    image: PlaceDetail2,
    type: "place",
    layout: "right",
    features: []
  },
];

export default function UIScreens() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const welcomeIndex = screens.findIndex(s => s.title === "الشاشة الترحيبية");

  // Scroll to welcome screen on mount (do NOT set state)
  useEffect(() => {
    const container = containerRef.current;
    if (container && welcomeIndex !== -1) {
      const slideWidth = container.clientWidth;
      container.scrollTo({
        left: welcomeIndex * slideWidth,
        behavior: 'auto'
      });
    }
  }, []);

  // scrollToSlide: only scroll, do NOT set state
  const scrollToSlide = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, screens.length - 1));
    const container = containerRef.current;
    if (container) {
      const slideWidth = container.clientWidth;
      const targetPosition = clampedIndex * slideWidth;
      
      container.scrollTo({
        left: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  // scrollSlide: only scroll, do NOT set state
  const scrollSlide = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (!container) return;
    
    const slideWidth = container.clientWidth;
    const currentScrollPosition = container.scrollLeft;
    const currentIndex = Math.round(currentScrollPosition / slideWidth);
    
    // Ensure we don't go beyond bounds
    let newIndex = direction === 'left' 
      ? Math.max(0, currentIndex - 1)
      : Math.min(screens.length - 1, currentIndex + 1);
    
    scrollToSlide(newIndex);
  };

  // Update current slide on scroll (only if changed)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const slideWidth = container.clientWidth;
      const scrollPosition = container.scrollLeft;
      
      // Use more precise calculation
      let newIndex = Math.round(scrollPosition / slideWidth);
      newIndex = Math.max(0, Math.min(newIndex, screens.length - 1));
      
      if (newIndex !== currentSlide) {
        setCurrentSlide(newIndex);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentSlide]);

  return (
    <section id="ui-screens" dir="ltr" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900 py-20">
      <div className="w-full max-w-7xl mx-auto">
        {/* Horizontal Scroll Container */}
        <div 
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            height: '90vh'
          }}
        >
          {screens.map((screen, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center flex items-center justify-center"
              style={{ width: '100vw', maxWidth: '1200px' }}
            >
              {/* Consistent Layout for All Screens */}
              <div className="w-full px-8 h-full flex items-center justify-between gap-8">
                {/* Screen Image - Left */}
                <motion.div 
                  className="flex-shrink-0 flex justify-center items-center"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <img 
                    src={screen.image} 
                    alt={screen.title}
                    style={{ width: '800px', height: 'auto', maxWidth: 'none' }}
                    className="rounded-2xl shadow-2xl"
                  />
                </motion.div>

                {/* Content - Right */}
                <motion.div 
                  className="flex-1 max-w-lg"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20" dir="rtl">
                      <h3 className="text-3xl font-bold text-white mb-6 font-[Noto Sans Arabic]">
                        {screen.title}
                      </h3>
                      <p className="text-lg text-gray-200 font-[Noto Sans Arabic] leading-relaxed">
                        {screen.description}
                      </p>
                    </div>
                </motion.div>
              </div>

            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {screens.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-white scale-125" 
                  : "bg-white/30 hover:bg-white/60"
              }`}
              onClick={() => scrollToSlide(index)}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20">
          <motion.button
            className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all border border-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.1 }}
            onClick={() => scrollSlide('left')}
            disabled={currentSlide === 0}
          >
            <span className="text-2xl">←</span>
          </motion.button>
        </div>

        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
          <motion.button
            className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all border border-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.1 }}
            onClick={() => scrollSlide('right')}
            disabled={currentSlide === screens.length - 1}
          >
            <span className="text-2xl">→</span>
          </motion.button>
        </div>

        {/* Progress Indicator */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <span className="text-white font-[Noto Sans Arabic] text-lg">
              {currentSlide + 1} / 13 - واجهة التطبيق
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}