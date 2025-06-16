
import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServiceIndividualPage from "@/pages/ServiceIndividualPage";
import ServiceCouplesPage from "@/pages/ServiceCouplesPage";
import ServiceYouthPage from "@/pages/ServiceYouthPage";
import ServiceFamilyPage from "@/pages/ServiceFamilyPage";
import ArticlePage from "@/pages/ArticlePage";
import ContactPage from "@/pages/ContactPage";
import ScrollToTop from "@/components/shared/ScrollToTop";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import ScrollProgress from "@/components/shared/ScrollProgress";
import BackToTopButton from "@/components/shared/BackToTopButton";
import { useEditMode, EditModeProvider } from "@/components/shared/EditModeContext"; 
import { ContentEditableProvider, EditableElement } from "@/components/shared/ContentEditable";

const App = () => {
  const { isEditMode } = useEditMode();

  return (
    <ThemeProvider>
      <ContentEditableProvider isEditMode={isEditMode}>
        <Router>
          <ScrollToTop />
          <ScrollProgress />
          <div className="min-h-screen bg-background text-foreground flex flex-col transition-colors duration-300">
            <Toaster />
            <Header />
            <main className="flex-grow">
              <Suspense fallback={<div>Ładowanie...</div>}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/o-mnie" element={<AboutPage />} />
                  <Route path="/uslugi/psychoterapia-indywidualna" element={<ServiceIndividualPage />} />
                  <Route path="/uslugi/psychoterapia-par" element={<ServiceCouplesPage />} />
                  <Route path="/uslugi/psychoterapia-mlodziezy" element={<ServiceYouthPage />} />
                  <Route path="/uslugi/psychoterapia-rodzinna" element={<ServiceFamilyPage />} />
                  <Route path="/artykul/psychoterapia-czy-konsultacja" element={<ArticlePage />} />
                  <Route path="/kontakt" element={<ContactPage />} />
                  <Route path="*" element={<HomePage />} /> 
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <BackToTopButton />
          </div>
        </Router>
      </ContentEditableProvider>
    </ThemeProvider>
  );
};

const AppWithEditModeProvider = () => (
  <EditModeProvider>
    <App />
  </EditModeProvider>
);

export default AppWithEditModeProvider;
