'use client';

import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaOptionsType } from 'embla-carousel';
import { RxChevronLeft, RxChevronRight } from 'react-icons/rx';

export type VideoSlide = {
  src: string;          
  fallback?: string;    
  poster?: string;
};

interface VideoCarouselProps {
  slides: VideoSlide[];
  options?: EmblaOptionsType;
}

export default function VideoCarousel({
  slides,
  options = { loop: true, align: 'center' },
}: VideoCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean[]>(() => slides.map(() => true));
  const [hadError, setHadError] = useState<boolean[]>(() => slides.map(() => false));
  const [isPlaying, setIsPlaying] = useState<boolean[]>(() => slides.map(() => false));

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on('select', onSelect);

    // ✅ cleanup MORA da koristi off(...)
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative w-full max-w-4xl mx-auto my-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Video galerija</h2>
        <p className="text-gray-600">Pogledajte naše najnovije video sadržaje</p>
      </div>

      <div className="relative">
        <div className="overflow-hidden rounded-xl shadow-2xl bg-black" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, idx) => (
              <div key={idx} className="flex-shrink-0 w-full">
                <div
                  className="relative w-full h-[70vh] sm:pb-[56.25%] sm:h-auto bg-black"
                  data-slide-wrap
                >
                  <video
                    key={slide.src}
                    src={slide.src}
                    poster={slide.poster}
                    controls
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-contain bg-black"
                    onPlay={() =>
                      setIsPlaying((p) => {
                        const n = [...p];
                        n[idx] = true;
                        return n;
                      })
                    }
                    onPause={() =>
                      setIsPlaying((p) => {
                        const n = [...p];
                        n[idx] = false;
                        return n;
                      })
                    }
                    onLoadedMetadata={() =>
                      setIsLoading((p) => {
                        const n = [...p];
                        n[idx] = false;
                        return n;
                      })
                    }
                    onError={(ev) => {
                      const videoEl = ev.currentTarget;

                      const fb = slide.fallback;
                      const alreadyOnFallback = fb && videoEl.currentSrc.includes(fb);

                      if (fb && !alreadyOnFallback) {
                        console.warn('Primarni video nije dostupan. Fallback:', fb);
                        videoEl.src = fb;
                        videoEl.load();
                        videoEl.play().catch(() => {});
                        return;
                      }

                      setHadError((p) => {
                        const n = [...p];
                        n[idx] = true;
                        return n;
                      });
                      setIsLoading((p) => {
                        const n = [...p];
                        n[idx] = false;
                        return n;
                      });

                      videoEl.style.display = 'none';
                    }}
                  />

                  {/* ▶ Play overlay (mobilni) */}
                  {!hadError[idx] && !isLoading[idx] && !isPlaying[idx] && (
                    <button
                      aria-label="Pusti video"
                      className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 text-gray-900 flex items-center justify-center shadow-lg hover:scale-105 transition"
                      onClick={(e) => {
                        // ✅ dodali smo parametar e
                        const wrap = (e.currentTarget as HTMLElement).closest('[data-slide-wrap]')!;
                        const video = wrap.querySelector('video') as HTMLVideoElement | null;
                        video?.play().catch(() => {});
                      }}
                    >
                      ▶
                    </button>
                  )}

                  {/* Loading overlay */}
                  {isLoading[idx] && (
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <div className="text-center opacity-80">
                        <div className="text-4xl mb-2">📹</div>
                        <div className="font-medium">Video se učitava…</div>
                        <div className="text-xs text-gray-300 mt-1">{slide.src}</div>
                      </div>
                    </div>
                  )}

                  {/* Error overlay */}
                  {hadError[idx] && (
                    <div className="absolute inset-0 flex items-center justify-center text-white bg-black/70">
                      <div className="text-center">
                        <div className="text-4xl mb-2">⚠️</div>
                        <div className="font-semibold mb-2">Nije moguće učitati video</div>
                        <a
                          href={slide.fallback || slide.src}
                          className="underline text-blue-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Otvori direktno
                        </a>
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
              className="absolute top-1/2 -left-2 md:-left-4 -translate-y-1/2 bg-white/90 text-gray-800 p-2 md:p-3 rounded-full shadow border"
              aria-label="Prethodni video"
            >
              <RxChevronLeft size={20} className="md:w-6 md:h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute top-1/2 -right-2 md:-right-4 -translate-y-1/2 bg-white/90 text-gray-800 p-2 md:p-3 rounded-full shadow border"
              aria-label="Sledeći video"
            >
              <RxChevronRight size={20} className="md:w-6 md:h-6" />
            </button>
          </>
        )}

        {slides.length > 1 && (
          <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
            {selectedIndex + 1} / {slides.length}
          </div>
        )}
      </div>

      {slides.length > 1 && (
        <div className="mt-6 bg-gray-200 rounded-full h-1 overflow-hidden">
          <div
            className="bg-blue-600 h-full transition-all rounded-full"
            style={{ width: `${((selectedIndex + 1) / slides.length) * 100}%` }}
          />
        </div>
      )}
    </div>
  );
}
