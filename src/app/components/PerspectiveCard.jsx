"use client"

import React, { useState, useEffect, useRef } from 'react';

export default function PerspectiveCard(props) {
    const cardRef = useRef()
    
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const [hover, setHover] = useState(false)

    useEffect(() => {
        window.addEventListener("mousemove", e => {
            let mouseX = e.clientX / window.innerWidth - 0.5
            let mouseY = e.clientY / window.innerHeight - 0.5
            let sensX = 0.15
            let sensY = 0.25

            setMousePos({ 
                x: mouseX,
                y: mouseY,
            }),
            
            setHover(() => {
                if (mouseX > 0 - sensX && mouseX < 0 + sensX && mouseY > 0 - sensY && mouseY < 0 + sensY) { return true } else { return false }
            })
        })
    }, [])

    return (
        <section 
            id='perspective-card' 
            className='h-screen bg-gradient-to-br from-amber-400 to-pink-400 grid place-items-center snap-center' 
            style={{ perspective: "200px" }}
        >
            <div
                ref={cardRef}
                onMouseEnter={() => props.setHover(true)}
                onMouseLeave={() => props.setHover(false)} 
                className={`cursor-none z-10 w-72 h-96 ${hover ? "p-5" : "p-1"} rounded-2xl shadow-md bg-white transition-all ease-out duration-500`}
                style={hover ? {
                    transformStyle: "preserve-3d",
                    transform: `rotateX(${mousePos.y * -45}deg) rotateY(${mousePos.x * 90}deg) translateZ(50px)`,
                } : {}}
            >
                <div className={`${hover ? "p-5 bg-neutral-200" : "p-1 bg-white"} flex flex-col gap-5 w-full h-full rounded-2xl transition-all ease-out duration-500`}>
                    <div className='w-full h-full bg-white rounded-2xl'></div>
                    <div className='w-full h-full bg-white rounded-2xl'></div>
                    <div className='w-full h-full bg-white rounded-2xl'></div>
                </div>
            </div>
            <div
                ref={cardRef} 
                className={`-z-10 absolute w-72 h-5 top-3/4 ${hover ? "p-5" : "p-1"} rounded-2xl shadow-md bg-pink-950/30 blur-xl transition-all ease-out duration-500`}
                style={hover ? {
                    transformStyle: "preserve-3d",
                    transform: `rotateX(${mousePos.y * -45}deg) rotateY(${mousePos.x * 90}deg) translateZ(50px)`,
                } : {}}
            >
            </div>
        </section>
    )
}