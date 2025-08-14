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

  const isDesktop = useMediaQuery("(min-width: 768px)");

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

      {/* Pozadinski video - autoplay na svim uređajima */}
      <div className="absolute inset-0 z-0">
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
  videoWebm: "/videos/hero-720.webm",
  // videoMp4: "/videos/hero-720.mp4", // ako nemaš mp4, obriši ovu liniju i <source type='video/mp4' />
  poster: "/images/hero-poster.webp",
};

export default Header7;