import { motion } from "framer-motion";
import MultilingualText from "../components/MultilingualText";

interface OverviewSectionProps {
  logo: string;
  worldmap: string;
  cloud1: string;
  regions: Array<{ name: string; img: string }>;
}

export default function OverviewSection({ logo, worldmap, cloud1, regions }: OverviewSectionProps) {
  return (
    <section
      id="overview"
      className="relative h-screen w-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <img
        src={worldmap}
        alt="World map background"
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
        <motion.img
          src={logo}
          alt="Athr Logo"
          className="mx-auto w-32 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Multilingual Welcome Text */}
        <div className="h-24 md:h-32 mb-4 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MultilingualText 
              texts={[
                { text: "مرحباً بك في أثر", lang: "ar" },
                { text: "Welcome to Athr", lang: "en" },
                { text: "欢迎来到 Athr", lang: "zh" },
                { text: "Bienvenido a Athr", lang: "es" }
              ]}
              interval={4000}
              className="text-4xl md:text-6xl font-bold"
            />
          </motion.div>
        </div>

        {/* Multilingual Subtitle Text */}
        <div className="h-16 md:h-20 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <MultilingualText 
              texts={[
                { text: "رحلتك عبر تراث المملكة العربية السعودية تبدأ من هنا", lang: "ar" },
                { text: "Your journey through Saudi Arabia's heritage starts here", lang: "en" },
                { text: "您探索沙特阿拉伯遗产的旅程从这里开始", lang: "zh" },
                { text: "Tu viaje a través del patrimonio de Arabia Saudita comienza aquí", lang: "es" }
              ]}
              interval={4000}
              className="text-lg md:text-2xl text-gray-200 max-w-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Region Buttons */}
      <motion.div 
        className="absolute bottom-10 w-full flex justify-center space-x-6 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {regions.map((region) => (
          <motion.div
            key={region.name}
            className="relative w-48 h-28 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={region.img}
              alt={region.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <span className="relative z-10 flex items-center justify-center h-full text-white font-semibold text-xl font-[Noto Sans Arabic]">
              {region.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}