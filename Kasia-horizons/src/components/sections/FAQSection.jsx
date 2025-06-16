import React from "react";
import { motion } from "framer-motion";
import FAQItem from "@/components/shared/FAQItem";

const FAQSection = () => {
  return (
    <section id="faq" className="section-container bg-[#FBF9F6]">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div>
          <h2 className="section-title text-[#3E362E]">Pytania, na które czasem<br />trudno odpowiedzieć....</h2>
          <div className="font-sans text-[#5E503F] space-y-8">
            <FAQItem 
              question="Czy psychoterapia jest dla mnie?"
              answer="Psychoterapia jest dla każdego, kto czuje potrzebę zrozumienia siebie i poprawienia jakości swojego życia. Niezależnie od tego, czy zmagasz się z konkretnymi trudnościami, czy po prostu chcesz lepiej poznać siebie - psychoterapia może być pomocna."
            />
            <FAQItem 
              question="Jak się umówić i zapłacić za terapię?"
              answer="Możesz umówić się na wizytę telefonicznie lub przez formularz kontaktowy na stronie. Płatność przyjmuję gotówką lub przelewem po każdej sesji."
            />
            <FAQItem 
              question="Jak długo trwa terapia?"
              answer="Długość terapii zależy od indywidualnych potrzeb i celów. Może trwać od kilku miesięcy do kilku lat. Podczas pierwszych spotkań wspólnie ustalimy plan terapii odpowiadający Twoim potrzebom."
            />
          </div>
          <div className="mt-12 font-sans text-[#5E503F]">
            <p>Z szacunkiem,</p>
            <p className="font-serif text-lg text-[#A07D5F]">Kasia</p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y:20 }}
          whileInView={{ opacity: 1, y:0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-8 md:mt-0"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl shadow-[#DCD3C9]/50">
            <img  alt="Psychoterapeutka Katarzyna Celeda w neutralnym otoczeniu" className="w-full h-auto rounded-2xl" src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;