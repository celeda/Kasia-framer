import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const AnimatedElement = ({ children, type = 'item', delay = 0, className = '', style = {} }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  const variants = {
    item: {
      hidden: { opacity: 0, y: 30, scale: 0.98 },
      visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] } },
    },
    title: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: "easeOut" } },
    },
    text: {
      hidden: { opacity: 0, y: 15 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "circOut" } },
    },
    image: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay, type: "spring", stiffness: 80 } },
    },
    section: {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: "easeOut" } },
    },
    quote: {
        hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, delay, ease: "easeOut" } },
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants[type]}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;