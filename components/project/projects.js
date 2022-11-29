import React from 'react'
import Card from '../home/card';
import { projects } from "../home/data/data";
import { motion } from 'framer-motion';
import Laptop from './laptop';

function Project() {
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
    <section className="bg-gray-50 dark:bg-gray-900 ">
       <div className='md:flex bg-gray-50 dark:bg-gray-900 align-center'>
    <div className="max-w-6xl  flex justify-center md:justify-start mx-auto h-48 ">
        <div className='max-w-6xl mx-auto '>
            <div className='flex'>
      <motion.h1
      initial={{ y:-400 }}
      animate={{ y:0 }}
      transition={{ delay:1.5, duration:1 ,type:'spring'}}
      className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
        Projec
      </motion.h1>
      <motion.h1
      initial={{ x:40 }}
      animate={{ x:0 }}
      transition={{ delay:1.5, duration:1 ,type:'spring'}}
      className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left"
      >
        t
      </motion.h1>
      <motion.h1
      initial={{ x:-70 }}
      animate={{ x:0 }}
      transition={{ delay:1.5, duration:1 ,type:'spring'}}
      className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left"
      >
        s .
      </motion.h1>
      <div className='relative z-10 md:mt-16 '>
        <Laptop/>
        </div>
        </div> 

    </div>

    </div>
    </div>
    <div className="bg-gray-200 -mt-10 py-2 md:py-12 dark:bg-gray-600 ">
    <div className="grid grid-cols-1 gap-12 max-w-6xl pb-20 mx-auto px-5 md:px-5 md:gap-5 md:grid-cols-3 items-start mt-24">
      {projects.map((item) => {
        return (
          <Card key={item.id} project={item} />
        );
      })}
    </div>
  </div>
    </section>
  )
}

export default Project