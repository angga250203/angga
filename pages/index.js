import Head from 'next/head'
import Animasi from '../components/animasi'
import Accordion from '../components/home/accordion'
import CTA from '../components/home/CTA'
import Favorit from '../components/home/favorit'
import Footer from '../components/home/footer'
import Hero from '../components/home/hero'
import Navbar from '../components/home/navbar'
import { motion } from 'framer-motion'


export default function Home() {
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
        <title>Portofolio-AnggaBimantoro</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Navbar/>
    <Hero/>
    <Accordion/>
    <Favorit/>
    <CTA/>
    <Footer/>
    </motion.div>
    </>
  )
}