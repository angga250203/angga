import React,{useEffect} from 'react'
import { motion,useAnimation,useViewportScroll, useTransform } from 'framer-motion'
import Link from "next/link";
import {useInView} from "react-intersection-observer"

function CTA() {
  const {ref, inView} = useInView();
  const animation1 = useAnimation();

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1.2]);
  useEffect(() => {
    if(inView){
        animation1.start({
          
            opacity:1,
            pathLength:1,
            transition:{
              duration:2,
              ease:"easeInOut",
              delay:0.3
         
            }
          
        });
    }
    if(!inView){
      animation1.start({
       
          opacity:0,
          pathLength:0
        
      })
    }
  }, [inView]);

 
  return (
      <div className='max-w-5xl mx-auto text-center'>
    <div className="pt-36 relative w-full">
    <div className="w-30 m-auto mb-2" > 
    <svg className='m-auto -mb-7' width="238" height="17" viewBox="0 0 238 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
      animate={animation1}
      d="M3.74805 13.4644C5.28736 12.7518 23.7721 1.83727 24.4033 7.3078C24.7318 10.155 25.4585 13.1419 28.9608 12.5582C34.1204 11.6983 39.0234 9.17926 44.0458 7.76088C45.8494 7.25155 49.3618 5.91504 51.1353 7.44106C52.3537 8.48944 52.2707 10.0744 52.7344 11.4655C53.7433 14.4922 60.0014 11.9363 61.6362 11.4655C69.5845 9.17639 75.3927 7.96252 83.4908 9.62651C93.5825 11.7002 102.979 2.21374 113.501 4.50933C117.776 5.44205 120.903 8.35353 124.961 9.57322C132.541 11.8512 141.509 7.52288 148.628 5.3622C153.321 3.93797 158.842 2.98469 163.74 3.84303C170.103 4.95824 175.356 8.5688 182.023 8.48049C191.211 8.35879 200.267 6.24131 209.341 5.04237C217.797 3.92522 226.035 4.23849 234.501 4.82916" stroke="#00c7ff" strokeWidth="8" strokeLinecap="round" />
    </svg>
    </div>
    <div className="pt-14 pb-40 mb-\">
      <h2 ref={ref} className="text-4xl md:text-5xl font-bold mb-10">
        Interested in Working Together?
      </h2>
      <motion.div 
       style={{
        scale
      }}
      className=" max-w-xs mx-auto mt-16 px-16">
      <Link href="/contact">
        <motion.p
        style={{
          scaleY: scrollYProgress
        }}
        className='overflow-hidden cursor-pointer text-center  py-3 font-semibold bg-blue-500 text-white transition-all px-10  rounded-full'>Get in Touch</motion.p>
      </Link>
    </motion.div>
    </div>

  </div>
  </div>
  )
}

export default CTA