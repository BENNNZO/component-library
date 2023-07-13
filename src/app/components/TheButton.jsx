"use client"

import React from 'react';
import { motion } from 'framer-motion';

import Button from "@/app/assets/button_01.svg"

export default function TheButton() {
    return (
        <section id='the-button' className='h-screen snap-center bg-gradient-to-br from-orange-400 to-red-400 grid place-items-center'>
            {/* <motion.div whileTap={{ y: 50 }} className='w-96 h-24 relative drop-shadow-md'>
                <div className='h-full bg-red-500 top-1/2 absolute left-0 w-full'></div>
                <div className='h-full bg-red-500 top-full rounded-[100%] absolute left-0 w-full'></div>
                <div className='bg-red-500 rounded-[100%] w-full h-full absolute top-0 left-0 border-b-2 border-b-red-700'></div>
            </motion.div> */}
            {/* <Button className="the-button" /> */}
            
            {/* <svg width="100%" height="100%" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlnsSerif="http://www.serif.com/"
                // style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: "50" }}>
                <rect x="0" y="0" width="100" height="100" style={{ fill: "none" }} />
                <g>
                    <g transform="matrix(1,0,0,1,0,-4)">
                        <path
                            d="M50,53.917C40.292,53.917 31.691,55.997 26.354,59.116C22.171,61.561 19.917,64.739 19.917,68C19.917,71.261 22.171,74.439 26.354,76.884C31.691,80.003 40.292,82.083 50,82.083C59.708,82.083 68.309,80.003 73.646,76.884C77.829,74.439 80.083,71.261 80.083,68C80.083,64.739 77.829,61.561 73.646,59.116C68.309,55.997 59.708,53.917 50,53.917ZM50,58.083C58.836,58.083 66.686,59.874 71.543,62.713C74.159,64.243 75.917,65.96 75.917,68C75.917,70.04 74.159,71.757 71.543,73.287C66.686,76.126 58.836,77.917 50,77.917C41.164,77.917 33.314,76.126 28.457,73.287C25.841,71.757 24.083,70.04 24.083,68C24.083,65.96 25.841,64.243 28.457,62.713C33.314,59.874 41.164,58.083 50,58.083Z" />
                    </g>
                    <path
                        d="M22,50L22.001,49.922C22.098,43.335 34.607,38 50,38C65.454,38 78,43.377 78,50L78,64C78,70.623 65.454,76 50,76C34.546,76 22,70.623 22,64L22,50Z"
                        style={{ fill: "rgb(82, 0, 0)", fillOpacity: 0 }} />
                    <clipPath id="_clip1">
                        <path
                            d="M22,50L22.001,49.922C22.098,43.335 34.607,38 50,38C65.454,38 78,43.377 78,50L78,64C78,70.623 65.454,76 50,76C34.546,76 22,70.623 22,64L22,50Z" />
                    </clipPath>
                    <g clip-path="url(#_clip1)">
                        <motion.g whileTap={{ y: 10 }} className="outline-none focus:outline-none">
                            <path
                                d="M22.001,49.922C22.098,43.335 34.607,38 50,38C65.454,38 78,43.377 78,50L78,64L22,64L22,50L22.001,49.922Z"
                                style={{ fill: "rgb(82, 0, 0)" }} />
                            <g transform="matrix(1,0,0,1,0,-4)">
                                <ellipse cx="50" cy="68" rx="28" ry="12" style={{ fill: "rgb(82, 0, 0)" }} />
                            </g>
                            <g transform="matrix(1,0,0,1,0,-18)">
                                <ellipse cx="50" cy="68" rx="28" ry="12" style={{ fill: "rgb(255, 0, 0)" }} />
                            </g>
                        </motion.g>
                    </g>
                </g>
            </svg> */}
            
            <svg className='drop-shadow-md' width="100%" height="100%" viewBox="0 0 100 100" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: "50" }}>
                <g transform="matrix(1,0,0,1,0,-6.54167)">
                    <path className='button-bottom' style={{ fill: "url(#_Radial1)" }} d="M50,53.917C40.292,53.917 31.691,55.997 26.354,59.116C22.171,61.561 19.917,64.739 19.917,68C19.917,71.261 22.171,74.439 26.354,76.884C31.691,80.003 40.292,82.083 50,82.083C59.708,82.083 68.309,80.003 73.646,76.884C77.829,74.439 80.083,71.261 80.083,68C80.083,64.739 77.829,61.561 73.646,59.116C68.309,55.997 59.708,53.917 50,53.917ZM50,58.083C58.836,58.083 66.686,59.874 71.543,62.713C74.159,64.243 75.917,65.96 75.917,68C75.917,70.04 74.159,71.757 71.543,73.287C66.686,76.126 58.836,77.917 50,77.917C41.164,77.917 33.314,76.126 28.457,73.287C25.841,71.757 24.083,70.04 24.083,68C24.083,65.96 25.841,64.243 28.457,62.713C33.314,59.874 41.164,58.083 50,58.083Z"/>
                </g>
                <g transform="matrix(1,0,0,1,0,-2.54167)">
                    <path className='fill-transparent' d="M22,39L22.001,38.922C22.098,32.335 34.607,27 50,27C65.454,27 78,32.377 78,39L78,64C78,70.623 65.454,76 50,76C34.546,76 22,70.623 22,64L22,39Z"/>
                    <clipPath id="_clip1">
                        <path d="M22,39L22.001,38.922C22.098,32.335 34.607,27 50,27C65.454,27 78,32.377 78,39L78,64C78,70.623 65.454,76 50,76C34.546,76 22,70.623 22,64L22,39Z"/>
                    </clipPath>
                    <g clipPath="url(#_clip1)">
                        <motion.g whileTap={{ y: 10 }} className='focus:outline-none'>
                            <path className='fill-red-500' d="M22.001,49.922C22.098,43.335 34.607,38 50,38C65.454,38 78,43.377 78,50L78,89L22,89L22,50L22.001,49.922Z"/>
                            <g transform="matrix(1,0,0,1,0,-18)">
                                <ellipse cx="50" cy="68" rx="28" ry="12" className='fill-red-600/30'/>
                            </g>
                        </motion.g>
                    </g>
                </g>
                <defs>
                    <radialGradient id="_Radial1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(29,0,0,12.5,50,68)">
                        <stop offset="0" style={{ stopColor: "black", stopOpacity: 1 }}/>
                        <stop offset="0.96" style={{ stopColor: "rgb(210,210,210)", stopOpacity: 1 }}/>
                        <stop offset="1" style={{ stopColor: "white", stopOpacity: 1 }}/>
                    </radialGradient>
                </defs>
            </svg>

        </section>
    )
}