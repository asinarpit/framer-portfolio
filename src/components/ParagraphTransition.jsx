import React from 'react';
import { motion } from 'framer-motion';

function ParagraphTransition({
  children,
  fontSize = "text-base",
  fontWeight = "font-normal",
  tracking = "tracking-normal",
}) {
  const transitionDelay = 0.02;
  

  const wordVariants = {
    hidden: { opacity: 0, y: 50, rotate: 15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        delay: i * transitionDelay,
        duration: 0.4,
      }
    }),
  };

  const contentArray = React.Children.toArray(children);

  return (
    <motion.div
      className="flex flex-wrap items-center gap-2 mb-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }} 
    >
      {contentArray.map((child, index) => {
        if (typeof child === 'string') {
          return child.split(" ").map((word, i) => (
            <div className="overflow-hidden" key={`${index}-${i}`}>
              <motion.p
                className={`text-gray-600 ${fontSize} ${fontWeight} ${tracking}`}
                variants={wordVariants}
                custom={i}
              >
                {word}
              </motion.p>
            </div>
          ));
        } else {
          return <div key={index}>{child}</div>;
        }
      })}
    </motion.div>
  );
}

export default ParagraphTransition;
