import { motion } from "framer-motion";

interface AudienceSectionProps {
  traditionalBg: string;
}

export default function AudienceSection({ traditionalBg }: AudienceSectionProps) {
  const audiences = [
    {
      title: "المواطنون والمقيمون",
      description: "  اكتشاف معالم وطنهم والتعرف على تاريخه",
      color: "#006C35"
    },
    {
      title: "السياح",
      description: "  أداة تخطيط شاملة وموثوقة لزياراتهم",
      color: "#CE1126"
    },
    {
      title: "الطلاب والباحثون",
      description: " مصدر سريع ومنظم للمعلومات التاريخية والثقافية الموثقة",
      color: "#1E90FF"
    },
    {
      title: "شركاء القطاع",
      description: "كل من يعمل في نطاق تلبية احتياجات القطاع",
      color: "#FFD700"
    }
  ];

  return (
    <section id="audience" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Traditional Saudi Background */}
      <div className="absolute inset-0">
        <img
          src={traditionalBg}
          alt="تراث تقليدي سعودي"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-8 py-20 relative z-10">
        <motion.h2 
          className="text-5xl md:text-7xl font-bold text-center mb-16 text-white font-[Noto Sans Arabic]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          جمهورنا المستهدف
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              style={{ borderColor: `${audience.color}50` }}
            >
              <h3 className="text-xl font-bold text-white text-center mb-2 font-[Noto Sans Arabic]">{audience.title}</h3>
              <p className="text-gray-200 text-sm text-center mb-4 font-[Noto Sans Arabic]">{audience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}