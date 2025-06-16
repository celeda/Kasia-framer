import React from "react";
import { motion } from "framer-motion";

const QuoteSection = () => {
  return (
    <section className="py-20 md:py-32 bg-[#EAE0D5]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-serif text-xl md:text-2xl lg:text-3xl text-[#5E503F] italic mb-6 leading-relaxed">
            "Terapeuty funkcją w leczeniu chorego jest przejście
            przez ciemność razem z pacjentem, aby mógł on
            rozpoznać i zintegrować, jeśli to tylko możliwe, te
            odrzucone i zniekształcone części."
          </p>
          <p className="font-sans text-[#7E7366]">
            Irvin D. Yalom
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;