import React from "react";
import { motion } from "framer-motion";

const ServiceItem = ({ icon, title }) => {
  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="service-icon">
        <img src={icon} alt={title} className="w-full h-full object-contain" />
      </div>
      <p className="font-sans text-sm text-[#5E503F]">{title}</p>
    </motion.div>
  );
};

export default ServiceItem;