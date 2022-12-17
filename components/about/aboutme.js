import { motion, useTransform, useViewportScroll} from 'framer-motion'
import React,{useEffect} from 'react'
import Dod from '../animation/doodle'
import { skills } from '../home/data/data'
import Skiiill from './skiiill'
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
         <div className='relative z-10 mt-12 md:mt-16 ml-7  '>
        <Dod/>
        </div>
      </motion.div>
      
    </div>
    </div>  
   
      <div className="bg-gray-200 -mt-10 py-12 md:py-12 dark:bg-gray-600" >
        <div className='max-w-6xl mx-auto md:mb-24  px-3 md:px-5 flex flex-wrap'>
          <div className='w-full mt-8   md:w-6/12'>

          <div className='flex items-center  md:mt-40  justify-between'>
           <h3 className='text-3xl font-semibold mb-2'>Hello, </h3>

             </div>
          <p className='md:text-lg text-gray-500 dark:text-gray-200  font-poppins'>My name is Angga Bimantoro, or you can call me Angga. I focus on studying web application 
            development and web design. The main programming language I'm exploring is Javascript, as well
             as the React framework (and the environment in general). I love learning things, and always want
             to learn new things. I am enthusiastic, reliable, responsible and hardworking person.</p>
             
        </div>
      
            
       
        <div className='w-full md:w-6/12  mt-12 md:mt-36'>
         <div className='md:mt-10 mt-12 px-5 lg:ml-20'>
            <Svgabout/>
          </div>
      </div>
      </div>
      </div>
    

      <Skiiill/>
    
      <div id="learnmore" className='max-w-6xl py-12 mx-auto flex px-3 gap-3' >
        <h3 className='text-4xl font-semibold font-poppins'>My Tool Stack</h3>
       
      </div>
      <div   className='max-w-6xl lg:py-16 mx-auto flex flex-wrap '>

      {skills.map((item, index) => {
          return (
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:1}}
        viewport={{ once: true }}
        key={index} className='md:w-3/12 w-1/2 px-3 mb-5'>
          <img className=' w-12 md:w-16' src={item.icon} alt="imhj" />
          <h3 className='font-semibold text-lg'> {item.title}</h3>
          <p className='text-sm text-gray-400'>{item.des}</p>
        </motion.div>
             );
            })}
 
  
        
      </div>

      

      
      
 
      </section>
  )
}

export default Aboutme