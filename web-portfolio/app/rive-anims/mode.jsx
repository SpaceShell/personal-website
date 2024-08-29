"use client"

import { useRive } from '@rive-app/react-canvas-lite';
import React from 'react';
import { useTheme } from 'next-themes';

export default function Mode() {
    const { RiveComponent } = useRive({
        src: 'lightdark.riv',
        stateMachines: 'Button State',
        autoplay: true,
    });
    const { theme, setTheme } = useTheme()

    const changeMode = (theme, setTheme) => {
        if (theme == 'light') {
            setTheme('dark')
        } else if (theme == 'dark') {
            setTheme('light')
        }
    }

    return (
        <div onClick={() => changeMode(theme, setTheme)} onTouchStart={() => changeMode(theme, setTheme)}>
            <RiveComponent
            className='w-10 h-10'
            alt="Change to light or dark mode"
            />
        </div>
    );
}