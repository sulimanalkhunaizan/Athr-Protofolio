import { motion } from "framer-motion";

interface TechnologySectionProps {
  natureBg: string;
}

export default function TechnologySection({ natureBg }: TechnologySectionProps) {
  const technologies = [
    {
      id: "ai",
      title: "الذكاء الاصطناعي",
      icon: "🤖",
      description: "تقنيات الذكاء الاصطناعي المتقدمة",
      features: [
        "تحليل البيانات الضخمة",
        "التعلم الآلي المتقدم",
        "الذكاء الاصطناعي التوليدي",
        "معالجة اللغة الطبيعية"
      ],
      color: "from-purple-500 to-pink-500",
      position: "top-left"
    },
    {
      id: "ar-vr",
      title: "الواقع المعزز والافتراضي",
      icon: "🥽",
      description: "تقنيات الواقع المختلط",
      features: [
        "تجارب تفاعلية ثلاثية الأبعاد",
        "الواقع المعزز للمواقع التراثية",
        "جولات افتراضية متقدمة",
        "تطبيقات الواقع المختلط"
      ],
      color: "from-blue-500 to-cyan-500",
      position: "top-right"
    },
    {
      id: "blockchain",
      title: "البلوك تشين",
      icon: "⛓️",
      description: "تقنيات السلسلة الكتلية",
      features: [
        "تأمين البيانات التراثية",
        "شهادات الأصالة الرقمية",
        "التحقق من صحة المعلومات",
        "النظم اللامركزية"
      ],
      color: "from-green-500 to-emerald-500",
      position: "bottom-left"
    },
    {
      id: "mobile",
      title: "التطبيقات المحمولة",
      icon: "📱",
      description: "تقنيات الهواتف الذكية",
      features: [
        "تطبيقات متعددة المنصات",
        "واجهات مستخدم متقدمة",
        "التحديثات التلقائية",
        "الأداء المحسن"
      ],
      color: "from-teal-500 to-blue-500",
      position: "bottom-right"
    }
  ];

  return (
    <section id="technology" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-20 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-8 text-white font-[Noto Sans Arabic]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            تقنياتنا المتطورة
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto font-[Noto Sans Arabic]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            نستخدم أحدث التقنيات لتقديم تجربة تراثية فريدة ومتطورة
          </motion.p>
        </motion.div>

        {/* Central Hub */}
        <motion.div
          className="relative max-w-7xl mx-auto min-h-[800px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Central Node */}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-gradient-to-br from-[#006C35] to-[#00A86B] rounded-full p-12 shadow-2xl border-4 border-white/30 backdrop-blur-sm">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🧠</div>
                <h3 className="text-3xl font-bold font-[Noto Sans Arabic]">أثر</h3>
                <p className="text-lg opacity-90 mt-2 font-[Noto Sans Arabic]">التقنيات الأساسية</p>
              </div>
            </div>
          </motion.div>

          {/* Technology Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                className={`relative group ${
                  tech.position === 'top-left' ? 'md:col-start-1 md:row-start-1' :
                  tech.position === 'top-right' ? 'md:col-start-2 md:row-start-1' :
                  tech.position === 'bottom-left' ? 'md:col-start-1 md:row-start-2' :
                  'md:col-start-2 md:row-start-2'
                }`}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className={`bg-gradient-to-br ${tech.color} rounded-2xl p-8 shadow-2xl border border-white/20 backdrop-blur-sm relative overflow-hidden group-hover:shadow-3xl transition-all duration-300`}>
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-center mb-6">
                      <motion.div 
                        className="text-5xl mb-4"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {tech.icon}
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white font-[Noto Sans Arabic] mb-2">
                        {tech.title}
                      </h3>
                      <p className="text-white/80 text-sm font-[Noto Sans Arabic]">
                        {tech.description}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      {tech.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center space-x-3 space-x-reverse text-white text-sm font-[Noto Sans Arabic] bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.8 + featureIndex * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
            {technologies.map((tech, index) => {
              // Calculate positions for 2x2 grid with more distance from center
              const positions = [
                { x: 15, y: 15 },  // top-left (AI)
                { x: 85, y: 15 },  // top-right (AR/VR)
                { x: 15, y: 85 },  // bottom-left (Blockchain)
                { x: 85, y: 85 }   // bottom-right (Mobile)
              ];
              const pos = positions[index];
              
              return (
                <motion.line
                  key={tech.id}
                  x1="50%"
                  y1="50%"
                  x2={`${pos.x}%`}
                  y2={`${pos.y}%`}
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeDasharray="8,4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.8 }}
                  transition={{ duration: 1.5, delay: 1 + index * 0.2 }}
                />
              );
            })}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00A86B" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#006C35" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-[#00A86B] mb-2">100%</div>
            <div className="text-white font-[Noto Sans Arabic]">تقنيات حديثة</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-[#00A86B] mb-2">24/7</div>
            <div className="text-white font-[Noto Sans Arabic]">دعم تقني</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-[#00A86B] mb-2">99.9%</div>
            <div className="text-white font-[Noto Sans Arabic]">موثوقية النظام</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
