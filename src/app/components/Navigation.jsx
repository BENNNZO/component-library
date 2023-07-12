import React from 'react';

export default function Navigation() {
    const links = [
        {
            title: "Phone Input",
            src: "#input-phone"
        },
        {
            title: "3D Card",
            src: "#perspective-card"
        },
        {
            title: "Dropdown",
            src: "#dropdown"
        },
    ]


    return (
        <section className='fixed top-1/2 left-5 -translate-y-1/2 flex flex-col gap-1 z-10'>
            {links.map(e => (
                <a 
                    key={e}
                    href={`${e.src}`} 
                    className='text-white font-bold hover:translate-x-2 transition-all text-xl'
                >
                    {e.title}
                </a>
            ))}
        </section>
    )
}