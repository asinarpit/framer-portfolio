import React from 'react';
import { motion } from 'framer-motion';

const CircularText = () => {
    const outerText = "ARPIT SINGH - ARPIT SINGH - ARPIT SINGH - ARPIT SINGH -";
    const innerText = "WEB DESIGNER • WEB DEVELOPER • WEB DESIGNER • ";
    const outerRadius = 100;
    const innerRadius = 60;

    const outerCharacters = outerText.split('');
    const innerCharacters = innerText.split('');

    const outerAngleStep = 360 / outerCharacters.length;
    const innerAngleStep = 360 / innerCharacters.length;

    return (
        <div className="flex items-center justify-center">
            <div className="relative flex items-center justify-center" style={{ width: outerRadius * 2 + 40, height: outerRadius * 2 + 40 }}>

                <motion.div
                    className="absolute"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{ width: outerRadius * 2, height: outerRadius * 2 }}
                >
                    {outerCharacters.map((char, index) => {
                        const angle = index * outerAngleStep;
                        const x = Math.cos((angle - 90) * (Math.PI / 180)) * outerRadius;
                        const y = Math.sin((angle - 90) * (Math.PI / 180)) * outerRadius;

                        return (
                            <motion.span
                                key={index}
                                className="absolute text-black font-mono font-bold text-sm tracking-wider"
                                style={{
                                    left: '50%',
                                    top: '50%',
                                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${angle}deg)`,
                                    transformOrigin: 'center',
                                }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                {char}
                            </motion.span>
                        );
                    })}
                </motion.div>

                {/* Inner circular rotating text (anticlockwise) */}
                <motion.div
                    className="absolute"
                    animate={{ rotate: -360 }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{ width: innerRadius * 2, height: innerRadius * 2 }}
                >
                    {innerCharacters.map((char, index) => {
                        const angle = index * innerAngleStep;
                        const x = Math.cos((angle - 90) * (Math.PI / 180)) * innerRadius;
                        const y = Math.sin((angle - 90) * (Math.PI / 180)) * innerRadius;

                        return (
                            <motion.span
                                key={`inner-${index}`}
                                className="absolute text-gray-600 font-medium font-mono text-xs tracking-wider"
                                style={{
                                    left: '50%',
                                    top: '50%',
                                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${angle}deg)`,
                                    transformOrigin: 'center',
                                }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: index * 0.03 }}
                            >
                                {char}
                            </motion.span>
                        );
                    })}
                </motion.div>

                {/* Center icon/logo */}
                <div
                    className="absolute"
                    style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-lg">
                        <div
                            className="text-2xl font-bold text-white font-serif"
                        >
                            A
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CircularText;