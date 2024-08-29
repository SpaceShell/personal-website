"use client"

import { useRive } from '@rive-app/react-canvas-lite';
import React from 'react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function Mode() {
    const { RiveComponent } = useRive({
        src: 'lightdark.riv',
        stateMachines: 'Button State',
        autoplay: true,
    });
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
        return null;
    }

    const changeMode = () => {
        if (theme == 'light') {
            setTheme('dark');
        } else if (theme == 'dark') {
            setTheme('light');
        }
    }

    return (
        <RiveComponent
        className='w-10 h-10'
        alt="Change to light or dark mode"
        onClick={changeMode}
        onTouchStart={changeMode}
        />
    );
}