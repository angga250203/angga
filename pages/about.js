import React from 'react'

import Navbar from '../components/home/navbar'
import Head from 'next/head'
import Footer from '../components/home/footer'
import Aboutme from '../components/about/aboutme'
import { motion } from 'framer-motion'
import Animasi from '../components/animasi'


export default function About() {
    return (
        <>
        <Animasi/>
      <motion.div
      initial={{ visibility: "hidden" }}
      exit={{
        visibility: "hidden",
        transition: { delay: 1 },
      }}
      animate={{
        visibility: "visible",
        transition: { delay: 1 },
      }}
      >
        <Head>
          <title>About-Anggabimantoro</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar/>
        <Aboutme/>
      <Footer/>
      </motion.div>
      </>
    )
  }
  