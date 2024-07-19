import { useRive, RuntimeLoader } from '@rive-app/react-canvas';
import { useState } from 'react';
import riveWASMResource from '@rive-app/canvas/rive.wasm';

RuntimeLoader.setWasmUrl(riveWASMResource);

export default function Bud() {
    const [finished, setFinished] = useState(false);

    const { rive, RiveComponent } = useRive({
        src: 'all_flowers.riv',
        artboard: 'Budding',
        autoplay: false,
        onStop: () => {
            setFinished(true)
        },
    });

  const playAnim = () => {
    if (!finished) {
        rive && rive.play();
    } else {
        rive && rive.reset({artboard: 'Budding'});
        setFinished(false);
        rive && rive.play()
    }
  }

  return (
    <RiveComponent
      onMouseEnter={playAnim}
      className='flowerAnims'
    />
  );
}