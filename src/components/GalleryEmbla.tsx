'use client'

import React, { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType } from 'embla-carousel'
import { Button } from '@relume_io/relume-ui'
import { RxChevronLeft, RxChevronRight } from 'react-icons/rx'

type VideoProps = { src: string; poster?: string }

interface GalleryEmblaProps {
  videos?: VideoProps[]
  axis?: 'x' | 'y'
  options?: EmblaOptionsType
}

export default function GalleryEmbla({
  videos = [],               // fallback na prazan niz
  axis = 'x',
  options = { axis, loop: true },
}: GalleryEmblaProps) {
  // Embla hook
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  // Prev/Next buttons
  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])
  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  // Paginacija: prateći index
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) {
      // ako emblaApi još nije inicijalizovan, ne radimo ništa
      return
    }

    // definicija callback-a
    const onSelect = () => {
      const idx = emblaApi.selectedScrollSnap()
      setSelectedIndex(idx)
    }

    // inicijalni poziv
    onSelect()
    // prijava event listener-a
    emblaApi.on('select', onSelect)

    // CLEANUP: *jedino* što vraćamo iz useEffect je ova funkcija
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])  // *ništa* drugo ne vraćamo

  return (
    <section className="px-5 py-10">
      {/* Karusel viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex space-x-4">
          {videos.map((vid, i) => (
            <div key={i} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
              <video
                src={vid.src}
                poster={vid.poster}
                controls
                className="w-full aspect-video object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Strelice */}
      <div className="mt-4 flex justify-center gap-4">
        <Button size="sm" variant="ghost" onClick={scrollPrev}>
          <RxChevronLeft size={20} />
        </Button>
        <Button size="sm" variant="ghost" onClick={scrollNext}>
          <RxChevronRight size={20} />
        </Button>
      </div>

      {/* Paginacija */}
      <div className="mt-2 flex justify-center space-x-2">
        {videos.map((_, idx) => (
          <button
            key={idx}
            className={`h-2 w-2 rounded-full ${
              idx === selectedIndex ? 'bg-black' : 'bg-gray-300'
            }`}
            onClick={() => emblaApi?.scrollTo(idx)}
          />
        ))}
      </div>
    </section>
  )
}
