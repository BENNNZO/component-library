"use client"

import React, { useState } from 'react';

import Navigation from './components/Navigation';
import Cursor from './components/Cursor';

import InputPhone from "@/app/components/InputPhone"
import PerspectiveCard from './components/PerspectiveCard';
import Dropdown from './components/Dropdown';
import TheButton from './components/TheButton';
import Split from "./components/Split"
import Clickers from './components/Clickers';

export default function Home() {
    const [hover, setHover] = useState(false)

    return (
        <div className='snap-y snap-mandatory overflow-y-scroll overflow-x-hidden h-screen scroll-smooth'>
            <Cursor hover={hover} />
            <Navigation setHover={setHover} />


            <Clickers setHover={setHover} />
            <Split setHover={setHover} />
            <InputPhone setHover={setHover} />
            <PerspectiveCard setHover={setHover} />
            <Dropdown setHover={setHover} />
            <TheButton setHover={setHover} />
        </div>
    )
}