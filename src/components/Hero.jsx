import React from 'react'
import { motion, easeInOut } from 'framer-motion'

import cyberBg from '../assets/cyber-bg.png'

import { BsStack, BsFillHddStackFill, BsFillCloudDownloadFill } from 'react-icons/bs'
import { IoIosArrowDropupCircle } from 'react-icons/io' 

const Hero = () => {
  return (
    <div id='home' className='flex flex-col lg:flex-row h-full min-h-screen w-full justify-center items-center gap-12 relative p-4 pt-24'>
      <motion.div 
        initial={{opacity:0, x:-100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 0.75, ease:'easeInOut'}}
        className='flex flex-col'
      >
        <p className='font-semibold text-lg lg:text-2xl'>Unique Sequencing & Production</p>
        <h1 className='font-bold text-5xl lg:text-7xl mt-4'>Cloud<br />Management</h1>
        <p className='font-semibold text-lg lg:text-2xl mt-3'>This is our tech brand.</p>
        <button className='bg-[#3f3cd0] px-4 py-3 rounded-lg text-white mt-4 text-lg lg:text-xl font-semibold button-transition'>Get Started</button>
      </motion.div>

      <motion.div
        initial={{opacity:0, x:100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 0.75, ease:'easeInOut'}}
      >
        <img src={cyberBg} alt="Cyberbg" className='w-[600px]' />
      </motion.div>

      <motion.div 
        className='md:absolute flex flex-col justify-center items-center bottom-6 shadow-2xl pt-3 pb-5 px-12 rounded-xl bg-white'
        initial={{opacity:0, y:100}}
        whileInView={{opacity: 1, y: 0, transition:{duration: 0.75, ease:'easeInOut'}}}
        whileHover={{scale: 1.1, transition:{duration: 0.6, type:'spring'}}}
      >
        <h2 className='font-semibold text-lg mb-2'>Data Services</h2>
        <ul className='flex flex-row flex-wrap justify-center items-center gap-10'>
            <li className='bottom-bar-li'><BsStack className='text-[#3f3cd0]' />App Security</li>
            <li className='bottom-bar-li'><BsFillHddStackFill className='text-[#3f3cd0]' />Dashboard Design</li>
            <li className='bottom-bar-li'><BsFillCloudDownloadFill className='text-[#3f3cd0]' />Cloud Data</li>
            <li className='bottom-bar-li'><IoIosArrowDropupCircle className='text-[#3f3cd0]' />API Services</li>
        </ul>
      </motion.div>
    </div>
  )
}

export default Hero
