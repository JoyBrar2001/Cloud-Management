import React from 'react'
import { TiTick } from 'react-icons/ti'

import { motion } from 'framer-motion'

const Platforms = () => {
  return (
    <motion.div 
      initial={{opacity:0, x:-100}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:1, type:'spring'}}
      className='w-full h-full my-20'
      id='platforms'
    >
      <h1 className='text-center text-6xl font-bold'>All-In-One Platform</h1>
      <p className='text-center my-4 text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores sed aliquam cum facilis, reprehenderit saepe exercitationem inventore laborum?</p>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1200px] mt-10 mx-auto gap-2 gap-y-10'>

        <div className='flex items-start text-green-600 gap-3'>
          <TiTick className='w-24 h-7' />
          <div>
            <h2 className='text-black text-xl '>Notifications</h2>
            <p className='text-black text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod mollitia, dolorum quos cumque veniam sapiente?</p>
          </div>
        </div>

        <div className='flex items-start text-green-600 gap-3'>
          <TiTick className='w-24 h-7' />
          <div>
            <h2 className='text-black text-xl '>Notifications</h2>
            <p className='text-black text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod mollitia, dolorum quos cumque veniam sapiente?</p>
          </div>
        </div>
        
        <div className='flex items-start text-green-600 gap-3'>
          <TiTick className='w-24 h-7' />
          <div>
            <h2 className='text-black text-xl '>Notifications</h2>
            <p className='text-black text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod mollitia, dolorum quos cumque veniam sapiente?</p>
          </div>
        </div>
        
        <div className='flex items-start text-green-600 gap-3'>
          <TiTick className='w-24 h-7' />
          <div>
            <h2 className='text-black text-xl '>Notifications</h2>
            <p className='text-black text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod mollitia, dolorum quos cumque veniam sapiente?</p>
          </div>
        </div>
        
        <div className='flex items-start text-green-600 gap-3'>
          <TiTick className='w-24 h-7' />
          <div>
            <h2 className='text-black text-xl '>Notifications</h2>
            <p className='text-black text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod mollitia, dolorum quos cumque veniam sapiente?</p>
          </div>
        </div>

        <div className='flex items-start text-green-600 gap-3'>
          <TiTick className='w-24 h-7' />
          <div>
            <h2 className='text-black text-xl '>Notifications</h2>
            <p className='text-black text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod mollitia, dolorum quos cumque veniam sapiente?</p>
          </div>
        </div>
        
        <div className='flex items-start text-green-600 gap-3'>
          <TiTick className='w-24 h-7' />
          <div>
            <h2 className='text-black text-xl '>Notifications</h2>
            <p className='text-black text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod mollitia, dolorum quos cumque veniam sapiente?</p>
          </div>
        </div>
        
        <div className='flex items-start text-green-600 gap-3'>
          <TiTick className='w-24 h-7' />
          <div>
            <h2 className='text-black text-xl '>Notifications</h2>
            <p className='text-black text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod mollitia, dolorum quos cumque veniam sapiente?</p>
          </div>
        </div>
        
      </div>
    </motion.div>
  )
}

export default Platforms
