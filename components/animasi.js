import React,{useState,useEffect} from 'react'
import {motion} from "framer-motion"

const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }


function Animasi() {
    const [panelComplete, setPanelComplete] = useState(false)
    const [iner, setIner] = useState(0)

    useEffect(() => {

        setIner(window.innerHeight)
        
    },[])
  
  return (
    <>
    
    <motion.div
      initial={{ height:0 }}
      animate={{
        height: [0,iner, 0],
        bottom: [0, 0,iner],
      }}
      exit={{ 
        height: [0,iner, 0],
        bottom: [0, 0, iner],
      }}
      transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
      className="h-screen bg-gray-200 dark:bg-gray-800 w-1/2 absolute z-20"
    ></motion.div> 
    <motion.div
      
      initial={{ height: 0 }}
      animate={{
        height: [0,iner, 0],
        top: [0, 0, iner],
      }}
      exit={{
        height: [0, iner, 0],
        top: [0, 0, iner],
      }}
      transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
      className="h-screen bg-gray-300 dark:bg-gray-600 w-1/2 absolute z-20 right-0"
      onAnimationComplete={() => {
        setPanelComplete(!panelComplete)
      }}
    ></motion.div>
       </>
  )
}

export default Animasi