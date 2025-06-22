import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BlobCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const element = document.elementFromPoint(e.clientX, e.clientY);
            setIsPointer(
                element?.tagName === 'BUTTON' ||
                element?.tagName === 'A' ||
                element?.closest('button') ||
                element?.closest('a') ||
                window.getComputedStyle(element || document.body).cursor === 'pointer'
            );
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <motion.div
                className="hidden md:block fixed top-0 left-0 w-10 h-10 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-full pointer-events-none mix-blend-difference z-[9999]"
                animate={{
                    x: position.x - 16,
                    y: position.y - 16,
                    scale: isPointer ? 1.5 : 1,
                    borderRadius: isPointer ? "40% 60% 70% 30%" : "50%",
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    borderRadius: {
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    },
                }}
            />

            <motion.div
                className="hidden md:block fixed top-0 left-0 w-10 h-10 bg-gradient-to-r from-pink-500/50 to-orange-500/50 rounded-full pointer-events-none mix-blend-difference z-[9998]"
                animate={{
                    x: position.x - 8,
                    y: position.y - 8,
                    scale: isPointer ? 1.2 : 0.8,
                    borderRadius: isPointer ? "60% 40% 30% 70%" : "50%",
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                    borderRadius: {
                        duration: 0.6,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    },
                }}
            />
        </>
    );
};

export default BlobCursor; 