import React from "react";
import { motion } from "framer-motion";

function Ab() {

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
            delay:2,
            repeatType:"reverse",
            repeat:Infinity,
            repeatDelay:1.2
       
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
            duration:2,
            ease:"easeInOut",
            delay:3,
            repeatType:"reverse",
            repeat:Infinity,
            repeatDelay:1
       
          }
        }
      }
    const pathVariants2 ={
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
            delay:1,
            repeatType:"reverse",
            repeat:Infinity,
            repeatDelay:0.7
       
          }
        }
      }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="158"
      fill="none"
      viewBox="0 0 236 158"
    >
      <rect width="236" height="158" fill="#CACACA" rx="10"></rect>
      <ellipse cx="175" cy="20.5" fill="#FAE631" rx="5" ry="5.5"></ellipse>
      <ellipse cx="203" cy="20.5" fill="#F31E1E" rx="5" ry="5.5"></ellipse>
      <ellipse cx="189" cy="20.5" fill="#4DB81A" rx="5" ry="5.5"></ellipse>
      <motion.path
       variants={pathVariants}
       initial="hidden"
       animate="visible"
      stroke="#F81B1B" strokeWidth="4" d="M21 46.5L118 46.5"></motion.path>
      <motion.path 
      variants={pathVariants1}
      initial="hidden"
      animate="visible"
      stroke="#8381F5" strokeWidth="4" d="M37 62.5L153 62.5"></motion.path>
      <motion.path 
      variants={pathVariants2}
      initial="hidden"
      animate="visible"
      stroke="#26DD38" strokeWidth="4" d="M52 77.5L86 77.5"></motion.path>
      <motion.path
       variants={pathVariants}
       initial="hidden"
       animate="visible"
      stroke="#F08B14" strokeWidth="4" d="M37 90.5L102 90.5"></motion.path>
      <motion.path
       variants={pathVariants2}
       initial="hidden"
       animate="visible"
      stroke="#BF31CB" strokeWidth="3" d="M51 105.5L139 105.5"></motion.path>
      <motion.path 
      variants={pathVariants1}
      initial="hidden"
      animate="visible"
      stroke="#28F361" strokeWidth="3" d="M51 121.5L133 121.5"></motion.path>
      <motion.path 
       variants={pathVariants2}
       initial="hidden"
       animate="visible"
      stroke="#FB2E2E" strokeWidth="3" d="M21 135.5L96 135.5"></motion.path>
    </svg>
  );
}

export default Ab;