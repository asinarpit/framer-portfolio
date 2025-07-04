import React, { useState, useEffect } from 'react';
import { hover, motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import ParagraphTransition from '../components/ParagraphTransition';;
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import HeadingTransition from '../components/HeadingTransition';
import { FaArrowRightLong } from 'react-icons/fa6';
import pinImg from "../assets/drawing-pin.webp"
import { FiCode, FiExternalLink } from 'react-icons/fi';

const projects = [
    {
        title: "VeginGo",
        description: "An e-commerce platform for delivering fresh vegetables and fruits in bulk and online, built with React, Redux, and MUI.",
        image: "/Project1.png",
        codeLink: "#",
        visitLink: "https://vegingo.com"
    },
    {
        title: "PlanItNow",
        description: "A college event management system with real-time notifications, event discussions, and role-based dashboards using the MERN stack.",
        image: "Project2.png",
        codeLink: "#",
        visitLink: "https://plan-it-now-three.vercel.app"
    },
    {
        title: "CryptoRamp",
        description: "A secure frontend for a crypto ramp platform allowing easy buy/sell of crypto assets with a clean, intuitive UI.",
        image: "/Project3.png",
        codeLink: "#",
        visitLink: "https://crypto-ramp.vercel.app"
    },
    {
        title: "QuickMart",
        description: "A modern grocery e-commerce UI prototype featuring seamless navigation, product categorization, and cart management.",
        image: "/Project4.png",
        codeLink: "#",
        visitLink: "https://quick-mart-fjse.vercel.app"
    }
];


const container = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const word = {
    hidden: { opacity: 0.1, y: 10 },
    visible: { opacity: 1, y: 0 },
};

const paragraph = "Currently building a Workout Planner with an AI Coach that generates personalized fitness routines, tracks user progress, offers real-time feedback, and adapts workouts based on performance and goals."



const buttonContainerVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.1
        }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.2 }
    }
};

const buttonItemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: [0.19, 1, 0.22, 1]
        }
    },
    exit: {
        opacity: 0,
        y: 10,
        transition: { duration: 0.2 }
    }
};

function Projects() {
    const numCards = 4;
    const [radius, setRadius] = useState(450);
    const [rotation, setRotation] = useState(0);
    const rotationValue = useMotionValue(0);
    const smoothRotation = useSpring(rotationValue, { stiffness: 100, damping: 20 });

    useEffect(() => {
        const handleResize = () => {
            setRadius(window.innerWidth < 768 ? 280 : 450);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleRotate = (angle) => {
        setRotation((prev) => {
            const newRotation = prev + angle;
            rotationValue.set(newRotation);
            return newRotation;
        });
    };

    const ProjectCard = ({ angle, idx, description, image, codeLink, visitLink }) => {
        const counterRotation = useTransform(smoothRotation, (v) => -v);
        const [isHovered, setIsHovered] = useState(false);

        return (
            <motion.div
                className="absolute w-[300px] md:w-[400px] rounded-xl flex flex-col items-center justify-center overflow-hidden p-10 gap-12"
                style={{
                    left: '50%',
                    top: '50%',
                    rotate: counterRotation,
                    x: `${radius * Math.cos(angle)}px`,
                    y: `${radius * Math.sin(angle)}px`,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <div 
                    className="relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div
                        className={`relative w-[200px] md:w-[300px] h-[250px] md:h-[400px] shadow-[0_3px_5px_rgb(0,0,0,0.3)] rounded-3xl ${idx % 2 === 0 ? 'rotate-[5deg]' : '-rotate-[5deg]'}`}
                    >
                        <div className="overflow-hidden w-full h-full rounded-3xl">
                            <motion.img
                                src={image}
                                className="w-full h-full object-fill rounded-3xl"
                                whileHover={{ 
                                    scale: 1.1,
                                    transition: { duration: 0.4, ease: "easeOut" }
                                }}
                                alt=""
                            />
                        </div>

                        {/* Hover Buttons */}
                        <div 
                            className="absolute inset-0 flex items-center justify-center gap-4 bg-black/40 rounded-3xl"
                            style={{
                                opacity: isHovered ? 1 : 0,
                                transition: 'opacity 0.3s ease'
                            }}
                        >
                            <AnimatePresence>
                                {isHovered && (
                                    <motion.div
                                        variants={buttonContainerVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        className="flex items-center justify-center gap-4"
                                    >
                                        <motion.div variants={buttonItemVariants}>
                                            <motion.a 
                                                href={codeLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full flex justify-center items-center bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <FiCode />
                                            </motion.a>
                                        </motion.div>

                                        <motion.div variants={buttonItemVariants}>
                                            <motion.a 
                                                href={visitLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 flex justify-center items-center bg-blue-500 text-white rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <FiExternalLink />
                                            </motion.a>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="absolute inset-0 rounded-3xl bg-black/5"></div>
                        <h2
                            className={`absolute bottom-0 drop-shadow-md outline-text left-1/2 -translate-x-1/2 translate-y-1/2 text-[5rem] md:text-[8rem] font-[iter] font-thin ${idx % 2 === 0 ? 'text-blue-500' : 'text-orange-500'}`}
                        >
                            {idx + 1}
                        </h2>
                    </div>
                </div>

                <ParagraphTransition fontSize="text-xs md:text-sm">
                    {description}
                </ParagraphTransition>
            </motion.div>
        );
    };


    return (
        <section id='projects' className="min-h-screen my-10 md:my-20 relative overflow-hidden bg-[url()]">
            <div className='relative z-30 py-10 md:py-20 mx-auto max-w-screen-xl px-4 md:px-0'>
                <div className='flex flex-col md:flex-row md:justify-between gap-10 md:gap-0'>
                    <div className='max-w-full md:max-w-[450px]'>
                        <HeadingTransition title={"MY LATEST WORKS"} fontSize='text-4xl md:text-7xl' />

                        <motion.div
                            className="flex items-center gap-2 cursor-pointer mt-5 md:mt-10"
                            whileHover="hover"
                            initial="initial"
                        >
                            <motion.a
                                href="https://github.com/asinarpit?tab=repositories"
                                target="_blank"
                                className="relative text-base md:text-xl text-blue-500 pb-1 overflow-hidden flex items-center gap-2 "
                            >
                                Explore More Works
                                <motion.span
                                    className="absolute left-0 bottom-0 h-0.5 bg-orange-500 rounded-full"
                                    initial={{ width: 50 }}
                                    variants={{
                                        hover: { width: '100%', transition: { duration: 0.3 } },
                                    }}
                                />
                            </motion.a>

                            <motion.div
                                className="text-blue-500"
                                variants={{
                                    initial: { x: -5, rotate: -15, opacity: 0 },
                                    hover: { x: 0, opacity: 1, rotate: 0, transition: { duration: 0.3 } },
                                }}
                            >
                                <FaArrowRightLong className="text-xl md:text-3xl" />
                            </motion.div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ rotate: 20 }}
                        whileInView={{ rotate: 6, transition: { duration: 0.5, type: "spring", damping: 10, stiffness: 200 } }}
                        className="relative w-full md:w-[350px] h-[250px] md:h-[350px] p-5 md:p-10 rotate-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-gray-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgNzAwIDcwMCIgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiPjxkZWZzPjxmaWx0ZXIgaWQ9Im5ubm9pc2UtZmlsdGVyIiB4PSItMjAlIiB5PSItMjAlIiB3aWR0aD0iMTQwJSIgaGVpZ2h0PSIxNDAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHByaW1pdGl2ZVVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJsaW5lYXJSR0IiPgoJPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuMTAyIiBudW1PY3RhdmVzPSI0IiBzZWVkPSIxNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXN1bHQ9InR1cmJ1bGVuY2UiPjwvZmVUdXJidWxlbmNlPgoJPGZlU3BlY3VsYXJMaWdodGluZyBzdXJmYWNlU2NhbGU9IjE1IiBzcGVjdWxhckNvbnN0YW50PSIwLjc1IiBzcGVjdWxhckV4cG9uZW50PSIyMCIgbGlnaHRpbmctY29sb3I9IiM3OTU3QTgiIHg9IjAlIiB5PSIwJSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgaW49InR1cmJ1bGVuY2UiIHJlc3VsdD0ic3BlY3VsYXJMaWdodGluZyI+CiAgICAJCTxmZURpc3RhbnRMaWdodCBhemltdXRoPSIzIiBlbGV2YXRpb249IjEwMCI+PC9mZURpc3RhbnRMaWdodD4KICAJPC9mZVNwZWN1bGFyTGlnaHRpbmc+CiAgCjwvZmlsdGVyPjwvZGVmcz48cmVjdCB3aWR0aD0iNzAwIiBoZWlnaHQ9IjcwMCIgZmlsbD0idHJhbnNwYXJlbnQiPjwvcmVjdD48cmVjdCB3aWR0aD0iNzAwIiBoZWlnaHQ9IjcwMCIgZmlsbD0iIzc5NTdhOCIgZmlsdGVyPSJ1cmwoI25ubm9pc2UtZmlsdGVyKSI+PC9yZWN0Pjwvc3ZnPg==')] bg-repeat"
                    >
                        <img className="absolute w-8 md:w-12 -top-1 left-[50%] -translate-x-1/2" src={pinImg} alt="" />
                        <motion.p
                            className="text-base md:text-xl font-[caveat] flex flex-wrap"
                            variants={container}
                            initial="hidden"
                            whileInView={"visible"}
                        >
                            {paragraph.split(" ").map((w, i) => (
                                <motion.span key={i} variants={word} className="mr-2 md:mr-3 mb-1 inline-block">
                                    {w}
                                </motion.span>
                            ))}
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-20 z-50 -translate-x-1/2 left-1/2 flex gap-4 mt-8">
                <motion.button
                    onClick={() => handleRotate(-90)}
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeIn" } }}
                    whileHover="hover"
                    className="w-14 h-14 md:w-20 md:h-20 text-white bg-blue-500 rounded-full flex justify-center items-center"
                >
                    <motion.div
                        variants={{
                            hover: { rotate: -20 },
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <FaArrowLeft className="text-xl md:text-3xl" />
                    </motion.div>
                </motion.button>

                <motion.button
                    onClick={() => handleRotate(90)}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeIn" } }}
                    whileHover="hover"
                    className="w-14 h-14 md:w-20 md:h-20 text-orange-500 border-[3px] md:border-[5px] border-orange-500 rounded-full flex justify-center items-center"
                >
                    <motion.div
                        variants={{
                            hover: { rotate: 20 },
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <FaArrowRight className="text-xl md:text-3xl" />
                    </motion.div>
                </motion.button>
            </div>

            <div className="relative md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:translate-y-1/2 z-40 mt-[350px] md:mt-0">
                <motion.div
                    initial={{ rotate: -90 }}
                    whileInView={{ rotate: 0, transition: { duration: 0.3, ease: "easeOut" } }}
                    style={{ rotate: smoothRotation }}
                    className="relative w-[300px] h-[300px] md:w-[800px] md:h-[800px] mx-auto rounded-full"
                >
                    {
                        projects.map((project, idx) => {
                            const angle = (2 * Math.PI * idx) / numCards - Math.PI / 2;
                            return (
                                <ProjectCard
                                    key={idx}
                                    angle={angle}
                                    idx={idx}
                                    image={project.image}
                                    title={project.title}
                                    description={project.description}
                                    codeLink={project.codeLink}
                                    visitLink={project.visitLink}
                                />
                            );
                        })}
                </motion.div>
            </div>

            <div className='blur-fade'></div>
        </section>
    );
}

export default Projects;
