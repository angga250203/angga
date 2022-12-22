import React from 'react'
import {motion} from 'framer-motion'

function Animationskill() {
    const imageVariant ={
        hidden: {
          scale: 0.7,
        },
    
        visible: {
          scale: 1,
          transition: {
            duration: 0.6,
            delay: 0.8,
            ease: "easeOut",
          },
        },
      }
  return (
  
         <div className='flex gap-4 mb-12 mt-24'>
             <motion.p
             animate={{scale:1.1}}
             transition= {{ delay:2, duration:0.3,repeatType:"reverse",repeat:Infinity,repeatDelay:1 }}
             className='bg-blue-300 text-sm mt-8 md:text-3xl font-semibold px-3 md:px-[45px] py-3 md:py-9 rounded-full shadow-lg '>S</motion.p>
             <motion.p
              animate={{scale:1.1}}
              transition= {{ delay:1, duration:0.3,repeatType:"reverse",repeat:Infinity,repeatDelay:1.1 }}
             className='bg-purple-300 -mt-8 text-sm md:text-3xl font-semibold px-3 md:px-[45px] py-3 md:py-9 rounded-full shadow-lg'>K</motion.p>
             <motion.p 
             animate={{scale:1.1}}
             transition= {{ delay:1.2, duration:0.3,repeatType:"reverse",repeat:Infinity,repeatDelay:1.2 }}
             className='bg-green-300 text-sm -mt-12 md:text-3xl font-semibold px-[15px] md:px-[50px] py-3 md:py-9 rounded-full shadow-lg'>I</motion.p>
             <motion.p 
             animate={{scale:1.1}}
             transition= {{ delay:1.3, duration:0.3,repeatType:"reverse",repeat:Infinity,repeatDelay:1.3 }}
             className='bg-blue-400 text-sm md:text-3xl font-semibold px-3 md:px-[45px] py-3 md:py-9 rounded-full shadow-lg'>L</motion.p>
             <motion.p 
             animate={{scale:1.1}}
             transition= {{ delay:1.4, duration:0.3,repeatType:"reverse",repeat:Infinity,repeatDelay:1.4 }}
             className='bg-red-300 -mt-16 text-sm md:text-3xl font-semibold px-3 md:px-[45px] py-3 md:py-9 rounded-full shadow-lg'>L</motion.p>
             <motion.p 
             animate={{scale:1.1}}
             transition= {{ delay:1.5, duration:0.3,repeatType:"reverse",repeat:Infinity,repeatDelay:1.5 }}
             className='bg-yellow-300 -mt-12 text-sm md:text-3xl font-semibold px-3 md:px-[45px] py-3 md:py-9 rounded-full shadow-lg'>S</motion.p>
         </div>   
    
  )
}

export default Animationskill