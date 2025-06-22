import React, { useState } from 'react'
import { motion, AnimatePresence, delay } from 'framer-motion'
import wave1 from '../assets/wave-2.svg'
import wave2 from '../assets/wave-1.svg'

const menuItems = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" }
]

const menuVariants = {
    initial: {
        x: "100%"
    },
    animate: {
        x: 10,
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
        }
        
        
    },
    exit: {
        x: "100%",
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1]
        }
    }
}

const secondWaveVariants = {
    initial: {
        x: "100%"
    },
    animate: {
        x: 30,
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.2
        }
    },
    exit: {
        x: "100%",
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1]
        }
    }
}

const contentVariants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.6,
            staggerChildren: 0.2,
            delayChildren: 0.4
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3
        }
    }
}

const itemVariants = {
    initial: {
        y: 50,
        rotate: 15,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        rotate: 0,
        transition: {
            duration: 1,
            ease: [0.76, 0, 0.24, 1]
        }
    },
    exit: {
        y: 50,
        rotate: 15,
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: [0.76, 0, 0.24, 1]
        }
    }
}

const pathVariants = {
    initial: { x: -8 },
    hover: { x: 0 }
}

function NavMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <motion.div
                className='fixed top-8 right-8 z-50 w-[40px] h-[40px] overflow-visible cursor-pointer'
                initial="initial"
                whileHover="hover"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                        transition: 'transform 0.75s cubic-bezier(0.76, 0, 0.24, 1)',
                        overflow: 'visible',
                    }}
                >
                    <g id="SVGRepo_iconCarrier">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.75 7C20.75 7.41421 20.4142 7.75 20 7.75L4 7.75C3.58579 7.75 3.25 7.41421 3.25 7C3.25 6.58579 3.58579 6.25 4 6.25L20 6.25C20.4142 6.25 20.75 6.58579 20.75 7Z"
                            className={`${isOpen ? 'fill-gray-100' : 'fill-blue-500' } transition-[fill] duration-300 ease-in-out delay-300`}
                        />
                        <motion.path
                            variants={pathVariants}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.75 12C20.75 12.4142 20.4142 12.75 20 12.75L4 12.75C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12Z"
                            className={`${isOpen ? 'fill-gray-100' : 'fill-orange-500'} transition-[fill] duration-300 ease-in-out delay-300`}
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.75 17C20.75 17.4142 20.4142 17.75 20 17.75L4 17.75C3.58579 17.75 3.25 17.4142 3.25 17C3.25 16.5858 3.58579 16.25 4 16.25L20 16.25C20.4142 16.25 20.75 16.5858 20.75 17Z"
                            className={`${isOpen ? 'fill-gray-100' : 'fill-blue-500'} transition-[fill] duration-300 ease-in-out delay-300`}
                        />
                    </g>
                </svg>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed top-0 right-0 h-full w-full md:w-[350px] z-40">
                        {/* First Wave */}
                        <motion.div
                            className="absolute inset-0 overflow-hidden"
                            variants={menuVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <img
                                src={wave1}
                                alt=""
                                className="absolute right-0 h-full w-full object-cover"
                            />
                        </motion.div>


                        {/* Second Wave */}
                        <motion.div
                            className="absolute inset-0 overflow-hidden"
                            variants={secondWaveVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <img
                                src={wave2}
                                alt=""
                                className="absolute right-0 h-full w-auto object-cover"
                            />
                        </motion.div>


                        {/* Content */}
                        <motion.div
                            variants={contentVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="absolute top-1/2 translate-y-[-50%] right-10 z-10 md:w-auto flex items-center justify-center"
                        >
                            <motion.nav className='w-full ml-20'>
                                <motion.ul className="flex flex-col gap-6 text-center">
                                    {menuItems.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            className="overflow-hidden"
                                        >
                                            <motion.a
                                                variants={itemVariants}
                                                whileHover={{ scale: 1.05, translateY: -5 }}
                                                href={item.href}
                                                className="text-4xl font-medium text-slate-200 block"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.title}
                                            </motion.a>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.nav>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}

export default NavMenu