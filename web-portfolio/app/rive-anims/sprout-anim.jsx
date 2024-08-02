import { useRive, RuntimeLoader } from '@rive-app/react-canvas';
import { useState } from 'react';

export default function Sprout() {
    const [finished, setFinished] = useState(false);

    const { rive, RiveComponent } = useRive({
        src: 'all_flowers.riv',
        artboard: 'Sprout',
        autoplay: false,
        onStop: () => {
            setFinished(true)
        },
    });

  const playAnim = () => {
    if (!finished) {
        rive && rive.play();
    } else {
        rive && rive.reset({artboard: 'Sprout'});
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