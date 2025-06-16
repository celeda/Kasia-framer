
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedElement from "@/components/shared/AnimatedElement";
import { Home, MessageSquare, GitFork, HeartHandshake, ShieldQuestion } from "lucide-react";
import { EditableElement } from '@/components/shared/ContentEditable';

const ServiceFamilyPage = () => {
 const benefits = [
    {
      icon: <MessageSquare size={28} className="text-primary mb-3" />,
      title: "Poprawa komunikacji",
      description: "Nauka otwartego i szanującego wyrażania myśli, uczuć i potrzeb przez wszystkich członków rodziny.",
    },
    {
      icon: <GitFork size={28} className="text-primary mb-3 transform -rotate-90" />,
      title: "Rozwiązywanie konfliktów",
      description: "Wspólne poszukiwanie rozwiązań trudności, które wpływają na funkcjonowanie całej rodziny.",
    },
    {
      icon: <HeartHandshake size={28} className="text-primary mb-3" />,
      title: "Wzmacnianie więzi",
      description: "Odbudowa lub budowanie silniejszych, bardziej wspierających relacji między członkami rodziny.",
    },
    {
      icon: <ShieldQuestion size={28} className="text-primary mb-3" />,
      title: "Wsparcie w kryzysach",
      description: "Pomoc rodzinie w adaptacji do trudnych sytuacji życiowych (np. choroba, rozwód, przeprowadzka).",
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
            <Home size={80} className="text-primary opacity-80" />
          </div>
          <EditableElement path="serviceFamilyPage.main.title" elementType="h1" className="section-title">
            Psychoterapia Rodzinna
          </EditableElement>
          <EditableElement path="serviceFamilyPage.main.subtitle" elementType="p" className="text-lg md:text-xl font-sans text-muted-foreground max-w-3xl mx-auto text-balance">
            Terapia rodzinna to forma pomocy psychologicznej, w której uczestniczą członkowie rodziny. Celem jest poprawa wzajemnych relacji, komunikacji oraz rozwiązanie problemów wpływających na cały system rodzinny.
          </EditableElement>
        </section>
      </AnimatedElement>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-12 md:mb-16 items-center">
        <AnimatedElement type="image">
           <img  alt="Rodzina spędzająca razem czas w jasnym, przytulnym wnętrzu" className="rounded-lg shadow-xl w-full h-auto max-h-[500px] object-cover border-4 border-background" src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?q=80&w=1920&auto=format&fit=crop" />
        </AnimatedElement>
        <AnimatedElement type="text" delay={0.1}>
          <EditableElement path="serviceFamilyPage.whenToConsider.title" elementType="h2" className="section-subtitle">
            Kiedy rodzina może potrzebować wsparcia?
          </EditableElement>
          <EditableElement path="serviceFamilyPage.whenToConsider.intro" elementType="p" className="font-sans text-muted-foreground mb-4 leading-relaxed text-balance">
            Terapia rodzinna jest wskazana, gdy:
          </EditableElement>
          <ul className="font-sans text-muted-foreground list-disc list-inside space-y-1.5 mb-6 text-balance text-sm">
            <EditableElement path="serviceFamilyPage.whenToConsider.listItem1" elementType="li">W rodzinie występują częste konflikty, napięcia</EditableElement>
            <EditableElement path="serviceFamilyPage.whenToConsider.listItem2" elementType="li">Członkowie rodziny mają trudności w porozumiewaniu się</EditableElement>
            <EditableElement path="serviceFamilyPage.whenToConsider.listItem3" elementType="li">Rodzina przeżywa kryzys (np. choroba, śmierć, problemy finansowe)</EditableElement>
            <EditableElement path="serviceFamilyPage.whenToConsider.listItem4" elementType="li">Problemy psychiczne lub uzależnienie jednego członka wpływają na pozostałych</EditableElement>
            <EditableElement path="serviceFamilyPage.whenToConsider.listItem5" elementType="li">Pojawiają się trudności wychowawcze</EditableElement>
            <EditableElement path="serviceFamilyPage.whenToConsider.listItem6" elementType="li">Rodzina przechodzi przez ważne zmiany (np. nowy członek, rozwód)</EditableElement>
          </ul>
        </AnimatedElement>
      </div>
      
      <AnimatedElement type="section" className="mb-12 md:mb-16">
        <EditableElement path="serviceFamilyPage.benefits.title" elementType="h2" className="section-subtitle text-center">
          Korzyści z terapii rodzinnej:
        </EditableElement>
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mt-8">
          {benefits.map((benefit, i) => (
            <AnimatedElement type="item" delay={i * 0.1} key={i}>
              <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-border/50 flex flex-col items-start h-full">
                <div className="p-2.5 bg-primary/10 rounded-full mb-3">{benefit.icon}</div>
                <EditableElement path={`serviceFamilyPage.benefits.items[${i}].title`} elementType="h3" className="text-md font-serif font-medium text-foreground mb-1.5">
                  {benefit.title}
                </EditableElement>
                <EditableElement path={`serviceFamilyPage.benefits.items[${i}].description`} elementType="p" className="font-sans text-xs text-muted-foreground flex-grow text-balance">
                  {benefit.description}
                </EditableElement>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </AnimatedElement>

      <AnimatedElement type="section" className="mb-12 md:mb-16 bg-card p-8 md:p-12 rounded-lg shadow-lg border border-border/50">
        <EditableElement path="serviceFamilyPage.process.title" elementType="h2" className="section-subtitle">
          Jak wygląda terapia rodzinna?
        </EditableElement>
        <div className="font-sans text-muted-foreground space-y-4 leading-relaxed text-balance">
          <EditableElement path="serviceFamilyPage.process.participants" elementType="p">
            <strong>Uczestnicy:</strong> W sesjach mogą uczestniczyć wszyscy członkowie rodziny mieszkający razem, lub tylko niektórzy, w zależności od problemu.
          </EditableElement>
          <EditableElement path="serviceFamilyPage.process.sessions" elementType="p">
            <strong>Przebieg sesji:</strong> Spotkania (60-90 minut) co 2-4 tygodnie. Terapeuta pomaga zidentyfikować wzorce komunikacji i interakcji. Wspólnie poszukuje się nowych, bardziej konstruktywnych sposobów funkcjonowania.
          </EditableElement>
          <EditableElement path="serviceFamilyPage.process.therapistRole" elementType="p">
            <strong>Rola terapeuty:</strong> Terapeuta jest neutralny, tworzy bezpieczną atmosferę, moderuje rozmowę, pomaga zrozumieć perspektywę innych.
          </EditableElement>
          <EditableElement path="serviceFamilyPage.process.systemicApproach" elementType="p">
            <strong>Podejście systemowe:</strong> Rodzina jest systemem, w którym członkowie wzajemnie na siebie wpływają. Zmiana u jednej osoby może prowadzić do zmian w całym systemie.
          </EditableElement>
        </div>
      </AnimatedElement>

      <AnimatedElement type="section" className="text-center">
        <EditableElement path="serviceFamilyPage.cta.text" elementType="p" className="font-serif text-xl md:text-2xl text-primary/90 mb-8 text-balance">
          Jeśli czujecie, że Wasza rodzina potrzebuje wsparcia w pokonywaniu trudności i budowaniu lepszych relacji, zapraszam na konsultację.
        </EditableElement>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <Link to="/kontakt">
            <EditableElement path="serviceFamilyPage.cta.buttonText" elementType="span">Umówcie konsultację rodzinną</EditableElement>
          </Link>
        </Button>
      </AnimatedElement>
    </motion.div>
  );
};

export default ServiceFamilyPage;
