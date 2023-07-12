import React from 'react';

import InputPhone from "@/app/components/InputPhone"
import PerspectiveCard from './components/PerspectiveCard';
import Navigation from './components/Navigation';

export default function Home() {
    return (
        <main>
            <Navigation />
            <InputPhone />
            <PerspectiveCard />
        </main>
    )
}