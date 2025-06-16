
import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, ChevronDown, Users, Heart, Brain, HeartHandshake as Handshake } from 'lucide-react';
import AnimatedElement from "@/components/shared/AnimatedElement";
import { EditableElement } from '@/components/shared/ContentEditable';

const services = [
  {
    title: "Psychoterapia indywidualna",
    description: "Dla osób dorosłych i młodzieży. Praca nad osobistymi trudnościami, rozwojem i zrozumieniem siebie.",
    icon: <Handshake size={48} className="text-primary group-hover:scale-110 transition-transform" />,
    link: "/uslugi/psychoterapia-indywidualna",
    bgColor: "bg-card",
    textColor: "text-primary"
  },
  {
    title: "Psychoterapia par i relacji",
    description: "Wsparcie dla par w kryzysach, problemach komunikacyjnych i budowaniu zdrowych relacji.",
    icon: <Users size={48} className="text-primary group-hover:scale-110 transition-transform" />,
    link: "/uslugi/psychoterapia-par",
    bgColor: "bg-card",
    textColor: "text-primary"
  },
  {
    title: "Stany lękowe i depresyjne",
    description: "Pomoc w radzeniu sobie z lękiem, obniżonym nastrojem, stresem i wypaleniem.",
    icon: <Heart size={48} className="text-primary group-hover:scale-110 transition-transform" />, 
    link: "/uslugi/psychoterapia-indywidualna", 
    bgColor: "bg-card",
    textColor: "text-primary"
  },
  {
    title: "Traumatyczne doświadczenia",
    description: "Terapia skoncentrowana na przepracowaniu traumy i odzyskaniu równowagi psychicznej.",
    icon: <Brain size={48} className="text-primary group-hover:scale-110 transition-transform" />,
    link: "/uslugi/psychoterapia-indywidualna",
    bgColor: "bg-card",
    textColor: "text-primary"
  },
];

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const heroImageScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.97]);
  const heroImageOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.6]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.1], ["0%", "-30%"]);

  const mainImageUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/08c20cbd-97d3-4d2e-9224-e9b427c28a3e/9ebcb36c72b0e545a14b1e98d0f70ffa.jpg";
  const aboutMeImageUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/08c20cbd-97d3-4d2e-9224-e9b427c28a3e/5c74e2cd94a8640a2f2275d697827b86.jpg";

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="animate-fadeIn">
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background dark:from-background dark:via-secondary/10 dark:to-background">
        <div className="absolute inset-0">
          <motion.img
            src={mainImageUrl}
            alt="Katarzyna Celeda - profesjonalne, ciepłe zdjęcie portretowe"
            className="object-cover w-full h-full object-center sm:object-[center_30%] md:object-[center_25%]"
            style={{
              scale: heroImageScale,
              opacity: heroImageOpacity,
            }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent dark:from-background dark:via-background/80"></div>
        </div>

        <div className="relative z-10 page-container pt-32 pb-16 md:pt-40 md:pb-20 text-center flex flex-col items-center justify-end flex-grow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            style={{ opacity: heroTextOpacity, y: heroTextY }}
            className="bg-background/80 dark:bg-background/70 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-2xl max-w-3xl"
          >
            <EditableElement path="homePage.hero.title" >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-foreground leading-tight text-balance mb-4">
                Katarzyna Celeda
              </h1>
            </EditableElement>
            <EditableElement path="homePage.hero.subtitle" >
              <p className="text-lg md:text-xl font-sans text-muted-foreground mb-8 text-balance">
                Psychoterapeutka. Twoja przestrzeń do rozmowy, zrozumienia i wzrostu. Odkryjmy razem Twoją ścieżkę.
              </p>
            </EditableElement>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <Link to="/o-mnie">
                  <EditableElement path="homePage.hero.button1Text" elementType="span">Poznaj mnie</EditableElement> <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:border-primary/70 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <Link to="/kontakt">
                  <EditableElement path="homePage.hero.button2Text" elementType="span">Umów spotkanie</EditableElement>
                </Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.button
            onClick={scrollToServices}
            className="mt-12 md:mt-16 text-muted-foreground hover:text-primary transition-colors animate-bounce"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
            aria-label="Przewiń do usług"
          >
            <ChevronDown className="h-10 w-10" />
          </motion.button>
        </div>
      </section>

      <section id="services-section" className="py-16 md:py-24 bg-background">
        <div className="page-container">
          <AnimatedElement type="title">
            <EditableElement path="homePage.services.title" elementType="h2" className="section-title">
              W czym mogę być pomocna?
            </EditableElement>
          </AnimatedElement>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedElement type="item" delay={index * 0.1} key={index}>
                <Link to={service.link} className={`block p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 ${service.bgColor} border border-border/50 group`}>
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="mb-5 p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      {service.icon}
                    </div>
                    <EditableElement path={`homePage.services.items[${index}].title`} elementType="h3" className={`text-lg md:text-xl font-serif font-medium mb-3 ${service.textColor}`}>
                      {service.title}
                    </EditableElement>
                    <EditableElement path={`homePage.services.items[${index}].description`} elementType="p" className="font-sans text-sm text-muted-foreground mb-5 flex-grow">
                      {service.description}
                    </EditableElement>
                    <span className={`inline-flex items-center font-sans text-sm ${service.textColor} group-hover:underline`}>
                      <EditableElement path={`homePage.services.items[${index}].linkText`} elementType="span">Czytaj więcej</EditableElement> <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30 dark:bg-secondary/50">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimatedElement type="image" className="relative">
              <div className="absolute -top-3 -left-3 w-24 h-24 bg-primary/10 rounded-full animate-subtleFloat opacity-80 dark:opacity-60 -z-10"></div>
              <div className="absolute -bottom-5 -right-5 w-20 h-20 border-4 border-primary/20 rounded-full animate-subtleFloat animation-delay-1000 opacity-80 dark:opacity-60 -z-10"></div>
              <img  alt="Katarzyna Celeda - zdjęcie portretowe, przyjazne i profesjonalne" className="rounded-lg shadow-xl w-full h-auto max-h-[550px] object-cover relative z-10" src={aboutMeImageUrl} />
            </AnimatedElement>
            <AnimatedElement type="text" delay={0.2}>
              <EditableElement path="homePage.aboutMe.title" elementType="h2" className="section-subtitle text-left">
                Poznajmy się bliżej
              </EditableElement>
              <EditableElement path="homePage.aboutMe.paragraph1" elementType="p" className="font-sans text-muted-foreground mb-6 leading-relaxed text-balance">
                Psychoterapia to dla mnie spotkanie – żywe, autentyczne, czasem trudne, ale zawsze pełne sensu. Zależy mi, by ta przestrzeń mogła służyć temu, co pojawia się tutaj, a nie temu, co myślę, z góry zakładam.
              </EditableElement>
              <EditableElement path="homePage.aboutMe.paragraph2" elementType="p" className="font-sans text-muted-foreground mb-8 leading-relaxed text-balance">
                Pracuję z osobami, które doświadczają kryzysu, straty, trudności rozwojowych. Ale też z tymi, którzy po prostu chcą lepiej poznać i zrozumieć siebie.
              </EditableElement>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <Link to="/o-mnie">
                  <EditableElement path="homePage.aboutMe.buttonText" elementType="span">Moja filozofia pracy</EditableElement> <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-transparent to-primary/0 dark:from-primary/2 dark:via-transparent dark:to-transparent">
         <div className="page-container text-center">
          <AnimatedElement type="title">
            <Zap className="h-16 w-16 text-primary mx-auto mb-6 opacity-80" />
            <EditableElement path="homePage.cta.title" elementType="h2" className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-6 text-balance">
              Zrób pierwszy krok ku zmianie
            </EditableElement>
            <EditableElement path="homePage.cta.subtitle" elementType="p" className="text-lg font-sans text-muted-foreground max-w-xl mx-auto mb-10 text-balance">
              Niezależnie od tego, gdzie jesteś na swojej drodze, zasługujesz na wsparcie. Skontaktuj się, aby dowiedzieć się więcej o tym, jak możemy razem pracować.
            </EditableElement>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Link to="/kontakt">
                <EditableElement path="homePage.cta.buttonText" elementType="span">Umów bezpłatną konsultację wstępną</EditableElement>
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
