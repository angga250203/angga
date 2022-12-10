import React from 'react'
import {motion} from 'framer-motion'

function Laptop() {

    
  return (
    <svg className='' width="100" height="200" viewBox="0 0 343 322" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path 
      animate={{rotate:180}}
      transition= {{ delay:3, duration:0.9,repeatType:"reverse",repeat:Infinity,repeatDelay:3 }}
      d="M154.463 180.705C161.392 176.376 167.668 171.096 173.106 165.043L192.711 176.364L210.562 145.445L190.996 134.148C193.484 126.553 194.947 118.497 195.222 110.146L217.481 106.222L211.279 71.0616L189.024 74.9864C185.948 67.3637 181.822 60.2757 176.818 53.9059L191.366 36.5708L164.016 13.6232L149.481 30.9436C142.381 27.1392 134.693 24.2953 126.59 22.5889V0H90.8885V22.5889C82.7851 24.2953 75.0969 27.1392 67.9967 30.9436L53.462 13.6232L26.1124 36.5716L40.6585 53.9067C35.6553 60.2765 31.5291 67.3653 28.4535 74.9872L6.19871 71.0625L0 106.222L22.2556 110.147C22.5299 118.499 23.994 126.553 26.4817 134.15L6.91439 145.446L24.7662 176.365L44.372 165.047C49.8083 171.098 56.084 176.378 63.014 180.708L55.275 201.967L88.825 214.177L96.5533 192.945C100.536 193.509 104.603 193.808 108.739 193.808C112.875 193.808 116.944 193.51 120.926 192.945L128.654 214.178L162.202 201.966L154.463 180.705ZM108.738 152.863C83.5974 152.863 63.1441 132.411 63.1441 107.27C63.1441 82.1301 83.5974 61.676 108.738 61.676C133.878 61.676 154.332 82.1301 154.332 107.27C154.332 132.411 133.879 152.863 108.738 152.863Z" fill="#6FBAFF" />
      <motion.path
      animate={{rotate:180}}
      transition= {{ delay:4, duration:0.8,repeatType:"reverse",repeat:Infinity,repeatDelay:3 }}
      d="M307.922 207.515L292.532 212.494C289.597 207.393 285.969 202.775 281.792 198.754L290.394 185.027L268.737 171.459L260.141 185.174C254.733 183.178 249.003 181.921 243.088 181.513L240.856 165.497L215.544 169.026L217.775 185.042C212.2 187.05 207.028 189.83 202.371 193.227L190.357 182.382L173.233 201.353L185.257 212.21C182.34 217.22 180.117 222.652 178.69 228.363L162.523 227.778L161.598 253.317L177.765 253.903C178.785 259.797 180.619 265.36 183.135 270.502L170.379 280.445L186.088 300.601L198.87 290.641C203.323 294.393 208.296 297.516 213.634 299.903L210.246 315.743L235.239 321.082L238.623 305.266C241.502 305.275 244.414 305.079 247.346 304.671C250.279 304.263 253.135 303.648 255.9 302.857L263.48 317.147L286.059 305.173L278.471 290.867C282.958 287.112 286.882 282.746 290.141 277.919L305.158 284.008L314.76 260.324L299.773 254.246C300.783 248.617 301.025 242.76 300.398 236.81L315.792 231.829L307.922 207.515ZM243.305 275.643C225.478 278.125 208.955 265.645 206.473 247.821C203.986 229.995 216.469 213.471 234.295 210.99C252.12 208.504 268.638 220.985 271.127 238.813C273.607 256.636 261.129 273.156 243.305 275.643Z" fill="#6FBAFF" />
      <motion.path
      animate={{rotate:90}}
      transition= {{ delay:5, duration:0.9,repeatType:"reverse",repeat:Infinity,repeatDelay:2 }}
      d="M342.4 118.948L342.999 98.7806L330.237 98.4015C329.437 93.9567 328.007 89.5554 325.909 85.3236L335.932 77.4053L323.427 61.5769L313.406 69.4919C309.832 66.5219 305.878 64.1006 301.682 62.2729L304.272 49.7518L284.519 45.6608L281.923 58.1737C277.371 58.1803 272.788 58.8263 268.297 60.1488L262.245 48.9084L244.48 58.4759L250.532 69.7179C246.959 72.7362 243.893 76.2147 241.38 80.0076L229.51 75.2828L222.05 94.0288L233.93 98.761C233.148 103.271 232.995 107.898 233.509 112.517L221.382 116.528L227.714 135.685L239.84 131.676C242.215 135.758 245.102 139.369 248.378 142.485L241.67 153.35L258.836 163.951L265.558 153.066C269.885 154.619 274.424 155.565 279.03 155.862L280.875 168.516L300.841 165.6L299.001 152.962C301.132 152.178 303.235 151.235 305.293 150.126C307.354 149.019 309.298 147.778 311.126 146.433L320.664 154.925L334.083 139.86L324.538 131.358C326.827 127.345 328.53 123.035 329.617 118.568L342.4 118.948ZM294.325 129.754C281.812 136.491 266.153 131.795 259.42 119.287C252.681 106.778 257.378 91.1153 269.89 84.3819C282.397 77.6436 298.055 82.343 304.794 94.8526C311.527 107.363 306.833 123.017 294.325 129.754Z" fill="#6FBAFF" />
    </svg>
  )
}

export default Laptop