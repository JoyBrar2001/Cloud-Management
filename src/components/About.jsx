import React from 'react'
import { easeInOut, motion } from 'framer-motion'
import { aboutCards } from '../constants/data'
import { fadeIn, textFadeIn } from '../constants/styles'

const CreateAbout = (props, index) => {

    console.log(index)

    return (

        <motion.div
            className='px-24 py-12 shadow-lg rounded-lg my-3'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', duration: 0.7, delay: props.i * 0.2 }}
            whileHover={{ scale: 1.1, transition: { type: 'spring', duration: 0.3 } }}
        >
            <h1 className='text-[#3f3cd0] font-bold text-5xl md:text-6xl lg:text-7xl tracking-wide text-center'>{props.number}</h1>
            <p className='text-center text-gray-500'>{props.text}</p>
        </motion.div>

    )
}

const About = () => {
    return (
        <div className='w-full'>
            <div
                className='flex flex-col justify-center items-center py-20 max-w-[1200px] mx-auto p-4'

            >

                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75 }}
                    className='font-bold text-3xl md:text-5xl text-center'
                >
                    Trusted by Developers Around the World
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75 }}
                    className='text-gray-700 font-normal text-base md:text-xl w-full max-w-[1200px] text-center mt-6'
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis placeat distinctio omnis iusto impedit expedita accusantium fugiat nemo eligendi beatae.
                </motion.p>

                <div className='flex flex-row flex-wrap justify-center items-center gap-6'>
                    {aboutCards.map((card, index) => (
                        <CreateAbout key={index} number={card.number} text={card.text} i={index} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default About
