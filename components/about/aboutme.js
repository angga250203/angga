import { motion, useViewportScroll, useTransform } from 'framer-motion'
import React from 'react'
import { skills } from '../home/data/data'
import Ab from './ab'
import Svgabout from './svgabout'



function Aboutme() {
  const { scrollYProgress } = useViewportScroll();
  const swipe = useTransform(scrollYProgress, [0, 1], [0, -600]);


  return (
    <section className="bg-gray-50 dark:bg-gray-900 ">
    <div className='md:flex bg-gray-50 dark:bg-gray-900 align-center'>
      <div className="max-w-6xl  flex justify-center md:justify-start mx-auto  h-48 ">
          <motion.div  style={{
          swipeY: scrollYProgress
        }} className='max-w-6xl  flex justify-center md:justify-start mx-auto'>
        <motion.h1 
        initial={{ y:-400 }}
        animate={{ y:0 }}
        transition={{ delay:1.5, duration:1 ,type:'spring'}}
        className="  text-5xl md:text-9xl font-bold py-20 text-center  ">
          Abou
        </motion.h1>
        <motion.h1
         initial={{ rotate:45 }}
         animate={{ rotate:0 }}
         transition={{ delay:2, duration:0.5 ,type:'spring',stiffness:200}}
         className='text-5xl md:text-9xl font-bold py-20 text-center '>t</motion.h1>
         <motion.h1
          whileHover={{
            initial:{y:0},
            animate:{y:-400}
          }}
         className='text-5xl md:text-9xl font-bold py-20  cursor-pointer   text-center '>
          .
         </motion.h1>
         <div className='relative z-10 mt-5 md:mt-16 ml-7  '>
          <Ab/>
        </div>
      </motion.div>
      
    </div>
    </div>  
      <div className="bg-gray-200 -mt-10 py-2 md:py-12 dark:bg-gray-600">
        <div className='max-w-6xl mx-auto md:mb-24  px-3 md:px-5 flex flex-wrap'>
          <div className='w-full mt-8   md:w-6/12'>

          <div className='flex items-center mt-24 md:mt-40  justify-between'>
           <h3 className='text-3xl font-semibold mb-2'>Hello, </h3>

             </div>
          <p className='md:text-lg text-gray-500 dark:text-gray-200'>My name is Angga Bimantoro, or you can call me Angga. I focus on studying web application 
            development and web design. The main programming language I'm exploring is Javascript, as well
             as the React framework (and the environment in general). I love learning things, and always want
             to learn new things. I am enthusiastic, reliable, responsible and hardworking person.</p>
             <div className='flex gap-3  mt-5'>
               <a href='https://www.instagram.com/angga_bimnn/'>
             <motion.img
             initial={{ x:-100 }}
             animate={{ x:0 }}
             transition={{ delay:2.3, duration:1 ,type:'spring'}}

             className='w-7 cursor-pointer  h-7 ' src='/medsos/ig.png'>
             </motion.img>
             </a>
             <a href='https://www.facebook.com/angga.bimantoro.9/'>
             <motion.img 
             initial={{ x:-110 }}
             animate={{ x:0 }}
             transition={{ delay:2.2, duration:1 ,type:'spring'}}
             className='w-7 cursor-pointer  h-7' src='/medsos/fb.png'></motion.img>
             </a>
             <a href='https://linkedin.com'>
             <motion.img 
             initial={{ x:-120 }}
             animate={{ x:0 }}
             transition={{ delay:2.1, duration:1 ,type:'spring'}}
             className='w-7 cursor-pointer  h-7' src='/medsos/in.png'></motion.img>
             </a>
             <a href='https://twitter.com/lllllll876qq'>
             <motion.img 
              
              initial={{ x:-130 }}
              animate={{ x:0 }}
              transition={{ delay:2, duration:1 ,type:'spring'}}
             className='w-7 cursor-pointer   h-7' src='/medsos/tw.png'></motion.img>
             </a>
             </div>
        </div>
            
       
        <div className='w-full md:w-6/12  mt-12 md:mt-36'>
         <div className='md:mt-10 mt-12 px-5 md:ml-10 lg:ml-24'>
            <Svgabout/>
          </div>
      </div>
      </div>
    
      <div className="flex flex-col max-w-6xl mb-12 mt-12 px-5 mx-auto md:flex-row justify-between relative">
   
      
     
      <div className="relative  w-full text-center md:text-left  md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0 ">
          <h1 className='text-4xl font-bold mb-5'>My skills</h1>
       <p className='text-xl text-gray-600 dark:text-gray-300' > I got the experience.</p>
       <p className='text-xl text-gray-600 dark:text-gray-300' > Here is my toolbelt for success.</p>
      </div>
      <div className="relative max-w-lg w-full  mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
        {skills.map((item, index) => {
          return (
            <div
              title={item.title}
              key={index}
              className="w-10 mx-auto flex items-center flex-col justify-center"
            >
              <motion.img
               whileHover={{ scale: 1.2, rotate: 360,duration:1 }}
               whileTap={{ scale: 1.2, rotate: 360,duration:1 }}
              src={item.icon} style={item.style} />
              <p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
    </div>
      </section>
  )
}

export default Aboutme