"use client"

import React from "react";
import { useEffect, useState } from "react";

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
                    : 'singleLetters'} redText`}onAnimationEnd={
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
        <h1 className={"font-soraExBold tracking-tight md:mt-28 mt-28 text-6xl z-10 absolute letters"} aria-hidden="true" onMouseEnter={repeatHop}>
            <SplitText str={"Hello, I'm Steve Luis!"} hover={hover} setHover={setHover} introEnded={introEnded} setIntroEnded={setIntroEnded}/>
        </h1>
    )
}