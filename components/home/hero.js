import React from 'react'

import { Link as ScrollLink } from "react-scroll";
import Svghero from './svghero';

import Iconku1 from './svg';
import Down from '../animation/down';

function Hero() {
    
     
  return (
    <div className='max-w-6xl mb-36 md:mb-24  mx-auto px-4 py-10 mt-32 md:mt-0 md:py-20'>
    <div className='text-center  '>
        <div className='-mb-28'>
            <h1 className='text-4xl text-gray-400 md:text-7xl font-semibold   '>Angga Bimantoro .</h1>
            <p className='text-xl text-gray-400 '>Frontend Web Developer</p>
        </div>
       <div className='relative -z-20 max-w-xl -mt-44 px-5 h-24 md:w-96 mx-auto'>
        <Svghero/>
       </div>

        
      <div className='-mt-16 max-w-xl mx-auto  md:px-20'>
          <Iconku1/>
      </div>

        <div>

        </div>

       
       
    </div>
    
    </div>
  )
}

export default Hero