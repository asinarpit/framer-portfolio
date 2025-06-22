import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-6 md:py-8 bg-gradient-to-r from-blue-500/10 to-orange-500/10">
            <div className="max-w-screen-xl mx-auto px-4 md:px-0">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <p className="text-sm md:text-base text-gray-600">
                            © {currentYear} Arpit Singh. All rights reserved.
                        </p>
                    </div>
                    
                    <motion.div 
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-sm md:text-base text-gray-600">Made with</span>
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        >
                            <FaHeart className="text-orange-500" />
                        </motion.div>
                        <span className="text-sm md:text-base text-gray-600">in India</span>
                    </motion.div>

                    <div className="text-center md:text-right">
                        <a 
                            href="#home"
                            className="text-sm md:text-base text-blue-500 hover:text-orange-500 transition-colors duration-300"
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