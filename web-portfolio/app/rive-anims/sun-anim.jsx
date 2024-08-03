import Link from 'next/link';
import { useRive, RuntimeLoader, useStateMachineInput, Layout, Fit } from '@rive-app/react-canvas';
import React from 'react';
import { useRef, useEffect } from 'react';

export default function Sun() {
    const { rive, RiveComponent } = useRive({
        src: 'sun_button.riv',
        stateMachines: "Button State",
        autoplay: true,
    });

    const clickInput = useStateMachineInput(rive, "Button State", "Click");

    const sun = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>
          {
            if (entry.isIntersecting == false) {
                rive && rive.pause();
            } else if (entry.isIntersecting == true) {
                rive && rive.play();
            }
          }
        );
        observer.observe(sun.current);

        return () => {
          observer.disconnect();
        };
      }, [sun, rive]);

    return (
        <Link href="#info" scroll={true} className='w-32 h-32 mx-auto block mb-4 headerText' ref={sun}>
            <RiveComponent
            onClick={() => clickInput && clickInput.fire()}
            className='w-24 h-24 mx-auto cursor-pointer mb-4'
            />
        </Link>
    );
}