import { useRive } from '@rive-app/react-canvas';
import React from 'react';

export default function Logo() {
    const { RiveComponent } = useRive({
        src: 'logo.riv',
        artboard: 'S Logo - Light Mode'
    });

    return (
        <RiveComponent
        className='w-10 h-10'
        alt="logo"
        />
    );
}