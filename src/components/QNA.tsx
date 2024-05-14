"use client"
import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const QNA = () => {


    const data = [
        {
            id: "Testimonial 1", body: "Fredrick Cyrus assistant has the most affordable rates for ethical hackers. I would recommend this company to anyone who wants their spouse phone hacked"
            , title: "Testimonial 1"
        },
        {
            id: "Testimonial 2", body: "A friend of mine was in need of some specialized help removing cyber-security from his company. I found Fredrick online and they not only helped us but also gave us insight into the complexity which we could not have gained on our own."
            , title: "Testimonial 2"
        },
        {
            id: "Testimonial 3", body: "Fredrick Cyrus assistant is a website featuring ethical hacker that can protect your company from malicious hackers. I contacted many other ethical hackers, but they could not stop the cyber attacks in time. Cyber Lords’ hackers were able to bring our adversaries down in a few days and they will employ their hackers again the next time we need their help."
            , title: "Testimonial 3"
        },


    ]

    return (
        <div className='lg:py-28 py-10'>
            <div className='lg:w-[74%] mx-2 lg:flex lg:mx-auto lg:gap-10 gap-3 '>
                <div className='lg:w-1/2 flex flex-col justify-end items-center'>
                    <div className=''>
                        <Image
                            alt='src'
                            src={"/qna.jpg"}
                            width={1000}
                            height={1000}
                            className='w-[250px] rounded-full lg:rounded-none h-[250px] xl:w-[500px] xl:h-[500px] lg:w-[500px] lg:h-[550px]'
                        />
                    </div>
                </div>
                <div className='lg:w-1/2'>
                    <div className=" space-y-5 flex flex-col items-center justify-center">
                        <h1 className="text-center mt-8 text-white font-extrabold text-xl md:text-2xl lg:text-4xl ">Frequently Asked Questions</h1>
                        {data.map(ele => {
                            return (
                                <Disclosure key={ele.id}>
                                    {({ open }) => (
                                        <>
                                            <div
                                                className={`${open ? "border-gray-400 border" : "border-gray-400 border"
                                                    }  rounded-2xl w-full px-5 py-3 flex my-2 items-start flex-col bg-secondary-800 gap-1 transition-all duration-500 ease-in-out`}
                                            >
                                                <Disclosure.Button
                                                    className={`flex w-full gap-4 justify-between items-center font-euclid font-medium text-[12px]  md:text-lg text-primary-100 text-left lg:py-2.5`}
                                                >
                                                    {ele.title} {open ? <FaChevronUp /> : <FaChevronDown />}
                                                </Disclosure.Button>
                                                {/* <Transition
                  enter="transition duration-300 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-50 ease-in-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                /> */}
                                                <Disclosure.Panel
                                                    style={{ listStyleType: "decimal" }}
                                                    className={`font-euclid font-light text-sm md:text-lg text-primary2 list-decimal text-white`}
                                                >
                                                    <span
                                                        dangerouslySetInnerHTML={{ __html: ele.body }}
                                                    ></span>
                                                    {/* {faq.answer} */}
                                                </Disclosure.Panel>
                                            </div>
                                        </>
                                    )}
                                </Disclosure>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default QNA