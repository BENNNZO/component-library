"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Dot() {
    const [split, setSplit] = useState(false)
    const [lock, setLock] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLock(false)
        }, 100);
    }, [])

    function splitFunction() {
        if (!lock) setSplit(true)
    }

    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`w-full h-full ${split ? "" : "bg-white"} transition-colors ease-out rounded-full relative`}
            // className={`w-full h-full transition-colors ease-out rounded-full relative`}
            onMouseEnter={() => splitFunction()}

        >
            {split ? (
                <div className='grid grid-cols-2 w-full h-full'>
                    <Dot />
                    <Dot />
                    <Dot />
                    <Dot />
                </div>
            ) : (
                null
            )}
        </motion.div>
    )
}

export default function Split(props) {
    return (
        <section id='split-hover' className='min-h-screen bg-gradient-to-br from-purple-400 to-pink-400 snap-center grid place-items-center'>
            <div 
                className=' w-[500px] h-[500px]'
                onMouseEnter={() => props.setHover(true)}
                onMouseLeave={() => props.setHover(false)}
            >
                <Dot />
            </div>
        </section>
    )
}