import Image from 'next/image'
import React from 'react'

const Bar = () => {
    return (
        <div className='py-20'>
            <div className='lg:w-[74%] mx-2 lg:mx-auto lg:gap-10 gap-3'>
                <div className=' grid lg:grid-cols-4 grid-cols-1 gap-4 '>
                    <div className='lg:p-8 p-3 rounded-xl space-y-4 bg-primary-600 hover:bg-gradient-to-b hover:to-red-600 hover:from-gray-900 flex flex-col justify-center items-center lg:justify-start lg:items-start'>
                        <Image
                            alt='bar'
                            src={"/image/bar.png"}
                            width={60}
                            height={60}
                            className=' hover:bg-white'
                        />
                        <h2 className='lg:text-3xl text-2xl font-bold text-white'>3,325+</h2>
                        <p className='text-[20px] text-white'>Global Projects</p>
                    </div>
                    <div className='lg:p-8 p-3 rounded-xl space-y-4 bg-primary-600 hover:bg-gradient-to-b hover:to-red-600 hover:from-gray-900 flex flex-col justify-center items-center lg:justify-start lg:items-start'>
                        <Image
                            alt='bar'
                            src={"/image/bar1.png"}
                            width={60}
                            height={60}
                            className=' hover:bg-white'
                        />
                        <h2 className='lg:text-3xl text-2xl font-bold text-white'>4,579+</h2>
                        <p className='text-[20px] text-white'>Client Projects</p>
                    </div>
                    <div className='lg:p-8 p-3 rounded-xl space-y-4 bg-primary-600 hover:bg-gradient-to-b hover:to-red-600 hover:from-gray-900 flex flex-col justify-center items-center lg:justify-start lg:items-start'>
                        <Image
                            alt='bar'
                            src={"/image/bar2.png"}
                            width={60}
                            height={60}
                            className=' hover:bg-white'
                        />
                        <h2 className='lg:text-3xl text-2xl font-bold text-white'>100%</h2>
                        <p className='text-[20px] text-white'>Service Guarantee</p>
                    </div>
                    <div className='lg:p-8 p-3 rounded-xl space-y-4 bg-primary-600 hover:bg-gradient-to-b hover:to-red-600 hover:from-gray-900 flex flex-col justify-center items-center lg:justify-start lg:items-start'>
                        <Image
                            alt='bar'
                            src={"/image/bar3.png"}
                            width={60}
                            height={60}
                            className=' hover:bg-white'
                        />
                        <h2 className='lg:text-3xl text-2xl font-bold text-white'>7,455+</h2>
                        <p className='text-[20px] text-white'>Experts Team</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Bar