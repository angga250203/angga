import Link from "next/link";
import React from 'react';
import AnimatedTextCharacter from './Animated';
import AnimatedTextCharacter1 from './animated2';
import Icon from './b2';


function Accordion() {
 


  return (
    <div  className='max-w-6xl mx-auto px-5   py-20 mb-20 md:mb-24 flex flex-wrap'>
    <div className='w-full md:w-7/12 ' id='learnmore' >
      <div className='text-3xl md:text-5xl lg:text-6xl font-bold dark:text-white mr-12  leading-relaxed '>
          <AnimatedTextCharacter text="Delivering modern," />
          <AnimatedTextCharacter1 text="cohesive & intuitive" />
          <AnimatedTextCharacter1 text="web solutions." />
            
         </div>
        <p className='mt-5 lg:text-xl text-gray-500 dark:text-gray-300'>I enjoy designing meaningful experiences for brands &
                                    businesses to help them serve their target users.</p>

        <div 
       
        className='max-w-xs text-center mb-16 md:mb-2 px-10 mt-8'>
           <Link href="/about">
        <p 
         
        className='bg-blue-400 hover:scale-105 cursor-pointer transition-all text-white shadow-xl px-5 py-3 text-xl rounded-xl mt-4'>About me </p>
      </Link>
      </div>
  </div>
  <div  className='w-full md:w-5/12'>
    <div className='ml-20 overflow-hidden'>
    <Icon/>
   </div>
  </div>
</div>
   
  
  )
}

export default Accordion