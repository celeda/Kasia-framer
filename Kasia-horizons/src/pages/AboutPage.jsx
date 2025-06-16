
import React from "react";
import { motion } from "framer-motion";
import AnimatedElement from "@/components/shared/AnimatedElement";
import { BookOpen } from "lucide-react";
import { EditableElement } from '@/components/shared/ContentEditable';

const AboutPage = () => {
  const mainAboutImageUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/08c20cbd-97d3-4d2e-9224-e9b427c28a3e/3511dd402cf2200d28943d2ea37d4c3d.jpg";
  const quoteImageUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/08c20cbd-97d3-4d2e-9224-e9b427c28a3e/91294fd7f3c28fcb856088f48627c3de.jpg";


  return (
    <div className="page-container animate-fadeIn pt-28 md:pt-36">
      <AnimatedElement type="title">
        <section className="text-center mb-16 md:mb-20">
          <EditableElement path="aboutPage.main.title" elementType="h1" className="section-title">
            O Mnie
          </EditableElement>
          <EditableElement path="aboutPage.main.subtitle" elementType="p" className="text-lg md:text-xl font-sans text-muted-foreground max-w-3xl mx-auto text-balance">
            Nazywam się Katarzyna Celeda. Jestem psycholożką i certyfikowaną psychoterapeutką. Moją pasją jest towarzyszenie ludziom w ich drodze do głębszego zrozumienia siebie i budowania bardziej satysfakcjonującego życia.
          </EditableElement>
        </section>
      </AnimatedElement>

      <div className="grid md:grid-cols-5 gap-12 md:gap-16 mb-16 md:mb-20 items-start">
        <AnimatedElement type="image" className="md:col-span-2 relative">
          <div className="absolute -top-2 -left-2 w-16 h-16 bg-accent/30 rounded-full animate-subtleFloat opacity-70 -z-10"></div>
          <img  alt="Katarzyna Celeda - profesjonalne zdjęcie portretowe, ciepłe i przyjazne" className="rounded-lg shadow-xl w-full h-auto object-cover relative z-0" src={mainAboutImageUrl} />
           <div className="absolute -bottom-3 -right-3 w-20 h-20 border-4 border-accent/40 rounded-full animate-subtleFloat animation-delay-1000 opacity-70 -z-10"></div>
        </AnimatedElement>
        <AnimatedElement type="text" delay={0.1} className="md:col-span-3">
          <EditableElement path="aboutPage.experience.title" elementType="h2" className="section-subtitle">
            Wykształcenie i Doświadczenie
          </EditableElement>
          <div className="font-sans text-muted-foreground space-y-4 leading-relaxed text-balance">
            <EditableElement path="aboutPage.experience.paragraph1" elementType="p">
              Ukończyłam jednolite studia magisterskie z psychologii na Uniwersytecie Warszawskim. Następnie kontynuowałam naukę w Szkole Psychoterapii Poznawczo-Behawioralnej Uniwersytetu SWPS, zdobywając kompleksowe przygotowanie do prowadzenia terapii.
            </EditableElement>
            <EditableElement path="aboutPage.experience.paragraph2" elementType="p">
              Posiadam wieloletnie doświadczenie w pracy klinicznej, zdobywane m.in. w poradniach zdrowia psychicznego oraz na oddziałach szpitalnych. Regularnie uczestniczę w superwizjach oraz szkoleniach, aby stale podnosić swoje kwalifikacje i oferować pomoc na najwyższym poziomie.
            </EditableElement>
            <EditableElement path="aboutPage.experience.paragraph3" elementType="p">
              Jestem członkinią Polskiego Towarzystwa Terapii Poznawczej i Behawioralnej (PTTPB). W swojej pracy kieruję się zasadami kodeksu etycznego psychoterapeuty.
            </EditableElement>
          </div>
        </AnimatedElement>
      </div>

      <AnimatedElement type="section" className="mb-16 md:mb-20 bg-card p-8 md:p-12 rounded-lg shadow-lg border border-border/50">
        <EditableElement path="aboutPage.philosophy.title" elementType="h2" className="section-subtitle text-center">
          To, co mnie ukształtowało - Moja filozofia pracy
        </EditableElement>
        <div className="font-sans text-muted-foreground space-y-6 leading-relaxed max-w-3xl mx-auto text-balance">
          <EditableElement path="aboutPage.philosophy.paragraph1" elementType="p">
            Wierzę, że każdy człowiek posiada wewnętrzne zasoby do radzenia sobie z trudnościami i rozwoju. Moja rola jako psychoterapeutki polega na stworzeniu bezpiecznej, pełnej akceptacji i zaufania przestrzeni, w której możliwe staje się odkrywanie tych zasobów.
          </EditableElement>
          <EditableElement path="aboutPage.philosophy.paragraph2" elementType="p">
            Pracuję w nurcie integracyjnym, czerpiąc z różnych podejść terapeutycznych, głównie z terapii poznawczo-behawioralnej (CBT), terapii schematów oraz terapii akceptacji i zaangażowania (ACT). Pozwala mi to elastycznie dopasowywać metody pracy do indywidualnych potrzeb i problemów osoby zgłaszającej się po pomoc.
          </EditableElement>
          <EditableElement path="aboutPage.philosophy.paragraph3" elementType="p">
            Kluczowe dla mnie jest budowanie autentycznej relacji terapeutycznej opartej na empatii, szacunku i współpracy. Wspólnie z klientem określamy cele terapii i krok po kroku dążymy do ich realizacji. Skupiam się nie tylko na redukcji objawów, ale przede wszystkim na zrozumieniu ich przyczyn i budowaniu trwałej zmiany.
          </EditableElement>
          <EditableElement path="aboutPage.philosophy.paragraph4" elementType="p">
            Psychoterapia to dla mnie podróż w głąb siebie, która może prowadzić do większej samoświadomości, akceptacji, a w konsekwencji – do pełniejszego i bardziej satysfakcjonującego życia. To zaszczyt móc towarzyszyć w tej podróży.
          </EditableElement>
        </div>
      </AnimatedElement>

      <AnimatedElement type="quote" className="text-center parallax-bg py-20 rounded-lg shadow-inner bg-blend-multiply bg-background/30" style={{ backgroundImage: `url(${quoteImageUrl})`}}>
        <div className="absolute inset-0 bg-background/60 dark:bg-background/75 backdrop-blur-sm rounded-lg"></div>
        <div className="relative z-10 max-w-2xl mx-auto px-4">
           <BookOpen size={56} className="mx-auto mb-6 text-primary opacity-80 filter brightness-110 drop-shadow-lg" />
          <EditableElement path="aboutPage.quote.text" elementType="p" className="font-serif text-xl md:text-2xl italic text-foreground/90 dark:text-foreground/80 text-balance">
            "Największym odkryciem mojego pokolenia jest to, że człowiek może zmienić swoje życie, zmieniając swoje nastawienie."
          </EditableElement>
          <EditableElement path="aboutPage.quote.author" elementType="p" className="font-sans text-md text-muted-foreground mt-3">
            - William James
          </EditableElement>
        </div>
      </AnimatedElement>
    </div>
  );
};

export default AboutPage;
