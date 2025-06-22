import React from 'react';
import { motion } from 'framer-motion';

export default function HeadingTransition({ title, fontSize = "text-4xl", fontWeight = "text-bold" }) {
    const words = title.split(" ");
    const transitionDelay = 0.1;

    const wordVariants = {
        hidden: { opacity: 0, y: 50, rotate: 15 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            rotate: 0,
            transition: {
                delay: i * transitionDelay,
                duration: 0.5,
            }
        }),
    };

    return (
        <motion.div
            className="flex flex-wrap items-center gap-2 mb-2"
            initial="hidden"
            whileInView="visible"
        >
            {words.map((word, index) => (
                <div className="overflow-hidden flex" key={index}>
                    <motion.h2
                        className={`font-bold text-gray-700 ${fontSize} ${fontWeight}`}
                        variants={wordVariants}
                        custom={index}
                    >
                        {word}
                    </motion.h2>
                </div>
            ))}
        </motion.div>
    );
}
