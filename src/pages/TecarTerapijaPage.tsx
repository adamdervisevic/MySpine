import React from "react";
import KontaktFooter from "../components/KontaktFooter";

export default function TecarTerapijaPage() {
  return (
    <>
      <main className="container mx-auto pt-32 px-4 md:px-6 lg:px-8">
        <h1 className="text-center text-4xl md:text-5xl font-bold tracking-tight my-8">Usluge</h1>

        <div className="service-header max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">Šta je tecar energetska tehnologija?</h2>
          <p className="py-2 text-lg leading-relaxed">
            Jedna od najnovijih terapija u fizikalnon medicini i rehabilitaciji, Tecar energija je struja visoke frekvencije koja osciluje između 300 kHz i 1 MHz. Ubrzava „prirodnu regeneraciju“ organskog tkiva. Njegov nizak intenzitet znači da je energija potpuno neinvazivna i 100% prirodna za ljudsko telo.
          </p>

          <p className="py-2 text-lg leading-relaxed">
            Istraživanja sprovedena u poslednjih trideset godina pokazala su da njeni terapeutski efekti prirodno stimulišu regeneraciju tkiva i smanjuju bol.
          </p>

          <p className="py-2 text-lg leading-relaxed">
            Brži funkcionalni oporavak. (Korisni efekti su očigledni nakon samo nekoliko sesija, a poboljšanja se mogu primetiti čak 24 sata nakon tretmana.)
          </p>

          <p className="text-lg leading-relaxed">Tretman je bezbolan i opuštajući.</p>

          <p className="text-lg leading-relaxed">Tretmani su sigurni i imaju visoku terapeutsku efikasnost.</p>

          <p className="text-lg leading-relaxed">
            Promoviše osećaj blagostanja, predisponirajući subjekta na fizičku aktivnost nakon tretmana.
          </p>

          <p className="text-lg leading-relaxed">Brža rehabilitacija.</p>

          <h4 className="py-3 text-lg md:text-xl font-semibold">Koje su prednosti za pacijente?</h4>
          <p className="py-2 text-lg leading-relaxed">Problemi sa mišićima, zglobovima i limfom:</p>

          <p className="py-2 text-lg leading-relaxed">Traumatologija</p>

          <p className="py-2 text-lg leading-relaxed">Reumatologija</p>

          <p className="py-2 text-lg leading-relaxed">Sportska fizioterapija</p>

          <p className="py-2 text-lg leading-relaxed">
            Tecar je posebno koristan za ublažavanje bolova i protiv zapaljenja. Koristi se za lečenje akutnih ili hroničnih stanja u mišićima i zglobovima.
          </p>

          <p className="py-2 text-lg leading-relaxed">
            Tehnologija pomaže da se prekine začarani krug bola, upale i ukočenosti. Pomaže kod drenaže izliva, poboljšava pokretljivost zglobova i podstiče proces zarastanja. Zauzvrat, ovo će smanjiti vreme oporavka i ubrzati povratak normalnim aktivnostima.
          </p>
        </div>
      </main>

      <KontaktFooter />
    </>
  );
}
