"use client"

import React, { useState } from 'react';

export default function InputPhone(props) {
    const [inputValue, setInputValue] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [errorState, setErrorState] = useState(false)

    function updateValue(value) {
        let newValue = value.replace(/[()-\s]/g, "")
        if (/^\d+$/i.test(newValue) && newValue.length <= 10) {
            newValue = newValue.match(/[0-9]{1,3}/g)

            // remove number if user tries to remove parentheses in input box
            if (value.includes("(") && !value.includes(")")) {
                newValue[0] = newValue[0].slice(0, -1)
            }

            // easier to read like this
            let string1 = newValue[0] ? `(${newValue[0]})` : ""
            let string2 = newValue[1] ? ` - ${newValue[1]}` : ""
            let string3 = newValue[2] ? ` - ${newValue[2]}${newValue[3] ? newValue[3] : ""}` : ""

            // finally set values
            setErrorState(false)
            setInputValue(`${string1}${string2}${string3}`)
        } else if (/^\d+$/i.test(newValue) === false) {
            setErrorMessage("Please input numbers!")
            setErrorState(true)
        } else if (newValue.length > 10) {
            setErrorMessage("Phone number can't be any bigger!")
            setErrorState(true)
        }

        // if backspaced all the way set it to empty
        if (value === "") setInputValue(value)
    }

    return (
        <section id='input-phone' className='bg-gradient-to-br from-sky-400 to-purple-400 h-screen grid place-items-center snap-center'>
            <p className={`absolute px-8 py-4 bg-red-200 text-red-500 shadow-md rounded-md transition-all ${errorState ? "opacity-100 -translate-y-20" : "opacity-0 -translate-y-16"}`}>{errorMessage}</p>
            <input
                onMouseEnter={() => props.setHover(true)}
                onMouseLeave={() => props.setHover(false)}
                type="tel" 
                placeholder='(###) - ### - ####' 
                className='cursor-none px-8 py-5 rounded-md shadow-md text-2xl focus:outline-none font-mono w-[19rem]'
                value={inputValue}
                onChange={e => updateValue(e.target.value)}
            />
        </section>
    )
}