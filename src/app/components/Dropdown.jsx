"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import Arrow from "@/app/assets/arrow.svg"

export default function Dropdown() {
    const [dropdownState, setDropdownState] = useState(false)


    return (
        <section id='dropdown' className='h-screen bg-gradient-to-br from-violet-400 to-sky-400 grid place-items-center'>
            <div className='bg-white rounded-lg shadow-md w-96'>
                <div className='px-8 py-5 cursor-pointer flex flex-row justify-between' onClick={() => setDropdownState(prev => !prev)}>
                    <p className='text-2xl font-semibold'>Dropdown</p>
                    <Image 
                        src={Arrow}
                        width={30}
                        height={30}
                        className=''
                    />
                </div>
            </div>
        </section>
    )
}