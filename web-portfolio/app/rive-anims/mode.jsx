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

    const modeChange = () => {
        if (theme == 'light') {
            setTheme('dark');
        } else if (theme == 'dark') {
            setTheme('light');
        }
    }

    if (!mounted) {
        return null;
    }

    return(
        <RiveComponent
        onClick={modeChange}
        onTouchStart={modeChange}
        className='w-10 h-10'
        alt="Change to light or dark mode"
        />
    );
}