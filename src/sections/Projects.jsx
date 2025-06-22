import React, { useState, useEffect } from 'react';
import { hover, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import ParagraphTransition from '../components/ParagraphTransition';
import { RxThickArrowLeft, RxThickArrowRight } from 'react-icons/rx';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import HeadingTransition from '../components/HeadingTransition';
import { FaArrowRightLong } from 'react-icons/fa6';
import pinImg from "../assets/drawing-pin.webp"


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

const paragraph = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ex excepturi fugit adipisci cum optio dolores ipsam odit minima beatae obcaecati ullam rerum velit corporis possimus, dolorum tempore. Dolor, pariatur!"

function Projects() {
    const numCards = 4;
    const [radius, setRadius] = useState(500);
    const [rotation, setRotation] = useState(0);
    const rotationValue = useMotionValue(0);
    const smoothRotation = useSpring(rotationValue, { stiffness: 100, damping: 20 });

    useEffect(() => {
        const handleResize = () => {
            setRadius(window.innerWidth < 768 ? 280 : 500);
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

    const ProjectCard = ({ angle, idx, children }) => {
        const counterRotation = useTransform(smoothRotation, (v) => -v);


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
                {children}
            </motion.div>
        );
    };

    return (
        <section id='projects' className="min-h-screen my-10 md:my-20 relative overflow-hidden bg-[url()]">
            <div className='relative z-30 py-10 md:py-20 mx-auto max-w-screen-xl px-4 md:px-0'>
                <div className='flex flex-col md:flex-row md:justify-between gap-10 md:gap-0'>
                    <div className='max-w-full md:max-w-[450px]'>
                        <HeadingTransition title={"MY LATEST WORKS"} fontSize='text-4xl md:text-8xl' />

                        <motion.div
                            className="flex items-center gap-2 cursor-pointer mt-5 md:mt-10"
                            whileHover="hover"
                            initial="initial"
                        >
                            <motion.a
                                href="/"
                                target="_blank"
                                className="relative text-base md:text-xl text-blue-500 pb-1 overflow-hidden flex items-center gap-2"
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

            <div className="absolute bottom-20 z-30 -translate-x-1/2 left-1/2 flex gap-4 mt-8">
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

            <div className="relative md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:translate-y-1/2 mt-[350px] md:mt-0">
                <motion.div
                    initial={{ rotate: -90 }}
                    whileInView={{ rotate: 0, transition: { duration: 0.3, ease: "easeOut" } }}
                    style={{ rotate: smoothRotation }}
                    className="relative w-[300px] h-[300px] md:w-[1200px] md:h-[1200px] mx-auto rounded-full"
                >
                    {Array.from({ length: numCards }).map((_, idx) => {
                        const angle = (2 * Math.PI * idx) / numCards - Math.PI / 2;
                        return (
                            <ProjectCard key={idx} angle={angle} idx={idx}>
                                <div className={`relative w-[200px] md:w-[300px] h-[250px] md:h-[400px] shadow-[0_3px_5px_rgb(0,0,0,0.3)] mt-14 md:mt-28 rounded-3xl ${idx % 2 === 0 ? "rotate-[5deg]" : "-rotate-[5deg]"}`}>
                                    <img
                                        src="https://cdn.dribbble.com/userupload/37414102/file/original-6ac7f82ecf475a67e12e3156185fa776.jpg?resize=1024x768&vertical=center"
                                        className="w-full h-full object-cover rounded-3xl"
                                        alt=""
                                    />
                                    <div className='absolute inset-0 rounded-3xl bg-black/5'></div>
                                    <h2 className={`absolute bottom-0 drop-shadow-md outline-text left-1/2 -translate-x-1/2 translate-y-1/2 text-[5rem] md:text-[10rem] font-[iter] font-thin ${idx % 2 == 0 ? "text-blue-500" : "text-orange-500"}`}>{idx + 1}</h2>
                                </div>
                                <ParagraphTransition fontSize='text-xs md:text-sm'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad unde repellat expedita tempore magnam vel est nesciunt impedit accusamus commodi.
                                </ParagraphTransition>
                            </ProjectCard>
                        );
                    })}
                </motion.div>
            </div>

            <div className='blur-fade'></div>
        </section>
    );
}

export default Projects;
