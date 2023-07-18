"use client"

import React, { useState, useEffect } from 'react';

export default function Cursor(props) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        window.addEventListener("mousemove", e => {
            setMousePos({ x: e.pageX, y: e.pageY })
        })

        return () => window.removeEventListener("mousemove", e => {
            setMousePos({ x: e.pageX, y: e.pageY })
        })
    }, [])

    return (
        <>
            <div
                draggable={false} 
                className={`z-20 ${props.hover ? "w-44 h-44 opacity-0" : "w-10 h-10 opacity-25"} bg-white select-none pointer-events-none rounded-full absolute transition-all ease-out duration-500`}
                style={{ transform: `translate(calc(${mousePos.x}px - 50%), calc(${mousePos.y}px - 50%))` }}
            />
            <div 
                draggable={false} 
                className={`z-20 ${props.hover ? "bg-neutral-900/70" : "bg-white"} transition-colors select-none duration-500 rounded-full w-4 h-4 absolute pointer-events-none custom_cursor`} 
                style={{ transform: `translate(calc(${mousePos.x}px - 50%), calc(${mousePos.y}px - 50%))` }}
            />
        </>
    )
}