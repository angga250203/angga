import React from 'react'
import Loader from './loader'

function Preload() {
  return (
    <div
    className='bg-gradient-to-r from-gray-500 backdrop-blur-md to-gray-900 h-screen relative'> 
<div className='absolute left-1/2 -translate-x-1/2 pt-72 md:pt-96 lg:pt-36'>
        <Loader/>
        </div>

       <div className=' left-1/2 -translate-x-1/2 text-gray-500 absolute bottom-4'>
           <h1>Develop By Angga.Dev</h1>
           </div> 
    </div>
  )
}

export default Preload