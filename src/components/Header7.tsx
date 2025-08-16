import { useMediaQuery } from "@relume_io/relume-ui";
import { useEffect, useRef } from "react";

type Props = {
  heading: string;
  description: string;
  videoWebm: string;
  videoMp4: string;
};

export type Header7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header7 = (props: Header7Props) => {
  const { heading, description, videoWebm, videoMp4 } = {
    ...Header7Defaults,
    ...props,
  };

  const isDesktop = useMediaQuery("(min-width: 768px)");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Forsira play na iOS uređajima
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      
      const attemptPlay = () => {
        video.play().catch(error => {
          console.log("Autoplay sprečen:", error);
        });
      };

      video.addEventListener('canplay', attemptPlay);
      video.addEventListener('loadeddata', attemptPlay);
      
      // Pokušaj odmah
      attemptPlay();

      return () => {
        video.removeEventListener('canplay', attemptPlay);
        video.removeEventListener('loadeddata', attemptPlay);
      };
    }
  }, []);

  return (
    <section id="relume" className="relative px-[5%]">
      {/* Tekst */}
      <div className="container relative z-10">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-7xl">
              {heading}
            </h1>
            <p className="text-text-alternative md:text-md">{description}</p>
          </div>
        </div>
      </div>

      {/* Pozadinski video - LOKALNI FAJLOVI */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 aspect-video size-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
        >
          {/* MP4 prvi za iOS kompatibilnost */}
          <source src={videoMp4} type="video/mp4" />
          {/* WebM za moderne browsere */}
          <source src={videoWebm} type="video/webm" />
          
          Vaš browser ne podržava video tag.
        </video>

        {/* Tamni overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

export const Header7Defaults: Props = {
  heading: "Povratite mobilnost i poboljšajte kvalitet života",
  description:
    "Pružamo pomoć pacijentima svih starosnih doba kojima je potrebna rehabilitacija, oporavak od povreda ili hroničnih bolova uz pomoć različith vrsta terapije.",
  
  // TVOJI LOKALNI VIDEO FAJLOVI
  videoWebm: "/videos/hero.webm",  // Tvoj WebM video
  videoMp4: "/videos/hero.mp4",    // Tvoj MP4 video za iOS
};

export default Header7;