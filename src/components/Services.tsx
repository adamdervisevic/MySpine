import { Link } from "react-router-dom";
import {
  FiActivity,
  FiClipboard,
  FiTarget,
  FiHeart,
  FiZap,
  FiCircle,
  FiArrowRight,
} from "react-icons/fi";

type Service = {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  highlight?: string;
};

const services: Service[] = [
  {
    title: "Fizioterapeutski pregled",
    description:
      "Kompletna procena stanja, postavljanje dijagnoze i individualni plan terapije.",
    url: "/pregled",
    icon: <FiClipboard />,
    highlight: "Besplatan",
  },
  {
    title: "Fizikalna terapija",
    description:
      "Lečenje povreda, hroničnih bolova i postoperativni oporavak kroz fizikalne procedure.",
    url: "/terapija",
    icon: <FiActivity />,
  },
  {
    title: "Spinalna dekompresija",
    description:
      "Neinvazivna terapija diskus hernije i bolova u kičmenom stubu pomoću DTK uređaja.",
    url: "/spinalna-dekompresija",
    icon: <FiTarget />,
  },
  {
    title: "Dry needling",
    description:
      "Suva iglo­terapija za oslobađanje trigger points i smanjenje mišićnih bolova.",
    url: "/dry-needling",
    icon: <FiZap />,
  },
  {
    title: "Kineziterapija",
    description:
      "Terapija pokretom i ciljanim vežbama za vraćanje pune funkcije pokreta.",
    url: "/kineziterapija",
    icon: <FiCircle />,
  },
  {
    title: "Tecar terapija",
    description:
      "Napredna dielektermijska terapija — ubrzava oporavak tkiva i smanjuje upalu.",
    url: "/tecar",
    icon: <FiActivity />,
  },
  {
    title: "Terapeutske masaže",
    description:
      "Klasične, sportske i parcijalne masaže za opuštanje mišića i bolju cirkulaciju.",
    url: "/masaze",
    icon: <FiHeart />,
  },
];

export default function Services() {
  return (
    <section
      id="usluge"
      className="scroll-mt-24 bg-surface-soft px-[5%] py-20 md:py-28 lg:py-32"
    >
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <span className="eyebrow justify-center">Usluge</span>
          <h2 className="mt-4 text-4xl font-bold text-ink md:text-5xl">
            Naše terapije
          </h2>
          <p className="mt-4 text-base text-gray-600 md:text-lg">
            Pristup koji kombinuje savremene metode rehabilitacije sa
            individualnim planom za svakog pacijenta.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.url}
              target="_blank"
              className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft"
            >
              {s.highlight && (
                <span className="absolute right-4 top-4 inline-flex items-center rounded-full bg-accent-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  {s.highlight}
                </span>
              )}
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-xl text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                {s.icon}
              </span>
              <h3 className="text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 flex-grow text-sm leading-relaxed text-gray-600">
                {s.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-all group-hover:gap-2.5">
                Saznaj više
                <FiArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
