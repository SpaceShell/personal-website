import { useRive } from '@rive-app/react-canvas-lite';
import React from 'react';

export default function Logo() {
    const { RiveComponent } = useRive({
        src: 'lightdark.riv',
        stateMachines: 'Button State',
        autoplay: true,
    });

    return (
        <RiveComponent
        className='w-10 h-10'
        alt="Change to light or dark mode"
        />
    );
}