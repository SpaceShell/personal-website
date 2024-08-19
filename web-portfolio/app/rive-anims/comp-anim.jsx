import Link from 'next/link';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas-lite';
import React from 'react';
import { useRef, useEffect } from 'react';

export default function Computer() {
    const { rive, RiveComponent } = useRive({
        src: 'computer.riv',
        stateMachines: "Floats and Mouse",
        autoplay: true,
    });

    const clickInput = useStateMachineInput(rive, "Button State", "Click");

    const comp = useRef();

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
        observer.observe(comp.current);

        return () => {
          observer.disconnect();
        };
      }, [comp, rive]);

    return (
        <Link href="#info" scroll={true} className='hidden lg:block mt-16 mr-20 headerText' ref={comp}>
            <RiveComponent
            onClick={() => clickInput && clickInput.fire()}
            className=' w-96 h-96 cursor-pointer'
            />
        </Link>
    );
}