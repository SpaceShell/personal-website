import { useRive } from '@rive-app/react-canvas';
import React from 'react';

export default function Logo() {
    const { rive, RiveComponent } = useRive({
        src: 'logo.riv',
        artboard: 'S Logo - Dark Mode'
    });

    return (
        <RiveComponent
        className='w-10 h-10 invisible dark:visible absolute'
        alt="logo"
        />
    );
}