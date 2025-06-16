import React from "react";

const EducationSection = () => {
  return (
    <section id="education" className="section-container bg-[#FBF9F6]">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <h2 className="section-title text-[#3E362E]">Wykształcenie</h2>
          <div className="font-sans text-[#5E503F] space-y-6 leading-relaxed">
            <p>
              Jestem psycholożką i psychoterapeutką po całościowym szkoleniu
              psychoterapeutycznym w Ośrodku Psychoterapeutyczno-Szkoleniowym
              "Psychologia Procesu" oraz Studium Psychoterapii
              Psychodynamicznej.
            </p>
            <p>
              Psychologię studiowałam na Uniwersytecie Warszawskim i mam
              doświadczenie w pracy z osobami dorosłymi w różnych kontekstach
              psychoterapeutycznych. Jestem członkinią Polskiego Towarzystwa
              Psychoterapii Psychodynamicznej oraz Polskiego Towarzystwa
              Psychologicznego Oddziału Warszawskiego.
            </p>
            <p>
              Regularnie uczestniczę na superwizjach - spotkaniach,
              podczas których konsultuję swoją pracę z doświadczonymi
              psychoterapeutami.
            </p>
          </div>
        </div>
        <div>
          <h2 className="section-title text-[#3E362E]">To, co mnie<br />ukształtowało</h2>
          <div className="font-sans text-[#5E503F] space-y-6 leading-relaxed">
            <p>
              Moje doświadczenie zawodowe obejmuje pracę w różnych kontekstach
              terapeutycznych - od pracy indywidualnej, przez terapię par, po
              prowadzenie grup terapeutycznych.
            </p>
            <p>
              Nieustannie się rozwijam, uczestnicząc w szkoleniach, konferencjach
              i superwizjach, aby móc oferować najlepszą możliwą pomoc moim
              klientom.
            </p>
            <p>
              Wierzę, że każdy człowiek jest wyjątkowy i zasługuje na
              indywidualne podejście. Dlatego zawsze dostosowuję metody pracy
              do potrzeb konkretnej osoby.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;