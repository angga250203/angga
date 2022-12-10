import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import Facebook from '../animation/facebook ';
import Instagram from '../animation/instagram';
import Linked from '../animation/linked';
import Twitter from '../animation/twitter';
import Svgemail from './svgemail';



function Contactku() {


  


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xqjusjh', 'template_z5g04y6', form.current, 'yLsYNP9UIILHhTIbJ')
      .then((result) => {
          console.log(result.text);
          console.log("messege sent")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    
    <section className="bg-gray-50 dark:bg-gray-900 ">
      <div className='md:flex bg-gray-50 dark:bg-gray-900  align-center'>
      <div className="ax-w-6xl flex justify-center md:justify-start mx-auto h-48">
        
        <motion.h1 
         initial={{ y:-400 }}
         animate={{ y:0 }}
         transition={{ delay:1.5, duration:1 ,type:'spring'}}
        className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          C
        </motion.h1>
        <motion.h1 
         initial={{y:-400}}
         animate={{y:0}}
         transition={{delay:2.5, duration:2,type:'spring',stiffness:300,}}
        className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          o
        </motion.h1>
        <motion.h1 
        initial={{ y:-400 }}
        animate={{ y:0 }}
        transition={{ delay:1.5, duration:1 ,type:'spring'}}
        className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          ntact.
        </motion.h1>

        <div className='relative z-10 ml-5 md:mt-14 '>
        <Svgemail/>
    </div>

      </div>
     



      </div>


      <div className="bg-gray-200 -mt-10 py-2 md:py-12 dark:bg-gray-600">
        <div className='max-w-6xl px-5 mx-auto mt-24 '>
        
          <h1 className='text-4xl'>Lets talk about your projects.</h1>
          <p className='mt-5'>fill the form and send in your queries,I respond as soon as I can. alternatively,you can reach out to mr at my email addres</p>
      
      <div className='flex flex-wrap pb-20'>

      <div className='w-full md:w-1/2'>
          <form className='mt-16 -z-10 'ref={form} onSubmit={sendEmail}  >
            <div className='mb-7'>
            <label className=''>Name</label><br/>
            <input className='w-full md:w-3/4 px-3  h-9 rounded-lg mt-2' type="text" name="user_name" />
            </div>

            <div className='mb-7 -z-10'>
            <label>Email</label><br/>
            <input className='w-full items-center md:w-3/4 px-3  h-9 rounded-lg mt-2' type="email" name="user_email" />
            </div>
           

            <div className='-z-10 mb-7'>
            <label>Message</label><br/>
            <textarea className='w-full px-3 items-center md:w-3/4 h-24 rounded-lg mt-2 ' name="message" />
            </div>
           
            <input type="submit"  className='bg-blue-500 cursor-pointer mt-5 mb-5 px-10 text-white py-3 rounded-lg ' value="Send" />
          </form> 
       
         

        </div>

        <div className='w-full md:w-1/2 relative'>
      <h2 className='text-3xl mt-12 mb-12 font-semibold text-gray-500'>Visit my social media</h2>
      <div className='mb-5 bg-blue-600 text-white  px-7 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all'>
      <a href='https://www.instagram.com/angga_bimnn/' className='flex items-center '> 
      <img className='w-12 mr-8 ' src='/medsos/ig.png'></img>
      <h3 className='text-xl'>Instagram</h3>
      </a>
      </div>

      <div className='mb-5 bg-green-500 text-white  rounded-xl shadow-lg hover:shadow-xl transition-all px-7 py-3'>
      <a href='https://www.facebook.com/angga.bimantoro.9/' className='flex items-center '> 
      <img className='w-12 mr-8 ' src='/medsos/fb.png'></img>
      <h3 className='text-xl'>Facebook</h3>
      </a>
      </div>

      <div className='mb-5 bg-yellow-400 text-white   rounded-xl shadow-lg hover:shadow-xl transition-all px-7 py-3'>
      <a href='https://twitter.com/lllllll876qq' className='flex items-center '> 
      <img className='w-12 mr-8 ' src='/medsos/tw.png'></img>
      <h3 className='text-xl'>Twiter</h3>
      </a>
      </div>
      
      

    </div>
    </div>
        
        </div>
    </div>
      </section>
  )
}

export default Contactku