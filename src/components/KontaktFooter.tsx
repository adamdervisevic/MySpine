import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function KontaktFooter() {
  return (
    <section id="kontakt" className="p-5 bg-white border-t">
      <hr className="my-5 border-gray-200" />

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Kontakt Info */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-2xl font-bold text-center mb-6">Kontakt</h2>

            <address className="not-italic space-y-4 text-lg">
              <div>
                <span className="font-semibold">Adresa:</span>
                <p>
                  Knez Mihajlova 46,
                  <br />
                  11300 Smederevo, Srbija
                </p>
              </div>

              <div>
                <span className="font-semibold">Telefon:</span>
                <p>
                  <a
                    href="tel:+38162777566"
                    className="hover:underline hover:text-blue-600 transition"
                  >
                    062 777 566
                  </a>
                </p>
              </div>

              <div>
                <span className="font-semibold">Email:</span>
                <p>
                  <a
                    href="mailto:myspine.smederevo@gmail.com"
                    className="hover:underline hover:text-blue-600 transition"
                  >
                    myspine.smederevo@gmail.com
                  </a>
                </p>
              </div>
            </address>

            {/* Social */}
            <div className="mt-6 flex gap-4 justify-center">
              <a
                href="https://www.facebook.com/profile.php?id=61553204384685"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook profil"
                className="hover:text-blue-600 text-gray-800 text-2xl"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.instagram.com/myspinesmederevo?fbclid=IwAR3YuRI9PBEhATwQ9uJzIeLYllv1sg1mrN7-HTmBtLoOtw_NfIuvp9qTVF4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profil"
                className="hover:text-pink-600 text-gray-800 text-2xl"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/38162777566"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp poruka"
                className="hover:text-green-500 text-gray-800 text-2xl"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Right: Mapa (direktan iframe) */}
          <div className="lg:w-1/2 w-full flex items-center justify-center">
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2837.8467396302817!2d20.92546552511691!3d44.66148283538663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475093c3a97dbf4b%3A0xdeb1a086de3a5819!2sKnez%20Mihajlova%2046%2C%20Smederevo%2011300!5e0!3m2!1sen!2srs!4v1701034000404!5m2!1sen!2srs"
                title="Lokacija ordinacije MySpine"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <a
          href="https://adamdervisevic.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center block text-sm text-gray-400 hover:text-gray-600 transition cursor-pointer"
          style={{ textDecoration: "none" }}
        >
          © {new Date().getFullYear()} by adamdervisevic
        </a>
      </div>
    </section>
  );
}