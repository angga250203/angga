import React from 'react'
import Menu from './menu';
import { motion } from "framer-motion";

function Navi({ toggle }) {
    const variants = {
        open: {
          transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
          transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
      };
  return (
    <motion.ul className='z-40 p-5 absolute top-[100px] -left-16' variants={variants} onClick={toggle}>
  
      <Menu />
    
  </motion.ul>
  )
}

export default Navi