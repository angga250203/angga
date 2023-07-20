import React from 'react'
import Loader from './loader'
import Circle from './circle';
import { motion } from 'framer-motion';

function Preload() {

  const separate = {
    hidden: { opacity: 0, y: 0 },
    visible: (custom) => ({
      opacity: 1,
      y: custom * 5,
      transition: { duration: 1.5 ,delay:2.7,},
    }),
  };

  return (
    <div className='absolute left-1/2 -translate-x-1/2 pt-72 md:pt-96 lg:pt-36'>
    <Loader/>
    <Circle/>
    <div className='text-center -mt-9'>
    <motion.h2 
    custom={-1}
    variants={separate}
    initial="hidden"
    animate="visible"
    className='text-xl font-bold tracking-[-0.02em]'>Angga Bimantoro</motion.h2>
    <motion.p 
    custom={1}
    variants={separate}
    initial="hidden"
    animate="visible"
    className='text-gray-500 tracking-[-0.02em]'>frontend developer</motion.p>
    </div>
</div>
  )
}

export default Preload