import React from 'react'

const About = () => {
    return (
        <div className='w-full'>
            <div className='flex flex-col justify-center items-center py-20 max-w-[1200px] mx-auto'>

                <h1 className='font-bold text-5xl text-center'>Trusted by Developers Around the World</h1>
                <p className='text-gray-700 font-normal text-xl w-full max-w-[1200px] text-center mt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis placeat distinctio omnis iusto impedit expedita accusantium fugiat nemo eligendi beatae.</p>

                <div className='flex flex-row flex-wrap justify-center items-center'>

                    <div className='px-24 py-12 shadow-lg rounded-lg '>
                        <h1 className='text-[#3f3cd0] font-bold text-7xl tracking-wide text-center'>100%</h1>
                        <p className='text-center text-gray-500'>Completion</p>
                    </div>

                    <div className='px-24 py-12 shadow-lg rounded-lg '>
                        <h1 className='text-[#3f3cd0] font-bold text-7xl tracking-wide text-center'>24/7</h1>
                        <p className='text-center text-gray-500'>Delivery</p>
                    </div>

                    <div className='px-24 py-12 shadow-lg rounded-lg '>
                        <h1 className='text-[#3f3cd0] font-bold text-7xl tracking-wide text-center'>100K</h1>
                        <p className='text-center text-gray-500'>Transactions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
