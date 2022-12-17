import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
    
function Menu() {
    const variants = {
      open: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.4,
    
          ease: [0.6, 0.05, -0.01, 0.9],
        },
      },
      closed: {
        y: 50,
        opacity: 0,
        transition: {
          duration: 0.4,
          ease: [0.6, 0.05, -0.01, 0.9],
        },
      },
      };

      const { theme, setTheme } = useTheme();
      const [mounted, setMounted] = useState(false);

      useEffect(() => {
        setMounted(true);
      }, []);
  return (
    <>
          <motion.li className='absolute -top-16 flex items-center mb-5 space-x-6 cursor-pointer ' variants={variants}>
          <button1
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 px-3 rounded focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-6 h-6 text-yellow-500 dark:text-yellow-500"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button1>
          </motion.li>

          <motion.li className='flex items-center mb-5 space-x-6 cursor-pointer' variants={variants}>
            <Link href="/about">
              <p className='text-xl text-gray-500 dark:text-gray-200'>About</p>
            </Link>
          </motion.li>

          <motion.li className='flex items-center mb-5 space-x-6 cursor-pointer' variants={variants}>
            <Link href="/projects">
              <p className='text-xl text-gray-500 dark:text-gray-200'>Project</p>
            </Link>
          </motion.li>

          <motion.li className='flex items-center mb-5 space-x-6 cursor-pointer' variants={variants}>
            <Link href="/contact">
              <p className='text-xl text-gray-500 dark:text-gray-200'>Contact</p>
            </Link>
          </motion.li>
        
    </>
  )
}

export default Menu