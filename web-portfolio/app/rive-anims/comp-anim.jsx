import { useRive } from '@rive-app/react-canvas-lite';
import React from 'react';
import { useRef, useEffect } from 'react';

export default function Computer() {
    const { rive, RiveComponent } = useRive({
        src: 'computer.riv',
        stateMachines: "Floats and Mouse",
        autoplay: true,
    });

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
      <div ref={comp} className='hidden lg:block mt-16 mr-20 headerText'>
        <RiveComponent
        className='w-96 h-96 xl:w-[28rem] xl:h-[28rem]'
        />
      </div>
    );
}