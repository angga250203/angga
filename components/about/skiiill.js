import React from 'react'
import Lingkaran from './lingkaran'
import P from './p'
import P2 from './P2'
import AnimatedTextCharacter from '../home/Animated';
import AnimatedTextCharacter1 from '../home/animated2';
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";


function Skiiill() {
  return (
    <div className='flex flex-wrap max-w-6xl py-36 mb-64 md:mb-16  px-3 relative mx-auto'>
        <div className='w-full md:w-7/12 '>
            <div className='text-2xl  md:text-3xl lg:text-5xl font-poppins font-bold'>
        <AnimatedTextCharacter text="My development stack is" />
          <AnimatedTextCharacter1 text="focused on performance &" />
          <AnimatedTextCharacter1 text="accessibility with delightful" />
          <AnimatedTextCharacter1 text="interactions." />
          </div>

<p className='mt-5 text-gray-500 text-xl lg:text-2xl'>Apart from my main domain, I also like
branding, icon design and minimal
illustrations. I am an enthusiast of digital
art, motion design & WebGL</p>
        </div>
        <div className='w-full  mb-36 md:w-5/12 relative '>
            <div className='md:-mt-24 mt-5 absolute left-1/2 -translate-x-1/2 '>
                <div className='absolute top-16'>
                <Link href="/projects">
                <P/>
                </Link>
                </div>
            <Lingkaran/>
            <div className='absolute right-0 bottom-16'>
            <ScrollLink
          activeClass="active"
          to="learnmore"
          spy={true}
          offset={-30}
          smooth={true}
          duration={500}
        >
                <P2/>
                </ScrollLink>
                </div>
            </div>
        </div>

    </div>
  )
}



export default Skiiill