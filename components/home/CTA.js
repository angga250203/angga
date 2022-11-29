import React from 'react'
import { motion,useViewportScroll, useTransform } from 'framer-motion'
import Link from "next/link";

function CTA() {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0.2, 1], [0, 1.1]);
  return (
      <div className='max-w-5xl mx-auto text-center'>
    <div className="pt-36 relative w-full">
    <img className="w-30 m-auto mb-2" src="footer/lineBreak.svg" />
    <div className="pt-14 pb-40 mb-\">
      <h2 className="text-4xl md:text-5xl font-bold mb-10">
        Interested in Working Together?
      </h2>
      <div

>
  <Link href={`/contact`}>
      <p
      
       
        className="cursor-pointer font-bold whitespace-nowrap  mx-auto
       max-w-xs  py-5 text-purple-300 border-2 rounded-full transition-all text-xl border-purple-300 bg-bg hover:bg-purple-300 hover:text-white "
      >
        Get in Touch
      </p>
      </Link>
      </div>
    </div>

  </div>
  </div>
  )
}

export default CTA