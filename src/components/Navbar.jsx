import React, { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);

  return (
    <div className='fixed flex flex-col md:flex-row h-16 w-full justify-between items-center shadow-lg md:px-4 bg-white z-20'>
      <div className='hidden md:flex flex-row justify-center items-center gap-4 md:gap-6'>
        <h1 className='text-3xl font-bold'>Brand.</h1>
        <ul className='flex justify-between items-center gap-2 md:gap-4'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>About</li>
          <li className='cursor-pointer'>Support</li>
          <li className='cursor-pointer'>Platforms</li>
          <li className='cursor-pointer'>Pricing</li>
        </ul>
      </div>


      <div className='hidden md:flex flex-row justify-center items-center gap-4'>
        <p className='cursor-pointer'>Sign In</p>
        <button className='button-transition bg-[#3f3cd0] px-4 py-1.5 rounded-lg text-white'>Sign up</button>
      </div>

      <div className='flex md:hidden w-full h-full justify-between items-center px-4'>

        <div className='flex md:hidden w-full flex-row justify-between items-center'>
          <h1 className='text-3xl font-bold '>Brand.</h1>
          {nav ? <AiOutlineClose size={30} className='cursor-pointer z-20' onClick={() => toggleNav()} /> : <BiMenuAltRight size={30} className='cursor-pointer' onClick={() => toggleNav()} />}
        </div>

      </div>

      <div className='absolute md:hidden w-screen'>
        <ul className={nav ? 'flex flex-col bg-white justify-between items-center shadow-2xl px-4 top-0 pt-5' : 'hidden'}>
          <li className='cursor-pointer border-b-2 w-full text-center py-3' onClick={() => toggleNav()}>Home</li>
          <li className='cursor-pointer border-b-2 w-full text-center py-3' onClick={() => toggleNav()}>About</li>
          <li className='cursor-pointer border-b-2 w-full text-center py-3' onClick={() => toggleNav()}>Support</li>
          <li className='cursor-pointer border-b-2 w-full text-center py-3' onClick={() => toggleNav()}>Platforms</li>
          <li className='cursor-pointer border-b-2 w-full text-center py-3' onClick={() => toggleNav()}>Pricing</li>
          <button className='button-transition bg-white border-[#3f3cd0] border-2 px-4 rounded-lg text-[#3f3cd0] border-b-2 w-full text-center py-3 mt-6 my-3' onClick={() => toggleNav()}>Sign in</button>
          <button className='button-transition bg-[#3f3cd0] px-4 rounded-lg text-white border-b-2 w-full text-center py-3 my-3' onClick={() => toggleNav()}>Sign up</button>
        </ul>
      </div>



    </div>
  )
}

export default Navbar
