import React from 'react'
import { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion"

function AnimatedSmiley() {

    const leftEye = useAnimation();
    const rightEye = useAnimation();

    const blink = () => {
        leftEye.start({
            r: [2, 0.2, 2, 0.2, 2],
            transition: { duration: 0.5 }
        });
        rightEye.start({
            r: [2, 0.2, 2, 0.2, 2],
            transition: { duration: 0.5 }
        });
    };

    const moveEyes = () => {
        const offsetX = Math.random() * 2 - 1;
        const offsetY = Math.random() * 2 - 1;

        leftEye.start({
            cx: 24 + offsetX,
            cy: 26 + offsetY,
            transition: { duration: 0.3 }
        });
        rightEye.start({
            cx: 40 + offsetX,
            cy: 26 + offsetY,
            transition: { duration: 0.3 }
        });
    };

    useEffect(() => {
        const blinkInterval = setInterval(() => {
            blink();
        }, 5000 + Math.random() * (6000 - 5000));

        const moveInterval = setInterval(() => {
            moveEyes();
        }, 3000 + Math.random() * (7000 - 4000));

        return () => {
            clearInterval(blinkInterval);
            clearInterval(moveInterval);
        };
    }, []);
    return (
        <div>
            <svg
                fill="#374151"
                width={100}
                height={100}
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="nerd">
                    {/* Eye Left */}
                    <motion.circle
                        animate={leftEye}
                        initial={{ cx: 24, cy: 26, r: 2 }}
                    />

                    {/* Eye Right */}
                    <motion.circle
                        animate={rightEye}
                        initial={{ cx: 40, cy: 26, r: 2 }}
                    />

                    {/* Other SVG elements (head, star, mouth, etc.) */}
                    <path fill='#3b82f6' d="M9,11a3,3,0,1,0-3,3A3.0033,3.0033,0,0,0,9,11ZM6,12a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,6,12Z"></path>
                    <path fill='#f97316' d="M55.7,52.4561a1,1,0,0,0-1.4141,0l-.7671.767-.767-.767a1,1,0,1,0-1.4141,1.414l.7671.7671-.7671.7671a1,1,0,1,0,1.4141,1.4141l.767-.7671.7671.7671A1,1,0,1,0,55.7,55.4043l-.7671-.7671L55.7,53.87A1,1,0,0,0,55.7,52.4561Z"></path>
                    <path d="M38.9922,34H25.0078a1.8575,1.8575,0,0,0-1.7236,1.415c-.4453,1.1807-.46,3.3477.6714,4.3438A12.15,12.15,0,0,0,32,43a12.1538,12.1538,0,0,0,8.0449-3.2412c1.1309-.9961,1.1162-3.1631.6709-4.3438A1.8575,1.8575,0,0,0,38.9922,34Z"></path>
                    <path d="M54.8623,18.4941a.9989.9989,0,0,0-1.1787-.4423l-1.2293.41a23.9823,23.9823,0,0,0-40.9113.0042l-1.2447-.4149a.9988.9988,0,0,0-1.1792.4424L6.6416,22.7168a1,1,0,0,0,1.7256,1.0117l2.0674-3.5244.12.04A24,24,0,1,0,53.4429,20.24l.105-.035L55.6152,23.73A1,1,0,0,0,57.34,22.7178ZM32,9A21.9961,21.9961,0,0,1,50.4979,19.1136l-5.6222,1.8741A6.9728,6.9728,0,0,0,40,19H24a6.9726,6.9726,0,0,0-4.88,1.9913L13.5,19.1178A21.996,21.996,0,0,1,32,9Zm8,12a5,5,0,1,1-5,5A5.0059,5.0059,0,0,1,40,21ZM29,26a5,5,0,1,1-5-5A5.0059,5.0059,0,0,1,29,26Zm25,5A22,22,0,1,1,12.4737,20.8837l5.3691,1.7894A7.0018,7.0018,0,1,0,28.89,21h6.2212A6.9969,6.9969,0,1,0,46.155,22.6688L51.5241,20.88A21.8576,21.8576,0,0,1,54,31Z"></path>
                </g>
            </svg>
        </div>
    )
}

export default AnimatedSmiley