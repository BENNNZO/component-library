"use client"

import React, { useState, useEffect } from 'react';

import Navigation from './components/Navigation';
import Cursor from './components/Cursor';

import InputPhone from "@/app/components/InputPhone"
import PerspectiveCard from './components/PerspectiveCard';
import Dropdown from './components/Dropdown';
import TheButton from './components/TheButton';

export default function Home() {
    const [hover, setHover] = useState(false)

    return (
        <div className='snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth'>
            <p className='absolute top-0 left-0 bg-red-400 text-yellow-400 z-30'>{JSON.stringify(hover)}</p>
            <Cursor hover={hover} />
            <Navigation setHover={setHover} />

            <InputPhone setHover={setHover} />
            <PerspectiveCard setHover={setHover} />
            <Dropdown setHover={setHover} />
            <TheButton setHover={setHover} />
        </div>
    )
}