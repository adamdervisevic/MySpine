import { FiCheck } from "react-icons/fi";

type ImageProps = { src: string; alt?: string };
type Props = { heading: string; description: string; image: ImageProps };

export type Layout22Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const values = [
  "Individualni plan terapije za svakog pacijenta",
  "Iskusan visokostrukovni fizioterapeut",
  "Najsavremenije metode i oprema",
  "Holistički pristup oporavku",
];

const stats = [
  { value: "1000+", label: "zadovoljnih pacijenata" },
  { value: "7+", label: "vrsta terapija" },
  { value: "5.0★", label: "ocena na Google-u" },
];

export const Layout22 = (props: Layout22Props) => {
  const { heading, description, image } = { ...Layout22Defaults, ...props };
  return (
    <section
      id="o-nama"
      className="scroll-mt-24 bg-surface px-[5%] py-20 md:py-28 lg:py-32"
    >
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-y-14 md:grid-cols-2 md:gap-x-14 lg:gap-x-20">
          {/* Slika */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -left-5 -top-5 hidden h-28 w-28 rounded-3xl bg-brand-100 md:block" />
              <div className="absolute -bottom-6 -right-6 hidden h-36 w-36 rounded-full bg-accent-400/30 md:block" />
              <div className="relative z-10 overflow-hidden rounded-3xl shadow-soft">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative z-20 mx-auto -mt-10 w-[85%] rounded-2xl bg-white p-5 shadow-card md:mx-0 md:ml-auto">
                <div className="grid grid-cols-3 divide-x divide-gray-100 text-center">
                  {stats.map((s) => (
                    <div key={s.label} className="px-2">
                      <p className="text-xl font-bold text-brand-700 md:text-2xl">
                        {s.value}
                      </p>
                      <p className="mt-1 text-xs leading-tight text-gray-500">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tekst */}
          <div className="order-1 md:order-2">
            <span className="eyebrow">O nama</span>
            <h2 className="mb-6 mt-4 text-4xl font-bold text-ink md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="max-w-prose text-base leading-relaxed text-gray-600 md:text-lg">
              {description}
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <FiCheck className="text-sm" />
                  </span>
                  <span className="text-[15px] text-gray-700">{v}</span>
                </li>
              ))}
            </ul>

            <a href="tel:+38162777566" className="btn-primary mt-9 text-base">
              Zakaži besplatan pregled
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout22Defaults: Props = {
  heading: "Vaš oporavak je naša misija",
  description:
    "Naša ordinacija posvećena je pružanju visokokvalitetne nege i rehabilitacije. Stručni tim, predvođen iskusnim visokostrukovnim fizioterapeutom, koristi najnovije metode i tehnike u terapiji. Pomažemo vam da povratite mobilnost i poboljšate kvalitet života kroz individualni pristup i tretmane prilagođene vašim potrebama.",
  image: { src: "/images/Stefan.webp", alt: "Fizioterapeut u ordinaciji MySpine" },
};

export default Layout22;
