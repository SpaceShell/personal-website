"use client"

import React from "react";
import { useEffect, useState } from "react";
import { Geologica, Istok_Web, Radio_Canada, Sarabun, Urbanist, Varela } from 'next/font/google'
import { Button } from '@headlessui/react'
import webDevImage from '../public/webdevImage.png'
import computerImage from '../public/computerImage.png'
import Circles from "./circles-anim";

const headerFont = Sarabun({ 
    subsets: ['latin'], 
    weight: ['400']
})

//Starting animation
const letterAnim = () => {
    const singleLetters = document.querySelectorAll('.singleLetters')

    for (let i = 0; i < singleLetters.length; i++) {
        let height = 30;

        singleLetters[i].style.setProperty('--top-anim', height + 'vh')

        let delay;

        if (i < 6) {
            delay = 0;
        } else {
            delay = 1.5;
        }

        singleLetters[i].style.setProperty('--animation-delay', delay + "s")
        singleLetters[i].style.setProperty('--hop-delay', 6 + i * 0.07 + 's')
        singleLetters[i].style.setProperty('--hop-repeat-delay', i * 0.07 + 's')
    }
}

//Letters as individual elements
const SplitText = React.memo(({ str, hover, setHover, introEnded, setIntroEnded }) => {
    return (
        str.split("").map((letter, i) => {
            if (i == 10) {
                return <span aria-hidden="true" key={i} id={letter} className={introEnded ? 
                    hover ? 'repeatHops' : 'lettersOriginal'
                    : 'singleLetters'} onAnimationEnd={
                    e => 
                    {
                        if (e.animationName == "littleJumps" && e.target.innerHTML == "!" && e.elapsedTime > 0) {
                            setIntroEnded(true);
                            setHover(false);
                        }
                    }
                    }>{letter}<br className="sm:hidden"></br></span>
            } else if (i > 10) {
                return <span aria-hidden="true" key={i} id={letter} className={`${introEnded ? 
                    hover ? 'repeatHops' : 'lettersOriginal' 
                    : 'singleLetters'} text-red-700`}onAnimationEnd={
                e => 
                {
                    if (e.animationName == "littleJumps" && e.target.innerHTML == "!" && e.elapsedTime > 0) {
                        setIntroEnded(true);
                        setHover(false);
                    }
                }
                }>{letter}</span>
            } else {
                return <span aria-hidden="true" key={i} id={letter} className={introEnded ? 
                    hover ? 'repeatHops' : 'lettersOriginal' 
                    : 'singleLetters'} onAnimationEnd={
                e => 
                {
                    if (e.animationName == "littleJumps" && e.target.innerHTML == "!" && e.elapsedTime > 0) {
                        setIntroEnded(true);
                        setHover(false);
                    }
                }
                }>{letter}</span>
        }
        })
    );
});

//Full header component
export default function Header() {
    const [hover, setHover] = useState(false);
    const [introEnded, setIntroEnded] = useState(false);

    useEffect(() => {
        letterAnim()
    }, []);

    const repeatHop = () => {
        setHover(true);
    }

    return(
        <h1 className={"font-sarabun md:mt-20 mt-4 px-3 text-6xl font-black z-10 absolute letters"} aria-hidden="true" onMouseEnter={repeatHop}>
            <SplitText str={"Hello, I'm Steve Luis!"} hover={hover} setHover={setHover} introEnded={introEnded} setIntroEnded={setIntroEnded}/>
        </h1>
    )
}