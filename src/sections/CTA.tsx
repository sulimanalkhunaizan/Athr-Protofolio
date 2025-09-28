import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="h-[100vh] bg-amber-100 flex items-center justify-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="px-8 py-4 bg-amber-600 text-white rounded-xl shadow-xl text-lg font-semibold"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Explore Athr
      </motion.button>
    </section>
  );
}
