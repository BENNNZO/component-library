"use client"

import React, { useState, useEffect } from 'react';

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
        <div 
            className={`w-full h-full ${split ? "" : "bg-white"} transition-colors ease-out rounded-full relative`}
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
        </div>
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