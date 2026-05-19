"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import type { CarouselApi } from "@relume_io/relume-ui";
import clsx from "clsx";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  images: ImageProps[];
};

export type Gallery18Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Gallery18 = (props: Gallery18Props) => {
  const { images } = {
    ...Gallery18Defaults,
    ...props,
  };

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section id="galerija" className="bg-surface-soft">
      <div className="px-[5%] py-20 md:py-28 lg:py-32">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <span className="eyebrow justify-center">Galerija</span>
            <h2 className="mt-4 text-4xl font-bold text-ink md:text-5xl">
              Naša ordinacija
            </h2>
            <p className="mt-4 text-base text-gray-600 md:text-lg">
              Pogledajte prostor i opremu u kojem sprovodimo terapije.
            </p>
          </div>

          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
            }}
          >
            <div className="mx-auto w-full max-w-5xl overflow-hidden">
              <CarouselContent className="-ml-4">
                {images.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-full pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="group aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-card">
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="hidden border-none bg-white text-ink shadow-card hover:bg-brand-50 md:flex md:size-12 lg:size-14" />
              <CarouselNext className="hidden border-none bg-white text-ink shadow-card hover:bg-brand-50 md:flex md:size-12 lg:size-14" />
            </div>
            <div className="mt-9 flex items-center justify-center md:mt-12">
              {images.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Slika ${index + 1}`}
                  onClick={() => api?.scrollTo(index)}
                  className={clsx(
                    "mx-1 inline-block h-2 rounded-full transition-all",
                    current === index + 1
                      ? "w-6 bg-brand-600"
                      : "w-2 bg-ink/20 hover:bg-ink/40"
                  )}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export const Gallery18Defaults: Props = {
  images: [
    {
      src: "/images/slika1.webp",
      alt: "Relume placeholder image 1",
    },
    {
      src: "/images/slika2.webp",
      alt: "Relume placeholder image 2",
    },
    {
      src: "/images/slika3.webp",
      alt: "Relume placeholder image 3",
    },
    {
      src: "/images/slika4.webp",
      alt: "Relume placeholder image 4",
    },
    {
      src: "/images/slika5.webp",
      alt: "Relume placeholder image 5",
    },
    {
      src: "/images/slika6.webp",
      alt: "Relume placeholder image 6",
    },
    {
      src: "/images/slika7.webp",
      alt: "Relume placeholder image 7",
    },
    {
      src: "/images/slika8.webp",
      alt: "Relume placeholder image 8",
    },
    {
      src: "/images/slika9.webp",
      alt: "Relume placeholder image 9",
    },
    {
      src: "/images/slika10.webp",
      alt: "Relume placeholder image 10",
    },
    {
      src: "/images/slika11.webp",
      alt: "Relume placeholder image 11",
    },
  ],
};