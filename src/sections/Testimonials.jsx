import React from 'react';
import { motion } from 'framer-motion';
import HeadingTransition from '../components/HeadingTransition';

const testimonials = [
    {
        name: "John Doe",
        role: "CEO at TechCorp",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        text: "Working with Arpit was an absolute pleasure. His attention to detail and creative solutions exceeded our expectations."
    },
    {
        name: "Sarah Smith",
        role: "Product Manager",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        text: "The website Arpit created for us is not just beautiful but also performs exceptionally well. Highly recommended!"
    },
    {
        name: "Mike Johnson",
        role: "Startup Founder",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        text: "Arpit's technical expertise and problem-solving skills are outstanding. He delivered our project ahead of schedule."
    },
    {
        name: "Emily Brown",
        role: "Marketing Director",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
        text: "The user experience of our new app is fantastic. Arpit really understood our vision and brought it to life."
    },
    {
        name: "David Wilson",
        role: "Art Director",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
        text: "Incredible attention to design details. The animations and interactions are smooth and engaging."
    }
];

const TestimonialCard = ({ name, role, image, text }) => (
    <motion.div 
        className="min-w-[300px] md:min-w-[400px] bg-white p-6 rounded-xl shadow-lg mx-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className="flex items-center gap-4 mb-4">
            <img 
                src={image} 
                alt={name} 
                className="w-12 h-12 rounded-full object-cover"
            />
            <div>
                <h3 className="font-medium text-gray-900">{name}</h3>
                <p className="text-sm text-gray-500">{role}</p>
            </div>
        </div>
        <p className="text-gray-600 text-sm md:text-base">{text}</p>
    </motion.div>
);

function Testimonials() {
    return (
        <section className="py-20 overflow-hidden bg-gradient-to-br from-blue-50 to-orange-50">
            <div className="max-w-screen-xl mx-auto px-4 md:px-0 mb-10">
                <HeadingTransition 
                    title="CLIENT FEEDBACK" 
                    fontSize="text-4xl md:text-6xl"
                />
            </div>

            {/* First Row - Left to Right */}
            <div className="relative">
                <motion.div 
                    className="flex"
                    animate={{
                        x: [0, -1920],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <div className="flex">
                        {[...testimonials, ...testimonials].map((testimonial, idx) => (
                            <TestimonialCard key={idx} {...testimonial} />
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Second Row - Right to Left */}
            <div className="relative mt-8">
                <motion.div 
                    className="flex"
                    animate={{
                        x: [-1920, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <div className="flex">
                        {[...testimonials, ...testimonials].reverse().map((testimonial, idx) => (
                            <TestimonialCard key={idx} {...testimonial} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Testimonials; 