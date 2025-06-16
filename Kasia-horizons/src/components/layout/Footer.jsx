import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-secondary/50 dark:bg-secondary py-12 px-4 text-muted-foreground border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <Link to="/" className="flex items-center gap-3 text-xl font-serif font-semibold text-primary mb-4 hover:opacity-80 transition-opacity">
              <img  alt="Logo balon w stopce" className="h-10 w-10 rounded-full object-cover shadow-sm" src="/logo-psychoterapia.png" />
              Katarzyna Celeda
            </Link>
            <p className="font-sans text-sm mt-3 leading-relaxed">
              Psychoterapia i wsparcie w drodze do lepszego samopoczucia. Odkryj wewnętrzną siłę i zbuduj bardziej satysfakcjonujące życie.
            </p>
          </div>
          <div>
            <span className="font-serif text-lg text-foreground block mb-4">Szybkie Linki</span>
            <ul className="font-sans text-sm space-y-2.5">
              <li><Link to="/o-mnie" className="hover:text-primary transition-colors">O Mnie</Link></li>
              <li><Link to="/uslugi/psychoterapia-indywidualna" className="hover:text-primary transition-colors">Usługi</Link></li>
              <li><Link to="/artykul/psychoterapia-czy-konsultacja" className="hover:text-primary transition-colors">Artykuł</Link></li>
              <li><Link to="/kontakt" className="hover:text-primary transition-colors">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <span className="font-serif text-lg text-foreground block mb-4">Znajdź mnie</span>
            <div className="font-sans text-sm space-y-2.5">
              <p>Email: <a href="mailto:kontakt@katarzynaceleda.pl" className="hover:text-primary transition-colors">kontakt@katarzynaceleda.pl</a></p>
              <p>Telefon: <a href="tel:+48123456789" className="hover:text-primary transition-colors">+48 123 456 789</a></p>
              <p>Adres: ul. Przykładowa 123, Warszawa</p>
              <div className="flex space-x-4 mt-6">
                <a href="#" aria-label="Facebook" className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></a>
                <a href="#" aria-label="Instagram" className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></a>
                <a href="#" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border/70 pt-8 flex flex-col sm:flex-row justify-between items-center font-sans text-xs">
          <p>© {new Date().getFullYear()} Katarzyna Celeda Psychoterapia. Wszelkie prawa zastrzeżone.</p>
          <p className="mt-2 sm:mt-0">Projekt i wykonanie: Hostinger Horizons</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;