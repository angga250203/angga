import { ThemeProvider } from "next-themes";
import React, { useEffect, useRef, useState } from 'react';
import Preload from '../components/preload';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [preloader,setPreloader] = useState(true);

  const [timer, setTimer] = useState(2);

  const id = useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  }

  useEffect(()=>{
    id.current = window.setInterval(()=>{
      setTimer((timer)=>timer-1)
    },4000)
  },[])

  useEffect(()=>{
    if(timer === 0){
      clear();
    }
  },[timer])

  return (
  
  <ThemeProvider defaultTheme="light" attribute="class">
     {preloader? <Preload/>:
      <Component {...pageProps} />
  }
    </ThemeProvider>
  )
}

export default MyApp
