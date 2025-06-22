import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter, FaChevronDown } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Blob from '../components/Blob'
import CircularText from '../components/CicularText'
import layeredWaves from '../assets/layered-waves.svg'
import HeadingTransition from '../components/HeadingTransition'
import ParagraphTransition from '../components/ParagraphTransition'



const buttonVariants = {
    initial: { width: "48px" },
    animate: {
        width: "175px",
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    },
    hover: {
        width: "175px",
        transition: { 
            duration: 0.3, 
            ease: "easeOut"
        }
    },
    exit: {
        width: "48px",
        transition: { 
            duration: 0.3, 
            ease: "easeInOut"
        }
    }
}

const textVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    },
    hover: { opacity: 1 },
    exit: { 
        opacity: 0,
        transition: { 
            duration: 0.3, 
            ease: "easeInOut"
        }
    }
}

const iconVariants = {
    initial: { rotate: 0 },
    animate: {
        rotate: 90,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    },
    hover: { rotate: 90 },
    exit: { 
        rotate: 0,
        transition: { 
            duration: 0.3, 
            ease: "easeInOut"
        }
    }
}


const scrollArrowVariants = {
    initial: { y: 0 },
    animate: {
        y: [0, 10, 0],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
        }
    }
}

function Hero() {
    return (
        <section id='home' className="min-h-screen overflow-hidden relative">
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-20 pt-10 px-4 md:px-10'>
                <div className='max-w-[350px] mx-auto md:mx-0'>
                    {/* <h2 className='heading text-3xl leading-snug text-gray-700 mb-2'>Building Modern Web Experiences</h2> */}
                    <HeadingTransition title="Building Modern Web Experiences" fontSize='text-xl md:text-2xl' fontWeight='text-bold' />
                    {/* <p className='text-sm text-gray-500 leading-relaxed tracking-wide'>I design and develop responsive, fast, and scalable applications using React, Node, and the latest web technologies. Focused on clean code and seamless user experiences.</p> */}
                    <ParagraphTransition fontSize='text-xs md:text-sm'>
                        I design and develop responsive, fast, and scalable applications using React, Node, and the latest web technologies. Focused on clean code and seamless user experiences.
                    </ParagraphTransition>
                    <div className='mt-5 flex gap-10 items-center'>
                        <motion.button
                            className='group relative bg-gradient-to-r bg-orange-500 text-white rounded-full hover:shadow-lg transition-shadow duration-300 overflow-hidden h-12'
                            variants={buttonVariants}
                            initial="initial"
                            whileInView={window?.innerWidth < 768 ? "animate" : "initial"}
                            whileHover={window?.innerWidth >= 768 ? "hover" : ""}
                            exit="exit"
                        >
                            <motion.div
                                className="absolute inset-0 flex items-center pl-4 whitespace-nowrap"
                                variants={textVariants}
                            >
                                See My Works
                            </motion.div>

                            <motion.div
                                className='absolute right-2 top-2 bg-white w-8 h-8 rounded-full flex justify-center items-center'
                                variants={iconVariants}
                            >
                                <FaArrowRight className='text-orange-500' size={14} />
                            </motion.div>
                        </motion.button>

                        {/* Mobile social links */}
                        <div className="flex md:hidden justify-center gap-6">
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-blue-500 hover:text-blue-600 transition duration-300" size={24} />
                            </a>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-blue-500 hover:text-blue-600 transition duration-300" size={24} />
                            </a>
                            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-blue-500 hover:text-blue-600 transition duration-300" size={24} />
                            </a>
                        </div>

                    </div>

                </div>


                {/* blob */}

                <div className='md:absolute md:top-[50%] md:left-[50%] md:-translate-x-1/2 md:-translate-y-1/2 z-10'>
                    <div className="relative w-full flex justify-center items-center">
                        <Blob />

                        <div className="absolute inset-0 flex justify-center items-center z-30">
                            <h1 className="text-[6rem] md:text-[12rem] text-nowrap text-center outline-text uppercase leading-[80px] md:leading-[160px] font-['Luckiest_Guy']">
                                Arpit<br /> Singh
                            </h1>
                        </div>
                        <div className="absolute inset-0 flex justify-center items-center z-0">
                            <h1 className="text-[6rem] md:text-[12rem] text-nowrap text-center text-gray-900 uppercase leading-[80px] md:leading-[160px] font-['Luckiest_Guy']">
                                Arpit<br /> Singh
                            </h1>
                        </div>

                    </div>

     
                </div>


                <div className='hidden md:block'></div>
                <div className="mb-20">
                    <CircularText />
                </div>

            </div>

            {/* social media */}
            <div className='hidden md:block absolute bottom-0 left-10 z-20'>
                <div className="flex flex-col items-center gap-2">
                    <span
                        className="mt-2 text-[12px] tracking-widest text-orange-500 font-medium family-mono"
                        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                        asin060902@gmail.com
                    </span>
                    <motion.div initial={{ height: 0 }} viewport={{ once: false, amount: 0.5 }} whileInView={{
                        height: 250,
                        transition: {
                            delay: 0.2,
                            duration: 0.5,
                            type: "spring",
                            damping: 10,
                            stiffness: 300,
                            ease: "easeInOut"
                        }
                    }} className="w-[1.5px] bg-orange-500 rounded-full"></motion.div>
                </div>
            </div>



            <div className='hidden md:flex absolute bottom-[30px] left-20 z-20'>
                <div className="flex flex-col items-center gap-4">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-blue-500 hover:text-blue-600 hover:-translate-y-2 transition duration-300" size={18} />
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-blue-500 hover:text-blue-600 transition hover:-translate-y-2 duration-300" size={18} />
                    </a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-blue-500 hover:text-blue-600 hover:-translate-y-2 transition duration-300" size={18} />
                    </a>

                    <motion.div initial={{ height: 0 }} whileInView={{
                        height: 250,
                        transition: {
                            delay: 0.2,
                            duration: 0.5,
                            type: "spring",
                            damping: 10,
                            stiffness: 300,
                            ease: "easeInOut"
                        }
                    }} className="w-[1.5px] h-[200px] bg-blue-500 rounded-full"></motion.div>
                </div>
            </div>

            {/* Scroll Down Arrow */}
            <div className="absolute bottom-10 md:bottom-20 right-0 md:right-20 z-20 flex flex-col items-center gap-2 w-full md:w-auto">
                <span className="text-gray-500 font-medium font-[inter] text-xs tracking-widest uppercase hidden md:block" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>Scroll Down</span>
                <motion.div
                    variants={scrollArrowVariants}
                    initial="initial"
                    animate="animate"
                >
                    <FaChevronDown className="text-orange-500" size={24} />
                </motion.div>
            </div>

            <div className='absolute -bottom-[100px] left-0 w-full z-0'>
                <img src={layeredWaves} alt="layered-waves" className="w-full h-auto" />

            </div>

        </section>
    )
}

export default Hero
