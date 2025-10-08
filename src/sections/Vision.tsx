import { motion } from "framer-motion";

interface VisionSectionProps {
  architectureBg: string;
}

export default function VisionSection({ architectureBg }: VisionSectionProps) {
  return (
    <section id="vision" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Traditional Architecture Background */}
      <div className="absolute inset-0">
        <img
          src={architectureBg}
          alt="عمارة تقليدية سعودية"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-8 py-20 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Vision */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#8B4513]/30"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[#beb389] text-4xl mb-6 font-[Noto Sans Arabic] font-bold">رؤيتنا</div>
            <p className="text-xl text-gray-200 leading-relaxed mb-6 font-[Noto Sans Arabic]">

            تعزيز اهمية التراث الثقافي والطبيعي بما يتماشى مع أهداف رؤية المملكة 2030 في اثراء تجربة المواطنين، والزوار وابراز التراث الثقافي من خلال تطبيق مبتكر وسهل الاستخدام يقدم معلومات شاملة ومنظمة عن المواقع التراثية.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#8B4513]/30"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-[#beb389] text-4xl mb-6 font-[Noto Sans Arabic] font-bold">رسالتنا</div>
            <p className="text-xl text-gray-200 leading-relaxed mb-6 font-[Noto Sans Arabic]">
            تعزيز ثقافة استكشاف التراث الطبيعي والثقافي للمملكة العربية السعوديه والمحافظه عليه.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}