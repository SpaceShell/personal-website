import { useRive } from '@rive-app/react-canvas-lite';
import React from 'react';
import { useState, useEffect } from 'react';

export default function Mode() {
    const { RiveComponent } = useRive({
        src: 'lightdark.riv',
        stateMachines: 'Button State',
        autoplay: true,
    });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
        return null;
    }

    return(
        <RiveComponent
        className='w-10 h-10'
        alt="Change to light or dark mode"
        />
    );
}