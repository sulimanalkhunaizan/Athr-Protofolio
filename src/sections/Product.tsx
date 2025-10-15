import { motion } from "framer-motion";

interface ProductSectionProps {
  desertBg: string;
}

export default function ProductSection({ desertBg }: ProductSectionProps) {
  return (
    <section id="product" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Desert Background */}
      <div className="absolute inset-0">
        <img
          src={desertBg}
          alt="صحراء السعودية"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-8 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
        {/* Title and Subtitle */}
<motion.div
  className="mb-16 relative"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <motion.h2 
    className="text-5xl md:text-7xl font-bold text-white font-[Noto Sans Arabic] mb-2 text-right"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    أثر
  </motion.h2>
   <motion.h3 
     className="text-2xl md:text-3xl font-bold text-[#FFD700] font-[Noto Sans Arabic] -mt-2 text-right"
     initial={{ opacity: 0, x: 50 }}
     whileInView={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.8, delay: 0.3 }}
   >
     هي وسيلتك لتخوض في رحلة التراث والثقافة للمملكة .. بأسلوب عصري وحديث
   </motion.h3>
</motion.div>
          <div className="grid grid-cols-1 md:grid-rows-2 gap-8">
            {/* Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#006C35]/30"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h4 className="text-2xl font-bold text-white mb-4 font-[Noto Sans Arabic]">مرنة ومتنوعة </h4>
                <p className="text-gray-200 font-[Noto Sans Arabic]">تطبيق يتكيف مع مختلف احتياجات المستخدمين وأساليب استكشافهم للتراث</p>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#006C35]/30"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-2xl font-bold text-white mb-4 font-[Noto Sans Arabic]">بنية مستدامة </h4>
                <p className="text-gray-200 font-[Noto Sans Arabic]">بنية تقنية تسمح بالتوسع المستمر وإضافة ميزات جديدة بسلاسة</p>
              </motion.div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#006C35]/30"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="text-2xl font-bold text-white mb-4 font-[Noto Sans Arabic]">مدعوم بالذكاء الاصطناعي</h4>
                <p className="text-gray-200 font-[Noto Sans Arabic]">تقنيات الذكاء الاصطناعي المحوكم لتقديم تجارب مخصصة وذكية</p>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#006C35]/30"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h4 className="text-2xl font-bold text-white mb-4 font-[Noto Sans Arabic]">اتصال ثنائي المسار</h4>
                <p className="text-gray-200 font-[Noto Sans Arabic]">ربط المستخدم بالتراث وربط التراث بالمستخدم</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}