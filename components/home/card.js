import { motion } from "framer-motion";
import Image from "next/image";
import React from 'react';

function Card({ project }) {

  const projectVariant ={
    hidden: {
      y: 150,
      opacity: 0.5,
    },

    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.1,
        ease: "easeOut",
      },
    },
  }


  const imageVariant ={
    hidden: {
      scale: 0.7,
    },

    visible: {
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: "easeOut",
      },
    },
  }
  return (
    <motion.div
    initial={`hidden`}
      whileInView={"visible"}
      viewport={{ once: true }}
      variants={projectVariant}
    className="max-w-sm mx-auto cursor-not-allowed flex flex-col projects-center md:projects-start md:justify-center"
    key={project.id}
  >
    <a
      href={project.link || project.github}
      target="_blank"
      className={`w-full relative rounded-xl border-gray-700 dark:border-gray-400 border p-2 cursor-not-allowed  hover:border-gray-400 will-change-projectCard`}
    >
      <motion.div
       initial={`hidden`}
       whileInView={"visible"}
       viewport={{ once: true }}
       variants={imageVariant}
      
      >

      <Image
        className="w-full rounded-md"
        src={project.img}
        width="150"
        height="70"
        priority
        alt="image projek"
      />
      </motion.div>
    </a>
    <div className="w-full mt-5 cursor-not-allowed">
      <div className="flex projects-center justify-between">
        <a href={project.link || project.github} target="_blank">
          <h3 className="text-lg font-bold cursor-not-allowed">{project.title}</h3>
        </a>
        <div className="space-x-2 flex items-center cursor-not-allowed">
          {project.link && (
           
              <Image
                src="/icons/external-link.svg"
                width={16}
                height={16}
                alt="Link Icon"
                className='cursor-not-allowed'
              />
            
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer " className='cursor-not-allowed'>
              <Image
                src="/icons/github.svg"
                width={16}
                height={16}
                alt="Github Icon"
              />
            </a>
          )}
        </div>
      </div>
      <p className="text-fun-gray text-left text-sm">{project.desc}</p>
      <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
        {project.tags.map((tag, index) => {
          return (
            <li key={tag}>
                <div className="m-1 rounded-lg text-sm bg-gray-400 text-white py-1 px-2 cursor-not-allowed hover:opacity-75">
                  {tag}
                </div>
            </li>
          );
        })}
      </ul>
    </div>
  </motion.div>
);
}

export default Card