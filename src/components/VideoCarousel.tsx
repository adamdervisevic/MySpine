'use client';

import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaOptionsType } from 'embla-carousel';
import { RxChevronLeft, RxChevronRight } from 'react-icons/rx';

export type VideoSlide = {
  type: 'local' | 'youtube' | 'vimeo';
  src: string;          // URL ili YouTube/Vimeo ID
  fallback?: string;    
  poster?: string;
  title?: string;
};

interface VideoCarouselProps {
  slides: VideoSlide[];
  options?: EmblaOptionsType;
}

// OPTIMIZOVANA YouTube Facade komponenta - učitava se tek na klik!
const YouTubeFacade = ({ videoId, title }: { videoId: string; title?: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <iframe
          className="w-full h-full max-w-[400px] md:max-w-[450px]"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`}
          title={title || "YouTube video"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  // Prikaži samo thumbnail dok korisnik ne klikne
  return (
    <div 
      className="absolute inset-0 flex items-center justify-center cursor-pointer group"
      onClick={() => setIsLoaded(true)}
    >
      {/* YouTube thumbnail */}
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      
      {/* Play dugme */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg
            className="w-8 h-8 ml-1 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

// Komponenta za Vimeo embed
const VimeoEmbed = ({ videoId, title }: { videoId: string; title?: string }) => (
  <iframe
    className="absolute inset-0 w-full h-full"
    src={`https://player.vimeo.com/video/${videoId}?color=0c88dd&title=0&byline=0&portrait=0`}
    title={title || "Vimeo video"}
    frameBorder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
    loading="lazy"
  />
);

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

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Za YouTube/Vimeo, učitavanje je instant
  useEffect(() => {
    const newLoadingStates = slides.map(slide => slide.type === 'local');
    setIsLoading(newLoadingStates);
  }, [slides]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative w-full max-w-4xl mx-auto my-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Video galerija</h2>
        <p className="text-gray-600">Pogledajte naše vežbe i tretmane</p>
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
                  {/* OPTIMIZOVAN YouTube sa Facade */}
                  {slide.type === 'youtube' && (
                    <YouTubeFacade videoId={slide.src} title={slide.title} />
                  )}

                  {/* Vimeo embed */}
                  {slide.type === 'vimeo' && (
                    <VimeoEmbed videoId={slide.src} title={slide.title} />
                  )}

                  {/* Lokalni video */}
                  {slide.type === 'local' && (
                    <>
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

                      {/* Play overlay (samo za lokalne videe) */}
                      {!hadError[idx] && !isLoading[idx] && !isPlaying[idx] && (
                        <button
                          aria-label="Pusti video"
                          className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 text-gray-900 flex items-center justify-center shadow-lg hover:scale-105 transition"
                          onClick={(e) => {
                            const wrap = (e.currentTarget as HTMLElement).closest('[data-slide-wrap]')!;
                            const video = wrap.querySelector('video') as HTMLVideoElement | null;
                            video?.play().catch(() => {});
                          }}
                        >
                          ▶
                        </button>
                      )}

                      {/* Loading overlay (samo za lokalne videe) */}
                      {isLoading[idx] && (
                        <div className="absolute inset-0 flex items-center justify-center text-white">
                          <div className="text-center opacity-80">
                            <div className="text-4xl mb-2">📹</div>
                            <div className="font-medium">Video se učitava…</div>
                          </div>
                        </div>
                      )}

                      {/* Error overlay (samo za lokalne videe) */}
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
                    </>
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