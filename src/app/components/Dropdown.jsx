"use client"

import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import Image from 'next/image';

import Arrow from "@/app/assets/arrow.svg"

function useMenuAnimation(isOpen) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(".arrow", { rotate: isOpen ? 90 : 0 }, { duration: 0.2 });

        animate("ul",
            {
                clipPath: isOpen
                    ? "inset(-25% -25% -25% -25% round 10px)"
                    : "inset(10% 50% 90% 50% round 10px)"
            },
            {
                type: "spring",
                bounce: 0,
                duration: 0.5
            }
        );

        animate(
            "li",
            isOpen
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.5, y: 2 },
            {
                type: "spring",
                damping: 14,
                bounce: 10,
                stiffness: 150,
                delay: isOpen ? stagger(0.1, { startDelay: 0 }) : 0
            }
        );
    }, [isOpen]);

    return scope;
}

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(true);
    const scope = useMenuAnimation(isOpen);

    return (
        <section id="dropdown" className="h-screen snap-center bg-gradient-to-br from-violet-400 to-sky-400 grid place-items-center">
            <nav className="menu" ref={scope}>
                <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex flex-row justify-between w-96 px-8 py-5 bg-white rounded-md shadow-md"
                >
                    <p className="font-semibold">Dropdown</p>
                    <Image
                        src={Arrow}
                        width={20}
                        height={20}
                        className="arrow"
                    />
                </motion.button>
                <ul className="flex flex-col gap-2 mt-2">
                    <li className="shadow-md px-6 py-3 bg-white rounded-md font-semibold hover:bg-neutral-100 cursor-pointer select-none">Item 1 </li>
                    <li className="shadow-md px-6 py-3 bg-white rounded-md font-semibold hover:bg-neutral-100 cursor-pointer select-none">Item 2 </li>
                    <li className="shadow-md px-6 py-3 bg-white rounded-md font-semibold hover:bg-neutral-100 cursor-pointer select-none">Item 3 </li>
                    <li className="shadow-md px-6 py-3 bg-white rounded-md font-semibold hover:bg-neutral-100 cursor-pointer select-none">Item 4 </li>
                    <li className="shadow-md px-6 py-3 bg-white rounded-md font-semibold hover:bg-neutral-100 cursor-pointer select-none">Item 5 </li>
                </ul>
            </nav>
        </section>
    );
}
