
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedElement from "@/components/shared/AnimatedElement";
import { Users, MessageCircle, HeartCrack, GitFork } from "lucide-react";
import { EditableElement } from '@/components/shared/ContentEditable';

const ServiceCouplesPage = () => {
  const features = [
    {
      icon: <MessageCircle size={32} className="text-primary mb-4" />,
      title: "Poprawa komunikacji",
      description: "Nauka efektywnego wyrażania potrzeb, uczuć i oczekiwań oraz aktywnego słuchania partnera.",
    },
    {
      icon: <GitFork size={32} className="text-primary mb-4 transform -rotate-90" />,
      title: "Rozwiązywanie konfliktów",
      description: "Wypracowanie konstruktywnych sposobów radzenia sobie z nieporozumieniami i sporami.",
    },
    {
      icon: <HeartCrack size={32} className="text-primary mb-4" />, 
      title: "Odbudowa bliskości",
      description: "Praca nad wzmocnieniem więzi emocjonalnej, intymności i poczucia bezpieczeństwa w związku.",
    },
  ];

  return (
    <motion.div
      className="page-container animate-fadeIn pt-28 md:pt-36"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatedElement type="title">
        <section className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-6">
            <Users size={80} className="text-primary opacity-80" />
          </div>
          <EditableElement path="serviceCouplesPage.main.title" elementType="h1" className="section-title">
            Psychoterapia Par i Relacji
          </EditableElement>
          <EditableElement path="serviceCouplesPage.main.subtitle" elementType="p" className="text-lg md:text-xl font-sans text-muted-foreground max-w-3xl mx-auto text-balance">
            Terapia dla par to przestrzeń do wspólnej pracy nad trudnościami w związku, poprawy komunikacji i odbudowy wzajemnego zrozumienia oraz bliskości.
          </EditableElement>
        </section>
      </AnimatedElement>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-12 md:mb-16 items-center">
        <AnimatedElement type="image">
           <img  alt="Para rozmawiająca w przyjaznej, jasnej atmosferze" className="rounded-lg shadow-xl w-full h-auto max-h-[500px] object-cover border-4 border-background" src="https://images.unsplash.com/photo-1567440054400-9548902f9028?q=80&w=1920&auto=format&fit=crop" />
        </AnimatedElement>
        <AnimatedElement type="text" delay={0.1}>
          <EditableElement path="serviceCouplesPage.whenToConsider.title" elementType="h2" className="section-subtitle">
            Kiedy warto skorzystać?
          </EditableElement>
          <EditableElement path="serviceCouplesPage.whenToConsider.intro" elementType="p" className="font-sans text-muted-foreground mb-4 leading-relaxed text-balance">
            Psychoterapia par jest pomocna, gdy partnerzy doświadczają:
          </EditableElement>
          <ul className="font-sans text-muted-foreground list-disc list-inside space-y-1.5 mb-6 text-balance text-sm">
            <EditableElement path="serviceCouplesPage.whenToConsider.listItem1" elementType="li">Częstych kłótni i trudności w porozumieniu się</EditableElement>
            <EditableElement path="serviceCouplesPage.whenToConsider.listItem2" elementType="li">Poczucia oddalenia emocjonalnego, braku bliskości</EditableElement>
            <EditableElement path="serviceCouplesPage.whenToConsider.listItem3" elementType="li">Problemów z zaufaniem, np. po zdradzie</EditableElement>
            <EditableElement path="serviceCouplesPage.whenToConsider.listItem4" elementType="li">Trudności związanych z ważnymi zmianami życiowymi</EditableElement>
            <EditableElement path="serviceCouplesPage.whenToConsider.listItem5" elementType="li">Problemów w sferze intymnej</EditableElement>
            <EditableElement path="serviceCouplesPage.whenToConsider.listItem6" elementType="li">Rozważania o rozstaniu lub chęci poprawy jakości związku</EditableElement>
          </ul>
          <EditableElement path="serviceCouplesPage.whenToConsider.outro" elementType="p" className="font-sans text-muted-foreground leading-relaxed text-balance text-sm">
            Terapia par może być również formą profilaktyki, pomagającą wzmocnić fundamenty związku i lepiej przygotować się na przyszłe wyzwania.
          </EditableElement>
        </AnimatedElement>
      </div>
      
      <AnimatedElement type="section" className="mb-12 md:mb-16">
        <EditableElement path="serviceCouplesPage.goals.title" elementType="h2" className="section-subtitle text-center">
          Główne cele terapii par:
        </EditableElement>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
          {features.map((feature, i) => (
            <AnimatedElement type="item" delay={i * 0.1} key={i}>
              <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-border/50 text-center flex flex-col items-center h-full">
                <div className="p-3 bg-primary/10 rounded-full mb-4">{feature.icon}</div>
                <EditableElement path={`serviceCouplesPage.goals.items[${i}].title`} elementType="h3" className="text-lg font-serif font-medium text-foreground mb-2">
                  {feature.title}
                </EditableElement>
                <EditableElement path={`serviceCouplesPage.goals.items[${i}].description`} elementType="p" className="font-sans text-sm text-muted-foreground flex-grow text-balance">
                  {feature.description}
                </EditableElement>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </AnimatedElement>

      <AnimatedElement type="section" className="mb-12 md:mb-16 bg-card p-8 md:p-12 rounded-lg shadow-lg border border-border/50">
        <EditableElement path="serviceCouplesPage.process.title" elementType="h2" className="section-subtitle">
          Przebieg terapii par
        </EditableElement>
        <div className="font-sans text-muted-foreground space-y-4 leading-relaxed text-balance">
          <EditableElement path="serviceCouplesPage.process.consultations" elementType="p">
            <strong>Konsultacje wstępne:</strong> Pierwsze spotkania (zwykle 1-2) odbywają się z obojgiem partnerów. Służą omówieniu problemów, oczekiwań oraz ustaleniu wspólnych celów terapeutycznych.
          </EditableElement>
          <EditableElement path="serviceCouplesPage.process.sessions" elementType="p">
            <strong>Sesje terapeutyczne:</strong> Regularne spotkania pary z terapeutą, trwające zazwyczaj 60-90 minut, odbywające się co 1-2 tygodnie. Terapeuta pełni rolę bezstronnego moderatora.
          </EditableElement>
          <EditableElement path="serviceCouplesPage.process.methods" elementType="p">
            <strong>Metody pracy:</strong> Terapia par wykorzystuje różnorodne techniki, m.in. ćwiczenia komunikacyjne, psychoedukację, pracę nad zmianą wzorców myślenia i zachowania.
          </EditableElement>
          <EditableElement path="serviceCouplesPage.process.commitment" elementType="p">
            <strong>Zaangażowanie obojga partnerów:</strong> Skuteczność terapii par w dużej mierze zależy od motywacji i zaangażowania obojga partnerów w proces zmiany.
          </EditableElement>
        </div>
      </AnimatedElement>

      <AnimatedElement type="section" className="text-center">
        <EditableElement path="serviceCouplesPage.cta.text" elementType="p" className="font-serif text-xl md:text-2xl text-primary/90 mb-8 text-balance">
          Jeśli chcecie wspólnie zadbać o Wasz związek i zbudować bardziej satysfakcjonującą relację, zapraszam na konsultację.
        </EditableElement>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <Link to="/kontakt">
            <EditableElement path="serviceCouplesPage.cta.buttonText" elementType="span">Umówcie się na spotkanie</EditableElement>
          </Link>
        </Button>
      </AnimatedElement>
    </motion.div>
  );
};

export default ServiceCouplesPage;
