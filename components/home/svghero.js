import React from 'react'
import { motion } from 'framer-motion'

function Svghero() {
    const pathVariants ={
        hidden:{
          opacity:0,
          pathLength:0
        },
        visible:{
          opacity:1,
          pathLength:1,
          transition:{
            duration:2,
            ease:"easeInOut",
            delay:1
       
          }
        }
      }
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className='w-56 md:w-80'
      fill="none"
      viewBox="0 0 346 24"
    >
      <motion.path
      variants={pathVariants}
      initial="hidden"
      animate="visible"
        stroke="#22A9F5"
        strokeWidth="3"
        d="M1 18.61C111.19 1.714 209.119-2.292 294.787 6.59c2.103 1.37 1.447 2.211-1.968 2.525l-70.542 10.677c-1.016 1.455-.725 2.272.875 2.45 35.248-2.243 75.975-5.044 122.18-8.401"
      ></motion.path>
    </svg>
  )
}

export default Svghero



