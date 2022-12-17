import React,{useEffect} from 'react'
import Link from "next/link";
import Card from './card';
import { projects } from "./data/data";
import {motion,useAnimation} from 'framer-motion'
import {useInView} from "react-intersection-observer"


function Favorit() {
  const {ref, inView} = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if(inView){
        animation.start({
          
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
      animation.start({
       
          opacity:0,
          pathLength:0
        
      })
    }
  }, [inView]);



 
  return (
    <div className='max-w-6xl mx-auto px-5 md:px-5'>
    <div className="flex flex-col text-left justify-between pt-8 relative">
    <div>
    <svg className='m-auto -mb-12' width="238" height="17" viewBox="0 0 238 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
      animate={animation}
      d="M3.74805 13.4644C5.28736 12.7518 23.7721 1.83727 24.4033 7.3078C24.7318 10.155 25.4585 13.1419 28.9608 12.5582C34.1204 11.6983 39.0234 9.17926 44.0458 7.76088C45.8494 7.25155 49.3618 5.91504 51.1353 7.44106C52.3537 8.48944 52.2707 10.0744 52.7344 11.4655C53.7433 14.4922 60.0014 11.9363 61.6362 11.4655C69.5845 9.17639 75.3927 7.96252 83.4908 9.62651C93.5825 11.7002 102.979 2.21374 113.501 4.50933C117.776 5.44205 120.903 8.35353 124.961 9.57322C132.541 11.8512 141.509 7.52288 148.628 5.3622C153.321 3.93797 158.842 2.98469 163.74 3.84303C170.103 4.95824 175.356 8.5688 182.023 8.48049C191.211 8.35879 200.267 6.24131 209.341 5.04237C217.797 3.92522 226.035 4.23849 234.501 4.82916" stroke="#00c7ff" strokeWidth="8" strokeLinecap="round" />
    </svg>
      <h1 ref={ref} className='text-center text-3xl md:text-5xl font-semibold font-poppins py-20'>Here are a few of my favorite projects</h1>
      
    </div>
    <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start">
      {projects.slice(0, 3).map((item) => {
        return (
          <Card key={item.id} project={item} />
        );
      })}
    </div>
    <div className=" max-w-xl mx-auto mt-16">
      <Link href="/projects">
        <p className=' cursor-pointer text-center border-2 border-blue-500 hover:border-blue-700 transition-all px-10 py-2 rounded-full'>View All </p>
      </Link>
    </div>
  </div>
  </div>
  )
}

export default Favorit