import React from "react";
import ServiceItem from "@/components/shared/ServiceItem";

const AboutSection = () => {
  return (
    <section id="about" className="section-container bg-[#FBF9F6]">
      <h2 className="section-title text-[#3E362E]">W czym mogę<br />być pomocna?</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <ServiceItem 
          icon="/icons/icon-relationships.png"
          title="psychoterapia par, relacji międzyludzkich i związków"
        />
        <ServiceItem 
          icon="/icons/icon-anxiety.png"
          title="stany lękowe i depresyjne"
        />
        <ServiceItem 
          icon="/icons/icon-brain.png"
          title="traumatyczne doświadczenia"
        />
        <ServiceItem 
          icon="/icons/icon-hand.png"
          title="psychoterapia indywidualna"
        />
      </div>
    </section>
  );
};

export default AboutSection;