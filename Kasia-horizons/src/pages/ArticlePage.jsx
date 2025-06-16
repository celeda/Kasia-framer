
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageSquare, BookOpen } from "lucide-react";
import AnimatedElement from "@/components/shared/AnimatedElement";
import { EditableElement } from '@/components/shared/ContentEditable';

const ArticlePage = () => {
  return (
    <motion.div
      className="page-container animate-fadeIn pt-28 md:pt-36"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatedElement type="title">
        <header className="text-center mb-12 md:mb-16">
          <BookOpen className="h-16 w-16 text-primary mx-auto mb-4 opacity-80" />
          <EditableElement path="articlePage.header.title" elementType="h1" className="section-title">
            Psychoterapia czy konsultacja psychologiczna – co wybrać?
          </EditableElement>
          <EditableElement path="articlePage.header.date" elementType="p" className="text-sm font-sans text-muted-foreground">
            Data publikacji: 27 maja 2025
          </EditableElement>
        </header>
      </AnimatedElement>

      <motion.article 
        className="max-w-3xl mx-auto font-sans text-muted-foreground leading-relaxed space-y-7 text-balance"
      >
        <AnimatedElement type="text" delay={0.1}>
          <EditableElement path="articlePage.intro.paragraph1" elementType="p">
            Często osoby poszukujące wsparcia psychologicznego zastanawiają się, jaka forma pomocy będzie dla nich najbardziej odpowiednia. Dwa najczęściej pojawiające się terminy to konsultacja psychologiczna i psychoterapia. Choć oba dotyczą zdrowia psychicznego i są prowadzone przez specjalistów, różnią się celem, zakresem i czasem trwania. Zrozumienie tych różnic może pomóc w podjęciu świadomej decyzji.
          </EditableElement>
        </AnimatedElement>

        <AnimatedElement type="section" delay={0.2} className="bg-card p-6 md:p-8 rounded-lg shadow-md border border-border/50">
          <EditableElement path="articlePage.consultation.title" elementType="h2" className="text-xl md:text-2xl font-serif font-medium text-primary mt-2 mb-4 flex items-center">
            <HelpCircle className="h-6 w-6 mr-3 flex-shrink-0" />
            Konsultacja psychologiczna – pierwsze spotkanie z problemem
          </EditableElement>
          <div className="space-y-3 text-sm">
            <EditableElement path="articlePage.consultation.paragraph1" elementType="p">
              Konsultacja psychologiczna to zazwyczaj jedno lub kilka (do 3-5) spotkań z psychologiem. Jej głównym celem jest wstępne rozpoznanie problemu, z którym zgłasza się dana osoba. Podczas konsultacji psycholog zbiera wywiad, stara się zrozumieć naturę trudności, ich nasilenie oraz wpływ na codzienne funkcjonowanie.
            </EditableElement>
            <EditableElement path="articlePage.consultation.paragraph2" elementType="p">
              Konsultacja może być pomocna, gdy:
            </EditableElement>
            <ul className="list-disc list-inside ml-4 my-2 space-y-1.5 text-muted-foreground/90">
              <EditableElement path="articlePage.consultation.listItem1" elementType="li">Nie jesteś pewien/pewna, czy potrzebujesz psychoterapii.</EditableElement>
              <EditableElement path="articlePage.consultation.listItem2" elementType="li">Chcesz uzyskać poradę w konkretnej, doraźnej sprawie.</EditableElement>
              <EditableElement path="articlePage.consultation.listItem3" elementType="li">Potrzebujesz wsparcia w kryzysie i chcesz poznać dostępne formy pomocy.</EditableElement>
              <EditableElement path="articlePage.consultation.listItem4" elementType="li">Chcesz uzyskać diagnozę psychologiczną lub opinię.</EditableElement>
            </ul>
            <EditableElement path="articlePage.consultation.paragraph3" elementType="p">
              Efektem konsultacji może być zalecenie podjęcia psychoterapii, skierowanie do innego specjalisty, udzielenie konkretnych wskazówek lub psychoedukacja. Konsultacja sama w sobie rzadko prowadzi do głębokiej i trwałej zmiany, ale jest ważnym pierwszym krokiem.
            </EditableElement>
          </div>
        </AnimatedElement>

        <AnimatedElement type="section" delay={0.3} className="bg-card p-6 md:p-8 rounded-lg shadow-md border border-border/50">
          <EditableElement path="articlePage.psychotherapy.title" elementType="h2" className="text-xl md:text-2xl font-serif font-medium text-primary mt-2 mb-4 flex items-center">
            <MessageSquare className="h-6 w-6 mr-3 flex-shrink-0" />
            Psychoterapia – proces leczenia i rozwoju
          </EditableElement>
          <div className="space-y-3 text-sm">
            <EditableElement path="articlePage.psychotherapy.paragraph1" elementType="p">
              Psychoterapia to regularny, długoterminowy proces leczenia zaburzeń psychicznych, rozwiązywania problemów emocjonalnych oraz wspierania rozwoju osobistego. Opiera się na relacji terapeutycznej – bezpiecznej i pełnej zaufania więzi między klientem a psychoterapeutą.
            </EditableElement>
            <EditableElement path="articlePage.psychotherapy.paragraph2" elementType="p">
              Psychoterapia jest wskazana, gdy:
            </EditableElement>
            <ul className="list-disc list-inside ml-4 my-2 space-y-1.5 text-muted-foreground/90">
              <EditableElement path="articlePage.psychotherapy.listItem1" elementType="li">Doświadczasz długotrwałych trudności emocjonalnych.</EditableElement>
              <EditableElement path="articlePage.psychotherapy.listItem2" elementType="li">Masz problemy w relacjach z innymi ludźmi.</EditableElement>
              <EditableElement path="articlePage.psychotherapy.listItem3" elementType="li">Chcesz przepracować trudne doświadczenia z przeszłości.</EditableElement>
              <EditableElement path="articlePage.psychotherapy.listItem4" elementType="li">Pragniesz lepiej zrozumieć siebie, swoje wzorce myślenia i zachowania.</EditableElement>
              <EditableElement path="articlePage.psychotherapy.listItem5" elementType="li">Chcesz wprowadzić trwałe zmiany w swoim życiu i poprawić jego jakość.</EditableElement>
            </ul>
            <EditableElement path="articlePage.psychotherapy.paragraph3" elementType="p">
              Psychoterapia może być prowadzona w różnych nurtach, a wybór odpowiedniego podejścia zależy od specyfiki problemu. Sesje odbywają się zazwyczaj raz w tygodniu i trwają 50 minut. Czas trwania procesu jest indywidualny.
            </EditableElement>
          </div>
        </AnimatedElement>

        <AnimatedElement type="text" delay={0.4}>
          <EditableElement path="articlePage.summary.title" elementType="h2" className="text-xl md:text-2xl font-serif font-medium text-primary mt-8 mb-3">
            Podsumowanie – co wybrać?
          </EditableElement>
          <EditableElement path="articlePage.summary.paragraph1" elementType="p">
            Decyzja o wyborze między konsultacją a psychoterapią zależy od Twoich indywidualnych potrzeb i celów.
          </EditableElement>
          <ul className="list-disc list-inside ml-4 my-2 space-y-1.5">
            <EditableElement path="articlePage.summary.listItem1" elementType="li">Jeśli potrzebujesz doraźnej porady, wstępnego rozpoznania problemu lub nie jesteś pewien, jakiej pomocy potrzebujesz – <strong>konsultacja psychologiczna</strong> będzie dobrym początkiem.</EditableElement>
            <EditableElement path="articlePage.summary.listItem2" elementType="li">Jeśli zmagasz się z długotrwałymi trudnościami, chcesz głębiej zrozumieć siebie i wprowadzić trwałe zmiany – warto rozważyć <strong>psychoterapię</strong>.</EditableElement>
          </ul>
          <EditableElement path="articlePage.summary.paragraph2" elementType="p" className="mt-2">
            Pamiętaj, że często konsultacja psychologiczna jest pierwszym etapem przed podjęciem psychoterapii. Psycholog podczas konsultacji może pomóc Ci ocenić, czy psychoterapia jest dla Ciebie wskazana.
          </EditableElement>
        </AnimatedElement>

        <AnimatedElement type="section" delay={0.5} className="mt-12 text-center">
          <EditableElement path="articlePage.cta.text" elementType="p" className="font-serif text-lg text-primary/90 mb-6 text-balance">
            Jeśli masz wątpliwości lub pytania, zapraszam do kontaktu. Chętnie pomogę Ci wybrać najlepszą formę wsparcia.
          </EditableElement>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Link to="/kontakt">
              <EditableElement path="articlePage.cta.buttonText" elementType="span">Skontaktuj się</EditableElement>
            </Link>
          </Button>
        </AnimatedElement>
      </motion.article>
    </motion.div>
  );
};

export default ArticlePage;
