import Image from 'next/image'
import React from 'react'

const Why = () => {
    return (
        <div className='bg-primary-500 lg:pt-10 pt-4 lg:pb-[10rem] pb-10'>
            <div className='lg:w-[74%] mx-2 lg:mx-auto lg:gap-10 gap-3'>
                <h2 className='text-center lg:text-[40px] text-2xl text-white font-bold'>Why Choose Us</h2>
                <div className='lg:w-1/2  mx-auto pb-10 pt-5'>
                    <p className=' text-primary-300 text-center text-xl' > Are you in need of professional hacking services but don&rsquo;t know who to trust? Look no further than our team of experienced hackers. Our track record is impeccable, and we&rsquo;re dedicated to providing our clients with the highest quality service possible. We understand that your privacy and security are of the utmost importance, and we&rsquo;re committed to keeping your data safe and confidential. Contact us today to learn more about our hackers for hire!</p>
                </div>
                <div className='grid gap-4 lg:grid-cols-3 grid-cols-1'>
                    <div className='lg:p-10 p-4 rounded-lg bg-primary-600 hover:bg-gradient-to-b hover:to-red-600 hover:from-gray-900'>
                        <div className='lg:p-6 p-3 w-fit rounded-lg  bg-black hover:bg-white'>
                            <Image
                                alt='icon'
                                src={"/image/why.png"}
                                width={40}
                                height={40}
                                className=' hover:bg-white lg:w-[40px] lg:h-[40px] w-[20px] h-[20px]'
                            />
                        </div>
                        <h2 className='text-primary-300 text-2xl py-3 font-bold'>Phone Hacking Service</h2>
                        <div className='space-y-4 text-white'>
                            <p> If you&rsquo;re looking for a way to hire professional hackers to hack a cell phone remotely, you&rsquo;ve come to the right place. </p>
                            <p>
                                Cyber lords offer a variety of services that can help you get the job done. Our intrusion detection system can help you detect hacking on a cell phone, and our certified ethical hacker can hack an iPhone remotely. </p>
                            <p>
                                We also offer a phone hacking service, so you can hire a professional hacker to get the job done right. Whether you&rsquo;re looking to hire a certified ethical hacker for personal or business purposes, we can help you find the right person for the job.   </p>
                        </div>
                    </div>
                    <div className='lg:p-10 p-4 rounded-lg bg-primary-600 hover:bg-gradient-to-b hover:to-red-600 hover:from-gray-900'>
                        <div className='lg:p-6 p-3 w-fit rounded-lg  bg-black hover:bg-white'>
                            <Image
                                alt='icon'
                                src={"/image/why3.png"}
                                width={40}
                                height={40}
                                className=' hover:bg-white lg:w-[40px] lg:h-[40px] w-[20px] h-[20px]'
                            />
                        </div>
                        <h2 className='text-primary-300 text-2xl py-3 font-bold'>Test Website Security</h2>
                        <div className='space-y-4 text-white'>
                            <p> Cyber Lords is a team of professional ethical hackers who provide services to test website security, detect intrusions, and perform penetration testing. We also offer security audits and network traffic data analysis. Our goal is to help our clients improve their security posture and protect their online assets.
                            </p>
                            <p> 										When it comes to hacking, many people think of malicious activities like stealing someone&rsquo;s identity or breaking into computer systems. However, there is a growing industry of professional hackers who offer their services to businesses and individuals who want to penetrate their Web site security. While hiring a hacker may seem like an easy way to fix your security issues, it&rsquo;s important to protect your database against malicious attacks.</p>

                        </div>
                    </div>
                    <div className='lg:p-10 p-4 rounded-lg bg-primary-600 hover:bg-gradient-to-b hover:to-red-600 hover:from-gray-900'>
                        <div className='lg:p-6 p-3 w-fit rounded-lg  bg-black hover:bg-white'>
                            <Image
                                alt='icon'
                                src={"/image/why2.png"}
                                width={40}
                                height={40}
                                className=' hover:bg-white lg:w-[40px] lg:h-[40px] w-[20px] h-[20px]'
                            />
                        </div>
                        <h2 className='text-primary-300 text-2xl py-3 font-bold'>Change College grades</h2>
                        <div className='space-y-4 text-white'>
                            <p>Hiring a hacker service that helps people change their university grades, and school grades, and avoid security breaches. We have a team of experienced hackers who are experts at finding security holes in university databases and websites. We offer our hacking skills services to anyone who needs them, and we guarantee that our work is of the highest quality.
                            </p>
                            <p> Cyber Lords is a professional hacking service that helps students change their grades, school records, and university transcripts. We also offer security consulting to universities and businesses to help them avoid cyber attacks.
                            </p>
                            <p>
                                We also offer intrusion detection systems, penetration testing, and ethical hacking services. We use the same techniques as malicious hackers, but we do it ethically and with your permission.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Why