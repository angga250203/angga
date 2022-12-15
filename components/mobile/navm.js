import React from 'react'
import Navi from './navi'
import Toogle from './toogle'
import { motion, useCycle } from "framer-motion";




function Navm() {
  const sidebar = {
    
    open: {
      clipPath: `circle(122.0% at 88% 16%)`,
      transition: {
        duration: 0.4,
      },
    },
    closed: {
      clipPath: `circle(4.5% at 87% 6%)`,
      transition: {
        duration: 0.4,
        delay: 0.4,
      },
    },
  
    };

const [isOpen, toggleOpen] = useCycle(false, true);
 
  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
    <motion.div className="background z-30" variants={sidebar} />
    <Toogle toggle={() => toggleOpen()} />
    <Navi toggle={() => toggleOpen()}/>
  </motion.nav>
  )
}

export default Navm