import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ParagraphTransition from './ParagraphTransition';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-6 md:py-8 bg-gray-900 border-t-blue-500 border-t-[5px]">
            <div className="max-w-screen-xl mx-auto px-4 md:px-0">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <ParagraphTransition color='text-gray-300' fontSize='text-xs md:text-sm'>
                            © {currentYear.toString()} Arpit Singh. All rights reserved.
                        </ParagraphTransition>
                    </div>
                    
                    <motion.div 
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ParagraphTransition color='text-gray-300' fontSize='text-xs md:text-sm'>
                            Made with
                        </ParagraphTransition>
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                            className='text-orange-500 mb-2'
                        >
                            <FaHeart />
                        </motion.div>
                        <ParagraphTransition color='text-gray-300' fontSize='text-xs md:text-sm'>
                            by Arpit Singh
                        </ParagraphTransition>
                    </motion.div>

                    <div className="text-center md:text-right mb-2">
                        <a 
                            href="#home"
                            className="text-sm md:text-base text-blue-500 hover:text-orange-500 transition-all duration-300"
                        >
                            Back to top
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 