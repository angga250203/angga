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
    const pathVariants1 ={
        hidden:{
          opacity:0,
          pathLength:0
        },
        visible:{
          opacity:1,
          pathLength:1,
          transition:{
            duration:2.4,
            ease:"easeInOut",
            delay:4
       
          }
        }
      }

  return (
    <svg width="317" height="199" viewBox="0 0 317 199" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_0_1)">
    <motion.path
    variants={pathVariants}
    initial="hidden"
    animate="visible"
    strokeLinecap="round"
   
    d="M130.282 33.7034C85.6205 44.98 51.1183 62.2255 26.7759 85.4399C-87.2514 231.882 357.543 213.272 304.36 72.5058C293.411 54.0355 275.768 39.5336 251.43 29" stroke="#61C5FD" strokeWidth="7" />
  </g>
  <g filter="url(#filter1_d_0_1)">
    <motion.path
    variants={pathVariants1}
    initial="hidden"
    animate="visible"
    d="M196.326 6.45296C196.222 6.77001 196.305 7.12086 196.54 7.35678L227.69 38.7783C227.915 39.0049 228.242 39.0922 228.545 39.0067C228.848 38.9213 229.08 38.6769 229.151 38.3673L232.786 22.7032C232.795 22.6996 232.822 22.7399 232.831 22.7359L239.176 19.9031C239.469 19.7726 239.646 19.4476 239.667 19.1244C239.677 18.9778 239.641 18.8124 239.583 18.6824C239.513 18.5265 239.394 18.3807 239.246 18.2854L234.481 15.2328L237.567 1.82192C237.611 1.63181 237.589 1.43363 237.511 1.25924C237.474 1.17558 237.423 1.09673 237.36 1.02676C237.167 0.811224 236.882 0.703982 236.598 0.740846L197.033 5.86743C196.705 5.90985 196.431 6.13692 196.326 6.45296ZM230.948 22.2059C230.989 22.2233 231.03 22.2339 231.071 22.2449L227.807 36.424L200.858 9.24046L230.948 22.2059ZM236.976 18.9565L233.298 20.5986L234.1 17.116L236.976 18.9565ZM235.584 2.64632L232.703 15.159C232.612 15.3162 232.575 15.4906 232.587 15.6613L231.467 20.5263L200.516 7.19006L235.584 2.64632Z" fill="#61C5FD" />
  </g>
  <defs>
    <filter id="filter0_d_0_1" x="0.499619" y="25.7879" width="315.796" height="172.712" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feOffset dy="4" />
      <feGaussianBlur stdDeviation="2" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
    </filter>
    <filter id="filter1_d_0_1" x="192.282" y="0.733704" width="51.3873" height="46.3052" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feOffset dy="4" />
      <feGaussianBlur stdDeviation="2" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
    </filter>
  </defs>
  </svg>
  )
}

export default Svghero