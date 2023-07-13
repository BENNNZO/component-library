import React from 'react';

import Navigation from './components/Navigation';

import InputPhone from "@/app/components/InputPhone"
import PerspectiveCard from './components/PerspectiveCard';
import Dropdown from './components/Dropdown';

export default function Home() {
    return (
        <div className='snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth'>
            <Navigation />

            <InputPhone />
            <PerspectiveCard />
            <Dropdown />
        </div>
    )
}