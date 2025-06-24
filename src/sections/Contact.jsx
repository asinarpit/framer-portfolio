import React from 'react';
import HeadingTransition from '../components/HeadingTransition';
import ParagraphTransition from '../components/ParagraphTransition';
import CoffeIMG from "../assets/coffee-cup.svg"
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { PiXLogo } from 'react-icons/pi';

const staggerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const iconVariants = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeIn' } },
};

function Contact() {
    return (
        <section id='contact' className="min-h-screen bg-gradient-to-br py-10 md:py-20 px-4 md:px-0">
            <div className='max-w-screen-xl mx-auto h-full'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div>
                        <HeadingTransition title={"LET'S CHAT!"} fontSize='text-5xl md:text-9xl' />
                        <ParagraphTransition fontSize='text-sm md:text-2xl'>
                            Got a cool project in mind? Want to collaborate? Or just feel like saying hi? I'm always down for a good conversation.
                            <img className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] inline-block ml-2" src={CoffeIMG} alt="coffee" />
                        </ParagraphTransition>
                        <motion.div
                            className='flex gap-4 md:gap-6 mt-6 md:mt-10 justify-center md:justify-start'
                            variants={staggerVariants}
                            initial="hidden"
                            whileInView="show"
                        >
                            <motion.a href="https://github.com/asinarpit" target="_blank" rel="noopener noreferrer"
                                variants={iconVariants}
                                className="text-2xl md:text-4xl text-blue-500 hover:text-orange-400 transition"
                            >
                                <FaGithub />
                            </motion.a>
                            <motion.a href="https://www.linkedin.com/in/arpit-singh-6a646a272" target="_blank" rel="noopener noreferrer"
                                variants={iconVariants}
                                className="text-2xl md:text-4xl text-blue-500 hover:text-orange-400 transition"
                            >
                                <FaLinkedin />
                            </motion.a>
                            <motion.a href="https://x.com/asin_arpit" target="_blank" rel="noopener noreferrer"
                                variants={iconVariants}
                                className="text-2xl md:text-4xl text-blue-500 hover:text-orange-400 transition"
                            >
                                <PiXLogo />
                            </motion.a>
                        </motion.div>
                    </div>

                    <div className='grid grid-cols-1 gap-6 md:gap-10'>
                        <div className="relative rounded-3xl border-dashed border-[3px] md:border-[5px] border-orange-500 p-5 md:p-10">
                            <HeadingTransition title={"Drop me a line"} fontSize='text-xl md:text-4xl' />
                            <ParagraphTransition fontSize='text-sm md:text-lg'>Whether it's about work, life, or that random shower thought you had - I'd love to hear from you!</ParagraphTransition>
                            <a href="mailto:asin060902@gmail.com" className='text-base md:text-xl text-orange-500'>
                                asin060902@gmail.com
                            </a>
                            <motion.div className='absolute -bottom-[50px] md:-bottom-[100px] -right-[50px] md:-right-[100px] text-blue-500 w-[100px] md:w-[180px] h-[100px] md:h-[180px] rounded-full'
                                initial={{ x: -100, y: 100, scale: 0.5, opacity: 0, rotate: 0 }}
                                whileInView={{ x: 0, y: 10, scale: 1, opacity: 1, rotate: 12 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="mail"
                                    fill="#f97316"
                                    stroke="#f97316"
                                    className="icon glyph"
                                    viewBox="0 0 24 24"
                                >
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        stroke="#f5f5f5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2.448"
                                    >
                                        <path d="M22 8.32V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.69l2 1.09 7.52 4.1A1 1 0 0 0 12 14a1 1 0 0 0 .5-.14L20 9.49Z"></path>
                                        <path d="m22 6-2 1.18-8 4.67L4 7.5 2 6.4V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2"></path>
                                    </g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M22 8.32V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.69l2 1.09 7.52 4.1A1 1 0 0 0 12 14a1 1 0 0 0 .5-.14L20 9.49Z"></path>
                                        <path d="m22 6-2 1.18-8 4.67L4 7.5 2 6.4V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2Z"></path>
                                    </g>
                                </svg>
                            </motion.div>
                        </div>

                        <div className="relative bg-white rounded-3xl border-[3px] md:border-[5px] border-blue-500 p-5 md:p-10">
                            <HeadingTransition title={"Quick chat?"} fontSize='text-xl md:text-4xl' />
                            <ParagraphTransition fontSize='text-sm md:text-lg'>Need to discuss something urgently? Let's hop on a quick call and sort things out!</ParagraphTransition>
                            <a
                                href="https://calendly.com/asin060902/30min"
                                className='text-base md:text-xl text-blue-500 ml-5 md:ml-10'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Schedule a call
                            </a>
                            <motion.div className='absolute -bottom-[50px] md:-bottom-[100px] -left-[50px] md:-left-[100px] text-blue-500 right-0 w-[100px] md:w-[200px] h-[100px] md:h-[200px] rounded-full'
                                initial={{ x: 100, y: 100, scale: 0.5, opacity: 0, rotate: -30 }}
                                whileInView={{ x: 0, y: 10, scale: 1, opacity: 1, rotate: 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#fcfcfc" stroke-width="1.2"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" fill="#3b82f6"></path> <path d="M15 12C15 12.5523 15.4477 13 16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12Z" fill="white"></path> <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" fill="white"></path> <path d="M7 12C7 12.5523 7.44772 13 8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12Z" fill="white"></path> </g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" fill="#3b82f6"></path> <path d="M15 12C15 12.5523 15.4477 13 16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12Z" fill="white"></path> <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" fill="white"></path> <path d="M7 12C7 12.5523 7.44772 13 8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12Z" fill="white"></path> </g></svg>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;