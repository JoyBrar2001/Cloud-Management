import React from 'react'
import { TiTick } from 'react-icons/ti'

const Pricing = () => {
    return (
        <div className='w-full min-h-screen h-full relative'>
            <div className='absolute w-full h-[600px] bg-gray-900 text-center px-4 pt-10 z-[-1]' />
            <div className='w-full text-center px-4 pt-10 z-'>
                <div className='max-w-[900px] mx-auto'>
                    <h2 className='text-gray-300 text-2xl uppercase'>Pricing</h2>
                    <h1 className='text-white text-4xl font-bold my-4'>The right price for your research.</h1>
                    <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, laudantium ullam est quas provident sapiente aut vitae at consequuntur natus.</p>
                </div>

                <div className='max-w-[1024px] mx-auto p-4 grid md:grid-cols-2 text-left mt-10 gap-6'>
                    <div className='bg-white p-6 rounded-lg shadow-xl'>
                        <button className='bg-[#91a4f5] text-sm px-2 rounded-full mb-4 font-semibold uppercase'>Standard</button>
                        <h1 className='font-bold'><span className='text-5xl'>$49</span>/mo</h1>
                        <p className='mt-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, amet?</p>
                        <ul>
                            <li className='flex items-center mt-6 gap-3'><span className='text-green-600'><TiTick /></span>Lorem ipsum dolor</li>

                            <li className='flex items-center mt-6 gap-3'><span className='text-green-600'><TiTick /></span>Lorem ipsum dolor sit amet.</li>

                            <li className='flex items-center mt-6 gap-3'><span className='text-green-600'><TiTick /></span>Lorem ipsum dolor sit</li>

                            <li className='flex items-center mt-6 gap-3'><span className='text-green-600'><TiTick /></span>Lorem ipsum dolor sit amet.</li>

                            <li className='flex items-center mt-6 gap-3'><span className='text-green-600'><TiTick /></span>Lorem ipsum dolor</li>

                        </ul>

                        <button className='bg-gray-900 text-white py-4 w-full mt-6 rounded-lg'>Get Started</button>
                    </div>

                    <div className='bg-white p-6 rounded-lg shadow-xl'>
                        <button className='bg-[#91a4f5] text-sm px-2 rounded-full mb-4 font-semibold uppercase'>Enterprise</button>
                        <h1 className='font-bold'><span className='text-5xl'>$86</span>/mo</h1>
                        <p className='mt-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, amet?</p>
                        <ul>
                            <li className='flex items-center mt-6 gap-3'><span className='text-green-600'><TiTick /></span>Lorem ipsum dolor</li>

                            <li className='flex items-center mt-6 gap-3'><span className='text-green-600'><TiTick /></span>Lorem ipsum dolor sit amet.</li>

                            <li className='flex items-center mt-6 gap-3'><span className='text-green-600'><TiTick /></span>Lorem ipsum dolor sit</li>

                            <li className='flex items-center mt-6 gap-3'><span className='text-green-600'><TiTick /></span>Lorem ipsum dolor sit amet.</li>

                            <li className='flex items-center mt-6 gap-3'><span className='text-green-600'><TiTick /></span>Lorem ipsum dolor</li>

                        </ul>
                        <button className='bg-gray-900 text-white py-4 w-full mt-6 rounded-lg'>Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Pricing
