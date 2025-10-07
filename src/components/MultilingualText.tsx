import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MultilingualTextProps {
  texts: { text: string; lang: string }[];
  interval?: number;
  className?: string;
}

function MultilingualText({ texts, interval = 4000, className = "" }: MultilingualTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  const currentText = texts[currentIndex];

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText.lang}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className={`inline-block ${className}`}
          style={{ 
            fontFamily: currentText.lang === 'ar' ? 'Noto Sans Arabic' : 'inherit',
            direction: currentText.lang === 'ar' ? 'rtl' : 'ltr'
          }}
        >
          {currentText.text}
        </motion.span>
      </AnimatePresence>
      
      {/* Language indicator badge */}
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-white/80 font-normal whitespace-nowrap"
      >
        {getLanguageName(currentText.lang)}
      </motion.span>
    </div>
  );
}

function getLanguageName(langCode: string): string {
  const languages: { [key: string]: string } = {
    ar: 'العربية',
    en: 'English',
    zh: '中文',
    es: 'Español'
  };
  return languages[langCode] || langCode;
}

export default MultilingualText;