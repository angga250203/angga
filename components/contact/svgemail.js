import React from 'react'
import {motion} from 'framer-motion'



function Svgemail() {
    const icon = {
        hidden: {
          pathLength: 0,
          fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
          pathLength: 1,
          fill: "#4285F4",
          transition:{
            duration:2,
            ease:"easeInOut",
            delay:1
       
          }
        }
      }
    const icon3 = {
        hidden: {
          pathLength: 0,
          fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
          pathLength: 1,
          fill: "#FBBC04",
          transition:{
            duration:2,
            ease:"easeInOut",
            delay:1
       
          }
        }
      }
    const icon1 = {
        hidden: {
          pathLength: 0,
          fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
          pathLength: 1,
          fill: "#EA4335",
          transition:{
            duration:2,
            ease:"easeInOut",
            delay:2
       
          }
        }
      }
    const icon2 = {
        hidden: {
          pathLength: 0,
          fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
          pathLength: 1,
          fill: "#EA4335",
          transition:{
            duration:2,
            ease:"easeInOut",
            delay:1.5
       
          }
        }
      }
    const icon4 = {
        hidden: {
          pathLength: 0,
          fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
          pathLength: 1,
          fill: "#34A853",
          transition:{
            duration:2,
            ease:"easeInOut",
            delay:1.5
       
          }
        }
      }
  return (
    <svg width="100" height="199" viewBox="0 0 268 199" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
        variants={icon}
        initial="hidden"
        animate="visible"
        d="M18.2985 198.438H60.9951V94.7464L0 49V180.14C0 190.249 8.1886 198.438 18.2985 198.438Z" fill="#4285F4" />
        <motion.path
        variants={icon2}
        initial="hidden"
        animate="visible"
        d="M0 27.4971V51.8952L60.9951 97.6415V18.3478L43.9165 5.53887C25.8162 -8.03255 0 4.88317 0 27.4971V27.4971Z" fill="#C5221F" />
        <motion.path
        variants={icon1}
        initial="hidden"
        animate="visible"
        d="M61 97.2937V18L134.194 72.8956L207.388 18V97.2937L134.194 152.189L61 97.2937Z" fill="#EA4335" />
        <motion.path
        variants={icon3}
        initial="hidden"
        animate="visible"
        d="M207 18.3478V97.6415L267.995 51.8952V27.4971C267.995 4.88317 242.179 -8.03255 224.079 5.53887L207 18.3478Z" fill="#FBBC04" />
        <motion.path
        variants={icon4}
        initial="hidden"
        animate="visible"
        d="M207 198.438H249.697C259.807 198.438 267.995 190.249 267.995 180.14V49L207 94.7464V198.438Z" fill="#34A853" />
    </svg>
  )
}

export default Svgemail