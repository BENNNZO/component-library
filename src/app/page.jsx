import React from 'react';

import Navigation from './components/Navigation';

import InputPhone from "@/app/components/InputPhone"
import PerspectiveCard from './components/PerspectiveCard';
import Dropdown from './components/Dropdown';

export default function Home() {
    return (
        <main>
            <Navigation />

            <InputPhone />
            <PerspectiveCard />
            <Dropdown />
        </main>
    )
}