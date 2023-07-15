import React from 'react';

export default function Navigation(props) {
    const links = [
        {
            title: "Split Hover",
            src: "#split-hover"
        },
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
        {
            title: "The Button",
            src: "#the-button"
        },
    ]


    return (
        <section 
            className='fixed top-1/2 left-12 -translate-y-1/2 flex flex-col gap-1 z-10'
            onMouseEnter={() => props.setHover(true)}
            onMouseLeave={() => props.setHover(false)}
        >
            {links.map(e => (
                <a 
                    key={e}
                    href={`${e.src}`} 
                    className='text-white/50 font-bold hover:translate-x-2 transition-all text-xl hover:text-white cursor-none'
                >
                    {e.title}
                </a>
            ))}
        </section>
    )
}