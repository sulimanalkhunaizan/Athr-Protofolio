import { motion } from "framer-motion";

export default function Insights() {
  const items = [
    "Fast scrollytelling demo (placeholder)",
    "Region-based storytelling with images",
    "Space for key bullets from your doc",
  ];
  return (
    <section id="insights" className="min-h-[120vh] flex items-center justify-center bg-white">
      <div className="max-w-3xl px-6">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Insights & Highlights</h3>
        <ul className="space-y-3 text-lg text-gray-700">
          {items.map((x, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="leading-relaxed"
            >
              • {x}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
