
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import AnimatedElement from "@/components/shared/AnimatedElement";
import { supabase } from '@/lib/supabaseClient';
import { EditableElement } from '@/components/shared/ContentEditable';

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([formData]);

      if (error) {
        throw error;
      }

      toast({
        title: "Wiadomość wysłana! ✨",
        description: "Dziękuję za kontakt. Odpowiem najszybciej jak to możliwe.",
        variant: "default",
      });
      e.target.reset();
    } catch (error) {
      console.error("Błąd zapisu do Supabase:", error);
      toast({
        title: "Błąd wysyłania! 😥",
        description: "Nie udało się wysłać wiadomości. Spróbuj ponownie później lub skontaktuj się bezpośrednio.",
        variant: "destructive",
      });
    }
  };

  const contactDetails = [
    { icon: <Mail className="h-5 w-5 text-primary" />, label: "Email", value: "kontakt@katarzynaceleda.pl", href: "mailto:kontakt@katarzynaceleda.pl", path: "contactPage.details.email" },
    { icon: <Phone className="h-5 w-5 text-primary" />, label: "Telefon", value: "+48 123 456 789", href: "tel:+48123456789", path: "contactPage.details.phone" },
    { icon: <MapPin className="h-5 w-5 text-primary" />, label: "Adres Gabinetu", value: "ul. Przykładowa 123, 00-001 Warszawa", path: "contactPage.details.address" },
    { icon: <Clock className="h-5 w-5 text-primary" />, label: "Godziny pracy", value: "Poniedziałek - Piątek: 9:00 - 19:00 (umówione wizyty)", path: "contactPage.details.hours" },
  ];

  return (
    <div className="page-container animate-fadeIn pt-28 md:pt-36">
      <AnimatedElement type="title">
        <section className="text-center mb-12 md:mb-16">
          <EditableElement path="contactPage.main.title" elementType="h1" className="section-title">
            Kontakt
          </EditableElement>
          <EditableElement path="contactPage.main.subtitle" elementType="p" className="text-lg md:text-xl font-sans text-muted-foreground max-w-2xl mx-auto text-balance">
            Masz pytania lub chcesz umówić się na konsultację? Jestem tutaj, aby pomóc. Skorzystaj z poniższych danych lub wypełnij formularz.
          </EditableElement>
        </section>
      </AnimatedElement>

      <div className="grid lg:grid-cols-5 gap-10 md:gap-16">
        <AnimatedElement type="section" delay={0.1} className="lg:col-span-2 bg-card p-6 md:p-8 rounded-lg shadow-lg border border-border/50">
          <EditableElement path="contactPage.details.title" elementType="h2" className="section-subtitle text-primary mb-6 text-2xl">
            Dane kontaktowe
          </EditableElement>
          <div className="space-y-5 font-sans">
            {contactDetails.map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <div className="flex-shrink-0 mr-3.5 mt-1 p-2 bg-primary/10 rounded-full">{item.icon}</div>
                <div>
                  <EditableElement path={`${item.path}.label`} elementType="span" className="block text-xs text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </EditableElement>
                  {item.href ? (
                    <EditableElement path={`${item.path}.value`} elementType="a" href={item.href} className="text-foreground hover:text-primary transition-colors text-sm md:text-base">
                      {item.value}
                    </EditableElement>
                  ) : (
                    <EditableElement path={`${item.path}.value`} elementType="span" className="text-foreground text-sm md:text-base">
                      {item.value}
                    </EditableElement>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8">
             <EditableElement path="contactPage.map.title" elementType="h3" className="text-xl font-serif text-foreground mb-3">
               Lokalizacja Gabinetu
             </EditableElement>
             <div className="aspect-video rounded-lg overflow-hidden shadow-md border border-border/50">
                <iframe 
                    src="https://www.openstreetmap.org/export/embed.html?bbox=20.99,52.22,21.03,52.24&layer=mapnik&marker=52.23,21.01" 
                    className="w-full h-full border-0"
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa lokalizacji gabinetu"
                ></iframe>
             </div>
          </div>
        </AnimatedElement>

        <AnimatedElement type="section" delay={0.2} className="lg:col-span-3 bg-card p-6 md:p-8 rounded-lg shadow-lg border border-border/50">
          <EditableElement path="contactPage.form.title" elementType="h2" className="section-subtitle text-primary mb-6 text-2xl">
            Napisz do mnie
          </EditableElement>
          <form onSubmit={handleSubmit} className="space-y-5 font-sans">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name" className="text-foreground text-sm">
                  <EditableElement path="contactPage.form.nameLabel" elementType="span">Imię i nazwisko</EditableElement>
                </Label>
                <Input type="text" id="name" name="name" required className="mt-1.5 bg-background border-border focus:ring-primary focus:border-primary placeholder:text-muted-foreground/70" placeholder="Twoje imię i nazwisko" />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground text-sm">
                  <EditableElement path="contactPage.form.emailLabel" elementType="span">Adres email</EditableElement>
                </Label>
                <Input type="email" id="email" name="email" required className="mt-1.5 bg-background border-border focus:ring-primary focus:border-primary placeholder:text-muted-foreground/70" placeholder="twoj@email.com" />
              </div>
            </div>
            <div>
              <Label htmlFor="message" className="text-foreground text-sm">
                <EditableElement path="contactPage.form.messageLabel" elementType="span">Wiadomość</EditableElement>
              </Label>
              <Textarea id="message" name="message" rows={6} required className="mt-1.5 bg-background border-border focus:ring-primary focus:border-primary placeholder:text-muted-foreground/70" placeholder="Twoja wiadomość..." />
            </div>
            <div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                <EditableElement path="contactPage.form.buttonText" elementType="span">Wyślij wiadomość</EditableElement> <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
          <EditableElement path="contactPage.form.signature" elementType="p" className="mt-10 font-serif text-lg text-center text-primary/80">
            Z ciepłem,<br />Kasia
          </EditableElement>
        </AnimatedElement>
      </div>
    </div>
  );
};

export default ContactPage;
