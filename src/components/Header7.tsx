import { useEffect, useRef } from "react";
import { FiPhone, FiArrowDown } from "react-icons/fi";
import { BiSolidStar } from "react-icons/bi";

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
        <div className="flex max-h-[60rem] min-h-svh items-center py-28 md:py-32 lg:py-36">
          <div className="max-w-2xl">
            <span className="eyebrow !text-brand-200">Fizikalna terapija · Smederevo</span>

            <h1 className="mb-6 mt-5 text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {heading}
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              {description}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="tel:+38162777566" className="btn-primary text-base">
                <FiPhone className="text-lg" />
                062 777 566
              </a>
              <a
                href="#o-nama"
                className="btn-ghost text-base text-white hover:bg-white/10"
              >
                Saznaj više
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <BiSolidStar className="text-amber-400" />
                5.0 ocena na Google-u
              </span>
              <span className="hidden h-4 w-px bg-white/25 sm:block" />
              <span>Besplatan prvi pregled</span>
              <span className="hidden h-4 w-px bg-white/25 sm:block" />
              <span>Individualni plan terapije</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indikator */}
      <a
        href="#o-nama"
        aria-label="Skroluj nadole"
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce text-white/70 transition-colors hover:text-white md:block"
      >
        <FiArrowDown className="text-2xl" />
      </a>

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

        {/* Gradijent overlay za citljivost teksta */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-ink/20" />
      </div>
    </section>
  );
};

export const Header7Defaults: Props = {
  heading: "Povratite mobilnost i poboljšajte kvalitet života",
  description:
    "Pružamo pomoć pacijentima svih starosnih doba kojima je potrebna rehabilitacija, oporavak od povreda ili hroničnih bolova uz pomoć različitih vrsta terapije.",
  
  // TVOJI LOKALNI VIDEO FAJLOVI
  videoWebm: "/videos/hero.webm",  // Tvoj WebM video
  videoMp4: "/videos/hero.mp4",    // Tvoj MP4 video za iOS
};

export default Header7;