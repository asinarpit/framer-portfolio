import { motion} from 'framer-motion';
import ParagraphTransition from '../components/ParagraphTransition';
import TextLoop from '../components/TextLoop';
import { FaArrowRight, FaReact } from 'react-icons/fa';
import HeadingTransition from '../components/HeadingTransition';
function About() {


  const iconVariants = {
    initial: { rotate: 20, scale: 1 },
    hover: { rotate: 0, scale: 1.1 },
  };

  const twinkleVariant = {
    initial: { opacity: 1, scale: 1 },
    animate: {
      opacity: [1, 0.3, 1],
      scale: [0.5, 1, 0.5, 1],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };




  return (
    <section id='about' className="min-h-screen my-10 md:my-20 max-w-screen-xl mx-auto pt-10 md:pt-20 px-4 md:px-0">
      <div className='flex justify-center items-center'>
        <div className='flex flex-col md:flex-row gap-5 md:gap-10 items-center'>
          <div className=''>
            <div className='flex items-center gap-2 md:gap-5'>
              <HeadingTransition title={"ABOUT"} fontSize='text-5xl md:text-8xl' />
              <div className='relative w-[120px] md:w-[200px] h-[80px] md:h-[120px]'>
                <div className='w-full h-full bg-blue-500 border-[3px] md:border-[5px] border-blue-500 rounded-full relative overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
                  <img src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" className='w-full h-full object-cover rounded-full' alt="" />
                  <motion.div
                    className='absolute right-0 top-0 h-full bg-blue-500'
                    initial={{ width: "100%" }}
                    whileInView={{
                      width: 0,
                      transition: {
                        duration: 0.5,
                        delay: 0.2,
                      }
                    }}
                  />
                </div>

                <div className='absolute w-[30px] md:w-[50px] h-[30px] md:h-[50px] z-20 -top-5 md:-top-10 -right-2 md:-right-5'>
                  <svg
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#f97316"
                    className="w-6 h-6 md:w-10 md:h-10"
                  >
                    <motion.path
                      d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937z"
                      variants={twinkleVariant}
                      initial="initial"
                      whileInView="animate"
                      transition={{ delay: 0 }}
                    />
                    <motion.path
                      d="M3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162z"
                      variants={twinkleVariant}
                      initial="initial"
                      whileInView="animate"
                      transition={{ delay: 0.25 }}
                    />
                    <motion.path
                      d="M10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"
                      variants={twinkleVariant}
                      initial="initial"
                      whileInView="animate"
                      transition={{ delay: 0.5 }}
                    />
                  </svg>
                </div>

              </div>
            </div>
            <div className='flex gap-2 md:gap-5'>
              <div className='relative w-full h-[80px] md:h-[120px] bg-orange-500 rounded-full shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] overflow-hidden'>
                <img src="https://i.pinimg.com/736x/12/50/ae/1250aecf05bf654dc783093b5bb8502c.jpg" alt="" className='w-full h-full object-cover' />
                <div className='absolute flex justify-center items-center inset-0 bg-black/40 z-20'>
                  <h2 className='text-xl md:text-3xl font-thin tracking-wide text-gray-100 font-serif'>Astrophelic</h2>
                </div>
                <motion.div
                  className='absolute left-0 z-30 top-0 h-full bg-orange-500'
                  initial={{ width: "100%" }}
                  whileInView={{
                    width: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.2,
                    }
                  }}
                />
              </div>
              <HeadingTransition title={"ME"} fontSize='text-5xl md:text-8xl' />
            </div>


          </div>
          <div className='text-center md:text-left'>
            <ParagraphTransition fontWeight='font-medium' fontSize='text-sm md:text-base'>
              I'm a passionate <TextLoop fontSize={"text-base md:text-lg"} fontWeight={"font-bold"} /> with a knack for creating engaging user experiences.
              Skilled in React, Framer Motion, and modern web technologies.
              Always eager to learn and bring ideas to life through code.
            </ParagraphTransition>
          </div>


        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 mt-10">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

          <div className="relative w-full md:w-[300px] h-[250px] md:h-[300px] bg-orange-500 rounded-3xl z-10 overflow-hidden border-[3px] md:border-[5px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] border-orange-500">
            <img src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwbGFwdG9wfGVufDB8fDB8fHww" className='w-full h-full object-cover' alt="" />
            <motion.div className='absolute z-30 right-0 top-0 h-full bg-orange-500'
              initial={{ width: "100%" }}
              whileInView={{
                width: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2,
                }
              }}>

            </motion.div>
          </div>
          <div className='mt-5 md:mt-14'>
            <HeadingTransition title={"Work Experience"} fontSize='text-xl md:text-2xl' />
            <div className='w-[60px] md:w-[80px] h-[2px] my-2 bg-orange-500 rounded-full'></div>
            <ParagraphTransition fontSize='text-xs md:text-sm'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui perferendis sed laborum voluptate sint, optio beatae eveniet ex rerum dicta?
            </ParagraphTransition>
            <motion.button
              initial={{
                y: 50, opacity: 0, transition: {
                  duration: 0.3,
                  ease: "easeIn"
                }
              }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover="hover"
              className="relative bg-blue-500 text-white px-6 md:px-8 py-4 md:py-5 rounded-full mt-5 hover:bg-blue-600 transition-colors duration-300 shadow-md hover:shadow-lg w-full md:w-auto"
            >
              <p className="text-sm md:text-base text-gray-100 font-semibold pr-8">Get My CV</p>
              <motion.div
                variants={iconVariants}
                initial="initial"
                whileHover={"hover"}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="absolute top-1 md:top-2 right-1 md:right-2 w-10 md:w-12 h-10 md:h-12 flex items-center justify-center bg-orange-500 rounded-full border-4 border-white"
              >
                <FaArrowRight className="text-white" size={14} />
              </motion.div>
            </motion.button>
          </div>

        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

          <div className="relative w-full md:w-[300px] h-[250px] md:h-[300px] bg-blue-500 rounded-3xl overflow-hidden border-[3px] md:border-[5px] border-blue-500 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            <img src="https://images.unsplash.com/photo-1597167100957-1dfa110c1c14?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlYWRpbmclMjBib29rfGVufDB8fDB8fHww" className='w-full h-full object-cover' alt="Hobbies" />
            <motion.div className='absolute z-30 left-0 top-0 h-full bg-blue-500'
              initial={{ width: "100%" }}
              whileInView={{
                width: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2,
                }
              }}>

            </motion.div>
          </div>

          <div className='mt-5 md:mt-14'>
            <HeadingTransition title={"Hobbies"} fontSize='text-xl md:text-2xl' />
            <div className='w-[60px] md:w-[80px] h-[2px] my-2 bg-blue-500 rounded-full'></div>
            <ParagraphTransition fontSize='text-xs md:text-sm'>
              I have a deep interest in reading books about astronomy and physics — exploring the mysteries of the universe and the laws that govern it truly fascinates me. Alongside this, I love sketching in my free time and unwinding with immersive video games.
            </ParagraphTransition>
          </div>

        </div>



      </div>
    </section>
  );
}

export default About;
