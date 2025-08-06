'use client'

import React, { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType } from 'embla-carousel'
import { RxChevronLeft, RxChevronRight } from 'react-icons/rx'

export type VideoSlide = {
  src: string
  poster?: string
}

interface VideoCarouselProps {
  slides: VideoSlide[]
  options?: EmblaOptionsType
}

export default function VideoCarousel({
  slides,
  options = { loop: true, align: 'center' },
}: VideoCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isLoading, setIsLoading] = useState<boolean[]>(() =>
    slides.map(() => true)
  )

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    onSelect()
    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div className="relative w-full max-w-4xl mx-auto my-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Video Galerija
        </h2>
        <p className="text-gray-600">Pogledajte naše najnovije video sadržaje</p>
      </div>

      <div className="relative">
        <div
          className="overflow-hidden rounded-xl shadow-2xl bg-black"
          ref={emblaRef}
        >
          <div className="flex">
            {slides.map((slide, idx) => (
              <div key={idx} className="flex-shrink-0 w-full">
                {/* fiksni 16:9 ratio ako aspect-video ne radi */}
                <div className="relative w-full h-100 pb-[40.25%] bg-gray-900">
                  <video
                    src={slide.src}
                    poster={slide.poster}
                    controls
                    preload="auto"
                    className="absolute top-0 left-0 w-full h-full object-contain bg-black"
                    onError={(e) => {
                      console.error('Video load error:', slide.src)
                      e.currentTarget.style.display = 'none'
                    }}
                    onLoadedMetadata={() => {
                      setIsLoading((prev) => {
                        const next = [...prev]
                        next[idx] = false
                        return next
                      })
                    }}
                  />

                  {isLoading[idx] && idx === selectedIndex && (
                    <div className="absolute inset-0 flex items-center justify-center text-white text-lg bg-gray-800">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📹</div>
                        <div>Video se učitava…</div>
                        <div className="text-sm text-gray-400 mt-1">
                          {slide.src}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {slides.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              className="absolute top-1/2 -left-2 md:-left-4 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-800 p-2 md:p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 z-10 border border-gray-200"
              aria-label="Prethodni video"
            >
              <RxChevronLeft size={20} className="md:w-6 md:h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute top-1/2 -right-2 md:-right-4 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-800 p-2 md:p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 z-10 border border-gray-200"
              aria-label="Sledeći video"
            >
              <RxChevronRight size={20} className="md:w-6 md:h-6" />
            </button>
          </>
        )}

        {slides.length > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => emblaApi?.scrollTo(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  idx === selectedIndex
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Idi na video ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {slides.length > 1 && (
          <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
            {selectedIndex + 1} / {slides.length}
          </div>
        )}
      </div>

      {slides.length > 1 && (
        <div className="mt-4 bg-gray-200 rounded-full h-1 overflow-hidden">
          <div
            className="bg-blue-600 h-full transition-all duration-300 rounded-full"
            style={{ width: `${((selectedIndex + 1) / slides.length) * 100}%` }}
          />
        </div>
      )}
    </div>
  )
}