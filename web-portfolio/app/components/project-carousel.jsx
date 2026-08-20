import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

export default function ProjectCarousel({image1, image2, image3}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  const goToPrev = () => emblaApi?.scrollPrev()
  const goToNext = () => emblaApi?.scrollNext()

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container h-full">
          <div className="embla__slide w-fit">
            <Image src={image1} alt="" width={500} height={100} className="w-full h-full object-cover"/>
          </div>
          <div className="embla__slide">
            <Image src={image2} alt="" width={500} height={100} className="w-full h-full object-cover"/>
          </div>
          <div className="embla__slide">
             <Image src={image3} alt="" width={500} height={100} className="w-full h-full object-cover"/> 
          </div>
        </div>
      </div>

      <div className='flex justify-center gap-3 mt-5'>
        <button className="embla__prev p-2 border-stone-300 border-2 rounded-full" onClick={goToPrev}>
          <FaChevronLeft fill='oklch(37.3% 0.034 259.733)' />
        </button>
        <button className="embla__next p-2 border-stone-300 border-2 rounded-full" onClick={goToNext}>
          <FaChevronRight fill='oklch(37.3% 0.034 259.733)' />
        </button>
      </div>
    </div>
  )
}