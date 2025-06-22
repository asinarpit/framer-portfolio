import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const Blob = () => {
    const [cursor, setCursor] = useState({ x: 0, y: 0 })
    
    const initialBorderRadii1 = {
        topLeft: "47% 60%",
        topRight: "53% 31%",
        bottomLeft: "62% 40%",
        bottomRight: "38% 69%"
    }
    
    const initialBorderRadii2 = {
        topLeft: "60% 40%",
        topRight: "30% 70%",
        bottomLeft: "45% 55%",
        bottomRight: "55% 45%"
    }
    
    const [borderRadii1, setBorderRadii1] = useState(initialBorderRadii1)
    const [borderRadii2, setBorderRadii2] = useState(initialBorderRadii2)
    
    const boxRef1 = useRef(null)
    const boxRef2 = useRef(null)

    const mapRange = (value, inMin, inMax, outMin, outMax) => {
        return Math.max(outMin, Math.min(outMax, 
            outMin + ((value - inMin) * (outMax - outMin)) / (inMax - inMin)
        ))
    }

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursor({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    useEffect(() => {
        if (!boxRef1.current) return

        const blob = boxRef1.current
        const rect = blob.getBoundingClientRect()
        
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const distance = Math.sqrt(
            Math.pow(cursor.x - centerX, 2) + 
            Math.pow(cursor.y - centerY, 2)
        )
        
        const inRange = distance < 300
        
        if (!inRange) {
            setBorderRadii1(initialBorderRadii1)
            return
        }

        const corners = {
            topLeft: { x: rect.left, y: rect.top },
            topRight: { x: rect.right, y: rect.top },
            bottomLeft: { x: rect.left, y: rect.bottom },
            bottomRight: { x: rect.right, y: rect.bottom },
        }

        const maxDistance = 300
        const minRadius = 10
        const maxRadius = 50
        
        const newRadii = {}
        for (let key in corners) {
            const dx = cursor.x - corners[key].x
            const dy = cursor.y - corners[key].y
            const distance = Math.sqrt(dx * dx + dy * dy)

            const hRadius = mapRange(
                distance,
                0,
                maxDistance,
                minRadius,
                maxRadius
            )
            
            const vRadius = mapRange(
                distance,
                0,
                maxDistance,
                minRadius,
                maxRadius
            )

            newRadii[key] = `${hRadius}% ${vRadius}%`
        }

        setBorderRadii1(newRadii)
    }, [cursor])

    useEffect(() => {
        if (!boxRef2.current) return

        const blob = boxRef2.current
        const rect = blob.getBoundingClientRect()
        
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const distance = Math.sqrt(
            Math.pow(cursor.x - centerX, 2) + 
            Math.pow(cursor.y - centerY, 2)
        )
        
        const inRange = distance < 300
        
        if (!inRange) {
            setBorderRadii2(initialBorderRadii2)
            return
        }

        const corners = {
            topLeft: { x: rect.left, y: rect.top },
            topRight: { x: rect.right, y: rect.top },
            bottomLeft: { x: rect.left, y: rect.bottom },
            bottomRight: { x: rect.right, y: rect.bottom },
        }

        const maxDistance = 300
        const minRadius = 15
        const maxRadius = 60
        
        const newRadii = {}
        for (let key in corners) {
            const dx = cursor.x - corners[key].x
            const dy = cursor.y - corners[key].y
            const distance = Math.sqrt(dx * dx + dy * dy)

        
            const hRadius = mapRange(
                distance,
                0,
                maxDistance,
                minRadius,
                maxRadius
            )
            
            const vRadius = mapRange(
                distance,
                0,
                maxDistance,
                minRadius,
                maxRadius
            )

            newRadii[key] = `${hRadius}% ${vRadius}%`
        }

        setBorderRadii2(newRadii)
    }, [cursor])

    return (
            <div className='relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] flex justify-center items-center'>
                {/* First Blob */}
                <div className='absolute top-0 left-0 z-10'>
                    <motion.div
                        ref={boxRef1}
                        animate={{
                            borderTopLeftRadius: borderRadii1.topLeft,
                            borderTopRightRadius: borderRadii1.topRight,
                            borderBottomLeftRadius: borderRadii1.bottomLeft,
                            borderBottomRightRadius: borderRadii1.bottomRight,
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 5 }}
                        className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-gradient-to-r from-purple-500 to-blue-500 relative overflow-hidden shadow-xl"
                    >
                        <div className="absolute inset-0 pointer-events-none opacity-50 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-cover"></div>
                    </motion.div>
                </div>

                {/* Second Blob */}
                <div className='absolute top-14 md:top-20 left-8 md:left-10 z-0'>
                    <motion.div
                        ref={boxRef2}
                        animate={{
                            borderTopLeftRadius: borderRadii2.topLeft,
                            borderTopRightRadius: borderRadii2.topRight,
                            borderBottomLeftRadius: borderRadii2.bottomLeft,
                            borderBottomRightRadius: borderRadii2.bottomRight,
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 8 }}
                        className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-gradient-to-r from-pink-500 to-orange-500 relative overflow-hidden shadow-xl rotate-[45deg]"
                    >
                        <div className="absolute inset-0 pointer-events-none opacity-50 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-cover"></div>
                    </motion.div>
                </div>
            </div>
        
    )
}

export default Blob