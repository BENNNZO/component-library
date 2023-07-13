"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Arrow from "@/app/assets/arrow.svg"

export default function Dropdown() {
    const [dropdownState, setDropdownState] = useState(false)

    let items = ["1", "2", "3", "4", "5"]

    const variants = {
        dropdownContainer: {
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.5 }},
        },
        dropdownItem: {
            initial: { opacity: 0 },
            animate: { opacity: 1 }
        }
    }

    return (
        <section id='dropdown' className=' select-none h-screen bg-gradient-to-br from-violet-400 to-sky-400 grid place-items-center snap-center'>
            <div className='w-96 h-96 rounded-md overflow-hidden'>
                <motion.div 
                    className='px-8 py-5 bg-white rounded-md cursor-pointer flex flex-row justify-between' 
                    onClick={() => setDropdownState(prev => !prev)}
                    whileTap={{ scale: 0.98, transition: { type: "spring", stiffness: 250 }}}
                >
                    <p className='text-xl font-semibold'>Dropdown</p>
                    <Image 
                        src={Arrow}
                        width={20}
                        height={20}
                        className={`${dropdownState ? "rotate-90" : ""} transition-all`}
                    />
                </motion.div>
                <motion.ul 
                    className='flex flex-col gap-2 mt-5'
                    variants={variants.dropdownContainer}
                    initial="initial"
                    animate="animate"
                >
                    {dropdownState && items.map(e => (
                        <motion.li 
                            className='px-3 py-2 w-full text-xl font-semibold bg-white rounded-md'
                            variants={variants.dropdownItem}
                            initial="initial"
                            animate="animate"
                        >
                            {e}
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </section>
    )
}