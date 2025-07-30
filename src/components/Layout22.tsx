import type { ButtonProps } from "@relume_io/relume-ui";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  image: ImageProps;
};

export type Layout22Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout22 = (props: Layout22Props) => {
  const { heading, description, image } = {
    ...Layout22Defaults,
    ...props,
  };
  return (
    <section 
      id="relume" 
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-r from-green-200 via-white to-blue-200">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="mb-6 text-5xl font-bold text-gray-800 md:mb-8 md:text-6xl lg:text-7xl leading-tight">
              {heading}
            </h2>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-gray-800">
              {description}
            </p>
          </div>

          <div>
            <div className="relative">
            <div className="absolute -inset-4 bg-blue-200 rounded-full"></div>
            <div className="overflow-hidden relative z-10 w-full" style={{ borderRadius: "55% 45% 45% 55% / 55% 45% 55% 45%" }}>

              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout22Defaults: Props = {
  heading: "O nama",
  description:
    "Naša ordinacija posvećena je pružanju visoko kvalitetne nege i rehabilitacije pacijentima. Stručni tim, predvođen iskusnim visokostrukovnim fizioterapeutom, koristi najnovije metode i tehnike u terapiji. Naša misija je da vam pomognemo da povratite mobilnost i poboljšate kvalitet života, pružajući individualni pristup i tretmane prilagođene vašim potrebama. Verujemo u holistički pristup nezi, gde svaki pacijent dobija sveobuhvatnu, prilagođenu terapiju koja obezbeđuje optimalni oporavak.",
  image: {
    src: "./src/assets/Stefan.png",
    alt: "Relume placeholder image",
  },
};

export default Layout22;
