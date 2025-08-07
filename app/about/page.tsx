import HeaderSection from '@/components/header-section'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'
import { IoEyeOffOutline, IoLocateOutline } from 'react-icons/io5'

export const metadata: Metadata ={
    title: "About",
    description: "Who we are",
}

const AboutPage = () => {
  return (
    <div>
        <HeaderSection title='About Us' subTitle='Lorem ipsum dolor sit amet .'/>
        <div className="max-w-screen-xl mx-auto py-20 px-4">
            <div className="grid md:grid-cols-2 gap-8">
                <Image src="/about-image.jpg" width={650} height={579} alt="about image"/>
                <div>
                    <h1 className="text-5xl font-semibold text-gray-900 mb-4">Who we Are</h1>
                    <p className="text-gray-700 py-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur itaque quam iure dignissimos sequi molestias doloremque dolor maiores repudiandae, iste totam. Veritatis odit illum dolor fuga omnis eaque unde possimus!</p>
                    <ul className="list-item space-y-6 pt-8">
                        <li className="flex gap-5">
                            <div className="flex-none mt-1">
                                <IoEyeOffOutline className='size-7' />
                            </div>

                            <div className="flex-1">
                                <h4 className="text-lg font-semibold mb-1">Vision : </h4>
                                <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, vel dolores. Facilis, quos! Cupiditate reiciendis odit iusto tenetur quod iure accusantium officia adipisci. Ut molestias veniam ducimus recusandae eveniet molestiae?</p>
                            </div>
                        </li>

                        <li className="flex gap-5">
                            <div className="flex-none mt-1">
                                <IoLocateOutline className='size-7' />
                            </div>

                            <div className="flex-1">
                                <h4 className="text-lg font-semibold mb-1">Mission : </h4>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ad sapiente saepe et inventore provident est perspiciatis nisi unde placeat?
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPage