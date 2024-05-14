import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Main = () => {
    return (
        <div className='min-h-screen bg-cover bg-center backdrop-blur-md' style={{ backgroundImage: `url(/bg.png)` }}>
            <div className='lg:w-[74%] mx-2 lg:mx-auto'>
                <nav className='flex justify-end lg:py-10 py-2 items-center'>
                    {/* <p className='text-white text-lg'>LOGO</p> */}
                    {/* <ul className='flex gap-12 items-center text-white'>
                        <li className='hover:text-primary-100 cursor-pointer text-lg text-white'>Home</li>
                        <li className='hover:text-primary-100 cursor-pointer text-lg text-white'>About</li>
                        <li className='hover:text-primary-100 cursor-pointer text-lg text-white'>Service</li>
                        <li className='hover:text-primary-100 cursor-pointer text-lg text-white'>Blog</li>
                        <li className='hover:text-primary-100 cursor-pointer text-lg text-white'>Hire a Hacker Service</li>
                        <li className='hover:text-primary-100 cursor-pointer text-lg text-white'>Contact Us</li>
                    </ul> */}
                    <Link href={"https://wa.link/fvgrxt"} target='_blank' className='bg-primary-100 hover:bg-primary-200 lg:px-8 px-3 text-lg font-semibold text-white lg:py-3 py-2 rounded-lg'>
                        Contact Us
                    </Link >
                </nav>
                <div className='lg:py-10 md:py-2 lg:mt-[5rem] gap-8 lg:gap-0 flex flex-col-reverse lg:flex-row md:items-start'>
                    <div className='w-full lg:w-1/2 text-white flex flex-col   space-y-5  px-2 sm:px-0'>
                        <h2 className='lg:text-6xl text-3xl text-center lg:text-start font-bold'>Hire a Hacker Service</h2>
                        <p className='py-4 text-xl text-center lg:text-start'>Are you looking to hire a hacker? If so, you&rsquo;ve come to the right place. Cyber ethical hackers is a website that connects people who need hacking services with professional and certified ethical hackers. </p>
                        <p className='py-4 text-xl text-center lg:text-start'>
                            We provide a safe and secure platform for people to find the ethical hacking skills they need without worrying about service delivery.
                        </p>
                        <div className='flex flex-col lg:flex-row gap-4'>
                            <Link href={"https://wa.link/fvgrxt"} className='bg-primary-100 hover:bg-primary-200 lg:px-8 px-2 text-lg font-semibold text-white lg:py-3 py-2 rounded-lg'>
                                Contact Us
                            </Link>
                            <button className='bg-transparent hover:text-opacity-70 border-2 border-white lg:px-8 px-2 text-lg font-semibold text-white lg:py-3 py-2 rounded-lg'>
                                Our services
                            </button>
                        </div>
                    </div>
                    <div className='w-full lg:justify-start flex justify-center items-center lg:w-1/2'>
                        <Image
                            alt='banner'
                            src={"/banner.png"}
                            width={1000}
                            height={1000}
                            className='w-[250px] rounded-full lg:rounded-none h-[250px] xl:w-[500px] xl:h-[500px] lg:w-[500px] lg:h-[550px]'
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main