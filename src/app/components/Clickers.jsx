"use client"

import React, { useState, useEffect } from 'react';

function Clicker(props) {
    const [pos, setPos] = useState({ x: 0, y: 0 })

    console.log(props.index)
    console.log(Math.sin(props.index) * 360)

    useEffect(() => {
        setPos({
            x: Math.sin(props.index / props.val1) * props.index / props.val2,
            y: Math.cos(props.index / props.val1) * props.index / props.val2
        })
    }, [props.val1, props.val2])

    return (
        <div className='w-4 h-4 bg-white rounded-full absolute overflow-hidden animate-pulse transition-transform ease-out duration-500' style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}>
            {/* {props.index} */}
        </div>
    )
}

export default function Clickers() {
    const [amount, setAmount] = useState(1000)
    const [val1, setVal1] = useState(1)
    const [val2, setVal2] = useState(1)

    useEffect(() => {
        let prevAmount = 0

        const amountInterval = setInterval(() => {
            prevAmount++
            setAmount(prevAmount)
        }, 100);

        return () => clearInterval(amountInterval)
    }, [])

    return (
        <section id='clickers' className='grid place-items-center snap-center overflow-hidden min-h-screen bg-gradient-to-br from-sky-400 to-purple-500'>
            <div className='absolute top-0 left-0'>
                <input type="range" min={0} max={1000} value={amount} onChange={e => setAmount(e.target.valueAsNumber)} className='w-full' />
                <input type="range" min={0} max={5} value={val1} onChange={e => setVal1(e.target.valueAsNumber)} className='w-full' />
                <input type="range" min={0} max={5} value={val2} onChange={e => setVal2(e.target.valueAsNumber)} className='w-full' />
            </div>
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