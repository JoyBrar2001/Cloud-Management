import React from 'react'
import supportImg from '../assets/support.jpg'

import { easeInOut, motion } from 'framer-motion'

import { BsTelephone, BsGlobe2 } from 'react-icons/bs'
import { BiRightArrowAlt, BiChip } from 'react-icons/bi'

const Support = () => {
    return (
        <div className='w-full min-h-screen mt-24' id='support'>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img src={supportImg} className='w-full h-full object-cover mix-blend-overlay' alt="/" />
            </div>

            <div className='max-w-[1240px] mx-auto text-white relative'>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, staggerChildren: 1 }}
                    className='px-4 py-12 text-center'
                >
                    <h2 className='text-2xl md:text-3xl uppercase tracking-wider my-6'>Support</h2>
                    <h3 className='text-5xl md:text-6xl font-bold my-6'>Finding the right team</h3>
                    <p className='text-base sm:text-lg md:text-xl mt-10 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatibus recusandae, repellat ex omnis veniam delectus natus commodi culpa hic nesciunt aspernatur neque officia earum, a id alias beatae minima? Iste quos et, laborum magnam veniam error repellendus pariatur architecto.</p>
                </motion.div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                    <motion.div
                        className='bg-white rounded-xl shadow-2xl'
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0, type: 'spring' }}
                    >
                        <div className='p-8'>
                            <div className='w-16 h-16 p-4 bg-indigo-600 flex justify-center items-center rounded-xl mt-[-4rem]'>
                                <BsTelephone className='w-full h-full text-white' />
                            </div>
                            <h1 className='font-bold text-2xl my-4'>Sales</h1>
                            <p className='font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, nam? Veritatis molestiae iste dolorum assumenda nihil vero vel porro delectus, quo modi fugiat minus, repellat eveniet quidem sunt eum ratione. Aperiam cupiditate ipsa corporis, aspernatur laborum at nihil reiciendis quo.</p>
                        </div>

                        <div className='px-8 pb-8 flex items-center gap-2 hover:gap-4 transition-all duration-300'>
                            <p className='font-semibold text-indigo-600'>Contact Us</p>
                            <BiRightArrowAlt className='text-xl text-indigo-600' />
                        </div>
                    </motion.div>

                    <motion.div
                        className='bg-white rounded-xl shadow-2xl'
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3, type: 'spring' }}
                    >
                        <div className='p-8'>
                            <div className='w-16 h-16 p-4 bg-indigo-600 flex justify-center items-center rounded-xl mt-[-4rem]'>
                                <BsGlobe2 className='w-full h-full text-white' />
                            </div>
                            <h1 className='font-bold text-2xl my-4'>Technical Support</h1>
                            <p className='font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, nam? Veritatis molestiae iste dolorum assumenda nihil vero vel porro delectus, quo modi fugiat minus, repellat eveniet quidem sunt eum ratione. Aperiam cupiditate ipsa corporis, aspernatur laborum at nihil reiciendis quo.</p>
                        </div>

                        <div className='px-8 pb-8 flex items-center gap-2 hover:gap-4 transition-all duration-300'>
                            <p className='font-semibold text-indigo-600'>Contact Us</p>
                            <BiRightArrowAlt className='text-xl text-indigo-600' />
                        </div>
                    </motion.div>

                    <motion.div 
                        className='bg-white rounded-xl shadow-2xl'
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.6, type: 'spring' }}
                    >
                        <div className='p-8'>
                            <div className='w-16 h-16 p-4 bg-indigo-600 flex justify-center items-center rounded-xl mt-[-4rem]'>
                                <BiChip className='w-full h-full text-white' />
                            </div>
                            <h1 className='font-bold text-2xl my-4'>Media Inquiries</h1>
                            <p className='font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, nam? Veritatis molestiae iste dolorum assumenda nihil vero vel porro delectus, quo modi fugiat minus, repellat eveniet quidem sunt eum ratione. Aperiam cupiditate ipsa corporis, aspernatur laborum at nihil reiciendis quo.</p>
                        </div>

                        <div className='px-8 pb-8 flex items-center gap-2 hover:gap-4 transition-all duration-300'>
                            <p className='font-semibold text-indigo-600'>Contact Us</p>
                            <BiRightArrowAlt className='text-xl text-indigo-600' />
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default Support
