import React from "react";

const FAQItem = ({ question, answer }) => {
  return (
    <div>
      <h3 className="font-serif text-xl text-[#3E362E] mb-2">{question}</h3>
      <p className="font-sans text-[#5E503F] leading-relaxed">{answer}</p>
    </div>
  );
};

export default FAQItem;