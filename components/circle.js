import React from 'react'
import { motion } from 'framer-motion'

function Circle() {


    const circle1 ={
        hidden:{
          y:-500,
          
        },
        visible:{
          y:0,
          pathLength:1,
          transition:{
            duration:60,
            delay:1,
       
            type:'spring',
            stiffness:300,
       
          }
        }
      }
 

      const circle2 ={
        hidden:{
          y:-500,
          
        },
        visible:{
          y:0,
          pathLength:1,
          transition:{
            duration:60,
            delay:0.7,
       
            type:'spring',
            stiffness:300,
       
          }
        }
      }
  return (
    <div className='relative'>
        <motion.div
         variants={circle1}
         initial="hidden"
         animate="visible"
        
        className='w-16 h-16 bg-purple-400 rounded-full'>

        </motion.div>
        <motion.div
        
         variants={circle2}
         initial="hidden"
         animate="visible"
        
        className='w-20 h-20 bg-purple-600 absolute top-0 right-0 rounded-full'>

        </motion.div>
    </div>
  )
}

export default Circle