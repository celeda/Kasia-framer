
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedElement from "@/components/shared/AnimatedElement";
import { Smile, School, ShieldAlert, Brain, MessageSquare, UserCheck, ThumbsUp, Zap, Users } from "lucide-react";
import { EditableElement } from '@/components/shared/ContentEditable';

const ServiceYouthPage = () => {
  const commonProblems = [
    { text: "Trudności w relacjach rówieśniczych", icon: <Users size={18} className="text-primary mr-2 flex-shrink-0 opacity-70" /> },
    { text: "Problemy szkolne i stres", icon: <School size={18} className="text-primary mr-2 flex-shrink-0 opacity-70" /> },
    { text: "Niskie poczucie własnej wartości", icon: <ShieldAlert size={18} className="text-primary mr-2 flex-shrink-0 opacity-70" /> },
    { text: "Lęki, fobie, zamartwianie się", icon: <Brain size={18} className="text-primary mr-2 flex-shrink-0 opacity-70" /> },
    { text: "Obniżony nastrój, smutek, apatia", icon: <Smile size={18} className="text-primary mr-2 flex-shrink-0 opacity-70" /> },
    { text: "Trudności w radzeniu sobie z emocjami", icon: <MessageSquare size={18} className="text-primary mr-2 flex-shrink-0 opacity-70" /> },
    { text: "Problemy z zachowaniem, bunt", icon: <Zap size={18} className="text-primary mr-2 flex-shrink-0 opacity-70" /> },
    { text: "Doświadczanie przemocy (cyberprzemoc)", icon: <ShieldAlert size={18} className="text-primary mr-2 flex-shrink-0 opacity-70" /> },
    { text: "Wyzwania okresu dojrzewania", icon: <UserCheck size={18} className="text-primary mr-2 flex-shrink-0 opacity-70" /> },
    { text: "Uzależnienia (np. od internetu)", icon: <Zap size={18} className="text-primary mr-2 flex-shrink-0 opacity-70" /> },
  ];

  const benefits = [
    {
      icon: <UserCheck size={24} className="text-primary mr-3 mt-1 flex-shrink-0" />,
      title: "Indywidualne podejście",
      description: "Terapia jest zawsze dostosowana do unikalnych potrzeb i osobowości.",
    },
    {
      icon: <ThumbsUp size={24} className="text-primary mr-3 mt-1 flex-shrink-0" />,
      title: "Pozytywne wzmocnienie",
      description: "Skupiamy się na mocnych stronach, budując poczucie kompetencji.",
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
            <Smile size={80} className="text-primary opacity-80" />
          </div>
          <EditableElement path="serviceYouthPage.main.title" elementType="h1" className="section-title">
            Psychoterapia Młodzieży
          </EditableElement>
          <EditableElement path="serviceYouthPage.main.subtitle" elementType="p" className="text-lg md:text-xl font-sans text-muted-foreground max-w-3xl mx-auto text-balance">
            Okres dojrzewania to czas wielu wyzwań i intensywnych zmian. Psychoterapia młodzieży oferuje wsparcie w radzeniu sobie z trudnościami emocjonalnymi, społecznymi i adaptacyjnymi.
          </EditableElement>
        </section>
      </AnimatedElement>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-12 md:mb-16 items-center">
        <AnimatedElement type="image" className="order-2 md:order-1">
          <img  alt="Nastolatek w zamyśleniu, w jasnym otoczeniu" className="rounded-lg shadow-xl w-full h-auto max-h-[500px] object-cover border-4 border-background" src="https://images.unsplash.com/photo-1580130379628-e709e769d498?q=80&w=1920&auto=format&fit=crop" />
        </AnimatedElement>
        <AnimatedElement type="text" delay={0.1} className="order-1 md:order-2">
          <EditableElement path="serviceYouthPage.support.title" elementType="h2" className="section-subtitle">
            Wsparcie dla Młodych Ludzi
          </EditableElement>
          <EditableElement path="serviceYouthPage.support.paragraph1" elementType="p" className="font-sans text-muted-foreground mb-6 leading-relaxed text-balance">
            Psychoterapia młodzieży (zazwyczaj od 12./13. do 18. roku życia) to forma pomocy dostosowana do specyficznych potrzeb tego okresu. Celem jest stworzenie bezpiecznej przestrzeni, w której młody człowiek może otwarcie mówić o swoich problemach.
          </EditableElement>
          <EditableElement path="serviceYouthPage.support.paragraph2" elementType="p" className="font-sans text-muted-foreground leading-relaxed text-balance">
            Terapeuta pomaga nastolatkowi lepiej zrozumieć siebie, rozwijać umiejętności radzenia sobie ze stresem i trudnymi emocjami, a także budować zdrowe relacje.
          </EditableElement>
        </AnimatedElement>
      </div>

      <AnimatedElement type="section" className="mb-12 md:mb-16">
        <EditableElement path="serviceYouthPage.problems.title" elementType="h2" className="section-subtitle text-center">
          Typowe problemy, z którymi zgłasza się młodzież:
        </EditableElement>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5 mt-8 font-sans text-muted-foreground max-w-5xl mx-auto">
          {commonProblems.map((problem, i) => (
             <AnimatedElement type="item" delay={i * 0.05} key={i}>
              <div className="bg-card p-4 rounded-md shadow-sm hover:shadow-md transition-shadow border border-border/50 flex items-center">
                {problem.icon}
                <EditableElement path={`serviceYouthPage.problems.items[${i}].text`} elementType="span" className="text-balance text-sm">
                  {problem.text}
                </EditableElement>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </AnimatedElement>

      <AnimatedElement type="section" className="mb-12 md:mb-16 bg-card p-8 md:p-12 rounded-lg shadow-lg border border-border/50">
        <EditableElement path="serviceYouthPage.process.title" elementType="h2" className="section-subtitle">
          Jak przebiega terapia młodzieży?
        </EditableElement>
        <div className="font-sans text-muted-foreground space-y-4 leading-relaxed text-balance">
          <EditableElement path="serviceYouthPage.process.consultation" elementType="p">
            <strong>Pierwsza konsultacja:</strong> Zazwyczaj odbywa się z rodzicami/opiekunami oraz nastolatkiem. Celem jest zebranie informacji o problemie i ustalenie zasad współpracy.
          </EditableElement>
          <EditableElement path="serviceYouthPage.process.sessions" elementType="p">
            <strong>Indywidualne sesje z nastolatkiem:</strong> Regularne spotkania (50 minut), podczas których terapeuta pracuje bezpośrednio z młodym człowiekiem, używając metod dostosowanych do jego wieku.
          </EditableElement>
          <EditableElement path="serviceYouthPage.process.parentsCooperation" elementType="p">
            <strong>Współpraca z rodzicami/opiekunami:</strong> Okresowe spotkania z rodzicami w celu omówienia postępów i udzielenia wskazówek, z poszanowaniem prywatności nastolatka.
          </EditableElement>
          <EditableElement path="serviceYouthPage.process.confidentiality" elementType="p">
            <strong>Poufność:</strong> Sesje terapeutyczne są objęte tajemnicą zawodową, tworząc atmosferę zaufania.
          </EditableElement>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <AnimatedElement type="item" delay={0.1 + i * 0.1} key={benefit.title}>
                <div className="flex items-start p-4 bg-primary/5 rounded-md border border-primary/20 h-full">
                    {benefit.icon}
                    <div>
                        <EditableElement path={`serviceYouthPage.benefits.items[${i}].title`} elementType="h3" className="font-serif text-md text-foreground mb-1">
                          {benefit.title}
                        </EditableElement>
                        <EditableElement path={`serviceYouthPage.benefits.items[${i}].description`} elementType="p" className="text-xs text-muted-foreground text-balance">
                          {benefit.description}
                        </EditableElement>
                    </div>
                </div>
              </AnimatedElement>
            ))}
        </div>
      </AnimatedElement>

      <AnimatedElement type="section" className="text-center">
        <EditableElement path="serviceYouthPage.cta.text" elementType="p" className="font-serif text-xl md:text-2xl text-primary/90 mb-8 text-balance">
          Jeśli jesteś rodzicem zaniepokojonym samopoczuciem swojego dziecka, lub nastolatkiem szukającym wsparcia, zapraszam do kontaktu.
        </EditableElement>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <Link to="/kontakt">
            <EditableElement path="serviceYouthPage.cta.buttonText" elementType="span">Skontaktuj się</EditableElement>
          </Link>
        </Button>
      </AnimatedElement>
    </motion.div>
  );
};

export default ServiceYouthPage;
