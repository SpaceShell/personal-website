import Link from 'next/link';
import { useRive, RuntimeLoader, useStateMachineInput, Layout, Fit } from '@rive-app/react-canvas';
import riveWASMResource from '@rive-app/canvas/rive.wasm';

RuntimeLoader.setWasmUrl(riveWASMResource);

export default function Sun() {
    const { rive, RiveComponent } = useRive({
        src: 'sun_button.riv',
        stateMachines: "Button State",
        autoplay: true,
    });

    const clickInput = useStateMachineInput(rive, "Button State", "Click");

    return (
        <Link href="#info" scroll={true} className='w-32 h-32 mx-auto block mb-4'>
            <RiveComponent
            onClick={() => clickInput && clickInput.fire()}
            className='w-32 h-32 mx-auto cursor-pointer mb-4'
            />
        </Link>
    );
}