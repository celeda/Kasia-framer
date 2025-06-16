import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-36 pb-16 md:pt-48 md:pb-24 px-4 bg-gradient-to-b from-[#FBF9F6] to-[#F5EFEC]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#3E362E] mb-6 leading-tight">
            Jako<br />psychoterapeutka...
          </h1>
          <p className="font-sans text-[#5E503F] mb-4 leading-relaxed">
            ...lubię słuchać. Z ciekawością, bez pośpiechu, z szacunkiem dla tempa
            i sposobu opowiadania. Bez oceny, bez radzenia w obie strony.
            Wierzę warto dać przestrzeń.
          </p>
          <p className="font-sans text-[#5E503F] mb-4 leading-relaxed">
            Psychoterapia to dla mnie spotkanie – żywe, autentyczne, czasem
            trudne, ale zawsze pełne sensu. Zależy mi, by ta przestrzeń mogła
            służyć temu, co pojawia się tutaj, a nie temu, co myślę, z góry
            zakładam.
          </p>
          <p className="font-sans text-[#5E503F] mb-6 leading-relaxed">
            Pracuję z osobami, które doświadczają kryzysu, straty w różnych
            obszarach ich życia, trudności rozwojowych, adaptacyjnych. Ale też z tymi, którzy po
            prostu chcą lepiej poznać i zrozumieć siebie.
          </p>
          <p className="font-sans text-[#7E7366] italic">
            Czasem potrzeba decyzji innych
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale:0.9 }}
          animate={{ opacity: 1, scale:1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl shadow-[#DCD3C9]/50">
            <img  alt="Psychoterapeutka Katarzyna Celeda w gabinecie" className="w-full h-auto rounded-2xl" src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;