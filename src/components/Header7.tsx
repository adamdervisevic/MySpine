import { Navbar2 } from "./Navbar2";

type Props = {
  heading: string;
  description: string;
  video: string;
  videoType: string;
};

export type Header7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header7 = (props: Header7Props) => {
  const { heading, description, video, videoType } = {
    ...Header7Defaults,
    ...props,
  };
  return (
    <section id="relume" className="relative px-[5%]">
      <Navbar2 />
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
      <div className="absolute inset-0 z-0">
        <video className="absolute inset-0 aspect-video size-full object-cover" autoPlay loop muted>
          <source src={video} type={videoType} />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

export const Header7Defaults: Props = {
  heading: "Povratite mobilnost i poboljšajte kvalitet života",
  description:
    "Pružamo pomoć pacijentima svih starosnih doba kojima je potrebna rehabilitacija, oporavak od povreda ili hroničnih bolova uz pomoć različith vrsta terapije.",
  video: "./src/assets/5.mp4",
  videoType: "video/mp4",
};
