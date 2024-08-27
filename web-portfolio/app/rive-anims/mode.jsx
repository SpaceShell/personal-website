import { useRive } from '@rive-app/react-canvas-lite';
import React from 'react';
import { useState } from 'react';

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
    const { RiveComponent } = useRive({
        src: 'lightdark.riv',
        stateMachines: 'Button State',
        autoplay: true,
    });

    const [dark, setDark] = useState(true);

    return (
        <RiveComponent
        className='w-10 h-10'
        alt="Change to light or dark mode"
        onClick={() => changeMode(dark, setDark)}
        />
    );
}