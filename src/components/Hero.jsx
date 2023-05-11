import React from 'react'
import cyberBg from '../assets/cyber-bg.png'

import { BsStack, BsFillHddStackFill, BsFillCloudDownloadFill } from 'react-icons/bs'
import { IoIosArrowDropupCircle } from 'react-icons/io' 

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row min-h-screen h-full w-full justify-center items-center gap-12 relative'>
      <div className='flex flex-col'>
        <p className='font-semibold text-2xl'>Unique Sequencing & Production</p>
        <h1 className='font-bold text-7xl mt-4'>Cloud<br />Management</h1>
        <p className='font-semibold text-2xl mt-3'>This is our tech brand.</p>
        <button className='bg-[#3f3cd0] px-4 py-3 rounded-lg text-white mt-4 text-xl font-semibold'>Get Started</button>
      </div>

      <div>
        <img src={cyberBg} alt="Cyberbg" className='w-[600px]' />
      </div>

      <div className='absolute flex flex-col justify-center items-center bottom-6 shadow-2xl p-4 pb-5 rounded-xl'>
        <h2 className='font-semibold text-lg mb-2'>Data Services</h2>
        <ul className='flex flex-row justify-center items-center gap-10'>
            <li className='bottom-bar-li'><BsStack className='text-[#3f3cd0]' />App Security</li>
            <li className='bottom-bar-li'><BsFillHddStackFill className='text-[#3f3cd0]' />Dashboard Design</li>
            <li className='bottom-bar-li'><BsFillCloudDownloadFill className='text-[#3f3cd0]' />Cloud Data</li>
            <li className='bottom-bar-li'><IoIosArrowDropupCircle className='text-[#3f3cd0]' />API Services</li>
        </ul>
      </div>
    </div>
  )
}

export default Hero
