import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { useState } from "react";

// Lazy Loading komponenta za Google Maps
const LazyMap = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="h-[420px] w-full overflow-hidden rounded-2xl shadow-soft">
      {!showMap ? (
        <button
          type="button"
          className="relative h-full w-full cursor-pointer"
          onClick={() => setShowMap(true)}
        >
          <img
            src="/images/map.webp"
            alt="Lokacija MySpine"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-ink/30">
            <span className="btn-primary text-sm">
              <FiMapPin className="text-base" />
              Klikni za interaktivnu mapu
            </span>
          </div>
        </button>
      ) : (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2837.8467396302817!2d20.92546552511691!3d44.66148283538663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475093c3a97dbf4b%3A0xdeb1a086de3a5819!2sKnez%20Mihajlova%2046%2C%20Smederevo%2011300!5e0!3m2!1sen!2srs!4v1701034000404!5m2!1sen!2srs"
          title="Lokacija ordinacije MySpine"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full"
        />
      )}
    </div>
  );
};

const socials = [
  {
    href: "https://www.facebook.com/profile.php?id=61553204384685",
    label: "Facebook profil",
    icon: <FaFacebook />,
  },
  {
    href: "https://www.instagram.com/myspinesmederevo",
    label: "Instagram profil",
    icon: <FaInstagram />,
  },
  {
    href: "https://wa.me/38162777566",
    label: "WhatsApp poruka",
    icon: <FaWhatsapp />,
  },
];

export default function KontaktFooter() {
  return (
    <footer id="kontakt" className="scroll-mt-24 bg-ink text-white">
      {/* CTA traka */}
      <div className="px-[5%] pt-20 md:pt-28">
        <div className="container">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-12 text-center shadow-soft md:px-14 md:py-16">
            <span className="eyebrow justify-center !text-brand-100">Zakažite termin</span>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold md:text-4xl">
              Prvi pregled je potpuno besplatan
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Pozovite nas i zakažite termin — pomoći ćemo vam da se vratite bezbolnom kretanju.
            </p>
            <a href="tel:+38162777566" className="btn-primary mx-auto mt-8 text-base">
              <FiPhone className="text-lg" />
              062 777 566
            </a>
          </div>
        </div>
      </div>

      {/* Glavni footer */}
      <div className="px-[5%] py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Kontakt info */}
            <div>
              <h3 className="text-2xl font-bold">Kontakt</h3>
              <p className="mt-2 text-white/60">
                Ordinacija za fizikalnu terapiju i rehabilitaciju u Smederevu.
              </p>

              <ul className="mt-8 space-y-5">
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-200">
                    <FiMapPin />
                  </span>
                  <span>
                    Knez Mihajlova 46
                    <br />
                    <span className="text-white/60">11300 Smederevo, Srbija</span>
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-200">
                    <FiPhone />
                  </span>
                  <a
                    href="tel:+38162777566"
                    className="transition-colors hover:text-brand-200"
                  >
                    062 777 566
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-200">
                    <FiMail />
                  </span>
                  <a
                    href="mailto:myspine.smederevo@gmail.com"
                    className="break-all transition-colors hover:text-brand-200"
                  >
                    myspine.smederevo@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-200">
                    <FiClock />
                  </span>
                  <span>
                    Pon – Pet: 08:00 – 20:00
                    <br />
                    <span className="text-white/60">Subota: po dogovoru</span>
                  </span>
                </li>
              </ul>

              <div className="mt-8 flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-lg text-white transition-all hover:-translate-y-0.5 hover:bg-brand-500"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Mapa */}
            <div>
              <LazyMap />
            </div>
          </div>
        </div>
      </div>

      {/* Donja traka */}
      <div className="border-t border-white/10 px-[5%] py-6">
        <div className="container flex flex-col items-center justify-between gap-2 text-sm text-white/50 sm:flex-row">
          <span>
            © {new Date().getFullYear()} MySpine. Sva prava zadržana.
          </span>
          <a
            href="https://adamdervisevic.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white/80"
          >
            Izrada sajta: adamdervisevic
          </a>
        </div>
      </div>
    </footer>
  );
}
