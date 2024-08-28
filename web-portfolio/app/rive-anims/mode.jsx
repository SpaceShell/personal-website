import { useRive, useStateMachineInput } from '@rive-app/react-canvas-lite';
import React from 'react';
import { useState, useEffect } from 'react';

const changeMode = (dark, setDark) => {
    setDark(!dark)
    const DOM = document.querySelector('html');

    if (dark == true) {
        DOM.classList.add('dark');
    } else if (dark == false) {
        DOM.classList.remove('dark');
    }
}

export default function Logo() {
    const { rive, RiveComponent } = useRive({
        src: 'lightdark.riv',
        stateMachines: 'Button State',
        autoplay: true,
    });

    const [dark, setDark] = useState(true);

    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            changeMode(dark, setDark);
        }
    }, [])

    return (
        <RiveComponent
        className='w-10 h-10'
        alt="Change to light or dark mode"
        onClick={() => changeMode(dark, setDark)}
        onTouchStart={() => changeMode(dark, setDark)}
        />
    );
}