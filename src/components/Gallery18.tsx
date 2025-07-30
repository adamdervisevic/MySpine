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
    <section id="relume">
      <div className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
            }}
          >
            <div className="w-full max-w-4xl mx-auto overflow-hidden">
              <CarouselContent className="ml-0">
                {images.map((image, index) => (
                  <CarouselItem key={index} className="basis-1/2 px-3 md:basis-1/3 md:px-4">
                    <div className="w-full aspect-[9/13] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex md:size-12 lg:size-14" />
              <CarouselNext className="hidden md:flex md:size-12 lg:size-14" />
            </div>
            <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={clsx("relative mx-[3px] inline-block size-2 rounded-full", {
                    "bg-black": current === index + 1,
                    "bg-neutral-darker/40": current !== index + 1,
                  })}
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
      src: "./src/assets/slika1.png",
      alt: "Relume placeholder image 1",
    },
    {
      src: "./src/assets/slika2.png",
      alt: "Relume placeholder image 2",
    },
    {
      src: "./src/assets/slika3.webp",
      alt: "Relume placeholder image 3",
    },
    {
      src: "./src/assets/slika4.jpg",
      alt: "Relume placeholder image 4",
    },
    {
      src: "./src/assets/slika5.webp",
      alt: "Relume placeholder image 5",
    },
    {
      src: "./src/assets/slika6.webp",
      alt: "Relume placeholder image 6",
    },
  ],
};
