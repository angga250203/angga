import React from 'react'
import Navi from './navi'
import Toogle from './toogle'
import { motion, useCycle } from "framer-motion";




function Navm() {
  const sidebar = {
    
    open: {
      clipPath: `circle(133.8% at 95% 6%)`,
      transition: {
        duration: 0.4,
      },
    },
    closed: {
      clipPath: `circle(4.5% at 87% 5%)`,
      transition: {
        duration: 0.4,
        delay: 0.4,
      },
    },
  
    };

const [isOpen, toggleOpen] = useCycle(false, true);
 
  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
    <motion.div className="backdrop-blur-md bg-white/30 absolute top-0  right-0 bottom-0 w-screen z-30" variants={sidebar} />
    <Toogle toggle={() => toggleOpen()} />
    <Navi toggle={() => toggleOpen()}/>
  </motion.nav>
  )
}

export default Navm