import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@relume_io/relume-ui";

type Props = {
  heading: string;
  description: string;
  videoWebm: string;
  videoMp4?: string;
  poster: string;
};

export type Header7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header7 = (props: Header7Props) => {
  const { heading, description, videoWebm, videoMp4, poster } = {
    ...Header7Defaults,
    ...props,
  };

  // Desktop = autoplay pozadinski video
  // Mobile = poster + PLAY dugme; na klik prikazujemo video sa kontrolama
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      // user gesture je odradio klik, pa je play dozvoljen i sa zvukom
      videoRef.current.play().catch(() => {});
    }
  }, [isPlaying]);

  const handlePlayClick = () => setIsPlaying(true);

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

      {/* Pozadina (video ili poster) */}
      <div className="absolute inset-0 z-0">
        {isDesktop ? (
          // DESKTOP: autoplay pozadinski video
          <video
            className="absolute inset-0 aspect-video size-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={poster}
          >
            <source src={videoWebm} type="video/webm" />
            {videoMp4 ? <source src={videoMp4} type="video/mp4" /> : null}
          </video>
        ) : isPlaying ? (
          // MOBILE posle klika: pravi video sa kontrolama
          <video
            ref={videoRef}
            className="absolute inset-0 aspect-video size-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster={poster}
          >
            <source src={videoWebm} type="video/webm" />
            {videoMp4 ? <source src={videoMp4} type="video/mp4" /> : null}
          </video>
        ) : (
          // MOBILE pre klika: poster (slika)
          <img
            src={poster}
            alt=""
            className="absolute inset-0 size-full object-cover"
            loading="eager"
            decoding="sync"
          />
        )}

        {/* Tamni overlay – malo svetliji kad video svira na mobilnom */}
        <div className={`absolute inset-0 ${isDesktop ? "bg-black/50" : isPlaying ? "bg-black/20" : "bg-black/50"}`} />
      </div>

      {/* PLAY dugme – samo na mobilnom i dok video ne svira */}
      {!isDesktop && !isPlaying && (
        <button
          onClick={handlePlayClick}
          aria-label="Pusti video"
          className="md:hidden absolute bottom-6 right-6 z-20 rounded-full bg-white/90 backdrop-blur px-5 py-3 shadow-lg border border-white/60 active:scale-95"
        >
          ▶ Pusti video
        </button>
      )}
    </section>
  );
};

export const Header7Defaults: Props = {
  heading: "Povratite mobilnost i poboljšajte kvalitet života",
  description:
    "Pružamo pomoć pacijentima svih starosnih doba kojima je potrebna rehabilitacija, oporavak od povreda ili hroničnih bolova uz pomoć različith vrsta terapije.",
  // koristi kompresovane fajlove u public/videos/compressed
  videoWebm: "/videos/compressed/hero-720.webm",
  videoMp4: "/videos/compressed/hero-720.mp4", // ako nemaš mp4, obriši ovu liniju i <source type='video/mp4' />
  poster: "/images/hero-poster.webp",
};

export default Header7;
