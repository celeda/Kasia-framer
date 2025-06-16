import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "@/components/shared/ThemeProvider";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const logoUrlLight = "https://storage.googleapis.com/hostinger-horizons-assets-prod/08c20cbd-97d3-4d2e-9224-e9b427c28a3e/5afba704ef397fc446b346535b0a1639.png";
  const logoUrlDark = "https://storage.googleapis.com/hostinger-horizons-assets-prod/08c20cbd-97d3-4d2e-9224-e9b427c28a3e/cc4b6778972598ca9074a11d4ba01b6e.png";


  const navLinks = [
    { to: "/", label: "Strona Główna" },
    { to: "/o-mnie", label: "O Mnie" },
    {
      label: "Usługi",
      isDropdown: true,
      subLinks: [
        { to: "/uslugi/psychoterapia-indywidualna", label: "Psychoterapia Indywidualna" },
        { to: "/uslugi/psychoterapia-par", label: "Psychoterapia Par" },
        { to: "/uslugi/psychoterapia-mlodziezy", label: "Psychoterapia Młodzieży" },
        { to: "/uslugi/psychoterapia-rodzinna", label: "Psychoterapia Rodzinna" },
      ],
    },
    { to: "/artykul/psychoterapia-czy-konsultacja", label: "Artykuł" },
    { to: "/kontakt", label: "Kontakt" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeLinkClass = "text-primary font-semibold";
  const inactiveLinkClass = "text-foreground/80 hover:text-primary transition-colors duration-300";
  const mobileActiveLinkClass = "text-primary font-semibold bg-primary/10";
  const mobileInactiveLinkClass = "hover:text-primary hover:bg-primary/5 transition-colors duration-300";


  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link) =>
      link.isDropdown ? (
        <div key={link.label} className="relative">
          <button
            onClick={() => isMobile && setIsServicesDropdownOpen(!isServicesDropdownOpen)}
            onMouseEnter={() => !isMobile && setIsServicesDropdownOpen(true)}
            onMouseLeave={() => !isMobile && setIsServicesDropdownOpen(false)}
            className={`flex items-center gap-1 font-sans text-sm ${isMobile ? `w-full justify-between py-3 px-4 ${mobileInactiveLinkClass}` : `py-2 ${inactiveLinkClass}`}`}
          >
            {link.label} <ChevronDown size={16} className={`transition-transform ${isServicesDropdownOpen ? "rotate-180" : ""}`} />
          </button>
          <AnimatePresence>
            {isServicesDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: isMobile ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: isMobile ? 0 : 10 }}
                transition={{ duration: 0.2 }}
                className={`${isMobile ? 'pl-4 bg-background' : 'absolute top-full left-0 mt-1 w-64 bg-card shadow-xl rounded-lg py-2 z-20 border border-border'}`}
                onMouseEnter={() => !isMobile && setIsServicesDropdownOpen(true)}
                onMouseLeave={() => !isMobile && setIsServicesDropdownOpen(false)}
              >
                {link.subLinks.map((subLink) => (
                  <NavLink
                    key={subLink.to}
                    to={subLink.to}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsServicesDropdownOpen(false);
                    }}
                    className={({ isActive }) =>
                      `${isMobile ? 'block py-2.5 px-4' : 'block py-2 px-4 text-sm'} font-sans ${isActive ? (isMobile ? mobileActiveLinkClass : activeLinkClass) : (isMobile ? mobileInactiveLinkClass : inactiveLinkClass)}`
                    }
                  >
                    {subLink.label}
                  </NavLink>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <NavLink
          key={link.to}
          to={link.to}
          onClick={() => {
            setIsMobileMenuOpen(false);
            setIsServicesDropdownOpen(false);
          }}
          className={({ isActive }) =>
            `${isMobile ? `block py-3 px-4 ${isActive ? mobileActiveLinkClass : mobileInactiveLinkClass}` : `py-2 ${isActive ? activeLinkClass : inactiveLinkClass}`} font-sans text-sm`
          }
        >
          {link.label}
        </NavLink>
      )
    );

  return (
    <header
      className={`py-3 px-4 md:px-8 fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${isScrolled || isMobileMenuOpen ? "bg-background/80 backdrop-blur-lg shadow-md border-b border-border/50" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 text-xl md:text-2xl font-serif font-semibold text-primary hover:opacity-80 transition-opacity">
          <img
            alt="Logo Katarzyna Celeda"
            className="h-10 w-auto md:h-12 object-contain"
            src={theme === 'dark' ? logoUrlDark : logoUrlLight}
          />
        </Link>
        <div className="flex items-center">
          <nav className="hidden md:flex gap-5 items-center mr-4">
            {renderNavLinks()}
          </nav>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-primary/10 text-foreground/80 hover:text-primary transition-colors mr-2 md:mr-0"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="md:hidden text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-background absolute top-full left-0 right-0 shadow-lg z-40 overflow-hidden border-t border-border/50"
          >
            <nav className="flex flex-col font-sans text-sm text-foreground pt-2 pb-3">
              {renderNavLinks(true)}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;