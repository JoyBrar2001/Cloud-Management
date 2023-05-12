import React from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Navbar = () => {
  return (
    <div className='fixed flex flex-row h-16 w-full justify-between items-center shadow-lg px-4 bg-white z-20'>
        <div className='flex flex-row gap-4 md:gap-6'>
            <h1 className='text-3xl font-bold '>Brand.</h1>
            <ul className='flex justify-between items-center gap-2 md:gap-4'>
                <li className='text-base'>Home</li>
                <li className='text-base'>About</li>
                <li className='text-base'>Support</li>
                <li className='text-base'>Platforms</li>
                <li className='text-base'>Pricing</li>
            </ul>
        </div>

        <div className='flex flex-row justify-center items-center gap-4'>
            <p>Sign In</p>
            <button className='button-transition bg-[#3f3cd0] px-4 py-1.5 rounded-lg text-white'>Sign up</button>
        </div>

      {/* <MenuIcon className='w-5' /> */}
      
    </div>
  )
}

export default Navbar
