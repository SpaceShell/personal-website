"use client"

import { useRive } from '@rive-app/react-canvas-lite';
import React from 'react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const changeMode = (theme, setTheme) => {
    if (theme == 'light') {
        setTheme('dark')
    } else if (theme == 'dark') {
        setTheme('light')
    }
}

export default function Mode() {
    const { RiveComponent } = useRive({
        src: 'lightdark.riv',
        stateMachines: 'Button State',
        autoplay: true,
    });
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <RiveComponent
        className='w-10 h-10'
        alt="Change to light or dark mode"
        onClick={() => changeMode(theme, setTheme)}
        onTouchStart={() => changeMode(theme, setTheme)}
        />
    );
}