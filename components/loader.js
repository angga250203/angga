import React from "react";
import {motion} from 'framer-motion'

function Loader() {

    const pathVariants ={
        hidden:{
          opacity:0,
          pathLength:0
        },
        visible:{
          opacity:1,
          pathLength:1,
          transition:{
            duration:1,
            delay:2,
          
            
       
          }
        }
      }


      const pathVariants1 ={
        hidden:{
         opacity:0,
          pathLength:0
        },
        visible:{
          opacity:1,
          pathLength:1,
          transition:{
            duration:1,
            delay:2.5,
            
            
       
          }
        }
      }


      const circle ={
        hidden:{
          y:-900,
          
        },
        visible:{
          y:0,
          pathLength:1,
          transition:{
            duration:5,
            delay:0.5,
            ease:"easeInOut",
            duration:5,type:'spring',stiffness:300,
       
          }
        }
      }
 
  return (





        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-60 h-40 md:w-72 md:h-40 lg:w-96 lg:h-56 "
        fill="none"
        viewBox="0 0 649 795"
      >
        <motion.path
            variants={pathVariants1}
            initial="hidden"
            animate="visible"
          stroke="#A525C5"
          strokeLinecap="round"
          strokeWidth="190"
          d="M313.838 98L132 496.356"
        ></motion.path>


        <motion.path
        variants={pathVariants1}
        initial="hidden"
        animate="visible"
          stroke="#24EBBB"
          strokeLinecap="round"
          strokeWidth="190"
          d="M314 96l203 388"
        ></motion.path>


        <motion.path
        variants={pathVariants}
        initial="hidden"
        animate="visible"
          stroke="#F562F8"
          strokeLinecap="round"
          strokeWidth="190"
          d="M96 577c82.616-286.137 421.967-223.984 457 0"
        ></motion.path>


        <motion.circle
          variants={circle}
          initial="hidden"
          animate="visible"
        cx="324" cy="686" r="109" fill="#D9D9D9"></motion.circle>
      </svg>
      
  );
}

export default Loader;
