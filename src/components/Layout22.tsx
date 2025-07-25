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
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
          </div>
          <div>
            <img src={image.src} className="w-full object-cover" alt={image.alt} />
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
