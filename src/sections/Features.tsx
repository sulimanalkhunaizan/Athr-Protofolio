import React from 'react';
import { motion } from "framer-motion";

interface FeaturesSectionProps {
  logo: string;
}

export default function FeaturesSection({ logo }: FeaturesSectionProps) {
  const currentFeatures = [
    {
      title: "مساعد التراث بالذكاء الاصطناعي",
      description: "مساعد ذكي يقدم معلومات سياقية حول المواقع التراثية",
      icon: "🤖",
      status: "current"
    },
    {
      title: "دعم متعدد اللغات",
      description: "دعم للغة العربية والإنجليزية ولغات أخرى",
      icon: "🌐",
      status: "current"
    },
    {
      title: "خرائط تفاعلية",
      description: "خرائط مفصلة مع مواقع المعلومات التراثية والمعلومات",
      icon: "🗺️",
      status: "current"
    }
  ];

  const upcomingFeatures = [
    {
      title: "تجربة التراث بالواقع المعزز",
      description: "مميزات الواقع المعزز لإحياء المواقع التراثية",
      icon: "🥽",
      status: "upcoming"
    },
    {
      title: "التوجيه الصوتي",
      description: "جولات موجهة بالصوت بلغات متعددة",
      icon: "🎤",
      status: "upcoming"
    },
    {
      title: "المشاركة الاجتماعية",
      description: "شارك رحلتك التراثية مع الأصدقاء والعائلة",
      icon: "📱",
      status: "upcoming"
    },
    {
      title: "الوضع دون اتصال",
      description: "الوصول إلى معلومات التراث دون اتصال بالإنترنت",
      icon: "📶",
      status: "upcoming"
    },
    {
      title: "أبطال التراث",
      description: "اكسب الشارات والإنجازات لاستكشاف المواقع التراثية",
      icon: "🏆",
      status: "upcoming"
    },
    {
      title: "مميزات المجتمع",
      description: "تواصل مع عشاق التراث الآخرين وشارك التجارب",
      icon: "👥",
      status: "upcoming"
    }
  ];

  return (
    <section id="features" className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-8">
        <motion.h2 
          className="text-5xl md:text-7xl font-bold mb-20 text-white text-center font-[Noto Sans Arabic]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          المميزات
        </motion.h2>
        
        {/* Current Features */}
        <div className="mb-20">
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-12 text-amber-400 text-center font-[Noto Sans Arabic]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            المميزات الحالية
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-xl border-2 bg-amber-400/10 border-amber-400 shadow-lg shadow-amber-400/20 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{feature.icon}</div>
                  <h4 className="text-2xl font-bold text-amber-300 mb-4 font-[Noto Sans Arabic]">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed font-[Noto Sans Arabic]">
                    {feature.description}
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <span className="inline-block bg-amber-400 text-black px-4 py-2 rounded-full text-sm font-bold font-[Noto Sans Arabic]">
                    متاح الآن
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming Features */}
        <div>
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-12 text-green-400 text-center font-[Noto Sans Arabic]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            المميزات القادمة
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-xl border-2 bg-gray-800/50 border-gray-600 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 opacity-70">{feature.icon}</div>
                  <h4 className="text-2xl font-bold text-white mb-4 font-[Noto Sans Arabic]">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed font-[Noto Sans Arabic]">
                    {feature.description}
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <span className="inline-block bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-bold font-[Noto Sans Arabic]">
                    قريباً
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
