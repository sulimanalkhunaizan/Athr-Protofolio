import { motion } from "framer-motion";

interface AgendaSectionProps {
  heritageBg: string;
  sections: Array<{ id: string; label: string }>;
  onJump: (id: string) => void;
}

export default function AgendaSection({ heritageBg, sections, onJump }: AgendaSectionProps) {
  return (
    <section id="agenda" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Heritage Background */}
      <div className="absolute inset-0">
        <img
          src={heritageBg}
          alt="تراث سعودي"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-8 py-20 relative z-10">

        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#a69f75] font-[Noto Sans Arabic]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            جدول العرض التقديمي
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.slice(1).map((section, index) => (
              <motion.div
                key={section.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#006C35]/30 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                onClick={() => onJump(section.id)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-8 h-8 bg-[#a69f75] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-white font-[Noto Sans Arabic]">{section.label}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}