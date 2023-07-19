"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Clicker(props) {
    const [pos, setPos] = useState({ 
        x: Math.sin(props.index / props.val1) * props.index / props.val2, 
        y: Math.cos(props.index / props.val1) * props.index / props.val2,
    })

    useEffect(() => {
        setPos({ 
            x: Math.sin(props.index / props.val1) * props.index / props.val2, 
            y: Math.cos(props.index / props.val1) * props.index / props.val2,
        })
        
        // setTimeout(() => {
        //     setPos({ x: 0, y: 0 })
        // }, 1000);
    }, [props.val1, props.val2])

    return (
        <motion.div 
            className='w-4 h-4 bg-white rounded-md absolute overflow-hidden shadow-md' 
            style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {/* {props.index} */}
        </motion.div>
    )
}

export default function Clickers() {
    const [amount, setAmount] = useState(0)
    const [val1, setVal1] = useState(2)
    const [val2, setVal2] = useState(1)

    useEffect(() => {
        let interval = 0

        const amountInterval = setInterval(() => {
            let prevAmount = 0
            setVal1((Math.sin(interval / 500) + 2))
            // setVal2((Math.sin(interval / 500) + 2))
            setAmount(Math.round((Math.sin(interval / 250) + 1) * 150))
            interval++
        }, 0);

        return () => clearInterval(amountInterval)
    }, [])

    return (
        <section id='clickers' className='grid place-items-center snap-center overflow-hidden min-h-screen bg-gradient-to-br from-sky-400 to-purple-500'>
            {/* <div className='absolute top-0 left-0'>
                <input type="range" min={0} max={1000} value={amount} step={1} onChange={e => setAmount(e.target.valueAsNumber)} className='w-full' />
                <input type="range" min={0} max={5} value={val1} step={0.1} onChange={e => setVal1(e.target.valueAsNumber)} className='w-full' />
                <input type="range" min={0} max={5} value={val2} step={0.1} onChange={e => setVal2(e.target.valueAsNumber)} className='w-full' />
            </div> */}
            <div className='relative'>
                {[...Array(amount)].map((e, i) => {
                    return (
                        <Clicker key={i} index={i} ratio={360 / amount} amount={amount} val1={val1} val2={val2} />
                    )
                })}
            </div>
        </section>
    )
}