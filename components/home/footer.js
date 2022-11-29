import React from "react";

function Footer() {
  return (
    <footer className="flex bg-gray-300 dark:bg-gray-900 flex-col w-screen px-5 py-3  z-5 ">
     
      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4  sm:pt-4 text-center ">
        <div className="flex flex-col items-center justify-center ">
          <div className="inline-flex items-center uppercase text-xs b font-bold tracking-widest">
            Made with{" "}
            <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width="26"
                  title="React"
                />
                <span className="sr-only">React</span>
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                  width="40"
                  className="invert"
                  title="NextJS"
                />
                <span className="sr-only">NextJS</span>
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  width="26"
                  title="TailwindCSS"
                />
                <span className="sr-only">TailwindCSS</span>
              </span>
            </div>
          </div>
          <div className="mt-2 text-xs ">
            Made by{" "}
            <a
              href="mailto:contact@braydentw.io"
              className="text-fun-gray-light font-medium"
            >
              Angga Bimantoro
            </a>
            . All rights reserved.
          </div>
        </div>
      </div>
     
    </footer>
  )
}

export default Footer