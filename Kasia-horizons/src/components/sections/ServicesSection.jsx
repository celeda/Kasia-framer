import React from "react";

const ServicesSection = () => {
  return (
    <section id="services" className="section-container bg-[#F5EFEC]">
      <h2 className="section-title text-[#3E362E]">W czym mogę<br />być pomocna?</h2>
      <div className="font-sans text-[#5E503F] space-y-6 max-w-3xl leading-relaxed">
        <p>
          Oferuję psychoterapię formą wspierającą - indywidualną i grupową. Dla
          młodzieży, dorosłych, par i rodzin - tak, by najlepiej dopasować się
          do potrzeb.
        </p>
        <p>
          W gabinecie pracuję na terenie psychoterapii krótkoterminowej i długoterminowej.
          Psychoterapia krótkoterminowa to praca nad konkretnym problemem i zazwyczaj
          trwa od kilku do kilkunastu spotkań. Psychoterapia długoterminowa to
          głębsza praca nad sobą, swoimi wzorcami i przekonaniami.
        </p>
        <p>
          Pierwsza konsultacja to spotkanie, podczas którego wspólnie zastanowimy
          się nad tym, co jest dla Ciebie ważne i jak mogę Ci pomóc.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;