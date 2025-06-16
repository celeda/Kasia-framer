
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, User, ShieldCheck, Smile, Brain, Users, MessageSquare } from "lucide-react";
import AnimatedElement from "@/components/shared/AnimatedElement";
import { EditableElement } from '@/components/shared/ContentEditable';

const ServiceIndividualPage = () => {

  const areasOfHelp = [
    "Trudności w relacjach interpersonalnych",
    "Niskie poczucie własnej wartości",
    "Doświadczanie silnego stresu, wypalenia",
    "Stany lękowe (np. paniczny, fobie, społeczny)",
    "Obniżony nastrój, depresja",
    "Trudności w radzeniu sobie z emocjami",
    "Problemy ze snem, zaburzenia odżywiania",
    "Doświadczanie kryzysu życiowego",
    "Chęć lepszego zrozumienia siebie",
    "Potrzeba rozwoju osobistego",
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
            <User size={80} className="text-primary opacity-80" />
          </div>
          <EditableElement path="serviceIndividualPage.main.title" elementType="h1" className="section-title">
            Psychoterapia Indywidualna
          </EditableElement>
          <EditableElement path="serviceIndividualPage.main.subtitle" elementType="p" className="text-lg md:text-xl font-sans text-muted-foreground max-w-3xl mx-auto text-balance">
            Indywidualne spotkania z terapeutą, skoncentrowane na Twoich osobistych potrzebach, trudnościach i celach. To bezpieczna przestrzeń do eksploracji siebie i pracy nad zmianą.
          </EditableElement>
        </section>
      </AnimatedElement>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-12 md:mb-16 items-center">
        <AnimatedElement type="image" className="order-2 md:order-1">
          <img  alt="Symbol indywidualnej terapii - spokojna osoba w ciepłym świetle" className="rounded-lg shadow-xl w-full h-auto max-h-[500px] object-cover border-4 border-background" src="https://images.unsplash.com/photo-1584460225699-f331649ead39?q=80&w=1920&auto=format&fit=crop" />
        </AnimatedElement>
        <AnimatedElement type="text" delay={0.1} className="order-1 md:order-2">
          <EditableElement path="serviceIndividualPage.forWhom.title" elementType="h2" className="section-subtitle">
            Dla kogo?
          </EditableElement>
          <EditableElement path="serviceIndividualPage.forWhom.paragraph1" elementType="p" className="font-sans text-muted-foreground mb-6 leading-relaxed text-balance">
            Psychoterapia indywidualna jest formą pomocy skierowaną do osób dorosłych oraz młodzieży (od 16. roku życia), które doświadczają różnego rodzaju trudności emocjonalnych, psychicznych lub interpersonalnych, a także dla tych, którzy pragną lepiej zrozumieć siebie i rozwijać swój potencjał.
          </EditableElement>
          <EditableElement path="serviceIndividualPage.forWhom.paragraph2" elementType="p" className="font-sans text-muted-foreground leading-relaxed text-balance">
            Niezależnie od tego, czy zmagasz się z konkretnym problemem, czy po prostu czujesz, że potrzebujesz wsparcia w swoim życiu – terapia indywidualna może być cennym doświadczeniem.
          </EditableElement>
        </AnimatedElement>
      </div>

      <AnimatedElement type="section" className="mb-12 md:mb-16">
        <EditableElement path="serviceIndividualPage.areas.title" elementType="h2" className="section-subtitle text-center">
          Obszary, w których mogę pomóc:
        </EditableElement>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5 font-sans text-muted-foreground max-w-4xl mx-auto mt-8">
          {areasOfHelp.map((area, i) => (
            <AnimatedElement type="item" delay={i * 0.05} key={i}>
               <li className="flex items-start p-3 bg-card rounded-md shadow-sm hover:shadow-md transition-shadow border border-border/50">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <EditableElement path={`serviceIndividualPage.areas.items[${i}]`} elementType="span" className="text-balance text-sm">
                  {area}
                </EditableElement>
              </li>
            </AnimatedElement>
          ))}
        </ul>
      </AnimatedElement>

      <AnimatedElement type="section" className="mb-12 md:mb-16 bg-card p-8 md:p-12 rounded-lg shadow-lg border border-border/50">
        <EditableElement path="serviceIndividualPage.process.title" elementType="h2" className="section-subtitle">
          Jak wygląda proces?
        </EditableElement>
        <div className="font-sans text-muted-foreground space-y-5 leading-relaxed text-balance">
          <div className="flex items-start">
            <MessageSquare className="h-8 w-8 text-primary mr-4 mt-1 flex-shrink-0 opacity-80" />
            <div>
              <EditableElement path="serviceIndividualPage.process.consultations.title" elementType="h3" className="font-semibold text-foreground mb-1">
                Pierwsze konsultacje (1-3 spotkania)
              </EditableElement>
              <EditableElement path="serviceIndividualPage.process.consultations.description" elementType="p">
                Służą wzajemnemu poznaniu się, omówieniu trudności oraz ustaleniu celów terapii. To także czas na podjęcie decyzji o dalszej współpracy.
              </EditableElement>
            </div>
          </div>
           <div className="flex items-start">
            <ShieldCheck className="h-8 w-8 text-primary mr-4 mt-1 flex-shrink-0 opacity-80" />
            <div>
              <EditableElement path="serviceIndividualPage.process.sessions.title" elementType="h3" className="font-semibold text-foreground mb-1">
                Sesje terapeutyczne
              </EditableElement>
              <EditableElement path="serviceIndividualPage.process.sessions.description" elementType="p">
                Regularne spotkania (zazwyczaj raz w tygodniu) trwające 50 minut. Pracujemy nad realizacją ustalonych celów poprzez rozmowę i techniki terapeutyczne.
              </EditableElement>
            </div>
          </div>
          <EditableElement path="serviceIndividualPage.process.duration" elementType="p">
            <strong>Czas trwania terapii:</strong> Jest indywidualny i zależy od rodzaju problemu oraz potrzeb klienta. Może to być terapia krótkoterminowa (kilka-kilkanaście spotkań) lub długoterminowa.
          </EditableElement>
          <EditableElement path="serviceIndividualPage.process.ending" elementType="p">
            <strong>Zakończenie terapii:</strong> Decyzja o zakończeniu terapii jest podejmowana wspólnie, gdy cele zostaną osiągnięte lub gdy poczujesz gotowość na samodzielne radzenie sobie z wyzwaniami.
          </EditableElement>
        </div>
      </AnimatedElement>

      <AnimatedElement type="section" className="text-center parallax-bg py-16 rounded-lg shadow-inner" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534531234200-9539f04220f8?q=80&w=1920&auto=format&fit=crop')"}}>
        <div className="absolute inset-0 bg-background/70 dark:bg-background/80 backdrop-blur-sm rounded-lg"></div>
        <div className="relative z-10 max-w-xl mx-auto px-4">
          <EditableElement path="serviceIndividualPage.cta.text" elementType="p" className="font-serif text-xl md:text-2xl text-foreground/90 dark:text-foreground/80 mb-8 text-balance">
            Jeśli czujesz, że psychoterapia indywidualna może być dla Ciebie pomocna, zapraszam do kontaktu. Razem możemy odkryć Twoją drogę do lepszego samopoczucia.
          </EditableElement>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Link to="/kontakt">
              <EditableElement path="serviceIndividualPage.cta.buttonText" elementType="span">Umów się na konsultację</EditableElement>
            </Link>
          </Button>
        </div>
      </AnimatedElement>
    </motion.div>
  );
};

export default ServiceIndividualPage;
