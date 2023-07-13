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
                className={`z-20 ${props.hover ? "w-44 h-44" : "w-10 h-10"} bg-white opacity-25 rounded-full absolute pointer-events-none transition-all ease-out duration-500`}
                style={{ transform: `translate(calc(${mousePos.x}px - 50%), calc(${mousePos.y}px - 50%))` }}
            />
            <div 
                className={`z-20 bg-white rounded-full w-4 h-4 absolute pointer-events-none custom_cursor`} 
                style={{ transform: `translate(calc(${mousePos.x}px - 50%), calc(${mousePos.y}px - 50%))` }}
            />
        </>
    )
}