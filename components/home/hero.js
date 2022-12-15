import React from 'react'


import Svghero from './svghero';

import Iconku1 from './svg';
import Down from '../animation/down';
import Linked from '../animation/linked'
import Instagram from '../animation/instagram'
import Twitter from '../animation/twitter'
import Facebook from '../animation/facebook '

function Hero() {
    
     
  return (
    <div className='max-w-6xl mb-36 md:mb-24 mx-auto px-4 py-10  '>
    <div className='text-center relative '>
        <h2 className='text-3xl md:text-6xl  font-semibold text-gray-500 dark:text-gray-400'>UX/UI designer,</h2>
        <h1 className='text-4xl md:text-7xl font-bold text-gray-700 dark:text-gray-200'>Frontend developer</h1>
        <p className='text-gray-400 md:text-xl py-5'>Specialised in</p>
        <h3 className='text-gray-600 md:text-2xl pb-5 font-semibold dark:text-gray-400'>Websites & Webapps</h3>
        <div className='absolute top-20 -z-20 md:top-32 md:left-52'>
          <Svghero/>
        </div>
        <div className='flex flex-wrap gap-3 md-gap-5 justify-center relative md:mb-40'>
            <a href='https://www.facebook.com/angga.bimantoro.9/'className='cursor-pointer md:absolute md:-top-7 md:left-28 lg:left-36'>
                <Facebook/>  
            </a>

                <a href='https://www.linkedin.com/'className='cursor-pointer md:absolute md:top-5 md:left-64 lg:left-96'>
                  <Linked/>
                  </a>
                  <a href='https://www.instagram.com/angga_bimnn/'className='cursor-pointer md:absolute md:top-5 md:right-64 lg:right-96'>
                  <Instagram/>
            
                  </a>
                  <a href='https://twitter.com/lllllll876qq'className='cursor-pointer md:absolute md:-top-7 md:right-28 lg:right-36'>
                  <Twitter/>
                  </a>
        </div>

       
    </div>
    </div>
  )
}

export default Hero